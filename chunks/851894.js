n.d(t, { Z: () => B });
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(570140),
    u = n(497321),
    d = n(100527),
    f = n(367907),
    _ = n(906732),
    p = n(22267),
    h = n(346811),
    m = n(850020),
    g = n(296810),
    E = n(678135),
    b = n(643879),
    y = n(621853),
    O = n(246946),
    v = n(594174),
    I = n(63063),
    T = n(74538),
    S = n(18438),
    A = n(778825),
    C = n(856607),
    N = n(594496),
    R = n(856768),
    P = n(981631),
    w = n(388032),
    D = n(813709);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = U(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function G(e) {
    (0, l.ZDy)(async () => {
        let { default: t } = await n.e("84509").then(n.bind(n, 933696));
        return (n) => (0, r.jsx)(t, L({ source: M(L({}, e), { page: P.ZY5.GUILD_MEMBER_PROFILE_SETTINGS }) }, n));
    });
}
function B(e) {
    let { selectedGuild: t } = e,
        { analyticsLocations: n } = (0, _.ZP)(d.Z.USER_SETTINGS_GUILD_PROFILE),
        a = (0, s.e7)([v.default], () => {
            let e = v.default.getCurrentUser();
            return o()(null != e, "GuildIdentitySettingsPage: user cannot be undefined"), e;
        }),
        x = (0, s.e7)([y.Z], () => !y.Z.isFetchingProfile(a.id, null == t ? void 0 : t.id)),
        j = (0, s.e7)([O.Z], () => O.Z.hidePersonalInformation),
        U = (0, s.cj)([A.Z], () => M(L({}, A.Z.getAllPending()), { source: A.Z.getSource() })),
        { source: B, pendingAvatar: Z, pendingNameplate: V } = U,
        F = k(U, ["source", "pendingAvatar", "pendingNameplate"]),
        H = (0, b.SD)({
            userId: a.id,
            image: Z,
        }),
        Y = (0, m.K)({
            user: a,
            guildId: null == t ? void 0 : t.id,
        });
    i.useEffect(() => () => c.Z.wait(S.W3), []),
        i.useEffect(() => {
            null != B &&
                f.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
                    settings_type: "guild",
                    destination_pane: P.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                    source: B,
                });
        }, [B]);
    let { enabled: W } = h.Z.useConfig({ location: "GuildIdentitySettingsPage" });
    return j
        ? (0, r.jsx)(u.Z, {})
        : x
          ? (0, r.jsxs)(_.Gt, {
                value: n,
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: w.intl.format(w.t["/PTB2N"], {
                            helpCenterLink: I.Z.getArticleURL(P.BhN.GUILD_PROFILES),
                        }),
                    }),
                    null != t
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(R.Z, {
                                      guildId: t.id,
                                      onChange: (e) => {
                                          null != e && (0, S.HP)(e);
                                      },
                                  }),
                                  (0, r.jsx)(g.Z, {
                                      profilePreviewTitle: (0, r.jsx)(l.X6q, {
                                          variant: "heading-md/medium",
                                          className: D.profilePreviewTitle,
                                          children: w.intl.formatToPlainString(w.t.Tc0slJ, {
                                              guildName: null == t ? void 0 : t.name,
                                          }),
                                      }),
                                      profilePreview: (0, r.jsx)(
                                          E.Z,
                                          M(L({}, F), {
                                              pendingAvatar: H,
                                              user: a,
                                              guild: t,
                                              canUsePremiumCustomization: T.ZP.canUsePremiumProfileCustomization(a),
                                              onUpsellClick: G,
                                          }),
                                      ),
                                      nameplatePreview: W
                                          ? (0, r.jsx)(p.Z, {
                                                user: a,
                                                guildId: null == t ? void 0 : t.id,
                                                nameplate: V,
                                                nameplateData: null == V ? Y : void 0,
                                                isHighlighted: !0,
                                            })
                                          : null,
                                      children: (0, r.jsx)(N.Z, { nameplateEnabled: W }),
                                  }),
                              ],
                          })
                        : (0, r.jsx)(C.Z, {}),
                ],
            })
          : (0, r.jsx)(l.$jN, {});
}
