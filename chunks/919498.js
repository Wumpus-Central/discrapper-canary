n.d(t, { Z: () => o });
var r = n(54381),
    i = n(971082),
    a = n(853072),
    l = n(388032);
function o(e) {
    let { applicationId: t, guildId: n, channelId: o, className: c, visuallyHideLabel: s } = e,
        u = (0, a.Z)(t);
    return u.length > 0
        ? (0, r.jsx)(i.Z, {
              label: l.intl.formatToPlainString(l.t.ujhJdG, { numFriends: u.length }),
              className: c,
              users: u,
              guildId: n,
              channelId: o,
              visuallyHideLabel: s,
          })
        : null;
}
