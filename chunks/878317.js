n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(439372),
    i = n(970278),
    a = n(961350),
    s = n(734057),
    o = n(661191),
    l = n(767581);

function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class u extends r.A {
    handleThreadCreate(e) {
        let { channel: t } = e;
        if (t.isForumPost()) {
            let e = t.ownerId === a.default.getId();
            this.readStateSnapshots[t.id] = {
                isNew: !e,
                hasUnreads: !e,
            };
        }
    }
    constructor(...e) {
        super(...e),
            c(this, "readStateSnapshots", {}),
            c(this, "actions", {
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                THREAD_CREATE: (e) => this.handleThreadCreate(e),
            }),
            c(this, "handleChannelSelect", (e) => {
                let { channelId: t } = e;
                if (null == t) return;
                let n = s.A.getChannel(t);
                null != n &&
                    n.isForumLikeChannel() &&
                    ((this.readStateSnapshots = {}), this.processForumChannel(n.guild_id, t));
            }),
            c(this, "processForumChannel", (e, t) => {
                let n = i.A.getThreadsForParent(e, t);
                o.default.keys(n).forEach((e) => {
                    let t = (0, l.yg)(e);
                    null != t && (this.readStateSnapshots[e] = t);
                });
            }),
            c(this, "getReadStateSnapshotAnalytics", (e) => this.readStateSnapshots[e]);
    }
}
let d = new u();
