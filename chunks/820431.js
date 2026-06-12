"use strict";
n.d(t, { A: () => l });
var i = n(439372),
    r = n(734057),
    s = n(473503),
    a = n(746080);
class o extends i.A {
    actions = { CHANNEL_PRELOAD: this.handleChannelPreload };
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, a.jq)(t)) return;
        let n = r.A.getChannel(t);
        null != n && n.isForumLikeChannel() && (0, s.kB)(n);
    }
}
let l = new o();
