n.d(t, {
    E: () => d,
    Z: () => m,
});
var l,
    r = n(951288),
    a = n(120356),
    s = n.n(a),
    i = n(471445),
    o = n(686546),
    u = n(601964),
    c = n(710231),
    d = (((l = {}).SMALL_32 = "SMALL_32"), l);
let h = { SMALL_32: 24 },
    f = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10],
    },
    m = function (e) {
        let { className: t, iconClassName: n, size: l, channel: a, guild: d, locked: m, hasActiveThreads: g } = e;
        if (null == d) return null;
        let p = (0, u.EB)(d, 48),
            b = f[l],
            _ = h[l],
            v = (0, i.KS)(a, d, {
                locked: m,
                hasActiveThreads: g,
            });
        if (null == v) return null;
        let x = null != d ? (0, u.gM)(d) : "";
        return (0, r.jsxs)("div", {
            role: "img",
            className: t,
            children: [
                (0, r.jsx)(o.ZP, {
                    mask: o.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != p
                            ? (0, r.jsx)("img", {
                                  alt: "",
                                  src: p,
                                  className: c.channelGuildIcon,
                                  style: {
                                      width: _,
                                      height: _,
                                  },
                              })
                            : (0, r.jsx)("div", {
                                  className: s()(c.channelGuildIcon, c.acronym),
                                  style: {
                                      fontSize: x.length - 1 > b.length ? b[b.length - 1] : b[x.length - 1],
                                      width: _,
                                      height: _,
                                  },
                                  children: x,
                              }),
                }),
                (0, r.jsx)(v, {
                    className: s()(c.icon, c.iconWithGuildIcon, n),
                    color: "currentColor",
                }),
            ],
        });
    };
