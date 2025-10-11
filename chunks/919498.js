n.d(t, { Z: () => l });
var r = n(951288),
    i = n(971082),
    a = n(853072),
    o = n(388032);
function l(e) {
    let { applicationId: t, guildId: n, channelId: l, className: c, visuallyHideLabel: s } = e,
        u = (0, a.Z)(t);
    return u.length > 0
        ? (0, r.jsx)(i.Z, {
              label: o.intl.formatToPlainString(o.t.ujhJdH, { numFriends: u.length }),
              className: c,
              users: u,
              guildId: n,
              channelId: l,
              visuallyHideLabel: s,
          })
        : null;
}
