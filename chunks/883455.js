n.d(t, { A: () => T });
var l = n(477900),
    a = n(582128),
    s = n(503698),
    i = n.n(s),
    r = n(834730),
    o = n(847374),
    d = n(320448),
    u = n(939249),
    c = n(256905),
    m = n(903586),
    f = n(277977),
    h = n(590380),
    x = n(435619),
    p = n(17928),
    g = n(866665),
    k = n(778712),
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
    let s = S.intl.formatToPlainString(_.default["8s30Te"], { name: a });
    return (0, l.jsx)(g.m, {
        text: s,
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: N.jz,
            role: "img",
            "aria-label": s,
            children: (0, l.jsx)(v.A, { user: n, size: k._3.SIZE_16, "aria-hidden": !0 }),
        }),
    });
}
var M = n(705754),
    w = n(229775);
function T(e) {
    let { projectId: t, node: n, presentation: s = "row", active: c = !1 } = e,
        [f, h] = a.useState(!1),
        p = a.useId(),
        g = a.useCallback(() => h((e) => !e), []),
        k = (0, m.WQ)(n),
        v = n.detail,
        j = "failed" === n.status ? "text-feedback-critical" : "detail" === s ? "text-muted" : "text-default",
        b = "text-muted" === j,
        T = c && b ? "none" : f && b ? "currentColor" : j,
        C = i()(N.iq, { [w.Hz]: c && b }),
        I = "detail" === s ? "text-md/normal" : "text-sm/normal",
        P = "detail" === s ? "text-sm/normal" : "text-xs/normal",
        $ = null != t ? n.screenshots : [],
        E = null != t ? n.attachments : [];
    if (0 === v.length && 0 === $.length && 0 === E.length)
        return (0, l.jsx)("li", {
            "data-step-kind": n.labelKey ?? "step",
            className: N.Dx,
            children: (0, l.jsx)(r.E, {
                tag: "div",
                variant: I,
                color: T,
                selectable: !0,
                className: C,
                children: (0, l.jsx)(M.A, { text: k, variant: I, prose: !0 }),
            }),
        });
    let F = f ? o.a : d._;
    return (0, l.jsxs)("li", {
        "data-step-kind": n.labelKey ?? "step",
        className: N.Dx,
        children: [
            (0, l.jsxs)(u.D, {
                tag: "div",
                className: N.kG,
                "aria-expanded": f,
                "aria-controls": p,
                "aria-label": S.intl.formatToPlainString(_.default.z4KWsN, { step: k }),
                onClick: g,
                children: [
                    (0, l.jsx)(r.E, {
                        tag: "span",
                        variant: I,
                        color: T,
                        className: C,
                        children: (0, l.jsx)(M.A, { text: k, variant: I, prose: !0 }),
                    }),
                    (0, l.jsx)(F, { size: "xs", color: "currentColor", className: N.Ue }),
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
                                        className: i()({ [w.Hz]: c && b }),
                                        children: (0, l.jsx)(M.A, { text: e, variant: P }),
                                    }),
                                    null != a ? (0, l.jsx)(y, { userId: a }) : null,
                                ],
                            },
                            t,
                        );
                    }),
                    null != t && $.length > 0
                        ? (0, l.jsx)("div", {
                              className: N.y8,
                              children: $.map((e) => (0, l.jsx)(A, { projectId: t, screenshotId: e }, e)),
                          })
                        : null,
                    null != t && E.length > 0 ? (0, l.jsx)(x.A, { projectId: t, attachments: E }) : null,
                ],
            }),
        ],
    });
}
function C() {}
function A(e) {
    let { projectId: t, screenshotId: n } = e,
        [s, i] = a.useState(null),
        [r, o] = a.useState(!1);
    a.useEffect(() => {
        let e = !1;
        return (
            (0, f.aF)(t, n).then(
                (t) => {
                    e || i(t);
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
    let d = S.intl.string(_.default["3Hq9pQ"]),
        u = a.useCallback(() => {
            (0, f.aF)(t, n).then((e) => {
                (0, c.R)({
                    items: [{ type: "IMAGE", url: e, alt: d }],
                    startingIndex: 0,
                    shouldHideMediaOptions: !0,
                    location: "VibegrationsChat",
                });
            }, C);
        }, [t, n, d]);
    return r ? null : (0, l.jsx)(h.n, { name: d, thumbSrc: s, ariaLabel: d, onClick: u, onThumbError: () => o(!0) });
}
