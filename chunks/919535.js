function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return (
        Array.isArray(e)
            ? e.forEach((e) => i(e, t))
            : "string" == typeof e.content
              ? t.push(e.content)
              : null != e.content && i(e.content, t),
        t
    );
}
function a(e, t) {
    if (Array.isArray(t)) {
        let { length: n } = t;
        for (let r = 0; r < n; r++) e.push(t[r]);
        return;
    }
    e.push(t);
}
function s(e) {
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
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (Array.isArray(t)) {
        let r = t.length,
            i = [];
        for (let s = 0; s < r; s++) a(i, o(e, t[s], n));
        return e.isSlate || s(i), i;
    }
    return (null != t.content && (t.content = o(e, t.content, t)),
    "inlineCode" === t.type && delete t.validationChildContent,
    "list" === t.type && (t.items = t.items.map((t) => (Array.isArray(t) ? o(e, t, null) : t))),
    null != n && t.type === n.type)
        ? t.content
        : t;
}
n.d(t, {
    $: () => d,
    Ae: () => u,
    rI: () => o,
    t9: () => c,
}),
    n(321073),
    n(896048),
    n(65821);
let l = {},
    c = 200;
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: c };
    if (Array.isArray(e)) {
        let n = e.length;
        for (let r = 0; r < n; r++) {
            let n = u(e[r], t);
            if (n === l) {
                e.length = r;
                break;
            }
            e[r] = n;
        }
    } else if ("text" !== e.type) {
        if (((t.limit -= 1), t.limit <= 0)) return l;
        Array.isArray(e.content) && (e.content = u(e.content, t)),
            "list" === e.type && (e.items = e.items.map((e) => u(e, t)));
    }
    return e;
}
function d(e) {
    return i(e).join("");
}
function f(e) {
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
class p extends Error {
    static getMessage(e) {
        return 'MarkupParserNodeTypeError: Unknown AST node type in "'.concat(
            e.join(", "),
            '" caused rendering failure',
        );
    }
    constructor(e) {
        const t = f(e);
        super(p.getMessage(t)), r(this, "nodeTypes", void 0), (this.nodeTypes = t);
    }
}
