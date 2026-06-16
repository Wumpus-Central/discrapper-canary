"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }), (t.InternalIntlMessage = void 0);
let i = n(725354);
t.InternalIntlMessage = class {
    constructor(e, t) {
        (this.locale = t), (this.ast = (0, i.isCompressedAst)(e) ? e : (0, i.compressFormatJsToAst)(e));
    }
    reserialize() {
        if ("string" == typeof this.ast) return this.ast;
        let e = { value: "" };
        return (
            (function e(t, n) {
                for (let r of t) {
                    if ("string" == typeof r) {
                        n.value += r;
                        continue;
                    }
                    switch (r[0]) {
                        case i.FormatJsNodeType.Argument:
                            n.value += "{" + r[1] + "}";
                            break;
                        case i.FormatJsNodeType.Date:
                            (n.value += "{" + r[1] + ", date"),
                                null != r[2] && (n.value += ", " + r[2]),
                                (n.value += "}");
                            break;
                        case i.FormatJsNodeType.Time:
                            (n.value += "{" + r[1] + ", time"),
                                null != r[2] && (n.value += ", " + r[2]),
                                (n.value += "}");
                            break;
                        case i.FormatJsNodeType.Number:
                            (n.value += "{" + r[1] + ", number"),
                                null != r[2] && (n.value += ", " + r[2]),
                                (n.value += "}");
                            break;
                        case i.FormatJsNodeType.Plural: {
                            let t = "ordinal" == r[4] ? "selectordinal" : "plural";
                            for (let [i, s] of ((n.value += "{" + r[1] + ", " + t + ","),
                            r[3] && (n.value += " offset:" + r[3]),
                            Object.entries(r[2])))
                                (n.value += " " + i + " {"), e(s, n), (n.value += "}");
                            n.value += "}";
                            break;
                        }
                        case i.FormatJsNodeType.Pound:
                            n.value += "#";
                            break;
                        case i.FormatJsNodeType.Select:
                            for (let [t, i] of ((n.value += "{" + r[1] + ", select,"), Object.entries(r[2])))
                                (n.value += " " + t + " {"), e(i, n), (n.value += "}");
                            n.value += "}";
                            break;
                        case i.FormatJsNodeType.Tag:
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
                                        let i = t[2],
                                            r = t[3];
                                        (n.value += "["),
                                            e(i, n),
                                            (n.value += "]("),
                                            null != r && e(r, n),
                                            (n.value += ")");
                                        break;
                                    default:
                                        (n.value += "$["), e(t[2], n), (n.value += "](" + t[1] + ")");
                                }
                            })(r, n);
                    }
                }
            })(this.ast, e),
            e.value
        );
    }
};
