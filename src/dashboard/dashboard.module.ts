/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Nest
import { Module } from "@nestjs/common"

// #endregion

// #region -Vladimir’s

// MARK: Controllers
import { DashboardController } from "./dashboard.controller"

// MARK: Modules
import { ContributorModule } from "src/contributor/contributor.module" // The module is used to make issue module work.
import { IssueModule } from "src/issue/issue.module" // The module is used to list issues a user created.
import { CommentaryModule } from "src/commentary/commentary.module" // The module is used to list recent commentaries.

// #endregion

@Module({
	controllers: [DashboardController],
	imports: [ContributorModule, IssueModule, CommentaryModule]
})
export class DashboardModule {}
