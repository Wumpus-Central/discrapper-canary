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
    let t = null;
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (null == t || 'text' != t.type || t.type != r.type) {
            t = r;
            continue;
        }
        (t.content += r.content), e.splice(n, 1), n--;
    }
}
function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    if (Array.isArray(t)) {
        let r = t.length,
            s = [];
        for (let o = 0; o < r; o++) i(s, a(e, t[o], n));
        return e.isSlate || o(s), s;
    }
    return (null != t.content && (t.content = a(e, t.content, t)), 'inlineCode' === t.type && delete t.validationChildContent, 'list' === t.type && (t.items = t.items.map((t) => (Array.isArray(t) ? a(e, t, null) : t))), null != n && t.type === n.type) ? t.content : t;
}
n.d(t, {
    RA: () => l,
    Rp: () => c,
    ge: () => a
}),
    n(653041);
let s = {};
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: 200 };
    if (Array.isArray(e)) {
        let n = e.length;
        for (let r = 0; r < n; r++) {
            let n = l(e[r], t);
            if (n === s) {
                e.length = r;
                break;
            }
            e[r] = n;
        }
    } else if ('text' !== e.type) {
        if (((t.limit -= 1), t.limit <= 0)) return s;
        Array.isArray(e.content) && (e.content = l(e.content, t)), 'list' === e.type && (e.items = e.items.map((e) => l(e, t)));
    }
    return e;
}
function c(e) {
    return r(e).join('');
}
