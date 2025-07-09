t.d(n, { Z: () => y });
var r = t(255367),
    i = t(120356),
    o = t.n(i),
    a = t(793030),
    s = t(442837),
    l = t(304789),
    c = t(755721),
    d = t(481060),
    u = t(99690),
    m = t(607070),
    p = t(623624),
    _ = t(678558),
    f = t(343649),
    x = t(742409),
    b = t(518950),
    g = t(271383),
    v = t(485386),
    h = t(430824),
    j = t(594174),
    C = t(709586),
    E = t(5192),
    N = t(998502),
    Z = t(981631),
    O = t(93841),
    I = t(388032),
    w = t(302794),
    P = t(350618);
let S = N.ZP.getEnableHardwareAcceleration() ? d.Xo$ : u.Z;
function y(e) {
    var n, t, i;
    let { guildId: u } = e,
        N = (0, s.e7)([h.Z], () => h.Z.getGuild(u)),
        y = (0, s.e7)([v.Z], () =>
            Object.values(v.Z.getRoles(u)).find((e) => {
                var n;
                return (null == e || null == (n = e.tags) ? void 0 : n.premium_subscriber) !== void 0;
            })
        ),
        R = (0, s.e7)([j.default], () => j.default.getCurrentUser()),
        T = null == R ? void 0 : R.id,
        L = (0, s.e7)([g.ZP], () => (null != T ? g.ZP.getMember(u, T) : void 0), [T, u]),
        A = (null == L ? void 0 : L.premiumSince) != null,
        k = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        {
            avatarDecorationSrc: D,
            avatarSrc: U,
            eventHandlers: M
        } = (0, b.Z)({
            user: R,
            guildId: u,
            size: d.EFr.SIZE_40,
            animateOnHover: !k
        });
    return null == N || null == L || null == R
        ? null
        : (0, r.jsxs)(l.$, {
              className: w.container,
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      className: w.image,
                      src: P
                  }),
                  (0, r.jsxs)('div', {
                      className: w.textContainer,
                      children: [
                          (0, r.jsx)(a.xv, {
                              variant: 'text-md/semibold',
                              children: I.intl.string(A ? O.default.KSWK1d : O.default.XXXX5u)
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: 'text-sm/medium',
                              children: I.intl.format(A ? O.default['7fWTg4'] : O.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, p.f)({
                                          guildId: u,
                                          location: {
                                              section: Z.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: Z.qAy.LEARN_MORE
                                          }
                                      });
                                  }
                              })
                          })
                      ]
                  }),
                  null != y &&
                      !A &&
                      (0, r.jsx)(x.l, {
                          avatar: (0, r.jsx)(
                              S,
                              ((t = (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = null != arguments[n] ? arguments[n] : {},
                                          r = Object.keys(t);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (n) {
                                              var r;
                                              ((r = t[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[n] = r));
                                          }));
                                  }
                                  return e;
                              })({}, M)),
                              (i = i =
                                  {
                                      user: R,
                                      src: U,
                                      avatarDecoration: D,
                                      size: d.EFr.SIZE_40,
                                      'aria-hidden': !0,
                                      animate: !0
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, n) {
                                        var t = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            t.push.apply(t, r);
                                        }
                                        return t;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              t)
                          ),
                          username: (0, r.jsx)(d.PUh, {
                              variant: 'text-md/semibold',
                              name: E.ZP.getName(u, null, R),
                              roleColors: null == y ? void 0 : y.colorStrings,
                              color: null != (n = null == y ? void 0 : y.colorString) ? n : void 0
                          }),
                          className: o()(w.content, w.exampleMessage),
                          message: I.intl.string(I.t['6OSasb']),
                          decorations: (0, r.jsx)(C.Z, { className: w.boostIcon })
                      }),
                  (0, r.jsx)(_.Z, {
                      guild: N,
                      className: w.content,
                      analyticsLocation: {
                          page: Z.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: Z.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
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
