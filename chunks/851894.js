n.d(t, {
    Z: function () {
        return O;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(512722),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(497321),
    u = n(100527),
    m = n(367907),
    g = n(906732),
    h = n(296810),
    p = n(921813),
    x = n(621853),
    f = n(246946),
    E = n(594174),
    _ = n(63063),
    C = n(74538),
    T = n(18438),
    S = n(778825),
    b = n(856607),
    I = n(594496),
    N = n(856768),
    v = n(981631),
    A = n(388032);
function j(e) {
    (0, o.openModalLazy)(async () => {
        let { default: t } = await n.e('84509').then(n.bind(n, 933696));
        return (n) =>
            (0, i.jsx)(t, {
                source: {
                    ...e,
                    page: v.ZY5.GUILD_MEMBER_PROFILE_SETTINGS
                },
                ...n
            });
    });
}
function O(e) {
    let { selectedGuild: t } = e,
        { analyticsLocations: n } = (0, g.ZP)(u.Z.GUILD_PROFILE),
        s = (0, l.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return a()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        O = (0, l.e7)([x.Z], () => !x.Z.isFetchingProfile(s.id, null == t ? void 0 : t.id)),
        R = (0, l.e7)([f.Z], () => f.Z.hidePersonalInformation),
        { source: P, ...D } = (0, l.cj)([S.Z], () => ({
            ...S.Z.getAllPending(),
            source: S.Z.getSource()
        }));
    return (r.useEffect(() => () => c.Z.wait(T.W3), []),
    r.useEffect(() => {
        null != P &&
            m.ZP.trackWithMetadata(v.rMx.SETTINGS_PANE_VIEWED, {
                settings_type: 'guild',
                destination_pane: v.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                source: P
            });
    }, [P]),
    R)
        ? (0, i.jsx)(d.Z, {})
        : O
          ? (0, i.jsxs)(g.Gt, {
                value: n,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: A.intl.format(A.t['/PTB2N'], { helpCenterLink: _.Z.getArticleURL(v.BhN.GUILD_PROFILES) })
                    }),
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(N.Z, {
                                      guildId: t.id,
                                      onChange: (e) => {
                                          null != e && (0, T.HP)(e);
                                      }
                                  }),
                                  (0, i.jsx)(h.Z, {
                                      previewTitle: A.intl.formatToPlainString(A.t.Tc0slJ, { guildName: null == t ? void 0 : t.name }),
                                      profilePreview: (0, i.jsx)(p.Z, {
                                          user: s,
                                          guild: t,
                                          canUsePremiumCustomization: C.ZP.canUsePremiumProfileCustomization(s),
                                          onUpsellClick: j,
                                          ...D
                                      }),
                                      children: (0, i.jsx)(I.Z, {})
                                  })
                              ]
                          })
                        : (0, i.jsx)(b.Z, {})
                ]
            })
          : (0, i.jsx)(o.Spinner, {});
}
