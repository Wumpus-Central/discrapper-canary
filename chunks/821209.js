"use strict";
n.d(t, { A: () => E });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(782134),
    l = n(939249),
    o = n(692051),
    d = n(953727);
function c(e) {
    let { width: t = 16, height: n = 16, color: r = "currentColor", foreground: a, ...s } = e;
    return (0, i.jsx)("svg", {
        ...(0, d.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 24 24",
        children: (0, i.jsx)("path", {
            className: a,
            fill: r,
            transform: "translate(3.000000, 4.000000)",
            d: "M16 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H2V4h14v10h-4v2h4c1.1 0 2-.9 2-2V2a2 2 0 0 0-2-2zM9 6l-4 4h3v6h2v-6h3L9 6z",
        }),
    });
}
var u = n(375708),
    _ = n(420537);
let E = function (e) {
    let {
        onPlay: t,
        externalURL: n,
        className: r,
        renderLinkComponent: d,
        inactive: E,
        messageId: A,
        channelId: h,
    } = e;
    return (0, i.jsx)(o.Y.Consumer, {
        children: (e) =>
            (0, i.jsxs)("div", {
                className: a()(r, _.iE, { [_.y7]: e.disableInteractions }),
                children: [
                    E && null == t
                        ? (0, i.jsx)("div", {
                              className: _.P0,
                              children: (0, i.jsx)(s.u, { size: "xs", color: "currentColor", className: _._R }),
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(l.D, {
                              onClick: t,
                              className: _.Rw,
                              tabIndex: E ? -1 : 0,
                              "aria-label": u.intl.string(u.t.RscU7I),
                              children: (0, i.jsx)(s.u, { size: "xs", color: "currentColor", className: _._R }),
                          })
                        : null,
                    null != n
                        ? d({
                              href: n,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              className: _.Rw,
                              children: (0, i.jsx)(c, {
                                  "aria-label": u.intl.string(u.t.wuRE8M),
                                  className: null != t ? _._L : _.Zl,
                              }),
                              messageId: A,
                              channelId: h,
                          })
                        : null,
                ],
            }),
    });
};
