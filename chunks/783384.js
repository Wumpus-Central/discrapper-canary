"use strict";
n.d(t, { A: () => M });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(876230),
    d = n(990078),
    c = n(176781),
    u = n(834730),
    _ = n(939249),
    E = n(429913),
    A = n(769015),
    h = n(409626),
    I = n(692969),
    f = n(569926),
    p = n(287809),
    T = n(58703),
    m = n(403362),
    g = n(922016),
    S = n(433781);
let N = r.lazy(() =>
    Promise.all([n.e("17179"), n.e("46054")])
        .then(n.bind(n, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function C(e) {
    let { participants: t, maxVisibleParticipants: n, guildId: a } = e,
        s = r.useRef(null),
        l = (0, r.useCallback)(
            () => (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(N, { users: t, guildId: a }) }),
            [t, a],
        );
    return (0, i.jsx)(g.Y, {
        renderPopout: l,
        targetElementRef: s,
        position: "right",
        children: (e) =>
            (0, i.jsx)(_.D, {
                ...e,
                innerRef: s,
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
var R = n(97808),
    O = n(778712),
    L = n(342296),
    D = n(812924);
function y(e) {
    let { user: t, guildId: n } = e,
        a = r.useRef(null);
    return (0, i.jsx)(L.A, {
        targetElementRef: a,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        children: (e) =>
            (0, i.jsx)(_.D, {
                ...e,
                innerRef: a,
                className: D.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, i.jsx)(R.eu, { src: t.getAvatarURL(n, 24), size: O._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
var v = n(375708);
function b(e) {
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
let M = function (e) {
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
        g = (0, l.yK)([p.default], () => n.map((e) => p.default.getUser(e)).filter(m.Vq) ?? []),
        S = null != t ? (0, T.Fe)(new Date(t)) : null;
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
                                        text: v.intl.string(v.t["/fgfWh"]),
                                        children: (0, i.jsx)(c.x, { className: D.gr, size: "xs", color: "white" }),
                                    }),
                                    f &&
                                        (0, i.jsx)(u.E, {
                                            className: D.DD,
                                            variant: "text-md/semibold",
                                            color: "text-overlay-light",
                                            children: null != a && a.length > 0 ? a : v.intl.string(v.t.Cyxddp),
                                        }),
                                ],
                            }),
                            f &&
                                (null != r || null != S) &&
                                (0, i.jsxs)("div", {
                                    className: D.yu,
                                    children: [
                                        (0, i.jsx)(b, { applicationId: r, hasTrailingDate: null != S }),
                                        null != S &&
                                            (0, i.jsx)(u.E, {
                                                className: D.BR,
                                                variant: "text-sm/normal",
                                                color: "text-overlay-light",
                                                children: S,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    g.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: D.HD,
                            role: "group",
                            "aria-label": v.intl.string(v.t.WTozwe),
                            children: [
                                g.slice(0, 4).map((e) => (0, i.jsx)(y, { user: e, guildId: _ }, e.id)),
                                g.length > 4 &&
                                    (0, i.jsx)(C, { participants: g, maxVisibleParticipants: 4, guildId: _ }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
