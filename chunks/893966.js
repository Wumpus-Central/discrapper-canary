n.d(t, { Z: () => J }), n(47120), n(653041);
var r,
    i = n(442837),
    o = n(570140),
    a = n(314897),
    s = n(271383),
    l = n(430824),
    c = n(594174),
    u = n(823379),
    d = n(709054),
    f = n(752560),
    _ = n(588215),
    p = n(44715),
    h = n(327999),
    m = n(981631);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = !1,
    b = {};
function y(e) {
    return null == b[e] && (b[e] = new f.P(e)), b[e];
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    y(e).reset(t);
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    for (let t in b) v(t, e);
}
function I(e) {
    let { guild: t } = e,
        n = y(t.id);
    v(t.id, n.isInitialized);
}
function S(e) {
    let {
        guild: { id: t }
    } = e;
    v(t);
}
function T() {
    return !1;
}
function N(e) {
    let { guildId: t, userIds: n } = e;
    return y(t).updateMembersByMemberIds(n);
}
function A(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = y(e.guildId).updateServerMembers(e.members) || n;
    return n;
}
function C(e) {
    let { guildId: t } = e,
        n = a.default.getId();
    return y(t).updateMembersByMemberIds([n]);
}
function R(e) {
    let { guildId: t, user: n } = e;
    return y(t).removeMember(n.id);
}
function P(e) {
    let t = !1,
        n = y(e.guildId);
    return 'GUILD_ROLE_DELETE' === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t;
}
function w(e) {
    let { guildId: t, userId: n } = e;
    return y(t).updateMembersByMemberIds([n]);
}
function D(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = y(t),
        i = n.reduce((e, t) => {
            if (null != t.member) {
                let n = t.member.user.id;
                e.push(n);
            }
            return e;
        }, []);
    return r.updateMembersByMemberIds(i);
}
function L(e) {
    let { guildId: t, addedMembers: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = y(t),
        i = n.reduce((e, t) => {
            let n = t.userId;
            return e.push(n), e;
        }, []);
    return r.updateMembersByMemberIds(i);
}
function x(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = y(t),
        i = n.reduce((e, t) => {
            let n = t.userId;
            return e.push(n), e;
        }, []);
    return r.updateMembersByMemberIds(i);
}
function M(e) {
    let { guildId: t, threads: n } = e,
        r = Object.values(n);
    if (0 === r.length) return !1;
    let i = y(t),
        o = r.reduce((e, t) => {
            if (null != t.owner) {
                let n = t.owner.user.id;
                e.push(n);
            }
            return e;
        }, []);
    return i.updateMembersByMemberIds(o);
}
function k(e) {
    let { guildId: t, guildMember: n } = e;
    return y(t).updateMembersByMemberIds([n.user.id]);
}
function j(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, members: r } = e;
            t = y(n).updateServerMembers(r) || t;
        }),
        t
    );
}
function U(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, activity_instances: r } = e,
                i = y(n),
                o = [];
            null == r ||
                r.forEach((e) => {
                    var t;
                    null == (t = e.participants) ||
                        t.forEach((e) => {
                            (0, u.lm)(e.member) && o.push(e.member);
                        });
                }),
                (t = i.updateServerMembers(o) || t);
        }),
        t
    );
}
function G(e) {
    return E ? (E = !1) : O(!0), j(e);
}
function B(e) {
    return U(e);
}
function F(e) {
    let { guildMembers: t } = e,
        n = !1;
    return (
        (E = !0),
        d.default.entries(t).forEach((e) => {
            let [t, r] = e;
            n = y(t).updateClientMembers(Object.values(r)) || n;
        }),
        n
    );
}
function V(e) {
    let { guildId: t, members: n } = e;
    if (null == t || null == l.Z.getGuild(t)) return !1;
    E = !0;
    let r = y(t),
        i = [];
    for (let e of n) null == r.getMember(e.userId) && i.push(e);
    return i.length > 0 && r.updateClientMembers(i);
}
function Z(e) {
    let { members: t, guildId: n } = e;
    return t.length > 0 && y(n).updateServerMembers(t);
}
function H(e) {
    let { guildId: t } = e;
    return y(t).initialize();
}
function W(e) {
    let { guildId: t } = e;
    return y(t).refreshNewMembersAndSearchResults();
}
function Y(e) {
    let { guildId: t, pagination: n } = e,
        [r] = y(t).updatePaginationState(n);
    return r;
}
function K(e) {
    let { guildId: t, continuationToken: n } = e;
    return y(t).updatePaginationToken(n);
}
function z(e) {
    let { guildId: t, searchState: n } = e;
    return y(t).updateSearchState(n);
}
function q(e) {
    let { guildId: t, memberSupplementals: n } = e,
        r = (0, p.Qu)(t, n);
    return r && y(t).updateMembersByMemberIds(n.map((e) => e.userId)), r;
}
function Q(e) {
    var t, n, r, i, o, a;
    let s,
        l,
        { guildId: c, members: u, total_result_count: d } = e,
        f = y(c),
        { memberIds: g, memberSupplementals: E } = u.reduce(
            (e, t) => {
                let { member: n, source_invite_code: r, join_source_type: i, inviter_id: o } = t,
                    a = n.user;
                return (
                    e.memberIds.push(a.id),
                    e.memberSupplementals.push({
                        userId: a.id,
                        sourceInviteCode: r,
                        joinSourceType: i,
                        inviterId: o
                    }),
                    e
                );
            },
            {
                memberIds: [],
                memberSupplementals: []
            }
        ),
        b = (0, p.Qu)(c, E);
    (0, h.nf)(c, g);
    let v = f.updateSearchedMembersByMemberIds(g);
    u.length > 0 && ((s = u[0]), (l = u[u.length - 1]));
    let [O] = f.updatePaginationState(
        {
            totalResultsCount: d,
            elasticSearchCursor: {
                before: (0, _.si)({
                    joinedAt: null == s || null == (t = s.member) ? void 0 : t.joined_at,
                    userId: null != (o = null == s || null == (n = s.member) ? void 0 : n.user.id) ? o : m.lds
                }),
                after: (0, _.si)({
                    joinedAt: null == l || null == (r = l.member) ? void 0 : r.joined_at,
                    userId: null != (a = null == l || null == (i = l.member) ? void 0 : i.user.id) ? a : m.lds
                })
            }
        },
        !1
    );
    return b || v || O;
}
class X extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.default, s.ZP, c.default);
    }
    isInitialized(e) {
        return y(e).isInitialized;
    }
    getMembersByGuildId(e, t) {
        return y(e).getMembersByIndex(t);
    }
    getMembersCountByGuildId(e, t) {
        return y(e).countMembersByIndex(t);
    }
    getEstimatedMemberSearchCountByGuildId(e) {
        let t = y(e),
            n = t.searchChunkSize,
            r = t.countMembersByIndex(t.getSearchIndex()),
            i = t.getTotalResultsCount();
        return null == i || i < n ? r : i;
    }
    getKnownMemberSearchCountByGuildId(e) {
        let t = y(e);
        return t.countMembersByIndex(t.getSearchIndex());
    }
    getCurrentMemberSearchResultsByGuildId(e) {
        let t = y(e);
        return t.getMembersByIndex(t.getSearchIndex());
    }
    getSearchStateByGuildId(e) {
        return y(e).getSearchState();
    }
    hasDefaultSearchStateByGuildId(e) {
        return y(e).hasDefaultSearchState();
    }
    getPagedMembersByGuildId(e) {
        return y(e).getPaginatedMembers();
    }
    getPaginationStateByGuildId(e) {
        return y(e).getPaginationState();
    }
    getElasticSearchPaginationByGuildId(e) {
        return y(e).getElasticSearchPagination();
    }
    getEnhancedMember(e, t) {
        return y(e).getMember(t);
    }
    getNewMemberTimestamp(e) {
        return y(e).getNewMemberTimestamp();
    }
    getLastRefreshTimestamp(e) {
        return y(e).lastRefreshTimestamp;
    }
    getLastCursorTimestamp(e) {
        return y(e).lastCursorTimestamp;
    }
}
g(X, 'displayName', 'MemberSafetyStore');
let J = new X(o.Z, {
    CONNECTION_OPEN: G,
    CONNECTION_OPEN_SUPPLEMENTAL: B,
    LOCAL_MESSAGES_LOADED: V,
    CACHE_LOADED: F,
    PASSIVE_UPDATE_V2: Z,
    GUILD_CREATE: I,
    GUILD_DELETE: S,
    GUILD_MEMBERS_CHUNK_BATCH: A,
    GUILD_MEMBER_ADD: T,
    GUILD_MEMBER_UPDATE: T,
    GUILD_MEMBER_UPDATE_LOCAL: C,
    GUILD_MEMBER_REMOVE: R,
    GUILD_ROLE_UPDATE: P,
    GUILD_ROLE_DELETE: P,
    GUILD_MEMBER_PROFILE_UPDATE: k,
    GUILD_ROLE_MEMBER_REMOVE: w,
    GUILD_ROLE_MEMBER_ADD: w,
    THREAD_MEMBER_LIST_UPDATE: D,
    THREAD_MEMBERS_UPDATE: L,
    LOAD_ARCHIVED_THREADS_SUCCESS: x,
    LOAD_FORUM_POSTS: M,
    INITIALIZE_MEMBER_SAFETY_STORE: H,
    MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: W,
    MEMBER_SAFETY_PAGINATION_UPDATE: Y,
    MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: K,
    MEMBER_SAFETY_SEARCH_STATE_UPDATE: z,
    FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: q,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: Q,
    MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: N
});
