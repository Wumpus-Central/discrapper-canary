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
    j = n(594174),
    E = n(709586),
    C = n(5192),
    N = n(998502),
    I = n(981631),
    O = n(93841),
    Z = n(388032),
    P = n(302794),
    w = n(350618);
let y = N.ZP.getEnableHardwareAcceleration() ? d.Xo$ : u.Z;
function S(e) {
    var t, n, i;
    let { guildId: u } = e,
        N = (0, s.e7)([h.Z], () => h.Z.getGuild(u)),
        S = (0, s.e7)([g.Z], () =>
            Object.values(g.Z.getRoles(u)).find((e) => {
                var t;
                return (null == e || null == (t = e.tags) ? void 0 : t.premium_subscriber) !== void 0;
            })
        ),
        T = (0, s.e7)([j.default], () => j.default.getCurrentUser()),
        A = null == T ? void 0 : T.id,
        R = (0, s.e7)([v.ZP], () => (null != A ? v.ZP.getMember(u, A) : void 0), [A, u]),
        L = (null == R ? void 0 : R.premiumSince) != null,
        D = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        {
            avatarDecorationSrc: k,
            avatarSrc: U,
            eventHandlers: V
        } = (0, b.Z)({
            userId: null == T ? void 0 : T.id,
            guildId: u,
            size: d.EFr.SIZE_40,
            animateOnHover: !D
        });
    return null == N || null == R || null == T
        ? null
        : (0, r.jsxs)(l.$, {
              className: P.container,
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      className: P.image,
                      src: w
                  }),
                  (0, r.jsxs)('div', {
                      className: P.textContainer,
                      children: [
                          (0, r.jsx)(a.xv, {
                              variant: 'text-md/semibold',
                              children: Z.intl.string(L ? O.default.KSWK1d : O.default.XXXX5u)
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: 'text-sm/medium',
                              children: Z.intl.format(L ? O.default['7fWTg4'] : O.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, m.f)({
                                          guildId: u,
                                          location: {
                                              section: I.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: I.qAy.LEARN_MORE
                                          }
                                      });
                                  }
                              })
                          })
                      ]
                  }),
                  null != S &&
                      !L &&
                      (0, r.jsx)(x.l, {
                          avatar: (0, r.jsx)(
                              y,
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
                              })({}, V)),
                              (i = i =
                                  {
                                      user: T,
                                      src: U,
                                      avatarDecoration: k,
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
                              name: C.ZP.getName(u, null, T),
                              roleColors: null == S ? void 0 : S.colorStrings,
                              color: null != (t = null == S ? void 0 : S.colorString) ? t : void 0
                          }),
                          className: o()(P.content, P.exampleMessage),
                          message: Z.intl.string(Z.t['6OSasb']),
                          decorations: (0, r.jsx)(E.Z, { className: P.boostIcon })
                      }),
                  (0, r.jsx)(_.Z, {
                      guild: N,
                      className: P.content,
                      analyticsLocation: {
                          page: I.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: I.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
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
