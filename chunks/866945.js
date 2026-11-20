var i = n(477900),
    r = n(582128),
    s = n(503698),
    l = n.n(s);
if (221552 == n.j) var a = n(885574);
if (221552 == n.j) var o = n(834730);
if (221552 == n.j) var c = n(28863);
if (221552 == n.j) var d = n(939249);
if (221552 == n.j) var u = n(789645);
var h = n(558001),
    C = n(835002),
    A = n(792996),
    E = n(323747);
n.d(
    t,
    {},
    {
        e: function (e) {
            let { label: t, labelHook: n, count: s, dismissNotice: _, className: g, noticeType: p } = e,
                m = null != _;
            r.useEffect(() => {
                (0, h.N)(p, C.YX.VIEWED);
            }, [p]);
            let T = r.useCallback(() => {
                    null != _ && (_(), (0, h.N)(p, C.YX.DISMISS));
                }, [p, _]),
                N = r.useCallback(() => {
                    (n(), (0, h.N)(p, C.YX.LEARN_MORE));
                }, [p, n]);
            return (0, i.jsxs)("div", {
                className: l()(E.I, g),
                children: [
                    (0, i.jsx)(a.CircleInformationIcon, { size: "md" }),
                    (0, i.jsx)(o.E, {
                        variant: "body-sm/medium",
                        color: "interactive-text-active",
                        children:
                            null != s
                                ? A.intl.format(t, {
                                      hook: (e, t) => (0, i.jsx)(c.Anchor, { onClick: N, children: e }, t),
                                      count: s,
                                  })
                                : A.intl.format(t, {
                                      hook: (e, t) => (0, i.jsx)(c.Anchor, { onClick: N, children: e }, t),
                                  }),
                    }),
                    m && (0, i.jsx)(d.D, { className: E.b, onClick: T, children: (0, i.jsx)(u.XSmallIcon, {}) }),
                ],
            });
        },
    },
);
