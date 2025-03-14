function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return Array.isArray(e) ? e.forEach((e) => r(e, t)) : 'string' == typeof e.content ? t.push(e.content) : null != e.content && r(e.content, t), t;
}
function i(e, t) {
    if (Array.isArray(t)) {
        let { length: n } = t;
        for (let r = 0; r < n; r++) e.push(t[r]);
        return;
    }
    e.push(t);
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (Array.isArray(e)) {
        let n = e.length,
            r = [];
        for (let a = 0; a < n; a++) i(r, o(e[a], t));
        return r;
    }
    return (null != e.content && (e.content = o(e.content, e)), 'inlineCode' === e.type && delete e.validationChildContent, 'list' === e.type && (e.items = e.items.map((e) => (Array.isArray(e) ? o(e, null) : e))), null != t && e.type === t.type) ? e.content : e;
}
n.d(t, {
    RA: () => s,
    Rp: () => l,
    ge: () => o
}),
    n(653041);
let a = {};
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: 200 };
    if (Array.isArray(e)) {
        let n = e.length;
        for (let r = 0; r < n; r++) {
            let n = s(e[r], t);
            if (n === a) {
                e.length = r;
                break;
            }
            e[r] = n;
        }
    } else if ('text' !== e.type) {
        if (((t.limit -= 1), t.limit <= 0)) return a;
        Array.isArray(e.content) && (e.content = s(e.content, t)), 'list' === e.type && (e.items = e.items.map((e) => s(e, t)));
    }
    return e;
}
function l(e) {
    return r(e).join('');
}
