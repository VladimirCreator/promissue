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

// MARK: Entities
import { Subject } from "./entities/subject.entity"
import { Issue } from "src/issue/entities/issue.entity"
import { Contributor } from "src/contributor/entities/contributor.entity"

// #endregion

@Injectable()
export class SubjectService {
	public get count() {
		return this.subjects.count()
	}

	public get elements() {
		return this.subjects.findAll()
	}

	public get all() {
		return this.subjects.findAll({
			include: [
				{
					model: Issue,
					include: [
						{
							model: Contributor
						}
					]
				}
			],
			nest: true,
			raw: true
		})
	}

	public constructor(
		@InjectModel(Subject) private readonly subjects: typeof Subject
	) {}

	// #region Methods

	public create(createSubjectDto: any) {
		return this.subjects.create(createSubjectDto)
	}

	// #endregion
}
