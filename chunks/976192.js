n.d(t, { Z: () => h });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    o = n(481060),
    a = n(616780),
    u = n(40851),
    s = n(300284),
    c = n(484459),
    d = n(314897),
    f = n(271383),
    Z = n(430824),
    b = n(496675),
    g = n(594174),
    O = n(981631),
    p = n(388032),
    P = n(705025);
function h(e) {
    let { guildId: t, userId: h, analyticsLocation: j, analyticsLocations: N, context: m, icon: y } = e,
        v = Z.Z.getGuild(t),
        E = d.default.getId(),
        x = (0, i.e7)([g.default], () => g.default.getUser(h)),
        C = (0, i.e7)([f.ZP], () => f.ZP.isGuestOrLurker(t, h), [t, h]);
    (0, i.e7)([b.Z], () => b.Z.getGuildVersion(t), [t]);
    let S = l.useMemo(() => ({ [t]: [h] }), [t, h]);
    (0, a.$)(S);
    let T = m === O.IlC.POPOUT,
        w = (0, s.Z)({
            guild: v,
            analyticsLocation: j
        }),
        I = (0, u.Aq)();
    if (null == v || T) return null;
    let _ = E === h && (b.Z.can(O.Plq.CHANGE_NICKNAME, v) || b.Z.can(O.Plq.MANAGE_NICKNAMES, v)),
        U = E === h,
        k = b.Z.canManageUser(O.Plq.MANAGE_NICKNAMES, h, v);
    if (!(_ || k || U) || null == x || C) return null;
    let A = v.hasFeature(O.oNc.HUB) ? p.NW.string(p.t['+MWrWl']) : p.NW.string(p.t['PKQB/P']),
        M = U ? A : p.NW.string(p.t.dilOFx);
    return (0, r.jsx)(o.sNh, {
        id: 'change-nickname',
        label: (0, r.jsx)('div', {
            className: P.labelWrapper,
            children: (0, r.jsx)('span', {
                className: P.label,
                children: M
            })
        }),
        icon: y,
        action: () => {
            U
                ? ((0, c.Z)(x.id, x.getAvatarURL(t, 80), { guildId: t }), w(), I.dispatch(O.CkL.POPOUT_CLOSE), (0, o.pTH)())
                : (0, o.ZDy)(async () => {
                      let { default: e } = await n.e('17712').then(n.bind(n, 620021));
                      return (n) => {
                          var l, i;
                          return (0, r.jsx)(
                              e,
                              ((l = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, n)),
                              (i = i =
                                  {
                                      guildId: t,
                                      user: x,
                                      analyticsSource: j,
                                      analyticsLocations: N
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              l)
                          );
                      };
                  });
        }
    });
}
