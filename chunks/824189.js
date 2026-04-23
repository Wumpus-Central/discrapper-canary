n.d(t, { A: () => c });
var i = n(627968),
    s = n(512950),
    l = n(821609),
    a = n(975571),
    r = n(942405),
    o = n(652215),
    d = n(985018);
function u() {
    (0, r.sL)("overlay-settings");
}
function c(e) {
    let { className: t, game: n } = e;
    return (0, r.NP)() && null != n && n.elevated
        ? (0, i.jsx)("div", {
              className: t,
              children: (0, i.jsx)(s.p, {
                  messageType: s.Y.WARNING,
                  action: (0, i.jsx)(l.$, {
                      variant: "secondary",
                      size: "sm",
                      text: d.intl.string(d.t["1iI46O"]),
                      onClick: u,
                  }),
                  children: d.intl.format(d.t["LJzl+0"], { helpCenterLink: a.A.getArticleURL(o.MVz.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
