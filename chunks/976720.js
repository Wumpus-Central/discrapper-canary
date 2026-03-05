"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    a = n(158954),
    r = n(44724),
    s = n(409626),
    c = n(652215),
    o = n(985018);
function d(e) {
    let { invite: t, trackClick: n, closeModal: d } = e,
        u = l.useCallback(() => {
            t?.guild != null && (0, r.X)({ guildId: t.guild.id });
        }, [t]),
        m = l.useCallback(() => {
            t?.guild != null && ((0, r.default)({ invite: t }), d(), n(s.Ws.GameShop));
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
