"use strict";
n.d(t, { A: () => c });
var r = n(439372),
    i = n(970278),
    a = n(961350),
    s = n(734057),
    o = n(661191),
    l = n(767581);
class u extends r.A {
    readStateSnapshots = {};
    actions = { CHANNEL_SELECT: (e) => this.handleChannelSelect(e), THREAD_CREATE: (e) => this.handleThreadCreate(e) };
    handleChannelSelect = (e) => {
        let { channelId: t } = e;
        if (null == t) return;
        let n = s.A.getChannel(t);
        null != n &&
            n.isForumLikeChannel() &&
            ((this.readStateSnapshots = {}), this.processForumChannel(n.guild_id, t));
    };
    handleThreadCreate(e) {
        let { channel: t } = e;
        if (t.isForumPost()) {
            let e = t.ownerId === a.default.getId();
            this.readStateSnapshots[t.id] = { isNew: !e, hasUnreads: !e };
        }
    }
    processForumChannel = (e, t) => {
        let n = i.A.getThreadsForParent(e, t);
        o.default.keys(n).forEach((e) => {
            let t = (0, l.yg)(e);
            null != t && (this.readStateSnapshots[e] = t);
        });
    };
    getReadStateSnapshotAnalytics = (e) => this.readStateSnapshots[e];
}
let c = new u();
