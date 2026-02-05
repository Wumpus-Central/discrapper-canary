"use strict";
n.d(t, { A: () => l });
var r = n(439372),
    i = n(734057),
    a = n(473503),
    s = n(746080);
class o extends r.A {
    actions = { CHANNEL_PRELOAD: this.handleChannelPreload };
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, s.jq)(t)) return;
        let n = i.A.getChannel(t);
        null != n && n.isForumLikeChannel() && (0, a.kB)(n);
    }
}
let l = new o();
