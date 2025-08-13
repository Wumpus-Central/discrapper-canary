n.d(t, { Z: () => y });
var r = n(255367),
    o = n(120356),
    i = n.n(o),
    l = n(793030),
    a = n(442837),
    s = n(304789),
    c = n(755721),
    u = n(481060),
    d = n(99690),
    p = n(607070),
    m = n(623624),
    f = n(678558),
    _ = n(343649),
    x = n(742409),
    g = n(518950),
    v = n(271383),
    b = n(485386),
    h = n(430824),
    j = n(594174),
    C = n(5192),
    E = n(998502),
    I = n(981631),
    N = n(93841),
    w = n(388032),
    Z = n(860834),
    P = n(350618);
let S = E.ZP.getEnableHardwareAcceleration() ? u.Xo$ : d.Z;
function y(e) {
    var t, n;
    let { guildId: o } = e,
        d = (0, a.e7)([h.Z], () => h.Z.getGuild(o)),
        E = (0, a.e7)([b.Z], () =>
            b.Z.getSortedRoles(o).find((e) => {
                var t;
                return (null == (t = e.tags) ? void 0 : t.premium_subscriber) === null;
            }),
        ),
        y = (0, a.e7)([j.default], () => j.default.getCurrentUser()),
        T = null == y ? void 0 : y.id,
        O = (0, a.e7)([v.ZP], () => (null != T ? v.ZP.getMember(o, T) : void 0), [T, o]),
        A = (null == O ? void 0 : O.premiumSince) != null,
        R = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
        {
            avatarDecorationSrc: L,
            avatarSrc: k,
            eventHandlers: U,
        } = (0, g.Z)({
            userId: null == y ? void 0 : y.id,
            guildId: o,
            size: u.EFr.SIZE_40,
            animateOnHover: !R,
        });
    return null == d || null == O || null == y
        ? null
        : (0, r.jsxs)(s.$, {
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
                          (0, r.jsx)(l.xv, {
                              variant: "text-md/semibold",
                              children: w.intl.string(A ? N.default.KSWK1d : N.default.XXXX5u),
                          }),
                          (0, r.jsx)(l.xv, {
                              variant: "text-sm/medium",
                              children: w.intl.format(A ? N.default["7fWTg4"] : N.default["7PXeeX"], {
                                  onClick: () => {
                                      (0, m.f)({
                                          guildId: o,
                                          location: {
                                              section: I.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: I.qAy.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != E &&
                      !A &&
                      (0, r.jsx)(x.l, {
                          avatar: (0, r.jsx)(
                              S,
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
                              })({}, U)),
                              (n = n =
                                  {
                                      user: y,
                                      src: k,
                                      avatarDecoration: L,
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
                              name: C.ZP.getName(o, null, y),
                              colorString: E.colorString,
                              colorStrings: E.colorStrings,
                          }),
                          className: i()(Z.content, Z.exampleMessage),
                          message: w.intl.string(w.t["6OSasb"]),
                          decorations: (0, r.jsx)(u.$Eu, {
                              color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: Z.boostIcon,
                          }),
                      }),
                  (0, r.jsx)(f.Z, {
                      guild: d,
                      className: Z.content,
                      analyticsLocation: {
                          page: I.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: I.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: c.Tt.BRAND,
                      size: c.Ph.MEDIUM,
                      intent: _.P.NONE,
                      fullWidth: !0,
                      icon: (0, r.jsx)(u.$Eu, {
                          color: "currentColor",
                          size: "sm",
                      }),
                  }),
              ],
          });
}
