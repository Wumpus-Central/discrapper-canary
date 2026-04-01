n.d(t, { A: () => I }), n(323874), n(14289), n(35956);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(621466),
    c = n(397927),
    o = n(688810),
    d = n(607470),
    u = n(951707),
    m = n(46054),
    x = n(405269),
    h = n(409626),
    g = n(21091),
    f = n(385064),
    p = n(305080),
    _ = n(954506),
    v = n(985018),
    A = n(95225),
    j = n(782691);
function E(e, t) {
    return m.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function C(e) {
    let { variant: t, message: n, channelId: i, onCardClick: o } = e,
        [u, m] = l.useState(!1),
        h = null != n.mediaUrl,
        g = "video" === n.mediaType,
        f = "main" === t,
        p = l.useCallback(() => m(!0), []),
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
        className: f ? A.cG : A.IU,
        onClick: _,
        children: [
            h &&
                (0, a.jsxs)("div", {
                    className: f ? A._v : A.eZ,
                    children: [
                        g
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
                                  className: r()(f ? A.fk : A.v, u ? A.RT : A.YC),
                                  muted: !0,
                                  preload: "metadata",
                                  playsInline: !0,
                                  onLoadedData: p,
                              })
                            : (0, a.jsx)("img", {
                                  src: n.mediaUrl,
                                  className: r()(f ? A.fk : A.v, u ? A.RT : A.YC),
                                  alt: "",
                                  onLoad: p,
                                  draggable: !1,
                              }),
                        !u &&
                            (0, a.jsx)("div", {
                                className: A.ns,
                                children: (0, a.jsx)(c.y$y, { type: c.tVU.SPINNING_CIRCLE, className: A.u1 }),
                            }),
                    ],
                }),
            (0, a.jsxs)("div", {
                className: f ? A.GT : A.s4,
                children: [
                    null != n.title &&
                        (0, a.jsx)(c.Heading, {
                            variant: "heading-md/bold",
                            color: "text-strong",
                            className: f ? A.KX : A._N,
                            children: E(n.title, i),
                        }),
                    n.body.length > 0 &&
                        (0, a.jsx)("div", { className: r()(A.h_, f ? A.My : A.Gd, j.PT), children: E(n.body, i) }),
                    (0, a.jsxs)("div", {
                        className: A.ov,
                        children: [
                            (0, a.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: (0, x.i$)(new Date(n.timestamp), "LL"),
                            }),
                            n.reactionCount > 0 &&
                                (0, a.jsxs)("div", {
                                    className: A.a5,
                                    children: [
                                        (0, a.jsx)(c.nm2, { size: "xs", color: "currentColor" }),
                                        (0, a.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "text-muted",
                                            children: new Intl.NumberFormat(v.intl.currentLocale).format(
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
function I(e) {
    let { gameId: t, trackAction: n } = e,
        { analyticsLocations: i } = (0, o.Ay)(),
        { officialInvite: r, closeModal: s } = (0, p.c)(),
        { messages: c, guildId: d, channelId: m } = (0, g.A)(t),
        x = l.useCallback(() => {
            let e = r?.guild?.id ?? d;
            null != e &&
                (n(h.Ws.Announcements),
                s(),
                (0, f.A)({ invite: r, guildId: e, channelId: m, analyticsLocationStack: i }));
        }, [n, s, r, d, m, i]),
        j = l.useCallback(
            (e) => {
                let t = r?.guild?.id ?? d;
                null != t &&
                    (n(h.Ws.AnnouncementsItem),
                    s(),
                    (0, f.A)({ invite: r, guildId: t, channelId: m, messageId: e, analyticsLocationStack: i }));
            },
            [n, s, r, d, m, i],
        );
    if (null == m || 0 === c.length) return null;
    let E = 2 !== c.length,
        I = E ? c[0] : null,
        N = E ? c.slice(1) : c;
    return (0, a.jsx)(_.A, {
        title: v.intl.string(v.t.B0BV3Y),
        onClickViewAll: x,
        children: (0, a.jsxs)("div", {
            className: A.f3,
            children: [
                null != I && (0, a.jsx)(C, { variant: "main", message: I, channelId: m, onCardClick: j }),
                N.length > 0 &&
                    (0, a.jsx)(u.A, {
                        gap: 16,
                        children: N.map((e) =>
                            (0, a.jsx)(C, { variant: "small", message: e, channelId: m, onCardClick: j }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
