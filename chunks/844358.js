s.r(t);
var r = s(477900),
    i = s(582128),
    n = s(115560),
    a = s(607399),
    l = s(821609),
    d = s(534514),
    c = s(834730),
    u = s(289873),
    h = s(642277),
    o = s(723702),
    x = s(652215),
    f = s(613057),
    m = s(792996),
    p = s(168071);
s.d(
    t,
    {},
    {
        default: function (e) {
            let { applicationId: t } = e,
                [j, v] = i.useState(null),
                [b, k] = i.useState(!1),
                g = i.useRef(!1),
                E = !o.isPlatformEmbedded && !a.Fr,
                I = i.useMemo(() => (0, n.A)(), []);
            if (
                (i.useEffect(() => {
                    E && !0 !== g.current
                        ? (Promise.resolve()
                              .then(s.bind(s, 129014))
                              .then((e) => {
                                  let { default: s } = e;
                                  s.request(x.e$_.DEEP_LINK, {
                                      type: f.XK.ACTIVITIES,
                                      params: { applicationId: t, url: location.href, attemptId: I },
                                  })
                                      .then((e) => {
                                          let t = e ?? !1;
                                          (v(t), t || k(!0));
                                      })
                                      .catch(() => {
                                          (v(!1), k(!0));
                                      })
                                      .then(() => s.disconnect());
                              }),
                          (g.current = !0))
                        : E || k(!0);
                }, [t, E, I]),
                b)
            )
                return (0, r.jsx)(h.A, {});
            if (E && !1 !== j)
                if (!0 === j)
                    return (0, r.jsxs)("div", {
                        className: p.k,
                        children: [
                            (0, r.jsx)(d.D, { variant: "heading-xxl/semibold", children: m.intl.string(m.t.csrAMJ) }),
                            (0, r.jsx)(c.E, { variant: "body-xs/semibold", children: m.intl.string(m.t["m1+IBn"]) }),
                            (0, r.jsx)(l.$, {
                                variant: "primary",
                                text: m.intl.string(m.t.fIv16B),
                                onClick: () => k(!0),
                            }),
                        ],
                    });
                else
                    return (0, r.jsxs)("div", {
                        className: p.k,
                        children: [
                            (0, r.jsx)(d.D, {
                                variant: "heading-xxl/semibold",
                                children: m.intl.string(m.t["Z+hCVU"]),
                            }),
                            (0, r.jsx)(u.y, {}),
                        ],
                    });
            return (0, r.jsx)(h.A, {});
        },
    },
);
