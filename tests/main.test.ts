import { add } from "../src/main.ts";
import { assertEquals } from "@std/assert";

Deno.test(function addTest() {
	assertEquals(add(2, 3), 5);
});
