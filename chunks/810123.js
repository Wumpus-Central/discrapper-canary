t.d(n, {
    E: () => b,
    Z: () => g,
});
var i,
    o = t(951288),
    _ = t(120356),
    a = t.n(_),
    r = t(471445),
    c = t(686546),
    d = t(601964),
    l = t(710231),
    b = (((i = {}).SMALL_32 = "SMALL_32"), i);
let s = { SMALL_32: 24 },
    u = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10],
    },
    g = function (e) {
        let { className: n, iconClassName: t, size: i, channel: _, guild: b, locked: g, hasActiveThreads: p } = e;
        if (null == b) return null;
        let h = (0, d.EB)(b, 48),
            v = u[i],
            m = s[i],
            w = (0, r.KS)(_, b, {
                locked: g,
                hasActiveThreads: p,
            });
        if (null == w) return null;
        let I = null != b ? (0, d.gM)(b) : "";
        return (0, o.jsxs)("div", {
            role: "img",
            className: n,
            children: [
                (0, o.jsx)(c.ZP, {
                    mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != h
                            ? (0, o.jsx)("img", {
                                  alt: "",
                                  src: h,
                                  className: l.channelGuildIcon,
                                  style: {
                                      width: m,
                                      height: m,
                                  },
                              })
                            : (0, o.jsx)("div", {
                                  className: a()(l.channelGuildIcon, l.acronym),
                                  style: {
                                      fontSize: I.length - 1 > v.length ? v[v.length - 1] : v[I.length - 1],
                                      width: m,
                                      height: m,
                                  },
                                  children: I,
                              }),
                }),
                (0, o.jsx)(w, {
                    className: a()(l.icon, l.iconWithGuildIcon, t),
                    color: "currentColor",
                }),
            ],
        });
    };
