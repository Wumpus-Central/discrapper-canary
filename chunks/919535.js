"use strict";
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (
        Array.isArray(e)
            ? e.forEach((e) => r(e, t))
            : "string" == typeof e.content
              ? t.push(e.content)
              : null != e.content && r(e.content, t),
        t
    );
}
function i(e, t) {
    if (Array.isArray(t)) {
        let { length: n } = t;
        for (let r = 0; r < n; r++) e.push(t[r]);
        return;
    }
    e.push(t);
}
function a(e) {
    let t = null;
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (null == t || "text" != t.type || t.type != r.type) {
            t = r;
            continue;
        }
        (t.content += r.content), e.splice(n, 1), n--;
    }
}
function s(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (Array.isArray(t)) {
        let r = t.length,
            o = [];
        for (let a = 0; a < r; a++) i(o, s(e, t[a], n));
        return e.isSlate || a(o), o;
    }
    return (null != t.content && (t.content = s(e, t.content, t)),
    "inlineCode" === t.type && delete t.validationChildContent,
    "list" === t.type && (t.items = t.items.map((t) => (Array.isArray(t) ? s(e, t, null) : t))),
    null != n && t.type === n.type)
        ? t.content
        : t;
}
n.d(t, { $: () => c, Ae: () => u, rI: () => s }), n(321073);
let o = {},
    l = 200;
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: l, hasBailedAst: !1 };
    if (Array.isArray(e)) {
        let n = e.length;
        for (let r = 0; r < n; r++) {
            let { ast: n } = u(e[r], t);
            if (n === o) {
                (t.hasBailedAst = !0), (e.length = r);
                break;
            }
            e[r] = n;
        }
    } else if ("text" !== e.type) {
        if (((t.limit -= 1), t.limit <= 0)) return (t.hasBailedAst = !0), { ast: o, hasBailedAst: !0 };
        if (Array.isArray(e.content)) {
            let { ast: n } = u(e.content, t);
            e.content = n;
        }
        "list" === e.type &&
            (e.items = e.items.map((e) => {
                let { ast: n } = u(e, t);
                return n;
            }));
    }
    return { ast: e, hasBailedAst: t.hasBailedAst };
}
function c(e) {
    return r(e).join("");
}
function d(e) {
    let t = new Set(),
        n = [e];
    for (; n.length > 0; ) {
        let e = n.pop();
        void 0 !== e &&
            (Array.isArray(e)
                ? n.push(...e)
                : (t.add(e.type),
                  "content" in e && Array.isArray(e.content) && n.push(...e.content),
                  "items" in e && Array.isArray(e.items) && n.push(...e.items)));
    }
    return Array.from(t);
}
class _ extends Error {
    nodeTypes;
    constructor(e) {
        const t = d(e);
        super(_.getMessage(t)), (this.nodeTypes = t);
    }
    static getMessage(e) {
        return `MarkupParserNodeTypeError: Unknown AST node type in "${e.join(", ")}" caused rendering failure`;
    }
}
