import { dedent } from "../dedent.ts";
import { assertEquals } from "./deps.ts";

Deno.test("dedent", async (t) => {
  await t.step("strips leading whitespace", () => {
    const res = dedent` strips leading whitespace`;

    assertEquals(res, "strips leading whitespace");
  });

  await t.step("strips leading space before newlines", () => {
    const res = dedent` \n\n\nstrips leading whitespace before newlines`;

    assertEquals(res, "\n\n\nstrips leading whitespace before newlines");
  });
});
