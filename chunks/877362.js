n.d(t, { Z: () => w });
var r = n(255367),
    o = n(120356),
    i = n.n(o),
    l = n(793030),
    s = n(442837),
    a = n(304789),
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
    j = n(430824),
    E = n(594174),
    h = n(5192),
    C = n(998502),
    I = n(981631),
    N = n(93841),
    O = n(388032),
    Z = n(302794),
    P = n(350618);
let S = C.ZP.getEnableHardwareAcceleration() ? u.Xo$ : d.Z;
function w(e) {
    var t, n;
    let { guildId: o } = e,
        d = (0, s.e7)([j.Z], () => j.Z.getGuild(o)),
        C = (0, s.e7)([b.Z], () =>
            b.Z.getSortedRoles(o).find((e) => {
                var t;
                return (null == (t = e.tags) ? void 0 : t.premium_subscriber) === null;
            })
        ),
        w = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        y = null == w ? void 0 : w.id,
        T = (0, s.e7)([v.ZP], () => (null != y ? v.ZP.getMember(o, y) : void 0), [y, o]),
        A = (null == T ? void 0 : T.premiumSince) != null,
        R = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
        {
            avatarDecorationSrc: L,
            avatarSrc: k,
            eventHandlers: D
        } = (0, g.Z)({
            userId: null == w ? void 0 : w.id,
            guildId: o,
            size: u.EFr.SIZE_40,
            animateOnHover: !R
        });
    return null == d || null == T || null == w
        ? null
        : (0, r.jsxs)(a.$, {
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
                          (0, r.jsx)(l.xv, {
                              variant: 'text-md/semibold',
                              children: O.intl.string(A ? N.default.KSWK1d : N.default.XXXX5u)
                          }),
                          (0, r.jsx)(l.xv, {
                              variant: 'text-sm/medium',
                              children: O.intl.format(A ? N.default['7fWTg4'] : N.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, m.f)({
                                          guildId: o,
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
                  null != C &&
                      !A &&
                      (0, r.jsx)(x.l, {
                          avatar: (0, r.jsx)(
                              S,
                              ((t = (function (e) {
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
                              })({}, D)),
                              (n = n =
                                  {
                                      user: w,
                                      src: k,
                                      avatarDecoration: L,
                                      size: u.EFr.SIZE_40,
                                      'aria-hidden': !0,
                                      animate: !0
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
                              t)
                          ),
                          username: (0, r.jsx)(u.PUh, {
                              variant: 'text-md/semibold',
                              name: h.ZP.getName(o, null, w),
                              colorString: C.colorString,
                              colorStrings: C.colorStrings
                          }),
                          className: i()(Z.content, Z.exampleMessage),
                          message: O.intl.string(O.t['6OSasb']),
                          decorations: (0, r.jsx)(u.$Eu, {
                              color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: Z.boostIcon
                          })
                      }),
                  (0, r.jsx)(f.Z, {
                      guild: d,
                      className: Z.content,
                      analyticsLocation: {
                          page: I.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: I.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                      },
                      color: c.Tt.BRAND,
                      size: c.Ph.MEDIUM,
                      intent: _.P.NONE,
                      fullWidth: !0,
                      icon: (0, r.jsx)(u.$Eu, {
                          color: 'currentColor',
                          size: 'sm'
                      })
                  })
              ]
          });
}
