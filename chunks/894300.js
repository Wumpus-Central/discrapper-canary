n.d(t, { Z: () => u });
var r = n(54381),
    i = n(481060),
    a = n(63063),
    o = n(865066),
    s = n(981631),
    l = n(388032);
function c() {
    (0, o.sU)("overlay-settings");
}
function u(e) {
    let { className: t, game: n } = e;
    return (0, o.hi)() && null != n && n.elevated
        ? (0, r.jsx)("div", {
              className: t,
              children: (0, r.jsx)(i.Wn, {
                  messageType: i.QYI.WARNING,
                  action: (0, r.jsx)(i.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: l.intl.string(l.t["1iI46O"]),
                      onClick: c,
                  }),
                  children: l.intl.format(l.t["LJzl+0"], { helpCenterLink: a.Z.getArticleURL(s.BhN.SYSTEM_SERVICE) }),
              }),
          })
        : null;
}
