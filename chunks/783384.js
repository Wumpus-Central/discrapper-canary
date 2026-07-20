"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    r = n(64700),
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
    f = n(569926),
    p = n(683574),
    T = n(287809),
    m = n(58703),
    g = n(403362),
    S = n(922016),
    N = n(433781);
let C = r.lazy(() =>
    Promise.all([n.e("17179"), n.e("46054")])
        .then(n.bind(n, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function O(e) {
    let { participants: t, maxVisibleParticipants: n, guildId: a, layerContext: s } = e,
        l = r.useRef(null),
        o = (0, r.useCallback)(
            () => (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(C, { users: t, guildId: a }) }),
            [t, a],
        );
    return (0, i.jsx)(S.Y, {
        renderPopout: o,
        layerContext: s,
        targetElementRef: l,
        position: "right",
        children: (e) =>
            (0, i.jsx)(_.D, {
                ...e,
                innerRef: l,
                className: N.x,
                onClick: (t) => {
                    t.stopPropagation(), e.onClick?.(t);
                },
                children: (0, i.jsxs)(u.E, {
                    className: N.s,
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: ["+", t.length - n],
                }),
            }),
    });
}
var R = n(97808),
    L = n(778712),
    y = n(342296),
    D = n(812924);
function v(e) {
    let { user: t, guildId: n, layerContext: a } = e,
        s = r.useRef(null);
    return (0, i.jsx)(y.A, {
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
                children: (0, i.jsx)(R.eu, { src: t.getAvatarURL(n, 24), size: L._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
var b = n(375708);
function M(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        r = (0, E.h)(t),
        { data: a } = (0, f.I)(t),
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
let P = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: r,
            title: a,
            guildId: _,
            className: E,
            playerState: A = o.Q6.PAUSED,
            isControlBarExpanded: h = !0,
            isFullScreen: I = !1,
            showTextContent: f = !0,
        } = e,
        S = (0, l.yK)([T.default], () => n.map((e) => T.default.getUser(e)).filter(g.Vq) ?? []),
        N = null != t ? (0, m.Fe)(new Date(t)) : null,
        { activeLayer: C } = (0, p.X$)();
    return (0, i.jsxs)("div", {
        className: s()(D.oK, { [D.pd]: A === o.Q6.PLAYING && !h, [D.aS]: I }, E),
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
                                        text: b.intl.string(b.t["/fgfWh"]),
                                        children: (0, i.jsx)(c.x, { className: D.gr, size: "xs", color: "white" }),
                                    }),
                                    f &&
                                        (0, i.jsx)(u.E, {
                                            className: D.DD,
                                            variant: "text-md/semibold",
                                            color: "text-overlay-light",
                                            children: null != a && a.length > 0 ? a : b.intl.string(b.t.Cyxddp),
                                        }),
                                ],
                            }),
                            f &&
                                (null != r || null != N) &&
                                (0, i.jsxs)("div", {
                                    className: D.yu,
                                    children: [
                                        (0, i.jsx)(M, { applicationId: r, hasTrailingDate: null != N }),
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
                            "aria-label": b.intl.string(b.t.WTozwe),
                            children: [
                                S.slice(0, 4).map((e) => (0, i.jsx)(v, { layerContext: C, user: e, guildId: _ }, e.id)),
                                S.length > 4 &&
                                    (0, i.jsx)(O, {
                                        layerContext: C,
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
