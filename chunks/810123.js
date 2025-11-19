n.d(t, {
    E: () => d,
    Z: () => m,
});
var l,
    r = n(54381),
    i = n(120356),
    s = n.n(i),
    u = n(471445),
    a = n(686546),
    c = n(601964),
    o = n(102396),
    d = (((l = {}).SMALL_32 = "SMALL_32"), l);
let f = { SMALL_32: 24 },
    h = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10],
    },
    m = function (e) {
        let { className: t, iconClassName: n, size: l, channel: i, guild: d, locked: m, hasActiveThreads: b } = e;
        if (null == d) return null;
        let g = (0, c.EB)(d, 48),
            p = h[l],
            y = f[l],
            E = (0, u.KS)(i, d, {
                locked: m,
                hasActiveThreads: b,
            });
        if (null == E) return null;
        let S = null != d ? (0, c.gM)(d) : "";
        return (0, r.jsxs)("div", {
            role: "img",
            className: t,
            children: [
                (0, r.jsx)(a.ZP, {
                    mask: a.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != g
                            ? (0, r.jsx)("img", {
                                  alt: "",
                                  src: g,
                                  className: o.channelGuildIcon,
                                  style: {
                                      width: y,
                                      height: y,
                                  },
                              })
                            : (0, r.jsx)("div", {
                                  className: s()(o.channelGuildIcon, o.acronym),
                                  style: {
                                      fontSize: S.length - 1 > p.length ? p[p.length - 1] : p[S.length - 1],
                                      width: y,
                                      height: y,
                                  },
                                  children: S,
                              }),
                }),
                (0, r.jsx)(E, {
                    className: s()(o.icon, o.iconWithGuildIcon, n),
                    color: "currentColor",
                }),
            ],
        });
    };
