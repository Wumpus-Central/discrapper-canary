"use strict";
n.d(t, { A: () => O });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(876230),
    u = n(866665),
    c = n(176781),
    d = n(834730),
    h = n(939249),
    m = n(429913),
    f = n(769015),
    p = n(409626),
    g = n(692969),
    x = n(202163),
    A = n(287809),
    E = n(58703),
    C = n(403362),
    I = n(922016),
    y = n(7834);
let S = i.lazy(() =>
    Promise.all([n.e("353604"), n.e("446054")])
        .then(n.bind(n, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function v(e) {
    let { participants: t, maxVisibleParticipants: n, guildId: s, layerContext: r } = e,
        a = i.useRef(null),
        o = (0, i.useCallback)(
            () => (0, l.jsx)(i.Suspense, { fallback: null, children: (0, l.jsx)(S, { users: t, guildId: s }) }),
            [t, s],
        );
    return (0, l.jsx)(I.Y, {
        renderPopout: o,
        layerContext: r,
        targetElementRef: a,
        position: "right",
        children: (e) =>
            (0, l.jsx)(h.D, {
                ...e,
                innerRef: a,
                className: y.x,
                onClick: (t) => {
                    t.stopPropagation(), e.onClick?.(t);
                },
                children: (0, l.jsxs)(d.E, {
                    className: y.s,
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: ["+", t.length - n],
                }),
            }),
    });
}
var _ = n(97808),
    N = n(778712),
    T = n(342296),
    j = n(447177);
function b(e) {
    let { user: t, guildId: n, layerContext: s } = e,
        r = i.useRef(null);
    return (0, l.jsx)(T.A, {
        targetElementRef: r,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        layerContext: s,
        children: (e) =>
            (0, l.jsx)(h.D, {
                ...e,
                innerRef: r,
                className: j.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, l.jsx)(_.eu, { src: t.getAvatarURL(n, 24), size: N._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
var R = n(375708);
function L(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        i = (0, m.h)(t),
        { gameRecord: s } = (0, x.A)(t),
        a = (0, g.A)({ applicationId: t, location: "ClipEmbed", source: p.GameProfileSources.ClipEmbed }),
        o = s?.name ?? i?.name;
    if (null == o) return null;
    let u = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(f.A, { game: s ?? i, size: f.M.XXSMALL, className: j.Gt, allowUnknownGameIcon: !1 }),
                (0, l.jsx)(d.E, {
                    className: j.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: o,
                }),
            ],
        }),
        c =
            null != a
                ? (0, l.jsx)(h.D, { className: r()(j.Nn, j.On), onClick: a, children: u })
                : (0, l.jsx)("span", { className: j.Nn, children: u });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            c,
            !0 === n && (0, l.jsx)(d.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
let O = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: i,
            title: s,
            guildId: h,
            className: m,
            activeLayer: f,
            playerState: p = o.Q6.PAUSED,
            isControlBarExpanded: g = !0,
            isFullScreen: x = !1,
            showTextContent: I = !0,
        } = e,
        y = (0, a.yK)([A.default], () => n.map((e) => A.default.getUser(e)).filter(C.Vq) ?? []),
        S = null != t ? (0, E.Fe)(new Date(t)) : null;
    return (0, l.jsxs)("div", {
        className: r()(j.oK, { [j.pd]: p === o.Q6.PLAYING && !g, [j.aS]: x }, m),
        children: [
            (0, l.jsx)("div", { className: j.Lu }),
            (0, l.jsxs)("div", {
                className: j.s$,
                children: [
                    (0, l.jsxs)("div", {
                        className: j.yR,
                        children: [
                            (0, l.jsxs)("div", {
                                className: j.$,
                                children: [
                                    (0, l.jsx)(u.m, {
                                        asContainer: !0,
                                        text: R.intl.string(R.t["/fgfWh"]),
                                        children: (0, l.jsx)(c.x, { className: j.gr, size: "xs", color: "white" }),
                                    }),
                                    I &&
                                        (0, l.jsx)(d.E, {
                                            className: j.DD,
                                            variant: "text-md/semibold",
                                            color: "text-overlay-light",
                                            children: null != s && s.length > 0 ? s : R.intl.string(R.t.Cyxddp),
                                        }),
                                ],
                            }),
                            I &&
                                (null != i || null != S) &&
                                (0, l.jsxs)("div", {
                                    className: j.yu,
                                    children: [
                                        (0, l.jsx)(L, { applicationId: i, hasTrailingDate: null != S }),
                                        null != S &&
                                            (0, l.jsx)(d.E, {
                                                className: j.BR,
                                                variant: "text-sm/normal",
                                                color: "text-overlay-light",
                                                children: S,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    y.length > 0 &&
                        (0, l.jsxs)("div", {
                            className: j.HD,
                            role: "group",
                            "aria-label": R.intl.string(R.t.WTozwe),
                            children: [
                                y.slice(0, 4).map((e) => (0, l.jsx)(b, { layerContext: f, user: e, guildId: h }, e.id)),
                                y.length > 4 &&
                                    (0, l.jsx)(v, {
                                        layerContext: f,
                                        participants: y,
                                        maxVisibleParticipants: 4,
                                        guildId: h,
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
