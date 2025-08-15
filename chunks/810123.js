t.d(e, {
    E: () => c,
    Z: () => u,
});
var n,
    r = t(255367),
    l = t(120356),
    i = t.n(l),
    a = t(471445),
    s = t(686546),
    o = t(601964),
    g = t(710231),
    c = (((n = {}).SMALL_32 = "SMALL_32"), n);
let f = { SMALL_32: 24 },
    v = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10],
    },
    u = function (A) {
        let { className: e, iconClassName: t, size: n, channel: l, guild: c, locked: u, hasActiveThreads: h } = A;
        if (null == c) return null;
        let d = (0, o.EB)(c, 48),
            E = v[n],
            C = f[n],
            B = (0, a.KS)(l, c, {
                locked: u,
                hasActiveThreads: h,
            });
        if (null == B) return null;
        let w = null != c ? (0, o.gM)(c) : "";
        return (0, r.jsxs)("div", {
            role: "img",
            className: e,
            children: [
                (0, r.jsx)(s.ZP, {
                    mask: s.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                    children:
                        null != d
                            ? (0, r.jsx)("img", {
                                  alt: "",
                                  src: d,
                                  className: g.channelGuildIcon,
                                  style: {
                                      width: C,
                                      height: C,
                                  },
                              })
                            : (0, r.jsx)("div", {
                                  className: i()(g.channelGuildIcon, g.acronym),
                                  style: {
                                      fontSize: w.length - 1 > E.length ? E[E.length - 1] : E[w.length - 1],
                                      width: C,
                                      height: C,
                                  },
                                  children: w,
                              }),
                }),
                (0, r.jsx)(B, {
                    className: i()(g.icon, g.iconWithGuildIcon, t),
                    color: "currentColor",
                }),
            ],
        });
    };
