(n.d(t, { A: () => S }), n(321073));
var i = n(448761),
    r = n(855986),
    a = n(73153),
    s = n(435558),
    l = n.n(s),
    o = n(451988);
class d {
    _guildId;
    _pendingRequests = new Set();
    _sentRequests = new Set();
    _unacknowledgedRequests = new Set();
    _guildMemberExists;
    constructor(e, t) {
        ((this._guildId = e), (this._guildMemberExists = (n) => t(e, n)));
    }
    acknowledge(e) {
        let t = this._unacknowledgedRequests.delete(e);
        return (this._pendingRequests.delete(e), t);
    }
    isSettled(e) {
        return this._sentRequests.has(e) && !this._unacknowledgedRequests.has(e) && !this._pendingRequests.has(e);
    }
    flushRequests(e) {
        if (0 === this._pendingRequests.size) return;
        let t = [];
        (this._pendingRequests.forEach((e) => {
            this._guildMemberExists(e) || (this._unacknowledgedRequests.add(e), this._sentRequests.add(e), t.push(e));
        }),
            t.length > 0 && e(this._guildId, t),
            this._pendingRequests.clear());
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
var c = n(518782),
    u = n(734057),
    _ = n(696451),
    E = n(309010);
let A = new (class {
    _onChange;
    _guildMemberExists;
    _guildStates = {};
    _flush = new o.J_(0, () => this.flushRequests());
    constructor(e, t) {
        ((this._guildMemberExists = e), (this._onChange = t));
    }
    reset() {
        ((this._guildStates = {}), this._flush.cancel());
    }
    request(e, t) {
        !1 !== this._getGuildState(e).request(t) && this._flush.delay(!1);
    }
    acknowledge(e, t) {
        return this._getGuildState(e).acknowledge(t);
    }
    isSettled(e, t) {
        return this._guildStates[e]?.isSettled(t) ?? !1;
    }
    flushRequests() {
        l().forEach(this._guildStates, (e) => e.flushRequests(this._onChange));
    }
    requestUnacknowledged() {
        l().reduce(this._guildStates, (e, t) => !1 !== t.requestUnacknowledged() || e, !1) && this._flush.delay();
    }
    _getGuildState(e) {
        let t = this._guildStates[e];
        return (null == t && (t = this._guildStates[e] = new d(e, this._guildMemberExists)), t);
    }
    getDebugState(e) {
        let t = [],
            n = [],
            i = [];
        return (
            l().forEach(this._guildStates, (r) => {
                (r._pendingRequests.has(e) && t.push(r._guildId),
                    r._unacknowledgedRequests.has(e) && n.push(r._guildId),
                    r._sentRequests.has(e) && i.push(r._guildId));
            }),
            { pendingRequestGuildIds: t, unacknowledgedRequestGuildIds: n, sentRequestGuildIds: i }
        );
    }
})(_.Ay.isMember, (e, t) => {
    a.h.dispatch({ type: "GUILD_MEMBERS_REQUEST", guildIds: [e], userIds: t });
});
function h() {
    A.reset();
}
function f(e, t) {
    return (A.request(e, t), !1);
}
function I(e, t) {
    for (let n of (0, c.e7)(t.guild_space_data?.leaderboard)) f(e, n);
}
function p(e, t) {
    return (
        t.forEach((t) => {
            let { author: n, mentions: r } = t;
            (null != n && f(e, n.id), r?.forEach((t) => f(e, t.id)), t.type === i.l.GUILD_SPACE_MESSAGE && I(e, t));
        }),
        !1
    );
}
function m(e) {
    let { channelId: t, messages: n } = e,
        i = u.A.getChannel(t);
    return null != i && null != i.guild_id && p(i.guild_id, n);
}
function T(e) {
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
        p(t, i)
    );
}
class g extends r.Ay.Store {
    static displayName = "GuildMemberRequesterStore";
    initialize() {
        this.waitFor(u.A, _.Ay, E.Ay);
    }
    requestMember(e, t) {
        f(e, t);
    }
    isMemberRequestSettled(e, t) {
        return A.isSettled(e, t);
    }
    getDebugState(e) {
        return A.getDebugState(e);
    }
}
let S = new g(a.h, {
    CONNECTION_CLOSED: h,
    CONNECTION_OPEN: h,
    CONNECTION_RESUMED: function () {
        return (A.requestUnacknowledged(), !1);
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let e of t)
            (e.members.forEach((t) => {
                n = A.acknowledge(e.guildId, t.user.id) || n;
            }),
                null != e.notFound &&
                    e.notFound.forEach((t) => {
                        n = A.acknowledge(e.guildId, t) || n;
                    }));
        return n;
    },
    SEARCH_MESSAGES_SUCCESS: T,
    SMART_SEARCH_FETCH_SUCCESS: function (e) {
        let { smartSearchQuery: t, messages: n } = e;
        return p(t.guildId, n);
    },
    MOD_VIEW_SEARCH_MESSAGES_SUCCESS: T,
    LOCAL_MESSAGES_LOADED: m,
    LOAD_MESSAGES_SUCCESS: m,
    LOAD_MESSAGES_AROUND_SUCCESS: m,
    LOAD_RECENT_MENTIONS_SUCCESS: m,
    LOAD_PINNED_MESSAGES_SUCCESS: function (e) {
        let { pins: t, channelId: n } = e,
            i = u.A.getChannel(n);
        return (
            null != i &&
            null != i.guild_id &&
            p(
                i.guild_id,
                t.map((e) => {
                    let { message: t } = e;
                    return t;
                }),
            )
        );
    },
    MESSAGE_CREATE: function (e) {
        let { guildId: t, channelId: n, message: r } = e;
        if (n !== E.Ay.getCurrentlySelectedChannelId()) return !1;
        let a = t ?? u.A.getChannel(n)?.guild_id;
        return null != a && (r.type === i.l.GUILD_SPACE_MESSAGE && I(a, r), !1);
    },
    CONVERSATION_MESSAGES_FETCH_SUCCESS: function (e) {
        let { channelId: t, messages: n, messageReferences: i } = e,
            r = u.A.getChannel(t);
        return null != r && null != r.guild_id && p(r.guild_id, n.concat(i));
    },
    CHANNEL_CONVERSATIONS_FETCH_SUCCESS: function (e) {
        let { channelId: t, rawConversations: n } = e,
            i = u.A.getChannel(t);
        if (null == i || null == i.guild_id) return !1;
        let r = n
            .map((e) => {
                let { messages: t } = e;
                return t ?? [];
            })
            .flat();
        return p(i.guild_id, r);
    },
});
