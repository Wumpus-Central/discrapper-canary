n.d(t, { A: () => C }), n(323874), n(14289), n(35956);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(621466),
    c = n(397927),
    o = n(688810),
    d = n(607470),
    u = n(720462),
    m = n(46054),
    x = n(409626),
    h = n(21091),
    f = n(385064),
    g = n(305080),
    _ = n(954506),
    p = n(985018),
    v = n(95225),
    A = n(782691);
function j(e, t) {
    return m.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function E(e) {
    let { variant: t, message: n, channelId: i, onCardClick: o } = e,
        [u, m] = l.useState(!1),
        x = null != n.mediaUrl,
        h = "video" === n.mediaType,
        f = "main" === t,
        g = l.useCallback(() => m(!0), []),
        _ = l.useCallback(
            (e) => {
                if (
                    !(
                        (0, s.vq)(e.target, HTMLAnchorElement) ||
                        ((0, s.vq)(e.target, HTMLSpanElement) && (0, s.vq)(e.target.parentElement, HTMLAnchorElement))
                    )
                )
                    return o(n.id);
            },
            [o, n.id],
        );
    return (0, a.jsxs)(c.DUT, {
        className: f ? v.cG : v.IU,
        onClick: _,
        children: [
            x &&
                (0, a.jsxs)("div", {
                    className: f ? v._v : v.eZ,
                    children: [
                        h
                            ? (0, a.jsx)(d.A, {
                                  src: n.mediaUrl,
                                  poster: (function (e) {
                                      try {
                                          let t = new URL(e);
                                          return t.searchParams.append("format", "webp"), t.toString();
                                      } catch {
                                          return;
                                      }
                                  })(n.mediaUrl),
                                  className: r()(f ? v.fk : v.v, u ? v.RT : v.YC),
                                  muted: !0,
                                  preload: "metadata",
                                  playsInline: !0,
                                  onLoadedData: g,
                              })
                            : (0, a.jsx)("img", {
                                  src: n.mediaUrl,
                                  className: r()(f ? v.fk : v.v, u ? v.RT : v.YC),
                                  alt: "",
                                  onLoad: g,
                              }),
                        !u &&
                            (0, a.jsx)("div", {
                                className: v.ns,
                                children: (0, a.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE, className: v.u1 }),
                            }),
                    ],
                }),
            (0, a.jsxs)("div", {
                className: f ? v.GT : v.s4,
                children: [
                    null != n.title &&
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: f ? v.KX : v._N,
                            children: j(n.title, i),
                        }),
                    n.body.length > 0 &&
                        (0, a.jsx)("div", { className: r()(v.h_, f ? v.My : v.Gd, A.PT), children: j(n.body, i) }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: i } = (0, o.Ay)(),
        { officialInvite: r, closeModal: s } = (0, g.c)(),
        { messages: c, guildId: d, channelId: m } = (0, h.A)(t),
        A = l.useCallback(() => {
            let e = r?.guild?.id ?? d;
            null != e &&
                (n(x.Ws.Announcements),
                s(),
                (0, f.A)({ invite: r, guildId: e, channelId: m, analyticsLocationStack: i }));
        }, [n, s, r, d, m, i]),
        j = l.useCallback(
            (e) => {
                let t = r?.guild?.id ?? d;
                null != t &&
                    (n(x.Ws.AnnouncementsItem),
                    s(),
                    (0, f.A)({ invite: r, guildId: t, channelId: m, messageId: e, analyticsLocationStack: i }));
            },
            [n, s, r, d, m, i],
        );
    if (null == m || 0 === c.length) return null;
    let C = 2 !== c.length,
        I = C ? c[0] : null,
        N = C ? c.slice(1) : c;
    return (0, a.jsx)(_.A, {
        title: p.intl.string(p.t.B0BV3Y),
        onClickViewAll: A,
        children: (0, a.jsxs)("div", {
            className: v.f3,
            children: [
                null != I && (0, a.jsx)(E, { variant: "main", message: I, channelId: m, onCardClick: j }),
                N.length > 0 &&
                    (0, a.jsx)(u.A, {
                        gap: 16,
                        children: N.map((e) =>
                            (0, a.jsx)(E, { variant: "small", message: e, channelId: m, onCardClick: j }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
