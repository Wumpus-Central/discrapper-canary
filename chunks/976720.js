n.d(t, {
    A: () => u,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(158954),
    a = n(871123),
    s = n(44724),
    o = n(409626),
    c = n(652215),
    d = n(985018);

function u(e) {
    var t, n;
    let { invite: u, trackClick: m, closeModal: f } = e,
        x = r.useCallback(() => {
            (null == u ? void 0 : u.guild) != null &&
                (0, s.X)({
                    guildId: u.guild.id,
                });
        }, [u]),
        b = r.useCallback(() => {
            (null == u ? void 0 : u.guild) != null &&
                ((0, s.default)({
                    invite: u,
                }),
                f(),
                m(o.Ws.GameShop));
        }, [f, u, m]);
    return new Set(null == u || null == (t = u.guild) ? void 0 : t.features).has(
        c.GuildFeatures.SOCIAL_LAYER_STOREFRONT,
    )
        ? (0, l.jsx)(i.$nd, {
              variant: "primary",
              text:
                  (null == u || null == (n = u.guild) ? void 0 : n.id) === (0, a.zf)()
                      ? d.intl.string(d.t.WTXyEQ)
                      : d.intl.string(d.t.v8UpgE),
              icon: i.U1X,
              onClick: b,
              onMouseDown: x,
              fullWidth: !0,
          })
        : null;
}
