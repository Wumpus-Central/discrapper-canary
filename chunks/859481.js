n.d(t, { z: () => N });
var r = n(255367),
    i = n(73800),
    l = n(494497),
    s = n(755721),
    a = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(366980),
    u = n(158638),
    m = n(441536),
    g = n(434404),
    p = n(621319),
    f = n(770270),
    h = n(70086),
    x = n(949640),
    b = n(927160),
    j = n(981631),
    v = n(30513),
    _ = n(388032),
    O = n(919957);
function y(e) {
    let { errorDetails: t, originalVanityURLCode: n } = e;
    if (null != t)
        return (0, r.jsx)(a.Text, {
            variant: 'text-md/normal',
            color: 'text-danger',
            className: O.vanityInfo,
            children: (0, f.i)(null == t ? void 0 : t.code)
        });
    if (null != n && n.length > 0) {
        let e = (0, d.Z)(n);
        return (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-secondary',
            className: O.vanityInfo,
            children: _.intl.format(_.t['1qTOvr'], {
                urlText: e,
                urlValue: e
            })
        });
    }
    return null;
}
function C(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: l, originalVanityURLCode: o, hasError: c } = e,
        d = (null == t ? void 0 : t.features.has(j.oNc.VANITY_URL)) === !0,
        u = i.useCallback(() => {
            (0, p.Gy)('');
        }, []),
        m = i.useCallback((e) => {
            (0, p.Gy)(e);
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
                              children: _.intl.string(_.t['6oJyq6'])
                          }),
                          n.length > 0
                              ? (0, r.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    children: _.intl.format(_.t.MVWOUV, { uses: l })
                                })
                              : null
                      ]
                  }),
                  (0, r.jsx)(b.Z, {
                      value: n,
                      onChange: m,
                      error: c,
                      disabled: !d
                  }),
                  null != o && o.length > 0
                      ? (0, r.jsx)(s.zx, {
                            className: O.removeVanityUrlButton,
                            onClick: u,
                            look: s.zx.Looks.LINK,
                            size: s.zx.Sizes.MIN,
                            color: s.zx.Colors.RED,
                            children: _.intl.string(_.t['3ggb6O'])
                        })
                      : null
              ]
          });
}
function N(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: s, originalVanityURLCode: a, errorDetails: d } = e,
        { analyticsLocations: p } = (0, c.ZP)(),
        b = (0, u.g1)(t.id, 'GuildSettingsBoostPerks'),
        _ = i.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    b
                        ? (g.Z.close(), (0, m.Z)(t.id, o.Z.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.A$))
                        : (0, x.E6)({
                              guild: t,
                              analyticsLocations: p,
                              analyticsSection: j.jXE.GUILD_SETTINGS_VANITY_URL,
                              analyticsObject: j.qAy.BUTTON_CTA,
                              perks: (0, v.WW)(),
                              targetPremiumGuildTier: j.Eu4.TIER_3
                          }));
            },
            [p, t, b]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, f.p)(t)
                ? (0, r.jsx)(C, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: s,
                      originalVanityURLCode: a,
                      hasError: null != d
                  })
                : (0, r.jsx)(h.P, {
                      onClick: _,
                      className: O.upsellButton
                  }),
            (0, r.jsx)(y, {
                errorDetails: d,
                originalVanityURLCode: a
            })
        ]
    });
}
