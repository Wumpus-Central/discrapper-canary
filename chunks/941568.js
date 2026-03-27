n.d(t, { A: () => b }), n(323874), n(14289), n(35956);
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
    h = n(597676),
    f = n(305080),
    g = n(954506),
    p = n(652215),
    _ = n(985018),
    v = n(576404),
    j = n(830684);
function A(e, t) {
    return u.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function C(e) {
    let { variant: t, message: n, channelId: i, onCardClick: c } = e,
        [d, u] = l.useState(!1),
        m = null != n.mediaUrl,
        x = "video" === n.mediaType,
        h = "main" === t,
        f = l.useCallback(() => u(!0), []),
        g = l.useCallback(() => c(n.id), [c, n.id]);
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
                            children: A(n.title, i),
                        }),
                    n.body.length > 0 &&
                        (0, a.jsx)("div", { className: r()(v.h_, h ? v.My : v.Gd, j.PT), children: A(n.body, i) }),
                ],
            }),
        ],
    });
}
function b(e) {
    let { detectedGame: t, trackAction: n } = e,
        i = t.announcementsChannelId,
        { officialInvite: r, isMember: o, closeModal: u } = (0, f.c)(),
        { messages: j, loading: A } = (0, h.A)(i),
        b = l.useCallback(() => {
            null != r &&
                (u(), c.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: r, code: r.code, context: p.BRT.APP }));
        }, [u, r]),
        I = l.useCallback(() => {
            n(x.Ws.Announcements), o && null != i ? (u(), (0, m.iN)(i)) : b();
        }, [u, o, b, i, n]),
        E = l.useCallback(
            (e) => {
                n(x.Ws.AnnouncementsItem), o && null != i ? (u(), (0, m.ci)(i, e)) : b();
            },
            [u, o, b, i, n],
        );
    if (null == i || 0 === j.length)
        return A
            ? (0, a.jsx)(g.A, {
                  title: _.intl.string(_.t.B0BV3Y),
                  children: (0, a.jsx)("div", {
                      className: v.g4,
                      children: (0, a.jsx)(s.y$y, { type: s.tVU.SPINNING_CIRCLE, className: v.u1 }),
                  }),
              })
            : null;
    let N = 2 !== j.length,
        S = N ? j[0] : null,
        k = N ? j.slice(1) : j;
    return (0, a.jsx)(g.A, {
        title: _.intl.string(_.t.B0BV3Y),
        onClickViewAll: I,
        children: (0, a.jsxs)("div", {
            className: v.f3,
            children: [
                null != S && (0, a.jsx)(C, { variant: "main", message: S, channelId: i, onCardClick: E }),
                k.length > 0 &&
                    (0, a.jsx)(d.A, {
                        gap: "sm",
                        className: v.jG,
                        children: k.map((e) =>
                            (0, a.jsx)(C, { variant: "small", message: e, channelId: i, onCardClick: E }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
