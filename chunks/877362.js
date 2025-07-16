n.d(t, { Z: () => S });
var r = n(255367),
    i = n(120356),
    o = n.n(i),
    a = n(793030),
    s = n(442837),
    l = n(304789),
    c = n(755721),
    d = n(481060),
    u = n(99690),
    p = n(607070),
    m = n(623624),
    _ = n(678558),
    f = n(343649),
    x = n(742409),
    b = n(518950),
    v = n(271383),
    g = n(485386),
    h = n(430824),
    E = n(594174),
    j = n(5192),
    C = n(998502),
    N = n(981631),
    I = n(93841),
    O = n(388032),
    Z = n(302794),
    P = n(350618);
let w = C.ZP.getEnableHardwareAcceleration() ? d.Xo$ : u.Z;
function S(e) {
    var t, n, i;
    let { guildId: u } = e,
        C = (0, s.e7)([h.Z], () => h.Z.getGuild(u)),
        S = (0, s.e7)([g.Z], () =>
            Object.values(g.Z.getRoles(u)).find((e) => {
                var t;
                return (null == e || null == (t = e.tags) ? void 0 : t.premium_subscriber) !== void 0;
            })
        ),
        T = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        y = null == T ? void 0 : T.id,
        A = (0, s.e7)([v.ZP], () => (null != y ? v.ZP.getMember(u, y) : void 0), [y, u]),
        R = (null == A ? void 0 : A.premiumSince) != null,
        L = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        {
            avatarDecorationSrc: D,
            avatarSrc: U,
            eventHandlers: k
        } = (0, b.Z)({
            userId: null == T ? void 0 : T.id,
            guildId: u,
            size: d.EFr.SIZE_40,
            animateOnHover: !L
        });
    return null == C || null == A || null == T
        ? null
        : (0, r.jsxs)(l.$, {
              className: Z.container,
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      className: Z.image,
                      src: P
                  }),
                  (0, r.jsxs)('div', {
                      className: Z.textContainer,
                      children: [
                          (0, r.jsx)(a.xv, {
                              variant: 'text-md/semibold',
                              children: O.intl.string(R ? I.default.KSWK1d : I.default.XXXX5u)
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: 'text-sm/medium',
                              children: O.intl.format(R ? I.default['7fWTg4'] : I.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, m.f)({
                                          guildId: u,
                                          location: {
                                              section: N.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: N.qAy.LEARN_MORE
                                          }
                                      });
                                  }
                              })
                          })
                      ]
                  }),
                  null != S &&
                      !R &&
                      (0, r.jsx)(x.l, {
                          avatar: (0, r.jsx)(
                              w,
                              ((n = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })({}, k)),
                              (i = i =
                                  {
                                      user: T,
                                      src: U,
                                      avatarDecoration: D,
                                      size: d.EFr.SIZE_40,
                                      'aria-hidden': !0,
                                      animate: !0
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              n)
                          ),
                          username: (0, r.jsx)(d.PUh, {
                              variant: 'text-md/semibold',
                              name: j.ZP.getName(u, null, T),
                              roleColors: null == S ? void 0 : S.colorStrings,
                              color: null != (t = null == S ? void 0 : S.colorString) ? t : void 0
                          }),
                          className: o()(Z.content, Z.exampleMessage),
                          message: O.intl.string(O.t['6OSasb']),
                          decorations: (0, r.jsx)(d.$Eu, {
                              color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: Z.boostIcon
                          })
                      }),
                  (0, r.jsx)(_.Z, {
                      guild: C,
                      className: Z.content,
                      analyticsLocation: {
                          page: N.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: N.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                      },
                      color: c.Tt.BRAND,
                      size: c.Ph.MEDIUM,
                      intent: f.P.NONE,
                      fullWidth: !0,
                      icon: (0, r.jsx)(d.$Eu, {
                          color: 'currentColor',
                          size: 'sm'
                      })
                  })
              ]
          });
}
