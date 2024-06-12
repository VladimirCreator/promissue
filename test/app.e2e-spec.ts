/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (C) 2024 Vladimir Leonidovich. All rights reserved.
 */

// #region -Dependances

// MARK: Nest
import { INestApplication } from "@nestjs/common"
import { Test, TestingModule } from "@nestjs/testing"

// MARK: supertest
import * as request from "supertest"

// #endregion

// #region -Vladimir’s

// MARK: Modules
import { MasterModule } from "./../src/master.module"

// #endregion

describe("AppController (e2e)", () => {
	let app: INestApplication

	// MARK: Setup
	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [MasterModule]
		}).compile()

		app = moduleFixture.createNestApplication()
		await app.init()
	})

	// MARK: Test 1
	it("/ (GET)", () => {
		return request(app.getHttpServer())
			.get("/")
			.expect(200)
			.expect("Hello World!")
	})
})
