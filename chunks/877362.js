t.d(n, { Z: () => y });
var r = t(255367),
    i = t(120356),
    o = t.n(i),
    a = t(793030),
    s = t(442837),
    l = t(304789),
    c = t(481060),
    d = t(99690),
    u = t(607070),
    p = t(623624),
    m = t(678558),
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
    Z = t(981631),
    N = t(93841),
    I = t(388032),
    w = t(302794),
    P = t(350618);
let O = E.ZP.getEnableHardwareAcceleration() ? c.Xo$ : d.Z;
function y(e) {
    var n, t, i;
    let { guildId: d } = e,
        E = (0, s.e7)([g.Z], () => g.Z.getGuild(d)),
        y = (0, s.e7)([v.Z], () =>
            Object.values(v.Z.getRoles(d)).find((e) => {
                var n;
                return (null == e || null == (n = e.tags) ? void 0 : n.premium_subscriber) !== void 0;
            })
        ),
        S = (0, s.e7)([h.default], () => h.default.getCurrentUser()),
        T = null == S ? void 0 : S.id,
        R = (0, s.e7)([b.ZP], () => (null != T ? b.ZP.getMember(d, T) : void 0), [T, d]),
        k = (null == R ? void 0 : R.premiumSince) != null,
        L = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        {
            avatarDecorationSrc: A,
            avatarSrc: U,
            eventHandlers: M
        } = (0, x.Z)({
            user: S,
            guildId: d,
            size: c.EFr.SIZE_40,
            animateOnHover: !L
        });
    return null == E || null == R || null == S
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
                              children: I.intl.string(k ? N.default.KSWK1d : N.default.XXXX5u)
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: 'text-sm/medium',
                              children: I.intl.format(k ? N.default['7fWTg4'] : N.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, p.f)({
                                          guildId: d,
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
                      !k &&
                      (0, r.jsx)(f.l, {
                          avatar: (0, r.jsx)(
                              O,
                              ((t = (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = null != arguments[n] ? arguments[n] : {},
                                          r = Object.keys(t);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (n) {
                                              var r;
                                              (r = t[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[n] = r);
                                          });
                                  }
                                  return e;
                              })({}, M)),
                              (i = i =
                                  {
                                      user: S,
                                      src: U,
                                      avatarDecoration: A,
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
                              name: C.ZP.getName(d, null, S),
                              roleColors: null == y ? void 0 : y.colorStrings,
                              color: null != (n = null == y ? void 0 : y.colorString) ? n : void 0
                          }),
                          className: o()(w.content, w.exampleMessage),
                          message: I.intl.string(I.t['6OSasb']),
                          decorations: (0, r.jsx)(j.Z, { className: w.boostIcon })
                      }),
                  (0, r.jsx)(m.Z, {
                      guild: E,
                      className: w.content,
                      analyticsLocation: {
                          page: Z.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: Z.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
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
