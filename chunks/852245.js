t.d(e, { Z: () => d });
var r = t(255367);
t(73800);
var a = t(442837),
    c = t(481060),
    l = t(787014),
    i = t(685929),
    o = t(496675),
    s = t(981631),
    u = t(388032);
function d(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: d,
        canAccessChannel: E,
        canUnlinkChannel: f,
    } = (0, a.cj)(
        [o.Z],
        () => ({
            canManageChannels: o.Z.can(s.Plq.MANAGE_CHANNELS, n),
            canManageRoles: o.Z.can(s.Plq.MANAGE_ROLES, n),
            canManageWebhooks: o.Z.can(s.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: o.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, i.C)(n, o.Z),
        }),
        [n],
    );
    return !__OVERLAY__ && E && (e || t || d || f)
        ? (0, r.jsx)(c.sNh, {
              id: "edit-channel",
              label: n.type === s.d4z.GUILD_CATEGORY ? u.intl.string(u.t.zdPFs7) : u.intl.string(u.t["3gUsJS"]),
              action: () => l.ZP.open(n.id),
          })
        : null;
}
