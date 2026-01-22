n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(827734),
    a = n(397927),
    s = n(773669),
    o = n(287809),
    c = n(954571),
    u = n(975571),
    d = n(427262),
    p = n(58736),
    f = n(652215),
    h = n(985018);
let A = new Set(["ko", "ja"]);

function g(e) {
    let { className: t, focusSectionProps: n } = e,
        g = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        m = (0, i.bG)([s.default], () => s.default.locale),
        b = (0, d.mv)(g);
    return (0, r.jsx)(a.MzZ, {
        href: u.C,
        target: "_blank",
        tabIndex: -1,
        children: (0, r.jsx)(
            p.In,
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
                    color: b ? l.A.unsafe_rawColors.GREEN_360.css : "currentColor",
                    className: t,
                    onClick: () =>
                        c.default.track(f.HAw.HELP_CLICKED, {
                            highlighted: b,
                        }),
                    icon: a.cBN,
                    tooltipPosition: A.has(m) ? "left" : void 0,
                    tooltip: h.intl.string(h.t["cqEoj/"]),
                },
                n,
            ),
        ),
    });
}
