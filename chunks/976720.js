l.d(t, {
    A: () => u,
    Y: () => m,
}),
    l(896048);
var n = l(627968),
    i = l(64700),
    a = l(158954),
    r = l(871123),
    s = l(44724),
    o = l(409626),
    c = l(652215),
    d = l(985018);

function u(e) {
    var t, l;
    let { invite: u, trackClick: m, closeModal: x } = e,
        f = i.useCallback(() => {
            (null == u ? void 0 : u.guild) != null &&
                (0, s.X)({
                    guildId: u.guild.id,
                });
        }, [u]),
        g = i.useCallback(() => {
            (null == u ? void 0 : u.guild) != null &&
                ((0, s.default)({
                    invite: u,
                }),
                x(),
                m(o.Ws.GameShop));
        }, [x, u, m]);
    return new Set(null == u || null == (t = u.guild) ? void 0 : t.features).has(
        c.GuildFeatures.SOCIAL_LAYER_STOREFRONT,
    )
        ? (0, n.jsx)(a.$nd, {
              variant: "primary",
              text:
                  (null == u || null == (l = u.guild) ? void 0 : l.id) === (0, r.zf)()
                      ? d.intl.string(d.t.WTXyEQ)
                      : d.intl.string(d.t.v8UpgE),
              icon: a.U1X,
              onClick: g,
              onMouseDown: f,
              fullWidth: !0,
          })
        : null;
}

function m(e) {
    var t, l;
    let { invite: u, trackClick: m, closeModal: x } = e,
        f = i.useCallback(() => {
            (null == u ? void 0 : u.guild) != null &&
                (0, s.X)({
                    guildId: u.guild.id,
                });
        }, [u]),
        g = i.useCallback(() => {
            (null == u ? void 0 : u.guild) != null &&
                ((0, s.default)({
                    invite: u,
                }),
                x(),
                m(o.Ws.GameShop));
        }, [x, u, m]);
    return new Set(null == u || null == (t = u.guild) ? void 0 : t.features).has(
        c.GuildFeatures.SOCIAL_LAYER_STOREFRONT,
    )
        ? (0, n.jsx)(a.$nd, {
              variant: "primary",
              text:
                  (null == u || null == (l = u.guild) ? void 0 : l.id) === (0, r.zf)()
                      ? d.intl.string(d.t.WTXyEQ)
                      : d.intl.string(d.t.v8UpgE),
              icon: a.U1X,
              onClick: g,
              onMouseDown: f,
              fullWidth: !0,
          })
        : null;
}
