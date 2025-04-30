n.d(t, { Z: () => R });
var i = n(200651),
    r = n(192379),
    s = n(512722),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(497321),
    u = n(100527),
    m = n(367907),
    p = n(906732),
    g = n(296810),
    h = n(678135),
    f = n(643879),
    b = n(621853),
    _ = n(246946),
    x = n(594174),
    E = n(63063),
    j = n(74538),
    C = n(18438),
    O = n(778825),
    S = n(856607),
    v = n(594496),
    T = n(856768),
    N = n(981631),
    I = n(388032);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function A(e, t) {
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
function P(e) {
    (0, o.ZDy)(async () => {
        let { default: t } = await n.e('84509').then(n.bind(n, 933696));
        return (n) => (0, i.jsx)(t, y({ source: A(y({}, e), { page: N.ZY5.GUILD_MEMBER_PROFILE_SETTINGS }) }, n));
    });
}
function R(e) {
    let { selectedGuild: t } = e,
        { analyticsLocations: n } = (0, p.ZP)(u.Z.USER_SETTINGS_GUILD_PROFILE),
        s = (0, a.e7)([x.default], () => {
            let e = x.default.getCurrentUser();
            return l()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        R = (0, a.e7)([b.Z], () => !b.Z.isFetchingProfile(s.id, null == t ? void 0 : t.id)),
        D = (0, a.e7)([_.Z], () => _.Z.hidePersonalInformation),
        Z = (0, a.cj)([O.Z], () => A(y({}, O.Z.getAllPending()), { source: O.Z.getSource() })),
        { source: w, pendingAvatar: k } = Z,
        L = (function (e, t) {
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
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(Z, ['source', 'pendingAvatar']),
        M = (0, f.SD)({
            userId: s.id,
            image: k
        });
    return (r.useEffect(() => () => c.Z.wait(C.W3), []),
    r.useEffect(() => {
        null != w &&
            m.ZP.trackWithMetadata(N.rMx.SETTINGS_PANE_VIEWED, {
                settings_type: 'guild',
                destination_pane: N.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                source: w
            });
    }, [w]),
    D)
        ? (0, i.jsx)(d.Z, {})
        : R
          ? (0, i.jsxs)(p.Gt, {
                value: n,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: I.intl.format(I.t['/PTB2N'], { helpCenterLink: E.Z.getArticleURL(N.BhN.GUILD_PROFILES) })
                    }),
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(T.Z, {
                                      guildId: t.id,
                                      onChange: (e) => {
                                          null != e && (0, C.HP)(e);
                                      }
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      previewTitle: I.intl.formatToPlainString(I.t.Tc0slJ, { guildName: null == t ? void 0 : t.name }),
                                      profilePreview: (0, i.jsx)(
                                          h.Z,
                                          A(y({}, L), {
                                              pendingAvatar: M,
                                              user: s,
                                              guild: t,
                                              canUsePremiumCustomization: j.ZP.canUsePremiumProfileCustomization(s),
                                              onUpsellClick: P
                                          })
                                      ),
                                      children: (0, i.jsx)(v.Z, {})
                                  })
                              ]
                          })
                        : (0, i.jsx)(S.Z, {})
                ]
            })
          : (0, i.jsx)(o.$jN, {});
}
