"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(837381),
    l = n(311907),
    r = n(397927),
    a = n(919638),
    o = n(71393),
    c = n(900848),
    d = n(550591),
    u = n(818348),
    h = n(985018),
    A = n(21644);
function m() {
    let e = (0, l.bG)([a.A, o.A], () => a.A.unavailableGuilds.filter((e) => null == o.A.getGuild(e)).length),
        t = (0, s.Vd)("unavailable-guilds-button");
    return e <= 0
        ? null
        : (0, i.jsx)(c.c, {
              children: (0, i.jsx)(d.A, {
                  text: h.intl.format(h.t["TnH05/"], { count: e }),
                  children: (0, i.jsx)(r.MzZ, {
                      href: u.qF.STATUS,
                      target: "_blank",
                      className: A.h,
                      "aria-label": h.intl.formatToPlainString(h.t["MEpX+2"], { count: e }),
                      ...t,
                      children: (0, i.jsx)(r.EpV, { color: "currentColor", "aria-hidden": !0 }),
                  }),
              }),
          });
}
