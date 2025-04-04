n.d(t, {
    I: () => d,
    j: () => m
}),
    n(47120),
    n(566702);
var r = n(498607),
    i = n.n(r),
    o = n(715903),
    a = n(69882),
    s = n(709054),
    l = n(733026);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d() {
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
let f = Object.freeze(d());
function _(e, t) {
    return null != e && !!e.toLowerCase().includes(t.toLowerCase());
}
function p(e, t) {
    if ('' === t.trim()) return !1;
    let [n, r] = (0, l.C)(t);
    for (let t of r) if (e.userId === t) return !0;
    for (let t of n) if (_(e.nick, t)) return !0;
    if (null == e.user) return !1;
    let { globalName: i, username: o } = e.user;
    for (let e of n) if (_(o, e)) return !0;
    for (let e of n) if (_(i, e)) return !0;
    return !1;
}
function h(e, t) {
    return 0 !== t.size && Array.from(t).every((t) => e.roles.includes(t));
}
class m {
    get requiresUsernameMatch() {
        return this._searchState.query.trim().length > 0;
    }
    reset() {
        (this._searchState = d()), (this.hasDefaultQuery = !0);
    }
    updateSearchState(e) {
        return (this._searchState = u({}, this._searchState, e)), (this.hasDefaultQuery = i()(this._searchState, f)), !0;
    }
    resetSearchState() {
        return !this.hasDefaultQuery && ((this._searchState = d()), (this.hasDefaultQuery = !0), !0);
    }
    getSearchState() {
        return this._searchState;
    }
    isMemberIncludedInSearchResults(e) {
        let { query: t, requireUnusualDmActivity: n, requireCommunicationDisabled: r, requireUnusualAccountActivity: i, requireUsernameQuarantined: l, selectedRoleIds: c, selectedJoinDateOption: u, selectedAccountAgeOption: d, selectedSourceInviteCode: f, selectedJoinSourceType: _ } = this._searchState;
        return !((t.length > 0 && !p(e, t)) || (c.size > 0 && !h(e, c)) || (null != u.afterDate && e.joinedAtTimestamp < u.afterDate) || (null != u.beforeDate && e.joinedAtTimestamp > u.beforeDate) || (null != d.afterDate && s.default.extractTimestamp(e.userId) < d.afterDate) || (null != d.beforeDate && s.default.extractTimestamp(e.userId) > d.beforeDate)) && (null == f || e.sourceInviteCode === f) && (null == _ || e.joinSourceType === _) && ((!n && !r && !i && !l) || !!((n && e.hasUnusualDmActivity) || (r && (0, a.b)(e)) || (i && e.hasUnusualAccountActivity) || (l && (0, o.EY)(e))));
    }
    constructor(e) {
        c(this, 'guildId', void 0), c(this, '_searchState', void 0), c(this, 'hasDefaultQuery', void 0), (this.guildId = e), (this._searchState = d()), (this.hasDefaultQuery = !0);
    }
}
