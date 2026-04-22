"use strict";
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.reactFormatter = t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0),
    (t.formatReact = a),
    (t.makeReactFormatter = o);
let r = n(64700),
    i = n(621608),
    s = r.createElement;
function a(e, t, n) {
    return "string" == typeof e ? e : this.bindFormatValues(n, e, t);
}
function o(e) {
    return {
        format: a,
        builder: class extends i.FormatBuilder {
            constructor() {
                super(...arguments), (this._nodeKey = 0), (this.result = []);
            }
            pushRichTextTag(t, n, r) {
                this.result.push(e[t](n, `${this.context.keyPrefix}.tag-${this._nodeKey++}`, r));
            }
            pushLiteralText(e) {
                "string" == typeof this.result[this.result.length - 1]
                    ? (this.result[this.result.length - 1] += e)
                    : this.result.push(e);
            }
            pushObject(e) {
                this.result.push(e);
            }
            finish() {
                return this.result;
            }
        },
    };
}
(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
    $b: (e, t) => s("strong", { key: t }, e),
    $i: (e, t) => s("em", { key: t }, e),
    $del: (e, t) => s("del", { key: t }, e),
    $code: (e, t) => s("code", { key: t }, e),
    $link: (e, t, [n]) => s("a", { href: n, key: t }, e),
    $p: (e, t) => s("p", { key: t }, e),
}),
    (t.reactFormatter = o(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS));
