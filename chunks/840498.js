function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return Array.isArray(e) ? e.forEach((e) => i(e, t)) : 'string' == typeof e.content ? t.push(e.content) : null != e.content && i(e.content, t), t;
}
function r(e, t) {
    if (Array.isArray(t)) {
        let { length: n } = t;
        for (let i = 0; i < n; i++) e.push(t[i]);
        return;
    }
    e.push(t);
}
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (Array.isArray(e)) {
        let n = e.length,
            i = [];
        for (let s = 0; s < n; s++) r(i, a(e[s], t));
        return i;
    }
    return (null != e.content && (e.content = a(e.content, e)), 'inlineCode' === e.type && delete e.validationChildContent, 'list' === e.type && (e.items = e.items.map((e) => (Array.isArray(e) ? a(e, null) : e))), null != t && e.type === t.type) ? e.content : e;
}
n.d(t, {
    RA: () => o,
    Rp: () => l,
    ge: () => a
}),
    n(653041);
let s = {};
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: 200 };
    if (Array.isArray(e)) {
        let n = e.length;
        for (let i = 0; i < n; i++) {
            let n = o(e[i], t);
            if (n === s) {
                e.length = i;
                break;
            }
            e[i] = n;
        }
    } else if ('text' !== e.type) {
        if (((t.limit -= 1), t.limit <= 0)) return s;
        Array.isArray(e.content) && (e.content = o(e.content, t)), 'list' === e.type && (e.items = e.items.map((e) => o(e, t)));
    }
    return e;
}
function l(e) {
    return i(e).join('');
}
