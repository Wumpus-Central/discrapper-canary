n.d(t, { A: () => d, Y: () => u });
var i = n(627968),
    l = n(64700),
    a = n(158954),
    s = n(44724),
    r = n(409626),
    c = n(652215),
    o = n(985018);
function d(e) {
    let { invite: t, trackClick: n, closeModal: d } = e,
        u = l.useCallback(() => {
            t?.guild != null && (0, s.X)({ guildId: t.guild.id });
        }, [t]),
        m = l.useCallback(() => {
            t?.guild != null && ((0, s.default)({ invite: t }), d(), n(r.Ws.GameShop));
        }, [d, t, n]);
    return new Set(t?.guild?.features).has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
        ? (0, i.jsx)(a.$nd, {
              variant: "primary",
              text: o.intl.string(o.t.v8UpgE),
              icon: a.U1X,
              onClick: m,
              onMouseDown: u,
              fullWidth: !0,
          })
        : null;
}
function u(e) {
    let { invite: t, trackClick: n, closeModal: d } = e,
        u = l.useCallback(() => {
            t?.guild != null && (0, s.X)({ guildId: t.guild.id });
        }, [t]),
        m = l.useCallback(() => {
            t?.guild != null && ((0, s.default)({ invite: t }), d(), n(r.Ws.GameShop));
        }, [d, t, n]);
    return new Set(t?.guild?.features).has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
        ? (0, i.jsx)(a.$nd, {
              variant: "primary",
              text: o.intl.string(o.t.v8UpgE),
              icon: a.U1X,
              onClick: m,
              onMouseDown: u,
              fullWidth: !0,
          })
        : null;
}
