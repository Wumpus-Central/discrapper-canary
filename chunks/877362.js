n.d(t, { Z: () => S });
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
    v = n(518950),
    b = n(271383),
    g = n(485386),
    j = n(430824),
    E = n(594174),
    h = n(5192),
    C = n(998502),
    I = n(981631),
    N = n(93841),
    O = n(388032),
    P = n(302794),
    Z = n(350618);
let w = C.ZP.getEnableHardwareAcceleration() ? u.Xo$ : d.Z;
function S(e) {
    var t, n, o;
    let { guildId: d } = e,
        C = (0, s.e7)([j.Z], () => j.Z.getGuild(d)),
        S = (0, s.e7)([g.Z], () =>
            Object.values(g.Z.getRoles(d)).find((e) => {
                var t;
                return (null == e || null == (t = e.tags) ? void 0 : t.premium_subscriber) !== void 0;
            })
        ),
        y = (0, s.e7)([E.default], () => E.default.getCurrentUser()),
        T = null == y ? void 0 : y.id,
        A = (0, s.e7)([b.ZP], () => (null != T ? b.ZP.getMember(d, T) : void 0), [T, d]),
        R = (null == A ? void 0 : A.premiumSince) != null,
        L = (0, s.e7)([p.Z], () => p.Z.useReducedMotion),
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
              className: P.container,
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      className: P.image,
                      src: Z
                  }),
                  (0, r.jsxs)('div', {
                      className: P.textContainer,
                      children: [
                          (0, r.jsx)(l.xv, {
                              variant: 'text-md/semibold',
                              children: O.intl.string(R ? N.default.KSWK1d : N.default.XXXX5u)
                          }),
                          (0, r.jsx)(l.xv, {
                              variant: 'text-sm/medium',
                              children: O.intl.format(R ? N.default['7fWTg4'] : N.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, m.f)({
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
                              roleColors: null == S ? void 0 : S.colorStrings,
                              color: null != (t = null == S ? void 0 : S.colorString) ? t : void 0
                          }),
                          className: i()(P.content, P.exampleMessage),
                          message: O.intl.string(O.t['6OSasb']),
                          decorations: (0, r.jsx)(u.$Eu, {
                              color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: P.boostIcon
                          })
                      }),
                  (0, r.jsx)(f.Z, {
                      guild: C,
                      className: P.content,
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
