n.d(e, { default: () => w });
var t = n(477900),
    a = n(582128),
    s = n(613412),
    l = n(935462),
    r = n(430690),
    c = n(985481),
    o = n(503698),
    d = n.n(o),
    m = n(855986),
    x = n(534514),
    g = n(834730),
    p = n(771871),
    N = n(103557),
    u = n(825484),
    h = n(821609),
    j = n(73153),
    A = n(235986),
    E = n(207913),
    _ = n(393033),
    C = n(239093),
    I = n(792996),
    b = n(502616),
    v = n(936986);
function k(i) {
    let { className: e, isDsaEligible: n = !1, onClose: s, onNext: r, onBack: o } = i,
        k = (0, c.y5)(),
        S = (0, m.bG)([E.A], () => E.A.getFreeTextAppealReason()),
        [L, T] = a.useState(""),
        [P, f] = a.useState(!1);
    a.useEffect(() => {
        (T(S ?? ""), f(k === C.Iv.SOMETHING_ELSE));
    }, [S, k, n]);
    let y = C.Qv.map((i) => ({ value: i, name: (0, _.l0)(i) }));
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                className: v.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(x.D, {
                        className: v.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(g.E, {
                        className: v.VA,
                        color: "text-default",
                        variant: "body-md/normal",
                        children: I.intl.string(I.t.VEcRhw),
                    }),
                    null != s && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: v.b, onClick: s }),
                ],
            }),
            (0, t.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: d()(b.j, e),
                scrollbarGutter: !1,
                children: [
                    (0, t.jsx)(p.z, {
                        value: k,
                        options: y,
                        onChange: (i) => {
                            (f(i === C.Iv.SOMETHING_ELSE),
                                i !== C.Iv.SOMETHING_ELSE &&
                                    (T(""),
                                    j.h.dispatch({
                                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                        userInput: "",
                                    })),
                                j.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal: i }));
                        },
                    }),
                    n &&
                        P &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(N.f, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: I.intl.string(I.t.bQrZIN),
                                    value: L,
                                    onChange: T,
                                    autoFocus: !0,
                                }),
                                (0, t.jsx)(g.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: I.intl.string(I.t.xfNY3L),
                                }),
                            ],
                        }),
                    (0, t.jsx)(g.E, {
                        variant: "body-sm/normal",
                        className: b.e,
                        children: I.intl.format(I.t["8k9GCW"], {}),
                    }),
                ],
            }),
            (0, t.jsx)(l.jl, {
                "data-migration-pending": !0,
                children: (0, t.jsxs)(u.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, t.jsx)(h.$, {
                            variant: "primary",
                            text: I.intl.string(I.t.PDTjLN),
                            onClick: function () {
                                (j.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: L }),
                                    r?.());
                            },
                        }),
                        (0, t.jsx)(h.$, {
                            variant: "secondary",
                            text: I.intl.string(I.t["13/7kX"]),
                            onClick: function () {
                                (j.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: L }),
                                    o?.());
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
var S = n(28863),
    L = n(308645),
    T = n(652215),
    P = n(949902);
function f(i) {
    let { className: e, isDsaEligible: n, onClose: s, onNext: r, onBack: o } = i,
        d = (0, m.bG)([E.A], () => E.A.getAppealClassificationId()),
        { classification: p } = (0, c.LJ)(d ?? ""),
        C = (0, _.eu)(p?.description),
        b = (0, m.bG)([E.A], () => E.A.getIsSubmitting()),
        k = (0, m.bG)([E.A], () => E.A.getAppealSignal()),
        T = (0, m.bG)([E.A], () => E.A.getFreeTextAppealReason()),
        [f, y] = a.useState(!1),
        [G, D] = a.useState(""),
        U = a.useCallback((i) => {
            j.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: i });
        }, []),
        M = a.useCallback(async () => {
            if (null !== d)
                try {
                    (D(""), await L.Gf(d, k, T), r?.());
                } catch (i) {
                    D((0, _.Tk)(i.body?.code));
                }
        }, [d, k, T, r]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                className: v.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(x.D, {
                        className: v.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(g.E, {
                        className: v.VA,
                        color: "text-default",
                        variant: "body-md/normal",
                        children: I.intl.string(I.t["G2g/g5"]),
                    }),
                    null != s && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: v.b, onClick: s }),
                ],
            }),
            (0, t.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: e,
                scrollbarGutter: !1,
                children: [
                    (0, t.jsx)("ul", {
                        className: P.qI,
                        children: [(0, _.l0)(k), T]
                            .filter((i) => i.length > 0)
                            .map((i, e) =>
                                (0, t.jsx)(
                                    "li",
                                    {
                                        className: P.Aw,
                                        children: (0, t.jsx)(g.E, {
                                            tag: "span",
                                            variant: "body-md/normal",
                                            children: i,
                                        }),
                                    },
                                    e,
                                ),
                            ),
                    }),
                    n &&
                        (0, t.jsx)("div", {
                            className: P.DE,
                            children: (0, t.jsx)(S.Anchor, {
                                onClick: () => y((i) => !i),
                                children: (0, t.jsx)(x.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-link",
                                    children: T.length > 0 ? I.intl.string(I.t.tnE3bZ) : I.intl.string(I.t.uoQFIp),
                                }),
                            }),
                        }),
                    f &&
                        n &&
                        (0, t.jsx)("div", { className: P.Kf, children: (0, t.jsx)(N.f, { value: T, onChange: U }) }),
                    (0, t.jsx)("div", {
                        className: v.kU,
                        children: (0, t.jsx)(g.E, { variant: "body-md/semibold", children: C }),
                    }),
                    (0, t.jsx)(g.E, {
                        variant: "body-xs/medium",
                        color: "text-default",
                        className: P.PJ,
                        children: I.intl.string(I.t["d6qgY/"]),
                    }),
                ],
            }),
            (0, t.jsxs)(l.jl, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                children: [
                    "" !== G &&
                        (0, t.jsx)(g.E, {
                            className: P.kc,
                            variant: "body-lg/normal",
                            color: "text-feedback-critical",
                            children: G,
                        }),
                    (0, t.jsx)("div", {
                        className: P.UD,
                        children: (0, t.jsxs)(u.e, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, t.jsx)(h.$, {
                                    variant: "secondary",
                                    text: I.intl.string(I.t["13/7kX"]),
                                    onClick: o,
                                    disabled: b,
                                }),
                                (0, t.jsx)(h.$, {
                                    variant: "critical-primary",
                                    text: I.intl.string(I.t.geKm7t),
                                    onClick: M,
                                    loading: b,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
var y = n(26095),
    G = n(331322),
    D = n(129230),
    U = n(335891);
function M() {
    let i = (0, m.bG)([E.A], () => E.A.getAppealClassificationId()),
        e = (0, c.LJ)(i ?? ""),
        n = (0, U.K)(),
        t = (0, m.bG)([E.A], () => E.A.getIsDsaEligible());
    return a.useCallback(
        (a) => {
            D.default.track(T.HAw.SAFETY_HUB_ACTION, {
                action: a,
                account_standing: n.state,
                classification_ids: null != i ? [Number(i)] : null,
                source: C.XN.AppealIngestion,
                is_dsa_eligible: t,
                violation_type: e.violationType,
            });
        },
        [n.state, i, e, t],
    );
}
var O = n(975807),
    B = n(632738);
function F(i) {
    let { url: e, text: n, onClick: s } = i,
        l = a.useCallback(() => {
            (s?.(), (0, O.A)(e));
        }, [s, e]);
    return (0, t.jsx)(B.PQ, { variant: "clickable", title: n, onButtonPress: l });
}
var R = n(399839);
function H(i) {
    let { className: e, onNext: n, onClose: a } = i,
        s = M();
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                className: v.wx,
                separator: !1,
                children: [
                    (0, t.jsx)("div", {
                        className: R.zc,
                        children: (0, t.jsx)("img", { src: "/assets/60e9812b94a3894e.png", alt: "", className: R.Kk }),
                    }),
                    (0, t.jsx)(x.D, {
                        className: v.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t.QMbTSu),
                    }),
                    (0, t.jsx)(x.D, {
                        className: v.VA,
                        color: "text-default",
                        variant: "body-md/normal",
                        children: I.intl.string(I.t.Qdx8AP),
                    }),
                    null != a && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: v.b, onClick: a }),
                ],
            }),
            (0, t.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: d()(R.jE, e),
                scrollbarGutter: !1,
                children: [
                    (0, t.jsx)(x.D, {
                        variant: "heading-sm/semibold",
                        color: "text-strong",
                        className: R.f9,
                        children: I.intl.string(I.t["9BRc1N"]),
                    }),
                    (0, t.jsxs)(G.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, t.jsx)(F, {
                                text: I.intl.string(I.t.PxL38B),
                                url: C.d$.COMMUNITY_GUIDELINES,
                                onClick: () => s(C.ZU.ClickCommunityGuidelinesLink),
                            }),
                            (0, t.jsx)(F, {
                                text: I.intl.string(I.t.qC3XKa),
                                url: C.d$.WARNING_SYSTEM_HELPCENTER_LINK,
                                onClick: () => s(C.ZU.ClickWarningSystemHelpcenterLink),
                            }),
                        ],
                    }),
                ],
            }),
            (0, t.jsx)(l.jl, {
                "data-migration-pending": !0,
                children: (0, t.jsx)(h.$, { variant: "primary", text: I.intl.string(I.t.i4jeWR), onClick: n }),
            }),
        ],
    });
}
var Y = n(739010),
    V = n(351876);
