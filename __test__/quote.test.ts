import { quote } from "../quote.ts";
import { assertEquals } from "./deps.ts";

Deno.test("quote", async (t) => {
  await t.step("simple functionality test", () => {
    const valToQuote = "foobar";
    const quotedVal = quote`This will be "foobar": ${valToQuote}`;

    assertEquals(quotedVal, `This will be "foobar": "foobar"`);
  });
});
