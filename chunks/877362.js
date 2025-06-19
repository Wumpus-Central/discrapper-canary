t.d(n, { Z: () => S });
var r = t(255367),
    i = t(120356),
    o = t.n(i),
    a = t(866442),
    s = t(793030),
    l = t(442837),
    c = t(481060),
    u = t(99690),
    d = t(607070),
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
    E = t(402235),
    Z = t(981631),
    N = t(93841),
    w = t(388032),
    I = t(302794),
    P = t(183375),
    O = t(350618);
let y = C.ZP.getEnableHardwareAcceleration() ? c.Xo$ : u.Z;
function S(e) {
    var n, t, i, u, C;
    let { guildId: S } = e,
        T = (0, l.e7)([v.Z], () => v.Z.getGuild(S)),
        R = (0, l.e7)([v.Z], () =>
            Object.values(v.Z.getRoles(S)).find((e) => {
                var n;
                return (null == e || null == (n = e.tags) ? void 0 : n.premium_subscriber) !== void 0;
            })
        ),
        k = (0, E.Z)(S, 'GuildPowerupsBoostInfoContainerMember'),
        { gradientStyle: L, gradientClassname: A } = (0, c.Icv)({
            primaryColor: null == R || null == (n = R.colorStrings) ? void 0 : n.primaryColor,
            secondaryColor: null == R || null == (t = R.colorStrings) ? void 0 : t.secondaryColor,
            tertiaryColor: null == R || null == (i = R.colorStrings) ? void 0 : i.tertiaryColor,
            roleStyle: 'username',
            includeConvenienceGlow: !0,
            animateGradient: !0
        }),
        U = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        M = null == U ? void 0 : U.id,
        D = (0, l.e7)([b.ZP], () => (null != M ? b.ZP.getMember(S, M) : void 0), [M, S]),
        G = (null == D ? void 0 : D.premiumSince) != null,
        B = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        {
            avatarDecorationSrc: V,
            avatarSrc: W,
            eventHandlers: z
        } = (0, x.Z)({
            user: U,
            guildId: S,
            size: c.EFr.SIZE_40,
            animateOnHover: !B
        });
    return null == T || null == D || null == U
        ? null
        : (0, r.jsxs)('div', {
              className: I.container,
              children: [
                  (0, r.jsx)('div', { className: I.background }),
                  (0, r.jsx)('img', {
                      alt: '',
                      className: I.image,
                      src: O
                  }),
                  (0, r.jsxs)('div', {
                      className: I.textContainer,
                      children: [
                          (0, r.jsx)(s.xv, {
                              variant: 'text-md/semibold',
                              children: w.intl.string(G ? N.default.KSWK1d : N.default.XXXX5u)
                          }),
                          (0, r.jsx)(s.xv, {
                              variant: 'text-sm/medium',
                              children: w.intl.format(G ? N.default['7fWTg4'] : N.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, p.f)({
                                          guildId: S,
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
                  null != R &&
                      !G &&
                      (0, r.jsx)(f.l, {
                          avatar: (0, r.jsx)(
                              y,
                              ((u = (function (e) {
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
                              })({}, z)),
                              (C = C =
                                  {
                                      user: U,
                                      src: W,
                                      avatarDecoration: V,
                                      size: c.EFr.SIZE_40,
                                      'aria-hidden': !0,
                                      animate: !0
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(C))
                                  : (function (e, n) {
                                        var t = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            t.push.apply(t, r);
                                        }
                                        return t;
                                    })(Object(C)).forEach(function (e) {
                                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(C, e));
                                    }),
                              u)
                          ),
                          username: j.ZP.getName(S, null, U),
                          usernameStyle: k ? L : { color: (0, a.Rf)(R.color) },
                          usernameClassName: o()(k && A, P.animateGradient),
                          className: o()(I.content, I.exampleMessage),
                          message: w.intl.string(N.default.eTHkQU),
                          decorations: (0, r.jsx)(h.Z, { className: I.boostIcon })
                      }),
                  (0, r.jsx)(m.Z, {
                      guild: T,
                      className: I.content,
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
