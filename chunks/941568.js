n.d(t, { A: () => T });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(621466),
    o = n(649658),
    d = n(939249),
    c = n(534514),
    u = n(834730),
    m = n(460905),
    _ = n(688810),
    h = n(951707),
    f = n(46054),
    g = n(405269),
    p = n(890060),
    x = n(60465),
    b = n(409626),
    A = n(21091),
    v = n(385064),
    E = n(305080),
    I = n(954506),
    C = n(652215),
    N = n(985018),
    j = n(468489),
    y = n(992595);
function S(e, t) {
    return f.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function R(e) {
    let { variant: t, message: n, channelId: i, onCardClick: _ } = e,
        [h, f] = l.useState(!1),
        x = "main" === t,
        b = l.useCallback(() => f(!0), []),
        A = l.useCallback(
            (e) => {
                if (
                    !(
                        (0, s.vq)(e.target, HTMLAnchorElement) ||
                        ((0, s.vq)(e.target, HTMLSpanElement) && (0, s.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return _(n.id);
            },
            [_, n.id],
        ),
        v = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        E = n.media?.proxyUrl ?? n.media?.url,
        I = (null != E ? (0, p.V)(E) : null) ?? E;
    return (0, a.jsxs)(d.D, {
        className: x ? j.cG : j.IU,
        onClick: A,
        children: [
            null != n.media &&
                null != I &&
                (0, a.jsx)("div", {
                    className: x ? j._v : j.eZ,
                    children: (0, a.jsx)(o.y, {
                        readyState: h ? C.Rv1.READY : C.Rv1.LOADING,
                        aspectRatio: v,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, a.jsx)("img", {
                            src: I,
                            className: x ? j.fk : j.v,
                            alt: "",
                            draggable: !1,
                            onLoad: b,
                        }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: x ? j.GT : j.s4,
                children: [
                    null != n.title &&
                        (0, a.jsx)(c.D, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: x ? j.KX : j._N,
                            children: S(n.title, i),
                        }),
                    n.body.length > 0 &&
                        (0, a.jsx)("div", { className: r()(j.h_, x ? j.My : j.Gd, y.PT), children: S(n.body, i) }),
                    (0, a.jsxs)("div", {
                        className: j.ov,
                        children: [
                            (0, a.jsx)(u.E, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, g.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, a.jsxs)("div", {
                                    className: j.a5,
                                    children: [
                                        (0, a.jsx)(m.n, { size: "xs", color: "currentColor" }),
                                        (0, a.jsx)(u.E, {
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
function T(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: i } = (0, _.Ay)(),
        { officialInvite: r, closeModal: s, getScrollOffset: o } = (0, E.c)(),
        { messages: d, guildId: c, channelId: u } = (0, A.A)(t),
        m = l.useCallback(() => {
            let e = r?.guild?.id ?? c;
            null != e &&
                null != u &&
                (n(b.Ws.Announcements),
                x.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: o() }),
                s(),
                (0, v.A)({ invite: r, guildId: e, channelId: u, analyticsLocationStack: i }));
        }, [n, s, o, r, c, u, i, t]),
        f = l.useCallback(
            (e) => {
                let a = r?.guild?.id ?? c;
                null != a &&
                    null != u &&
                    (n(b.Ws.AnnouncementsItem),
                    x.A.setGameProfilePendingReturn({ gameId: t, channelId: u, initialScrollOffset: o() }),
                    s(),
                    (0, v.A)({ invite: r, guildId: a, channelId: u, messageId: e, analyticsLocationStack: i }));
            },
            [n, s, o, r, c, u, i, t],
        );
    if (null == u || 0 === d.length) return null;
    let g = 2 !== d.length,
        p = g ? d[0] : null,
        C = g ? d.slice(1) : d;
    return (0, a.jsx)(I.A, {
        title: N.intl.string(N.t.B0BV3Y),
        onClickViewAll: m,
        children: (0, a.jsxs)("div", {
            className: j.f3,
            children: [
                null != p && (0, a.jsx)(R, { variant: "main", message: p, channelId: u, onCardClick: f }),
                C.length > 0 &&
                    (0, a.jsx)(h.A, {
                        gap: 16,
                        children: C.map((e) =>
                            (0, a.jsx)(R, { variant: "small", message: e, channelId: u, onCardClick: f }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
