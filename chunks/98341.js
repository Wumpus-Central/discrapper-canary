"use strict";
var n, i;
Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.astFormatter = t.RichTextNodeType = void 0),
    (t.formatToAst = l);
let o = r(541202);
((i = n || (t.RichTextNodeType = n = {})).Text = "text"),
    (i.Strong = "strong"),
    (i.Emphasis = "em"),
    (i.Strikethrough = "s"),
    (i.Code = "inlineCode"),
    (i.Link = "link"),
    (i.Paragraph = "paragraph");
let a = {
    $b: (e) => ({ type: n.Strong, content: e }),
    $i: (e) => ({ type: n.Emphasis, content: e }),
    $del: (e) => ({ type: n.Strikethrough, content: e }),
    $code: (e) => ({ type: n.Code, content: e }),
    $link: (e, t, [r]) => ({ type: n.Link, target: r, content: e }),
    $p: (e) => ({ type: n.Paragraph, content: e }),
};
class s extends o.FormatBuilder {
    constructor() {
        super(...arguments), (this.result = []);
    }
    pushRichTextTag(e, t, r) {
        if (!(e in a)) throw `${e} is not a known rich text formatting tag`;
        let n = a[e](t, "", r);
        Array.isArray(n) ? this.result.push(...n) : this.result.push(n);
    }
    pushLiteralText(e) {
        let t = this.result[this.result.length - 1];
        null != t && t.type === n.Text ? (t.content += e) : this.result.push({ type: n.Text, content: e });
    }
    pushObject(e) {
        this.result.push(e);
    }
    finish() {
        return this.result;
    }
}
function l(e, t) {
    return "string" == typeof e ? [{ type: n.Text, content: e }] : this.bindFormatValues(s, e, t);
}
t.astFormatter = { format: l, builder: s };
