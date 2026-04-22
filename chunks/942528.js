n.d(t, { A: () => I });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(265872),
    d = n(939249),
    c = n(187322),
    u = n(834730),
    m = n(110384),
    _ = n(734057),
    h = n(309010),
    f = n(287809),
    g = n(562153),
    p = n(420706),
    x = n(322789),
    b = n(506326),
    A = n(985018),
    v = n(478481),
    E = n(141535);
let I = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: i,
            onRequestOpen: I,
            disableActivityProfileLinks: C,
            customCTA: N,
            popoutClassname: j,
            popoutPosition: y = "right",
        } = e,
        S = l.useRef(null),
        R = (0, s.bG)([h.A, _.A], () => _.A.getChannel(h.A.getChannelId())),
        T = (0, s.bG)([f.default], () => f.default.getUser(t.author_id)),
        { nick: L, avatar: k } = l.useMemo(() => {
            let e = T?.getAvatarURL(R?.guild_id, 48, !1);
            return { nick: g.Ay.getName(R?.guild_id, R?.id, T), avatar: e };
        }, [T, R]);
    return null == T
        ? null
        : (0, a.jsx)(o.Y, {
              targetElementRef: S,
              position: y,
              renderPopout: (e) => {
                  let { closePopout: l, updatePosition: r } = e;
                  return (0, a.jsx)("div", {
                      className: j,
                      children: (0, a.jsx)(p.Oo, {
                          entry: t,
                          closePopout: l,
                          updatePopoutPosition: r,
                          onReaction: () => {
                              i?.(), n(), l();
                          },
                          onUserPopoutClosed: () => l(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: C,
                      }),
                  });
              },
              positionKey: `'content-entry-${t.id}`,
              onRequestOpen: () => {
                  I?.();
              },
              children: (e) =>
                  (0, a.jsx)(d.D, {
                      innerRef: S,
                      ...e,
                      className: v.GA,
                      children: (0, a.jsx)(c.vN, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("img", {
                                      className: v.my,
                                      src: k,
                                      alt: A.intl.formatToPlainString(A.t.IzVXxY, { userName: L }),
                                  }),
                                  (0, a.jsx)("div", {
                                      className: v.Su,
                                      children: (0, a.jsxs)("div", {
                                          className: r()(E.fi, E.Kt),
                                          children: [
                                              (0, a.jsx)(u.E, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: L,
                                              }),
                                              (0, a.jsx)(b.mG, {
                                                  location: b.N5.APP_LAUNCHER,
                                                  children: x.n.map((e, n) => (0, a.jsx)(e, { entry: t }, n)),
                                              }),
                                          ],
                                      }),
                                  }),
                                  null != N
                                      ? N
                                      : (0, a.jsx)("div", {
                                            className: v.Br,
                                            children: (0, a.jsx)(m.W, { size: "sm" }),
                                        }),
                              ],
                          }),
                      }),
                  }),
          });
};
