s.d(t, { A: () => m });
var n = s(477900);
s(582128);
var a = s(503698),
    l = s.n(a),
    i = s(782134),
    r = s(939249),
    o = s(692051),
    u = s(953727);
function d(e) {
    let { width: t = 16, height: s = 16, color: a = "currentColor", foreground: l, ...i } = e;
    return (0, n.jsx)("svg", {
        ...(0, u.A)(i),
        width: t,
        height: s,
        viewBox: "0 0 24 24",
        children: (0, n.jsx)("path", {
            className: l,
            fill: a,
            transform: "translate(3.000000, 4.000000)",
            d: "M16 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H2V4h14v10h-4v2h4c1.1 0 2-.9 2-2V2a2 2 0 0 0-2-2zM9 6l-4 4h3v6h2v-6h3L9 6z",
        }),
    });
}
var c = s(375708),
    h = s(621634);
let m = function (e) {
    let {
        onPlay: t,
        externalURL: s,
        className: a,
        renderLinkComponent: u,
        inactive: m,
        messageId: p,
        channelId: f,
    } = e;
    return (0, n.jsx)(o.Y.Consumer, {
        children: (e) =>
            (0, n.jsxs)("div", {
                className: l()(a, h.iE, { [h.y7]: e.disableInteractions }),
                children: [
                    m && null == t
                        ? (0, n.jsx)("div", {
                              className: h.P0,
                              children: (0, n.jsx)(i.PlayIcon, { size: "xs", color: "currentColor", className: h._R }),
                          })
                        : null,
                    null != t
                        ? (0, n.jsx)(r.D, {
                              onClick: t,
                              className: h.Rw,
                              tabIndex: m ? -1 : 0,
                              "aria-label": c.intl.string(c.t.RscU7I),
                              children: (0, n.jsx)(i.PlayIcon, { size: "xs", color: "currentColor", className: h._R }),
                          })
                        : null,
                    null != s
                        ? u({
                              href: s,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              className: h.Rw,
                              children: (0, n.jsx)(d, {
                                  "aria-label": c.intl.string(c.t.wuRE8M),
                                  className: null != t ? h._L : h.Zl,
                              }),
                              messageId: p,
                              channelId: f,
                          })
                        : null,
                ],
            }),
    });
};
