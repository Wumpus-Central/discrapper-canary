n.d(t, { Z: () => J }), n(47120), n(724458), n(653041);
var i,
    r = n(442837),
    a = n(570140),
    s = n(314897),
    o = n(271383),
    l = n(430824),
    u = n(594174),
    c = n(823379),
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
    v = {};
function y(e) {
    return null == v[e] && (v[e] = new f.P(e)), v[e];
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    y(e).reset(t);
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    for (let t in v) I(t, e);
}
function b(e) {
    let { guild: t } = e,
        n = y(t.id);
    I(t.id, n.isInitialized);
}
function S(e) {
    let {
        guild: { id: t }
    } = e;
    I(t);
}
function A() {
    return !1;
}
function N(e) {
    let { guildId: t, userIds: n } = e;
    return y(t).updateMembersByMemberIds(n);
}
function C(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = y(e.guildId).updateServerMembers(e.members) || n;
    return n;
}
function R(e) {
    let { guildId: t } = e,
        n = s.default.getId();
    return y(t).updateMembersByMemberIds([n]);
}
function O(e) {
    let { guildId: t, user: n } = e;
    return y(t).removeMember(n.id);
}
function D(e) {
    let t = !1,
        n = y(e.guildId);
    return 'GUILD_ROLE_DELETE' === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t;
}
function L(e) {
    let { guildId: t, userId: n } = e;
    return y(t).updateMembersByMemberIds([n]);
}
function x(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let i = y(t),
        r = n.reduce((e, t) => {
            if (null != t.member) {
                let n = t.member.user.id;
                e.push(n);
            }
            return e;
        }, []);
    return i.updateMembersByMemberIds(r);
}
function w(e) {
    let { guildId: t, addedMembers: n } = e;
    if (null == n || 0 === n.length) return !1;
    let i = y(t),
        r = n.reduce((e, t) => {
            let n = t.userId;
            return e.push(n), e;
        }, []);
    return i.updateMembersByMemberIds(r);
}
function P(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let i = y(t),
        r = n.reduce((e, t) => {
            let n = t.userId;
            return e.push(n), e;
        }, []);
    return i.updateMembersByMemberIds(r);
}
function M(e) {
    let { guildId: t, threads: n } = e,
        i = Object.values(n);
    if (0 === i.length) return !1;
    let r = y(t),
        a = i.reduce((e, t) => {
            if (null != t.owner) {
                let n = t.owner.user.id;
                e.push(n);
            }
            return e;
        }, []);
    return r.updateMembersByMemberIds(a);
}
function k(e) {
    let { guildId: t, guildMember: n } = e;
    return y(t).updateMembersByMemberIds([n.user.id]);
}
function U(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, members: i } = e;
            t = y(n).updateServerMembers(i) || t;
        }),
        t
    );
}
function G(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, activity_instances: i } = e,
                r = y(n),
                a = [];
            null == i ||
                i.forEach((e) => {
                    var t;
                    null === (t = e.participants) ||
                        void 0 === t ||
                        t.forEach((e) => {
                            (0, c.lm)(e.member) && a.push(e.member);
                        });
                }),
                (t = r.updateServerMembers(a) || t);
        }),
        t
    );
}
function B(e) {
    return E ? (E = !1) : T(!0), U(e);
}
function Z(e) {
    return G(e);
}
function F(e) {
    let { guildMembers: t } = e,
        n = !1;
    return (
        (E = !0),
        d.default.entries(t).forEach((e) => {
            let [t, i] = e;
            n = y(t).updateClientMembers(Object.values(i)) || n;
        }),
        n
    );
}
function V(e) {
    let { guildId: t, members: n } = e;
    if (null == t || null == l.Z.getGuild(t)) return !1;
    E = !0;
    let i = y(t),
        r = [];
    for (let e of n) null == i.getMember(e.userId) && r.push(e);
    return r.length > 0 && i.updateClientMembers(r);
}
function j(e) {
    let { members: t, guildId: n } = e;
    return t.length > 0 && y(n).updateServerMembers(t);
}
function H(e) {
    let { guildId: t } = e;
    return y(t).initialize();
}
function Y(e) {
    let { guildId: t } = e;
    return y(t).refreshNewMembersAndSearchResults();
}
function W(e) {
    let { guildId: t, pagination: n } = e,
        [i] = y(t).updatePaginationState(n);
    return i;
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
        i = (0, p.Qu)(t, n);
    return i && y(t).updateMembersByMemberIds(n.map((e) => e.userId)), i;
}
function Q(e) {
    var t, n, i, r, a, s;
    let o, l;
    let { guildId: u, members: c, total_result_count: d } = e,
        f = y(u),
        { memberIds: g, memberSupplementals: E } = c.reduce(
            (e, t) => {
                let { member: n, source_invite_code: i, join_source_type: r, inviter_id: a } = t,
                    s = n.user;
                return (
                    e.memberIds.push(s.id),
                    e.memberSupplementals.push({
                        userId: s.id,
                        sourceInviteCode: i,
                        joinSourceType: r,
                        inviterId: a
                    }),
                    e
                );
            },
            {
                memberIds: [],
                memberSupplementals: []
            }
        ),
        v = (0, p.Qu)(u, E);
    (0, h.nf)(u, g);
    let I = f.updateSearchedMembersByMemberIds(g);
    c.length > 0 && ((o = c[0]), (l = c[c.length - 1]));
    let [T] = f.updatePaginationState(
        {
            totalResultsCount: d,
            elasticSearchCursor: {
                before: (0, _.si)({
                    joinedAt: null == o ? void 0 : null === (t = o.member) || void 0 === t ? void 0 : t.joined_at,
                    userId: null !== (a = null == o ? void 0 : null === (n = o.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== a ? a : m.lds
                }),
                after: (0, _.si)({
                    joinedAt: null == l ? void 0 : null === (i = l.member) || void 0 === i ? void 0 : i.joined_at,
                    userId: null !== (s = null == l ? void 0 : null === (r = l.member) || void 0 === r ? void 0 : r.user.id) && void 0 !== s ? s : m.lds
                })
            }
        },
        !1
    );
    return v || I || T;
}
class X extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(s.default, o.ZP, u.default);
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
            i = t.countMembersByIndex(t.getSearchIndex()),
            r = t.getTotalResultsCount();
        return null == r || r < n ? i : r;
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
let J = new X(a.Z, {
    CONNECTION_OPEN: B,
    CONNECTION_OPEN_SUPPLEMENTAL: Z,
    LOCAL_MESSAGES_LOADED: V,
    CACHE_LOADED: F,
    PASSIVE_UPDATE_V2: j,
    GUILD_CREATE: b,
    GUILD_DELETE: S,
    GUILD_MEMBERS_CHUNK_BATCH: C,
    GUILD_MEMBER_ADD: A,
    GUILD_MEMBER_UPDATE: A,
    GUILD_MEMBER_UPDATE_LOCAL: R,
    GUILD_MEMBER_REMOVE: O,
    GUILD_ROLE_UPDATE: D,
    GUILD_ROLE_DELETE: D,
    GUILD_MEMBER_PROFILE_UPDATE: k,
    GUILD_ROLE_MEMBER_REMOVE: L,
    GUILD_ROLE_MEMBER_ADD: L,
    THREAD_MEMBER_LIST_UPDATE: x,
    THREAD_MEMBERS_UPDATE: w,
    LOAD_ARCHIVED_THREADS_SUCCESS: P,
    LOAD_FORUM_POSTS: M,
    INITIALIZE_MEMBER_SAFETY_STORE: H,
    MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: Y,
    MEMBER_SAFETY_PAGINATION_UPDATE: W,
    MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: K,
    MEMBER_SAFETY_SEARCH_STATE_UPDATE: z,
    FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: q,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: Q,
    MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: N
});
