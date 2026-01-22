n.d(t, { A: () => p }), n(896048), n(638769), n(264879);
var r = n(735438),
    i = n.n(r),
    a = n(626584),
    s = n(734057),
    o = n(222823),
    l = n(661191),
    c = n(723176);
function u(e, t, n) {
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
let d = new a.A("ReadStates");
class f {
    async getAll(e) {
        let t = performance.now(),
            n = await c.A.readStates(e).getMany(),
            r = performance.now();
        return d.log("asynchronously loaded in ".concat(r - t, "ms (readStates: ").concat(n.length, ")")), n;
    }
    resetInMemoryState() {
        this.readStateVersion = null;
    }
    handleConnectionOpen(e) {
        this.readStateVersion = e.readState.version;
    }
    handleReadStateAction(e) {
        null != this.readStateVersion &&
            (null != e.version ? (this.readStateVersion = e.version) : d.log("Received null read states version", e));
    }
    handleWriteCaches(e, t) {
        let n = o.Ay.getAllReadStates(!1);
        if (t) {
            var r;
            if (null == this.readStateVersion) return;
            let t = "0",
                a = "0",
                o = Object.keys(s.A.getMutablePrivateChannels()),
                u = new Set(o);
            for (let e of ((a = null != (r = i()(o).sort(l.default.compare).reverse().value()[0]) ? r : "0"), n))
                null != e._lastMessageId &&
                    (1 === l.default.compare(e._lastMessageId, t) && (t = e._lastMessageId),
                    u.has(e.channelId) && 1 === l.default.compare(e._lastMessageId, a) && (a = e._lastMessageId));
            c.A.nonGuildVersionsTransaction(e).putAll([
                {
                    id: "highest_last_message_id",
                    versionString: t,
                },
                {
                    id: "private_channels_version",
                    versionString: a,
                },
                {
                    id: "read_state_version",
                    version: this.readStateVersion,
                },
            ]);
        }
        let a = c.A.readStatesTransaction(e);
        a.delete(), n.forEach((e) => a.put("".concat(e.type, "-").concat(e.channelId), e));
    }
    constructor() {
        u(this, "readStateVersion", null),
            u(this, "actions", {
                CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                CHANNEL_PINS_ACK: (e) => this.handleReadStateAction(e),
                MESSAGE_ACK: (e) => this.handleReadStateAction(e),
                BACKGROUND_SYNC_FINISHED: (e, t) => {
                    e.messagesOnly || this.handleWriteCaches(t, !1);
                },
                WRITE_CACHES: (e, t) => this.handleWriteCaches(t, !0),
            });
    }
}
let p = new f();
