/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Nest
import {
	Controller,
	Get
} from "@nestjs/common"

// #endregion

// #region -Vladimir’s

// MARK: DTOs
import { CreateCommentaryDto } from "./dto/create-commentary.dto"
import { UpdateCommentaryDto } from "./dto/update-commentary.dto"

// MARK: Services
import { CommentaryService } from "./commentary.service"

// #endregion

@Controller("commentary")
export class CommentaryController {
	public constructor(private readonly commentaries: CommentaryService) {}

	//@Post()
	//public create(@Body() createCommentaryDto: CreateCommentaryDto) {
	//	return this.commentaries.create(createCommentaryDto)
	//}

	@Get()
	public async root() {
		return await this.commentaries.all
	}

	//	@Get(":id")
	//	public findOne(@Param("id") id: string) {
	//		return this.commentaries.findOne(+id)
	//	}
	//
	//	@Patch(":id")
	//	public update(
	//		@Param("id") id: string,
	//		@Body() updateCommentaryDto: UpdateCommentaryDto
	//	) {
	//		return this.commentaries.update(+id, updateCommentaryDto)
	//	}
	//
	//	@Delete(":id")
	//	public remove(@Param("id") id: string) {
	//		return this.commentaries.remove(+id)
	//	}
}
