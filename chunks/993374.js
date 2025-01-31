n.d(t, {
    I: () => c,
    j: () => h
}),
    n(47120);
var i = n(498607),
    r = n.n(i),
    a = n(715903),
    s = n(69882),
    o = n(709054),
    l = n(733026);
function u(e, t, n) {
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
function c() {
    return {
        query: '',
        requireUnusualDmActivity: !1,
        requireCommunicationDisabled: !1,
        requireUnusualAccountActivity: !1,
        requireUsernameQuarantined: !1,
        selectedRoleIds: new Set(),
        selectedJoinDateOption: {
            optionId: 0,
            afterDate: null,
            beforeDate: null
        },
        selectedAccountAgeOption: {
            optionId: 0,
            afterDate: null,
            beforeDate: null
        },
        selectedJoinSourceType: void 0,
        selectedSourceInviteCode: void 0,
        selectedSort: void 0
    };
}
let d = Object.freeze(c());
function f(e, t) {
    return null != e && !!e.toLowerCase().includes(t.toLowerCase());
}
function _(e, t) {
    if ('' === t.trim()) return !1;
    let [n, i] = (0, l.C)(t);
    for (let t of i) if (e.userId === t) return !0;
    for (let t of n) if (f(e.nick, t)) return !0;
    if (null == e.user) return !1;
    let { globalName: r, username: a } = e.user;
    for (let e of n) if (f(a, e)) return !0;
    for (let e of n) if (f(r, e)) return !0;
    return !1;
}
function p(e, t) {
    return 0 !== t.size && Array.from(t).every((t) => e.roles.includes(t));
}
class h {
    get requiresUsernameMatch() {
        return this._searchState.query.trim().length > 0;
    }
    reset() {
        (this._searchState = c()), (this.hasDefaultQuery = !0);
    }
    updateSearchState(e) {
        return (
            (this._searchState = {
                ...this._searchState,
                ...e
            }),
            (this.hasDefaultQuery = r()(this._searchState, d)),
            !0
        );
    }
    resetSearchState() {
        return !this.hasDefaultQuery && ((this._searchState = c()), (this.hasDefaultQuery = !0), !0);
    }
    getSearchState() {
        return this._searchState;
    }
    isMemberIncludedInSearchResults(e) {
        let { query: t, requireUnusualDmActivity: n, requireCommunicationDisabled: i, requireUnusualAccountActivity: r, requireUsernameQuarantined: l, selectedRoleIds: u, selectedJoinDateOption: c, selectedAccountAgeOption: d, selectedSourceInviteCode: f, selectedJoinSourceType: h } = this._searchState;
        return !((t.length > 0 && !_(e, t)) || (u.size > 0 && !p(e, u)) || (null != c.afterDate && e.joinedAtTimestamp < c.afterDate) || (null != c.beforeDate && e.joinedAtTimestamp > c.beforeDate) || (null != d.afterDate && o.default.extractTimestamp(e.userId) < d.afterDate) || (null != d.beforeDate && o.default.extractTimestamp(e.userId) > d.beforeDate)) && (null == f || e.sourceInviteCode === f) && (null == h || e.joinSourceType === h) && ((!n && !i && !r && !l) || !!((n && e.hasUnusualDmActivity) || (i && (0, s.b)(e)) || (r && e.hasUnusualAccountActivity) || (l && (0, a.EY)(e))));
    }
    constructor(e) {
        u(this, 'guildId', void 0), u(this, '_searchState', void 0), u(this, 'hasDefaultQuery', void 0), (this.guildId = e), (this._searchState = c()), (this.hasDefaultQuery = !0);
    }
}
