(n.d(t, { z: () => N }), n(704826), n(35282));
var r = n(255367),
    i = n(73800),
    l = n(494497),
    s = n(755721),
    a = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(263145),
    u = n(366980),
    m = n(158638),
    g = n(441536),
    p = n(434404),
    f = n(621319),
    h = n(770270),
    x = n(70086),
    b = n(949640),
    j = n(981631),
    _ = n(30513),
    v = n(388032),
    O = n(919957);
function C(e) {
    let { errorDetails: t, originalVanityURLCode: n } = e;
    if (null != t)
        return (0, r.jsx)(a.Text, {
            variant: 'text-md/normal',
            color: 'text-danger',
            className: O.vanityInfo,
            children: (0, h.i)(null == t ? void 0 : t.code)
        });
    if (null != n && n.length > 0) {
        let e = (0, u.Z)(n);
        return (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-secondary',
            className: O.vanityInfo,
            children: v.intl.format(v.t['1qTOvr'], {
                urlText: e,
                urlValue: e
            })
        });
    }
    return null;
}
function y(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: l, originalVanityURLCode: o, hasError: c } = e,
        u = (null == t ? void 0 : t.features.has(j.oNc.VANITY_URL)) === !0,
        m = i.useCallback(() => {
            (0, f.Gy)('');
        }, []),
        g = i.useCallback((e) => {
            (0, f.Gy)(e.replace(/ /g, '-'));
        }, []);
    return null == n
        ? (0, r.jsx)(a.$jN, {})
        : (0, r.jsxs)(a.Zbd, {
              editable: !0,
              className: O.editVanityUrlCard,
              children: [
                  (0, r.jsxs)('div', {
                      className: O.formTitleField,
                      children: [
                          (0, r.jsx)(a.X6q, {
                              variant: 'heading-sm/semibold',
                              color: 'text-default',
                              children: v.intl.string(v.t['6oJyq6'])
                          }),
                          n.length > 0
                              ? (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    children: v.intl.format(v.t.MVWOUV, { uses: l })
                                })
                              : null
                      ]
                  }),
                  (0, r.jsx)(d.Z, {
                      prefix: ''.concat('https://discord.gg', '/'),
                      value: n,
                      onChange: g,
                      maxLength: 25,
                      error: c,
                      disabled: !u
                  }),
                  null != o && o.length > 0
                      ? (0, r.jsx)(s.zx, {
                            className: O.removeVanityUrlButton,
                            onClick: m,
                            look: s.zx.Looks.LINK,
                            size: s.zx.Sizes.MIN,
                            color: s.zx.Colors.RED,
                            children: v.intl.string(v.t['3ggb6O'])
                        })
                      : null
              ]
          });
}
function N(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: s, originalVanityURLCode: a, errorDetails: d } = e,
        { analyticsLocations: u } = (0, c.ZP)(),
        f = (0, m.g1)(t.id, 'GuildSettingsBoostPerks'),
        v = i.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    f
                        ? (p.Z.close(), (0, g.Z)(t.id, o.Z.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.A))
                        : (0, b.E6)({
                              guild: t,
                              analyticsLocations: u,
                              analyticsSection: j.jXE.GUILD_SETTINGS_VANITY_URL,
                              analyticsObject: j.qAy.BUTTON_CTA,
                              perks: (0, _.WW)(),
                              targetPremiumGuildTier: j.Eu4.TIER_3
                          }));
            },
            [u, t, f]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, h.p)(t)
                ? (0, r.jsx)(y, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: s,
                      originalVanityURLCode: a,
                      hasError: null != d
                  })
                : (0, r.jsx)(x.P, {
                      onClick: v,
                      className: O.upsellButton
                  }),
            (0, r.jsx)(C, {
                errorDetails: d,
                originalVanityURLCode: a
            })
        ]
    });
}
