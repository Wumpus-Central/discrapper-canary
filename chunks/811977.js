n.d(t, { Ay: () => U, Ms: () => v, Wl: () => P });
var i = n(812729),
    r = n.n(i),
    a = n(435558),
    s = n(196765),
    l = n(121894),
    o = n(499979),
    d = n(439372),
    c = n(626584),
    u = n(403362),
    _ = n(811091),
    E = n(233693),
    A = n(859126),
    f = n(70738),
    h = n(73153),
    I = n(300649),
    p = n(405473),
    m = n(406318);
let g = new c.A("MemberSafetySearchManager");
function T(e) {
    return `guild_${e}`;
}
function S(e) {
    return {
        requestState: e,
        abortController: null,
        lastUpdated: Date.now(),
        query: null,
        cursor: null,
        previousPagination: null,
        sort: null,
        elasticSearchCursor: null,
    };
}
let N = (0, s.v)((e) => ({}));
function C(e, t) {
    let n = N.getState()[e];
    return (
        null == n && (n = S(1)),
        (n = { ...n, ...t }),
        (0, l.r)(() => {
            N.setState((t) => ({ ...t, [e]: n }));
        }),
        n
    );
}
function O(e) {
    return N.getState()[e];
}
function R(e) {
    let t = O(e);
    return (null == t && C(e, (t = S(1))), t);
}
async function L(e) {
    (await (0, o.yy)(200), null != O(e) && C(e, { requestState: 3, abortController: null, lastUpdated: Date.now() }));
}
function y(e) {
    var t;
    ((t = T(e)),
        (0, l.r)(() => {
            N.setState((e) => {
                let n = { ...e };
                return (delete n[t], n);
            });
        }));
}
function D(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
async function b(e) {
    var t;
    let n,
        i,
        s = m.A.getSearchStateByGuildId(e),
        l = m.A.getPaginationStateByGuildId(e),
        o = T(e),
        d = R(o),
        [c, S] = (function (e, t, n) {
            let i = (function (e, t) {
                    let n,
                        i,
                        r,
                        a,
                        {
                            currentPageChunkNumber: s,
                            previousPageChunkNumber: l,
                            nextPageChunkNumber: o,
                        } = ((n = (0, E.n4)(t)),
                        (i = t.pageSize * (t.currentPage - 1)),
                        (r = t.pageSize * t.currentPage),
                        (a = t.pageSize * (t.currentPage + 1)),
                        {
                            previousPageChunkNumber: D(i, n),
                            currentPageChunkNumber: D(r, n),
                            nextPageChunkNumber: D(a, n),
                        }),
                        { previousPagination: d } = R(T(e)),
                        c = t.currentPage,
                        u = d?.currentPage ?? 0,
                        _ = m.A.getElasticSearchPaginationByGuildId(e);
                    switch (!0) {
                        case null == _:
                        case s === o && 0 === s:
                            return 0;
                        case s === o && s === l:
                            return 1;
                        case u < c && s < o:
                            return 2;
                        case u > c && s >= l:
                            if (0 < s) return 3;
                            return 0;
                        default:
                            return 1;
                    }
                })(e, n),
                r = m.A.getElasticSearchPaginationByGuildId(e),
                a = (0, E.n4)(n);
            switch (i) {
                case 0:
                    return [null, { limit: a }];
                case 1:
                    return [t.cursor ?? null, { limit: a, after: t.cursor ?? void 0 }];
                case 2:
                    return [r?.after ?? null, { limit: a, after: r?.after ?? void 0 }];
                case 3:
                    return [r?.before ?? null, { limit: a, before: r?.before ?? void 0 }];
                default:
                    (0, u.xb)(i);
            }
        })(e, d, l),
        N =
            ((t = (function (e) {
                let t = {},
                    n = {},
                    { query: i } = e;
                if (null != i && i.length > 1) {
                    let [e, n] = (0, A.H)(i);
                    (e.length > 0 && (t.usernames = { or_query: e }), n.length > 0 && (t.user_id = { or_query: n }));
                }
                let {
                        requireUnusualDmActivity: r,
                        requireCommunicationDisabled: a,
                        requireUnusualAccountActivity: s,
                        requireUsernameQuarantined: l,
                    } = e,
                    o = {};
                (r && (o.unusual_dm_activity_until = { range: { gte: Date.now() - f.tX } }),
                    a && (o.communication_disabled_until = { range: { gte: Date.now() } }),
                    s && (o.unusual_account_activity = s),
                    l && (o.automod_quarantined_username = l),
                    Object.keys(o).length > 0 && (n.safety_signals = o));
                let { selectedRoleIds: d } = e;
                d.size > 0 && (t.role_ids = { and_query: Array.from(d) });
                let { selectedJoinDateOption: c } = e;
                null != c.afterDate &&
                    (t.guild_joined_at = { range: { gte: c.afterDate, lte: c.beforeDate ?? void 0 } });
                let { selectedAccountAgeOption: u } = e;
                if (null != u.afterDate) {
                    let e = t.user_id;
                    t.user_id = {
                        ...e,
                        range: {
                            gte: _.default.fromTimestamp(u.afterDate),
                            lte: null != u.beforeDate ? _.default.fromTimestamp(u.beforeDate) : void 0,
                        },
                    };
                }
                let { selectedSourceInviteCode: E } = e;
                null != E && (t.source_invite_code = { or_query: [E] });
                let { selectedJoinSourceType: h } = e;
                null != h && (t.join_source_type = { or_query: [h] });
                let I = { or_query: n, and_query: t },
                    { selectedSort: p } = e;
                return (null != p && (I.sort = p), I);
            })(s)),
            null == S ? t : { ...t, ...S }),
        y = s.selectedSort ?? f.mF.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (((n = R(o)), r()(n.query, N) && (0, a.isEqual)(c, d.cursor))) return;
    let b =
        ((i = O(o)),
        i?.requestState === 2 && i.abortController?.abort(),
        C(o, {
            requestState: 2,
            abortController: new AbortController(),
            lastUpdated: Date.now(),
            query: N,
            cursor: c,
            previousPagination: l,
            sort: y,
        }));
    try {
        if ((g.info("Making member search request", { query: b.query, guildId: e }), null == b.query))
            throw Error("Query is null");
        await (async function (e, t, n) {
            let i = await (0, I.y)(e, t, n);
            if (i.type === p.r.ERROR) throw i.body;
            let { body: r } = i;
            h.h.dispatch({
                type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                guildId: e,
                members: r.members,
                page_result_count: r.page_result_count,
                total_result_count: r.total_result_count,
            });
        })(e, b.query, { signal: b.abortController?.signal ?? void 0 });
    } catch (e) {
        if (-1 === e.code) return;
        null != O(o) && C(o, { requestState: 0, abortController: null, lastUpdated: Date.now() });
        return;
    }
    await L(o);
}
function v(e) {
    return N((t) => {
        let n = T(e);
        return t[n]?.requestState === 2;
    });
}
function P(e) {
    return N((t) => {
        let n = T(e);
        return t[n]?.requestState === 4;
    });
}
class M extends d.A {
    actions = {
        INITIALIZE_MEMBER_SAFETY_STORE: (e) => this.handleInitialize(e),
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        MEMBER_SAFETY_SEARCH_STATE_UPDATE: (e) => this.handleSearchStateUpdate(e),
        MEMBER_SAFETY_PAGINATION_UPDATE: (e) => this.handlePaginationUpdate(e),
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e),
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: (e) => this.handleGuildMemberSearchStillIndexing(e),
        MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: (e) => this.handleNewMemberTimestampRefresh(e),
    };
    handleInitialize(e) {
        let { guildId: t } = e;
        return (y(t), b(t));
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return y(t.id);
    }
    handleSearchStateUpdate(e) {
        let { guildId: t } = e;
        return b(t);
    }
    handlePaginationUpdate(e) {
        let { guildId: t } = e;
        return b(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        return L(T(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        C(T(t), { requestState: 4, abortController: null, lastUpdated: Date.now() });
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return b(t);
    }
}
let U = new M();
