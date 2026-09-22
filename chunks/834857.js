t.d(n, { A: () => A });
var i = t(477900);
t(582128);
var l = t(477782),
    s = t(241541),
    a = t(283973),
    o = t(267102),
    r = t(520006),
    c = t(576705),
    u = t(652215),
    d = t(375708);
function A(e, n, t, A) {
    let m = { streamUserId: t, channel: e, applicationId: A, appContext: (0, o.Us)() };
    function h() {
        null != n &&
            e.type === u.rbe.GUILD_VOICE &&
            (0, r.X)({ guild: n, source: u.PE1.VOICE_CHANNEL_CALL_MENU_ITEM, ...m });
    }
    return null != A
        ? (0, i.jsx)(l.Dr, {
              id: "invite-to-stream",
              label: d.intl.string(d.t["OzOM/q"]),
              action: h,
              icon: s.D,
              leadingAccessory: { type: "icon", icon: s.D },
          })
        : null != n && null != e && c.A.can(u.xBc.CREATE_INSTANT_INVITE, e)
          ? (0, i.jsx)(l.Dr, {
                id: "invite-friends",
                label: d.intl.string(d.t["EE+P0H"]),
                action: h,
                icon: a.R,
                leadingAccessory: { type: "icon", icon: a.R },
            })
          : null;
}
