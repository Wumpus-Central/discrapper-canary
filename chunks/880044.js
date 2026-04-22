"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.InternalIntlMessage = void 0);
let r = n(725354);
t.InternalIntlMessage = class {
    constructor(e, t) {
        (this.locale = t), (this.ast = (0, r.isCompressedAst)(e) ? e : (0, r.compressFormatJsToAst)(e));
    }
    reserialize() {
        if ("string" == typeof this.ast) return this.ast;
        let e = { value: "" };
        return (
            (function e(t, n) {
                for (let i of t) {
                    if ("string" == typeof i) {
                        n.value += i;
                        continue;
                    }
                    switch (i[0]) {
                        case r.FormatJsNodeType.Argument:
                            n.value += "{" + i[1] + "}";
                            break;
                        case r.FormatJsNodeType.Date:
                            (n.value += "{" + i[1] + ", date"),
                                null != i[2] && (n.value += ", " + i[2]),
                                (n.value += "}");
                            break;
                        case r.FormatJsNodeType.Time:
                            (n.value += "{" + i[1] + ", time"),
                                null != i[2] && (n.value += ", " + i[2]),
                                (n.value += "}");
                            break;
                        case r.FormatJsNodeType.Number:
                            (n.value += "{" + i[1] + ", number"),
                                null != i[2] && (n.value += ", " + i[2]),
                                (n.value += "}");
                            break;
                        case r.FormatJsNodeType.Plural: {
                            let t = "ordinal" == i[4] ? "selectordinal" : "plural";
                            for (let [r, s] of ((n.value += "{" + i[1] + ", " + t + ","),
                            i[3] && (n.value += " offset:" + i[3]),
                            Object.entries(i[2])))
                                (n.value += " " + r + " {"), e(s, n), (n.value += "}");
                            n.value += "}";
                            break;
                        }
                        case r.FormatJsNodeType.Pound:
                            n.value += "#";
                            break;
                        case r.FormatJsNodeType.Select:
                            for (let [t, r] of ((n.value += "{" + i[1] + ", select,"), Object.entries(i[2])))
                                (n.value += " " + t + " {"), e(r, n), (n.value += "}");
                            n.value += "}";
                            break;
                        case r.FormatJsNodeType.Tag:
                            !(function (t, n) {
                                switch (t[1]) {
                                    case "$b":
                                        (n.value += "**"), e(t[2], n), (n.value += "**");
                                        break;
                                    case "$i":
                                        (n.value += "*"), e(t[2], n), (n.value += "*");
                                        break;
                                    case "$code":
                                        (n.value += "`"), e(t[2], n), (n.value += "`");
                                        break;
                                    case "$p":
                                        e(t[2], n), (n.value += "\n\n");
                                        break;
                                    case "$link":
                                        let r = t[2],
                                            i = t[3];
                                        (n.value += "["),
                                            e(r, n),
                                            (n.value += "]("),
                                            null != i && e(i, n),
                                            (n.value += ")");
                                        break;
                                    default:
                                        (n.value += "$["), e(t[2], n), (n.value += "](" + t[1] + ")");
                                }
                            })(i, n);
                    }
                }
            })(this.ast, e),
            e.value
        );
    }
};
