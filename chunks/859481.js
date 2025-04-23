n.d(t, { z: () => j }), n(704826), n(35282);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(906732),
    a = n(263145),
    o = n(366980),
    c = n(621319),
    u = n(770270),
    d = n(70086),
    m = n(949640),
    g = n(981631),
    p = n(30513),
    f = n(388032),
    h = n(919957);
function x(e) {
    let { errorDetails: t, originalVanityURLCode: n } = e;
    if (null != t)
        return (0, r.jsx)(l.Text, {
            variant: 'text-md/normal',
            color: 'text-danger',
            className: h.vanityInfo,
            children: (0, u.i)(null == t ? void 0 : t.code)
        });
    if (null != n && n.length > 0) {
        let e = (0, o.Z)(n);
        return (0, r.jsx)(l.Text, {
            variant: 'text-sm/medium',
            color: 'text-secondary',
            className: h.vanityInfo,
            children: f.intl.format(f.t['1qTOvr'], {
                urlText: e,
                urlValue: e
            })
        });
    }
    return null;
}
function b(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: s, originalVanityURLCode: o, hasError: u } = e,
        d = (null == t ? void 0 : t.hasFeature(g.oNc.VANITY_URL)) === !0,
        m = i.useCallback(() => {
            (0, c.Gy)('');
        }, []),
        p = i.useCallback((e) => {
            (0, c.Gy)(e.replace(/ /g, '-'));
        }, []);
    return null == n
        ? (0, r.jsx)(l.$jN, {})
        : (0, r.jsxs)(l.Zbd, {
              editable: !0,
              className: h.editVanityUrlCard,
              children: [
                  (0, r.jsxs)('div', {
                      className: h.formTitleField,
                      children: [
                          (0, r.jsx)(l.X6q, {
                              variant: 'heading-sm/semibold',
                              color: 'text-normal',
                              children: f.intl.string(f.t['6oJyq6'])
                          }),
                          n.length > 0
                              ? (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    children: f.intl.format(f.t.MVWOUV, { uses: s })
                                })
                              : null
                      ]
                  }),
                  (0, r.jsx)(a.Z, {
                      prefix: ''.concat('https://discord.gg', '/'),
                      value: n,
                      onChange: p,
                      maxLength: 25,
                      error: u,
                      disabled: !d
                  }),
                  null != o && o.length > 0
                      ? (0, r.jsx)(l.zxk, {
                            className: h.removeVanityUrlButton,
                            onClick: m,
                            look: l.zxk.Looks.LINK,
                            size: l.zxk.Sizes.MIN,
                            color: l.zxk.Colors.RED,
                            children: f.intl.string(f.t['3ggb6O'])
                        })
                      : null
              ]
          });
}
function j(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: l, originalVanityURLCode: a, errorDetails: o } = e,
        { analyticsLocations: c } = (0, s.ZP)(),
        f = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, m.E6)({
                        guild: t,
                        analyticsLocations: c,
                        analyticsSection: g.jXE.GUILD_SETTINGS_VANITY_URL,
                        analyticsObject: g.qAy.BUTTON_CTA,
                        perks: (0, p.WW)(),
                        targetPremiumGuildTier: g.Eu4.TIER_3
                    });
            },
            [c, t]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, u.p)(t)
                ? (0, r.jsx)(b, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: l,
                      originalVanityURLCode: a,
                      hasError: null != o
                  })
                : (0, r.jsx)(d.P, {
                      onClick: f,
                      className: h.upsellButton
                  }),
            (0, r.jsx)(x, {
                errorDetails: o,
                originalVanityURLCode: a
            })
        ]
    });
}
