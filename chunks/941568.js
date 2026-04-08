n.d(t, { A: () => N });
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
    h = n(409626),
    f = n(21091),
    p = n(385064),
    _ = n(305080),
    v = n(954506),
    A = n(652215),
    j = n(985018),
    E = n(95225),
    b = n(782691);
function I(e, t) {
    return m.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function C(e) {
    let { variant: t, message: n, channelId: l, onCardClick: d } = e,
        [u, m] = i.useState(!1),
        h = "main" === t,
        f = i.useCallback(() => m(!0), []),
        p = i.useCallback(
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
        C = (null != v ? (0, g.V)(v) : null) ?? v;
    return (0, a.jsxs)(c.DUT, {
        className: h ? E.cG : E.IU,
        onClick: p,
        children: [
            null != n.media &&
                null != C &&
                (0, a.jsx)("div", {
                    className: h ? E._v : E.eZ,
                    children: (0, a.jsx)(o.y, {
                        readyState: u ? A.Rv1.READY : A.Rv1.LOADING,
                        aspectRatio: _,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, a.jsx)("img", {
                            src: C,
                            className: h ? E.fk : E.v,
                            alt: "",
                            draggable: !1,
                            onLoad: f,
                        }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: h ? E.GT : E.s4,
                children: [
                    null != n.title &&
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: h ? E.KX : E._N,
                            children: I(n.title, l),
                        }),
                    n.body.length > 0 &&
                        (0, a.jsx)("div", { className: r()(E.h_, h ? E.My : E.Gd, b.PT), children: I(n.body, l) }),
                    (0, a.jsxs)("div", {
                        className: E.ov,
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, x.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, a.jsxs)("div", {
                                    className: E.a5,
                                    children: [
                                        (0, a.jsx)(c.nm2, { size: "xs", color: "currentColor" }),
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(j.intl.currentLocale).format(
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
function N(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, d.Ay)(),
        { officialInvite: r, closeModal: s } = (0, _.c)(),
        { messages: o, guildId: c, channelId: m } = (0, f.A)(t),
        x = i.useCallback(() => {
            let e = r?.guild?.id ?? c;
            null != e &&
                (n(h.Ws.Announcements),
                s(),
                (0, p.A)({ invite: r, guildId: e, channelId: m, analyticsLocationStack: l }));
        }, [n, s, r, c, m, l]),
        g = i.useCallback(
            (e) => {
                let t = r?.guild?.id ?? c;
                null != t &&
                    (n(h.Ws.AnnouncementsItem),
                    s(),
                    (0, p.A)({ invite: r, guildId: t, channelId: m, messageId: e, analyticsLocationStack: l }));
            },
            [n, s, r, c, m, l],
        );
    if (null == m || 0 === o.length) return null;
    let A = 2 !== o.length,
        b = A ? o[0] : null,
        I = A ? o.slice(1) : o;
    return (0, a.jsx)(v.A, {
        title: j.intl.string(j.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, a.jsxs)("div", {
            className: E.f3,
            children: [
                null != b && (0, a.jsx)(C, { variant: "main", message: b, channelId: m, onCardClick: g }),
                I.length > 0 &&
                    (0, a.jsx)(u.A, {
                        gap: 16,
                        children: I.map((e) =>
                            (0, a.jsx)(C, { variant: "small", message: e, channelId: m, onCardClick: g }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
