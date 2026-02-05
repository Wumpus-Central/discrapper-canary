"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(692051),
    l = n(8475),
    u = n(985018),
    c = n(942676);
let d = (e) => {
    let {
        onPlay: t,
        externalURL: n,
        className: i,
        renderLinkComponent: d,
        inactive: _,
        messageId: f,
        channelId: p,
    } = e;
    return (0, r.jsx)(o.Y.Consumer, {
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(i, c.iE, { [c.y7]: e.disableInteractions }),
                children: [
                    _ && null == t
                        ? (0, r.jsx)("div", {
                              className: c.P0,
                              children: (0, r.jsx)(s.udU, { size: "xs", color: "currentColor", className: c._R }),
                          })
                        : null,
                    null != t
                        ? (0, r.jsx)(s.DUT, {
                              onClick: t,
                              className: c.Rw,
                              tabIndex: _ ? -1 : 0,
                              "aria-label": u.intl.string(u.t.RscU7I),
                              children: (0, r.jsx)(s.udU, { size: "xs", color: "currentColor", className: c._R }),
                          })
                        : null,
                    null != n
                        ? d({
                              href: n,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              className: c.Rw,
                              children: (0, r.jsx)(l.A, {
                                  "aria-label": u.intl.string(u.t.wuRE8M),
                                  className: null != t ? c._L : c.Zl,
                              }),
                              messageId: f,
                              channelId: p,
                          })
                        : null,
                ],
            }),
    });
};
