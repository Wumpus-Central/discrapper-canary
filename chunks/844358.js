r.r(t), r.d(t, { default: () => j });
var s = r(627968),
    n = r(64700),
    i = r(835245),
    a = r(607399),
    l = r(821609),
    d = r(534514),
    c = r(834730),
    u = r(289873),
    h = r(642277),
    x = r(723702),
    o = r(652215),
    f = r(613057),
    m = r(985018),
    p = r(897152);
function j(e) {
    let { applicationId: t } = e,
        [j, v] = n.useState(null),
        [b, k] = n.useState(!1),
        g = n.useRef(!1),
        E = !x.isPlatformEmbedded && !a.Fr,
        I = n.useMemo(() => (0, i.A)(), []);
    if (
        (n.useEffect(() => {
            E && !0 !== g.current
                ? (Promise.resolve()
                      .then(r.bind(r, 129014))
                      .then((e) => {
                          let { default: r } = e;
                          r.request(o.e$_.DEEP_LINK, {
                              type: f.XK.ACTIVITIES,
                              params: { applicationId: t, url: location.href, attemptId: I },
                          })
                              .then((e) => {
                                  let t = e ?? !1;
                                  v(t), t || k(!0);
                              })
                              .catch(() => {
                                  v(!1), k(!0);
                              })
                              .then(() => r.disconnect());
                      }),
                  (g.current = !0))
                : E || k(!0);
        }, [t, E, I]),
        b)
    )
        return (0, s.jsx)(h.A, {});
    if (E && !1 !== j)
        if (!0 === j)
            return (0, s.jsxs)("div", {
                className: p.k,
                children: [
                    (0, s.jsx)(d.D, { variant: "heading-xxl/bold", children: m.intl.string(m.t.csrAMJ) }),
                    (0, s.jsx)(c.E, { variant: "text-xs/semibold", children: m.intl.string(m.t["m1+IBn"]) }),
                    (0, s.jsx)(l.$, { variant: "primary", text: m.intl.string(m.t.fIv16B), onClick: () => k(!0) }),
                ],
            });
        else
            return (0, s.jsxs)("div", {
                className: p.k,
                children: [
                    (0, s.jsx)(d.D, { variant: "heading-xxl/bold", children: m.intl.string(m.t["Z+hCVU"]) }),
                    (0, s.jsx)(u.y, {}),
                ],
            });
    return (0, s.jsx)(h.A, {});
}
