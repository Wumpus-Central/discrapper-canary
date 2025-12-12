n.d(t, { Z: () => N });
var r = n(54381),
    i = n(120356),
    l = n.n(i),
    o = n(793030),
    a = n(442837),
    s = n(755721),
    u = n(481060),
    c = n(99690),
    d = n(607070),
    p = n(623624),
    f = n(678558),
    m = n(343649),
    g = n(978088),
    v = n(518950),
    x = n(271383),
    _ = n(485386),
    b = n(430824),
    h = n(594174),
    j = n(5192),
    C = n(998502),
    Z = n(981631),
    w = n(5238),
    I = n(388032),
    E = n(127181),
    P = n(350618);
let T = C.ZP.getEnableHardwareAcceleration() ? u.Xo$ : c.Z;
function N(e) {
    var t, n;
    let { guildId: i } = e,
        c = (0, a.e7)([b.Z], () => b.Z.getGuild(i)),
        C = (0, a.e7)([_.Z], () =>
            _.Z.getSortedRoles(i).find((e) => {
                var t;
                return (null == (t = e.tags) ? void 0 : t.premium_subscriber) === null;
            }),
        ),
        N = (0, a.e7)([h.default], () => h.default.getCurrentUser()),
        y = null == N ? void 0 : N.id,
        O = (0, a.e7)([x.ZP], () => (null != y ? x.ZP.getMember(i, y) : void 0), [y, i]),
        S = (null == O ? void 0 : O.premiumSince) != null,
        A = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        {
            avatarDecorationSrc: L,
            avatarSrc: R,
            eventHandlers: k,
        } = (0, v.Z)({
            userId: null == N ? void 0 : N.id,
            guildId: i,
            size: u.EFr.SIZE_40,
            animateOnHover: !A,
        });
    return null == c || null == O || null == N
        ? null
        : (0, r.jsxs)(u.$1m, {
              className: E.container,
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      className: E.image,
                      src: P,
                  }),
                  (0, r.jsxs)("div", {
                      className: E.textContainer,
                      children: [
                          (0, r.jsx)(o.xvT, {
                              variant: "text-md/semibold",
                              children: I.intl.string(S ? w.default.KSWK1U : w.default.XXXX5l),
                          }),
                          (0, r.jsx)(o.xvT, {
                              variant: "text-sm/medium",
                              children: I.intl.format(S ? w.default["7fWTg4"] : w.default["7PXeeQ"], {
                                  onClick: () => {
                                      (0, p.f)({
                                          guildId: i,
                                          location: {
                                              section: Z.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                                              object: Z.qAy.LEARN_MORE,
                                          },
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  null != C &&
                      !S &&
                      (0, r.jsx)(g.l, {
                          avatar: (0, r.jsx)(
                              T,
                              ((t = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, k)),
                              (n = n =
                                  {
                                      user: N,
                                      src: R,
                                      avatarDecoration: L,
                                      size: u.EFr.SIZE_40,
                                      "aria-hidden": !0,
                                      animate: !0,
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
                              t),
                          ),
                          username: (0, r.jsx)(u.PUh, {
                              variant: "text-md/semibold",
                              name: j.ZP.getName(i, null, N),
                              colorString: C.colorString,
                              colorStrings: C.colorStrings,
                          }),
                          className: l()(E.content, E.exampleMessage),
                          message: I.intl.string(I.t["6OSasb"]),
                          decorations: (0, r.jsx)(u.Ucv, {
                              color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                              className: E.boostIcon,
                          }),
                      }),
                  (0, r.jsx)(f.Z, {
                      guild: c,
                      className: E.content,
                      analyticsLocation: {
                          page: Z.ZY5.GUILD_POWERUPS_OVERVIEW,
                          section: Z.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                      },
                      color: s.Tt.BRAND,
                      size: s.Ph.MEDIUM,
                      intent: m.P.NONE,
                      fullWidth: !0,
                      icon: (0, r.jsx)(u.Ucv, {
                          color: "currentColor",
                          size: "sm",
                      }),
                  }),
              ],
          });
}
