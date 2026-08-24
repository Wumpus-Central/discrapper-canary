t.d(n, { A: () => A });
var l = t(477900);
t(582128);
var i = t(477782),
    a = t(241541),
    s = t(283973),
    r = t(267102),
    o = t(520006),
    c = t(576705),
    u = t(652215),
    d = t(375708);
function A(e, n, t, A) {
    let m = { streamUserId: t, channel: e, applicationId: A, appContext: (0, r.Us)() };
    function h() {
        null != n &&
            e.type === u.rbe.GUILD_VOICE &&
            (0, o.X)({ guild: n, source: u.PE1.VOICE_CHANNEL_CALL_MENU_ITEM, ...m });
    }
    return null != A
        ? (0, l.jsx)(i.Dr, {
              id: "invite-to-stream",
              label: d.intl.string(d.t["OzOM/q"]),
              action: h,
              icon: a.D,
              leadingAccessory: { type: "icon", icon: a.D },
          })
        : null != n && null != e && c.A.can(u.xBc.CREATE_INSTANT_INVITE, e)
          ? (0, l.jsx)(i.Dr, {
                id: "invite-friends",
                label: d.intl.string(d.t["EE+P0H"]),
                action: h,
                icon: s.R,
                leadingAccessory: { type: "icon", icon: s.R },
            })
          : null;
}
