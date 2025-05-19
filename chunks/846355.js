n.d(t, { Z: () => d }), n(388685);
var r = n(442837),
    i = n(570140),
    l = n(455199),
    o = n(592125),
    s = n(306680),
    a = n(709054);
let c = new Set();
class u extends r.ZP.Store {
    initialize() {
        this.syncWith([l.Z, o.Z, s.ZP], () => {
            var e;
            c = new Set(
                [...(null != (e = l.Z.getMentions()) ? e : [])]
                    .filter((e) => {
                        let t = o.Z.getChannel(e.getChannelId());
                        if (null == t) return !1;
                        let n = s.ZP.ackMessageId(t.id);
                        return null != n && a.default.compare(e.id, n) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    })
            );
        });
    }
    get unreadMessageIds() {
        return c;
    }
}
let d = new u(i.Z, {});
