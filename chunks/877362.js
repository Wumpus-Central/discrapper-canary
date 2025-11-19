n.d(t, { Z: () => y });
var r = n(54381),
    i = n(120356),
    l = n.n(i),
    o = n(793030),
    a = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(99690),
    d = n(607070),
    p = n(623624),
    f = n(678558),
    m = n(343649),
    g = n(978088),
    v = n(518950),
    x = n(271383),
    _ = n(485386),
    b = n(430824),
    h = n(594174),
    j = n(5192),
    C = n(998502),
    w = n(981631),
    I = n(130231),
    E = n(388032),
    Z = n(127181),
    P = n(350618);
let T = C.ZP.getEnableHardwareAcceleration() ? c.Xo$ : u.Z;
function y(e) {
    var t, n;
    let { guildId: i } = e,
        u = (0, a.e7)([b.Z], () => b.Z.getGuild(i)),
        C = (0, a.e7)([_.Z], () =>
            _.Z.getSortedRoles(i).find((e) => {
                var t;
                return (null == (t = e.tags) ? void 0 : t.premium_subscriber) === null;
            }),
        ),
        y = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        N = null == y ? void 0 : y.id,
        O = (0, a.e7)([x.ZP], () => (null != N ? x.ZP.getMember(i, N) : void 0), [N, i]),
        S = (null == O ? void 0 : O.premiumSince) != null,
        A = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        {
            avatarDecorationSrc: k,
            avatarSrc: R,
            eventHandlers: L,
        } = (0, v.Z)({
            userId: null == y ? void 0 : y.id,
            guildId: i,
            size: c.EFr.SIZE_40,
            animateOnHover: !A,
        });
    return null == u || null == O || null == y
        ? null
        : (0, r.jsxs)(c.$1m, {
              className: Z.container,
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      className: Z.image,
                      src: P,
                  }),
                  (0, r.jsxs)("div", {
                      className: Z.textContainer,
                      children: [
                          (0, r.jsx)(o.xvT, {
                              variant: "text-md/semibold",
                              children: E.intl.string(S ? I.default.KSWK1U : I.default.XXXX5l),
                          }),
                          (0, r.jsx)(o.xvT, {
                              variant: "text-sm/medium",
                              children: E.intl.format(S ? I.default["7fWTg4"] : I.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, p.f)({
                                          guildId: i,
                                          location: {
                                              section: w.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: w.qAy.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != C &&
                      !S &&
                      (0, r.jsx)(g.l, {
                          avatar: (0, r.jsx)(
                              T,
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
                                      user: y,
                                      src: R,
                                      avatarDecoration: k,
                                      size: c.EFr.SIZE_40,
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
                          username: (0, r.jsx)(c.PUh, {
                              variant: "text-md/semibold",
                              name: j.ZP.getName(i, null, y),
                              colorString: C.colorString,
                              colorStrings: C.colorStrings,
                          }),
                          className: l()(Z.content, Z.exampleMessage),
                          message: E.intl.string(E.t["6OSasb"]),
                          decorations: (0, r.jsx)(c.Ucv, {
                              color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: Z.boostIcon,
                          }),
                      }),
                  (0, r.jsx)(f.Z, {
                      guild: u,
                      className: Z.content,
                      analyticsLocation: {
                          page: w.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: w.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: s.Tt.BRAND,
                      size: s.Ph.MEDIUM,
                      intent: m.P.NONE,
                      fullWidth: !0,
                      icon: (0, r.jsx)(c.Ucv, {
                          color: "currentColor",
                          size: "sm",
                      }),
                  }),
              ],
          });
}
