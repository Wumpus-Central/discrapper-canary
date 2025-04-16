n.d(t, { Z: () => p });
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    o = n(616780),
    u = n(40851),
    c = n(300284),
    s = n(484459),
    d = n(314897),
    f = n(271383),
    O = n(430824),
    E = n(496675),
    g = n(594174),
    b = n(981631),
    y = n(388032),
    _ = n(965385);
function p(e) {
    let { guildId: t, userId: p, analyticsLocation: m, analyticsLocations: N, context: j, icon: M } = e,
        P = O.Z.getGuild(t),
        S = d.default.getId(),
        A = (0, i.e7)([g.default], () => g.default.getUser(p)),
        v = (0, i.e7)([f.ZP], () => f.ZP.isGuestOrLurker(t, p), [t, p]);
    (0, i.e7)([E.Z], () => E.Z.getGuildVersion(t), [t]);
    let Z = l.useMemo(() => ({ [t]: [p] }), [t, p]);
    (0, o.$)(Z);
    let I = j === b.IlC.POPOUT,
        h = (0, c.Z)({
            guild: P,
            analyticsLocation: m
        }),
        T = (0, u.Aq)();
    if (null == P || I) return null;
    let D = S === p && (E.Z.can(b.Plq.CHANGE_NICKNAME, P) || E.Z.can(b.Plq.MANAGE_NICKNAMES, P)),
        C = S === p,
        U = E.Z.canManageUser(b.Plq.MANAGE_NICKNAMES, p, P);
    if (!(D || U || C) || null == A || v) return null;
    let R = P.hasFeature(b.oNc.HUB) ? y.NW.string(y.t['+MWrWl']) : y.NW.string(y.t['PKQB/P']),
        L = C ? R : y.NW.string(y.t.dilOFx);
    return (0, r.jsx)(a.sNh, {
        id: 'change-nickname',
        label: (0, r.jsx)('div', {
            className: _.labelWrapper,
            children: (0, r.jsx)('span', {
                className: _.label,
                children: L
            })
        }),
        icon: M,
        action: () => {
            C
                ? ((0, s.Z)(A.id, A.getAvatarURL(t, 80), { guildId: t }), h(), T.dispatch(b.CkL.POPOUT_CLOSE), (0, a.pTH)())
                : (0, a.ZDy)(async () => {
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
                                      user: A,
                                      analyticsSource: m,
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
