n.d(t, { A: () => u });
var i = n(735438),
    s = n.n(i),
    r = n(626584),
    a = n(734057),
    l = n(222823),
    o = n(661191),
    c = n(723176);
let d = new r.A("ReadStates"),
    u = new (class {
        readStateVersion = null;
        async getAll(e) {
            let t = performance.now(),
                n = await c.A.readStates(e).getMany(),
                i = performance.now();
            return d.log(`asynchronously loaded in ${i - t}ms (readStates: ${n.length})`), n;
        }
        actions = {
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            CHANNEL_PINS_ACK: (e) => this.handleReadStateAction(e),
            MESSAGE_ACK: (e) => this.handleReadStateAction(e),
            BACKGROUND_SYNC_FINISHED: (e, t) => {
                e.messagesOnly || this.handleWriteCaches(t, !1);
            },
            WRITE_CACHES: (e, t) => this.handleWriteCaches(t, !0),
        };
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
                    : d.log("Received null read states version", e));
        }
        handleWriteCaches(e, t) {
            let n = l.Ay.getAllReadStates(!1);
            if (t) {
                if (null == this.readStateVersion) return;
                let t = "0",
                    i = "0",
                    r = Object.keys(a.A.getMutablePrivateChannels()),
                    l = new Set(r);
                for (let e of ((i = s()(r).sort(o.default.compare).reverse().value()[0] ?? "0"), n))
                    null != e._lastMessageId &&
                        (1 === o.default.compare(e._lastMessageId, t) && (t = e._lastMessageId),
                        l.has(e.channelId) && 1 === o.default.compare(e._lastMessageId, i) && (i = e._lastMessageId));
                c.A.nonGuildVersionsTransaction(e).putAll([
                    { id: "highest_last_message_id", versionString: t },
                    { id: "private_channels_version", versionString: i },
                    { id: "read_state_version", version: this.readStateVersion },
                ]);
            }
            let i = c.A.readStatesTransaction(e);
            i.delete(), n.forEach((e) => i.put(`${e.type}-${e.channelId}`, e));
        }
    })();
