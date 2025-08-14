r.d(t, { Z: () => j });
var n = r(255367),
    l = r(73800),
    a = r(442837),
    i = r(481060),
    c = r(616780),
    o = r(40851),
    s = r(300284),
    u = r(484459),
    b = r(314897),
    p = r(271383),
    f = r(430824),
    d = r(496675),
    O = r(594174),
    P = r(981631),
    g = r(388032),
    y = r(766509);
function j(e) {
    let { guildId: t, userId: j, analyticsLocation: h, analyticsLocations: w, context: N, icon: v } = e,
        Z = f.Z.getGuild(t),
        _ = b.default.getId(),
        C = (0, a.e7)([O.default], () => O.default.getUser(j)),
        m = (0, a.e7)([p.ZP], () => p.ZP.isGuestOrLurker(t, j), [t, j]);
    (0, a.e7)([d.Z], () => d.Z.getGuildVersion(t), [t]);
    let A = l.useMemo(() => ({ [t]: [j] }), [t, j]);
    (0, c.$)(A);
    let k = N === P.IlC.POPOUT,
        E = (0, s.Z)({
            guild: Z,
            analyticsLocation: h,
        }),
        x = (0, o.Aq)();
    if (null == Z || k) return null;
    let M = _ === j && (d.Z.can(P.Plq.CHANGE_NICKNAME, Z) || d.Z.can(P.Plq.MANAGE_NICKNAMES, Z)),
        S = _ === j,
        D = d.Z.canManageUser(P.Plq.MANAGE_NICKNAMES, j, Z);
    if (!(M || D || S) || null == C || m) return null;
    let G = Z.features.has(P.oNc.HUB) ? g.intl.string(g.t["+MWrWl"]) : g.intl.string(g.t["PKQB/P"]),
        I = S ? G : g.intl.string(g.t.dilOFx);
    return (0, n.jsx)(i.sNh, {
        id: "change-nickname",
        label: (0, n.jsx)("div", {
            className: y.labelWrapper,
            children: (0, n.jsx)("span", {
                className: y.label,
                children: I,
            }),
        }),
        icon: v,
        action: () => {
            S
                ? ((0, u.Z)(C.id, C.getAvatarURL(t, 80), { guildId: t }),
                  E(),
                  x.dispatch(P.CkL.POPOUT_CLOSE),
                  (0, i.pTH)())
                : (0, i.ZDy)(async () => {
                      let { default: e } = await r.e("17712").then(r.bind(r, 620021));
                      return (r) => {
                          var l, a;
                          return (0, n.jsx)(
                              e,
                              ((l = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              }),
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              (n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = n);
                                          });
                                  }
                                  return e;
                              })({}, r)),
                              (a = a =
                                  {
                                      guildId: t,
                                      user: C,
                                      analyticsSource: h,
                                      analyticsLocations: w,
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(a)).forEach(function (e) {
                                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                    }),
                              l),
                          );
                      };
                  });
        },
    });
}
