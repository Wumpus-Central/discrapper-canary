"use strict";
n.d(t, { A: () => M });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(876230),
    d = n(866665),
    c = n(176781),
    u = n(834730),
    _ = n(939249),
    E = n(429913),
    A = n(769015),
    h = n(409626),
    I = n(692969),
    f = n(202163),
    p = n(287809),
    T = n(58703),
    m = n(403362),
    g = n(922016),
    S = n(860685);
let N = r.lazy(() =>
    Promise.all([n.e("32931"), n.e("46054")])
        .then(n.bind(n, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function C(e) {
    let { participants: t, maxVisibleParticipants: n, guildId: a, layerContext: s } = e,
        l = r.useRef(null),
        o = (0, r.useCallback)(
            () => (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(N, { users: t, guildId: a }) }),
            [t, a],
        );
    return (0, i.jsx)(g.Y, {
        renderPopout: o,
        layerContext: s,
        targetElementRef: l,
        position: "right",
        children: (e) =>
            (0, i.jsx)(_.D, {
                ...e,
                innerRef: l,
                className: S.x,
                onClick: (t) => {
                    t.stopPropagation(), e.onClick?.(t);
                },
                children: (0, i.jsxs)(u.E, {
                    className: S.s,
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: ["+", t.length - n],
                }),
            }),
    });
}
var O = n(97808),
    R = n(778712),
    L = n(342296),
    D = n(156980);
function y(e) {
    let { user: t, guildId: n, layerContext: a } = e,
        s = r.useRef(null);
    return (0, i.jsx)(L.A, {
        targetElementRef: s,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        layerContext: a,
        children: (e) =>
            (0, i.jsx)(_.D, {
                ...e,
                innerRef: s,
                className: D.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, i.jsx)(O.eu, { src: t.getAvatarURL(n, 24), size: R._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
var v = n(375708);
function b(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        r = (0, E.h)(t),
        { gameRecord: a } = (0, f.A)(t),
        l = (0, I.A)({ applicationId: t, location: "ClipEmbed", source: h.GameProfileSources.ClipEmbed }),
        o = a?.name ?? r?.name;
    if (null == o) return null;
    let d = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(A.A, { game: a ?? r, size: A.M.XXSMALL, className: D.Gt, allowUnknownGameIcon: !1 }),
                (0, i.jsx)(u.E, {
                    className: D.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: o,
                }),
            ],
        }),
        c =
            null != l
                ? (0, i.jsx)(_.D, { className: s()(D.Nn, D.On), onClick: l, children: d })
                : (0, i.jsx)("span", { className: D.Nn, children: d });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c,
            !0 === n && (0, i.jsx)(u.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
let M = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: r,
            title: a,
            guildId: _,
            className: E,
            activeLayer: A,
            playerState: h = o.Q6.PAUSED,
            isControlBarExpanded: I = !0,
            isFullScreen: f = !1,
            showTextContent: g = !0,
        } = e,
        S = (0, l.yK)([p.default], () => n.map((e) => p.default.getUser(e)).filter(m.Vq) ?? []),
        N = null != t ? (0, T.Fe)(new Date(t)) : null;
    return (0, i.jsxs)("div", {
        className: s()(D.oK, { [D.pd]: h === o.Q6.PLAYING && !I, [D.aS]: f }, E),
        children: [
            (0, i.jsx)("div", { className: D.Lu }),
            (0, i.jsxs)("div", {
                className: D.s$,
                children: [
                    (0, i.jsxs)("div", {
                        className: D.yR,
                        children: [
                            (0, i.jsxs)("div", {
                                className: D.$,
                                children: [
                                    (0, i.jsx)(d.m, {
                                        asContainer: !0,
                                        text: v.intl.string(v.t["/fgfWh"]),
                                        children: (0, i.jsx)(c.x, { className: D.gr, size: "xs", color: "white" }),
                                    }),
                                    g &&
                                        (0, i.jsx)(u.E, {
                                            className: D.DD,
                                            variant: "text-md/semibold",
                                            color: "text-overlay-light",
                                            children: null != a && a.length > 0 ? a : v.intl.string(v.t.Cyxddp),
                                        }),
                                ],
                            }),
                            g &&
                                (null != r || null != N) &&
                                (0, i.jsxs)("div", {
                                    className: D.yu,
                                    children: [
                                        (0, i.jsx)(b, { applicationId: r, hasTrailingDate: null != N }),
                                        null != N &&
                                            (0, i.jsx)(u.E, {
                                                className: D.BR,
                                                variant: "text-sm/normal",
                                                color: "text-overlay-light",
                                                children: N,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    S.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: D.HD,
                            role: "group",
                            "aria-label": v.intl.string(v.t.WTozwe),
                            children: [
                                S.slice(0, 4).map((e) => (0, i.jsx)(y, { layerContext: A, user: e, guildId: _ }, e.id)),
                                S.length > 4 &&
                                    (0, i.jsx)(C, {
                                        layerContext: A,
                                        participants: S,
                                        maxVisibleParticipants: 4,
                                        guildId: _,
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
