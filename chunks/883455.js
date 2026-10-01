n.d(t, { A: () => C });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    s = n.n(i),
    r = n(834730),
    o = n(847374),
    u = n(320448),
    d = n(939249),
    c = n(256905),
    m = n(903586),
    f = n(277977),
    h = n(590380),
    x = n(435619),
    k = n(17928),
    p = n(866665),
    g = n(778712),
    v = n(730134),
    j = n(287809),
    b = n(427262),
    _ = n(50617),
    S = n(375708),
    y = n(13699);
function N(e) {
    let { userId: t } = e,
        n = (0, k.bG)([j.default], () => j.default.getUser(t), [t]),
        a = (0, b.tx)(n);
    if (null == n || null == a) return null;
    let i = S.intl.formatToPlainString(_.default["8s30Te"], { name: a });
    return (0, l.jsx)(p.m, {
        text: i,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: y.jz,
            role: "img",
            "aria-label": i,
            children: (0, l.jsx)(v.A, { user: n, size: g._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var T = n(705754),
    M = n(229775);
function C(e) {
    let { projectId: t, node: n, presentation: i = "row", active: c = !1 } = e,
        [f, h] = a.useState(!1),
        k = a.useId(),
        p = a.useCallback(() => h((e) => !e), []),
        g = (0, m.WQ)(n),
        v = n.detail,
        j = "failed" === n.status ? "text-feedback-critical" : "detail" === i ? "text-muted" : "text-default",
        b = "text-muted" === j,
        C = c && b ? "none" : f && b ? "currentColor" : j,
        w = s()(y.iq, { [M.Hz]: c && b }),
        I = "detail" === i ? "text-md/normal" : "text-sm/normal",
        P = "detail" === i ? "text-sm/normal" : "text-xs/normal",
        E = null != t ? n.screenshots : [],
        $ = null != t ? n.attachments : [];
    if (0 === v.length && 0 === E.length && 0 === $.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: y.Dx,
            children: (0, l.jsx)(r.E, {
                tag: "div",
                variant: I,
                color: C,
                selectable: !0,
                className: w,
                children: (0, l.jsx)(T.A, { text: g, variant: I, prose: !0 }),
            }),
        });
    let F = f ? o.a : u._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: y.Dx,
        children: [
            (0, l.jsxs)(d.D, {
                tag: "div",
                className: y.kG,
                "aria-expanded": f,
                "aria-controls": k,
                "aria-label": S.intl.formatToPlainString(_.default.z4KWsN, { step: g }),
                onClick: p,
                children: [
                    (0, l.jsx)(r.E, {
                        tag: "span",
                        variant: I,
                        color: C,
                        className: w,
                        children: (0, l.jsx)(T.A, { text: g, variant: I, prose: !0 }),
                    }),
                    (0, l.jsx)(F, { size: "xs", color: "currentColor", className: y.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: k,
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
                                    (0, l.jsx)(r.E, {
                                        tag: "div",
                                        variant: P,
                                        color: c && b ? "none" : "text-muted",
                                        selectable: !0,
                                        className: s()({ [M.Hz]: c && b }),
                                        children: (0, l.jsx)(T.A, { text: e, variant: P }),
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
                    null != t && $.length > 0 ? (0, l.jsx)(x.A, { projectId: t, attachments: $ }) : null,
                ],
            }),
        ],
    });
}
function w() {}
function A(e) {
    let { projectId: t, screenshotId: n } = e,
        [i, s] = a.useState(null),
        [r, o] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, f.aF)(t, n).then(
                (t) => {
                    e || s(t);
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
            }, w);
        }, [t, n, u]);
    return r ? null : (0, l.jsx)(h.n, { name: u, thumbSrc: i, ariaLabel: u, onClick: d, onThumbError: () => o(!0) });
}
