n.d(t, { A: () => T });
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
    p = n(17928),
    k = n(866665),
    g = n(778712),
    v = n(730134),
    j = n(287809),
    b = n(427262),
    _ = n(759967),
    S = n(375708),
    N = n(13699);
function y(e) {
    let { userId: t } = e,
        n = (0, p.bG)([j.default], () => j.default.getUser(t), [t]),
        a = (0, b.tx)(n);
    if (null == n || null == a) return null;
    let i = S.intl.formatToPlainString(_.default["8s30Te"], { name: a });
    return (0, l.jsx)(k.m, {
        text: i,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: N.jz,
            role: "img",
            "aria-label": i,
            children: (0, l.jsx)(v.A, { user: n, size: g._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var M = n(705754),
    w = n(229775);
function T(e) {
    let { projectId: t, node: n, presentation: i = "row", active: c = !1 } = e,
        [f, h] = a.useState(!1),
        p = a.useId(),
        k = a.useCallback(() => h((e) => !e), []),
        g = (0, m.WQ)(n),
        v = n.detail,
        j = "failed" === n.status ? "text-feedback-critical" : "detail" === i ? "text-muted" : "text-default",
        b = "text-muted" === j,
        T = c && b ? "none" : f && b ? "currentColor" : j,
        C = s()(N.iq, { [w.Hz]: c && b }),
        I = "detail" === i ? "text-md/normal" : "text-sm/normal",
        P = "detail" === i ? "text-sm/normal" : "text-xs/normal",
        E = null != t ? n.screenshots : [],
        F = null != t ? n.attachments : [];
    if (0 === v.length && 0 === E.length && 0 === F.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: N.Dx,
            children: (0, l.jsx)(r.E, {
                tag: "div",
                variant: I,
                color: T,
                selectable: !0,
                className: C,
                children: (0, l.jsx)(M.A, { text: g, variant: I, prose: !0 }),
            }),
        });
    let z = f ? o.a : u._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: N.Dx,
        children: [
            (0, l.jsxs)(d.D, {
                tag: "div",
                className: N.kG,
                "aria-expanded": f,
                "aria-controls": p,
                "aria-label": S.intl.formatToPlainString(_.default.z4KWsN, { step: g }),
                onClick: k,
                children: [
                    (0, l.jsx)(r.E, {
                        tag: "span",
                        variant: I,
                        color: T,
                        className: C,
                        children: (0, l.jsx)(M.A, { text: g, variant: I, prose: !0 }),
                    }),
                    (0, l.jsx)(z, { size: "xs", color: "currentColor", className: N.Ue }),
                ],
            }),
            (0, l.jsxs)("div", {
                id: p,
                hidden: !f,
                className: N.yJ,
                children: [
                    v.map((e, t) => {
                        let a = n.detailDrivenBy[t];
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: N.l6,
                                children: [
                                    (0, l.jsx)(r.E, {
                                        tag: "div",
                                        variant: P,
                                        color: c && b ? "none" : "text-muted",
                                        selectable: !0,
                                        className: s()({ [w.Hz]: c && b }),
                                        children: (0, l.jsx)(M.A, { text: e, variant: P }),
                                    }),
                                    null != a ? (0, l.jsx)(y, { userId: a }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && E.length > 0
                        ? (0, l.jsx)("div", {
                              className: N.y8,
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
            }, C);
        }, [t, n, u]);
    return r ? null : (0, l.jsx)(h.n, { name: u, thumbSrc: i, ariaLabel: u, onClick: d, onThumbError: () => o(!0) });
}
