"use strict";
n.d(t, { A: () => c });
var i = n(439372),
    r = n(970278),
    a = n(280450),
    s = n(734057),
    l = n(935208),
    o = n(767581);
class d extends i.A {
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
        let n = r.A.getThreadsForParent(e, t);
        l.default.keys(n).forEach((e) => {
            let t = (0, o.yg)(e);
            null != t && (this.readStateSnapshots[e] = t);
        });
    };
    getReadStateSnapshotAnalytics = (e) => this.readStateSnapshots[e];
}
let c = new d();
