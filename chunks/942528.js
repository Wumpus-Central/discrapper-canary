"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    c = n(397927),
    o = n(734057),
    d = n(309010),
    u = n(287809),
    m = n(562153),
    x = n(420706),
    h = n(322789),
    f = n(506326),
    g = n(985018),
    _ = n(505502),
    p = n(851822);
let v = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: a,
            onRequestOpen: v,
            disableActivityProfileLinks: I,
            customCTA: j,
            popoutClassname: A,
            popoutPosition: E = "right",
        } = e,
        b = l.useRef(null),
        N = (0, s.bG)([d.A, o.A], () => o.A.getChannel(d.A.getChannelId())),
        C = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)),
        { nick: S, avatar: T } = l.useMemo(() => {
            let e = C?.getAvatarURL(N?.guild_id, 48, !1);
            return { nick: m.Ay.getName(N?.guild_id, N?.id, C), avatar: e };
        }, [C, N]);
    return null == C
        ? null
        : (0, i.jsx)(c.YNO, {
              targetElementRef: b,
              position: E,
              renderPopout: (e) => {
                  let { closePopout: l, updatePosition: r } = e;
                  return (0, i.jsx)("div", {
                      className: A,
                      children: (0, i.jsx)(x.Oo, {
                          entry: t,
                          closePopout: l,
                          updatePopoutPosition: r,
                          onReaction: () => {
                              a?.(), n(), l();
                          },
                          onUserPopoutClosed: () => l(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: I,
                      }),
                  });
              },
              positionKey: `'content-entry-${t.id}`,
              onRequestOpen: () => {
                  v?.();
              },
              children: (e) =>
                  (0, i.jsx)(c.DUT, {
                      innerRef: b,
                      ...e,
                      className: _.GA,
                      children: (0, i.jsx)(c.vN3, {
                          offset: { top: 4, bottom: 4, left: 4, right: 4 },
                          children: (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("img", {
                                      className: _.my,
                                      src: T,
                                      alt: g.intl.formatToPlainString(g.t.IzVXxY, { userName: S }),
                                  }),
                                  (0, i.jsx)("div", {
                                      className: _.Su,
                                      children: (0, i.jsxs)("div", {
                                          className: r()(p.fi, p.Kt),
                                          children: [
                                              (0, i.jsx)(c.Text, {
                                                  variant: "text-md/medium",
                                                  color: "text-strong",
                                                  lineClamp: 1,
                                                  children: S,
                                              }),
                                              (0, i.jsx)(f.mG, {
                                                  location: f.N5.APP_LAUNCHER,
                                                  children: h.n.map((e, n) => (0, i.jsx)(e, { entry: t }, n)),
                                              }),
                                          ],
                                      }),
                                  }),
                                  null != j
                                      ? j
                                      : (0, i.jsx)("div", {
                                            className: _.Br,
                                            children: (0, i.jsx)(c.W4J, { size: "sm" }),
                                        }),
                              ],
                          }),
                      }),
                  }),
          });
};
