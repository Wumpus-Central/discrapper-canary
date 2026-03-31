n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(713654),
    r = n(71393),
    o = n(318496);
function c(e) {
    let { channel: t } = e,
        n = (0, l.bG)([r.A], () => r.A.getGuild(t.guild_id)),
        c = (0, a.gU)(t, n);
    return null == c
        ? null
        : (0, i.jsxs)("div", {
              className: o.hY,
              children: [
                  (0, i.jsx)(c, { className: o.p }),
                  (0, i.jsx)(s.Text, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: o.HA,
                      children: t.name,
                  }),
              ],
          });
}
