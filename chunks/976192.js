t.d(n, { Z: () => N });
var l = t(200651),
    r = t(192379),
    i = t(442837),
    a = t(481060),
    o = t(616780),
    u = t(40851),
    s = t(300284),
    c = t(484459),
    d = t(314897),
    g = t(271383),
    Z = t(430824),
    b = t(496675),
    f = t(594174),
    p = t(981631),
    O = t(388032),
    m = t(965385);
function N(e) {
    let { guildId: n, userId: N, analyticsLocation: h, analyticsLocations: j, context: P, icon: x } = e,
        v = Z.Z.getGuild(n),
        y = d.default.getId(),
        _ = (0, i.e7)([f.default], () => f.default.getUser(N)),
        E = (0, i.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n, N), [n, N]);
    (0, i.e7)([b.Z], () => b.Z.getGuildVersion(n), [n]);
    let C = r.useMemo(() => ({ [n]: [N] }), [n, N]);
    (0, o.$)(C);
    let I = P === p.IlC.POPOUT,
        T = (0, s.Z)({
            guild: v,
            analyticsLocation: h
        }),
        S = (0, u.Aq)();
    if (null == v || I) return null;
    let U = y === N && (b.Z.can(p.Plq.CHANGE_NICKNAME, v) || b.Z.can(p.Plq.MANAGE_NICKNAMES, v)),
        W = y === N,
        A = b.Z.canManageUser(p.Plq.MANAGE_NICKNAMES, N, v);
    if (!(U || A || W) || null == _ || E) return null;
    let R = v.hasFeature(p.oNc.HUB) ? O.NW.string(O.t['+MWrWl']) : O.NW.string(O.t['PKQB/P']),
        w = W ? R : O.NW.string(O.t.dilOFx);
    return (0, l.jsx)(a.sNh, {
        id: 'change-nickname',
        label: (0, l.jsx)('div', {
            className: m.labelWrapper,
            children: (0, l.jsx)('span', {
                className: m.label,
                children: w
            })
        }),
        icon: x,
        action: () => {
            W
                ? ((0, c.Z)(_.id, _.getAvatarURL(n, 80), { guildId: n }), T(), S.dispatch(p.CkL.POPOUT_CLOSE), (0, a.pTH)())
                : (0, a.ZDy)(async () => {
                      let { default: e } = await t.e('17712').then(t.bind(t, 620021));
                      return (t) => {
                          var r, i;
                          return (0, l.jsx)(
                              e,
                              ((r = (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = null != arguments[n] ? arguments[n] : {},
                                          l = Object.keys(t);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                              })
                                          )),
                                          l.forEach(function (n) {
                                              var l;
                                              (l = t[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[n] = l);
                                          });
                                  }
                                  return e;
                              })({}, t)),
                              (i = i =
                                  {
                                      guildId: n,
                                      user: _,
                                      analyticsSource: h,
                                      analyticsLocations: j
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, n) {
                                        var t = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            t.push.apply(t, l);
                                        }
                                        return t;
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
