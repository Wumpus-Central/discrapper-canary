s.d(t, { A: () => g, e: () => D }), s(667532);
var i,
    n = s(735438),
    l = s.n(n),
    r = s(17928),
    a = s(228366),
    E = s(390248),
    d = s(320095),
    m = s(773669),
    u = s(734057),
    A = s(696451),
    c = s(71393),
    I = s(232835),
    o = s(994500),
    f = s(287809),
    D =
        (((i = {}).LOADING = "LOADING"),
        (i.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
        (i.LOADED_FINISHED = "LOADING_FINISHED"),
        (i.FAILED = "FAILED"),
        i);
let N = {};
function _(e) {
    let { channel: t } = e;
    delete N[t.id];
}
function h() {
    l().forEach(N, (e) => {
        e.items.forEach((e) => {
            let { message: t } = e;
            t.set("blocked", o.A.isBlockedForMessage(t)), t.set("ignored", o.A.isIgnoredForMessage(t));
        }),
            (e.items = e.items.slice());
    });
}
class L extends r.Ay.Store {
    static displayName = "ChannelPinsStore";
    initialize() {
        this.waitFor(u.A, A.Ay, c.A, m.default, I.A, o.A, f.default);
    }
    getPins(e) {
        return N[e];
    }
}
let g = new L(a.h, {
    CONNECTION_OPEN: function () {
        N = {};
    },
    LOAD_PINNED_MESSAGES: function (e) {
        let { channelId: t, reset: s } = e;
        if (!s && null != N[t]) {
            N[t].state = "LOADING";
            return;
        }
        let i = u.A.getChannel(t)?.getGuildId() ?? void 0;
        N[t] = { id: t, items: [], state: "LOADING", guildId: i };
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, pins: s, hasMore: i } = e,
            n = N[t];
        if (null == n) return !1;
        let l = s.map((e) => {
            let { pinned_at: t, message: s } = e;
            return { pinnedAt: new Date(Date.parse(t)), message: (0, d.rh)(s) };
        });
        (n.items = [...n.items, ...l]), (n.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED");
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e,
            s = N[t];
        if (null == s) return !1;
        s.state = "FAILED";
    },
    CHANNEL_DELETE: _,
    THREAD_DELETE: _,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        N = l()(N)
            .filter((e) => e.guildId !== t.id)
            .keyBy("id")
            .value();
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: s } = e,
            i = N[s];
        if (
            null == i ||
            0 ===
                l().remove(i.items, (e) => {
                    let { message: s } = e;
                    return s.id === t;
                }).length
        )
            return !1;
        (i.items = i.items.slice()), (N[s] = i);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: s } = e,
            i = N[s];
        if (null == i) return !1;
        i.items = i.items.filter((e) => {
            let { message: s } = e;
            return !t.includes(s.id);
        });
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id,
            s = e.message.channel_id;
        if (null == s) return !1;
        let i = N[s];
        if (null == i) return !1;
        if (null == e.message.author) {
            let n = l().findIndex(i.items, (e) => {
                let { message: s } = e;
                return s.id === t;
            });
            if (-1 === n) return;
            let { pinnedAt: r, message: a } = i.items[n],
                E = (0, d.IU)(a, e.message);
            if (E !== a) {
                let e = i.items.slice();
                (e[n] = { pinnedAt: r, message: E }), (N[s].items = e);
            }
            return;
        }
        if (e.message.pinned) {
            i.items = i.items.slice();
            let s = l().findIndex(i.items, (e) => {
                let { message: s } = e;
                return s.id === t;
            });
            -1 === s
                ? i.items.unshift({ message: (0, d.rh)(e.message), pinnedAt: new Date() })
                : (i.items[s].message = (0, d.IU)(i.items[s].message, e.message));
            return;
        }
        let n = l().findIndex(i.items, (e) => {
            let { message: s } = e;
            return s.id === t;
        });
        if (-1 === n) return !1;
        (i.items = i.items.slice()), i.items.splice(n, 1);
    },
    RELATIONSHIP_ADD: h,
    RELATIONSHIP_REMOVE: h,
    RELATIONSHIP_UPDATE: h,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: s } = e,
            i = N[s];
        if (null == i) return !1;
        let n = l().findIndex(i.items, (e) => {
            let { message: s } = e;
            return s.id === t;
        });
        if (-1 === n) return !1;
        (i.items = i.items.slice()), (i.items[n].message = (0, E.Td)(i.items[n].message));
    },
});
