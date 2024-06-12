/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Node
import { join } from "node:path"

// MARK: Nest
import { NestFactory } from "@nestjs/core"
import { NestExpressApplication } from "@nestjs/platform-express"
import { ConfigService } from "@nestjs/config"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"

// MARK: Handlebars
import { engine } from "express-handlebars"

// #endregion

// #region -Vladimir’s

// MARK: Modules
import { MasterModule } from "./master.module"

// #endregion

//MARK: -bootstrap
async function bootstrap(): Promise<void> {
	const master = await NestFactory.create<NestExpressApplication>(MasterModule)
	const environment = master.get(ConfigService)

	master.useStaticAssets(join(__dirname, "..", "public"))
	master.engine(
		".hbs",
		engine({
			defaultLayout: "master",
			extname: ".hbs"
		})
	)
	master.set("view engine", ".hbs")
	master.set("views", join(__dirname, "..", "resources"))

	// MARK: Swagger
	const configuration = new DocumentBuilder()
		.setTitle("Promissue API")
		.setVersion("1.0")
		.build()
	const document = SwaggerModule.createDocument(master, configuration)

	SwaggerModule.setup("api", master, document)

	// MARK: ...
	const port = environment.get("MASTER_PORT")

	await master.listen(port)
}

bootstrap()
