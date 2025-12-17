t.d(e, { Z: () => b });
var r = t(54381);
t(473749);
var c = t(442837),
    l = t(481060),
    i = t(787014),
    o = t(685929),
    a = t(496675),
    u = t(981631),
    s = t(388032);
function b(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: b,
        canAccessChannel: d,
        canUnlinkChannel: f,
    } = (0, c.cj)(
        [a.Z],
        () => ({
            canManageChannels: a.Z.can(u.Plq.MANAGE_CHANNELS, n),
            canManageRoles: a.Z.can(u.Plq.MANAGE_ROLES, n),
            canManageWebhooks: a.Z.can(u.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: a.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, o.C)(n, a.Z),
        }),
        [n],
    );
    return !__OVERLAY__ && d && (e || t || b || f)
        ? (0, r.jsx)(l.sNh, {
              id: "edit-channel",
              label: n.type === u.d4z.GUILD_CATEGORY ? s.intl.string(s.t.zdPFs9) : s.intl.string(s.t["3gUsJb"]),
              action: () => i.ZP.open(n.id),
          })
        : null;
}
