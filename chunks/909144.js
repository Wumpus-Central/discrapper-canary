"use strict";
n.d(t, { V: () => s });
let r = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
    i = new Set([
        "ae",
        "ar",
        "arc",
        "bcc",
        "bqi",
        "ckb",
        "dv",
        "fa",
        "glk",
        "he",
        "ku",
        "mzn",
        "nqo",
        "pnb",
        "ps",
        "sd",
        "ug",
        "ur",
        "yi",
    ]);
function s(e) {
    if (Intl.Locale) {
        let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
        if (n) return "rtl" === n.direction;
        if (t.script) return r.has(t.script);
    }
    let t = e.split("-")[0];
    return i.has(t);
}
