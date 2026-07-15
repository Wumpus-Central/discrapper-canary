"use strict";
function i(e) {
    return `<@$${e}>`;
}
n.d(t, { Dx: () => a, KW: () => i, P7: () => r });
let r = /^<@\$(\d+)>/,
    a = RegExp(r.source.replace(/^\^/, ""), "g");
