t.d(n, {
    Z: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(111810),
    o = t(665906),
    s = t(695346),
    u = t(496675),
    d = t(981631),
    c = t(388032);
function f(e, n) {
    let t = (0, o.$R)(n),
        f = (0, l.e7)([u.Z], () => (n.isPrivate() || u.Z.can(d.Plq.ADD_REACTIONS, n)) && t, [n, t]),
        g = s.nc.getSetting() && f && e.type !== d.uaV.GUILD_INVITE_REMINDER,
        m = e.hasPotions(),
        h = (0, a.V1)('Message Context Menu');
    return g && !m && h
        ? (0, i.jsx)(r.MenuItem, {
              id: 'add-confetti-potion',
              label: c.intl.string(c.t.axfAra),
              icon: r.PotionIcon,
              action: () => {}
          })
        : null;
}
