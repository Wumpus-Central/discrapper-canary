n.d(t, { A: () => b });
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(265872),
    c = n(939249),
    d = n(187322),
    u = n(834730),
    m = n(110384),
    h = n(734057),
    f = n(309010),
    _ = n(287809),
    g = n(562153),
    p = n(420706),
    x = n(322789),
    E = n(506326),
    A = n(985018),
    v = n(478481),
    I = n(141535);
let b = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: i,
            onRequestOpen: b,
            disableActivityProfileLinks: j,
            customCTA: N,
            popoutClassname: C,
            popoutPosition: S = "right",
        } = e,
        y = a.useRef(null),
        R = (0, s.bG)([f.A, h.A], () => h.A.getChannel(f.A.getChannelId())),
        L = (0, s.bG)([_.default], () => _.default.getUser(t.author_id)),
        { nick: T, avatar: k } = a.useMemo(() => {
            let e = L?.getAvatarURL(R?.guild_id, 48, !1);
            return { nick: g.Ay.getName(R?.guild_id, R?.id, L), avatar: e };
        }, [L, R]);
    return null == L
        ? null
        : (0, l.jsx)(o.Y, {
              targetElementRef: y,
              position: S,
              renderPopout: (e) => {
                  let { closePopout: a, updatePosition: r } = e;
                  return (0, l.jsx)("div", {
                      className: C,
                      children: (0, l.jsx)(p.Oo, {
                          entry: t,
                          closePopout: a,
                          updatePopoutPosition: r,
                          onReaction: () => {
                              i?.(), n(), a();
                          },
                          onUserPopoutClosed: () => a(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: j,
                      }),
                  });
              },
              positionKey: `'content-entry-${t.id}`,
              onRequestOpen: () => {
                  b?.();
              },
              children: (e) =>
                  (0, l.jsx)(c.D, {
                      innerRef: y,
                      ...e,
                      className: v.GA,
                      children: (0, l.jsx)(d.vN, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("img", {
                                      className: v.my,
                                      src: k,
                                      alt: A.intl.formatToPlainString(A.t.IzVXxY, { userName: T }),
                                  }),
                                  (0, l.jsx)("div", {
                                      className: v.Su,
                                      children: (0, l.jsxs)("div", {
                                          className: r()(I.fi, I.Kt),
                                          children: [
                                              (0, l.jsx)(u.E, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: T,
                                              }),
                                              (0, l.jsx)(E.mG, {
                                                  location: E.N5.APP_LAUNCHER,
                                                  children: x.n.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                                              }),
                                          ],
                                      }),
                                  }),
                                  null != N
                                      ? N
                                      : (0, l.jsx)("div", {
                                            className: v.Br,
                                            children: (0, l.jsx)(m.W, { size: "sm" }),
                                        }),
                              ],
                          }),
                      }),
                  }),
          });
};
