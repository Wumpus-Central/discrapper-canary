"use strict";
n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(782134),
    r = n(939249),
    o = n(692051),
    c = n(953727);
function u(e) {
    let { width: t = 16, height: n = 16, color: i = "currentColor", foreground: s, ...a } = e;
    return (0, l.jsx)("svg", {
        ...(0, c.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: (0, l.jsx)("path", {
            className: s,
            fill: i,
            transform: "translate(3.000000, 4.000000)",
            d: "M16 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H2V4h14v10h-4v2h4c1.1 0 2-.9 2-2V2a2 2 0 0 0-2-2zM9 6l-4 4h3v6h2v-6h3L9 6z",
        }),
    });
}
var d = n(985018),
    h = n(755761);
let m = (e) => {
    let {
        onPlay: t,
        externalURL: n,
        className: i,
        renderLinkComponent: c,
        inactive: m,
        messageId: p,
        channelId: f,
    } = e;
    return (0, l.jsx)(o.Y.Consumer, {
        children: (e) =>
            (0, l.jsxs)("div", {
                className: s()(i, h.iE, { [h.y7]: e.disableInteractions }),
                children: [
                    m && null == t
                        ? (0, l.jsx)("div", {
                              className: h.P0,
                              children: (0, l.jsx)(a.u, { size: "xs", color: "currentColor", className: h._R }),
                          })
                        : null,
                    null != t
                        ? (0, l.jsx)(r.D, {
                              onClick: t,
                              className: h.Rw,
                              tabIndex: m ? -1 : 0,
                              "aria-label": d.intl.string(d.t.RscU7I),
                              children: (0, l.jsx)(a.u, { size: "xs", color: "currentColor", className: h._R }),
                          })
                        : null,
                    null != n
                        ? c({
                              href: n,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              className: h.Rw,
                              children: (0, l.jsx)(u, {
                                  "aria-label": d.intl.string(d.t.wuRE8M),
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
