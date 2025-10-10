r.d(t, { Z: () => l });
var n = r(951288),
    i = r(971082),
    o = r(853072),
    a = r(388032);
function l(e) {
    let { applicationId: t, guildId: r, channelId: l, className: c, visuallyHideLabel: s } = e,
        u = (0, o.Z)(t);
    return u.length > 0
        ? (0, n.jsx)(i.Z, {
              label: a.intl.formatToPlainString(a.t.ujhJdH, { numFriends: u.length }),
              className: c,
              users: u,
              guildId: r,
              channelId: l,
              visuallyHideLabel: s,
          })
        : null;
}
