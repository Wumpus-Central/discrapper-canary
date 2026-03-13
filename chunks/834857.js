"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(267102),
    r = n(520006),
    a = n(576705),
    o = n(652215),
    c = n(985018);
function d(e, t, n, d) {
    let u = { streamUserId: n, channel: e, applicationId: d, appContext: (0, l.Us)() },
        h = () => {
            null != t &&
                e.type === o.rbe.GUILD_VOICE &&
                (0, r.X)({ guild: t, source: o.PE1.VOICE_CHANNEL_CALL_MENU_ITEM, ...u });
        };
    return null != d
        ? (0, i.jsx)(s.Drp, {
              id: "invite-to-stream",
              label: c.intl.string(c.t["OzOM/q"]),
              action: h,
              icon: s.DpX,
              leadingAccessory: { type: "icon", icon: s.DpX },
          })
        : null != t && null != e && a.A.can(o.xBc.CREATE_INSTANT_INVITE, e)
          ? (0, i.jsx)(s.Drp, {
                id: "invite-friends",
                label: c.intl.string(c.t["EE+P0H"]),
                action: h,
                icon: s.Rvf,
                leadingAccessory: { type: "icon", icon: s.Rvf },
            })
          : null;
}
