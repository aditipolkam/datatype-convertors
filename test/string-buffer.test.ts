import { bufferToHexString } from "../src";

test('convert buffer to hex string', () => {
    const result = bufferToHexString(new Uint8Array([0, 1, 2, 3, 4, 5]));
    expect(result).toBe(5);
});