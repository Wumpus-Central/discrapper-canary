n.d(t, { Z: () => O });
var i = n(200651),
    s = n(192379),
    l = n(512722),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(570140),
    d = n(497321),
    u = n(100527),
    h = n(367907),
    m = n(906732),
    g = n(296810),
    x = n(921813),
    _ = n(621853),
    p = n(246946),
    E = n(594174),
    C = n(63063),
    N = n(74538),
    I = n(18438),
    f = n(778825),
    T = n(856607),
    S = n(594496),
    j = n(856768),
    v = n(981631),
    b = n(388032);
function A(e) {
    (0, o.ZDy)(async () => {
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
        { analyticsLocations: n } = (0, m.ZP)(u.Z.GUILD_PROFILE),
        l = (0, a.e7)([E.default], () => {
            let e = E.default.getCurrentUser();
            return r()(null != e, 'GuildIdentitySettingsPage: user cannot be undefined'), e;
        }),
        O = (0, a.e7)([_.Z], () => !_.Z.isFetchingProfile(l.id, null == t ? void 0 : t.id)),
        R = (0, a.e7)([p.Z], () => p.Z.hidePersonalInformation),
        { source: D, ...P } = (0, a.cj)([f.Z], () => ({
            ...f.Z.getAllPending(),
            source: f.Z.getSource()
        }));
    return (s.useEffect(() => () => c.Z.wait(I.W3), []),
    s.useEffect(() => {
        null != D &&
            h.ZP.trackWithMetadata(v.rMx.SETTINGS_PANE_VIEWED, {
                settings_type: 'guild',
                destination_pane: v.jXE.SETTINGS_CUSTOMIZE_PROFILE,
                source: D
            });
    }, [D]),
    R)
        ? (0, i.jsx)(d.Z, {})
        : O
          ? (0, i.jsxs)(m.Gt, {
                value: n,
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: b.intl.format(b.t['/PTB2N'], { helpCenterLink: C.Z.getArticleURL(v.BhN.GUILD_PROFILES) })
                    }),
                    null != t
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(j.Z, {
                                      guildId: t.id,
                                      onChange: (e) => {
                                          null != e && (0, I.HP)(e);
                                      }
                                  }),
                                  (0, i.jsx)(g.Z, {
                                      previewTitle: b.intl.formatToPlainString(b.t.Tc0slJ, { guildName: null == t ? void 0 : t.name }),
                                      profilePreview: (0, i.jsx)(x.Z, {
                                          user: l,
                                          guild: t,
                                          canUsePremiumCustomization: N.ZP.canUsePremiumProfileCustomization(l),
                                          onUpsellClick: A,
                                          ...P
                                      }),
                                      children: (0, i.jsx)(S.Z, {})
                                  })
                              ]
                          })
                        : (0, i.jsx)(T.Z, {})
                ]
            })
          : (0, i.jsx)(o.$jN, {});
}
