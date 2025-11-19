t.d(e, { Z: () => d });
var r = t(54381);
t(473749);
var i = t(442837),
    l = t(481060),
    c = t(787014),
    o = t(685929),
    a = t(496675),
    s = t(981631),
    u = t(388032);
function d(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: d,
        canAccessChannel: f,
        canUnlinkChannel: b,
    } = (0, i.cj)(
        [a.Z],
        () => ({
            canManageChannels: a.Z.can(s.Plq.MANAGE_CHANNELS, n),
            canManageRoles: a.Z.can(s.Plq.MANAGE_ROLES, n),
            canManageWebhooks: a.Z.can(s.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: a.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, o.C)(n, a.Z),
        }),
        [n],
    );
    return !__OVERLAY__ && f && (e || t || d || b)
        ? (0, r.jsx)(l.sNh, {
              id: "edit-channel",
              label: n.type === s.d4z.GUILD_CATEGORY ? u.intl.string(u.t.zdPFs9) : u.intl.string(u.t["3gUsJb"]),
              action: () => c.ZP.open(n.id),
          })
        : null;
}
