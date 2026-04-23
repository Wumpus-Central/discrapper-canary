n.d(t, { A: () => c });
var i = n(735438),
    r = n.n(i),
    a = n(626584),
    l = n(734057),
    s = n(222823),
    o = n(661191),
    d = n(723176);
let u = new a.A("ReadStates"),
    c = new (class {
        readStateVersion = null;
        async getAll(e) {
            let t = performance.now(),
                n = await d.A.readStates(e).getMany(),
                i = performance.now();
            return u.log(`asynchronously loaded in ${i - t}ms (readStates: ${n.length})`), n;
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
                    : u.log("Received null read states version", e));
        }
        handleWriteCaches(e, t) {
            let n = s.Ay.getAllReadStates(!1);
            if (t) {
                if (null == this.readStateVersion) return;
                let t = "0",
                    i = "0",
                    a = Object.keys(l.A.getMutablePrivateChannels()),
                    s = new Set(a);
                for (let e of ((i = r()(a).sort(o.default.compare).reverse().value()[0] ?? "0"), n))
                    null != e._lastMessageId &&
                        (1 === o.default.compare(e._lastMessageId, t) && (t = e._lastMessageId),
                        s.has(e.channelId) && 1 === o.default.compare(e._lastMessageId, i) && (i = e._lastMessageId));
                d.A.nonGuildVersionsTransaction(e).putAll([
                    { id: "highest_last_message_id", versionString: t },
                    { id: "private_channels_version", versionString: i },
                    { id: "read_state_version", version: this.readStateVersion },
                ]);
            }
            let i = d.A.readStatesTransaction(e);
            i.delete(), n.forEach((e) => i.put(`${e.type}-${e.channelId}`, e));
        }
    })();
