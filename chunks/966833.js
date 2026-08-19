n.d(t, { A: () => D, e: () => N }), n(667532);
var i,
    l = n(435558),
    r = n.n(l),
    s = n(17928),
    a = n(228366),
    E = n(390248),
    o = n(320095),
    c = n(773669),
    _ = n(734057),
    u = n(696451),
    A = n(71393),
    T = n(232835),
    d = n(994500),
    I = n(287809),
    N =
        (((i = {}).LOADING = "LOADING"),
        (i.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
        (i.LOADED_FINISHED = "LOADING_FINISHED"),
        (i.FAILED = "FAILED"),
        i);
let R = {};
function O(e) {
    let { channel: t } = e;
    delete R[t.id];
}
function S() {
    r().forEach(R, (e) => {
        e.items.forEach((e) => {
            let { message: t } = e;
            t.set("blocked", d.A.isBlockedForMessage(t)), t.set("ignored", d.A.isIgnoredForMessage(t));
        }),
            (e.items = e.items.slice());
    });
}
class C extends s.Ay.Store {
    static displayName = "ChannelPinsStore";
    initialize() {
        this.waitFor(_.A, u.Ay, A.A, c.default, T.A, d.A, I.default);
    }
    getPins(e) {
        return R[e];
    }
}
let D = new C(a.h, {
    CONNECTION_OPEN: function () {
        R = {};
    },
    LOAD_PINNED_MESSAGES: function (e) {
        let { channelId: t, reset: n } = e;
        if (!n && null != R[t]) {
            R[t].state = "LOADING";
            return;
        }
        let i = _.A.getChannel(t)?.getGuildId() ?? void 0;
        R[t] = { id: t, items: [], state: "LOADING", guildId: i };
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, pins: n, hasMore: i } = e,
            l = R[t];
        if (null == l) return !1;
        let r = n.map((e) => {
            let { pinned_at: t, message: n } = e;
            return { pinnedAt: new Date(Date.parse(t)), message: (0, o.rh)(n) };
        });
        (l.items = [...l.items, ...r]), (l.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED");
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e,
            n = R[t];
        if (null == n) return !1;
        n.state = "FAILED";
    },
    CHANNEL_DELETE: O,
    THREAD_DELETE: O,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        R = r()(R)
            .filter((e) => e.guildId !== t.id)
            .keyBy("id")
            .value();
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = R[n];
        if (
            null == i ||
            0 ===
                r().remove(i.items, (e) => {
                    let { message: n } = e;
                    return n.id === t;
                }).length
        )
            return !1;
        (i.items = i.items.slice()), (R[n] = i);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = R[n];
        if (null == i) return !1;
        i.items = i.items.filter((e) => {
            let { message: n } = e;
            return !t.includes(n.id);
        });
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id,
            n = e.message.channel_id;
        if (null == n) return !1;
        let i = R[n];
        if (null == i) return !1;
        if (null == e.message.author) {
            let l = r().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            if (-1 === l) return;
            let { pinnedAt: s, message: a } = i.items[l],
                E = (0, o.IU)(a, e.message);
            if (E !== a) {
                let e = i.items.slice();
                (e[l] = { pinnedAt: s, message: E }), (R[n].items = e);
            }
            return;
        }
        if (e.message.pinned) {
            i.items = i.items.slice();
            let n = r().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            -1 === n
                ? i.items.unshift({ message: (0, o.rh)(e.message), pinnedAt: new Date() })
                : (i.items[n].message = (0, o.IU)(i.items[n].message, e.message));
            return;
        }
        let l = r().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === l) return !1;
        (i.items = i.items.slice()), i.items.splice(l, 1);
    },
    RELATIONSHIP_ADD: S,
    RELATIONSHIP_REMOVE: S,
    RELATIONSHIP_UPDATE: S,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = R[n];
        if (null == i) return !1;
        let l = r().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === l) return !1;
        (i.items = i.items.slice()), (i.items[l].message = (0, E.Td)(i.items[l].message));
    },
});
