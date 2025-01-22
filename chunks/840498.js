r.d(n, {
    RA: function () {
        return u;
    },
    Rp: function () {
        return c;
    },
    ge: function () {
        return s;
    }
});
var i = r(653041);
function a(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    return Array.isArray(e) ? e.forEach((e) => a(e, n)) : 'string' == typeof e.content ? n.push(e.content) : null != e.content && a(e.content, n), n;
}
function o(e, n) {
    if (Array.isArray(n)) {
        let { length: r } = n;
        for (let i = 0; i < r; i++) e.push(n[i]);
        return;
    }
    e.push(n);
}
function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (Array.isArray(e)) {
        let r = e.length,
            i = [];
        for (let a = 0; a < r; a++) o(i, s(e[a], n));
        return i;
    }
    return (null != e.content && (e.content = s(e.content, e)), 'inlineCode' === e.type && delete e.validationChildContent, 'list' === e.type && (e.items = e.items.map((e) => (Array.isArray(e) ? s(e, null) : e))), null != n && e.type === n.type) ? e.content : e;
}
let l = {};
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: 200 };
    if (Array.isArray(e)) {
        let r = e.length;
        for (let i = 0; i < r; i++) {
            let r = u(e[i], n);
            if (r === l) {
                e.length = i;
                break;
            }
            e[i] = r;
        }
    } else if ('text' !== e.type) {
        if (((n.limit -= 1), n.limit <= 0)) return l;
        Array.isArray(e.content) && (e.content = u(e.content, n)), 'list' === e.type && (e.items = e.items.map((e) => u(e, n)));
    }
    return e;
}
function c(e) {
    return a(e).join('');
}
