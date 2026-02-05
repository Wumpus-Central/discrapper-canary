"use strict";
n.d(t, { l: () => u, q: () => p });
var r = n(33851),
    i = n.n(r),
    a = n(229527),
    s = n(316031),
    o = n(661191),
    l = n(859126);
function u() {
    return {
        query: "",
        requireUnusualDmActivity: !1,
        requireCommunicationDisabled: !1,
        requireUnusualAccountActivity: !1,
        requireUsernameQuarantined: !1,
        selectedRoleIds: new Set(),
        selectedJoinDateOption: { optionId: 0, afterDate: null, beforeDate: null },
        selectedAccountAgeOption: { optionId: 0, afterDate: null, beforeDate: null },
        selectedJoinSourceType: void 0,
        selectedSourceInviteCode: void 0,
        selectedSort: void 0,
    };
}
let c = Object.freeze(u());
function d(e, t) {
    return null != e && !!e.toLowerCase().includes(t.toLowerCase());
}
function _(e, t) {
    if ("" === t.trim()) return !1;
    let [n, r] = (0, l.H)(t);
    for (let t of r) if (e.userId === t) return !0;
    for (let t of n) if (d(e.nick, t)) return !0;
    if (null == e.user) return !1;
    let { globalName: i, username: a } = e.user;
    for (let e of n) if (d(a, e)) return !0;
    for (let e of n) if (d(i, e)) return !0;
    return !1;
}
function f(e, t) {
    return 0 !== t.size && Array.from(t).every((t) => e.roles.includes(t));
}
class p {
    guildId;
    _searchState;
    hasDefaultQuery;
    constructor(e) {
        (this.guildId = e), (this._searchState = u()), (this.hasDefaultQuery = !0);
    }
    get requiresUsernameMatch() {
        return this._searchState.query.trim().length > 0;
    }
    reset() {
        (this._searchState = u()), (this.hasDefaultQuery = !0);
    }
    updateSearchState(e) {
        return (
            (this._searchState = { ...this._searchState, ...e }), (this.hasDefaultQuery = i()(this._searchState, c)), !0
        );
    }
    resetSearchState() {
        return !this.hasDefaultQuery && ((this._searchState = u()), (this.hasDefaultQuery = !0), !0);
    }
    getSearchState() {
        return this._searchState;
    }
    isMemberIncludedInSearchResults(e) {
        let {
            query: t,
            requireUnusualDmActivity: n,
            requireCommunicationDisabled: r,
            requireUnusualAccountActivity: i,
            requireUsernameQuarantined: l,
            selectedRoleIds: u,
            selectedJoinDateOption: c,
            selectedAccountAgeOption: d,
            selectedSourceInviteCode: p,
            selectedJoinSourceType: h,
        } = this._searchState;
        return (
            !(
                (t.length > 0 && !_(e, t)) ||
                (u.size > 0 && !f(e, u)) ||
                (null != c.afterDate && e.joinedAtTimestamp < c.afterDate) ||
                (null != c.beforeDate && e.joinedAtTimestamp > c.beforeDate) ||
                (null != d.afterDate && o.default.extractTimestamp(e.userId) < d.afterDate) ||
                (null != d.beforeDate && o.default.extractTimestamp(e.userId) > d.beforeDate)
            ) &&
            (null == p || e.sourceInviteCode === p) &&
            (null == h || e.joinSourceType === h) &&
            ((!n && !r && !i && !l) ||
                !!(
                    (n && e.hasUnusualDmActivity) ||
                    (r && (0, s.Z)(e)) ||
                    (i && e.hasUnusualAccountActivity) ||
                    (l && (0, a.TR)(e))
                ))
        );
    }
}
