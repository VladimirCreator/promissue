/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Nest
import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"

// #endregion

// #region -Vladimir’s

// MARK: DTOs
import { CreateIssueDto } from "./dto/create-issue.dto"
import { UpdateIssueDto } from "./dto/update-issue.dto"

// MARK: Entities
import { Issue } from "./entities/issue.entity"

// #endregion

// MARK: -Public API Reference Documentation
@Injectable()
/** .
 *
 * @author
 * @version 0.1.0
 * @since 0.1.0
 */
export class IssueService {
	public get count() {
		return this.issues.count()
	}

	public constructor(@InjectModel(Issue) private issues: typeof Issue) {}

	// #region Methods

	public create(createIssueDto: CreateIssueDto) {
		return this.issues.create({
			...createIssueDto,
			// @ts-expect-error
			subjectId: parseInt(createIssueDto["subject"])
		})
	}

	public read(id?: number) {
		if (id) {
			return this.issues.findOne({ where: { id } })
			//return `This action returns a #${id} issue`
		}
		return this.issues.findAll()
		//return `This action returns all issue`
	}

	public update(id: number, updateIssueDto: UpdateIssueDto) {
		return `This action updates a #${id} issue`
	}

	public async remove(id: number) {
		const issue = await this.read(id)
		if (Array.isArray(issue)) {
		} else {
			await issue?.destroy()
		}
		//return `This action removes a #${id} issue`
	}

	// #endregion
}
