import { beforeEach, describe, expect, it } from "vitest";
import seed from "./seed";
import client from "./client";

describe("check env var's", () => {
  beforeEach(async () => {
    await client.user.deleteMany();

    await seed();
  });

  it("should return expected db url", () => {
    expect(process.env.DATABASE_URL).toBe(
      "postgresql://postgres:postgres@localhost:10101/postgres"
    );
  });

  it("should insert a user", async () => {
    const user = await client.user.create({
      data: {
        id: 3,
        name: "billy",
        email: "billy@gmail.com",
      },
    });

    expect(user.name).toEqual("billy");
  });

  it("should return users", async () => {
    const users = await client.user.findMany();

    console.log(users);

    expect(users.length).toEqual(2);
  });
});
