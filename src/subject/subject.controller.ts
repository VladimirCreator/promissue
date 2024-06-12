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
import { SubjectService } from "./subject.service"

// #endregion

@Controller("subject")
export class SubjectController {
	public constructor(private readonly subjects: SubjectService) {}

	// #region Methods

	@Post()
	public async create(@Body() createSubjectDto: any) {
		return await this.subjects.create(createSubjectDto)
	}

	// #endregion
}
