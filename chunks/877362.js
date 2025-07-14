t.d(n, { Z: () => R });
var r = t(255367),
    i = t(120356),
    o = t.n(i),
    a = t(793030),
    s = t(442837),
    l = t(304789),
    c = t(755721),
    u = t(481060),
    d = t(99690),
    m = t(607070),
    p = t(623624),
    _ = t(678558),
    f = t(343649),
    x = t(742409),
    v = t(518950),
    b = t(271383),
    g = t(485386),
    h = t(430824),
    j = t(594174),
    C = t(709586),
    E = t(5192),
    Z = t(998502),
    N = t(981631),
    O = t(93841),
    I = t(388032),
    P = t(302794),
    w = t(350618);
let S = Z.ZP.getEnableHardwareAcceleration() ? u.Xo$ : d.Z;
function R(e) {
    var n, t, i;
    let { guildId: d } = e,
        Z = (0, s.e7)([h.Z], () => h.Z.getGuild(d)),
        R = (0, s.e7)([g.Z], () =>
            Object.values(g.Z.getRoles(d)).find((e) => {
                var n;
                return (null == e || null == (n = e.tags) ? void 0 : n.premium_subscriber) !== void 0;
            })
        ),
        y = (0, s.e7)([j.default], () => j.default.getCurrentUser()),
        T = null == y ? void 0 : y.id,
        L = (0, s.e7)([b.ZP], () => (null != T ? b.ZP.getMember(d, T) : void 0), [T, d]),
        k = (null == L ? void 0 : L.premiumSince) != null,
        A = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        {
            avatarDecorationSrc: U,
            avatarSrc: D,
            eventHandlers: M
        } = (0, v.Z)({
            userId: null == y ? void 0 : y.id,
            guildId: d,
            size: u.EFr.SIZE_40,
            animateOnHover: !A
        });
    return null == Z || null == L || null == y
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
                              children: I.intl.string(k ? O.default.KSWK1d : O.default.XXXX5u)
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: 'text-sm/medium',
                              children: I.intl.format(k ? O.default['7fWTg4'] : O.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, p.f)({
                                          guildId: d,
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
                  null != R &&
                      !k &&
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
                                      user: y,
                                      src: D,
                                      avatarDecoration: U,
                                      size: u.EFr.SIZE_40,
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
                          username: (0, r.jsx)(u.PUh, {
                              variant: 'text-md/semibold',
                              name: E.ZP.getName(d, null, y),
                              roleColors: null == R ? void 0 : R.colorStrings,
                              color: null != (n = null == R ? void 0 : R.colorString) ? n : void 0
                          }),
                          className: o()(P.content, P.exampleMessage),
                          message: I.intl.string(I.t['6OSasb']),
                          decorations: (0, r.jsx)(C.Z, { className: P.boostIcon })
                      }),
                  (0, r.jsx)(_.Z, {
                      guild: Z,
                      className: P.content,
                      analyticsLocation: {
                          page: N.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: N.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                      },
                      color: c.Tt.BRAND,
                      size: c.Ph.MEDIUM,
                      intent: f.P.NONE,
                      fullWidth: !0,
                      icon: (0, r.jsx)(u.$Eu, {
                          color: 'currentColor',
                          size: 'sm'
                      })
                  })
              ]
          });
}
