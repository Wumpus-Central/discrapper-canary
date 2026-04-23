n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(834730),
    a = n(47167),
    r = n(713654),
    o = n(71393),
    d = n(869552);
function c(e) {
    let { channel: t } = e,
        n = (0, l.bG)([o.A], () => o.A.getGuild(t.guild_id)),
        c = (0, a.Ay)(t),
        u = (0, r.gU)(t, n);
    return null == u
        ? null
        : (0, i.jsxs)("div", {
              className: d.hY,
              children: [
                  (0, i.jsx)(u, { className: d.p }),
                  (0, i.jsx)(s.E, {
                      variant: "text-md/semibold",
                      color: "interactive-text-default",
                      className: d.HA,
                      children: c,
                  }),
              ],
          });
}
