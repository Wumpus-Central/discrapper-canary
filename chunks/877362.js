n.d(t, { Z: () => T });
var r = n(255367),
    o = n(120356),
    i = n.n(o),
    l = n(793030),
    s = n(442837),
    a = n(304789),
    c = n(755721),
    u = n(481060),
    d = n(99690),
    m = n(607070),
    p = n(623624),
    f = n(678558),
    _ = n(343649),
    x = n(742409),
    v = n(518950),
    g = n(271383),
    b = n(485386),
    j = n(430824),
    E = n(594174),
    h = n(5192),
    C = n(998502),
    I = n(981631),
    N = n(93841),
    Z = n(388032),
    O = n(302794),
    P = n(350618);
let w = C.ZP.getEnableHardwareAcceleration() ? u.Xo$ : d.Z;
function T(e) {
    var t, n, o;
    let { guildId: d } = e,
        C = (0, s.e7)([j.Z], () => j.Z.getGuild(d)),
        T = (0, s.e7)([b.Z], () =>
            Object.values(b.Z.getRoles(d)).find((e) => {
                var t;
                return (null == e || null == (t = e.tags) ? void 0 : t.premium_subscriber) !== void 0;
            })
        ),
        y = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        S = null == y ? void 0 : y.id,
        A = (0, s.e7)([g.ZP], () => (null != S ? g.ZP.getMember(d, S) : void 0), [S, d]),
        R = (null == A ? void 0 : A.premiumSince) != null,
        L = (0, s.e7)([m.Z], () => m.Z.useReducedMotion),
        {
            avatarDecorationSrc: k,
            avatarSrc: D,
            eventHandlers: U
        } = (0, v.Z)({
            userId: null == y ? void 0 : y.id,
            guildId: d,
            size: u.EFr.SIZE_40,
            animateOnHover: !L
        });
    return null == C || null == A || null == y
        ? null
        : (0, r.jsxs)(a.$, {
              className: O.container,
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      className: O.image,
                      src: P
                  }),
                  (0, r.jsxs)('div', {
                      className: O.textContainer,
                      children: [
                          (0, r.jsx)(l.xv, {
                              variant: 'text-md/semibold',
                              children: Z.intl.string(R ? N.default.KSWK1d : N.default.XXXX5u)
                          }),
                          (0, r.jsx)(l.xv, {
                              variant: 'text-sm/medium',
                              children: Z.intl.format(R ? N.default['7fWTg4'] : N.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, p.f)({
                                          guildId: d,
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
                  null != T &&
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
                              })({}, U)),
                              (o = o =
                                  {
                                      user: y,
                                      src: D,
                                      avatarDecoration: k,
                                      size: u.EFr.SIZE_40,
                                      'aria-hidden': !0,
                                      animate: !0
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(o)).forEach(function (e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                                    }),
                              n)
                          ),
                          username: (0, r.jsx)(u.PUh, {
                              variant: 'text-md/semibold',
                              name: h.ZP.getName(d, null, y),
                              roleColors: null == T ? void 0 : T.colorStrings,
                              color: null != (t = null == T ? void 0 : T.colorString) ? t : void 0
                          }),
                          className: i()(O.content, O.exampleMessage),
                          message: Z.intl.string(Z.t['6OSasb']),
                          decorations: (0, r.jsx)(u.$Eu, {
                              color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: O.boostIcon
                          })
                      }),
                  (0, r.jsx)(f.Z, {
                      guild: C,
                      className: O.content,
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
