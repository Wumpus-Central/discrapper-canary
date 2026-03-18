n.d(t, { A: () => I }), n(323874), n(14289), n(35956);
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(397927),
    c = n(73153),
    o = n(607470),
    d = n(720462),
    u = n(46054),
    m = n(378570),
    x = n(597676),
    h = n(305080),
    f = n(954506),
    g = n(652215),
    p = n(985018),
    _ = n(809222),
    v = n(206314);
function j(e, t) {
    return u.A.parse(e, !0, { allowHeading: !0, allowList: !0, allowLinks: !0, channelId: t });
}
function A(e) {
    let { variant: t, message: n, channelId: i, onCardClick: c } = e,
        [d, u] = a.useState(!1),
        m = null != n.mediaUrl,
        x = "video" === n.mediaType,
        h = "main" === t,
        f = a.useCallback(() => u(!0), []),
        g = a.useCallback(() => c(n.id), [c, n.id]);
    return (0, l.jsxs)(s.DUT, {
        className: h ? _.cG : _.IU,
        onClick: g,
        children: [
            m &&
                (0, l.jsxs)("div", {
                    className: h ? _._v : _.eZ,
                    children: [
                        x
                            ? (0, l.jsx)(o.A, {
                                  src: n.mediaUrl,
                                  poster: (function (e) {
                                      try {
                                          let t = new URL(e);
                                          return t.searchParams.append("format", "webp"), t.toString();
                                      } catch {
                                          return;
                                      }
                                  })(n.mediaUrl),
                                  className: r()(h ? _.fk : _.v, d ? _.RT : _.YC),
                                  muted: !0,
                                  preload: "metadata",
                                  playsInline: !0,
                                  onLoadedData: f,
                              })
                            : (0, l.jsx)("img", {
                                  src: n.mediaUrl,
                                  className: r()(h ? _.fk : _.v, d ? _.RT : _.YC),
                                  alt: "",
                                  onLoad: f,
                              }),
                        !d &&
                            (0, l.jsx)("div", {
                                className: _.ns,
                                children: (0, l.jsx)(s.y$y, { type: s.tVU.SPINNING_CIRCLE, className: _.u1 }),
                            }),
                    ],
                }),
            (0, l.jsxs)("div", {
                className: h ? _.GT : _.s4,
                children: [
                    null != n.title &&
                        (0, l.jsx)(s.Heading, {
                            variant: h ? "heading-md/bold" : "heading-sm/bold",
                            color: "text-strong",
                            className: h ? _.KX : _._N,
                            children: j(n.title, i),
                        }),
                    n.body.length > 0 &&
                        (0, l.jsx)("div", { className: r()(_.h_, h ? _.My : _.Gd, v.PT), children: j(n.body, i) }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { detectedGame: t } = e,
        n = t.announcementsChannelId,
        { officialInvite: i, isMember: r, closeModal: o } = (0, h.c)(),
        { messages: u, loading: v } = (0, x.A)(n),
        j = a.useCallback(() => {
            null != i &&
                (o(), c.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: i, code: i.code, context: g.BRT.APP }));
        }, [o, i]),
        I = a.useCallback(() => {
            r && null != n ? (o(), (0, m.iN)(n)) : j();
        }, [o, r, j, n]),
        E = a.useCallback(
            (e) => {
                r && null != n ? (o(), (0, m.ci)(n, e)) : j();
            },
            [o, r, j, n],
        );
    if (null == n || 0 === u.length)
        return v
            ? (0, l.jsx)(f.A, {
                  title: p.intl.string(p.t.B0BV3Y),
                  children: (0, l.jsx)("div", {
                      className: _.g4,
                      children: (0, l.jsx)(s.y$y, { type: s.tVU.SPINNING_CIRCLE, className: _.u1 }),
                  }),
              })
            : null;
    let N = 2 !== u.length,
        b = N ? u[0] : null,
        C = N ? u.slice(1) : u;
    return (0, l.jsx)(f.A, {
        title: p.intl.string(p.t.B0BV3Y),
        onClickViewAll: I,
        children: (0, l.jsxs)("div", {
            className: _.f3,
            children: [
                null != b && (0, l.jsx)(A, { variant: "main", message: b, channelId: n, onCardClick: E }),
                C.length > 0 &&
                    (0, l.jsx)(d.A, {
                        gap: "sm",
                        className: _.jG,
                        children: C.map((e) =>
                            (0, l.jsx)(A, { variant: "small", message: e, channelId: n, onCardClick: E }, e.id),
                        ),
                    }),
            ],
        }),
    });
}