function $(i) {
    let {
            classification: e,
            isDsaEligible: n = !1,
            isCoppa: a = !1,
            isDeveloperClassification: s = !1,
            appealIngestionType: r,
            className: c,
            onClose: o,
            onNext: m,
        } = i,
        p = M(),
        N = e?.explainer_link ?? "",
        u = null != e && null != e.flagged_content && e.flagged_content.length > 0,
        j = (0, _.eu)(e?.description),
        E = !a && !s && (null == r || r === Y.Il.IN_APP),
        b = null != e && ((0, _._g)(e) || u);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                className: v.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(x.D, {
                        className: v.DD,
                        variant: "heading-xl/semibold",
                        children: I.intl.string(I.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(g.E, {
                        className: v.VA,
                        color: "text-default",
                        variant: "body-md/normal",
                        children: I.intl.string(I.t.URt7VI),
                    }),
                    null != o && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: v.b, onClick: o }),
                ],
            }),
            (0, t.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: d()(v.jE, !b && v.bQ, c),
                scrollbarGutter: !1,
                children: [
                    b && (0, t.jsx)(V.U, { flaggedContent: e.flagged_content ?? [] }),
                    (0, t.jsx)(g.E, {
                        className: v.l8,
                        color: "text-default",
                        variant: "body-xs/semibold",
                        children: I.intl.string(I.t.xsdcxh),
                    }),
                    (0, t.jsx)("div", {
                        className: v.kU,
                        children: (0, t.jsx)(g.E, { variant: "body-md/semibold", children: j }),
                    }),
                    (0, t.jsxs)(G.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            a &&
                                (0, t.jsx)(F, {
                                    url: C.d$.AGE_VERIFICATION_LINK,
                                    text: I.intl.string(I.t["gJs+kf"]),
                                    onClick: () => p(C.ZU.ClickAgeVerificationLink),
                                }),
                            s &&
                                (0, t.jsx)(F, {
                                    url: C.d$.APP_APPEAL_LINK,
                                    text: I.intl.string(I.t.n9cZTH),
                                    onClick: () => p(C.ZU.ClickAppAppealLink),
                                }),
                            !a &&
                                (0, t.jsx)(F, {
                                    text: I.intl.string(I.t["Vtyn/7"]),
                                    url: N,
                                    onClick: () => p(C.ZU.ClickLearnMoreLink),
                                }),
                        ],
                    }),
                    E &&
                        n &&
                        (0, t.jsx)(g.E, {
                            className: v.C2,
                            variant: "body-xs/normal",
                            children: I.intl.format(I.t.WMUgCX, {}),
                        }),
                ],
            }),
            E &&
                (0, t.jsx)(l.jl, {
                    "data-migration-pending": !0,
                    children: (0, t.jsx)(h.$, { variant: "primary", text: I.intl.string(I.t.PDTjLN), onClick: m }),
                }),
        ],
    });
}
var Q = n(543870);
function w(i) {
    let { classificationId: e, transitionState: n, initialSlide: o = C.yN.SPEED_BUMP, onClose: d } = i,
        [m, x] = a.useState(o),
        { classification: g, isDsaEligible: p } = (0, c.LJ)(e ?? ""),
        N = g?.is_coppa || !1,
        u = g?.is_developer_classification || !1,
        h = g?.appeal_ingestion_type;
    a.useEffect(() => {
        x(o);
    }, [x, o]);
    let j = a.useCallback(() => {
            (y.A.close(), d());
        }, [d]),
        A = a.useCallback(() => {
            let i = C.A8[m]?.next;
            null != i ? x(i) : j();
        }, [m, j]),
        E = a.useCallback(() => {
            let i = C.A8[m]?.prev;
            null != i ? x(i) : j();
        }, [m, j]);
    return (0, t.jsx)(l.EO, {
        "data-migration-pending": !0,
        transitionState: n,
        disableTrack: !0,
        size: l.rI.DYNAMIC,
        parentComponent: "AppealIngestionModal",
        children: (0, t.jsx)("div", {
            className: Q.k,
            children: (0, t.jsxs)(r.t, {
                activeSlide: m,
                width: 500,
                children: [
                    (0, t.jsx)(r.q, {
                        id: C.yN.SPEED_BUMP,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_SPEED_BUMP,
                        impressionProperties: C.nY,
                        children: (0, t.jsx)($, {
                            classification: g,
                            onClose: j,
                            onNext: A,
                            isCoppa: N,
                            isDeveloperClassification: u,
                            appealIngestionType: h,
                            isDsaEligible: p,
                        }),
                    }),
                    (0, t.jsx)(r.q, {
                        id: C.yN.COLLECT_SIGNAL,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_COLLECT_SIGNAL,
                        impressionProperties: C.nY,
                        children: (0, t.jsx)(k, { isDsaEligible: p, onClose: j, onNext: A, onBack: E }),
                    }),
                    (0, t.jsx)(r.q, {
                        id: C.yN.CONFIRM_SUBMISSION,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                        impressionProperties: C.nY,
                        children: (0, t.jsx)(f, { isDsaEligible: p, onClose: j, onNext: A, onBack: E }),
                    }),
                    (0, t.jsx)(r.q, {
                        id: C.yN.REQUEST_SENT,
                        impressionName: s.ImpressionNames.APPEAL_INGESTION_REQUEST_SENT,
                        impressionProperties: C.nY,
                        children: (0, t.jsx)(H, { onNext: A }),
                    }),
                ],
            }),
        }),
    });
}
