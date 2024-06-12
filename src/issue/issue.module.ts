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
import { IssueService } from "./issue.service"

// MARK: Controllers
import { IssueController } from "./issue.controller"

// MARK: Entities
import { Issue } from "./entities/issue.entity"

// #endregion

@Module({
	controllers: [IssueController],
	providers: [IssueService],
	imports: [SequelizeModule.forFeature([Issue])],
	exports: [IssueService]
})
export class IssueModule {}
