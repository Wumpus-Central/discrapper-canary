var i,
    a = r(47120);
var o = r(724458);
var s = r(653041);
var l = r(442837),
    u = r(570140),
    c = r(314897),
    d = r(271383),
    f = r(430824),
    p = r(594174),
    h = r(823379),
    _ = r(709054),
    m = r(752560),
    g = r(588215),
    E = r(44715),
    v = r(327999),
    y = r(981631);
function b(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let I = !1,
    T = {};
function S(e) {
    return null == T[e] && (T[e] = new m.P(e)), T[e];
}
function A(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    S(e).reset(n);
}
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    for (let n in T) A(n, e);
}
function N(e) {
    let { guild: n } = e,
        r = S(n.id);
    A(n.id, r.isInitialized);
}
function R(e) {
    let {
        guild: { id: n }
    } = e;
    A(n);
}
function O() {
    return !1;
}
function D(e) {
    let { guildId: n, userIds: r } = e;
    return S(n).updateMembersByMemberIds(r);
}
function L(e) {
    let { chunks: n } = e,
        r = !1;
    for (let e of n) r = S(e.guildId).updateServerMembers(e.members) || r;
    return r;
}
function x(e) {
    let { guildId: n } = e,
        r = c.default.getId();
    return S(n).updateMembersByMemberIds([r]);
}
function w(e) {
    let { guildId: n, user: r } = e;
    return S(n).removeMember(r.id);
}
function P(e) {
    let n = !1,
        r = S(e.guildId);
    return 'GUILD_ROLE_DELETE' === e.type && (n = r.removeRoleFromSearchState(e.roleId)), r.rebuildAllMembers() || n;
}
function M(e) {
    let { guildId: n, userId: r } = e;
    return S(n).updateMembersByMemberIds([r]);
}
function k(e) {
    let { guildId: n, members: r } = e;
    if (null == r || 0 === r.length) return !1;
    let i = S(n),
        a = r.reduce((e, n) => {
            if (null != n.member) {
                let r = n.member.user.id;
                e.push(r);
            }
            return e;
        }, []);
    return i.updateMembersByMemberIds(a);
}
function U(e) {
    let { guildId: n, addedMembers: r } = e;
    if (null == r || 0 === r.length) return !1;
    let i = S(n),
        a = r.reduce((e, n) => {
            let r = n.userId;
            return e.push(r), e;
        }, []);
    return i.updateMembersByMemberIds(a);
}
function B(e) {
    let { guildId: n, members: r } = e;
    if (null == r || 0 === r.length) return !1;
    let i = S(n),
        a = r.reduce((e, n) => {
            let r = n.userId;
            return e.push(r), e;
        }, []);
    return i.updateMembersByMemberIds(a);
}
function G(e) {
    let { guildId: n, threads: r } = e,
        i = Object.values(r);
    if (0 === i.length) return !1;
    let a = S(n),
        o = i.reduce((e, n) => {
            if (null != n.owner) {
                let r = n.owner.user.id;
                e.push(r);
            }
            return e;
        }, []);
    return a.updateMembersByMemberIds(o);
}
function Z(e) {
    let { guildId: n, guildMember: r } = e;
    return S(n).updateMembersByMemberIds([r.user.id]);
}
function F(e) {
    let n = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: r, members: i } = e;
            n = S(r).updateServerMembers(i) || n;
        }),
        n
    );
}
function V(e) {
    let n = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: r, activity_instances: i } = e,
                a = S(r),
                o = [];
            null == i ||
                i.forEach((e) => {
                    var n;
                    null === (n = e.participants) ||
                        void 0 === n ||
                        n.forEach((e) => {
                            (0, h.lm)(e.member) && o.push(e.member);
                        });
                }),
                (n = a.updateServerMembers(o) || n);
        }),
        n
    );
}
function j(e) {
    return I ? (I = !1) : C(!0), F(e);
}
function H(e) {
    return V(e);
}
function Y(e) {
    let { guildMembers: n } = e,
        r = !1;
    return (
        (I = !0),
        _.default.entries(n).forEach((e) => {
            let [n, i] = e;
            r = S(n).updateClientMembers(Object.values(i)) || r;
        }),
        r
    );
}
function W(e) {
    let { guildId: n, members: r } = e;
    if (null == n || null == f.Z.getGuild(n)) return !1;
    I = !0;
    let i = S(n),
        a = [];
    for (let e of r) null == i.getMember(e.userId) && a.push(e);
    return a.length > 0 && i.updateClientMembers(a);
}
function K(e) {
    let { members: n, guildId: r } = e;
    return !!(n.length > 0) && S(r).updateServerMembers(n);
}
function z(e) {
    let { guildId: n } = e;
    return S(n).initialize();
}
function q(e) {
    let { guildId: n } = e;
    return S(n).refreshNewMembersAndSearchResults();
}
function Q(e) {
    let { guildId: n, pagination: r } = e,
        [i] = S(n).updatePaginationState(r);
    return i;
}
function X(e) {
    let { guildId: n, continuationToken: r } = e;
    return S(n).updatePaginationToken(r);
}
function J(e) {
    let { guildId: n, searchState: r } = e;
    return S(n).updateSearchState(r);
}
function $(e) {
    let { guildId: n, memberSupplementals: r } = e,
        i = (0, E.Qu)(n, r);
    return i && S(n).updateMembersByMemberIds(r.map((e) => e.userId)), i;
}
function ee(e) {
    var n, r, i, a, o, s;
    let l, u;
    let { guildId: c, members: d, total_result_count: f } = e,
        p = S(c),
        { memberIds: h, memberSupplementals: _ } = d.reduce(
            (e, n) => {
                let { member: r, source_invite_code: i, join_source_type: a, inviter_id: o } = n,
                    s = r.user;
                return (
                    e.memberIds.push(s.id),
                    e.memberSupplementals.push({
                        userId: s.id,
                        sourceInviteCode: i,
                        joinSourceType: a,
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
        m = (0, E.Qu)(c, _);
    (0, v.nf)(c, h);
    let b = p.updateSearchedMembersByMemberIds(h);
    d.length > 0 && ((l = d[0]), (u = d[d.length - 1]));
    let [I] = p.updatePaginationState(
        {
            totalResultsCount: f,
            elasticSearchCursor: {
                before: (0, g.si)({
                    joinedAt: null == l ? void 0 : null === (n = l.member) || void 0 === n ? void 0 : n.joined_at,
                    userId: null !== (o = null == l ? void 0 : null === (r = l.member) || void 0 === r ? void 0 : r.user.id) && void 0 !== o ? o : y.lds
                }),
                after: (0, g.si)({
                    joinedAt: null == u ? void 0 : null === (i = u.member) || void 0 === i ? void 0 : i.joined_at,
                    userId: null !== (s = null == u ? void 0 : null === (a = u.member) || void 0 === a ? void 0 : a.user.id) && void 0 !== s ? s : y.lds
                })
            }
        },
        !1
    );
    return m || b || I;
}
class et extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(c.default, d.ZP, p.default);
    }
    isInitialized(e) {
        return S(e).isInitialized;
    }
    getMembersByGuildId(e, n) {
        return S(e).getMembersByIndex(n);
    }
    getMembersCountByGuildId(e, n) {
        return S(e).countMembersByIndex(n);
    }
    getEstimatedMemberSearchCountByGuildId(e) {
        let n = S(e),
            r = n.searchChunkSize,
            i = n.countMembersByIndex(n.getSearchIndex()),
            a = n.getTotalResultsCount();
        return null == a || a < r ? i : a;
    }
    getKnownMemberSearchCountByGuildId(e) {
        let n = S(e);
        return n.countMembersByIndex(n.getSearchIndex());
    }
    getCurrentMemberSearchResultsByGuildId(e) {
        let n = S(e);
        return n.getMembersByIndex(n.getSearchIndex());
    }
    getSearchStateByGuildId(e) {
        return S(e).getSearchState();
    }
    hasDefaultSearchStateByGuildId(e) {
        return S(e).hasDefaultSearchState();
    }
    getPagedMembersByGuildId(e) {
        return S(e).getPaginatedMembers();
    }
    getPaginationStateByGuildId(e) {
        return S(e).getPaginationState();
    }
    getElasticSearchPaginationByGuildId(e) {
        return S(e).getElasticSearchPagination();
    }
    getEnhancedMember(e, n) {
        return S(e).getMember(n);
    }
    getNewMemberTimestamp(e) {
        return S(e).getNewMemberTimestamp();
    }
    getLastRefreshTimestamp(e) {
        return S(e).lastRefreshTimestamp;
    }
    getLastCursorTimestamp(e) {
        return S(e).lastCursorTimestamp;
    }
}
b(et, 'displayName', 'MemberSafetyStore');
let en = new et(u.Z, {
    CONNECTION_OPEN: j,
    CONNECTION_OPEN_SUPPLEMENTAL: H,
    LOCAL_MESSAGES_LOADED: W,
    CACHE_LOADED: Y,
    PASSIVE_UPDATE_V2: K,
    GUILD_CREATE: N,
    GUILD_DELETE: R,
    GUILD_MEMBERS_CHUNK_BATCH: L,
    GUILD_MEMBER_ADD: O,
    GUILD_MEMBER_UPDATE: O,
    GUILD_MEMBER_UPDATE_LOCAL: x,
    GUILD_MEMBER_REMOVE: w,
    GUILD_ROLE_UPDATE: P,
    GUILD_ROLE_DELETE: P,
    GUILD_MEMBER_PROFILE_UPDATE: Z,
    GUILD_ROLE_MEMBER_REMOVE: M,
    GUILD_ROLE_MEMBER_ADD: M,
    THREAD_MEMBER_LIST_UPDATE: k,
    THREAD_MEMBERS_UPDATE: U,
    LOAD_ARCHIVED_THREADS_SUCCESS: B,
    LOAD_FORUM_POSTS: G,
    INITIALIZE_MEMBER_SAFETY_STORE: z,
    MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: q,
    MEMBER_SAFETY_PAGINATION_UPDATE: Q,
    MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: X,
    MEMBER_SAFETY_SEARCH_STATE_UPDATE: J,
    FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: $,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: ee,
    MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: D
});
n.Z = en;
