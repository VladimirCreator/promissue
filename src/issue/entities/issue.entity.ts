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
	BelongsTo
} from "sequelize-typescript"

// #endregion

// #region -Vladimir’s

// MARK: Entities
import { Contributor } from "src/contributor/entities/contributor.entity"
import { Commentary } from "src/commentary/entities/commentary.entity"

// #endregion

@Table({
	underscored: true,
	paranoid: true
})
export class Issue extends Model {
	@Column
	heading: string

	@Column
	text: string

	@Column
	reactions: number

	@BelongsTo(() => Contributor, "contributorId")
	contributor: Contributor

	@HasMany(() => Commentary)
	commentaries: Commentary[]
}
