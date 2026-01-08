n.d(t, { Z: () => T });
var r = n(54381),
    i = n(120356),
    o = n.n(i),
    l = n(793030),
    a = n(442837),
    s = n(755721),
    u = n(481060),
    c = n(99690),
    d = n(607070),
    f = n(623624),
    p = n(678558),
    m = n(978088),
    v = n(518950),
    g = n(271383),
    x = n(485386),
    b = n(430824),
    h = n(594174),
    j = n(5192),
    Z = n(998502),
    _ = n(981631),
    w = n(556970),
    C = n(388032),
    I = n(905490),
    E = n(350618);
let P = Z.ZP.getEnableHardwareAcceleration() ? u.Xo$ : c.Z;
function T(e) {
    var t, n;
    let { guildId: i } = e,
        c = (0, a.e7)([b.Z], () => b.Z.getGuild(i)),
        Z = (0, a.e7)([x.Z], () =>
            x.Z.getSortedRoles(i).find((e) => {
                var t;
                return (null == (t = e.tags) ? void 0 : t.premium_subscriber) === null;
            }),
        ),
        T = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        S = null == T ? void 0 : T.id,
        y = (0, a.e7)([g.ZP], () => (null != S ? g.ZP.getMember(i, S) : void 0), [S, i]),
        N = (null == y ? void 0 : y.premiumSince) != null,
        A = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        {
            avatarDecorationSrc: O,
            avatarSrc: R,
            eventHandlers: L,
        } = (0, v.Z)({
            userId: null == T ? void 0 : T.id,
            guildId: i,
            size: u.EFr.SIZE_40,
            animateOnHover: !A,
        });
    return null == c || null == y || null == T
        ? null
        : (0, r.jsxs)(u.$1m, {
              className: I.container,
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      className: I.image,
                      src: E,
                  }),
                  (0, r.jsxs)("div", {
                      className: I.textContainer,
                      children: [
                          (0, r.jsx)(l.xvT, {
                              variant: "text-md/semibold",
                              children: C.intl.string(N ? w.default.KSWK1U : w.default.XXXX5l),
                          }),
                          (0, r.jsx)(l.xvT, {
                              variant: "text-sm/medium",
                              children: C.intl.format(N ? w.default["7fWTg4"] : w.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, f.f)({
                                          guildId: i,
                                          location: {
                                              section: _.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: _.qAy.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != Z &&
                      !N &&
                      (0, r.jsx)(m.l, {
                          avatar: (0, r.jsx)(
                              P,
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
                                      user: T,
                                      src: R,
                                      avatarDecoration: O,
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
                              name: j.ZP.getName(i, null, T),
                              colorString: Z.colorString,
                              colorStrings: Z.colorStrings,
                          }),
                          className: o()(I.content, I.exampleMessage),
                          message: C.intl.string(C.t["6OSasb"]),
                          decorations: (0, r.jsx)(u.Ucv, {
                              color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: I.boostIcon,
                          }),
                      }),
                  (0, r.jsx)(p.Z, {
                      guild: c,
                      className: I.content,
                      analyticsLocation: {
                          page: _.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: _.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: s.Tt.BRAND,
                      size: s.Ph.MEDIUM,
                      fullWidth: !0,
                      icon: (0, r.jsx)(u.Ucv, {
                          color: "currentColor",
                          size: "sm",
                      }),
                  }),
              ],
          });
}
