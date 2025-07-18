n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(787014),
    c = n(685929),
    a = n(496675),
    s = n(981631),
    u = n(388032);
function d(e) {
    let {
        canManageChannels: t,
        canManageRoles: n,
        canManageWebhooks: d,
        canAccessChannel: b,
        canUnlinkChannel: f
    } = (0, i.cj)(
        [a.Z],
        () => ({
            canManageChannels: a.Z.can(s.Plq.MANAGE_CHANNELS, e),
            canManageRoles: a.Z.can(s.Plq.MANAGE_ROLES, e),
            canManageWebhooks: a.Z.can(s.Plq.MANAGE_WEBHOOKS, e),
            canAccessChannel: a.Z.can(e.accessPermissions, e),
            canUnlinkChannel: (0, c.C)(e, a.Z)
        }),
        [e]
    );
    return !__OVERLAY__ && b && (t || n || d || f)
        ? (0, r.jsx)(l.sNh, {
              id: 'edit-channel',
              label: e.type === s.d4z.GUILD_CATEGORY ? u.intl.string(u.t.zdPFs7) : u.intl.string(u.t['3gUsJS']),
              action: () => o.ZP.open(e.id)
          })
        : null;
}
