u.d(t, { A: () => p });
var d = u(627968);
u(64700);
var l = u(17928),
    n = u(477782),
    r = u(394953),
    a = u(976860),
    s = u(967198),
    c = u(652215),
    e = u(335993),
    o = u(375708);
function p(i) {
    let t = (0, l.bG)([s.A], () => s.A.getGuildId()),
        u = (0, r.lI)();
    return __OVERLAY__ || (t !== c.YYv && !u)
        ? null
        : (0, d.jsx)(n.Dr, {
              id: "go-to-original-guild",
              label: o.intl.string(e.default["3KruG3"]),
              action: function () {
                  (0, a.uh)(i.guild_id, i.id);
              },
          });
}
