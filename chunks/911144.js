"use strict";
n.d(t, { C: () => f });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(688810),
    a = n(279208),
    o = n(310527),
    d = n(446291),
    c = n(342490),
    u = n(695800),
    m = n(533148),
    g = n(652215),
    x = n(874864),
    h = n(985018),
    _ = n(802498);
function p(e) {
    let { originalVanityURLCode: t } = e;
    if (null != t && t.length > 0) {
        let e = (0, a.A)(t);
        return (0, i.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            className: _.YQ,
            children: h.intl.format(h.t["1qTOvn"], { urlText: e, urlValue: e }),
        });
    }
    return null;
}
function A(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: r, originalVanityURLCode: a, errorDetails: c } = e,
        u = t?.features.has(g.GuildFeatures.VANITY_URL) === !0,
        x = s.useCallback(() => {
            (0, o.OH)("");
        }, []),
        p = s.useCallback((e) => {
            (0, o.OH)(e);
        }, []);
    if (null == n) return (0, i.jsx)(l.y$y, {});
    let A = null != c ? (0, d.z)(c.code) : null;
    return (0, i.jsxs)(l.ZpM, {
        editable: !0,
        className: _.pU,
        children: [
            (0, i.jsxs)("div", {
                className: _.p2,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: h.intl.string(h.t["6oJyq5"]),
                    }),
                    n.length > 0
                        ? (0, i.jsx)(l.Text, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: h.intl.format(h.t.MVWOUY, { uses: r }),
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(m.A, { value: n, onChange: p, error: A, disabled: !u }),
            null != a && a.length > 0
                ? (0, i.jsx)("div", {
                      className: _.J9,
                      children: (0, i.jsx)(l.Button, {
                          variant: "critical-secondary",
                          onClick: x,
                          text: h.intl.string(h.t["3ggb6K"]),
                      }),
                  })
                : null,
        ],
    });
}
function f(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: l, originalVanityURLCode: a, errorDetails: o } = e,
        { analyticsLocations: m } = (0, r.Ay)(),
        h = s.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.p_)({
                        guild: t,
                        analyticsLocations: m,
                        analyticsSection: g.JJy.GUILD_SETTINGS_VANITY_URL,
                        analyticsObject: g.ZSU.BUTTON_CTA,
                        perks: (0, x.DU)(),
                        targetPremiumGuildTier: g.TVA.TIER_3,
                    });
            },
            [m, t],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, d.d)(t)
                ? (0, i.jsx)(A, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: l,
                      originalVanityURLCode: a,
                      errorDetails: o,
                  })
                : (0, i.jsx)("div", { className: _.Oy, children: (0, i.jsx)(c.u, { onClick: h }) }),
            (0, i.jsx)(p, { originalVanityURLCode: a }),
        ],
    });
}
