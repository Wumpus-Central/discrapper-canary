n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(692051),
    l = n(8475),
    c = n(985018),
    u = n(942676);
let d = (e) => {
    let {
        onPlay: t,
        externalURL: n,
        className: i,
        renderLinkComponent: d,
        inactive: f,
        messageId: p,
        channelId: _,
    } = e;
    return (0, r.jsx)(o.Y.Consumer, {
        children: (e) =>
            (0, r.jsxs)("div", {
                className: a()(i, u.iE, {
                    [u.y7]: e.disableInteractions,
                }),
                children: [
                    f && null == t
                        ? (0, r.jsx)("div", {
                              className: u.P0,
                              children: (0, r.jsx)(s.udU, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: u._R,
                              }),
                          })
                        : null,
                    null != t
                        ? (0, r.jsx)(s.DUT, {
                              onClick: t,
                              className: u.Rw,
                              tabIndex: f ? -1 : 0,
                              "aria-label": c.intl.string(c.t.RscU7I),
                              children: (0, r.jsx)(s.udU, {
                                  size: "xs",
                                  color: "currentColor",
                                  className: u._R,
                              }),
                          })
                        : null,
                    null != n
                        ? d({
                              href: n,
                              target: "_blank",
                              rel: "noreferrer noopener",
                              className: u.Rw,
                              children: (0, r.jsx)(l.A, {
                                  "aria-label": c.intl.string(c.t.wuRE8M),
                                  className: null != t ? u._L : u.Zl,
                              }),
                              messageId: p,
                              channelId: _,
                          })
                        : null,
                ],
            }),
    });
};
