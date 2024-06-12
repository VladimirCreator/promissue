/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Sequelize
import {
	// ...
	Table,
	Column,
	// ...
	Model,
	// ...
	HasMany,
	CreatedAt,
	UpdatedAt
} from "sequelize-typescript"

// #endregion

// #region -Vladimir’s

// MARK: Entities
import { Issue } from "src/issue/entities/issue.entity"

// #endregion

@Table({
	underscored: true,
	paranoid: true
})
export class Subject extends Model {
	@Column
	name: string

	@CreatedAt
	createdAt: Date

	@UpdatedAt
	updatedAt: Date

	@HasMany(() => Issue, "subjectId")
	issues: Issue[]
}
