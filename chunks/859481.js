n.d(t, { z: () => j }), n(757143), n(301563);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(906732),
    l = n(263145),
    o = n(366980),
    c = n(621319),
    d = n(770270),
    u = n(70086),
    m = n(949640),
    g = n(981631),
    p = n(30513),
    h = n(388032),
    f = n(919957);
function b(e) {
    let { errorDetails: t, originalVanityURLCode: n } = e;
    if (null != t)
        return (0, r.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'text-danger',
            className: f.vanityInfo,
            children: (0, d.i)(null == t ? void 0 : t.code)
        });
    if (null != n && n.length > 0) {
        let e = (0, o.Z)(n);
        return (0, r.jsx)(s.Text, {
            variant: 'text-sm/medium',
            color: 'text-secondary',
            className: f.vanityInfo,
            children: h.NW.format(h.t['1qTOvr'], {
                urlText: e,
                urlValue: e
            })
        });
    }
    return null;
}
function x(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: a, originalVanityURLCode: o, hasError: d } = e,
        u = (null == t ? void 0 : t.hasFeature(g.oNc.VANITY_URL)) === !0,
        m = i.useCallback(() => {
            (0, c.Gy)('');
        }, []),
        p = i.useCallback((e) => {
            (0, c.Gy)(e.replace(/ /g, '-'));
        }, []);
    return null == n
        ? (0, r.jsx)(s.$jN, {})
        : (0, r.jsxs)(s.Zbd, {
              editable: !0,
              className: f.editVanityUrlCard,
              children: [
                  (0, r.jsxs)('div', {
                      className: f.formTitleField,
                      children: [
                          (0, r.jsx)(s.X6q, {
                              variant: 'heading-sm/semibold',
                              color: 'text-normal',
                              children: h.NW.string(h.t['6oJyq6'])
                          }),
                          n.length > 0
                              ? (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    children: h.NW.format(h.t.MVWOUV, { uses: a })
                                })
                              : null
                      ]
                  }),
                  (0, r.jsx)(l.Z, {
                      prefix: ''.concat('https://discord.gg', '/'),
                      value: n,
                      onChange: p,
                      maxLength: 25,
                      error: d,
                      disabled: !u
                  }),
                  null != o && o.length > 0
                      ? (0, r.jsx)(s.zxk, {
                            className: f.removeVanityUrlButton,
                            onClick: m,
                            look: s.zxk.Looks.LINK,
                            size: s.zxk.Sizes.MIN,
                            color: s.zxk.Colors.RED,
                            children: h.NW.string(h.t['3ggb6O'])
                        })
                      : null
              ]
          });
}
function j(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: s, originalVanityURLCode: l, errorDetails: o } = e,
        { analyticsLocations: c } = (0, a.ZP)(),
        h = i.useCallback(
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
            (0, d.p)(t)
                ? (0, r.jsx)(x, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: s,
                      originalVanityURLCode: l,
                      hasError: null != o
                  })
                : (0, r.jsx)(u.P, {
                      onClick: h,
                      className: f.upsellButton
                  }),
            (0, r.jsx)(b, {
                errorDetails: o,
                originalVanityURLCode: l
            })
        ]
    });
}
