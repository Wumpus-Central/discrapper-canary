n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(854627),
    s = n(778712),
    a = n(985018),
    o = n(431543);

function c(e) {
    let { referrer: t, enablePremiumBrandRefresh: n } = e,
        { avatarSrc: c, eventHandlers: d } = (0, l.A)({
            userId: null == t ? void 0 : t.id,
            size: n ? s._3.SIZE_24 : s._3.SIZE_32,
            animateOnHover: !0,
        });
    return (0, r.jsx)("div", {
        className: o.E2,
        children: (0, r.jsxs)("div", {
            className: o.hA,
            children: [
                (0, r.jsx)("div", {
                    className: o.kR,
                    children: (0, r.jsx)(
                        i.euF,
                        (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })(
                            {
                                className: o.Kk,
                                src: c,
                                "aria-label": t.username,
                                size: s._3.SIZE_32,
                            },
                            d,
                        ),
                    ),
                }),
                (0, r.jsx)(i.Heading, {
                    variant: "heading-sm/normal",
                    className: o.Mn,
                    color: "text-strong",
                    children: a.intl.format(a.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
