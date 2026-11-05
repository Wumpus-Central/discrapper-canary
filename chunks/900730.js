var r = n(477900);
n(582128);
var i = n(683071),
    a = n(956956),
    l = n(46054),
    s = n(379912),
    u = n(792996),
    o = n(135734);
n.d(
    t,
    {},
    {
        c: function (e) {
            let { relocationCountry: t, relocationCurrencyCode: n, willForfeitGiftCardBalance: c = !1, role: d } = e,
                m = (0, a.j7)(t),
                f = c ? s.default["DE+C4G"] : s.default.vcs3zU,
                p = u.intl.formatToMarkdownString(f, {
                    country: m,
                    currency: n?.toUpperCase() ?? "",
                    willForfeitGiftCardBalance: c ? "true" : "false",
                }),
                v = l.A.parse(p, !1, { allowList: !0 });
            return null == v
                ? null
                : (0, r.jsx)("div", {
                      className: o.Q,
                      children: (0, r.jsx)(i.w, { type: "warning", message: v, role: d }),
                  });
        },
    },
);
