"use strict";
n.d(t, { A: () => T }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(435558),
    s = n.n(a),
    l = n(451988);
class o {
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
class d {
    _onChange;
    _guildMemberExists;
    _guildStates = {};
    _flush = new l.J_(0, () => this.flushRequests());
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
        s().forEach(this._guildStates, (e) => e.flushRequests(this._onChange));
    }
    requestUnacknowledged() {
        s().reduce(this._guildStates, (e, t) => !1 !== t.requestUnacknowledged() || e, !1) && this._flush.delay();
    }
    _getGuildState(e) {
        let t = this._guildStates[e];
        return null == t && (t = this._guildStates[e] = new o(e, this._guildMemberExists)), t;
    }
    getDebugState(e) {
        let t = [],
            n = [],
            i = [];
        return (
            s().forEach(this._guildStates, (r) => {
                r._pendingRequests.has(e) && t.push(r._guildId),
                    r._unacknowledgedRequests.has(e) && n.push(r._guildId),
                    r._sentRequests.has(e) && i.push(r._guildId);
            }),
            { pendingRequestGuildIds: t, unacknowledgedRequestGuildIds: n, sentRequestGuildIds: i }
        );
    }
}
var c = n(734057),
    u = n(696451);
let _ = new d(u.Ay.isMember, (e, t) => {
    r.h.dispatch({ type: "GUILD_MEMBERS_REQUEST", guildIds: [e], userIds: t });
});
function E() {
    _.reset();
}
function A(e, t) {
    return _.request(e, t), !1;
}
function h(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: i } = t;
            null != n && A(e, n.id), i?.forEach((t) => A(e, t.id));
        }),
        !1
    );
}
function I(e) {
    let { channelId: t, messages: n } = e,
        i = c.A.getChannel(t);
    return null != i && null != i.guild_id && h(i.guild_id, n);
}
function f(e) {
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
        h(t, i)
    );
}
class p extends i.Ay.Store {
    static displayName = "GuildMemberRequesterStore";
    initialize() {
        this.waitFor(c.A, u.Ay);
    }
    requestMember(e, t) {
        A(e, t);
    }
    getDebugState(e) {
        return _.getDebugState(e);
    }
}
let T = new p(r.h, {
    CONNECTION_CLOSED: E,
    CONNECTION_OPEN: E,
    CONNECTION_RESUMED: function () {
        return _.requestUnacknowledged(), !1;
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e;
        for (let e of t)
            e.members.forEach((t) => {
                _.acknowledge(e.guildId, t.user.id);
            }),
                null != e.notFound && e.notFound.forEach((t) => _.acknowledge(e.guildId, t));
        return !1;
    },
    SEARCH_MESSAGES_SUCCESS: f,
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: f,
    LOCAL_MESSAGES_LOADED: I,
    LOAD_MESSAGES_SUCCESS: I,
    LOAD_MESSAGES_AROUND_SUCCESS: I,
    LOAD_RECENT_MENTIONS_SUCCESS: I,
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { pins: t, channelId: n } = e,
            i = c.A.getChannel(n);
        return (
            null != i &&
            null != i.guild_id &&
            h(
                i.guild_id,
                t.map((e) => {
                    let { message: t } = e;
                    return t;
                }),
            )
        );
    },
    CONVERSATION_FETCH_SUCCESS: function (e) {
        let { channelId: t, messages: n, messageReferences: i } = e,
            r = c.A.getChannel(t);
        return null != r && null != r.guild_id && h(r.guild_id, n.concat(i));
    },
    CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let { channelId: t, rawConversations: n } = e,
            i = c.A.getChannel(t);
        if (null == i || null == i.guild_id) return !1;
        let r = n
            .map((e) => {
                let { messages: t } = e;
                return t ?? [];
            })
            .flat();
        return h(i.guild_id, r);
    },
});
