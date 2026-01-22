n.d(t, { C: () => E });
var r = n(627968),
    i = n(64700),
    l = n(512750),
    s = n(397927),
    a = n(793574),
    c = n(688810),
    o = n(279208),
    d = n(840120),
    u = n(828162),
    f = n(997509),
    g = n(310527),
    b = n(446291),
    m = n(342490),
    p = n(695800),
    x = n(533148),
    h = n(652215),
    j = n(874864),
    O = n(985018),
    y = n(802498);
function v(e) {
    let { originalVanityURLCode: t } = e;
    if (null != t && t.length > 0) {
        let e = (0, o.A)(t);
        return (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            className: y.YQ,
            children: O.intl.format(O.t["1qTOvn"], {
                urlText: e,
                urlValue: e,
            }),
        });
    }
    return null;
}
function A(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: l, originalVanityURLCode: a, errorDetails: c } = e,
        o = (null == t ? void 0 : t.features.has(h.GuildFeatures.VANITY_URL)) === !0,
        d = i.useCallback(() => {
            (0, g.OH)("");
        }, []),
        u = i.useCallback((e) => {
            (0, g.OH)(e);
        }, []);
    if (null == n) return (0, r.jsx)(s.y$y, {});
    let f = null != c ? (0, b.z)(c.code) : null;
    return (0, r.jsxs)(s.ZpM, {
        editable: !0,
        className: y.pU,
        children: [
            (0, r.jsxs)("div", {
                className: y.p2,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: O.intl.string(O.t["6oJyq5"]),
                    }),
                    n.length > 0
                        ? (0, r.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: O.intl.format(O.t.MVWOUY, { uses: l }),
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(x.A, {
                value: n,
                onChange: u,
                error: f,
                disabled: !o,
            }),
            null != a && a.length > 0
                ? (0, r.jsx)("div", {
                      className: y.J9,
                      children: (0, r.jsx)(s.Button, {
                          variant: "critical-secondary",
                          onClick: d,
                          text: O.intl.string(O.t["3ggb6K"]),
                      }),
                  })
                : null,
        ],
    });
}
function E(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: s, originalVanityURLCode: o, errorDetails: g } = e,
        { analyticsLocations: x } = (0, c.Ay)(),
        O = (0, d.M5)(t.id, "GuildSettingsBoostPerks"),
        E = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    O
                        ? (f.A.close(), (0, u.A)(t.id, a.A.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.FB))
                        : (0, p.p_)({
                              guild: t,
                              analyticsLocations: x,
                              analyticsSection: h.JJy.GUILD_SETTINGS_VANITY_URL,
                              analyticsObject: h.ZSU.BUTTON_CTA,
                              perks: (0, j.DU)(),
                              targetPremiumGuildTier: h.TVA.TIER_3,
                          });
            },
            [x, t, O],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, b.d)(t)
                ? (0, r.jsx)(A, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: s,
                      originalVanityURLCode: o,
                      errorDetails: g,
                  })
                : (0, r.jsx)("div", {
                      className: y.Oy,
                      children: (0, r.jsx)(m.u, { onClick: E }),
                  }),
            (0, r.jsx)(v, { originalVanityURLCode: o }),
        ],
    });
}
