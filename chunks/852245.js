t.d(e, { Z: () => d });
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    c = t(787014),
    r = t(685929),
    s = t(496675),
    o = t(981631),
    u = t(388032);
function d(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: d,
        canAccessChannel: E,
        canUnlinkChannel: N
    } = (0, i.cj)(
        [s.Z],
        () => ({
            canManageChannels: s.Z.can(o.Plq.MANAGE_CHANNELS, n),
            canManageRoles: s.Z.can(o.Plq.MANAGE_ROLES, n),
            canManageWebhooks: s.Z.can(o.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: s.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, r.C)(n, s.Z)
        }),
        [n]
    );
    return !__OVERLAY__ && E && (e || t || d || N)
        ? (0, l.jsx)(a.sNh, {
              id: 'edit-channel',
              label: n.type === o.d4z.GUILD_CATEGORY ? u.intl.string(u.t.zdPFs7) : u.intl.string(u.t['3gUsJS']),
              action: () => c.ZP.open(n.id)
          })
        : null;
}
