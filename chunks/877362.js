n.d(t, { Z: () => Z });
var r = n(255367),
    o = n(120356),
    i = n.n(o),
    l = n(793030),
    s = n(442837),
    a = n(304789),
    u = n(755721),
    c = n(481060),
    d = n(99690),
    p = n(607070),
    f = n(623624),
    m = n(678558),
    g = n(343649),
    x = n(742409),
    v = n(518950),
    _ = n(271383),
    b = n(485386),
    j = n(430824),
    h = n(594174),
    E = n(5192),
    C = n(998502),
    I = n(981631),
    O = n(93841),
    y = n(388032),
    w = n(860834),
    P = n(350618);
let N = C.ZP.getEnableHardwareAcceleration() ? c.Xo$ : d.Z;
function Z(e) {
    var t, n;
    let { guildId: o } = e,
        d = (0, s.e7)([j.Z], () => j.Z.getGuild(o)),
        C = (0, s.e7)([b.Z], () =>
            b.Z.getSortedRoles(o).find((e) => {
                var t;
                return (null == (t = e.tags) ? void 0 : t.premium_subscriber) === null;
            }),
        ),
        Z = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        S = null == Z ? void 0 : Z.id,
        T = (0, s.e7)([_.ZP], () => (null != S ? _.ZP.getMember(o, S) : void 0), [S, o]),
        A = (null == T ? void 0 : T.premiumSince) != null,
        R = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        {
            avatarDecorationSrc: k,
            avatarSrc: L,
            eventHandlers: D,
        } = (0, v.Z)({
            userId: null == Z ? void 0 : Z.id,
            guildId: o,
            size: c.EFr.SIZE_40,
            animateOnHover: !R,
        });
    return null == d || null == T || null == Z
        ? null
        : (0, r.jsxs)(a.$, {
              className: w.container,
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      className: w.image,
                      src: P,
                  }),
                  (0, r.jsxs)("div", {
                      className: w.textContainer,
                      children: [
                          (0, r.jsx)(l.xv, {
                              variant: "text-md/semibold",
                              children: y.intl.string(A ? O.default.KSWK1d : O.default.XXXX5u),
                          }),
                          (0, r.jsx)(l.xv, {
                              variant: "text-sm/medium",
                              children: y.intl.format(A ? O.default["7fWTg4"] : O.default["7PXeeX"], {
                                  onClick: () => {
                                      (0, f.f)({
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
                  null != C &&
                      !A &&
                      (0, r.jsx)(x.l, {
                          avatar: (0, r.jsx)(
                              N,
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
                              })({}, D)),
                              (n = n =
                                  {
                                      user: Z,
                                      src: L,
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
                              name: E.ZP.getName(o, null, Z),
                              colorString: C.colorString,
                              colorStrings: C.colorStrings,
                          }),
                          className: i()(w.content, w.exampleMessage),
                          message: y.intl.string(y.t["6OSasb"]),
                          decorations: (0, r.jsx)(c.$Eu, {
                              color: c.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: w.boostIcon,
                          }),
                      }),
                  (0, r.jsx)(m.Z, {
                      guild: d,
                      className: w.content,
                      analyticsLocation: {
                          page: I.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: I.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: u.Tt.BRAND,
                      size: u.Ph.MEDIUM,
                      intent: g.P.NONE,
                      fullWidth: !0,
                      icon: (0, r.jsx)(c.$Eu, {
                          color: "currentColor",
                          size: "sm",
                      }),
                  }),
              ],
          });
}
