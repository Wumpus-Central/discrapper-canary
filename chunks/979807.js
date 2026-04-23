i.d(e, { A: () => A });
var t = i(627968);
i(64700);
var l = i(17928),
    r = i(477782),
    a = i(394953),
    d = i(976860),
    o = i(967198),
    u = i(652215),
    c = i(335993),
    s = i(985018);
function A(n) {
    let e = (0, l.bG)([o.A], () => o.A.getGuildId()),
        i = (0, a.lI)();
    return __OVERLAY__ || (e !== u.YYv && !i)
        ? null
        : (0, t.jsx)(r.Dr, {
              id: "go-to-original-guild",
              label: s.intl.string(c.default["3KruG3"]),
              action: function () {
                  (0, d.uh)(n.guild_id, n.id);
              },
          });
}
