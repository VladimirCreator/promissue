/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Nest
import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"

// #endregion

// #region -Vladimir’s

// MARK: Services
import { ContributorService } from "./contributor.service"

// MARK: Controllers
import { ContributorController } from "./contributor.controller"

// MARK: Entities
import { Contributor } from "./entities/contributor.entity"

// #endregion

@Module({
	providers: [ContributorService],
	exports: [ContributorService],
	imports: [SequelizeModule.forFeature([Contributor])],
	controllers: [ContributorController]
})
export class ContributorModule {}
