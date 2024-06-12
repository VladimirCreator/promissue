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
import {
	// ...
	Controller,
	Get,
	Post,
	// ...
	Body,
	// ...
	Res,
	// ...
	Logger
} from "@nestjs/common"
import { ConfigService } from "@nestjs/config"

// #endregion

// #region -Vladimir’s

// MARK: Services
import { IssueService } from "./issue/issue.service"
import { ContributorService } from "./contributor/contributor.service"
import { SubjectService } from "./subject/subject.service"

// #endregion

// MARK: -Public API Reference Documentation
/** .
 *
 * @author Vladimir Leonidovich
 * @version 0.1.0
 * @since 0.1.0
 */
@Controller()
export class MasterController {
	// #region Properties

	readonly #logger = new Logger(MasterController.name)

	// #endregion

	public constructor(
		private readonly environment: ConfigService,
		private readonly issues: IssueService,
		private readonly contributors: ContributorService,
		private readonly subjects: SubjectService
	) {
		this.#logger.verbose("MasterController is instantiated")
	}

	// #region Methods

	// MARK:
	@Get()
	public async html(@Res() response: Response) {
		const name = this.environment.get("AUTHOR_NAME")
		const uriToAuthor = this.environment.get("AUTHOR_URI")
		const title = this.environment.get("PAGE_TITLE")
		const github = this.environment.get("PAGE_GITHUB")

		const subjects = await this.subjects.all
		const subjectsCount = await this.subjects.count

		const issuesCount = await this.issues.count

		const contributors = (await this.contributors.all()).map(el =>
			el.get({ plain: true })
		)
		const contributorsCount = await this.contributors.count

		this.#logger.debug(
			"MasterController received received the following subjects from a database:",
			subjects
		)
		this.#logger.debug(
			`MasterController received received ${subjects.length} subjects from a database:`
		)

		// [ ](refactor): I am running out of time on GitHub Codespaces so I just make this work. The code is awful I know!
		const data = {}
		subjects.forEach(subject => {
			// @ts-expect-error
			if (!data[subject.name]) {
				// @ts-expect-error
				data[subject.name] = []
			}
			// @ts-expect-error
			data[subject.name].push(subject.issues)
		})
		this.#logger.debug("CRIGNE", data)

		response.render("index", {
			name,
			uriToAuthor,
			title,
			github,
			issues: data,
			issuesCount,
			contributors,
			contributorsCount,
			subjects: (await this.subjects.elements).map(el =>
				el.get({ plain: true })
			),
			subjectsCount
		})
	}

	// MARK: Receive an issue from a contributor and save it to a database
	@Post()
	public async contribute(
		@Res() response: Response,
		@Body() createIssueDto: any
	) {
		this.#logger.debug(
			"MasterController is received the following issue:",
			createIssueDto
		)

		const createdIssue = await this.issues.create({
			...createIssueDto,
			contributorId: 0
		})

		this.#logger.debug(
			"MasterController is saved the following object to a databse:",
			createdIssue
		)
		response.redirect("/")
	}

	// #endregion
}
