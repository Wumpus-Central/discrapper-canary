n.d(t, { Z: () => P });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(616780),
    c = n(728285),
    u = n(300284),
    s = n(484459),
    b = n(314897),
    p = n(271383),
    d = n(430824),
    O = n(496675),
    f = n(594174),
    y = n(981631),
    g = n(388032),
    j = n(766509);
function P(e) {
    let { guildId: t, userId: P, analyticsLocation: h, analyticsLocations: v, context: E, icon: w } = e,
        Z = d.Z.getGuild(t),
        m = b.default.getId(),
        D = (0, l.e7)([f.default], () => f.default.getUser(P)),
        S = (0, l.e7)([p.ZP], () => p.ZP.isGuestOrLurker(t, P), [t, P]);
    (0, l.e7)([O.Z], () => O.Z.getGuildVersion(t), [t]);
    let C = i.useMemo(() => ({ [t]: [P] }), [t, P]);
    (0, a.$)(C, "useChangeIdentityItem");
    let N = E === y.IlC.POPOUT,
        I = (0, u.Z)({
            guild: Z,
            analyticsLocations: v,
        }),
        _ = (0, c.Aq)();
    if (null == Z || N) return null;
    let G = m === P && (O.Z.can(y.Plq.CHANGE_NICKNAME, Z) || O.Z.can(y.Plq.MANAGE_NICKNAMES, Z)),
        k = m === P,
        x = O.Z.canManageUser(y.Plq.MANAGE_NICKNAMES, P, Z);
    if (!(G || x || k) || null == D || S) return null;
    let A = Z.features.has(y.GuildFeatures.HUB) ? g.intl.string(g.t["+MWrWt"]) : g.intl.string(g.t["PKQB/H"]),
        M = k ? A : g.intl.string(g.t.dilOF6);
    return (0, r.jsx)(o.sNh, {
        id: "change-nickname",
        label: (0, r.jsx)("div", {
            className: j.labelWrapper,
            children: (0, r.jsx)("span", {
                className: j.label,
                children: M,
            }),
        }),
        icon: w,
        action: () => {
            k
                ? ((0, s.Z)(D.id, D.getAvatarURL(t, 80), { guildId: t }),
                  I(),
                  _.dispatch(y.CkL.POPOUT_CLOSE),
                  (0, o.pTH)())
                : (0, o.ZDy)(async () => {
                      let { default: e } = await n.e("56698").then(n.bind(n, 82035));
                      return (n) => {
                          var i, l;
                          return (0, r.jsx)(
                              e,
                              ((i = (function (e) {
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
                              })({}, n)),
                              (l = l =
                                  {
                                      guildId: t,
                                      user: D,
                                      analyticsSource: h,
                                      analyticsLocations: v,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i),
                          );
                      };
                  });
        },
    });
}
