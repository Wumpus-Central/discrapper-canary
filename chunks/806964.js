"use strict";
n.d(t, { u: () => l });
var i = n(951001),
    r = n(265422),
    s = n(763827),
    a = n(309010),
    o = n(652215);
let l = {
    binds: ["mod+alt+left"],
    comboKeysBindGlobal: !0,
    action() {
        if (!s.A.isConnected()) return !1;
        let e = s.A.getGuildId() ?? o.ME,
            t = a.A.getChannelId(e);
        return (0, r.i)(e, t), i.A.channelListScrollTo(e, s.A.getChannelId()), !1;
    },
};
