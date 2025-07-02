t.d(n, { Z: () => S });
var r = t(255367),
    i = t(120356),
    o = t.n(i),
    a = t(793030),
    s = t(442837),
    l = t(304789),
    c = t(481060),
    d = t(99690),
    u = t(607070),
    m = t(623624),
    p = t(678558),
    _ = t(343649),
    f = t(742409),
    x = t(518950),
    b = t(271383),
    v = t(485386),
    g = t(430824),
    h = t(594174),
    j = t(709586),
    C = t(5192),
    E = t(998502),
    N = t(981631),
    Z = t(93841),
    O = t(388032),
    I = t(302794),
    w = t(350618);
let P = E.ZP.getEnableHardwareAcceleration() ? c.Xo$ : d.Z;
function S(e) {
    var n, t, i;
    let { guildId: d } = e,
        E = (0, s.e7)([g.Z], () => g.Z.getGuild(d)),
        S = (0, s.e7)([v.Z], () =>
            Object.values(v.Z.getRoles(d)).find((e) => {
                var n;
                return (null == e || null == (n = e.tags) ? void 0 : n.premium_subscriber) !== void 0;
            })
        ),
        y = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        R = null == y ? void 0 : y.id,
        T = (0, s.e7)([b.ZP], () => (null != R ? b.ZP.getMember(d, R) : void 0), [R, d]),
        L = (null == T ? void 0 : T.premiumSince) != null,
        A = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        {
            avatarDecorationSrc: k,
            avatarSrc: D,
            eventHandlers: U
        } = (0, x.Z)({
            user: y,
            guildId: d,
            size: c.EFr.SIZE_40,
            animateOnHover: !A
        });
    return null == E || null == T || null == y
        ? null
        : (0, r.jsxs)(l.$, {
              className: I.container,
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      className: I.image,
                      src: w
                  }),
                  (0, r.jsxs)('div', {
                      className: I.textContainer,
                      children: [
                          (0, r.jsx)(a.xv, {
                              variant: 'text-md/semibold',
                              children: O.intl.string(L ? Z.default.KSWK1d : Z.default.XXXX5u)
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: 'text-sm/medium',
                              children: O.intl.format(L ? Z.default['7fWTg4'] : Z.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, m.f)({
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
                  null != S &&
                      !L &&
                      (0, r.jsx)(f.l, {
                          avatar: (0, r.jsx)(
                              P,
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
                              })({}, U)),
                              (i = i =
                                  {
                                      user: y,
                                      src: D,
                                      avatarDecoration: k,
                                      size: c.EFr.SIZE_40,
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
                          username: (0, r.jsx)(c.PUh, {
                              variant: 'text-md/semibold',
                              name: C.ZP.getName(d, null, y),
                              roleColors: null == S ? void 0 : S.colorStrings,
                              color: null != (n = null == S ? void 0 : S.colorString) ? n : void 0
                          }),
                          className: o()(I.content, I.exampleMessage),
                          message: O.intl.string(O.t['6OSasb']),
                          decorations: (0, r.jsx)(j.Z, { className: I.boostIcon })
                      }),
                  (0, r.jsx)(p.Z, {
                      guild: E,
                      className: I.content,
                      analyticsLocation: {
                          page: N.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: N.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                      },
                      color: c.Ttl.BRAND,
                      size: c.PhG.MEDIUM,
                      intent: _.P.NONE,
                      fullWidth: !0,
                      icon: (0, r.jsx)(c.$Eu, {
                          color: 'currentColor',
                          size: 'sm'
                      })
                  })
              ]
          });
}
