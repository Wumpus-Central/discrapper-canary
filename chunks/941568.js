n.d(t, { A: () => C }), n(323874), n(14289), n(35956);
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(397927),
    c = n(688810),
    o = n(607470),
    d = n(720462),
    u = n(46054),
    m = n(409626),
    x = n(21091),
    h = n(385064),
    g = n(305080),
    f = n(954506),
    _ = n(985018),
    p = n(95225),
    v = n(782691);
function A(e, t) {
    return u.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function j(e) {
    let { variant: t, message: n, channelId: l, onCardClick: c } = e,
        [d, u] = i.useState(!1),
        m = null != n.mediaUrl,
        x = "video" === n.mediaType,
        h = "main" === t,
        g = i.useCallback(() => u(!0), []),
        f = i.useCallback(() => c(n.id), [c, n.id]);
    return (0, a.jsxs)(s.DUT, {
        className: h ? p.cG : p.IU,
        onClick: f,
        children: [
            m &&
                (0, a.jsxs)("div", {
                    className: h ? p._v : p.eZ,
                    children: [
                        x
                            ? (0, a.jsx)(o.A, {
                                  src: n.mediaUrl,
                                  poster: (function (e) {
                                      try {
                                          let t = new URL(e);
                                          return t.searchParams.append("format", "webp"), t.toString();
                                      } catch {
                                          return;
                                      }
                                  })(n.mediaUrl),
                                  className: r()(h ? p.fk : p.v, d ? p.RT : p.YC),
                                  muted: !0,
                                  preload: "metadata",
                                  playsInline: !0,
                                  onLoadedData: g,
                              })
                            : (0, a.jsx)("img", {
                                  src: n.mediaUrl,
                                  className: r()(h ? p.fk : p.v, d ? p.RT : p.YC),
                                  alt: "",
                                  onLoad: g,
                              }),
                        !d &&
                            (0, a.jsx)("div", {
                                className: p.ns,
                                children: (0, a.jsx)(s.y$y, { type: s.tVU.SPINNING_CIRCLE, className: p.u1 }),
                            }),
                    ],
                }),
            (0, a.jsxs)("div", {
                className: h ? p.GT : p.s4,
                children: [
                    null != n.title &&
                        (0, a.jsx)(s.Heading, {
                            variant: h ? "heading-md/bold" : "heading-sm/bold",
                            color: "text-strong",
                            className: h ? p.KX : p._N,
                            children: A(n.title, l),
                        }),
                    n.body.length > 0 &&
                        (0, a.jsx)("div", { className: r()(p.h_, h ? p.My : p.Gd, v.PT), children: A(n.body, l) }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: l } = (0, c.Ay)(),
        { officialInvite: r, closeModal: s } = (0, g.c)(),
        { messages: o, guildId: u, channelId: v } = (0, x.A)(t),
        A = i.useCallback(() => {
            let e = r?.guild?.id ?? u;
            null != e &&
                (n(m.Ws.Announcements),
                s(),
                (0, h.A)({ invite: r, guildId: e, channelId: v, analyticsLocationStack: l }));
        }, [n, s, r, u, v, l]),
        C = i.useCallback(
            (e) => {
                let t = r?.guild?.id ?? u;
                null != t &&
                    (n(m.Ws.AnnouncementsItem),
                    s(),
                    (0, h.A)({ invite: r, guildId: t, channelId: v, messageId: e, analyticsLocationStack: l }));
            },
            [n, s, r, u, v, l],
        );
    if (null == v || 0 === o.length) return null;
    let E = 2 !== o.length,
        I = E ? o[0] : null,
        N = E ? o.slice(1) : o;
    return (0, a.jsx)(f.A, {
        title: _.intl.string(_.t.B0BV3Y),
        onClickViewAll: A,
        children: (0, a.jsxs)("div", {
            className: p.f3,
            children: [
                null != I && (0, a.jsx)(j, { variant: "main", message: I, channelId: v, onCardClick: C }),
                N.length > 0 &&
                    (0, a.jsx)(d.A, {
                        gap: "sm",
                        className: p.jG,
                        children: N.map((e) =>
                            (0, a.jsx)(j, { variant: "small", message: e, channelId: v, onCardClick: C }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
