n.d(t, {
    E: () => d,
    Z: () => f,
});
var r,
    l = n(951288),
    i = n(120356),
    s = n.n(i),
    a = n(471445),
    o = n(686546),
    c = n(601964),
    u = n(710231),
    d = (((r = {}).SMALL_32 = "SMALL_32"), r);
let p = { SMALL_32: 24 },
    h = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10],
    },
    f = function (e) {
        let { className: t, iconClassName: n, size: r, channel: i, guild: d, locked: f, hasActiveThreads: g } = e;
        if (null == d) return null;
        let v = (0, c.EB)(d, 48),
            m = h[r],
            b = p[r],
            O = (0, a.KS)(i, d, {
                locked: f,
                hasActiveThreads: g,
            });
        if (null == O) return null;
        let j = null != d ? (0, c.gM)(d) : "";
        return (0, l.jsxs)("div", {
            role: "img",
            className: t,
            children: [
                (0, l.jsx)(o.ZP, {
                    mask: o.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != v
                            ? (0, l.jsx)("img", {
                                  alt: "",
                                  src: v,
                                  className: u.channelGuildIcon,
                                  style: {
                                      width: b,
                                      height: b,
                                  },
                              })
                            : (0, l.jsx)("div", {
                                  className: s()(u.channelGuildIcon, u.acronym),
                                  style: {
                                      fontSize: j.length - 1 > m.length ? m[m.length - 1] : m[j.length - 1],
                                      width: b,
                                      height: b,
                                  },
                                  children: j,
                              }),
                }),
                (0, l.jsx)(O, {
                    className: s()(u.icon, u.iconWithGuildIcon, n),
                    color: "currentColor",
                }),
            ],
        });
    };
