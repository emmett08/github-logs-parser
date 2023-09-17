import { parse } from "./parser";

describe("GITHUBLOGS Parser", () => {
    test("it should parse a simple entry", () => {
        const context = parse("Adolfo Builes <builes.adolfo@gmail.com>\n");
        expect(context).not.toBeNull();
    });

    test("it should parse a paired email entry with two names", () => {
        const context = parse("John Doe and Jane Doe <pair+johndoe+janedoe@demo.uk>\n");
        expect(context).not.toBeNull();
    });

    test("it should parse a github entry", () => {
        const context = parse("John Doe <12345+johndoe@users.noreply.github.com>\n");
        expect(context).not.toBeNull();
    });

    test("it should parse a paired email entry", () => {
        const context = parse("John Doe, Jane Doe, and Mary Doe <pair+john.doe+jane.doe+mary.doe@demo.uk>\n");
        expect(context).not.toBeNull();
    });

});
