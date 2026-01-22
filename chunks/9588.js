n.d(t, {
    E: () => h,
    K: () => _,
});
var r = n(627968);
n(64700);
var i = n(139033),
    a = n(397927),
    s = n(975571),
    o = n(652215),
    l = n(985018),
    c = n(641131);

function u(e, t, n) {
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

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function _(e) {
    let { kind: t } = e;
    (0, a.mMO)(async () => {
        let { default: e } = await n.e("11546").then(n.bind(n, 208731));
        return (n) =>
            (0, r.jsx)(
                e,
                p(d({}, n), {
                    kind: t,
                }),
            );
    });
}

function h() {
    (0, i.A)({
        title: l.intl.string(c.default.odgSTk),
        subtitle: l.intl.format(c.default.EZfHRq, {
            helpURL: s.A.getArticleURL(o.MVz.NSFW_AGE_GATING),
        }),
    });
}
