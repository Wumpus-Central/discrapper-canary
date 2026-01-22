n.d(t, { A: () => h });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(734057),
    d = n(309010),
    u = n(287809),
    m = n(562153),
    f = n(420706),
    x = n(322789),
    b = n(506326),
    p = n(985018),
    g = n(505502),
    j = n(851822);
let h = (e) => {
    let {
            entry: t,
            onClose: n,
            onReaction: i,
            onRequestOpen: h,
            disableActivityProfileLinks: v,
            customCTA: y,
            popoutClassname: O,
            popoutPosition: A = "right",
        } = e,
        I = r.useRef(null),
        N = (0, s.bG)([d.A, c.A], () => c.A.getChannel(d.A.getChannelId())),
        w = (0, s.bG)([u.default], () => u.default.getUser(t.author_id)),
        { nick: S, avatar: E } = r.useMemo(() => {
            let e = null == w ? void 0 : w.getAvatarURL(null == N ? void 0 : N.guild_id, 48, !1);
            return {
                nick: m.Ay.getName(null == N ? void 0 : N.guild_id, null == N ? void 0 : N.id, w),
                avatar: e,
            };
        }, [w, N]);
    return null == w
        ? null
        : (0, l.jsx)(o.YNO, {
              targetElementRef: I,
              position: A,
              renderPopout: (e) => {
                  let { closePopout: r, updatePosition: a } = e;
                  return (0, l.jsx)("div", {
                      className: O,
                      children: (0, l.jsx)(f.Oo, {
                          entry: t,
                          closePopout: r,
                          updatePopoutPosition: a,
                          onReaction: () => {
                              null == i || i(), n(), r();
                          },
                          onUserPopoutClosed: () => r(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: v,
                      }),
                  });
              },
              positionKey: "'content-entry-".concat(t.id),
              onRequestOpen: () => {
                  null == h || h();
              },
              children: (e) => {
                  var n, r;
                  return (0, l.jsx)(
                      o.DUT,
                      ((n = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  l = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (l = l.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  l.forEach(function (t) {
                                      var l;
                                      (l = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: l,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = l);
                                  });
                          }
                          return e;
                      })({ innerRef: I }, e)),
                      (r = r =
                          {
                              className: g.GA,
                              children: (0, l.jsx)(o.vN3, {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4,
                                  },
                                  children: (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("img", {
                                              className: g.my,
                                              src: E,
                                              alt: p.intl.formatToPlainString(p.t.IzVXxY, { userName: S }),
                                          }),
                                          (0, l.jsx)("div", {
                                              className: g.Su,
                                              children: (0, l.jsxs)("div", {
                                                  className: a()(j.fi, j.Kt),
                                                  children: [
                                                      (0, l.jsx)(o.Text, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          lineClamp: 1,
                                                          children: S,
                                                      }),
                                                      (0, l.jsx)(b.mG, {
                                                          location: b.N5.APP_LAUNCHER,
                                                          children: x.n.map((e, n) => (0, l.jsx)(e, { entry: t }, n)),
                                                      }),
                                                  ],
                                              }),
                                          }),
                                          null != y
                                              ? y
                                              : (0, l.jsx)("div", {
                                                    className: g.Br,
                                                    children: (0, l.jsx)(o.W4J, { size: "sm" }),
                                                }),
                                      ],
                                  }),
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, l);
                                }
                                return n;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      n),
                  );
              },
          });
};
