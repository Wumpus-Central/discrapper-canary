n.d(t, { A: () => u });
var a = n(627968),
    l = n(64700),
    i = n(821609),
    r = n(34188),
    s = n(44724),
    o = n(409626),
    d = n(652215),
    c = n(985018);
function u(e) {
    let { invite: t, trackAction: n, closeModal: u } = e,
        m = l.useCallback(() => {
            t?.guild != null && (0, s.X)({ guildId: t.guild.id });
        }, [t]),
        _ = l.useCallback(() => {
            t?.guild != null && (n(o.Ws.GameShop), (0, s.default)({ invite: t }), u());
        }, [u, t, n]);
    return new Set(t?.guild?.features).has(d.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
        ? (0, a.jsx)(i.$, {
              variant: "primary",
              text: c.intl.string(c.t.v8UpgE),
              icon: r.U,
              onClick: _,
              onMouseDown: m,
              fullWidth: !0,
          })
        : null;
}
