n.d(t, { Z: () => w });
var i = n(255367),
    r = n(73800),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(497321),
    u = n(100527),
    m = n(367907),
    p = n(906732),
    g = n(22267),
    h = n(346811),
    f = n(850020),
    b = n(296810),
    x = n(678135),
    _ = n(643879),
    j = n(621853),
    E = n(246946),
    C = n(594174),
    O = n(63063),
    v = n(74538),
    S = n(18438),
    T = n(778825),
    N = n(856607),
    I = n(594496),
    y = n(856768),
    A = n(981631),
    P = n(388032);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e) {
    (0, o.ZDy)(async () => {
        let { default: t } = await n.e("84509").then(n.bind(n, 933696));
        return (n) => (0, i.jsx)(t, R({ source: D(R({}, e), { page: A.ZY5.GUILD_MEMBER_PROFILE_SETTINGS }) }, n));
    });
}
function w(e) {
    let { selectedGuild: t } = e,
        { analyticsLocations: n } = (0, p.ZP)(u.Z.USER_SETTINGS_GUILD_PROFILE),
        s = (0, l.e7)([C.default], () => {
            let e = C.default.getCurrentUser();
            return a()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        w = (0, l.e7)([j.Z], () => !j.Z.isFetchingProfile(s.id, null == t ? void 0 : t.id)),
        k = (0, l.e7)([E.Z], () => E.Z.hidePersonalInformation),
        L = (0, l.cj)([T.Z], () => D(R({}, T.Z.getAllPending()), { source: T.Z.getSource() })),
        { source: B, pendingAvatar: M, pendingNameplate: U } = L,
        V = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++)
                    (n = s[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(L, ["source", "pendingAvatar", "pendingNameplate"]),
        G = (0, _.SD)({
            userId: s.id,
            image: M,
        }),
        F = (0, f.K)({
            user: s,
            guildId: null == t ? void 0 : t.id,
        });
    r.useEffect(() => () => c.Z.wait(S.W3), []),
        r.useEffect(() => {
            null != B &&
                m.ZP.trackWithMetadata(A.rMx.SETTINGS_PANE_VIEWED, {
                    settings_type: "guild",
                    destination_pane: A.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                    source: B,
                });
        }, [B]);
    let { enabled: H } = h.Z.useConfig({ location: "GuildIdentitySettingsPage" });
    return k
        ? (0, i.jsx)(d.Z, {})
        : w
          ? (0, i.jsxs)(p.Gt, {
                value: n,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        children: P.intl.format(P.t["/PTB2N"], {
                            helpCenterLink: O.Z.getArticleURL(A.BhN.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(y.Z, {
                                      guildId: t.id,
                                      onChange: (e) => {
                                          null != e && (0, S.HP)(e);
                                      },
                                  }),
                                  (0, i.jsx)(b.Z, {
                                      profilePreviewTitle: P.intl.formatToPlainString(P.t.Tc0slJ, {
                                          guildName: null == t ? void 0 : t.name,
                                      }),
                                      profilePreview: (0, i.jsx)(
                                          x.Z,
                                          D(R({}, V), {
                                              pendingAvatar: G,
                                              user: s,
                                              guild: t,
                                              canUsePremiumCustomization: v.ZP.canUsePremiumProfileCustomization(s),
                                              onUpsellClick: Z,
                                          }),
                                      ),
                                      nameplatePreview: H
                                          ? (0, i.jsx)(g.Z, {
                                                user: s,
                                                guildId: null == t ? void 0 : t.id,
                                                nameplate: U,
                                                nameplateData: void 0 === U ? F : void 0,
                                                isHighlighted: !0,
                                            })
                                          : null,
                                      children: (0, i.jsx)(I.Z, { nameplateEnabled: H }),
                                  }),
                              ],
                          })
                        : (0, i.jsx)(N.Z, {}),
                ],
            })
          : (0, i.jsx)(o.$jN, {});
}
