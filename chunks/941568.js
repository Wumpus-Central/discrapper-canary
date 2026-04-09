n.d(t, { A: () => S });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(621466),
    o = n(649658),
    c = n(397927),
    d = n(688810),
    u = n(951707),
    m = n(46054),
    x = n(405269),
    g = n(890060),
    h = n(60465),
    f = n(409626),
    _ = n(21091),
    p = n(385064),
    v = n(305080),
    A = n(954506),
    j = n(652215),
    E = n(985018),
    I = n(95225),
    b = n(782691);
function C(e, t) {
    return m.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function N(e) {
    let { variant: t, message: n, channelId: l, onCardClick: d } = e,
        [u, m] = i.useState(!1),
        h = "main" === t,
        f = i.useCallback(() => m(!0), []),
        _ = i.useCallback(
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
        p = n.media?.width != null && n.media?.height != null ? n.media.width / n.media.height : 16 / 9,
        v = n.media?.proxyUrl ?? n.media?.url,
        A = (null != v ? (0, g.V)(v) : null) ?? v;
    return (0, a.jsxs)(c.DUT, {
        className: h ? I.cG : I.IU,
        onClick: _,
        children: [
            null != n.media &&
                null != A &&
                (0, a.jsx)("div", {
                    className: h ? I._v : I.eZ,
                    children: (0, a.jsx)(o.y, {
                        readyState: u ? j.Rv1.READY : j.Rv1.LOADING,
                        aspectRatio: p,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, a.jsx)("img", {
                            src: A,
                            className: h ? I.fk : I.v,
                            alt: "",
                            draggable: !1,
                            onLoad: f,
                        }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: h ? I.GT : I.s4,
                children: [
                    null != n.title &&
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: h ? I.KX : I._N,
                            children: C(n.title, l),
                        }),
                    n.body.length > 0 &&
                        (0, a.jsx)("div", { className: r()(I.h_, h ? I.My : I.Gd, b.PT), children: C(n.body, l) }),
                    (0, a.jsxs)("div", {
                        className: I.ov,
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, x.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, a.jsxs)("div", {
                                    className: I.a5,
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
        { analyticsLocations: l } = (0, d.Ay)(),
        { officialInvite: r, closeModal: s } = (0, v.c)(),
        { messages: o, guildId: c, channelId: m } = (0, _.A)(t),
        x = i.useCallback(() => {
            let e = r?.guild?.id ?? c;
            null != e &&
                null != m &&
                (n(f.Ws.Announcements),
                h.A.setGameProfilePendingReturn({ gameId: t, channelId: m }),
                s(),
                (0, p.A)({ invite: r, guildId: e, channelId: m, analyticsLocationStack: l }));
        }, [n, s, r, c, m, l, t]),
        g = i.useCallback(
            (e) => {
                let a = r?.guild?.id ?? c;
                null != a &&
                    null != m &&
                    (n(f.Ws.AnnouncementsItem),
                    h.A.setGameProfilePendingReturn({ gameId: t, channelId: m }),
                    s(),
                    (0, p.A)({ invite: r, guildId: a, channelId: m, messageId: e, analyticsLocationStack: l }));
            },
            [n, s, r, c, m, l, t],
        );
    if (null == m || 0 === o.length) return null;
    let j = 2 !== o.length,
        b = j ? o[0] : null,
        C = j ? o.slice(1) : o;
    return (0, a.jsx)(A.A, {
        title: E.intl.string(E.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, a.jsxs)("div", {
            className: I.f3,
            children: [
                null != b && (0, a.jsx)(N, { variant: "main", message: b, channelId: m, onCardClick: g }),
                C.length > 0 &&
                    (0, a.jsx)(u.A, {
                        gap: 16,
                        children: C.map((e) =>
                            (0, a.jsx)(N, { variant: "small", message: e, channelId: m, onCardClick: g }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
