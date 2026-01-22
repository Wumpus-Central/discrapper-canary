n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(478063),
    o = n(287809);

function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = c(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let u = function (e) {
    let { recipients: t, size: n, status: c, isTyping: u, className: d } = e,
        f = l(e, ["recipients", "size", "status", "isTyping", "className"]),
        p = a.vCh[n],
        _ = (0, i.yK)(
            [o.default],
            () =>
                t.slice(0, 2).map((e) => {
                    let t = o.default.getUser(e);
                    if (null != t) return t.getAvatarURL(void 0, p.size, !1);
                }),
            [t, p.size],
        );
    return (0, r.jsx)(s.A, {
        "aria-label": f["aria-label"],
        "aria-hidden": f["aria-hidden"],
        backSrc: _[0],
        frontSrc: _[1],
        size: n,
        status: c,
        isTyping: null != u && u,
        className: d,
    });
};
