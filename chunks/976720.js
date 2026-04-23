n.d(t, { A: () => u });
var l = n(627968),
    a = n(64700),
    i = n(821609),
    r = n(34188),
    s = n(44724),
    o = n(409626),
    c = n(652215),
    d = n(985018);
function u(e) {
    let { invite: t, trackAction: n, closeModal: u } = e,
        m = a.useCallback(() => {
            t?.guild != null && (0, s.X)({ guildId: t.guild.id });
        }, [t]),
        h = a.useCallback(() => {
            t?.guild != null && (n(o.Ws.GameShop), (0, s.default)({ invite: t }), u());
        }, [u, t, n]);
    return new Set(t?.guild?.features).has(c.GuildFeatures.SOCIAL_LAYER_STOREFRONT)
        ? (0, l.jsx)(i.$, {
              variant: "primary",
              text: d.intl.string(d.t.v8UpgE),
              icon: r.U,
              onClick: h,
              onMouseDown: m,
              fullWidth: !0,
          })
        : null;
}
