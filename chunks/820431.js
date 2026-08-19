"use strict";
n.d(t, { A: () => o });
var i = n(439372),
    r = n(734057),
    a = n(473503),
    s = n(746080);
class l extends i.A {
    actions = { CHANNEL_PRELOAD: this.handleChannelPreload };
    handleChannelPreload(e) {
        let { channelId: t } = e;
        if ((0, s.jq)(t)) return;
        let n = r.A.getChannel(t);
        null != n && n.isForumLikeChannel() && (0, a.kB)(n);
    }
}
let o = new l();
