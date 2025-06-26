t.d(n, { Z: () => O });
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
    v = t(430824),
    g = t(594174),
    h = t(709586),
    j = t(5192),
    C = t(998502),
    E = t(981631),
    Z = t(93841),
    N = t(388032),
    I = t(302794),
    w = t(350618);
let P = C.ZP.getEnableHardwareAcceleration() ? c.Xo$ : d.Z;
function O(e) {
    var n, t, i;
    let { guildId: d } = e,
        C = (0, s.e7)([v.Z], () => v.Z.getGuild(d)),
        O = (0, s.e7)([v.Z], () =>
            Object.values(v.Z.getRoles(d)).find((e) => {
                var n;
                return (null == e || null == (n = e.tags) ? void 0 : n.premium_subscriber) !== void 0;
            })
        ),
        y = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        S = null == y ? void 0 : y.id,
        T = (0, s.e7)([b.ZP], () => (null != S ? b.ZP.getMember(d, S) : void 0), [S, d]),
        R = (null == T ? void 0 : T.premiumSince) != null,
        k = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        {
            avatarDecorationSrc: L,
            avatarSrc: A,
            eventHandlers: U
        } = (0, x.Z)({
            user: y,
            guildId: d,
            size: c.EFr.SIZE_40,
            animateOnHover: !k
        });
    return null == C || null == T || null == y
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
                              children: N.intl.string(R ? Z.default.KSWK1d : Z.default.XXXX5u)
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: 'text-sm/medium',
                              children: N.intl.format(R ? Z.default['7fWTg4'] : Z.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, p.f)({
                                          guildId: d,
                                          location: {
                                              section: E.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: E.qAy.LEARN_MORE
                                          }
                                      });
                                  }
                              })
                          })
                      ]
                  }),
                  null != O &&
                      !R &&
                      (0, r.jsx)(f.l, {
                          avatar: (0, r.jsx)(
                              P,
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
                              })({}, U)),
                              (i = i =
                                  {
                                      user: y,
                                      src: A,
                                      avatarDecoration: L,
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
                              name: j.ZP.getName(d, null, y),
                              roleColors: null == O ? void 0 : O.colorStrings,
                              color: null != (n = null == O ? void 0 : O.colorString) ? n : void 0
                          }),
                          className: o()(I.content, I.exampleMessage),
                          message: N.intl.string(N.t['6OSasb']),
                          decorations: (0, r.jsx)(h.Z, { className: I.boostIcon })
                      }),
                  (0, r.jsx)(m.Z, {
                      guild: C,
                      className: I.content,
                      analyticsLocation: {
                          page: E.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: E.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
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
