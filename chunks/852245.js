t.d(n, { Z: () => b });
var r = t(200651);
t(192379);
var c = t(442837),
    l = t(481060),
    a = t(787014),
    i = t(685929),
    o = t(496675),
    u = t(981631),
    s = t(388032);
function b(e) {
    let {
        canManageChannels: n,
        canManageRoles: t,
        canManageWebhooks: b,
        canAccessChannel: f,
        canUnlinkChannel: d
    } = (0, c.cj)(
        [o.Z],
        () => ({
            canManageChannels: o.Z.can(u.Plq.MANAGE_CHANNELS, e),
            canManageRoles: o.Z.can(u.Plq.MANAGE_ROLES, e),
            canManageWebhooks: o.Z.can(u.Plq.MANAGE_WEBHOOKS, e),
            canAccessChannel: o.Z.can(e.accessPermissions, e),
            canUnlinkChannel: (0, i.C)(e, o.Z)
        }),
        [e]
    );
    return !__OVERLAY__ && f && (n || t || b || d)
        ? (0, r.jsx)(l.sNh, {
              id: 'edit-channel',
              label: e.type === u.d4z.GUILD_CATEGORY ? s.NW.string(s.t.zdPFs7) : s.NW.string(s.t['3gUsJS']),
              action: () => a.ZP.open(e.id)
          })
        : null;
}
