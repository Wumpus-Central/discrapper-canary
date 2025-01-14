t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(135793),
    a = t(111810),
    o = t(84040),
    s = t(388032);
function u(e, n) {
    let t = (0, o.Z)(e, n),
        u = e.hasPotions(),
        c = (0, a.V1)('Message Context Menu');
    return t && !u && c
        ? (0, i.jsx)(l.MenuItem, {
              id: 'add-confetti-potion',
              label: s.intl.string(s.t.icaJW1),
              icon: l.PotionIcon,
              action: () => (0, r.openMessageConfettiModal)(n, e)
          })
        : null;
}
