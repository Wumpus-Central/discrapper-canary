"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(782134),
    a = n(939249),
    o = n(692051),
    c = n(8475),
    u = n(985018),
    d = n(755761);
let h = (e) => {
    let {
        onPlay: t,
        externalURL: n,
        className: l,
        renderLinkComponent: h,
        inactive: m,
        messageId: p,
        channelId: f,
    } = e;
    return (0, i.jsx)(o.Y.Consumer, {
        children: (e) =>
            (0, i.jsxs)("div", {
                className: s()(l, d.iE, { [d.y7]: e.disableInteractions }),
                children: [
                    m && null == t
                        ? (0, i.jsx)("div", {
                              className: d.P0,
                              children: (0, i.jsx)(r.u, { size: "xs", color: "currentColor", className: d._R }),
                          })
                        : null,
                    null != t
                        ? (0, i.jsx)(a.D, {
                              onClick: t,
                              className: d.Rw,
                              tabIndex: m ? -1 : 0,
                              "aria-label": u.intl.string(u.t.RscU7I),
                              children: (0, i.jsx)(r.u, { size: "xs", color: "currentColor", className: d._R }),
                          })
                        : null,
                    null != n
                        ? h({
                              href: n,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              className: d.Rw,
                              children: (0, i.jsx)(c.A, {
                                  "aria-label": u.intl.string(u.t.wuRE8M),
                                  className: null != t ? d._L : d.Zl,
                              }),
                              messageId: p,
                              channelId: f,
                          })
                        : null,
                ],
            }),
    });
};
