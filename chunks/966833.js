i(667532);
var s,
    n = i(435558),
    l = i.n(n),
    r = i(855986),
    E = i(73153),
    a = i(519460),
    m = i(432005),
    d = i(773669),
    u = i(734057),
    A = i(696451),
    I = i(71393),
    c = i(596344),
    D = i(994500),
    o = i(287809),
    f =
        (((s = {}).LOADING = "LOADING"),
        (s.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
        (s.LOADED_FINISHED = "LOADING_FINISHED"),
        (s.FAILED = "FAILED"),
        s);
let N = {};
function _(e) {
    let { channel: t } = e;
    delete N[t.id];
}
function L() {
    l().forEach(N, (e) => {
        (e.items.forEach((e) => {
            let { message: t } = e;
            (t.set("blocked", D.A.isBlockedForMessage(t)), t.set("ignored", D.A.isIgnoredForMessage(t)));
        }),
            (e.items = e.items.slice()));
    });
}
class S extends r.Ay.Store {
    static displayName = "ChannelPinsStore";
    initialize() {
        this.waitFor(u.A, A.Ay, I.A, d.default, c.A, D.A, o.default);
    }
    getPins(e) {
        return N[e];
    }
}
let O = new S(E.h, {
    CONNECTION_OPEN: function () {
        N = {};
    },
    LOAD_PINNED_MESSAGES: function (e) {
        let { channelId: t, reset: i } = e;
        if (!i && null != N[t]) {
            N[t].state = "LOADING";
            return;
        }
        let s = u.A.getChannel(t)?.getGuildId() ?? void 0;
        N[t] = { id: t, items: [], state: "LOADING", guildId: s };
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, pins: i, hasMore: s } = e,
            n = N[t];
        if (null == n) return !1;
        let l = i.map((e) => {
            let { pinned_at: t, message: i } = e;
            return { pinnedAt: new Date(Date.parse(t)), message: (0, m.rh)(i) };
        });
        ((n.items = [...n.items, ...l]), (n.state = s ? "LOADED_HAS_MORE" : "LOADING_FINISHED"));
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e,
            i = N[t];
        if (null == i) return !1;
        i.state = "FAILED";
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
        let { id: t, channelId: i } = e,
            s = N[i];
        if (
            null == s ||
            0 ===
                l().remove(s.items, (e) => {
                    let { message: i } = e;
                    return i.id === t;
                }).length
        )
            return !1;
        ((s.items = s.items.slice()), (N[i] = s));
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: i } = e,
            s = N[i];
        if (null == s) return !1;
        s.items = s.items.filter((e) => {
            let { message: i } = e;
            return !t.includes(i.id);
        });
    },
    MESSAGE_UPDATE: function (e) {
        let t = e.message.id,
            i = e.message.channel_id;
        if (null == i) return !1;
        let s = N[i];
        if (null == s) return !1;
        if (null == e.message.author) {
            let n = l().findIndex(s.items, (e) => {
                let { message: i } = e;
                return i.id === t;
            });
            if (-1 === n) return;
            let { pinnedAt: r, message: E } = s.items[n],
                a = (0, m.IU)(E, e.message);
            if (a !== E) {
                let e = s.items.slice();
                ((e[n] = { pinnedAt: r, message: a }), (N[i].items = e));
            }
            return;
        }
        if (e.message.pinned) {
            s.items = s.items.slice();
            let i = l().findIndex(s.items, (e) => {
                let { message: i } = e;
                return i.id === t;
            });
            -1 === i
                ? s.items.unshift({ message: (0, m.rh)(e.message), pinnedAt: new Date() })
                : (s.items[i].message = (0, m.IU)(s.items[i].message, e.message));
            return;
        }
        let n = l().findIndex(s.items, (e) => {
            let { message: i } = e;
            return i.id === t;
        });
        if (-1 === n) return !1;
        ((s.items = s.items.slice()), s.items.splice(n, 1));
    },
    RELATIONSHIP_ADD: L,
    RELATIONSHIP_REMOVE: L,
    RELATIONSHIP_UPDATE: L,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: i } = e,
            s = N[i];
        if (null == s) return !1;
        let n = l().findIndex(s.items, (e) => {
            let { message: i } = e;
            return i.id === t;
        });
        if (-1 === n) return !1;
        ((s.items = s.items.slice()), (s.items[n].message = (0, a.T)(s.items[n].message)));
    },
});
i.d(t, {}, { A: O, e: f });
