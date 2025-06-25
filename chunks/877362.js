t.d(n, { Z: () => P });
var r = t(255367),
    i = t(120356),
    o = t.n(i),
    a = t(793030),
    s = t(442837),
    l = t(481060),
    c = t(99690),
    u = t(607070),
    d = t(623624),
    p = t(678558),
    m = t(343649),
    _ = t(742409),
    f = t(518950),
    x = t(271383),
    b = t(430824),
    v = t(594174),
    g = t(709586),
    h = t(5192),
    j = t(998502),
    C = t(981631),
    E = t(93841),
    Z = t(388032),
    N = t(302794),
    w = t(350618);
let I = j.ZP.getEnableHardwareAcceleration() ? l.Xo$ : c.Z;
function P(e) {
    var n, t, i;
    let { guildId: c } = e,
        j = (0, s.e7)([b.Z], () => b.Z.getGuild(c)),
        P = (0, s.e7)([b.Z], () =>
            Object.values(b.Z.getRoles(c)).find((e) => {
                var n;
                return (null == e || null == (n = e.tags) ? void 0 : n.premium_subscriber) !== void 0;
            })
        ),
        O = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        y = null == O ? void 0 : O.id,
        S = (0, s.e7)([x.ZP], () => (null != y ? x.ZP.getMember(c, y) : void 0), [y, c]),
        T = (null == S ? void 0 : S.premiumSince) != null,
        R = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        {
            avatarDecorationSrc: k,
            avatarSrc: L,
            eventHandlers: A
        } = (0, f.Z)({
            user: O,
            guildId: c,
            size: l.EFr.SIZE_40,
            animateOnHover: !R
        });
    return null == j || null == S || null == O
        ? null
        : (0, r.jsxs)('div', {
              className: N.container,
              children: [
                  (0, r.jsx)('div', { className: N.background }),
                  (0, r.jsx)('img', {
                      alt: '',
                      className: N.image,
                      src: w
                  }),
                  (0, r.jsxs)('div', {
                      className: N.textContainer,
                      children: [
                          (0, r.jsx)(a.xv, {
                              variant: 'text-md/semibold',
                              children: Z.intl.string(T ? E.default.KSWK1d : E.default.XXXX5u)
                          }),
                          (0, r.jsx)(a.xv, {
                              variant: 'text-sm/medium',
                              children: Z.intl.format(T ? E.default['7fWTg4'] : E.default['7PXeeX'], {
                                  onClick: () => {
                                      (0, d.f)({
                                          guildId: c,
                                          location: {
                                              section: C.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: C.qAy.LEARN_MORE
                                          }
                                      });
                                  }
                              })
                          })
                      ]
                  }),
                  null != P &&
                      !T &&
                      (0, r.jsx)(_.l, {
                          avatar: (0, r.jsx)(
                              I,
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
                              })({}, A)),
                              (i = i =
                                  {
                                      user: O,
                                      src: L,
                                      avatarDecoration: k,
                                      size: l.EFr.SIZE_40,
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
                          username: (0, r.jsx)(l.PUh, {
                              variant: 'text-md/semibold',
                              name: h.ZP.getName(c, null, O),
                              roleColors: null == P ? void 0 : P.colorStrings,
                              color: null != (n = null == P ? void 0 : P.colorString) ? n : void 0
                          }),
                          className: o()(N.content, N.exampleMessage),
                          message: Z.intl.string(Z.t['6OSasb']),
                          decorations: (0, r.jsx)(g.Z, { className: N.boostIcon })
                      }),
                  (0, r.jsx)(p.Z, {
                      guild: j,
                      className: N.content,
                      analyticsLocation: {
                          page: C.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: C.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
                      },
                      color: l.Ttl.BRAND,
                      size: l.PhG.MEDIUM,
                      intent: m.P.NONE,
                      fullWidth: !0,
                      icon: (0, r.jsx)(l.$Eu, {
                          color: 'currentColor',
                          size: 'sm'
                      })
                  })
              ]
          });
}
