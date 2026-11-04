var i = n(477900),
    s = n(582128),
    r = n(503698),
    l = n.n(r);
if (221552 == n.j) var a = n(885574);
if (221552 == n.j) var o = n(834730);
if (221552 == n.j) var c = n(28863);
if (221552 == n.j) var d = n(939249);
if (221552 == n.j) var u = n(789645);
var h = n(558001),
    C = n(835002),
    A = n(792996),
    g = n(323747);
n.d(
    t,
    {},
    {
        e: function (e) {
            let { label: t, labelHook: n, count: r, dismissNotice: E, className: p, noticeType: _ } = e,
                m = null != E;
            s.useEffect(() => {
                (0, h.N)(_, C.YX.VIEWED);
            }, [_]);
            let f = s.useCallback(() => {
                    null != E && (E(), (0, h.N)(_, C.YX.DISMISS));
                }, [_, E]),
                T = s.useCallback(() => {
                    (n(), (0, h.N)(_, C.YX.LEARN_MORE));
                }, [_, n]);
            return (0, i.jsxs)("div", {
                className: l()(g.I, p),
                children: [
                    (0, i.jsx)(a.CircleInformationIcon, { size: "md" }),
                    (0, i.jsx)(o.E, {
                        variant: "body-sm/medium",
                        color: "interactive-text-active",
                        children:
                            null != r
                                ? A.intl.format(t, {
                                      hook: (e, t) => (0, i.jsx)(c.Anchor, { onClick: T, children: e }, t),
                                      count: r,
                                  })
                                : A.intl.format(t, {
                                      hook: (e, t) => (0, i.jsx)(c.Anchor, { onClick: T, children: e }, t),
                                  }),
                    }),
                    m && (0, i.jsx)(d.D, { className: g.b, onClick: f, children: (0, i.jsx)(u.P, {}) }),
                ],
            });
        },
    },
);
