Object.defineProperty(t, '__esModule', { value: !0 }), (t.reactFormatter = t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0), (t.formatReact = o), (t.makeReactFormatter = l);
let i = n(192379),
    r = n(756880),
    a = i.createElement;
function s(e) {
    return class extends r.FormatBuilder {
        constructor() {
            super(...arguments), (this._nodeKey = 0), (this.result = []);
        }
        pushRichTextTag(t, n, i) {
            this.result.push(e[t](n, `${this._nodeKey++}`, i));
        }
        pushLiteralText(e) {
            'string' == typeof this.result[this.result.length - 1] ? (this.result[this.result.length - 1] += e) : this.result.push(e);
        }
        pushObject(e) {
            this.result.push(e);
        }
        finish() {
            return this.result;
        }
    };
}
function o(e, t, n) {
    return 'string' == typeof e ? e : this.bindFormatValues(n, e, t);
}
function l(e) {
    return {
        format: o,
        builder: s(e)
    };
}
(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
    $b: (e, t) => a('strong', { key: t }, e),
    $i: (e, t) => a('em', { key: t }, e),
    $del: (e, t) => a('del', { key: t }, e),
    $code: (e, t) => a('code', { key: t }, e),
    $link: (e, t, [n]) =>
        a(
            'a',
            {
                href: n,
                key: t
            },
            e
        ),
    $p: (e, t) => a('p', { key: t }, e)
}),
    (t.reactFormatter = l(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS));
