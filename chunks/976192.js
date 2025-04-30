t.d(n, { Z: () => h });
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    o = t(616780),
    u = t(40851),
    s = t(300284),
    c = t(484459),
    d = t(314897),
    g = t(271383),
    b = t(430824),
    Z = t(496675),
    f = t(594174),
    p = t(981631),
    O = t(388032),
    m = t(965385);
function h(e) {
    let { guildId: n, userId: h, analyticsLocation: j, analyticsLocations: P, context: v, icon: x } = e,
        y = b.Z.getGuild(n),
        N = d.default.getId(),
        _ = (0, r.e7)([f.default], () => f.default.getUser(h)),
        E = (0, r.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n, h), [n, h]);
    (0, r.e7)([Z.Z], () => Z.Z.getGuildVersion(n), [n]);
    let C = i.useMemo(() => ({ [n]: [h] }), [n, h]);
    (0, o.$)(C);
    let I = v === p.IlC.POPOUT,
        S = (0, s.Z)({
            guild: y,
            analyticsLocation: j
        }),
        T = (0, u.Aq)();
    if (null == y || I) return null;
    let U = N === h && (Z.Z.can(p.Plq.CHANGE_NICKNAME, y) || Z.Z.can(p.Plq.MANAGE_NICKNAMES, y)),
        A = N === h,
        R = Z.Z.canManageUser(p.Plq.MANAGE_NICKNAMES, h, y);
    if (!(U || R || A) || null == _ || E) return null;
    let w = y.hasFeature(p.oNc.HUB) ? O.intl.string(O.t['+MWrWl']) : O.intl.string(O.t['PKQB/P']),
        M = A ? w : O.intl.string(O.t.dilOFx);
    return (0, l.jsx)(a.sNh, {
        id: 'change-nickname',
        label: (0, l.jsx)('div', {
            className: m.labelWrapper,
            children: (0, l.jsx)('span', {
                className: m.label,
                children: M
            })
        }),
        icon: x,
        action: () => {
            A
                ? ((0, c.Z)(_.id, _.getAvatarURL(n, 80), { guildId: n }), S(), T.dispatch(p.CkL.POPOUT_CLOSE), (0, a.pTH)())
                : (0, a.ZDy)(async () => {
                      let { default: e } = await t.e('17712').then(t.bind(t, 620021));
                      return (t) => {
                          var i, r;
                          return (0, l.jsx)(
                              e,
                              ((i = (function (e) {
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
                              (r = r =
                                  {
                                      guildId: n,
                                      user: _,
                                      analyticsSource: j,
                                      analyticsLocations: P
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
                                  : (function (e, n) {
                                        var t = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            t.push.apply(t, l);
                                        }
                                        return t;
                                    })(Object(r)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e));
                                    }),
                              i)
                          );
                      };
                  });
        }
    });
}
