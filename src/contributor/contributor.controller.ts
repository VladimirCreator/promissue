/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Nest
import {
	// ...
	Controller,
	// ...
	Post,
	// ...
	Body
} from "@nestjs/common"

// #endregion

// #region -Vladimir’s

// MARK: Services
import { ContributorService } from "./contributor.service"

// #endregion

@Controller("contributor")
export class ContributorController {
	public constructor(private readonly contributors: ContributorService) {}

	// #region Methods

	@Post()
	public async create(@Body() createContributorDto: any) {
		return await this.contributors.create(createContributorDto)
	}

	// #endregion
}
