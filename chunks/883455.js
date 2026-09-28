n.d(t, { A: () => T });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(834730),
    o = n(847374),
    u = n(320448),
    d = n(939249),
    c = n(256905),
    m = n(903586),
    f = n(277977),
    h = n(590380),
    x = n(435619),
    p = n(17928),
    g = n(866665),
    k = n(778712),
    v = n(730134),
    b = n(287809),
    j = n(427262),
    _ = n(50617),
    S = n(375708),
    y = n(13699);
function N(e) {
    let { userId: t } = e,
        n = (0, p.bG)([b.default], () => b.default.getUser(t), [t]),
        a = (0, j.tx)(n);
    if (null == n || null == a) return null;
    let i = S.intl.formatToPlainString(_.default["8s30Te"], { name: a });
    return (0, l.jsx)(g.m, {
        text: i,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: y.jz,
            role: "img",
            "aria-label": i,
            children: (0, l.jsx)(v.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var M = n(705754),
    w = n(229775);
function T(e) {
    let { projectId: t, node: n, presentation: i = "row", active: c = !1 } = e,
        [f, h] = a.useState(!1),
        p = a.useId(),
        g = a.useCallback(() => h((e) => !e), []),
        k = (0, m.WQ)(n),
        v = n.detail,
        b = "failed" === n.status ? "text-feedback-critical" : "detail" === i ? "text-muted" : "text-default",
        j = "text-muted" === b,
        T = c && j ? "none" : f && j ? "currentColor" : b,
        C = r()(y.iq, { [w.Hz]: c && j }),
        I = "detail" === i ? "text-md/normal" : "text-sm/normal",
        P = "detail" === i ? "text-sm/normal" : "text-xs/normal",
        E = null != t ? n.screenshots : [],
        F = null != t ? n.attachments : [];
    if (0 === v.length && 0 === E.length && 0 === F.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: y.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: I,
                color: T,
                selectable: !0,
                className: C,
                children: (0, l.jsx)(M.A, { text: k, variant: I, prose: !0 }),
            }),
        });
    let z = f ? o.a : u._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: y.Dx,
        children: [
            (0, l.jsxs)(d.D, {
                tag: "div",
                className: y.kG,
                "aria-expanded": f,
                "aria-controls": p,
                "aria-label": S.intl.formatToPlainString(_.default.z4KWsN, { step: k }),
                onClick: g,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: I,
                        color: T,
                        className: C,
                        children: (0, l.jsx)(M.A, { text: k, variant: I, prose: !0 }),
                    }),
                    (0, l.jsx)(z, { size: "xs", color: "currentColor", className: y.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: p,
                hidden: !f,
                className: y.yJ,
                children: [
                    v.map((e, t) => {
                        let a = n.detailDrivenBy[t];
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: y.l6,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "div",
                                        variant: P,
                                        color: c && j ? "none" : "text-muted",
                                        selectable: !0,
                                        className: r()({ [w.Hz]: c && j }),
                                        children: (0, l.jsx)(M.A, { text: e, variant: P }),
                                    }),
                                    null != a ? (0, l.jsx)(N, { userId: a }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && E.length > 0
                        ? (0, l.jsx)("div", {
                              className: y.y8,
                              children: E.map((e) => (0, l.jsx)(A, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && F.length > 0 ? (0, l.jsx)(x.A, { projectId: t, attachments: F }) : null,
                ],
            }),
        ],
    });
}
function C() {}
function A(e) {
    let { projectId: t, screenshotId: n } = e,
        [i, r] = a.useState(null),
        [s, o] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, f.aF)(t, n).then(
                (t) => {
                    e || r(t);
                },
                () => {
                    e || o(!0);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let u = S.intl.string(_.default["3Hq9pQ"]),
        d = a.useCallback(() => {
            (0, f.aF)(t, n).then((e) => {
                (0, c.R)({
                    items: [{ type: "IMAGE", url: e, alt: u }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, C);
        }, [t, n, u]);
    return s ? null : (0, l.jsx)(h.n, { name: u, thumbSrc: i, ariaLabel: u, onClick: d, onThumbError: () => o(!0) });
}
