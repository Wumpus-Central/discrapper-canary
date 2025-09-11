n.d(t, { Z: () => S });
var r = n(951288),
    i = n(120356),
    o = n.n(i),
    s = n(793030),
    l = n(442837),
    a = n(304789),
    c = n(755721),
    u = n(481060),
    d = n(99690),
    p = n(607070),
    m = n(623624),
    g = n(678558),
    f = n(343649),
    v = n(742409),
    _ = n(518950),
    x = n(271383),
    h = n(485386),
    b = n(430824),
    C = n(594174),
    j = n(5192),
    T = n(998502),
    E = n(981631),
    P = n(989308),
    I = n(388032),
    y = n(127181),
    w = n(350618);
let Z = T.ZP.getEnableHardwareAcceleration() ? u.Xo$ : d.Z;
function S(e) {
    var t, n;
    let { guildId: i } = e,
        d = (0, l.e7)([b.Z], () => b.Z.getGuild(i)),
        T = (0, l.e7)([h.Z], () =>
            h.Z.getSortedRoles(i).find((e) => {
                var t;
                return (null == (t = e.tags) ? void 0 : t.premium_subscriber) === null;
            }),
        ),
        S = (0, l.e7)([C.default], () => C.default.getCurrentUser()),
        N = null == S ? void 0 : S.id,
        k = (0, l.e7)([x.ZP], () => (null != N ? x.ZP.getMember(i, N) : void 0), [N, i]),
        O = (null == k ? void 0 : k.premiumSince) != null,
        A = (0, l.e7)([p.Z], () => p.Z.useReducedMotion),
        {
            avatarDecorationSrc: U,
            avatarSrc: R,
            eventHandlers: L,
        } = (0, _.Z)({
            userId: null == S ? void 0 : S.id,
            guildId: i,
            size: u.EFr.SIZE_40,
            animateOnHover: !A,
        });
    return null == d || null == k || null == S
        ? null
        : (0, r.jsxs)(a.$, {
              className: y.container,
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      className: y.image,
                      src: w,
                  }),
                  (0, r.jsxs)("div", {
                      className: y.textContainer,
                      children: [
                          (0, r.jsx)(s.xvT, {
                              variant: "text-md/semibold",
                              children: I.intl.string(O ? P.default.KSWK1d : P.default.XXXX5u),
                          }),
                          (0, r.jsx)(s.xvT, {
                              variant: "text-sm/medium",
                              children: I.intl.format(O ? P.default["7fWTg4"] : P.default["7PXeeX"], {
                                  onClick: () => {
                                      (0, m.f)({
                                          guildId: i,
                                          location: {
                                              section: E.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: E.qAy.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != T &&
                      !O &&
                      (0, r.jsx)(v.l, {
                          avatar: (0, r.jsx)(
                              Z,
                              ((t = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, L)),
                              (n = n =
                                  {
                                      user: S,
                                      src: R,
                                      avatarDecoration: U,
                                      size: u.EFr.SIZE_40,
                                      "aria-hidden": !0,
                                      animate: !0,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(n)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    }),
                              t),
                          ),
                          username: (0, r.jsx)(u.PUh, {
                              variant: "text-md/semibold",
                              name: j.ZP.getName(i, null, S),
                              colorString: T.colorString,
                              colorStrings: T.colorStrings,
                          }),
                          className: o()(y.content, y.exampleMessage),
                          message: I.intl.string(I.t["6OSasb"]),
                          decorations: (0, r.jsx)(u.$Eu, {
                              color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: y.boostIcon,
                          }),
                      }),
                  (0, r.jsx)(g.Z, {
                      guild: d,
                      className: y.content,
                      analyticsLocation: {
                          page: E.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: E.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: c.Tt.BRAND,
                      size: c.Ph.MEDIUM,
                      intent: f.P.NONE,
                      fullWidth: !0,
                      icon: (0, r.jsx)(u.$Eu, {
                          color: "currentColor",
                          size: "sm",
                      }),
                  }),
              ],
          });
}
