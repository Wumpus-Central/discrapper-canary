n.d(t, { Z: () => o });
var r = n(951288),
    i = n(971082),
    a = n(853072),
    l = n(388032);
function o(e) {
    let { applicationId: t, guildId: n, channelId: o, className: s, visuallyHideLabel: c } = e,
        u = (0, a.Z)(t);
    return u.length > 0
        ? (0, r.jsx)(i.Z, {
              label: l.intl.formatToPlainString(l.t.ujhJdH, { numFriends: u.length }),
              className: s,
              users: u,
              guildId: n,
              channelId: o,
              visuallyHideLabel: c,
          })
        : null;
}
