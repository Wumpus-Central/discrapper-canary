"use strict";
n.d(t, { l: () => u, q: () => _ });
var r = n(33851),
    i = n.n(r),
    s = n(229527),
    a = n(316031),
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
let d = Object.freeze(u());
function c(e, t) {
    return null != e && !!e.toLowerCase().includes(t.toLowerCase());
}
class _ {
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
            (this._searchState = { ...this._searchState, ...e }), (this.hasDefaultQuery = i()(this._searchState, d)), !0
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
            requireUsernameQuarantined: u,
            selectedRoleIds: d,
            selectedJoinDateOption: _,
            selectedAccountAgeOption: f,
            selectedSourceInviteCode: E,
            selectedJoinSourceType: h,
        } = this._searchState;
        return (
            !(
                (t.length > 0 &&
                    !(function (e, t) {
                        if ("" === t.trim()) return !1;
                        let [n, r] = (0, l.H)(t);
                        for (let t of r) if (e.userId === t) return !0;
                        for (let t of n) if (c(e.nick, t)) return !0;
                        if (null == e.user) return !1;
                        let { globalName: i, username: s } = e.user;
                        for (let e of n) if (c(s, e)) return !0;
                        for (let e of n) if (c(i, e)) return !0;
                        return !1;
                    })(e, t)) ||
                (d.size > 0 && !(0 !== d.size && Array.from(d).every((t) => e.roles.includes(t)))) ||
                (null != _.afterDate && e.joinedAtTimestamp < _.afterDate) ||
                (null != _.beforeDate && e.joinedAtTimestamp > _.beforeDate) ||
                (null != f.afterDate && o.default.extractTimestamp(e.userId) < f.afterDate) ||
                (null != f.beforeDate && o.default.extractTimestamp(e.userId) > f.beforeDate) ||
                (null != E && e.sourceInviteCode !== E) ||
                (null != h && e.joinSourceType !== h)
            ) &&
            ((!n && !r && !i && !u) ||
                !!(
                    (n && e.hasUnusualDmActivity) ||
                    (r && (0, a.Z)(e)) ||
                    (i && e.hasUnusualAccountActivity) ||
                    (u && (0, s.TR)(e))
                ))
        );
    }
}
