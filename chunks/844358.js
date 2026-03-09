n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    l = n(835245),
    a = n(607399),
    s = n(732955),
    o = n(397927),
    d = n(642277),
    c = n(723702),
    u = n(652215),
    A = n(613057),
    h = n(985018),
    _ = n(742249);
function m(e) {
    let { applicationId: t } = e,
        [m, g] = r.useState(null),
        [p, E] = r.useState(!1),
        I = r.useRef(!1),
        f = !c.isPlatformEmbedded && !a.Fr,
        C = r.useMemo(() => (0, l.A)(), []);
    if (
        (r.useEffect(() => {
            f && !0 !== I.current
                ? (Promise.resolve()
                      .then(n.bind(n, 129014))
                      .then((e) => {
                          let { default: n } = e;
                          n.request(u.e$_.DEEP_LINK, {
                              type: A.XK.ACTIVITIES,
                              params: { applicationId: t, url: location.href, attemptId: C },
                          })
                              .then((e) => {
                                  let t = e ?? !1;
                                  g(t), t || E(!0);
                              })
                              .catch(() => {
                                  g(!1), E(!0);
                              })
                              .then(() => n.disconnect());
                      }),
                  (I.current = !0))
                : f || E(!0);
        }, [t, f, C]),
        p)
    )
        return (0, i.jsx)(d.A, {});
    if (f && !1 !== m)
        if (!0 === m)
            return (0, i.jsxs)("div", {
                className: _.k,
                children: [
                    (0, i.jsx)(o.Heading, { variant: "heading-xxl/bold", children: h.intl.string(h.t.csrAMJ) }),
                    (0, i.jsx)(o.Text, { variant: "text-xs/semibold", children: h.intl.string(h.t["m1+IBn"]) }),
                    (0, i.jsx)(s.$nd, { variant: "primary", text: h.intl.string(h.t.fIv16B), onClick: () => E(!0) }),
                ],
            });
        else
            return (0, i.jsxs)("div", {
                className: _.k,
                children: [
                    (0, i.jsx)(o.Heading, { variant: "heading-xxl/bold", children: h.intl.string(h.t["Z+hCVU"]) }),
                    (0, i.jsx)(o.y$y, {}),
                ],
            });
    return (0, i.jsx)(d.A, {});
}
