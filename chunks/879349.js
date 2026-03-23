"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(713654),
    r = n(71393),
    o = n(234021);
function c(e) {
    let { channel: t } = e,
        n = (0, s.bG)([r.A], () => r.A.getGuild(t.guild_id)),
        c = (0, a.gU)(t, n);
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              className: o.hY,
              children: [
                  (0, i.jsx)(c, { className: o.p }),
                  (0, i.jsx)(l.Text, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: o.HA,
                      children: t.name,
                  }),
              ],
          });
}
