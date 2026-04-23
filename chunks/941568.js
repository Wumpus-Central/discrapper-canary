n.d(t, { A: () => L });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(621466),
    o = n(649658),
    c = n(939249),
    d = n(534514),
    u = n(834730),
    m = n(460905),
    h = n(688810),
    f = n(951707),
    _ = n(46054),
    g = n(405269),
    p = n(890060),
    x = n(60465),
    E = n(409626),
    A = n(21091),
    v = n(385064),
    I = n(305080),
    b = n(954506),
    j = n(652215),
    N = n(985018),
    C = n(468489),
    S = n(992595);
function y(e, t) {
    return _.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function R(e) {
    let { variant: t, message: n, channelId: i, onCardClick: h } = e,
        [f, _] = a.useState(!1),
        x = "main" === t,
        E = a.useCallback(() => _(!0), []),
        A = a.useCallback(
            (e) => {
                if (
                    !(
                        (0, s.vq)(e.target, HTMLAnchorElement) ||
                        ((0, s.vq)(e.target, HTMLSpanElement) && (0, s.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return h(n.id);
            },
            [h, n.id],
        ),
        v = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        I = n.media?.proxyUrl ?? n.media?.url,
        b = (null != I ? (0, p.V)(I) : null) ?? I;
    return (0, l.jsxs)(c.D, {
        className: x ? C.cG : C.IU,
        onClick: A,
        children: [
            null != n.media &&
                null != b &&
                (0, l.jsx)("div", {
                    className: x ? C._v : C.eZ,
                    children: (0, l.jsx)(o.y, {
                        readyState: f ? j.Rv1.READY : j.Rv1.LOADING,
                        aspectRatio: v,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, l.jsx)("img", {
                            src: b,
                            className: x ? C.fk : C.v,
                            alt: "",
                            draggable: !1,
                            onLoad: E,
                        }),
                    }),
                }),
            (0, l.jsxs)("div", {
                className: x ? C.GT : C.s4,
                children: [
                    null != n.title &&
                        (0, l.jsx)(d.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: x ? C.KX : C._N,
                            children: y(n.title, i),
                        }),
                    n.body.length > 0 &&
                        (0, l.jsx)("div", { className: r()(C.h_, x ? C.My : C.Gd, S.PT), children: y(n.body, i) }),
                    (0, l.jsxs)("div", {
                        className: C.ov,
                        children: [
                            (0, l.jsx)(u.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, g.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, l.jsxs)("div", {
                                    className: C.a5,
                                    children: [
                                        (0, l.jsx)(m.n, { size: "xs", color: "currentColor" }),
                                        (0, l.jsx)(u.E, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(N.intl.currentLocale).format(
                                                n.reactionCount,
                                            ),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function L(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: i } = (0, h.Ay)(),
        { officialInvite: r, closeModal: s, getScrollOffset: o } = (0, I.c)(),
        { messages: c, guildId: d, channelId: u } = (0, A.A)(t),
        m = a.useCallback(() => {
            let e = r?.guild?.id ?? d;
            null != e &&
                null != u &&
                (n(E.Ws.Announcements),
                x.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: o() }),
                s(),
                (0, v.A)({ invite: r, guildId: e, channelId: u, analyticsLocationStack: i }));
        }, [n, s, o, r, d, u, i, t]),
        _ = a.useCallback(
            (e) => {
                let l = r?.guild?.id ?? d;
                null != l &&
                    null != u &&
                    (n(E.Ws.AnnouncementsItem),
                    x.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: o() }),
                    s(),
                    (0, v.A)({ invite: r, guildId: l, channelId: u, messageId: e, analyticsLocationStack: i }));
            },
            [n, s, o, r, d, u, i, t],
        );
    if (null == u || 0 === c.length) return null;
    let g = 2 !== c.length,
        p = g ? c[0] : null,
        j = g ? c.slice(1) : c;
    return (0, l.jsx)(b.A, {
        title: N.intl.string(N.t.B0BV3Y),
        onClickViewAll: m,
        children: (0, l.jsxs)("div", {
            className: C.f3,
            children: [
                null != p && (0, l.jsx)(R, { variant: "main", message: p, channelId: u, onCardClick: _ }),
                j.length > 0 &&
                    (0, l.jsx)(f.A, {
                        gap: 16,
                        children: j.map((e) =>
                            (0, l.jsx)(R, { variant: "small", message: e, channelId: u, onCardClick: _ }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
