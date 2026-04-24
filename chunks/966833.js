n.d(t, { A: () => I, e: () => A }), n(667532);
var i,
    r = n(735438),
    a = n.n(r),
    o = n(17928),
    s = n(228366),
    l = n(390248),
    c = n(320095),
    _ = n(773669),
    d = n(734057),
    u = n(696451),
    g = n(71393),
    m = n(232835),
    p = n(994500),
    h = n(287809),
    A =
        (((i = {}).LOADING = "LOADING"),
        (i.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
        (i.LOADED_FINISHED = "LOADING_FINISHED"),
        (i.FAILED = "FAILED"),
        i);
let f = {};
function E(e) {
    let { channel: t } = e;
    delete f[t.id];
}
function C() {
    a().forEach(f, (e) => {
        e.items.forEach((e) => {
            let { message: t } = e;
            t.set("blocked", p.A.isBlockedForMessage(t)), t.set("ignored", p.A.isIgnoredForMessage(t));
        }),
            (e.items = e.items.slice());
    });
}
class b extends o.Ay.Store {
    static displayName = "ChannelPinsStore";
    initialize() {
        this.waitFor(d.A, u.Ay, g.A, _.default, m.A, p.A, h.default);
    }
    getPins(e) {
        return f[e];
    }
}
let I = new b(s.h, {
    CONNECTION_OPEN: function () {
        f = {};
    },
    LOAD_PINNED_MESSAGES: function (e) {
        let { channelId: t, reset: n } = e;
        if (!n && null != f[t]) {
            f[t].state = "LOADING";
            return;
        }
        let i = d.A.getChannel(t)?.getGuildId() ?? void 0;
        f[t] = { id: t, items: [], state: "LOADING", guildId: i };
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, pins: n, hasMore: i } = e,
            r = f[t];
        if (null == r) return !1;
        let a = n.map((e) => {
            let { pinned_at: t, message: n } = e;
            return { pinnedAt: new Date(Date.parse(t)), message: (0, c.rh)(n) };
        });
        (r.items = [...r.items, ...a]), (r.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED");
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e,
            n = f[t];
        if (null == n) return !1;
        n.state = "FAILED";
    },
    CHANNEL_DELETE: E,
    THREAD_DELETE: E,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        f = a()(f)
            .filter((e) => e.guildId !== t.id)
            .keyBy("id")
            .value();
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = f[n];
        if (
            null == i ||
            0 ===
                a().remove(i.items, (e) => {
                    let { message: n } = e;
                    return n.id === t;
                }).length
        )
            return !1;
        (i.items = i.items.slice()), (f[n] = i);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = f[n];
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
        let i = f[n];
        if (null == i) return !1;
        if (null == e.message.author) {
            let r = a().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            if (-1 === r) return;
            let { pinnedAt: o, message: s } = i.items[r],
                l = (0, c.IU)(s, e.message);
            if (l !== s) {
                let e = i.items.slice();
                (e[r] = { pinnedAt: o, message: l }), (f[n].items = e);
            }
            return;
        }
        if (e.message.pinned) {
            i.items = i.items.slice();
            let n = a().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            -1 === n
                ? i.items.unshift({ message: (0, c.rh)(e.message), pinnedAt: new Date() })
                : (i.items[n].message = (0, c.IU)(i.items[n].message, e.message));
            return;
        }
        let r = a().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === r) return !1;
        (i.items = i.items.slice()), i.items.splice(r, 1);
    },
    RELATIONSHIP_ADD: C,
    RELATIONSHIP_REMOVE: C,
    RELATIONSHIP_UPDATE: C,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = f[n];
        if (null == i) return !1;
        let r = a().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === r) return !1;
        (i.items = i.items.slice()), (i.items[r].message = (0, l.Td)(i.items[r].message));
    },
});
