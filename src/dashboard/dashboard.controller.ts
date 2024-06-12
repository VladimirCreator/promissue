/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Express
import { Response } from "express"

// MARK: Nest
import { Controller, Get, Res } from "@nestjs/common"

// #endregion

// #region -Vladimir’s

// MARK: Services
import { IssueService } from "src/issue/issue.service"
import { CommentaryService } from "src/commentary/commentary.service"

// MARK: Guards

// #endregion

@Controller("dashboard")
export class DashboardController {
	public constructor(
		private readonly issues: IssueService,
		private readonly commentaries: CommentaryService
	) {}

	// #region Methods

	@Get()
	public async root(@Res() response: Response) {
		const [issues, commentaries] = await Promise.all([
			this.issues.read(),
			this.commentaries.all
		])

		response.render("dashboard", { issues, commentaries })
	}

	// #endregion
}
