/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Nest
import { Test, TestingModule } from "@nestjs/testing"

// #endregion

// #region -Vladimir’s

// MARK: Services
import { IssueService } from "./issue.service"

// MARK: Controllers
import { IssueController } from "./issue.controller"

// #endregion

describe("IssueController", () => {
	let controller: IssueController

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [IssueController],
			providers: [IssueService]
		}).compile()

		controller = module.get<IssueController>(IssueController)
	})

	it("should be defined", () => {
		expect(controller).toBeDefined()
	})
})
