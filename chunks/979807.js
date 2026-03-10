t.d(i, { A: () => A });
var e = t(627968);
t(64700);
var l = t(311907),
    r = t(397927),
    a = t(394953),
    d = t(976860),
    c = t(967198),
    u = t(652215),
    o = t(665606),
    s = t(985018);
function A(n) {
    let i = (0, l.bG)([c.A], () => c.A.getGuildId()),
        t = (0, a.lI)();
    return __OVERLAY__ || (i !== u.YYv && !t)
        ? null
        : (0, e.jsx)(r.Drp, {
              id: "go-to-original-guild",
              label: s.intl.string(o.default["3KruG3"]),
              action: function () {
                  (0, d.uh)(n.guild_id, n.id);
              },
          });
}
