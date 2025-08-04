n.d(t, { Z: () => k });
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
    f = n(4242),
    b = n(296810),
    x = n(678135),
    _ = n(643879),
    j = n(621853),
    E = n(271383),
    C = n(246946),
    O = n(594174),
    v = n(63063),
    S = n(74538),
    T = n(18438),
    I = n(778825),
    N = n(856607),
    y = n(594496),
    A = n(856768),
    P = n(981631),
    R = n(388032);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function Z(e, t) {
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
function w(e) {
    (0, o.ZDy)(async () => {
        let { default: t } = await n.e('84509').then(n.bind(n, 933696));
        return (n) => (0, i.jsx)(t, D({ source: Z(D({}, e), { page: P.ZY5.GUILD_MEMBER_PROFILE_SETTINGS }) }, n));
    });
}
function k(e) {
    var t;
    let { selectedGuild: n } = e,
        { analyticsLocations: s } = (0, p.ZP)(u.Z.USER_SETTINGS_GUILD_PROFILE),
        k = (0, l.e7)([O.default], () => {
            let e = O.default.getCurrentUser();
            return (a()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e);
        }),
        L = (0, l.e7)([j.Z], () => !j.Z.isFetchingProfile(k.id, null == n ? void 0 : n.id)),
        B = (0, l.e7)([C.Z], () => C.Z.hidePersonalInformation),
        M = (0, l.cj)([I.Z], () => Z(D({}, I.Z.getAllPending()), { source: I.Z.getSource() })),
        { source: U, pendingAvatar: V, pendingNameplate: G } = M,
        F = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(M, ['source', 'pendingAvatar', 'pendingNameplate']),
        H = (0, _.SD)({
            userId: k.id,
            image: V
        }),
        W = (0, l.e7)([E.ZP], () => (null != n ? E.ZP.getMember(n.id, k.id) : null));
    (r.useEffect(() => () => c.Z.wait(T.W3), []),
        r.useEffect(() => {
            null != U &&
                m.ZP.trackWithMetadata(P.rMx.SETTINGS_PANE_VIEWED, {
                    settings_type: 'guild',
                    destination_pane: P.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                    source: U
                });
        }, [U]));
    let { enabled: z } = h.Z.useConfig({ location: 'GuildIdentitySettingsPage' });
    return B
        ? (0, i.jsx)(d.Z, {})
        : L
          ? (0, i.jsxs)(p.Gt, {
                value: s,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: R.intl.format(R.t['/PTB2N'], { helpCenterLink: v.Z.getArticleURL(P.BhN.GUILD_PROFILES) })
                    }),
                    null != n
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(A.Z, {
                                      guildId: n.id,
                                      onChange: (e) => {
                                          null != e && (0, T.HP)(e);
                                      }
                                  }),
                                  (0, i.jsx)(b.Z, {
                                      profilePreviewTitle: R.intl.formatToPlainString(R.t.Tc0slJ, { guildName: null == n ? void 0 : n.name }),
                                      profilePreview: (0, i.jsx)(
                                          x.Z,
                                          Z(D({}, F), {
                                              pendingAvatar: H,
                                              user: k,
                                              guild: n,
                                              canUsePremiumCustomization: S.ZP.canUsePremiumProfileCustomization(k),
                                              onUpsellClick: w
                                          })
                                      ),
                                      nameplatePreview: z
                                          ? (0, i.jsx)(g.Z, {
                                                user: k,
                                                guildId: null == n ? void 0 : n.id,
                                                nameplate: G,
                                                nameplateData: void 0 === G ? (0, f.Pb)(null == W || null == (t = W.collectibles) ? void 0 : t.nameplate) : void 0,
                                                isHighlighted: !0
                                            })
                                          : null,
                                      children: (0, i.jsx)(y.Z, { nameplateEnabled: z })
                                  })
                              ]
                          })
                        : (0, i.jsx)(N.Z, {})
                ]
            })
          : (0, i.jsx)(o.$jN, {});
}
