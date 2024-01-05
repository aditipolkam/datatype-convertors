export function bufferToUtf8String(buffer: Uint8Array) {
    return Buffer.from(buffer).toString('utf-8');
}

export function utf8StringToBuffer(hexString: string) {
    return Buffer.from(hexString, 'utf-8');
}

export function bufferToHexString(buffer: Uint8Array) {
    return Buffer.from(buffer).toString('hex');
}

export function hexStringToBuffer(hexString: string) {
    return Buffer.from(hexString, 'hex');
}