"use strict";
n.d(t, { A: () => L });
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
    f = n(409626),
    p = n(692969),
    E = n(569926),
    m = n(287809),
    g = n(58703),
    A = n(403362),
    I = n(922016),
    T = n(732085);
let S = r.lazy(() =>
    Promise.all([n.e("30171"), n.e("46054")])
        .then(n.bind(n, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function y(e) {
    let { participants: t, maxVisibleParticipants: n, guildId: s } = e,
        a = r.useRef(null),
        o = (0, r.useCallback)(
            () => (0, i.jsx)(r.Suspense, { fallback: null, children: (0, i.jsx)(S, { users: t, guildId: s }) }),
            [t, s],
        );
    return (0, i.jsx)(I.Y, {
        renderPopout: o,
        targetElementRef: a,
        position: "right",
        children: (e) =>
            (0, i.jsx)(_.D, {
                ...e,
                innerRef: a,
                className: T.x,
                onClick: (t) => {
                    t.stopPropagation(), e.onClick?.(t);
                },
                children: (0, i.jsxs)(d.E, {
                    className: T.s,
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: ["+", t.length - n],
                }),
            }),
    });
}
var C = n(97808),
    N = n(778712),
    v = n(342296),
    R = n(44796);
function O(e) {
    let { user: t, guildId: n } = e,
        s = r.useRef(null);
    return (0, i.jsx)(v.A, {
        targetElementRef: s,
        shouldPreload: !0,
        user: t,
        guildId: n,
        position: "bottom",
        children: (e) =>
            (0, i.jsx)(_.D, {
                ...e,
                innerRef: s,
                className: R.RB,
                onClick: (t) => {
                    e.onClick(t), t.stopPropagation();
                },
                "aria-label": t.username,
                children: (0, i.jsx)(C.eu, { src: t.getAvatarURL(n, 24), size: N._3.SIZE_24, "aria-hidden": !0 }),
            }),
    });
}
var b = n(375708);
function D(e) {
    let { applicationId: t, separator: n } = e,
        r = (0, h.h)(t),
        { data: s } = (0, E.I)(t),
        a = (0, p.A)({ applicationId: t, location: "ClipEmbed", source: f.Ob.ClipEmbed }),
        o = s?.name ?? r?.name;
    return null == o
        ? null
        : null != a
          ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(_.D, { tag: "span", className: R.On, onClick: a, children: o }), n],
            })
          : (0, i.jsxs)(i.Fragment, { children: [o, n] });
}
let L = function (e) {
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
            showTextContent: I = !0,
        } = e,
        T = (0, o.yK)([m.default], () => n.map((e) => m.default.getUser(e)).filter(A.Vq) ?? []),
        S = null != t ? (0, g.Fe)(new Date(t)) : null;
    return (0, i.jsxs)("div", {
        className: a()(R.oK, { [R.pd]: f === l.Q6.PLAYING && !p, [R.aS]: E }, h),
        children: [
            (0, i.jsx)("div", { className: R.Lu }),
            (0, i.jsxs)("div", {
                className: R.s$,
                children: [
                    (0, i.jsxs)("div", {
                        className: R.yR,
                        children: [
                            (0, i.jsxs)("div", {
                                className: R.$,
                                children: [
                                    (0, i.jsx)(u.m, {
                                        asContainer: !0,
                                        text: b.intl.string(b.t["/fgfWh"]),
                                        children: (0, i.jsx)(c.x, { className: R.gr, size: "xs", color: "white" }),
                                    }),
                                    I &&
                                        (0, i.jsx)(d.E, {
                                            className: R.DD,
                                            variant: "text-md/semibold",
                                            color: "always-white",
                                            children: null != s && s.length > 0 ? s : b.intl.string(b.t.Cyxddp),
                                        }),
                                ],
                            }),
                            I &&
                                (null != r || null != S) &&
                                (0, i.jsxs)(d.E, {
                                    className: R.yu,
                                    variant: "text-sm/normal",
                                    color: "always-white",
                                    children: [
                                        (0, i.jsx)(D, { applicationId: r, separator: null != S ? " \xb7 " : void 0 }),
                                        S,
                                    ],
                                }),
                        ],
                    }),
                    T.length > 0 &&
                        (0, i.jsxs)("div", {
                            className: R.HD,
                            role: "group",
                            "aria-label": b.intl.string(b.t.WTozwe),
                            children: [
                                T.slice(0, 4).map((e) => (0, i.jsx)(O, { user: e, guildId: _ }, e.id)),
                                T.length > 4 &&
                                    (0, i.jsx)(y, { participants: T, maxVisibleParticipants: 4, guildId: _ }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
