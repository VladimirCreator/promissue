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
	Body
} from "@nestjs/common"

// #endregion

// #region -Vladimir’s

// MARK: DTOs
import { CreateIssueDto } from "./dto/create-issue.dto"
import { UpdateIssueDto } from "./dto/update-issue.dto"

// MARK: Services
import { IssueService } from "./issue.service"

// #endregion

@Controller("issue")
export class IssueController {
	public constructor(private readonly issueService: IssueService) {}

	// #region Methods

	@Post()
	public async create(@Body() createIssueDto: any) {
		return await this.issueService.create(createIssueDto)
	}

	/*@Get()
	findAll() {
		return this.issueService.findAll()
	}

	@Get(":id")
	findOne(@Param("id") id: string) {
		return this.issueService.findOne(+id)
	}

	@Patch(":id")
	update(@Param("id") id: string, @Body() updateIssueDto: UpdateIssueDto) {
		return this.issueService.update(+id, updateIssueDto)
	}

	@Delete(":id")
	remove(@Param("id") id: string) {
		return this.issueService.remove(+id)
	}*/

	// #endregion
}
