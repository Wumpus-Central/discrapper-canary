"use strict";
n.d(t, { A: () => S, e: () => m }), n(667532);
var i,
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(228366),
    l = n(390248),
    u = n(320095),
    c = n(773669),
    d = n(734057),
    _ = n(696451),
    f = n(71393),
    h = n(232835),
    p = n(994500),
    E = n(287809),
    m =
        (((i = {}).LOADING = "LOADING"),
        (i.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
        (i.LOADED_FINISHED = "LOADING_FINISHED"),
        (i.FAILED = "FAILED"),
        i);
let g = {};
function A(e) {
    let { channel: t } = e;
    delete g[t.id];
}
function I() {
    s().forEach(g, (e) => {
        e.items.forEach((e) => {
            let { message: t } = e;
            t.set("blocked", p.A.isBlockedForMessage(t)), t.set("ignored", p.A.isIgnoredForMessage(t));
        }),
            (e.items = e.items.slice());
    });
}
class T extends a.Ay.Store {
    static displayName = "ChannelPinsStore";
    initialize() {
        this.waitFor(d.A, _.Ay, f.A, c.default, h.A, p.A, E.default);
    }
    getPins(e) {
        return g[e];
    }
}
let S = new T(o.h, {
    CONNECTION_OPEN: function () {
        g = {};
    },
    LOAD_PINNED_MESSAGES: function (e) {
        let { channelId: t, reset: n } = e;
        if (!n && null != g[t]) {
            g[t].state = "LOADING";
            return;
        }
        let i = d.A.getChannel(t)?.getGuildId() ?? void 0;
        g[t] = { id: t, items: [], state: "LOADING", guildId: i };
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, pins: n, hasMore: i } = e,
            r = g[t];
        if (null == r) return !1;
        let s = n.map((e) => {
            let { pinned_at: t, message: n } = e;
            return { pinnedAt: new Date(Date.parse(t)), message: (0, u.rh)(n) };
        });
        (r.items = [...r.items, ...s]), (r.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED");
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e,
            n = g[t];
        if (null == n) return !1;
        n.state = "FAILED";
    },
    CHANNEL_DELETE: A,
    THREAD_DELETE: A,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        g = s()(g)
            .filter((e) => e.guildId !== t.id)
            .keyBy("id")
            .value();
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = g[n];
        if (
            null == i ||
            0 ===
                s().remove(i.items, (e) => {
                    let { message: n } = e;
                    return n.id === t;
                }).length
        )
            return !1;
        (i.items = i.items.slice()), (g[n] = i);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = g[n];
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
        let i = g[n];
        if (null == i) return !1;
        if (null == e.message.author) {
            let r = s().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            if (-1 === r) return;
            let { pinnedAt: a, message: o } = i.items[r],
                l = (0, u.IU)(o, e.message);
            if (l !== o) {
                let e = i.items.slice();
                (e[r] = { pinnedAt: a, message: l }), (g[n].items = e);
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
                ? i.items.unshift({ message: (0, u.rh)(e.message), pinnedAt: new Date() })
                : (i.items[n].message = (0, u.IU)(i.items[n].message, e.message));
            return;
        }
        let r = s().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === r) return !1;
        (i.items = i.items.slice()), i.items.splice(r, 1);
    },
    RELATIONSHIP_ADD: I,
    RELATIONSHIP_REMOVE: I,
    RELATIONSHIP_UPDATE: I,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = g[n];
        if (null == i) return !1;
        let r = s().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === r) return !1;
        (i.items = i.items.slice()), (i.items[r].message = (0, l.Td)(i.items[r].message));
    },
});
