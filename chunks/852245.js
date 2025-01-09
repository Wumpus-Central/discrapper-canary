t.d(e, {
    Z: function () {
        return d;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    u = t(787014),
    a = t(685929),
    c = t(496675),
    o = t(981631),
    s = t(388032);
function d(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: d,
        canAccessChannel: E,
        canUnlinkChannel: Z
    } = (0, i.cj)(
        [c.Z],
        () => ({
            canManageChannels: c.Z.can(o.Plq.MANAGE_CHANNELS, n),
            canManageRoles: c.Z.can(o.Plq.MANAGE_ROLES, n),
            canManageWebhooks: c.Z.can(o.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: c.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, a.C)(n, c.Z)
        }),
        [n]
    );
    return !__OVERLAY__ && E && (e || t || d || Z)
        ? (0, l.jsx)(r.MenuItem, {
              id: 'edit-channel',
              label: n.type === o.d4z.GUILD_CATEGORY ? s.intl.string(s.t.zdPFs7) : s.intl.string(s.t['3gUsJS']),
              action: () => u.ZP.open(n.id)
          })
        : null;
}
