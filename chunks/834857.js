t.d(n, { A: () => A });
var l = t(627968);
t(64700);
var i = t(477782),
    a = t(241541),
    s = t(283973),
    r = t(267102),
    o = t(520006),
    c = t(576705),
    u = t(652215),
    d = t(985018);
function A(e, n, t, A) {
    let h = { streamUserId: t, channel: e, applicationId: A, appContext: (0, r.Us)() },
        p = () => {
            null != n &&
                e.type === u.rbe.GUILD_VOICE &&
                (0, o.X)({ guild: n, source: u.PE1.VOICE_CHANNEL_CALL_MENU_ITEM, ...h });
        };
    return null != A
        ? (0, l.jsx)(i.Dr, {
              id: "invite-to-stream",
              label: d.intl.string(d.t["OzOM/q"]),
              action: p,
              icon: a.D,
              leadingAccessory: { type: "icon", icon: a.D },
          })
        : null != n && null != e && c.A.can(u.xBc.CREATE_INSTANT_INVITE, e)
          ? (0, l.jsx)(i.Dr, {
                id: "invite-friends",
                label: d.intl.string(d.t["EE+P0H"]),
                action: p,
                icon: s.R,
                leadingAccessory: { type: "icon", icon: s.R },
            })
          : null;
}
