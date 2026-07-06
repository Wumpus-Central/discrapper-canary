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
    E = n(409626),
    p = n(692969),
    m = n(569926),
    g = n(287809),
    A = n(58703),
    I = n(403362),
    T = n(922016),
    S = n(433781);
let N = r.lazy(() =>
    Promise.all([n.e("17179"), n.e("46054")])
        .then(n.bind(n, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function C(e) {
    let { participants: t, maxVisibleParticipants: n, guildId: s } = e,
        a = r.useRef(null),
        o = (0, r.useCallback)(
            () => (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(N, { users: t, guildId: s }) }),
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
var y = n(97808),
    O = n(778712),
    R = n(342296),
    v = n(812924);
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
                className: v.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, i.jsx)(y.eu, { src: t.getAvatarURL(n, 24), size: O._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
var L = n(375708);
function D(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        r = (0, h.h)(t),
        { data: s } = (0, m.I)(t),
        o = (0, p.A)({ applicationId: t, location: "ClipEmbed", source: E.GameProfileSources.ClipEmbed }),
        l = s?.name ?? r?.name;
    if (null == l) return null;
    let u = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(f.A, { game: s ?? r, size: f.M.XXSMALL, className: v.Gt, allowUnknownGameIcon: !1 }),
                (0, i.jsx)(d.E, {
                    className: v.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: l,
                }),
            ],
        }),
        c =
            null != o
                ? (0, i.jsx)(_.D, { className: a()(v.Nn, v.On), onClick: o, children: u })
                : (0, i.jsx)("span", { className: v.Nn, children: u });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c,
            !0 === n && (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
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
            isControlBarExpanded: E = !0,
            isFullScreen: p = !1,
            showTextContent: m = !0,
        } = e,
        T = (0, o.yK)([g.default], () => n.map((e) => g.default.getUser(e)).filter(I.Vq) ?? []),
        S = null != t ? (0, A.Fe)(new Date(t)) : null;
    return (0, i.jsxs)("div", {
        className: a()(v.oK, { [v.pd]: f === l.Q6.PLAYING && !E, [v.aS]: p }, h),
        children: [
            (0, i.jsx)("div", { className: v.Lu }),
            (0, i.jsxs)("div", {
                className: v.s$,
                children: [
                    (0, i.jsxs)("div", {
                        className: v.yR,
                        children: [
                            (0, i.jsxs)("div", {
                                className: v.$,
                                children: [
                                    (0, i.jsx)(u.m, {
                                        asContainer: !0,
                                        text: L.intl.string(L.t["/fgfWh"]),
                                        children: (0, i.jsx)(c.x, { className: v.gr, size: "xs", color: "white" }),
                                    }),
                                    m &&
                                        (0, i.jsx)(d.E, {
                                            className: v.DD,
                                            variant: "text-md/semibold",
                                            color: "text-overlay-light",
                                            children: null != s && s.length > 0 ? s : L.intl.string(L.t.Cyxddp),
                                        }),
                                ],
                            }),
                            m &&
                                (null != r || null != S) &&
                                (0, i.jsxs)("div", {
                                    className: v.yu,
                                    children: [
                                        (0, i.jsx)(D, { applicationId: r, hasTrailingDate: null != S }),
                                        null != S &&
                                            (0, i.jsx)(d.E, {
                                                className: v.BR,
                                                variant: "text-sm/normal",
                                                color: "text-overlay-light",
                                                children: S,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    T.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: v.HD,
                            role: "group",
                            "aria-label": L.intl.string(L.t.WTozwe),
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
