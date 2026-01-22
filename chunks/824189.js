n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(397927),
    a = n(975571),
    s = n(942405),
    o = n(652215),
    l = n(985018);

function c() {
    (0, s.sL)("overlay-settings");
}

function u(e) {
    let { className: t, game: n } = e;
    return (0, s.NP)() && null != n && n.elevated
        ? (0, r.jsx)("div", {
              className: t,
              children: (0, r.jsx)(i.po8, {
                  messageType: i.YCn.WARNING,
                  action: (0, r.jsx)(i.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: l.intl.string(l.t["1iI46O"]),
                      onClick: c,
                  }),
                  children: l.intl.format(l.t["LJzl+0"], {
                      helpCenterLink: a.A.getArticleURL(o.MVz.SYSTEM_SERVICE),
                  }),
              }),
          })
        : null;
}
