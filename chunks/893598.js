"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(782134),
    o = n(939249),
    l = n(692051),
    u = n(8475),
    c = n(985018),
    d = n(755761);
let _ = (e) => {
    let {
        onPlay: t,
        externalURL: n,
        className: i,
        renderLinkComponent: _,
        inactive: f,
        messageId: p,
        channelId: h,
    } = e;
    return (0, r.jsx)(l.Y.Consumer, {
        children: (e) =>
            (0, r.jsxs)("div", {
                className: s()(i, d.iE, { [d.y7]: e.disableInteractions }),
                children: [
                    f && null == t
                        ? (0, r.jsx)("div", {
                              className: d.P0,
                              children: (0, r.jsx)(a.u, { size: "xs", color: "currentColor", className: d._R }),
                          })
                        : null,
                    null != t
                        ? (0, r.jsx)(o.D, {
                              onClick: t,
                              className: d.Rw,
                              tabIndex: f ? -1 : 0,
                              "aria-label": c.intl.string(c.t.RscU7I),
                              children: (0, r.jsx)(a.u, { size: "xs", color: "currentColor", className: d._R }),
                          })
                        : null,
                    null != n
                        ? _({
                              href: n,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              className: d.Rw,
                              children: (0, r.jsx)(u.A, {
                                  "aria-label": c.intl.string(c.t.wuRE8M),
                                  className: null != t ? d._L : d.Zl,
                              }),
                              messageId: p,
                              channelId: h,
                          })
                        : null,
                ],
            }),
    });
};
