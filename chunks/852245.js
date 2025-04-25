n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var c = n(442837),
    l = n(481060),
    i = n(787014),
    o = n(685929),
    a = n(496675),
    u = n(981631),
    s = n(388032);
function b(e) {
    let {
        canManageChannels: t,
        canManageRoles: n,
        canManageWebhooks: b,
        canAccessChannel: p,
        canUnlinkChannel: O
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
    return !__OVERLAY__ && p && (t || n || b || O)
        ? (0, r.jsx)(l.sNh, {
              id: 'edit-channel',
              label: e.type === u.d4z.GUILD_CATEGORY ? s.intl.string(s.t.zdPFs7) : s.intl.string(s.t['3gUsJS']),
              action: () => i.ZP.open(e.id)
          })
        : null;
}
