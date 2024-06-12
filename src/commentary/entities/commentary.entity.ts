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
	BelongsTo,
	// ...
	ForeignKey
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
export class Commentary extends Model {
	@Column
	contents: string

	@ForeignKey(() => Issue)
	issueId: number

	@BelongsTo(() => Issue)
	issue: Issue
}
