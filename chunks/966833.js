n.d(t, {
    A: () => O,
    e: () => _,
}),
    n(896048),
    n(667532);
var i,
    l,
    r,
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    u = n(73153),
    c = n(390248),
    d = n(141468),
    E = n(773669),
    A = n(734057),
    f = n(696451),
    m = n(71393),
    D = n(320501),
    g = n(994500),
    p = n(287809),
    _ =
        (((l = {}).LOADING = "LOADING"),
        (l.LOADED_HAS_MORE = "LOADED_HAS_MORE"),
        (l.LOADED_FINISHED = "LOADING_FINISHED"),
        (l.FAILED = "FAILED"),
        l);
let S = {};

function I(e) {
    let { channel: t } = e;
    delete S[t.id];
}

function N() {
    a().forEach(S, (e) => {
        e.items.forEach((e) => {
            let { message: t } = e;
            t.set("blocked", g.A.isBlockedForMessage(t)), t.set("ignored", g.A.isIgnoredForMessage(t));
        }),
            (e.items = e.items.slice());
    });
}
class h extends (i = o.Ay.Store) {
    initialize() {
        this.waitFor(A.A, f.Ay, m.A, E.default, D.A, g.A, p.default);
    }
    getPins(e) {
        return S[e];
    }
}
(r = "displayName") in h
    ? Object.defineProperty(h, r, {
          value: "ChannelPinsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[r] = "ChannelPinsStore");
let O = new h(u.h, {
    CONNECTION_OPEN: function () {
        S = {};
    },
    LOAD_PINNED_MESSAGES: function (e) {
        var t, n;
        let { channelId: i, reset: l } = e;
        if (!l && null != S[i]) {
            S[i].state = "LOADING";
            return;
        }
        let r = null != (t = null == (n = A.A.getChannel(i)) ? void 0 : n.getGuildId()) ? t : void 0;
        S[i] = {
            id: i,
            items: [],
            state: "LOADING",
            guildId: r,
        };
    },
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { channelId: t, pins: n, hasMore: i } = e,
            l = S[t];
        if (null == l) return !1;
        let r = n.map((e) => {
            let { pinned_at: t, message: n } = e;
            return {
                pinnedAt: new Date(Date.parse(t)),
                message: (0, d.rh)(n),
            };
        });
        (l.items = [...l.items, ...r]), (l.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED");
    },
    LOAD_PINNED_MESSAGES_FAILURE: function (e) {
        let { channelId: t } = e,
            n = S[t];
        if (null == n) return !1;
        n.state = "FAILED";
    },
    CHANNEL_DELETE: I,
    THREAD_DELETE: I,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        S = a()(S)
            .filter((e) => e.guildId !== t.id)
            .keyBy("id")
            .value();
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e,
            i = S[n];
        if (
            null == i ||
            0 ===
                a().remove(i.items, (e) => {
                    let { message: n } = e;
                    return n.id === t;
                }).length
        )
            return !1;
        (i.items = i.items.slice()), (S[n] = i);
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e,
            i = S[n];
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
        let i = S[n];
        if (null == i) return !1;
        if (null == e.message.author) {
            let l = a().findIndex(i.items, (e) => {
                let { message: n } = e;
                return n.id === t;
            });
            if (-1 === l) return;
            let { pinnedAt: r, message: s } = i.items[l],
                o = (0, d.IU)(s, e.message);
            if (o !== s) {
                let e = i.items.slice();
                (e[l] = {
                    pinnedAt: r,
                    message: o,
                }),
                    (S[n].items = e);
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
                ? i.items.unshift({
                      message: (0, d.rh)(e.message),
                      pinnedAt: new Date(),
                  })
                : (i.items[n].message = (0, d.IU)(i.items[n].message, e.message));
            return;
        }
        let l = a().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === l) return !1;
        (i.items = i.items.slice()), i.items.splice(l, 1);
    },
    RELATIONSHIP_ADD: N,
    RELATIONSHIP_REMOVE: N,
    RELATIONSHIP_UPDATE: N,
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let { messageId: t, channelId: n } = e,
            i = S[n];
        if (null == i) return !1;
        let l = a().findIndex(i.items, (e) => {
            let { message: n } = e;
            return n.id === t;
        });
        if (-1 === l) return !1;
        (i.items = i.items.slice()), (i.items[l].message = (0, c.Td)(i.items[l].message));
    },
});
