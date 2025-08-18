n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    o = n(787014),
    c = n(685929),
    a = n(496675),
    u = n(981631),
    s = n(388032);
function d(e) {
    let {
        canManageChannels: t,
        canManageRoles: n,
        canManageWebhooks: d,
        canAccessChannel: p,
        canUnlinkChannel: b,
    } = (0, i.cj)(
        [a.Z],
        () => ({
            canManageChannels: a.Z.can(u.Plq.MANAGE_CHANNELS, e),
            canManageRoles: a.Z.can(u.Plq.MANAGE_ROLES, e),
            canManageWebhooks: a.Z.can(u.Plq.MANAGE_WEBHOOKS, e),
            canAccessChannel: a.Z.can(e.accessPermissions, e),
            canUnlinkChannel: (0, c.C)(e, a.Z),
        }),
        [e],
    );
    return !__OVERLAY__ && p && (t || n || d || b)
        ? (0, r.jsx)(l.sNh, {
              id: "edit-channel",
              label: e.type === u.d4z.GUILD_CATEGORY ? s.intl.string(s.t.zdPFs7) : s.intl.string(s.t["3gUsJS"]),
              action: () => o.ZP.open(e.id),
          })
        : null;
}
