/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Nest
import { Injectable } from "@nestjs/common"

// MARK: Sequelize
import { InjectModel } from "@nestjs/sequelize"

// #endregion

// #region -Vladimir’s

// MARK: DTOs
import { CreateCommentaryDto } from "./dto/create-commentary.dto"
import { UpdateCommentaryDto } from "./dto/update-commentary.dto"

// MARK: Entities
import { Commentary } from "./entities/commentary.entity"

// #endregion

/**
 * @author
 * @version 0.1.0
 * @since 0.1.0
 */
@Injectable()
export class CommentaryService {
	// #region Getters & Setters

	public get all() {
		return this.commentaries.findAll()
	}

	// #endregion

	public constructor(
		@InjectModel(Commentary) private commentaries: typeof Commentary
	) {}

	//	public create(createCommentaryDto: CreateCommentaryDto) {
	//		return "This action adds a new commentary"
	//	}
	//
	//	public read(id?: number) {
	//		if (id) {
	//			return `This action returns a #${id} commentary`
	//		}
	//		return `This action returns all commentary`
	//	}
	//
	//	public update(id: number, updateCommentaryDto: UpdateCommentaryDto) {
	//		return `This action updates a #${id} commentary`
	//	}
	//
	//	public remove(id: number) {
	//		return `This action removes a #${id} commentary`
	//	}
}
