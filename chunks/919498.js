n.d(t, { Z: () => l });
var r = n(951288),
    i = n(971082),
    o = n(853072),
    a = n(388032);
function l(e) {
    let { applicationId: t, guildId: n, channelId: l, className: c, visuallyHideLabel: s } = e,
        u = (0, o.Z)(t);
    return u.length > 0
        ? (0, r.jsx)(i.Z, {
              label: a.intl.formatToPlainString(a.t.ujhJdH, { numFriends: u.length }),
              className: c,
              users: u,
              guildId: n,
              channelId: l,
              visuallyHideLabel: s,
          })
        : null;
}
