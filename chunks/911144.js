n.d(t, { C: () => I });
var i = n(627968),
    l = n(64700),
    s = n(834730),
    r = n(289873),
    a = n(359778),
    o = n(534514),
    d = n(821609),
    c = n(688810),
    u = n(279208),
    m = n(310527),
    g = n(446291),
    h = n(342490),
    x = n(695800),
    _ = n(533148),
    p = n(652215),
    A = n(874864),
    E = n(985018),
    f = n(779345);
function j(e) {
    let { originalVanityURLCode: t } = e;
    if (null != t && t.length > 0) {
        let e = (0, u.A)(t);
        return (0, i.jsx)(s.E, {
            variant: "text-sm/medium",
            color: "text-subtle",
            className: f.YQ,
            children: E.intl.format(E.t["1qTOvn"], { urlText: e, urlValue: e }),
        });
    }
    return null;
}
function N(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: c, originalVanityURLCode: u, errorDetails: h } = e,
        x = t?.features.has(p.GuildFeatures.VANITY_URL) === !0,
        A = l.useCallback(() => {
            (0, m.OH)("");
        }, []),
        j = l.useCallback((e) => {
            (0, m.OH)(e);
        }, []);
    if (null == n) return (0, i.jsx)(r.y, {});
    let N = null != h ? (0, g.z)(h.code) : null;
    return (0, i.jsxs)(a.Z, {
        editable: !0,
        className: f.pU,
        children: [
            (0, i.jsxs)("div", {
                className: f.p2,
                children: [
                    (0, i.jsx)(o.D, {
                        variant: "heading-sm/semibold",
                        color: "text-default",
                        children: E.intl.string(E.t["6oJyq5"]),
                    }),
                    n.length > 0
                        ? (0, i.jsx)(s.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: E.intl.format(E.t.MVWOUY, { uses: c }),
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(_.A, { value: n, onChange: j, error: N, disabled: !x }),
            null != u && u.length > 0
                ? (0, i.jsx)("div", {
                      className: f.J9,
                      children: (0, i.jsx)(d.$, {
                          variant: "critical-secondary",
                          onClick: A,
                          text: E.intl.string(E.t["3ggb6K"]),
                      }),
                  })
                : null,
        ],
    });
}
function I(e) {
    let { guild: t, vanityURLCode: n, vanityURLUses: s, originalVanityURLCode: r, errorDetails: a } = e,
        { analyticsLocations: o } = (0, c.Ay)(),
        d = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, x.p_)({
                        guild: t,
                        analyticsLocations: o,
                        analyticsSection: p.JJy.GUILD_SETTINGS_VANITY_URL,
                        analyticsObject: p.ZSU.BUTTON_CTA,
                        perks: (0, A.DU)(),
                        targetPremiumGuildTier: p.TVA.TIER_3,
                    });
            },
            [o, t],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, g.d)(t)
                ? (0, i.jsx)(N, {
                      guild: t,
                      vanityURLCode: n,
                      vanityURLUses: s,
                      originalVanityURLCode: r,
                      errorDetails: a,
                  })
                : (0, i.jsx)("div", { className: f.Oy, children: (0, i.jsx)(h.u, { onClick: d }) }),
            (0, i.jsx)(j, { originalVanityURLCode: r }),
        ],
    });
}
