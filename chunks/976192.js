n.d(t, { Z: () => Z });
var l = n(951288),
    r = n(647438),
    i = n(442837),
    a = n(481060),
    o = n(616780),
    u = n(40851),
    c = n(300284),
    s = n(484459),
    d = n(314897),
    f = n(271383),
    b = n(430824),
    g = n(496675),
    O = n(594174),
    E = n(981631),
    y = n(388032),
    p = n(766509);
function Z(e) {
    let { guildId: t, userId: Z, analyticsLocation: P, analyticsLocations: j, context: m, icon: v } = e,
        h = b.Z.getGuild(t),
        _ = d.default.getId(),
        S = (0, i.e7)([O.default], () => O.default.getUser(Z)),
        M = (0, i.e7)([f.ZP], () => f.ZP.isGuestOrLurker(t, Z), [t, Z]);
    (0, i.e7)([g.Z], () => g.Z.getGuildVersion(t), [t]);
    let N = r.useMemo(() => ({ [t]: [Z] }), [t, Z]);
    (0, o.$)(N);
    let C = m === E.IlC.POPOUT,
        I = (0, c.Z)({
            guild: h,
            analyticsLocation: P,
        }),
        A = (0, u.Aq)();
    if (null == h || C) return null;
    let T = _ === Z && (g.Z.can(E.Plq.CHANGE_NICKNAME, h) || g.Z.can(E.Plq.MANAGE_NICKNAMES, h)),
        D = _ === Z,
        w = g.Z.canManageUser(E.Plq.MANAGE_NICKNAMES, Z, h);
    if (!(T || w || D) || null == S || M) return null;
    let x = h.features.has(E.oNc.HUB) ? y.intl.string(y.t["+MWrWl"]) : y.intl.string(y.t["PKQB/P"]),
        U = D ? x : y.intl.string(y.t.dilOFx);
    return (0, l.jsx)(a.sNh, {
        id: "change-nickname",
        label: (0, l.jsx)("div", {
            className: p.labelWrapper,
            children: (0, l.jsx)("span", {
                className: p.label,
                children: U,
            }),
        }),
        icon: v,
        action: () => {
            D
                ? ((0, s.Z)(S.id, S.getAvatarURL(t, 80), { guildId: t }),
                  I(),
                  A.dispatch(E.CkL.POPOUT_CLOSE),
                  (0, a.pTH)())
                : (0, a.ZDy)(async () => {
                      let { default: e } = await n.e("17712").then(n.bind(n, 620021));
                      return (n) => {
                          var r, i;
                          return (0, l.jsx)(
                              e,
                              ((r = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })({}, n)),
                              (i = i =
                                  {
                                      guildId: t,
                                      user: S,
                                      analyticsSource: P,
                                      analyticsLocations: j,
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
                              r),
                          );
                      };
                  });
        },
    });
}
