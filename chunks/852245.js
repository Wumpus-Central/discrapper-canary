t.d(n, { Z: () => b });
var r = t(200651);
t(192379);
var c = t(442837),
    i = t(481060),
    l = t(787014),
    o = t(685929),
    a = t(496675),
    u = t(981631),
    s = t(388032);
function b(e) {
    let {
        canManageChannels: n,
        canManageRoles: t,
        canManageWebhooks: b,
        canAccessChannel: d,
        canUnlinkChannel: f
    } = (0, c.cj)(
        [a.Z],
        () => ({
            canManageChannels: a.Z.can(u.Plq.MANAGE_CHANNELS, e),
            canManageRoles: a.Z.can(u.Plq.MANAGE_ROLES, e),
            canManageWebhooks: a.Z.can(u.Plq.MANAGE_WEBHOOKS, e),
            canAccessChannel: a.Z.can(e.accessPermissions, e),
            canUnlinkChannel: (0, o.C)(e, a.Z)
        }),
        [e]
    );
    return !__OVERLAY__ && d && (n || t || b || f)
        ? (0, r.jsx)(i.sNh, {
              id: 'edit-channel',
              label: e.type === u.d4z.GUILD_CATEGORY ? s.NW.string(s.t.zdPFs7) : s.NW.string(s.t['3gUsJS']),
              action: () => l.ZP.open(e.id)
          })
        : null;
}
