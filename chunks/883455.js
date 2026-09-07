n.d(t, { A: () => M });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    s = n.n(i),
    r = n(834730),
    d = n(847374),
    u = n(320448),
    o = n(939249),
    c = n(256905),
    m = n(903586),
    g = n(18739),
    h = n(590380),
    f = n(435619),
    x = n(17928),
    p = n(866665),
    k = n(778712),
    v = n(730134),
    j = n(287809),
    b = n(427262),
    _ = n(759967),
    y = n(375708),
    S = n(13699);
function w(e) {
    let { userId: t } = e,
        n = (0, x.bG)([j.default], () => j.default.getUser(t), [t]),
        a = (0, b.tx)(n);
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
    C = n(229775);
function M(e) {
    let { projectId: t, node: n, presentation: i = "row", active: c = !1 } = e,
        [g, h] = a.useState(!1),
        x = a.useId(),
        p = a.useCallback(() => h((e) => !e), []),
        k = (0, m.WQ)(n),
        v = n.detail,
        j = "failed" === n.status ? "text-feedback-critical" : "detail" === i ? "text-muted" : "text-default",
        b = "text-muted" === j,
        M = c && b ? "none" : g && b ? "currentColor" : j,
        A = s()(S.iq, { [C.Hz]: c && b }),
        D = "detail" === i ? "text-md/normal" : "text-sm/normal",
        I = "detail" === i ? "text-sm/normal" : "text-xs/normal",
        E = null != t ? n.screenshots : [],
        P = null != t ? n.attachments : [];
    if (0 === v.length && 0 === E.length && 0 === P.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: S.Dx,
            children: (0, l.jsx)(r.E, {
                tag: "div",
                variant: D,
                color: M,
                selectable: !0,
                className: A,
                children: (0, l.jsx)(N.A, { text: k, variant: D, prose: !0 }),
            }),
        });
    let B = g ? d.a : u._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: S.Dx,
        children: [
            (0, l.jsxs)(o.D, {
                tag: "div",
                className: S.kG,
                "aria-expanded": g,
                "aria-controls": x,
                "aria-label": y.intl.formatToPlainString(_.default.z4KWsN, { step: k }),
                onClick: p,
                children: [
                    (0, l.jsx)(r.E, {
                        tag: "span",
                        variant: D,
                        color: M,
                        className: A,
                        children: (0, l.jsx)(N.A, { text: k, variant: D, prose: !0 }),
                    }),
                    (0, l.jsx)(B, { size: "xs", color: "currentColor", className: S.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: x,
                hidden: !g,
                className: S.yJ,
                children: [
                    v.map((e, t) => {
                        let a = n.detailDrivenBy[t];
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: S.l6,
                                children: [
                                    (0, l.jsx)(r.E, {
                                        tag: "div",
                                        variant: I,
                                        color: c && b ? "none" : "text-muted",
                                        selectable: !0,
                                        className: s()({ [C.Hz]: c && b }),
                                        children: (0, l.jsx)(N.A, { text: e, variant: I }),
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
                              children: E.map((e) => (0, l.jsx)(T, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && P.length > 0 ? (0, l.jsx)(f.A, { projectId: t, attachments: P }) : null,
                ],
            }),
        ],
    });
}
function A() {}
function T(e) {
    let { projectId: t, screenshotId: n } = e,
        [i, s] = a.useState(null),
        [r, d] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, g.aF)(t, n).then(
                (t) => {
                    e || s(t);
                },
                () => {
                    e || d(!0);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, n]);
    let u = y.intl.string(_.default["3Hq9pQ"]),
        o = a.useCallback(() => {
            (0, g.aF)(t, n).then((e) => {
                (0, c.R)({
                    items: [{ type: "IMAGE", url: e, alt: u }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, A);
        }, [t, n, u]);
    return r ? null : (0, l.jsx)(h.n, { name: u, thumbSrc: i, ariaLabel: u, onClick: o, onThumbError: () => d(!0) });
}
