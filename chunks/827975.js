n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(837381),
    s = n(311907),
    a = n(397927),
    r = n(919638),
    o = n(71393),
    d = n(900848),
    c = n(550591),
    u = n(818348),
    h = n(985018),
    A = n(21644);
function _() {
    let e = (0, s.bG)([r.A, o.A], () => r.A.unavailableGuilds.filter((e) => null == o.A.getGuild(e)).length),
        t = (0, l.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, i.jsx)(d.c, {
              children: (0, i.jsx)(c.A, {
                  text: h.intl.format(h.t["TnH05/"], { count: e }),
                  children: (0, i.jsx)(a.MzZ, {
                      href: u.qF.STATUS,
                      target: "_blank",
                      className: A.h,
                      "aria-label": h.intl.formatToPlainString(h.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, i.jsx)(a.EpV, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
