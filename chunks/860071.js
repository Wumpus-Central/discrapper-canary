"use strict";
n.d(t, { A: () => I }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(735438),
    a = n.n(s),
    o = n(451988);
class l {
    _guildId;
    _pendingRequests = new Set();
    _sentRequests = new Set();
    _unacknowledgedRequests = new Set();
    _guildMemberExists;
    constructor(e, t) {
        (this._guildId = e), (this._guildMemberExists = (n) => t(e, n));
    }
    acknowledge(e) {
        this._unacknowledgedRequests.delete(e), this._pendingRequests.delete(e);
    }
    flushRequests(e) {
        if (0 === this._pendingRequests.size) return;
        let t = [];
        this._pendingRequests.forEach((e) => {
            this._guildMemberExists(e) || (this._unacknowledgedRequests.add(e), this._sentRequests.add(e), t.push(e));
        }),
            t.length > 0 && e(this._guildId, t),
            this._pendingRequests.clear();
    }
    requestUnacknowledged() {
        return (
            0 !== this._unacknowledgedRequests.size &&
            (this._unacknowledgedRequests.forEach((e) => {
                this._guildMemberExists(e) ? this._unacknowledgedRequests.delete(e) : this._pendingRequests.add(e);
            }),
            0 !== this._pendingRequests.size && void 0)
        );
    }
    request(e) {
        if (this._guildMemberExists(e) || this._sentRequests.has(e) || this._pendingRequests.has(e)) return !1;
        this._pendingRequests.add(e);
    }
}
class _ {
    _onChange;
    _guildMemberExists;
    _guildStates = {};
    _flush = new o.J_(0, () => this.flushRequests());
    constructor(e, t) {
        (this._guildMemberExists = e), (this._onChange = t);
    }
    reset() {
        (this._guildStates = {}), this._flush.cancel();
    }
    request(e, t) {
        !1 !== this._getGuildState(e).request(t) && this._flush.delay(!1);
    }
    acknowledge(e, t) {
        this._getGuildState(e).acknowledge(t);
    }
    flushRequests() {
        a().forEach(this._guildStates, (e) => e.flushRequests(this._onChange));
    }
    requestUnacknowledged() {
        a().reduce(this._guildStates, (e, t) => !1 !== t.requestUnacknowledged() || e, !1) && this._flush.delay();
    }
    _getGuildState(e) {
        let t = this._guildStates[e];
        return null == t && (t = this._guildStates[e] = new l(e, this._guildMemberExists)), t;
    }
    getDebugState(e) {
        let t = [],
            n = [],
            i = [];
        return (
            a().forEach(this._guildStates, (r) => {
                r._pendingRequests.has(e) && t.push(r._guildId),
                    r._unacknowledgedRequests.has(e) && n.push(r._guildId),
                    r._sentRequests.has(e) && i.push(r._guildId);
            }),
            { pendingRequestGuildIds: t, unacknowledgedRequestGuildIds: n, sentRequestGuildIds: i }
        );
    }
}
var d = n(734057),
    u = n(696451);
let c = new _(u.Ay.isMember, (e, t) => {
    r.h.dispatch({ type: "GUILD_MEMBERS_REQUEST", guildIds: [e], userIds: t });
});
function E() {
    c.reset();
}
function h(e, t) {
    return c.request(e, t), !1;
}
function m(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: i } = t;
            null != n && h(e, n.id), i?.forEach((t) => h(e, t.id));
        }),
        !1
    );
}
function f(e) {
    let { channelId: t, messages: n } = e,
        i = d.A.getChannel(t);
    return null != i && null != i.guild_id && m(i.guild_id, n);
}
function g(e) {
    let { guildId: t, data: n } = e;
    if (null == t) return !1;
    let i = [];
    return (
        n.forEach((e) => {
            let { messages: t } = e;
            t.forEach((e) => {
                e.forEach((e) => {
                    i.push(e);
                });
            });
        }),
        m(t, i)
    );
}
class A extends i.Ay.Store {
    static displayName = "GuildMemberRequesterStore";
    initialize() {
        this.waitFor(d.A, u.Ay);
    }
    requestMember(e, t) {
        h(e, t);
    }
    getDebugState(e) {
        return c.getDebugState(e);
    }
}
let I = new A(r.h, {
    CONNECTION_CLOSED: E,
    CONNECTION_OPEN: E,
    CONNECTION_RESUMED: function () {
        return c.requestUnacknowledged(), !1;
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e;
        for (let e of t)
            e.members.forEach((t) => {
                c.acknowledge(e.guildId, t.user.id);
            }),
                null != e.notFound && e.notFound.forEach((t) => c.acknowledge(e.guildId, t));
        return !1;
    },
    SEARCH_MESSAGES_SUCCESS: g,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: g,
    LOCAL_MESSAGES_LOADED: f,
    LOAD_MESSAGES_SUCCESS: f,
    LOAD_MESSAGES_AROUND_SUCCESS: f,
    LOAD_RECENT_MENTIONS_SUCCESS: f,
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { pins: t, channelId: n } = e,
            i = d.A.getChannel(n);
        return (
            null != i &&
            null != i.guild_id &&
            m(
                i.guild_id,
                t.map((e) => {
                    let { message: t } = e;
                    return t;
                }),
            )
        );
    },
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { channelId: t, messages: n } = e,
            i = d.A.getChannel(t);
        return null != i && null != i.guild_id && m(i.guild_id, n);
    },
});
