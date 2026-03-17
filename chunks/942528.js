n.d(t, { A: () => j });
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(734057),
    d = n(309010),
    u = n(287809),
    m = n(562153),
    x = n(420706),
    f = n(322789),
    h = n(506326),
    g = n(985018),
    p = n(505502),
    v = n(851822);
let j = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: i,
            onRequestOpen: j,
            disableActivityProfileLinks: _,
            customCTA: A,
            popoutClassname: E,
            popoutPosition: I = "right",
        } = e,
        b = l.useRef(null),
        N = (0, s.bG)([d.A, c.A], () => c.A.getChannel(d.A.getChannelId())),
        C = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)),
        { nick: T, avatar: S } = l.useMemo(() => {
            let e = C?.getAvatarURL(N?.guild_id, 48, !1);
            return { nick: m.Ay.getName(N?.guild_id, N?.id, C), avatar: e };
        }, [C, N]);
    return null == C
        ? null
        : (0, a.jsx)(o.YNO, {
              targetElementRef: b,
              position: I,
              renderPopout: (e) => {
                  let { closePopout: l, updatePosition: r } = e;
                  return (0, a.jsx)("div", {
                      className: E,
                      children: (0, a.jsx)(x.Oo, {
                          entry: t,
                          closePopout: l,
                          updatePopoutPosition: r,
                          onReaction: () => {
                              i?.(), n(), l();
                          },
                          onUserPopoutClosed: () => l(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: _,
                      }),
                  });
              },
              positionKey: `'content-entry-${t.id}`,
              onRequestOpen: () => {
                  j?.();
              },
              children: (e) =>
                  (0, a.jsx)(o.DUT, {
                      innerRef: b,
                      ...e,
                      className: p.GA,
                      children: (0, a.jsx)(o.vN3, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("img", {
                                      className: p.my,
                                      src: S,
                                      alt: g.intl.formatToPlainString(g.t.IzVXxY, { userName: T }),
                                  }),
                                  (0, a.jsx)("div", {
                                      className: p.Su,
                                      children: (0, a.jsxs)("div", {
                                          className: r()(v.fi, v.Kt),
                                          children: [
                                              (0, a.jsx)(o.Text, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: T,
                                              }),
                                              (0, a.jsx)(h.mG, {
                                                  location: h.N5.APP_LAUNCHER,
                                                  children: f.n.map((e, n) => (0, a.jsx)(e, { entry: t }, n)),
                                              }),
                                          ],
                                      }),
                                  }),
                                  null != A
                                      ? A
                                      : (0, a.jsx)("div", {
                                            className: p.Br,
                                            children: (0, a.jsx)(o.W4J, { size: "sm" }),
                                        }),
                              ],
                          }),
                      }),
                  }),
          });
};
