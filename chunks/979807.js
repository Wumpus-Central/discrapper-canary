n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(394953),
    c = n(976860),
    o = n(967198),
    u = n(652215),
    s = n(985018);
function d(e) {
    let t = (0, i.bG)([o.A], () => o.A.getGuildId()),
        n = (0, a.lI)();
    return __OVERLAY__ || (t !== u.YYv && !n)
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "go-to-original-guild",
              label: s.intl.string(s.t.WYj55Y),
              action: function () {
                  (0, c.uh)(e.guild_id, e.id);
              },
          });
}
