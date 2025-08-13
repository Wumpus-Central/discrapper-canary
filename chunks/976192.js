t.d(n, { Z: () => h });
var l = t(255367),
    i = t(73800),
    r = t(442837),
    a = t(481060),
    u = t(616780),
    o = t(40851),
    s = t(300284),
    d = t(484459),
    c = t(314897),
    g = t(271383),
    Z = t(430824),
    f = t(496675),
    b = t(594174),
    O = t(981631),
    p = t(388032),
    m = t(934732);
function h(e) {
    let { guildId: n, userId: h, analyticsLocation: j, analyticsLocations: P, context: v, icon: x } = e,
        y = Z.Z.getGuild(n),
        N = c.default.getId(),
        E = (0, r.e7)([b.default], () => b.default.getUser(h)),
        _ = (0, r.e7)([g.ZP], () => g.ZP.isGuestOrLurker(n, h), [n, h]);
    (0, r.e7)([f.Z], () => f.Z.getGuildVersion(n), [n]);
    let C = i.useMemo(() => ({ [n]: [h] }), [n, h]);
    (0, u.$)(C);
    let I = v === O.IlC.POPOUT,
        S = (0, s.Z)({
            guild: y,
            analyticsLocation: j,
        }),
        T = (0, o.Aq)();
    if (null == y || I) return null;
    let U = N === h && (f.Z.can(O.Plq.CHANGE_NICKNAME, y) || f.Z.can(O.Plq.MANAGE_NICKNAMES, y)),
        A = N === h,
        k = f.Z.canManageUser(O.Plq.MANAGE_NICKNAMES, h, y);
    if (!(U || k || A) || null == E || _) return null;
    let w = y.features.has(O.oNc.HUB) ? p.intl.string(p.t["+MWrWl"]) : p.intl.string(p.t["PKQB/P"]),
        M = A ? w : p.intl.string(p.t.dilOFx);
    return (0, l.jsx)(a.sNh, {
        id: "change-nickname",
        label: (0, l.jsx)("div", {
            className: m.labelWrapper,
            children: (0, l.jsx)("span", {
                className: m.label,
                children: M,
            }),
        }),
        icon: x,
        action: () => {
            A
                ? ((0, d.Z)(E.id, E.getAvatarURL(n, 80), { guildId: n }),
                  S(),
                  T.dispatch(O.CkL.POPOUT_CLOSE),
                  (0, a.pTH)())
                : (0, a.ZDy)(async () => {
                      let { default: e } = await t.e("17712").then(t.bind(t, 620021));
                      return (t) => {
                          var i, r;
                          return (0, l.jsx)(
                              e,
                              ((i = (function (e) {
                                  for (var n = 1; n < arguments.length; n++) {
                                      var t = null != arguments[n] ? arguments[n] : {},
                                          l = Object.keys(t);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(t).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                              }),
                                          )),
                                          l.forEach(function (n) {
                                              var l;
                                              (l = t[n]),
                                                  n in e
                                                      ? Object.defineProperty(e, n, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[n] = l);
                                          });
                                  }
                                  return e;
                              })({}, t)),
                              (r = r =
                                  {
                                      guildId: n,
                                      user: E,
                                      analyticsSource: j,
                                      analyticsLocations: P,
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
                              i),
                          );
                      };
                  });
        },
    });
}
