n.d(t, { A: () => N, e: () => p }), n(667532);
var i,
    l = n(735438),
    s = n.n(l),
    r = n(311907),
    a = n(73153),
    c = n(390248),
    o = n(141468),
    d = n(773669),
    u = n(734057),
    A = n(696451),
    E = n(71393),
    m = n(320501),
    f = n(994500),
    g = n(287809),
    p =
        (((i = {}).LOADING = "LOADING"),
        (i.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
        (i.LOADED_FINISHED = "LOADING_FINISHED"),
        (i.FAILED = "FAILED"),
        i);
let D = {};
function _(e) {
    let { channel: t } = e;
    delete D[t.id];
}
function I() {
    s().forEach(D, (e) => {
        e.items.forEach((e) => {
            let { message: t } = e;
            t.set("blocked", f.A.isBlockedForMessage(t)), t.set("ignored", f.A.isIgnoredForMessage(t));
        }),
            (e.items = e.items.slice());
    });
}
class S extends r.Ay.Store {
    static displayName = "ChannelPinsStore";
    initialize() {
        this.waitFor(u.A, A.Ay, E.A, d.default, m.A, f.A, g.default);
    }
    getPins(e) {
        return D[e];
    }
}
let N = new S(a.h, {
    CONNECTION_OPEN: function () {
        D = {};
    },
    LOAD_PINNED_MESSAGES: function (e) {
        let { channelId: t, reset: n } = e;
        if (!n && null != D[t]) {
            D[t].state = "LOADING";
            return;
        }
        let i = u.A.getChannel(t)?.getGuildId() ?? void 0;
        D[t] = { id: t, items: [], state: "LOADING", guildId: i };
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, pins: n, hasMore: i } = e,
            l = D[t];
        if (null == l) return !1;
        let s = n.map((e) => {
            let { pinned_at: t, message: n } = e;
            return { pinnedAt: new Date(Date.parse(t)), message: (0, o.rh)(n) };
        });
        (l.items = [...l.items, ...s]), (l.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED");
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e,
            n = D[t];
        if (null == n) return !1;
        n.state = "FAILED";
    },
    CHANNEL_DELETE: _,
    THREAD_DELETE: _,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        D = s()(D)
            .filter((e) => e.guildId !== t.id)
            .keyBy("id")
            .value();
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = D[n];
        if (
            null == i ||
            0 ===
                s().remove(i.items, (e) => {
                    let { message: n } = e;
                    return n.id === t;
                }).length
        )
            return !1;
        (i.items = i.items.slice()), (D[n] = i);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = D[n];
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
        let i = D[n];
        if (null == i) return !1;
        if (null == e.message.author) {
            let l = s().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            if (-1 === l) return;
            let { pinnedAt: r, message: a } = i.items[l],
                c = (0, o.IU)(a, e.message);
            if (c !== a) {
                let e = i.items.slice();
                (e[l] = { pinnedAt: r, message: c }), (D[n].items = e);
            }
            return;
        }
        if (e.message.pinned) {
            i.items = i.items.slice();
            let n = s().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            -1 === n
                ? i.items.unshift({ message: (0, o.rh)(e.message), pinnedAt: new Date() })
                : (i.items[n].message = (0, o.IU)(i.items[n].message, e.message));
            return;
        }
        let l = s().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === l) return !1;
        (i.items = i.items.slice()), i.items.splice(l, 1);
    },
    RELATIONSHIP_ADD: I,
    RELATIONSHIP_REMOVE: I,
    RELATIONSHIP_UPDATE: I,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = D[n];
        if (null == i) return !1;
        let l = s().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === l) return !1;
        (i.items = i.items.slice()), (i.items[l].message = (0, c.Td)(i.items[l].message));
    },
});
