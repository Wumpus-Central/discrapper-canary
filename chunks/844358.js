n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(835245),
    a = n(607399),
    s = n(732955),
    o = n(397927),
    c = n(642277),
    u = n(723702),
    d = n(652215),
    p = n(613057),
    f = n(985018),
    h = n(742249);

function A(e) {
    let { applicationId: t } = e,
        [A, g] = i.useState(null),
        [m, b] = i.useState(!1),
        _ = i.useRef(!1),
        E = !u.isPlatformEmbedded && !a.Fr,
        O = i.useMemo(() => (0, l.A)(), []);
    if (
        (i.useEffect(() => {
            E && !0 !== _.current
                ? (Promise.resolve()
                      .then(n.bind(n, 129014))
                      .then((e) => {
                          let { default: n } = e;
                          n.request(d.e$_.DEEP_LINK, {
                              type: p.XK.ACTIVITIES,
                              params: {
                                  applicationId: t,
                                  url: location.href,
                                  attemptId: O,
                              },
                          })
                              .then((e) => {
                                  let t = null != e && e;
                                  g(t), t || b(!0);
                              })
                              .catch(() => {
                                  g(!1), b(!0);
                              })
                              .then(() => n.disconnect());
                      }),
                  (_.current = !0))
                : E || b(!0);
        }, [t, E, O]),
        m)
    )
        return (0, r.jsx)(c.A, {});
    if (E && !1 !== A)
        if (!0 === A)
            return (0, r.jsxs)("div", {
                className: h.k,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-xxl/bold",
                        children: f.intl.string(f.t.csrAMJ),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/semibold",
                        children: f.intl.string(f.t["m1+IBn"]),
                    }),
                    (0, r.jsx)(s.$nd, {
                        variant: "primary",
                        text: f.intl.string(f.t.fIv16B),
                        onClick: () => b(!0),
                    }),
                ],
            });
        else
            return (0, r.jsxs)("div", {
                className: h.k,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-xxl/bold",
                        children: f.intl.string(f.t["Z+hCVU"]),
                    }),
                    (0, r.jsx)(o.y$y, {}),
                ],
            });
    return (0, r.jsx)(c.A, {});
}
