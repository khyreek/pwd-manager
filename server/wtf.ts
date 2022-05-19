import forge from "node-forge";

enum NodeForgeAESModes {
    CBC = "AES-CBC",
    CTR = "AES-CTR",
}

const precision = 24;
// const key = forge.random.getBytesSync(precision);
// const iv = forge.random.getBytesSync(precision);

const key = "pppppppppppppppppppppppp";
const iv = "asdasdasdasdasdasdasdasd";

function encrize(toEncrypt: string): {
    encryptedString: string;
    encrypted: forge.util.ByteStringBuffer;
} {
    const cipher = forge.cipher.createCipher(NodeForgeAESModes.CBC, key);
    cipher.start({ iv: iv });
    cipher.update(forge.util.createBuffer(toEncrypt));
    cipher.finish();

    const encrypted = cipher.output;
    const encryptedString = cipher.output.toHex();

    return { encryptedString, encrypted };
}

function dec(
    encrypted: forge.util.ByteStringBuffer,
    encryptedString: string
): string {
    const decipher = forge.cipher.createDecipher("AES-CBC", key);
    decipher.start({ iv: iv });
    decipher.update(encrypted);
    decipher.finish();

    return decipher.output.data;
}
