n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(854627),
    s = n(778712),
    o = n(985018),
    l = n(431543);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = (e) => (null != e.globalName ? e.globalName : e.username);

function f(e) {
    let { referrer: t, enablePremiumBrandRefresh: n } = e,
        { avatarSrc: c, eventHandlers: f } = (0, a.A)({
            userId: null == t ? void 0 : t.id,
            size: n ? s._3.SIZE_24 : s._3.SIZE_32,
            animateOnHover: !0,
        });
    return (0, r.jsx)("div", {
        className: l.E2,
        children: (0, r.jsxs)("div", {
            className: l.hA,
            children: [
                (0, r.jsx)("div", {
                    className: l.kR,
                    children: (0, r.jsx)(
                        i.euF,
                        u(
                            {
                                className: l.Kk,
                                src: c,
                                "aria-label": t.username,
                                size: s._3.SIZE_32,
                            },
                            f,
                        ),
                    ),
                }),
                (0, r.jsx)(i.Heading, {
                    variant: "heading-sm/normal",
                    className: l.Mn,
                    color: "text-strong",
                    children: o.intl.format(o.t.IqxblS, {
                        username: d(t),
                    }),
                }),
            ],
        }),
    });
}
