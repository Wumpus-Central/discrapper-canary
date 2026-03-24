n.d(t, { A: () => I }), n(323874), n(14289), n(35956);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    c = n(73153),
    o = n(607470),
    d = n(720462),
    u = n(46054),
    m = n(378570),
    x = n(409626),
    f = n(597676),
    h = n(305080),
    g = n(954506),
    _ = n(652215),
    p = n(985018),
    A = n(809222),
    v = n(206314);
function j(e, t) {
    return u.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function E(e) {
    let { variant: t, message: n, channelId: i, onCardClick: c } = e,
        [d, u] = l.useState(!1),
        m = null != n.mediaUrl,
        x = "video" === n.mediaType,
        f = "main" === t,
        h = l.useCallback(() => u(!0), []),
        g = l.useCallback(() => c(n.id), [c, n.id]);
    return (0, a.jsxs)(s.DUT, {
        className: f ? A.cG : A.IU,
        onClick: g,
        children: [
            m &&
                (0, a.jsxs)("div", {
                    className: f ? A._v : A.eZ,
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
                                  className: r()(f ? A.fk : A.v, d ? A.RT : A.YC),
                                  muted: !0,
                                  preload: "metadata",
                                  playsInline: !0,
                                  onLoadedData: h,
                              })
                            : (0, a.jsx)("img", {
                                  src: n.mediaUrl,
                                  className: r()(f ? A.fk : A.v, d ? A.RT : A.YC),
                                  alt: "",
                                  onLoad: h,
                              }),
                        !d &&
                            (0, a.jsx)("div", {
                                className: A.ns,
                                children: (0, a.jsx)(s.y$y, { type: s.tVU.SPINNING_CIRCLE, className: A.u1 }),
                            }),
                    ],
                }),
            (0, a.jsxs)("div", {
                className: f ? A.GT : A.s4,
                children: [
                    null != n.title &&
                        (0, a.jsx)(s.Heading, {
                            variant: f ? "heading-md/bold" : "heading-sm/bold",
                            color: "text-strong",
                            className: f ? A.KX : A._N,
                            children: j(n.title, i),
                        }),
                    n.body.length > 0 &&
                        (0, a.jsx)("div", { className: r()(A.h_, f ? A.My : A.Gd, v.PT), children: j(n.body, i) }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { detectedGame: t, trackAction: n } = e,
        i = t.announcementsChannelId,
        { officialInvite: r, isMember: o, closeModal: u } = (0, h.c)(),
        { messages: v, loading: j } = (0, f.A)(i),
        I = l.useCallback(() => {
            null != r &&
                (u(), c.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: r, code: r.code, context: _.BRT.APP }));
        }, [u, r]),
        C = l.useCallback(() => {
            n(x.Ws.Announcements), o && null != i ? (u(), (0, m.iN)(i)) : I();
        }, [u, o, I, i, n]),
        b = l.useCallback(
            (e) => {
                n(x.Ws.AnnouncementsItem), o && null != i ? (u(), (0, m.ci)(i, e)) : I();
            },
            [u, o, I, i, n],
        );
    if (null == i || 0 === v.length)
        return j
            ? (0, a.jsx)(g.A, {
                  title: p.intl.string(p.t.B0BV3Y),
                  children: (0, a.jsx)("div", {
                      className: A.g4,
                      children: (0, a.jsx)(s.y$y, { type: s.tVU.SPINNING_CIRCLE, className: A.u1 }),
                  }),
              })
            : null;
    let N = 2 !== v.length,
        T = N ? v[0] : null,
        S = N ? v.slice(1) : v;
    return (0, a.jsx)(g.A, {
        title: p.intl.string(p.t.B0BV3Y),
        onClickViewAll: C,
        children: (0, a.jsxs)("div", {
            className: A.f3,
            children: [
                null != T && (0, a.jsx)(E, { variant: "main", message: T, channelId: i, onCardClick: b }),
                S.length > 0 &&
                    (0, a.jsx)(d.A, {
                        gap: "sm",
                        className: A.jG,
                        children: S.map((e) =>
                            (0, a.jsx)(E, { variant: "small", message: e, channelId: i, onCardClick: b }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
