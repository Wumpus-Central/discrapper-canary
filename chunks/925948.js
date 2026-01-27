n.d(t, {
    A: () => _,
}),
    n(896048),
    n(638769),
    n(264879);
var r = n(735438),
    i = n.n(r),
    l = n(626584),
    s = n(734057),
    a = n(222823),
    o = n(661191),
    c = n(723176);

function d(e, t, n) {
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
let u = new l.A("ReadStates"),
    _ = new (class {
        async getAll(e) {
            let t = performance.now(),
                n = await c.A.readStates(e).getMany(),
                r = performance.now();
            return u.log("asynchronously loaded in ".concat(r - t, "ms (readStates: ").concat(n.length, ")")), n;
        }
        resetInMemoryState() {
            this.readStateVersion = null;
        }
        handleConnectionOpen(e) {
            this.readStateVersion = e.readState.version;
        }
        handleReadStateAction(e) {
            null != this.readStateVersion &&
                (null != e.version
                    ? (this.readStateVersion = e.version)
                    : u.log("Received null read states version", e));
        }
        handleWriteCaches(e, t) {
            let n = a.Ay.getAllReadStates(!1);
            if (t) {
                var r;
                if (null == this.readStateVersion) return;
                let t = "0",
                    l = "0",
                    a = Object.keys(s.A.getMutablePrivateChannels()),
                    d = new Set(a);
                for (let e of ((l = null != (r = i()(a).sort(o.default.compare).reverse().value()[0]) ? r : "0"), n))
                    null != e._lastMessageId &&
                        (1 === o.default.compare(e._lastMessageId, t) && (t = e._lastMessageId),
                        d.has(e.channelId) && 1 === o.default.compare(e._lastMessageId, l) && (l = e._lastMessageId));
                c.A.nonGuildVersionsTransaction(e).putAll([
                    {
                        id: "highest_last_message_id",
                        versionString: t,
                    },
                    {
                        id: "private_channels_version",
                        versionString: l,
                    },
                    {
                        id: "read_state_version",
                        version: this.readStateVersion,
                    },
                ]);
            }
            let l = c.A.readStatesTransaction(e);
            l.delete(), n.forEach((e) => l.put("".concat(e.type, "-").concat(e.channelId), e));
        }
        constructor() {
            d(this, "readStateVersion", null),
                d(this, "actions", {
                    CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                    CHANNEL_PINS_ACK: (e) => this.handleReadStateAction(e),
                    MESSAGE_ACK: (e) => this.handleReadStateAction(e),
                    BACKGROUND_SYNC_FINISHED: (e, t) => {
                        e.messagesOnly || this.handleWriteCaches(t, !1);
                    },
                    WRITE_CACHES: (e, t) => this.handleWriteCaches(t, !0),
                });
        }
    })();
