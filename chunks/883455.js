n.d(t, { A: () => A });
var l = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    r = n(834730),
    u = n(847374),
    d = n(320448),
    o = n(939249),
    c = n(256905),
    m = n(903586),
    h = n(277977),
    f = n(590380),
    x = n(435619),
    p = n(17928),
    g = n(866665),
    k = n(778712),
    v = n(730134),
    b = n(287809),
    j = n(427262),
    _ = n(50617),
    y = n(375708),
    w = n(13699);
function N(e) {
    let { userId: t } = e,
        n = (0, p.bG)([b.default], () => b.default.getUser(t), [t]),
        a = (0, j.tx)(n);
    if (null == n || null == a) return null;
    let s = y.intl.formatToPlainString(_.default["8s30Te"], { name: a });
    return (0, l.jsx)(g.m, {
        text: s,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: w.jz,
            role: "img",
            "aria-label": s,
            children: (0, l.jsx)(v.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var S = n(705754),
    M = n(229775);
function A(e) {
    let { projectId: t, node: n, presentation: s = "row", active: c = !1 } = e,
        [h, f] = a.useState(!1),
        p = a.useId(),
        g = a.useCallback(() => f((e) => !e), []),
        k = (0, m.WQ)(n),
        v = n.detail,
        b = "failed" === n.status ? "text-feedback-critical" : "detail" === s ? "text-muted" : "text-default",
        j = "text-muted" === b,
        A = c && j ? "none" : h && j ? "currentColor" : b,
        C = i()(w.iq, { [M.Hz]: c && j }),
        I = "detail" === s ? "text-md/normal" : "text-sm/normal",
        E = "detail" === s ? "text-sm/normal" : "text-xs/normal",
        P = null != t ? n.screenshots : [],
        D = null != t ? n.attachments : [];
    if (0 === v.length && 0 === P.length && 0 === D.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: w.Dx,
            children: (0, l.jsx)(r.E, {
                tag: "div",
                variant: I,
                color: A,
                selectable: !0,
                className: C,
                children: (0, l.jsx)(S.A, { text: k, variant: I, prose: !0 }),
            }),
        });
    let W = h ? u.a : d._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: w.Dx,
        children: [
            (0, l.jsxs)(o.D, {
                tag: "div",
                className: w.kG,
                "aria-expanded": h,
                "aria-controls": p,
                "aria-label": y.intl.formatToPlainString(_.default.z4KWsN, { step: k }),
                onClick: g,
                children: [
                    (0, l.jsx)(r.E, {
                        tag: "span",
                        variant: I,
                        color: A,
                        className: C,
                        children: (0, l.jsx)(S.A, { text: k, variant: I, prose: !0 }),
                    }),
                    (0, l.jsx)(W, { size: "xs", color: "currentColor", className: w.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: p,
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
                                        variant: E,
                                        color: c && j ? "none" : "text-muted",
                                        selectable: !0,
                                        className: i()({ [M.Hz]: c && j }),
                                        children: (0, l.jsx)(S.A, { text: e, variant: E }),
                                    }),
                                    null != a ? (0, l.jsx)(N, { userId: a }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && P.length > 0
                        ? (0, l.jsx)("div", {
                              className: w.y8,
                              children: P.map((e) => (0, l.jsx)(T, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && D.length > 0 ? (0, l.jsx)(x.A, { projectId: t, attachments: D }) : null,
                ],
            }),
        ],
    });
}
function C() {}
function T(e) {
    let { projectId: t, screenshotId: n } = e,
        [s, i] = a.useState(null),
        [r, u] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, h.aF)(t, n).then(
                (t) => {
                    e || i(t);
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
    let d = y.intl.string(_.default["3Hq9pQ"]),
        o = a.useCallback(() => {
            (0, h.aF)(t, n).then((e) => {
                (0, c.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, C);
        }, [t, n, d]);
    return r ? null : (0, l.jsx)(f.n, { name: d, thumbSrc: s, ariaLabel: d, onClick: o, onThumbError: () => u(!0) });
}
