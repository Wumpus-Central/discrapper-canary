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
    p = n(588215),
    _ = n(44715),
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
    v = {};
function b(e) {
    return null == v[e] && (v[e] = new f.P(e)), v[e];
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    b(e).reset(t);
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    for (let t in v) y(t, e);
}
function S(e) {
    let { guild: t } = e,
        n = b(t.id);
    y(t.id, n.isInitialized);
}
function I(e) {
    let {
        guild: { id: t }
    } = e;
    y(t);
}
function T() {
    return !1;
}
function N(e) {
    let { guildId: t, userIds: n } = e;
    return b(t).updateMembersByMemberIds(n);
}
function A(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = b(e.guildId).updateServerMembers(e.members) || n;
    return n;
}
function C(e) {
    let { guildId: t } = e,
        n = a.default.getId();
    return b(t).updateMembersByMemberIds([n]);
}
function R(e) {
    let { guildId: t, user: n } = e;
    return b(t).removeMember(n.id);
}
function P(e) {
    let t = !1,
        n = b(e.guildId);
    return 'GUILD_ROLE_DELETE' === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t;
}
function w(e) {
    let { guildId: t, userId: n } = e;
    return b(t).updateMembersByMemberIds([n]);
}
function D(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = b(t),
        i = n.reduce((e, t) => {
            if (null != t.member) {
                let n = t.member.user.id;
                e.push(n);
            }
            return e;
        }, []);
    return r.updateMembersByMemberIds(i);
}
function x(e) {
    let { guildId: t, addedMembers: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = b(t),
        i = n.reduce((e, t) => {
            let n = t.userId;
            return e.push(n), e;
        }, []);
    return r.updateMembersByMemberIds(i);
}
function L(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = b(t),
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
    let i = b(t),
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
    return b(t).updateMembersByMemberIds([n.user.id]);
}
function j(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, members: r } = e;
            t = b(n).updateServerMembers(r) || t;
        }),
        t
    );
}
function U(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, activity_instances: r } = e,
                i = b(n),
                o = [];
            null == r ||
                r.forEach((e) => {
                    var t;
                    null === (t = e.participants) ||
                        void 0 === t ||
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
function Z(e) {
    let { guildMembers: t } = e,
        n = !1;
    return (
        (E = !0),
        d.default.entries(t).forEach((e) => {
            let [t, r] = e;
            n = b(t).updateClientMembers(Object.values(r)) || n;
        }),
        n
    );
}
function F(e) {
    let { guildId: t, members: n } = e;
    if (null == t || null == l.Z.getGuild(t)) return !1;
    E = !0;
    let r = b(t),
        i = [];
    for (let e of n) null == r.getMember(e.userId) && i.push(e);
    return i.length > 0 && r.updateClientMembers(i);
}
function V(e) {
    let { members: t, guildId: n } = e;
    return t.length > 0 && b(n).updateServerMembers(t);
}
function H(e) {
    let { guildId: t } = e;
    return b(t).initialize();
}
function W(e) {
    let { guildId: t } = e;
    return b(t).refreshNewMembersAndSearchResults();
}
function Y(e) {
    let { guildId: t, pagination: n } = e,
        [r] = b(t).updatePaginationState(n);
    return r;
}
function K(e) {
    let { guildId: t, continuationToken: n } = e;
    return b(t).updatePaginationToken(n);
}
function z(e) {
    let { guildId: t, searchState: n } = e;
    return b(t).updateSearchState(n);
}
function q(e) {
    let { guildId: t, memberSupplementals: n } = e,
        r = (0, _.Qu)(t, n);
    return r && b(t).updateMembersByMemberIds(n.map((e) => e.userId)), r;
}
function Q(e) {
    var t, n, r, i, o, a;
    let s, l;
    let { guildId: c, members: u, total_result_count: d } = e,
        f = b(c),
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
        v = (0, _.Qu)(c, E);
    (0, h.nf)(c, g);
    let y = f.updateSearchedMembersByMemberIds(g);
    u.length > 0 && ((s = u[0]), (l = u[u.length - 1]));
    let [O] = f.updatePaginationState(
        {
            totalResultsCount: d,
            elasticSearchCursor: {
                before: (0, p.si)({
                    joinedAt: null == s ? void 0 : null === (t = s.member) || void 0 === t ? void 0 : t.joined_at,
                    userId: null !== (o = null == s ? void 0 : null === (n = s.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== o ? o : m.lds
                }),
                after: (0, p.si)({
                    joinedAt: null == l ? void 0 : null === (r = l.member) || void 0 === r ? void 0 : r.joined_at,
                    userId: null !== (a = null == l ? void 0 : null === (i = l.member) || void 0 === i ? void 0 : i.user.id) && void 0 !== a ? a : m.lds
                })
            }
        },
        !1
    );
    return v || y || O;
}
class X extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.default, s.ZP, c.default);
    }
    isInitialized(e) {
        return b(e).isInitialized;
    }
    getMembersByGuildId(e, t) {
        return b(e).getMembersByIndex(t);
    }
    getMembersCountByGuildId(e, t) {
        return b(e).countMembersByIndex(t);
    }
    getEstimatedMemberSearchCountByGuildId(e) {
        let t = b(e),
            n = t.searchChunkSize,
            r = t.countMembersByIndex(t.getSearchIndex()),
            i = t.getTotalResultsCount();
        return null == i || i < n ? r : i;
    }
    getKnownMemberSearchCountByGuildId(e) {
        let t = b(e);
        return t.countMembersByIndex(t.getSearchIndex());
    }
    getCurrentMemberSearchResultsByGuildId(e) {
        let t = b(e);
        return t.getMembersByIndex(t.getSearchIndex());
    }
    getSearchStateByGuildId(e) {
        return b(e).getSearchState();
    }
    hasDefaultSearchStateByGuildId(e) {
        return b(e).hasDefaultSearchState();
    }
    getPagedMembersByGuildId(e) {
        return b(e).getPaginatedMembers();
    }
    getPaginationStateByGuildId(e) {
        return b(e).getPaginationState();
    }
    getElasticSearchPaginationByGuildId(e) {
        return b(e).getElasticSearchPagination();
    }
    getEnhancedMember(e, t) {
        return b(e).getMember(t);
    }
    getNewMemberTimestamp(e) {
        return b(e).getNewMemberTimestamp();
    }
    getLastRefreshTimestamp(e) {
        return b(e).lastRefreshTimestamp;
    }
    getLastCursorTimestamp(e) {
        return b(e).lastCursorTimestamp;
    }
}
g(X, 'displayName', 'MemberSafetyStore');
let J = new X(o.Z, {
    CONNECTION_OPEN: G,
    CONNECTION_OPEN_SUPPLEMENTAL: B,
    LOCAL_MESSAGES_LOADED: F,
    CACHE_LOADED: Z,
    PASSIVE_UPDATE_V2: V,
    GUILD_CREATE: S,
    GUILD_DELETE: I,
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
    THREAD_MEMBERS_UPDATE: x,
    LOAD_ARCHIVED_THREADS_SUCCESS: L,
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
