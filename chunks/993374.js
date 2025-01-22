r.d(n, {
    I: function () {
        return f;
    },
    j: function () {
        return g;
    }
});
var i = r(47120);
var a = r(498607),
    o = r.n(a),
    s = r(715903),
    l = r(69882),
    u = r(709054),
    c = r(733026);
function d(e, n, r) {
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
function f() {
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
let p = Object.freeze(f());
function h(e, n) {
    return null != e && (!!e.toLowerCase().includes(n.toLowerCase()) || !1);
}
function _(e, n) {
    if ('' === n.trim()) return !1;
    let [r, i] = (0, c.C)(n);
    for (let n of i) if (e.userId === n) return !0;
    for (let n of r) if (h(e.nick, n)) return !0;
    if (null == e.user) return !1;
    let { globalName: a, username: o } = e.user;
    for (let e of r) if (h(o, e)) return !0;
    for (let e of r) if (h(a, e)) return !0;
    return !1;
}
function m(e, n) {
    return 0 !== n.size && Array.from(n).every((n) => e.roles.includes(n));
}
class g {
    get requiresUsernameMatch() {
        return this._searchState.query.trim().length > 0;
    }
    reset() {
        (this._searchState = f()), (this.hasDefaultQuery = !0);
    }
    updateSearchState(e) {
        return (
            (this._searchState = {
                ...this._searchState,
                ...e
            }),
            (this.hasDefaultQuery = o()(this._searchState, p)),
            !0
        );
    }
    resetSearchState() {
        return !this.hasDefaultQuery && ((this._searchState = f()), (this.hasDefaultQuery = !0), !0);
    }
    getSearchState() {
        return this._searchState;
    }
    isMemberIncludedInSearchResults(e) {
        let { query: n, requireUnusualDmActivity: r, requireCommunicationDisabled: i, requireUnusualAccountActivity: a, requireUsernameQuarantined: o, selectedRoleIds: c, selectedJoinDateOption: d, selectedAccountAgeOption: f, selectedSourceInviteCode: p, selectedJoinSourceType: h } = this._searchState;
        if ((n.length > 0 && !_(e, n)) || (c.size > 0 && !m(e, c)) || (null != d.afterDate && e.joinedAtTimestamp < d.afterDate) || (null != d.beforeDate && e.joinedAtTimestamp > d.beforeDate) || (null != f.afterDate && u.default.extractTimestamp(e.userId) < f.afterDate) || (null != f.beforeDate && u.default.extractTimestamp(e.userId) > f.beforeDate) || (null != p && e.sourceInviteCode !== p) || (null != h && e.joinSourceType !== h)) return !1;
        if (r || i || a || o) return !!((r && e.hasUnusualDmActivity) || (i && (0, l.b)(e)) || (a && e.hasUnusualAccountActivity) || (o && (0, s.EY)(e))) || !1;
        return !0;
    }
    constructor(e) {
        d(this, 'guildId', void 0), d(this, '_searchState', void 0), d(this, 'hasDefaultQuery', void 0), (this.guildId = e), (this._searchState = f()), (this.hasDefaultQuery = !0);
    }
}
