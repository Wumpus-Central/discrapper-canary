"use strict";
function n(e) {
    return e.every((e) => "number" == typeof e && !isNaN(e));
}
function r(e, t) {
    let n = t.indexOf(".");
    return n > -1 ? r(e[t.slice(0, n)], t.slice(n + 1)) : e[t];
}
function i(e) {
    return e.every((e) => "number" == typeof e);
}
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.isHeicSignatureIncluded =
        t.isAvifStringIncluded =
        t.isFileContaineJfiforExifHeader =
        t.isFlvStringIncluded =
        t.isftypStringIncluded =
        t.findMatroskaDocTypeElements =
        t.fetchFromObject =
        t.getFileChunk =
            void 0),
    (t.getFileChunk = function (e, t = 32) {
        let r = e instanceof ArrayBuffer ? new Uint8Array(e) : e,
            a = [];
        if ((Array.isArray(e) && i(e)) || e instanceof ArrayBuffer || e instanceof Uint8Array)
            a = Array.from(r.slice(0, t));
        else
            throw TypeError(
                `Expected the \`file\` argument to be of type \`Array<number>\`, \`Uint8Array\`, or \`ArrayBuffer\`, got \`${typeof e}\``,
            );
        if (!n(a)) throw TypeError("File content contains illegal values");
        return a;
    }),
    (t.fetchFromObject = r),
    (t.findMatroskaDocTypeElements = function (e) {
        let t = "webm",
            n = "matroska",
            r = e.map((e) => String.fromCharCode(e)).join("");
        return r.includes(t) ? "webm" : r.includes(n) ? "mkv" : void 0;
    }),
    (t.isftypStringIncluded = function (e) {
        let t = [102, 116, 121, 112];
        for (let n = 0; n < e.length - t.length; n++) {
            let r = !0;
            for (let i = 0; i < t.length; i++)
                if (e[n + i] !== t[i]) {
                    r = !1;
                    break;
                }
            if (r) return !0;
        }
        return !1;
    }),
    (t.isFlvStringIncluded = function (e) {
        let t = e.slice(0, 3);
        return new TextDecoder().decode(new Uint8Array(t)).includes("FLV");
    }),
    (t.isFileContaineJfiforExifHeader = function (e) {
        let t = e[3];
        return 224 === t || 225 === t;
    }),
    (t.isAvifStringIncluded = function (e) {
        return (
            "ftypavif" ===
            e
                .slice(4, 12)
                .map((e) => String.fromCharCode(e))
                .join("")
        );
    }),
    (t.isHeicSignatureIncluded = function (e) {
        let t = e.map((e) => String.fromCharCode(e)).join("");
        return ["ftypheic", "ftyphevc", "ftypmif1", "ftypmsf1"].some((e) => t.includes(e));
    });
