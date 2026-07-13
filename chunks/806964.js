"use strict";
n.d(t, { u: () => o });
var i = n(951001),
    r = n(265422),
    a = n(763827),
    s = n(309010),
    l = n(652215);
let o = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
        if (!a.A.isConnected()) return !1;
        let e = a.A.getGuildId() ?? l.ME,
            t = s.A.getChannelId(e);
        return (0, r.i)(e, t), i.A.channelListScrollTo(e, a.A.getChannelId()), !1;
    },
};
