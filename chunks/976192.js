n.d(t, { Z: () => m });
var l = n(200651),
    r = n(192379),
    i = n(442837),
    o = n(481060),
    a = n(616780),
    u = n(40851),
    s = n(300284),
    c = n(484459),
    d = n(314897),
    b = n(271383),
    g = n(430824),
    Z = n(496675),
    f = n(594174),
    p = n(981631),
    O = n(388032),
    h = n(965385);
function m(e) {
    let { guildId: t, userId: m, analyticsLocation: j, analyticsLocations: P, context: y, icon: E } = e,
        x = g.Z.getGuild(t),
        N = d.default.getId(),
        v = (0, i.e7)([f.default], () => f.default.getUser(m)),
        _ = (0, i.e7)([b.ZP], () => b.ZP.isGuestOrLurker(t, m), [t, m]);
    (0, i.e7)([Z.Z], () => Z.Z.getGuildVersion(t), [t]);
    let C = r.useMemo(() => ({ [t]: [m] }), [t, m]);
    (0, a.$)(C);
    let S = y === p.IlC.POPOUT,
        M = (0, s.Z)({
            guild: x,
            analyticsLocation: j
        }),
        T = (0, u.Aq)();
    if (null == x || S) return null;
    let I = N === m && (Z.Z.can(p.Plq.CHANGE_NICKNAME, x) || Z.Z.can(p.Plq.MANAGE_NICKNAMES, x)),
        w = N === m,
        R = Z.Z.canManageUser(p.Plq.MANAGE_NICKNAMES, m, x);
    if (!(I || R || w) || null == v || _) return null;
    let A = x.hasFeature(p.oNc.HUB) ? O.intl.string(O.t['+MWrWl']) : O.intl.string(O.t['PKQB/P']),
        U = w ? A : O.intl.string(O.t.dilOFx);
    return (0, l.jsx)(o.sNh, {
        id: 'change-nickname',
        label: (0, l.jsx)('div', {
            className: h.labelWrapper,
            children: (0, l.jsx)('span', {
                className: h.label,
                children: U
            })
        }),
        icon: E,
        action: () => {
            w
                ? ((0, c.Z)(v.id, v.getAvatarURL(t, 80), { guildId: t }), M(), T.dispatch(p.CkL.POPOUT_CLOSE), (0, o.pTH)())
                : (0, o.ZDy)(async () => {
                      let { default: e } = await n.e('17712').then(n.bind(n, 620021));
                      return (n) => {
                          var r, i;
                          return (0, l.jsx)(
                              e,
                              ((r = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })({}, n)),
                              (i = i =
                                  {
                                      guildId: t,
                                      user: v,
                                      analyticsSource: j,
                                      analyticsLocations: P
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, l);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              r)
                          );
                      };
                  });
        }
    });
}
