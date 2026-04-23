n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(837381),
    s = n(311907),
    a = n(349288),
    r = n(695366),
    o = n(919638),
    d = n(71393),
    c = n(900848),
    u = n(550591),
    h = n(818348),
    A = n(985018),
    _ = n(585212);
function m() {
    let e = (0, s.bG)([o.A, d.A], () => o.A.unavailableGuilds.filter((e) => null == d.A.getGuild(e)).length),
        t = (0, l.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, i.jsx)(c.c, {
              children: (0, i.jsx)(u.A, {
                  text: A.intl.format(A.t["TnH05/"], { count: e }),
                  children: (0, i.jsx)(a.Anchor, {
                      href: h.qF.STATUS,
                      target: "_blank",
                      className: _.h,
                      "aria-label": A.intl.formatToPlainString(A.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, i.jsx)(r.E, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
