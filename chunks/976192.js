r.d(t, { Z: () => P });
var n = r(200651),
    i = r(192379),
    l = r(442837),
    o = r(481060),
    c = r(616780),
    a = r(40851),
    u = r(300284),
    s = r(484459),
    b = r(314897),
    p = r(271383),
    O = r(430824),
    f = r(496675),
    d = r(594174),
    y = r(981631),
    g = r(388032),
    j = r(965385);
function P(e) {
    let { guildId: t, userId: P, analyticsLocation: v, analyticsLocations: h, context: w, icon: E } = e,
        m = O.Z.getGuild(t),
        Z = b.default.getId(),
        D = (0, l.e7)([d.default], () => d.default.getUser(P)),
        N = (0, l.e7)([p.ZP], () => p.ZP.isGuestOrLurker(t, P), [t, P]);
    (0, l.e7)([f.Z], () => f.Z.getGuildVersion(t), [t]);
    let S = i.useMemo(() => ({ [t]: [P] }), [t, P]);
    (0, c.$)(S);
    let _ = w === y.IlC.POPOUT,
        C = (0, u.Z)({
            guild: m,
            analyticsLocation: v
        }),
        I = (0, a.Aq)();
    if (null == m || _) return null;
    let k = Z === P && (f.Z.can(y.Plq.CHANGE_NICKNAME, m) || f.Z.can(y.Plq.MANAGE_NICKNAMES, m)),
        x = Z === P,
        A = f.Z.canManageUser(y.Plq.MANAGE_NICKNAMES, P, m);
    if (!(k || A || x) || null == D || N) return null;
    let G = m.hasFeature(y.oNc.HUB) ? g.intl.string(g.t['+MWrWl']) : g.intl.string(g.t['PKQB/P']),
        L = x ? G : g.intl.string(g.t.dilOFx);
    return (0, n.jsx)(o.sNh, {
        id: 'change-nickname',
        label: (0, n.jsx)('div', {
            className: j.labelWrapper,
            children: (0, n.jsx)('span', {
                className: j.label,
                children: L
            })
        }),
        icon: E,
        action: () => {
            x
                ? ((0, s.Z)(D.id, D.getAvatarURL(t, 80), { guildId: t }), C(), I.dispatch(y.CkL.POPOUT_CLOSE), (0, o.pTH)())
                : (0, o.ZDy)(async () => {
                      let { default: e } = await r.e('17712').then(r.bind(r, 620021));
                      return (r) => {
                          var i, l;
                          return (0, n.jsx)(
                              e,
                              ((i = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              })
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              (n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = n);
                                          });
                                  }
                                  return e;
                              })({}, r)),
                              (l = l =
                                  {
                                      guildId: t,
                                      user: D,
                                      analyticsSource: v,
                                      analyticsLocations: h
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(l)).forEach(function (e) {
                                        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                    }),
                              i)
                          );
                      };
                  });
        }
    });
}
