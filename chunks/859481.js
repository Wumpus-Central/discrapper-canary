(n.d(t, { z: () => _ }), n(704826), n(35282));
var r = n(255367),
    i = n(73800),
    l = n(755721),
    s = n(481060),
    a = n(906732),
    o = n(263145),
    c = n(366980),
    d = n(621319),
    u = n(770270),
    m = n(70086),
    g = n(949640),
    p = n(981631),
    f = n(30513),
    h = n(388032),
    x = n(919957);
function b(e) {
    let { errorDetails: t, originalVanityURLCode: n } = e;
    if (null != t)
        return (0, r.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-danger',
            className: x.vanityInfo,
            children: (0, u.i)(null == t ? void 0 : t.code)
        });
    if (null != n && n.length > 0) {
        let e = (0, c.Z)(n);
        return (0, r.jsx)(s.Text, {
            variant: 'text-sm/medium',
            color: 'text-secondary',
            className: x.vanityInfo,
            children: h.intl.format(h.t['1qTOvr'], {
                urlText: e,
                urlValue: e
            })
        });
    }
    return null;
}
function j(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: a, originalVanityURLCode: c, hasError: u } = e,
        m = (null == t ? void 0 : t.features.has(p.oNc.VANITY_URL)) === !0,
        g = i.useCallback(() => {
            (0, d.Gy)('');
        }, []),
        f = i.useCallback((e) => {
            (0, d.Gy)(e.replace(/ /g, '-'));
        }, []);
    return null == n
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsxs)(s.Zbd, {
              editable: !0,
              className: x.editVanityUrlCard,
              children: [
                  (0, r.jsxs)('div', {
                      className: x.formTitleField,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              variant: 'heading-sm/semibold',
                              color: 'text-default',
                              children: h.intl.string(h.t['6oJyq6'])
                          }),
                          n.length > 0
                              ? (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    children: h.intl.format(h.t.MVWOUV, { uses: a })
                                })
                              : null
                      ]
                  }),
                  (0, r.jsx)(o.Z, {
                      prefix: ''.concat('https://discord.gg', '/'),
                      value: n,
                      onChange: f,
                      maxLength: 25,
                      error: u,
                      disabled: !m
                  }),
                  null != c && c.length > 0
                      ? (0, r.jsx)(l.zx, {
                            className: x.removeVanityUrlButton,
                            onClick: g,
                            look: l.zx.Looks.LINK,
                            size: l.zx.Sizes.MIN,
                            color: l.zx.Colors.RED,
                            children: h.intl.string(h.t['3ggb6O'])
                        })
                      : null
              ]
          });
}
function _(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: l, originalVanityURLCode: s, errorDetails: o } = e,
        { analyticsLocations: c } = (0, a.ZP)(),
        d = i.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    (0, g.E6)({
                        guild: t,
                        analyticsLocations: c,
                        analyticsSection: p.jXE.GUILD_SETTINGS_VANITY_URL,
                        analyticsObject: p.qAy.BUTTON_CTA,
                        perks: (0, f.WW)(),
                        targetPremiumGuildTier: p.Eu4.TIER_3
                    }));
            },
            [c, t]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, u.p)(t)
                ? (0, r.jsx)(j, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: l,
                      originalVanityURLCode: s,
                      hasError: null != o
                  })
                : (0, r.jsx)(m.P, {
                      onClick: d,
                      className: x.upsellButton
                  }),
            (0, r.jsx)(b, {
                errorDetails: o,
                originalVanityURLCode: s
            })
        ]
    });
}
