n.d(t, { A: () => N });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(621466),
    c = n(649658),
    o = n(397927),
    d = n(688810),
    u = n(951707),
    m = n(46054),
    x = n(405269),
    h = n(890060),
    g = n(409626),
    f = n(21091),
    p = n(385064),
    _ = n(305080),
    v = n(954506),
    A = n(652215),
    j = n(985018),
    E = n(576404),
    C = n(830684);
function I(e, t) {
    return m.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function b(e) {
    let { variant: t, message: n, channelId: i, onCardClick: d } = e,
        [u, m] = l.useState(!1),
        g = "main" === t,
        f = l.useCallback(() => m(!0), []),
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
        b = (null != v ? (0, h.V)(v) : null) ?? v;
    return (0, a.jsxs)(o.DUT, {
        className: g ? E.cG : E.IU,
        onClick: p,
        children: [
            null != n.media &&
                null != b &&
                (0, a.jsx)("div", {
                    className: g ? E._v : E.eZ,
                    children: (0, a.jsx)(c.y, {
                        readyState: u ? A.Rv1.READY : A.Rv1.LOADING,
                        aspectRatio: _,
                        placeholder: n.media.placeholder,
                        placeholderVersion: n.media.placeholderVersion,
                        placeholderStyle: { width: "100%", height: "100%", objectFit: "cover" },
                        children: (0, a.jsx)("img", {
                            src: b,
                            className: g ? E.fk : E.v,
                            alt: "",
                            draggable: !1,
                            onLoad: f,
                        }),
                    }),
                }),
            (0, a.jsxs)("div", {
                className: g ? E.GT : E.s4,
                children: [
                    null != n.title &&
                        (0, a.jsx)(o.Heading, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: g ? E.KX : E._N,
                            children: I(n.title, i),
                        }),
                    n.body.length > 0 &&
                        (0, a.jsx)("div", { className: r()(E.h_, g ? E.My : E.Gd, C.PT), children: I(n.body, i) }),
                    (0, a.jsxs)("div", {
                        className: E.ov,
                        children: [
                            (0, a.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, x.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, a.jsxs)("div", {
                                    className: E.a5,
                                    children: [
                                        (0, a.jsx)(o.nm2, { size: "xs", color: "currentColor" }),
                                        (0, a.jsx)(o.Text, {
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
        { analyticsLocations: i } = (0, d.Ay)(),
        { officialInvite: r, closeModal: s } = (0, _.c)(),
        { messages: c, guildId: o, channelId: m } = (0, f.A)(t),
        x = l.useCallback(() => {
            let e = r?.guild?.id ?? o;
            null != e &&
                (n(g.Ws.Announcements),
                s(),
                (0, p.A)({ invite: r, guildId: e, channelId: m, analyticsLocationStack: i }));
        }, [n, s, r, o, m, i]),
        h = l.useCallback(
            (e) => {
                let t = r?.guild?.id ?? o;
                null != t &&
                    (n(g.Ws.AnnouncementsItem),
                    s(),
                    (0, p.A)({ invite: r, guildId: t, channelId: m, messageId: e, analyticsLocationStack: i }));
            },
            [n, s, r, o, m, i],
        );
    if (null == m || 0 === c.length) return null;
    let A = 2 !== c.length,
        C = A ? c[0] : null,
        I = A ? c.slice(1) : c;
    return (0, a.jsx)(v.A, {
        title: j.intl.string(j.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, a.jsxs)("div", {
            className: E.f3,
            children: [
                null != C && (0, a.jsx)(b, { variant: "main", message: C, channelId: m, onCardClick: h }),
                I.length > 0 &&
                    (0, a.jsx)(u.A, {
                        gap: 16,
                        children: I.map((e) =>
                            (0, a.jsx)(b, { variant: "small", message: e, channelId: m, onCardClick: h }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
