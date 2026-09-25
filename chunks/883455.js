n.d(t, { A: () => T });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(834730),
    u = n(847374),
    o = n(320448),
    d = n(939249),
    c = n(256905),
    m = n(903586),
    f = n(277977),
    h = n(590380),
    x = n(435619),
    g = n(17928),
    p = n(866665),
    k = n(778712),
    v = n(730134),
    b = n(287809),
    j = n(427262),
    _ = n(50617),
    y = n(375708),
    S = n(13699);
function w(e) {
    let { userId: t } = e,
        n = (0, g.bG)([b.default], () => b.default.getUser(t), [t]),
        a = (0, j.tx)(n);
    if (null == n || null == a) return null;
    let i = y.intl.formatToPlainString(_.default["8s30Te"], { name: a });
    return (0, l.jsx)(p.m, {
        text: i,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: S.jz,
            role: "img",
            "aria-label": i,
            children: (0, l.jsx)(v.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var N = n(705754),
    M = n(229775);
function T(e) {
    let { projectId: t, node: n, presentation: i = "row", active: c = !1 } = e,
        [f, h] = a.useState(!1),
        g = a.useId(),
        p = a.useCallback(() => h((e) => !e), []),
        k = (0, m.WQ)(n),
        v = n.detail,
        b = "failed" === n.status ? "text-feedback-critical" : "detail" === i ? "text-muted" : "text-default",
        j = "text-muted" === b,
        T = c && j ? "none" : f && j ? "currentColor" : b,
        A = r()(S.iq, { [M.Hz]: c && j }),
        I = "detail" === i ? "text-md/normal" : "text-sm/normal",
        P = "detail" === i ? "text-sm/normal" : "text-xs/normal",
        E = null != t ? n.screenshots : [],
        F = null != t ? n.attachments : [];
    if (0 === v.length && 0 === E.length && 0 === F.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: S.Dx,
            children: (0, l.jsx)(s.E, {
                tag: "div",
                variant: I,
                color: T,
                selectable: !0,
                className: A,
                children: (0, l.jsx)(N.A, { text: k, variant: I, prose: !0 }),
            }),
        });
    let D = f ? u.a : o._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: S.Dx,
        children: [
            (0, l.jsxs)(d.D, {
                tag: "div",
                className: S.kG,
                "aria-expanded": f,
                "aria-controls": g,
                "aria-label": y.intl.formatToPlainString(_.default.z4KWsN, { step: k }),
                onClick: p,
                children: [
                    (0, l.jsx)(s.E, {
                        tag: "span",
                        variant: I,
                        color: T,
                        className: A,
                        children: (0, l.jsx)(N.A, { text: k, variant: I, prose: !0 }),
                    }),
                    (0, l.jsx)(D, { size: "xs", color: "currentColor", className: S.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: g,
                hidden: !f,
                className: S.yJ,
                children: [
                    v.map((e, t) => {
                        let a = n.detailDrivenBy[t];
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: S.l6,
                                children: [
                                    (0, l.jsx)(s.E, {
                                        tag: "div",
                                        variant: P,
                                        color: c && j ? "none" : "text-muted",
                                        selectable: !0,
                                        className: r()({ [M.Hz]: c && j }),
                                        children: (0, l.jsx)(N.A, { text: e, variant: P }),
                                    }),
                                    null != a ? (0, l.jsx)(w, { userId: a }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && E.length > 0
                        ? (0, l.jsx)("div", {
                              className: S.y8,
                              children: E.map((e) => (0, l.jsx)(C, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && F.length > 0 ? (0, l.jsx)(x.A, { projectId: t, attachments: F }) : null,
                ],
            }),
        ],
    });
}
function A() {}
function C(e) {
    let { projectId: t, screenshotId: n } = e,
        [i, r] = a.useState(null),
        [s, u] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, f.aF)(t, n).then(
                (t) => {
                    e || r(t);
                },
                () => {
                    e || u(!0);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let o = y.intl.string(_.default["3Hq9pQ"]),
        d = a.useCallback(() => {
            (0, f.aF)(t, n).then((e) => {
                (0, c.R)({
                    items: [{ type: "IMAGE", url: e, alt: o }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, A);
        }, [t, n, o]);
    return s ? null : (0, l.jsx)(h.n, { name: o, thumbSrc: i, ariaLabel: o, onClick: d, onThumbError: () => u(!0) });
}
