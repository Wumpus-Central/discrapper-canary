"use strict";
n.d(t, { A: () => w });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(876230),
    u = n(990078),
    c = n(176781),
    d = n(834730),
    _ = n(939249),
    h = n(429913),
    f = n(769015),
    p = n(409626),
    E = n(692969),
    m = n(569926),
    g = n(287809),
    A = n(58703),
    I = n(403362),
    T = n(922016),
    S = n(433781);
let y = r.lazy(() =>
    Promise.all([n.e("17179"), n.e("46054")])
        .then(n.bind(n, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function C(e) {
    let { participants: t, maxVisibleParticipants: n, guildId: s } = e,
        a = r.useRef(null),
        o = (0, r.useCallback)(
            () => (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(y, { users: t, guildId: s }) }),
            [t, s],
        );
    return (0, i.jsx)(T.Y, {
        renderPopout: o,
        targetElementRef: a,
        position: "right",
        children: (e) =>
            (0, i.jsx)(_.D, {
                ...e,
                innerRef: a,
                className: S.x,
                onClick: (t) => {
                    t.stopPropagation(), e.onClick?.(t);
                },
                children: (0, i.jsxs)(d.E, {
                    className: S.s,
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: ["+", t.length - n],
                }),
            }),
    });
}
var N = n(97808),
    v = n(778712),
    R = n(342296),
    O = n(812924);
function b(e) {
    let { user: t, guildId: n } = e,
        s = r.useRef(null);
    return (0, i.jsx)(R.A, {
        targetElementRef: s,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        children: (e) =>
            (0, i.jsx)(_.D, {
                ...e,
                innerRef: s,
                className: O.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, i.jsx)(N.eu, { src: t.getAvatarURL(n, 24), size: v._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
var D = n(375708);
function L(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        r = (0, h.h)(t),
        { data: s } = (0, m.I)(t),
        o = (0, E.A)({ applicationId: t, location: "ClipEmbed", source: p.GameProfileSources.ClipEmbed }),
        l = s?.name ?? r?.name;
    if (null == l) return null;
    let u = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(f.A, { game: s ?? r, size: f.M.XXSMALL, className: O.Gt, allowUnknownGameIcon: !1 }),
                (0, i.jsx)(d.E, { className: O.mO, variant: "text-sm/normal", color: "always-white", children: l }),
            ],
        }),
        c =
            null != o
                ? (0, i.jsx)(_.D, { className: a()(O.Nn, O.On), onClick: o, children: u })
                : (0, i.jsx)("span", { className: O.Nn, children: u });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c,
            !0 === n && (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "always-white", children: "\xb7" }),
        ],
    });
}
let w = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: r,
            title: s,
            guildId: _,
            className: h,
            playerState: f = l.Q6.PAUSED,
            isControlBarExpanded: p = !0,
            isFullScreen: E = !1,
            showTextContent: m = !0,
        } = e,
        T = (0, o.yK)([g.default], () => n.map((e) => g.default.getUser(e)).filter(I.Vq) ?? []),
        S = null != t ? (0, A.Fe)(new Date(t)) : null;
    return (0, i.jsxs)("div", {
        className: a()(O.oK, { [O.pd]: f === l.Q6.PLAYING && !p, [O.aS]: E }, h),
        children: [
            (0, i.jsx)("div", { className: O.Lu }),
            (0, i.jsxs)("div", {
                className: O.s$,
                children: [
                    (0, i.jsxs)("div", {
                        className: O.yR,
                        children: [
                            (0, i.jsxs)("div", {
                                className: O.$,
                                children: [
                                    (0, i.jsx)(u.m, {
                                        asContainer: !0,
                                        text: D.intl.string(D.t["/fgfWh"]),
                                        children: (0, i.jsx)(c.x, { className: O.gr, size: "xs", color: "white" }),
                                    }),
                                    m &&
                                        (0, i.jsx)(d.E, {
                                            className: O.DD,
                                            variant: "text-md/semibold",
                                            color: "always-white",
                                            children: null != s && s.length > 0 ? s : D.intl.string(D.t.Cyxddp),
                                        }),
                                ],
                            }),
                            m &&
                                (null != r || null != S) &&
                                (0, i.jsxs)("div", {
                                    className: O.yu,
                                    children: [
                                        (0, i.jsx)(L, { applicationId: r, hasTrailingDate: null != S }),
                                        null != S &&
                                            (0, i.jsx)(d.E, {
                                                className: O.BR,
                                                variant: "text-sm/normal",
                                                color: "always-white",
                                                children: S,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    T.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: O.HD,
                            role: "group",
                            "aria-label": D.intl.string(D.t.WTozwe),
                            children: [
                                T.slice(0, 4).map((e) => (0, i.jsx)(b, { user: e, guildId: _ }, e.id)),
                                T.length > 4 &&
                                    (0, i.jsx)(C, { participants: T, maxVisibleParticipants: 4, guildId: _ }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
