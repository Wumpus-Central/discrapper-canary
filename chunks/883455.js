n.d(t, { A: () => A });
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
    h = n(18739),
    f = n(590380),
    g = n(435619),
    x = n(17928),
    p = n(866665),
    k = n(778712),
    v = n(730134),
    j = n(287809),
    b = n(427262),
    _ = n(295813),
    y = n(375708),
    w = n(13699);
function N(e) {
    let { userId: t } = e,
        n = (0, x.bG)([j.default], () => j.default.getUser(t), [t]),
        a = (0, b.tx)(n);
    if (null == n || null == a) return null;
    let i = y.intl.formatToPlainString(_.default["8s30Te"], { name: a });
    return (0, l.jsx)(p.m, {
        text: i,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: w.jz,
            role: "img",
            "aria-label": i,
            children: (0, l.jsx)(v.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var S = n(705754),
    C = n(229775);
function A(e) {
    let { projectId: t, node: n, presentation: i = "row", active: c = !1 } = e,
        [h, f] = a.useState(!1),
        x = a.useId(),
        p = a.useCallback(() => f((e) => !e), []),
        k = (0, m.WQ)(n),
        v = n.detail,
        j = "failed" === n.status ? "text-feedback-critical" : "detail" === i ? "text-muted" : "text-default",
        b = "text-muted" === j,
        A = c && b ? "none" : h && b ? "currentColor" : j,
        M = s()(w.iq, { [C.Hz]: c && b }),
        D = "detail" === i ? "text-md/normal" : "text-sm/normal",
        I = "detail" === i ? "text-sm/normal" : "text-xs/normal",
        E = null != t ? n.screenshots : [],
        F = null != t ? n.attachments : [];
    if (0 === v.length && 0 === E.length && 0 === F.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: w.Dx,
            children: (0, l.jsx)(r.E, {
                tag: "div",
                variant: D,
                color: A,
                selectable: !0,
                className: M,
                children: (0, l.jsx)(S.A, { text: k, variant: D, prose: !0 }),
            }),
        });
    let K = h ? d.a : u._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: w.Dx,
        children: [
            (0, l.jsxs)(o.D, {
                tag: "div",
                className: w.kG,
                "aria-expanded": h,
                "aria-controls": x,
                "aria-label": y.intl.formatToPlainString(_.default.z4KWsN, { step: k }),
                onClick: p,
                children: [
                    (0, l.jsx)(r.E, {
                        tag: "span",
                        variant: D,
                        color: A,
                        className: M,
                        children: (0, l.jsx)(S.A, { text: k, variant: D, prose: !0 }),
                    }),
                    (0, l.jsx)(K, { size: "xs", color: "currentColor", className: w.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: x,
                hidden: !h,
                className: w.yJ,
                children: [
                    v.map((e, t) => {
                        let a = n.detailDrivenBy[t];
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: w.l6,
                                children: [
                                    (0, l.jsx)(r.E, {
                                        tag: "div",
                                        variant: I,
                                        color: c && b ? "none" : "text-muted",
                                        selectable: !0,
                                        className: s()({ [C.Hz]: c && b }),
                                        children: (0, l.jsx)(S.A, { text: e, variant: I }),
                                    }),
                                    null != a ? (0, l.jsx)(N, { userId: a }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && E.length > 0
                        ? (0, l.jsx)("div", {
                              className: w.y8,
                              children: E.map((e) => (0, l.jsx)(T, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && F.length > 0 ? (0, l.jsx)(g.A, { projectId: t, attachments: F }) : null,
                ],
            }),
        ],
    });
}
function M() {}
function T(e) {
    let { projectId: t, screenshotId: n } = e,
        [i, s] = a.useState(null),
        [r, d] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, h.aF)(t, n).then(
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
            (0, h.aF)(t, n).then((e) => {
                (0, c.R)({
                    items: [{ type: "IMAGE", url: e, alt: u }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, M);
        }, [t, n, u]);
    return r ? null : (0, l.jsx)(f.n, { name: u, thumbSrc: i, ariaLabel: u, onClick: o, onThumbError: () => d(!0) });
}
