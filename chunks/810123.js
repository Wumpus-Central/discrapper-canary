t.d(n, {
    E: () => s,
    Z: () => g,
});
var i,
    o = t(951288),
    a = t(120356),
    r = t.n(a),
    l = t(471445),
    _ = t(686546),
    c = t(601964),
    d = t(710231),
    s = (((i = {}).SMALL_32 = "SMALL_32"), i);
let b = { SMALL_32: 24 },
    u = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10],
    },
    g = function (e) {
        let { className: n, iconClassName: t, size: i, channel: a, guild: s, locked: g, hasActiveThreads: h } = e;
        if (null == s) return null;
        let x = (0, c.EB)(s, 48),
            m = u[i],
            v = b[i],
            p = (0, l.KS)(a, s, {
                locked: g,
                hasActiveThreads: h,
            });
        if (null == p) return null;
        let I = null != s ? (0, c.gM)(s) : "";
        return (0, o.jsxs)("div", {
            role: "img",
            className: n,
            children: [
                (0, o.jsx)(_.ZP, {
                    mask: _.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != x
                            ? (0, o.jsx)("img", {
                                  alt: "",
                                  src: x,
                                  className: d.channelGuildIcon,
                                  style: {
                                      width: v,
                                      height: v,
                                  },
                              })
                            : (0, o.jsx)("div", {
                                  className: r()(d.channelGuildIcon, d.acronym),
                                  style: {
                                      fontSize: I.length - 1 > m.length ? m[m.length - 1] : m[I.length - 1],
                                      width: v,
                                      height: v,
                                  },
                                  children: I,
                              }),
                }),
                (0, o.jsx)(p, {
                    className: r()(d.icon, d.iconWithGuildIcon, t),
                    color: "currentColor",
                }),
            ],
        });
    };
