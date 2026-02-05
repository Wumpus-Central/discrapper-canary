e.d(t, { A: () => u });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(394953),
    d = e(976860),
    c = e(967198),
    s = e(652215),
    o = e(985018);
function u(n) {
    let t = (0, l.bG)([c.A], () => c.A.getGuildId()),
        e = (0, a.lI)();
    return __OVERLAY__ || (t !== s.YYv && !e)
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "go-to-original-guild",
              label: o.intl.string(o.t.WYj55Y),
              action: function () {
                  (0, d.uh)(n.guild_id, n.id);
              },
          });
}
