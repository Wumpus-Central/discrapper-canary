n.d(t, {
    c: () => p,
});
var r = n(627968),
    i = n(64700),
    s = n(397927),
    l = n(17372),
    a = n(975571),
    o = n(843376),
    c = n(652215),
    u = n(985018),
    d = n(188335);
let h = {
        [l.tY.MESSAGE]: u.t.fuqnBC,
        [l.tY.USER]: u.t.F4jrRW,
        [l.tY.GUILD]: u.t.gH3aMs,
    },
    f = (e) => {
        let { title: t, menuType: n, onReopen: l } = e,
            a = i.useCallback(() => {
                (0, o.i)(n, l)();
            }, [n, l]);
        return (0, r.jsxs)(s.DUT, {
            className: d.b0,
            onClick: a,
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    children: t,
                }),
                (0, r.jsx)(s.n2b, {
                    size: "sm",
                    style: {
                        transform: "rotate(180deg)",
                    },
                }),
            ],
        });
    },
    p = (e) => {
        let { showBackButton: t, onBack: n, dsaCapabilities: i, renderFooter: o, onClose: p, onReopen: g } = e,
            m =
                t && null != n
                    ? (0, r.jsx)("div", {
                          className: d.Hq,
                          children: (0, r.jsx)(s.Button, {
                              variant: "secondary",
                              text: u.intl.string(u.t["13/7kX"]),
                              onClick: n,
                          }),
                      })
                    : null;
        return (0, r.jsxs)(s.BJc, {
            gap: 16,
            children: [
                (0, r.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    children: u.intl.string(u.t.Z11w18),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: u.intl.format(u.t["532l+q"], {
                        supportURL: a.A.getArticleURL(c.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: d.kL,
                    children: i.map((e) =>
                        e === l.tY.MEDIA_TAKEDOWN || null == h[e]
                            ? null
                            : (0, r.jsx)(
                                  f,
                                  {
                                      title: u.intl.string(h[e]),
                                      menuType: e,
                                      onClose: p,
                                      onReopen: g,
                                  },
                                  e,
                              ),
                    ),
                }),
                null == o ? void 0 : o(m),
            ],
        });
    };
