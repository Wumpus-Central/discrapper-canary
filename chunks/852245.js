t.d(e, { Z: () => d });
var a = t(54381);
t(473749);
var r = t(442837),
    i = t(481060),
    l = t(787014),
    c = t(685929),
    s = t(496675),
    o = t(981631),
    u = t(388032);
function d(n) {
    let {
        canManageChannels: e,
        canManageRoles: t,
        canManageWebhooks: d,
        canAccessChannel: b,
        canUnlinkChannel: h,
    } = (0, r.cj)(
        [s.Z],
        () => ({
            canManageChannels: s.Z.can(o.Plq.MANAGE_CHANNELS, n),
            canManageRoles: s.Z.can(o.Plq.MANAGE_ROLES, n),
            canManageWebhooks: s.Z.can(o.Plq.MANAGE_WEBHOOKS, n),
            canAccessChannel: s.Z.can(n.accessPermissions, n),
            canUnlinkChannel: (0, c.C)(n, s.Z),
        }),
        [n],
    );
    return !__OVERLAY__ && b && (e || t || d || h)
        ? (0, a.jsx)(i.sNh, {
              id: "edit-channel",
              label: n.type === o.d4z.GUILD_CATEGORY ? u.intl.string(u.t.zdPFs9) : u.intl.string(u.t["3gUsJb"]),
              action: () => l.ZP.open(n.id),
          })
        : null;
}
