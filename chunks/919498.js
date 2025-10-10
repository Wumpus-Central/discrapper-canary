r.d(t, { Z: () => l });
var n = r(951288),
    i = r(971082),
    a = r(853072),
    o = r(388032);
function l(e) {
    let { applicationId: t, guildId: r, channelId: l, className: c, visuallyHideLabel: s } = e,
        u = (0, a.Z)(t);
    return u.length > 0
        ? (0, n.jsx)(i.Z, {
              label: o.intl.formatToPlainString(o.t.ujhJdH, { numFriends: u.length }),
              className: c,
              users: u,
              guildId: r,
              channelId: l,
              visuallyHideLabel: s,
          })
        : null;
}
