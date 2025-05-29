t.d(e, { Z: () => d });
var r = t(255367);
t(73800);
var i = t(442837),
    l = t(481060),
    a = t(787014),
    c = t(685929),
    o = t(496675),
    s = t(981631),
    u = t(388032);
function d(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: d,
        canAccessChannel: f,
        canUnlinkChannel: h
    } = (0, i.cj)(
        [o.Z],
        () => ({
            canManageChannels: o.Z.can(s.Plq.MANAGE_CHANNELS, n),
            canManageRoles: o.Z.can(s.Plq.MANAGE_ROLES, n),
            canManageWebhooks: o.Z.can(s.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: o.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, c.C)(n, o.Z)
        }),
        [n]
    );
    return !__OVERLAY__ && f && (e || t || d || h)
        ? (0, r.jsx)(l.sNh, {
              id: 'edit-channel',
              label: n.type === s.d4z.GUILD_CATEGORY ? u.intl.string(u.t.zdPFs7) : u.intl.string(u.t['3gUsJS']),
              action: () => a.ZP.open(n.id)
          })
        : null;
}
