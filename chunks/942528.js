i.d(t, { A: () => v });
var l = i(627968),
    a = i(64700),
    n = i(503698),
    s = i.n(n),
    r = i(311907),
    c = i(397927),
    o = i(734057),
    d = i(309010),
    u = i(287809),
    m = i(562153),
    x = i(420706),
    g = i(322789),
    h = i(506326),
    f = i(985018),
    j = i(505502),
    p = i(851822);
let v = (e) => {
    let {
            entry: t,
            onClose: i,
            onReaction: n,
            onRequestOpen: v,
            disableActivityProfileLinks: A,
            customCTA: N,
            popoutClassname: _,
            popoutPosition: I = "right",
        } = e,
        b = a.useRef(null),
        C = (0, r.bG)([d.A, o.A], () => o.A.getChannel(d.A.getChannelId())),
        E = (0, r.bG)([u.default], () => u.default.getUser(t.author_id)),
        { nick: G, avatar: S } = a.useMemo(() => {
            let e = E?.getAvatarURL(C?.guild_id, 48, !1);
            return { nick: m.Ay.getName(C?.guild_id, C?.id, E), avatar: e };
        }, [E, C]);
    return null == E
        ? null
        : (0, l.jsx)(c.YNO, {
              targetElementRef: b,
              position: I,
              renderPopout: (e) => {
                  let { closePopout: a, updatePosition: s } = e;
                  return (0, l.jsx)("div", {
                      className: _,
                      children: (0, l.jsx)(x.Oo, {
                          entry: t,
                          closePopout: a,
                          updatePopoutPosition: s,
                          onReaction: () => {
                              n?.(), i(), a();
                          },
                          onUserPopoutClosed: () => a(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: A,
                      }),
                  });
              },
              positionKey: `'content-entry-${t.id}`,
              onRequestOpen: () => {
                  v?.();
              },
              children: (e) =>
                  (0, l.jsx)(c.DUT, {
                      innerRef: b,
                      ...e,
                      className: j.GA,
                      children: (0, l.jsx)(c.vN3, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("img", {
                                      className: j.my,
                                      src: S,
                                      alt: f.intl.formatToPlainString(f.t.IzVXxY, { userName: G }),
                                  }),
                                  (0, l.jsx)("div", {
                                      className: j.Su,
                                      children: (0, l.jsxs)("div", {
                                          className: s()(p.fi, p.Kt),
                                          children: [
                                              (0, l.jsx)(c.Text, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: G,
                                              }),
                                              (0, l.jsx)(h.mG, {
                                                  location: h.N5.APP_LAUNCHER,
                                                  children: g.n.map((e, i) => (0, l.jsx)(e, { entry: t }, i)),
                                              }),
                                          ],
                                      }),
                                  }),
                                  null != N
                                      ? N
                                      : (0, l.jsx)("div", {
                                            className: j.Br,
                                            children: (0, l.jsx)(c.W4J, { size: "sm" }),
                                        }),
                              ],
                          }),
                      }),
                  }),
          });
};
