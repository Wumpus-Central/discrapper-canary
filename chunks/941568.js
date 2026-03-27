n.d(t, { A: () => E }), n(323874), n(14289), n(35956);
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(397927),
    c = n(73153),
    o = n(607470),
    d = n(720462),
    u = n(46054),
    m = n(378570),
    x = n(409626),
    h = n(21091),
    f = n(305080),
    g = n(954506),
    _ = n(652215),
    p = n(985018),
    v = n(576404),
    A = n(830684);
function j(e, t) {
    return u.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function C(e) {
    let { variant: t, message: n, channelId: l, onCardClick: c } = e,
        [d, u] = i.useState(!1),
        m = null != n.mediaUrl,
        x = "video" === n.mediaType,
        h = "main" === t,
        f = i.useCallback(() => u(!0), []),
        g = i.useCallback(() => c(n.id), [c, n.id]);
    return (0, a.jsxs)(s.DUT, {
        className: h ? v.cG : v.IU,
        onClick: g,
        children: [
            m &&
                (0, a.jsxs)("div", {
                    className: h ? v._v : v.eZ,
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
                                  className: r()(h ? v.fk : v.v, d ? v.RT : v.YC),
                                  muted: !0,
                                  preload: "metadata",
                                  playsInline: !0,
                                  onLoadedData: f,
                              })
                            : (0, a.jsx)("img", {
                                  src: n.mediaUrl,
                                  className: r()(h ? v.fk : v.v, d ? v.RT : v.YC),
                                  alt: "",
                                  onLoad: f,
                              }),
                        !d &&
                            (0, a.jsx)("div", {
                                className: v.ns,
                                children: (0, a.jsx)(s.y$y, { type: s.tVU.SPINNING_CIRCLE, className: v.u1 }),
                            }),
                    ],
                }),
            (0, a.jsxs)("div", {
                className: h ? v.GT : v.s4,
                children: [
                    null != n.title &&
                        (0, a.jsx)(s.Heading, {
                            variant: h ? "heading-md/bold" : "heading-sm/bold",
                            color: "text-strong",
                            className: h ? v.KX : v._N,
                            children: j(n.title, l),
                        }),
                    n.body.length > 0 &&
                        (0, a.jsx)("div", { className: r()(v.h_, h ? v.My : v.Gd, A.PT), children: j(n.body, l) }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { gameId: t, trackAction: n } = e,
        { officialInvite: l, isMember: r, closeModal: s } = (0, f.c)(),
        { messages: o, channelId: u } = (0, h.A)(t),
        A = i.useCallback(() => {
            null != l &&
                (s(), c.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: l, code: l.code, context: _.BRT.APP }));
        }, [s, l]),
        j = i.useCallback(() => {
            n(x.Ws.Announcements), r && null != u ? (s(), (0, m.iN)(u)) : A();
        }, [s, r, A, u, n]),
        E = i.useCallback(
            (e) => {
                n(x.Ws.AnnouncementsItem), r && null != u ? (s(), (0, m.ci)(u, e)) : A();
            },
            [s, r, A, u, n],
        );
    if (null == u || 0 === o.length) return null;
    let I = 2 !== o.length,
        b = I ? o[0] : null,
        N = I ? o.slice(1) : o;
    return (0, a.jsx)(g.A, {
        title: p.intl.string(p.t.B0BV3Y),
        onClickViewAll: j,
        children: (0, a.jsxs)("div", {
            className: v.f3,
            children: [
                null != b && (0, a.jsx)(C, { variant: "main", message: b, channelId: u, onCardClick: E }),
                N.length > 0 &&
                    (0, a.jsx)(d.A, {
                        gap: "sm",
                        className: v.jG,
                        children: N.map((e) =>
                            (0, a.jsx)(C, { variant: "small", message: e, channelId: u, onCardClick: E }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
