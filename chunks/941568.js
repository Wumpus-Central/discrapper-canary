n.d(t, { A: () => S });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(621466),
    o = n(649658),
    c = n(397927),
    d = n(688810),
    u = n(951707),
    m = n(46054),
    f = n(405269),
    x = n(890060),
    h = n(60465),
    g = n(409626),
    p = n(21091),
    _ = n(385064),
    v = n(305080),
    A = n(954506),
    b = n(652215),
    E = n(985018),
    j = n(95225),
    I = n(782691);
function C(e, t) {
    return m.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function N(e) {
    let { variant: t, message: n, channelId: i, onCardClick: d } = e,
        [u, m] = l.useState(!1),
        h = "main" === t,
        g = l.useCallback(() => m(!0), []),
        p = l.useCallback(
            (e) => {
                if (
                    !(
                        (0, s.vq)(e.target, HTMLAnchorElement) ||
                        ((0, s.vq)(e.target, HTMLSpanElement) && (0, s.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return d(n.id);
            },
            [d, n.id],
        ),
        _ = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        v = n.media?.proxyUrl ?? n.media?.url,
        A = (null != v ? (0, x.V)(v) : null) ?? v;
    return (0, a.jsxs)(c.DUT, {
        className: h ? j.cG : j.IU,
        onClick: p,
        children: [
            null != n.media &&
                null != A &&
                (0, a.jsx)("div", {
                    className: h ? j._v : j.eZ,
                    children: (0, a.jsx)(o.y, {
                        readyState: u ? b.Rv1.READY : b.Rv1.LOADING,
                        aspectRatio: _,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, a.jsx)("img", {
                            src: A,
                            className: h ? j.fk : j.v,
                            alt: "",
                            draggable: !1,
                            onLoad: g,
                        }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: h ? j.GT : j.s4,
                children: [
                    null != n.title &&
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: h ? j.KX : j._N,
                            children: C(n.title, i),
                        }),
                    n.body.length > 0 &&
                        (0, a.jsx)("div", { className: r()(j.h_, h ? j.My : j.Gd, I.PT), children: C(n.body, i) }),
                    (0, a.jsxs)("div", {
                        className: j.ov,
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, f.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, a.jsxs)("div", {
                                    className: j.a5,
                                    children: [
                                        (0, a.jsx)(c.nm2, { size: "xs", color: "currentColor" }),
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(E.intl.currentLocale).format(
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
function S(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: i } = (0, d.Ay)(),
        { officialInvite: r, closeModal: s, getScrollOffset: o } = (0, v.c)(),
        { messages: c, guildId: m, channelId: f } = (0, p.A)(t),
        x = l.useCallback(() => {
            let e = r?.guild?.id ?? m;
            null != e &&
                null != f &&
                (n(g.Ws.Announcements),
                h.A.setGameProfilePendingReturn({ gameId: t, channelId: f, initialScrollOffset: o() }),
                s(),
                (0, _.A)({ invite: r, guildId: e, channelId: f, analyticsLocationStack: i }));
        }, [n, s, o, r, m, f, i, t]),
        b = l.useCallback(
            (e) => {
                let a = r?.guild?.id ?? m;
                null != a &&
                    null != f &&
                    (n(g.Ws.AnnouncementsItem),
                    h.A.setGameProfilePendingReturn({ gameId: t, channelId: f, initialScrollOffset: o() }),
                    s(),
                    (0, _.A)({ invite: r, guildId: a, channelId: f, messageId: e, analyticsLocationStack: i }));
            },
            [n, s, o, r, m, f, i, t],
        );
    if (null == f || 0 === c.length) return null;
    let I = 2 !== c.length,
        C = I ? c[0] : null,
        S = I ? c.slice(1) : c;
    return (0, a.jsx)(A.A, {
        title: E.intl.string(E.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, a.jsxs)("div", {
            className: j.f3,
            children: [
                null != C && (0, a.jsx)(N, { variant: "main", message: C, channelId: f, onCardClick: b }),
                S.length > 0 &&
                    (0, a.jsx)(u.A, {
                        gap: 16,
                        children: S.map((e) =>
                            (0, a.jsx)(N, { variant: "small", message: e, channelId: f, onCardClick: b }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
