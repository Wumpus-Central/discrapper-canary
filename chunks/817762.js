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
        let i = e instanceof ArrayBuffer ? new Uint8Array(e) : e,
            n = [];
        if (
            (Array.isArray(e) && e.every((e) => "number" == typeof e)) ||
            e instanceof ArrayBuffer ||
            e instanceof Uint8Array
        )
            n = Array.from(i.slice(0, t));
        else
            throw TypeError(
                `Expected the \`file\` argument to be of type \`Array<number>\`, \`Uint8Array\`, or \`ArrayBuffer\`, got \`${typeof e}\``,
            );
        if (!n.every((e) => "number" == typeof e && !isNaN(e))) throw TypeError("File content contains illegal values");
        return n;
    }),
    (t.fetchFromObject = function e(t, i) {
        let n = i.indexOf(".");
        return n > -1 ? e(t[i.slice(0, n)], i.slice(n + 1)) : t[i];
    }),
    (t.findMatroskaDocTypeElements = function (e) {
        let t = e.map((e) => String.fromCharCode(e)).join("");
        return t.includes("webm") ? "webm" : t.includes("matroska") ? "mkv" : void 0;
    }),
    (t.isftypStringIncluded = function (e) {
        let t = [102, 116, 121, 112];
        for (let i = 0; i < e.length - t.length; i++) {
            let n = !0;
            for (let r = 0; r < t.length; r++)
                if (e[i + r] !== t[r]) {
                    n = !1;
                    break;
                }
            if (n) return !0;
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
