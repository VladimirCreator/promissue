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
import { Contributor } from "./entities/contributor.entity"

// #endregion

@Injectable()
export class ContributorService {
	// #region Getters & Setters

	public get count(): Promise<number> {
		return this.contributors.count()
	}

	// #endregion

	public constructor(
		@InjectModel(Contributor) private readonly contributors: typeof Contributor
	) {}

	// #region Methods

	public all() {
		return this.contributors.findAll()
	}

	public create(createContributorDto: any) {
		return this.contributors.create(createContributorDto)
	}

	// #endregion
}
