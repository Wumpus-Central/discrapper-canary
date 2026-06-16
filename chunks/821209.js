"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(782134),
    o = n(939249),
    l = n(692051),
    u = n(953727);
function c(e) {
    let { width: t = 16, height: n = 16, color: r = "currentColor", foreground: s, ...a } = e;
    return (0, i.jsx)("svg", {
        ...(0, u.A)(a),
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            className: s,
            fill: r,
            transform: "translate(3.000000, 4.000000)",
            d: "M16 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H2V4h14v10h-4v2h4c1.1 0 2-.9 2-2V2a2 2 0 0 0-2-2zM9 6l-4 4h3v6h2v-6h3L9 6z",
        }),
    });
}
var d = n(375708),
    _ = n(755761);
let h = (e) => {
    let {
        onPlay: t,
        externalURL: n,
        className: r,
        renderLinkComponent: u,
        inactive: h,
        messageId: f,
        channelId: p,
    } = e;
    return (0, i.jsx)(l.Y.Consumer, {
        children: (e) =>
            (0, i.jsxs)("div", {
                className: s()(r, _.iE, { [_.y7]: e.disableInteractions }),
                children: [
                    h && null == t
                        ? (0, i.jsx)("div", {
                              className: _.P0,
                              children: (0, i.jsx)(a.u, { size: "xs", color: "currentColor", className: _._R }),
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(o.D, {
                              onClick: t,
                              className: _.Rw,
                              tabIndex: h ? -1 : 0,
                              "aria-label": d.intl.string(d.t.RscU7I),
                              children: (0, i.jsx)(a.u, { size: "xs", color: "currentColor", className: _._R }),
                          })
                        : null,
                    null != n
                        ? u({
                              href: n,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              className: _.Rw,
                              children: (0, i.jsx)(c, {
                                  "aria-label": d.intl.string(d.t.wuRE8M),
                                  className: null != t ? _._L : _.Zl,
                              }),
                              messageId: f,
                              channelId: p,
                          })
                        : null,
                ],
            }),
    });
};
