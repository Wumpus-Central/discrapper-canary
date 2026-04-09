n.d(t, { A: () => m });
var i = n(627968),
    a = n(64700),
    r = n(835245),
    l = n(607399),
    s = n(732955),
    o = n(397927),
    d = n(642277),
    c = n(723702),
    u = n(652215),
    A = n(613057),
    _ = n(985018),
    h = n(34960);
function m(e) {
    let { applicationId: t } = e,
        [m, g] = a.useState(null),
        [p, E] = a.useState(!1),
        I = a.useRef(!1),
        f = !c.isPlatformEmbedded && !l.Fr,
        C = a.useMemo(() => (0, r.A)(), []);
    if (
        (a.useEffect(() => {
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
                className: h.k,
                children: [
                    (0, i.jsx)(o.Heading, { variant: "heading-xxl/bold", children: _.intl.string(_.t.csrAMJ) }),
                    (0, i.jsx)(o.Text, { variant: "text-xs/semibold", children: _.intl.string(_.t["m1+IBn"]) }),
                    (0, i.jsx)(s.$nd, { variant: "primary", text: _.intl.string(_.t.fIv16B), onClick: () => E(!0) }),
                ],
            });
        else
            return (0, i.jsxs)("div", {
                className: h.k,
                children: [
                    (0, i.jsx)(o.Heading, { variant: "heading-xxl/bold", children: _.intl.string(_.t["Z+hCVU"]) }),
                    (0, i.jsx)(o.y$y, {}),
                ],
            });
    return (0, i.jsx)(d.A, {});
}
