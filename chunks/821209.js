s.d(t, { A: () => p });
var a = s(477900);
s(582128);
var i = s(503698),
    n = s.n(i),
    l = s(782134),
    r = s(939249),
    o = s(692051),
    u = s(953727);
function h(e) {
    let { width: t = 16, height: s = 16, color: i = "currentColor", foreground: n, ...l } = e;
    return (0, a.jsx)("svg", {
        ...(0, u.A)(l),
        width: t,
        height: s,
        viewBox: "0 0 24 24",
        children: (0, a.jsx)("path", {
            className: n,
            fill: i,
            transform: "translate(3.000000, 4.000000)",
            d: "M16 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H2V4h14v10h-4v2h4c1.1 0 2-.9 2-2V2a2 2 0 0 0-2-2zM9 6l-4 4h3v6h2v-6h3L9 6z",
        }),
    });
}
var d = s(105292),
    c = s(621634);
let p = function (e) {
    let {
        onPlay: t,
        externalURL: s,
        className: i,
        renderLinkComponent: u,
        inactive: p,
        messageId: m,
        channelId: g,
    } = e;
    return (0, a.jsx)(o.Y.Consumer, {
        children: (e) =>
            (0, a.jsxs)("div", {
                className: n()(i, c.iE, { [c.y7]: e.disableInteractions }),
                children: [
                    p && null == t
                        ? (0, a.jsx)("div", {
                              className: c.P0,
                              children: (0, a.jsx)(l.PlayIcon, { size: "xs", color: "currentColor", className: c._R }),
                          })
                        : null,
                    null != t
                        ? (0, a.jsx)(r.D, {
                              onClick: t,
                              className: c.Rw,
                              tabIndex: p ? -1 : 0,
                              "aria-label": d.intl.string(d.t.RscU7I),
                              children: (0, a.jsx)(l.PlayIcon, { size: "xs", color: "currentColor", className: c._R }),
                          })
                        : null,
                    null != s
                        ? u({
                              href: s,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              className: c.Rw,
                              children: (0, a.jsx)(h, {
                                  "aria-label": d.intl.string(d.t.wuRE8M),
                                  className: null != t ? c._L : c.Zl,
                              }),
                              messageId: m,
                              channelId: g,
                          })
                        : null,
                ],
            }),
    });
};
