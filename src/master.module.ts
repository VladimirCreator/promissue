/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Nest
import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { SequelizeModule } from "@nestjs/sequelize"

// #endregion

// #region -Vladimir’s

// MARK: Modules
import { DashboardModule } from "./dashboard/dashboard.module" // The module is used to allow accessing /dashboard.
import { IssueModule } from "./issue/issue.module" // The module is used to provide statistics.
import { ContributorModule } from "./contributor/contributor.module" // The module is used to provide statistics.
import { SubjectModule } from "./subject/subject.module" // The module is used to provide statistics.

// MARK: Services
import { MasterService } from "./master.service"

// MARK: Controllers
import { MasterController } from "./master.controller"

// #endregion

// MARK: -Public API Reference Documentation
/** .
 *
 * @author Vladimir Leonidovich
 * @version 0.1.0
 * @since 0.1.0
 */
@Module({
	controllers: [MasterController],
	providers: [MasterService],
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			cache: true
		}),
		SequelizeModule.forRootAsync({
			useFactory: (environment: ConfigService) => {
				const dialect = environment.get("DATABASE_DIALECT")
				const host = environment.get("DATABASE_HOSTNAME")
				const port = environment.get("DATABASE_PORT")
				const username = environment.get("DATABASE_USERNAME")
				const password = environment.get("DATABASE_PASSWORD")
				const database = environment.get("DATABASE_NAME")

				return {
					dialect,
					host,
					port,
					username,
					password,
					database,
					autoLoadModels: true,
					synchronize: true
					//storage: "local.sqlite"
				} as const
			},
			inject: [ConfigService]
		}),
		DashboardModule,
		IssueModule,
		ContributorModule,
		SubjectModule
	]
})
export class MasterModule {}
