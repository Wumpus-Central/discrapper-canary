"use strict";
n.d(t, { C: () => T });
var i = n(627968),
    s = n(64700),
    l = n(512750),
    r = n(397927),
    a = n(793574),
    o = n(688810),
    d = n(279208),
    c = n(840120),
    u = n(828162),
    m = n(997509),
    g = n(310527),
    x = n(446291),
    h = n(342490),
    _ = n(695800),
    A = n(533148),
    p = n(652215),
    f = n(874864),
    j = n(985018),
    N = n(802498);
function E(e) {
    let { originalVanityURLCode: t } = e;
    if (null != t && t.length > 0) {
        let e = (0, d.A)(t);
        return (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            className: N.YQ,
            children: j.intl.format(j.t["1qTOvn"], { urlText: e, urlValue: e }),
        });
    }
    return null;
}
function b(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: l, originalVanityURLCode: a, errorDetails: o } = e,
        d = t?.features.has(p.GuildFeatures.VANITY_URL) === !0,
        c = s.useCallback(() => {
            (0, g.OH)("");
        }, []),
        u = s.useCallback((e) => {
            (0, g.OH)(e);
        }, []);
    if (null == n) return (0, i.jsx)(r.y$y, {});
    let m = null != o ? (0, x.z)(o.code) : null;
    return (0, i.jsxs)(r.ZpM, {
        editable: !0,
        className: N.pU,
        children: [
            (0, i.jsxs)("div", {
                className: N.p2,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: j.intl.string(j.t["6oJyq5"]),
                    }),
                    n.length > 0
                        ? (0, i.jsx)(r.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.MVWOUY, { uses: l }),
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(A.A, { value: n, onChange: u, error: m, disabled: !d }),
            null != a && a.length > 0
                ? (0, i.jsx)("div", {
                      className: N.J9,
                      children: (0, i.jsx)(r.Button, {
                          variant: "critical-secondary",
                          onClick: c,
                          text: j.intl.string(j.t["3ggb6K"]),
                      }),
                  })
                : null,
        ],
    });
}
function T(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: r, originalVanityURLCode: d, errorDetails: g } = e,
        { analyticsLocations: A } = (0, o.Ay)(),
        j = (0, c.M5)(t.id, "GuildSettingsBoostPerks"),
        T = s.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    j
                        ? (m.A.close(), (0, u.A)(t.id, a.A.GUILD_POWERUPS_GUILD_SETTINGS_VANITY_URL, l.FB))
                        : (0, _.p_)({
                              guild: t,
                              analyticsLocations: A,
                              analyticsSection: p.JJy.GUILD_SETTINGS_VANITY_URL,
                              analyticsObject: p.ZSU.BUTTON_CTA,
                              perks: (0, f.DU)(),
                              targetPremiumGuildTier: p.TVA.TIER_3,
                          });
            },
            [A, t, j],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, x.d)(t)
                ? (0, i.jsx)(b, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: r,
                      originalVanityURLCode: d,
                      errorDetails: g,
                  })
                : (0, i.jsx)("div", { className: N.Oy, children: (0, i.jsx)(h.u, { onClick: T }) }),
            (0, i.jsx)(E, { originalVanityURLCode: d }),
        ],
    });
}
