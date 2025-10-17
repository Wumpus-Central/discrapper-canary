t.d(n, {
    E: () => d,
    Z: () => m,
});
var l,
    r = t(951288),
    i = t(120356),
    c = t.n(i),
    o = t(471445),
    a = t(686546),
    s = t(601964),
    u = t(710231),
    d = (((l = {}).SMALL_32 = "SMALL_32"), l);
let f = { SMALL_32: 24 },
    h = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10],
    },
    m = function (e) {
        let { className: n, iconClassName: t, size: l, channel: i, guild: d, locked: m, hasActiveThreads: p } = e;
        if (null == d) return null;
        let j = (0, s.EB)(d, 48),
            b = h[l],
            g = f[l],
            y = (0, o.KS)(i, d, {
                locked: m,
                hasActiveThreads: p,
            });
        if (null == y) return null;
        let O = null != d ? (0, s.gM)(d) : "";
        return (0, r.jsxs)("div", {
            role: "img",
            className: n,
            children: [
                (0, r.jsx)(a.ZP, {
                    mask: a.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != j
                            ? (0, r.jsx)("img", {
                                  alt: "",
                                  src: j,
                                  className: u.channelGuildIcon,
                                  style: {
                                      width: g,
                                      height: g,
                                  },
                              })
                            : (0, r.jsx)("div", {
                                  className: c()(u.channelGuildIcon, u.acronym),
                                  style: {
                                      fontSize: O.length - 1 > b.length ? b[b.length - 1] : b[O.length - 1],
                                      width: g,
                                      height: g,
                                  },
                                  children: O,
                              }),
                }),
                (0, r.jsx)(y, {
                    className: c()(u.icon, u.iconWithGuildIcon, t),
                    color: "currentColor",
                }),
            ],
        });
    };
