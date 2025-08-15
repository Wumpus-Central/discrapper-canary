n.d(t, { Z: () => p });
var l = n(255367),
    r = n(73800),
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
    Z = n(388032),
    P = n(766509);
function p(e) {
    let { guildId: t, userId: p, analyticsLocation: y, analyticsLocations: j, context: m, icon: h } = e,
        v = b.Z.getGuild(t),
        _ = d.default.getId(),
        S = (0, i.e7)([O.default], () => O.default.getUser(p)),
        M = (0, i.e7)([f.ZP], () => f.ZP.isGuestOrLurker(t, p), [t, p]);
    (0, i.e7)([g.Z], () => g.Z.getGuildVersion(t), [t]);
    let N = r.useMemo(() => ({ [t]: [p] }), [t, p]);
    (0, o.$)(N);
    let C = m === E.IlC.POPOUT,
        A = (0, c.Z)({
            guild: v,
            analyticsLocation: y,
        }),
        I = (0, u.Aq)();
    if (null == v || C) return null;
    let T = _ === p && (g.Z.can(E.Plq.CHANGE_NICKNAME, v) || g.Z.can(E.Plq.MANAGE_NICKNAMES, v)),
        D = _ === p,
        x = g.Z.canManageUser(E.Plq.MANAGE_NICKNAMES, p, v);
    if (!(T || x || D) || null == S || M) return null;
    let w = v.features.has(E.oNc.HUB) ? Z.intl.string(Z.t["+MWrWl"]) : Z.intl.string(Z.t["PKQB/P"]),
        U = D ? w : Z.intl.string(Z.t.dilOFx);
    return (0, l.jsx)(a.sNh, {
        id: "change-nickname",
        label: (0, l.jsx)("div", {
            className: P.labelWrapper,
            children: (0, l.jsx)("span", {
                className: P.label,
                children: U,
            }),
        }),
        icon: h,
        action: () => {
            D
                ? ((0, s.Z)(S.id, S.getAvatarURL(t, 80), { guildId: t }),
                  A(),
                  I.dispatch(E.CkL.POPOUT_CLOSE),
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
                                      analyticsSource: y,
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
