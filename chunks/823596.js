n.d(t, {
    IF: () => _,
    LU: () => c,
    Rt: () => h,
    hW: () => u,
    t3: () => p
}),
    n(653041),
    n(47120);
var r = n(271383),
    i = n(588215);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = [12, 25, 50, 100],
    u = 7,
    d = 5,
    f = 250;
function _() {
    return {
        pageSize: c[0],
        currentPage: 1,
        continuationToken: null,
        sort: i.d$.ORDER_BY_UNSPECIFIED,
        elasticSearchCursor: null
    };
}
function p(e) {
    return Math.max(e.pageSize * d, f);
}
class h {
    reset() {
        (this._paginationState = _()), (this._sortedMemberIds = []), (this._cachedPaginationChunks = {}), (this._version += 1);
    }
    isMemberOnCurrentPage(e) {
        var t;
        return (null != (t = this._cachedPaginationChunks[this._paginationState.currentPage]) ? t : []).includes(e);
    }
    isMemberInAnyChunk(e) {
        return this._sortedMemberIds.includes(e);
    }
    _initPaginationFromRawMembers(e) {
        let t = [],
            n = e.reduce((e, n, r) => ((e = this._reduceMemberIdsToPaginationChunks(e, n.userId, r)), t.push(n.userId), e), {});
        return [t, n];
    }
    _buildPaginationFromMemberIds(e) {
        return e.reduce(this._reduceMemberIdsToPaginationChunks, {});
    }
    _rebuildPaginationChunksFromStoredMembers() {
        return (this._cachedPaginationChunks = this._buildPaginationFromMemberIds(this._sortedMemberIds)), (this._version += 1), !0;
    }
    getPaginationState() {
        return this._paginationState;
    }
    updatePaginationToken(e) {
        return e !== this._paginationState.continuationToken && ((this._paginationState = l(a({}, this._paginationState), { continuationToken: e })), !0);
    }
    _calculateNewPageFromPageSizeChange(e, t) {
        let { currentPage: n, pageSize: r } = this._paginationState;
        return e * r <= this._sortedMemberIds.length ? Math.max(Math.ceil((r / e) * (null != t ? t : n)), 1) : 1;
    }
    updatePaginationState(e) {
        let t = !1;
        if (null != e.pageSize && e.pageSize !== this._paginationState.pageSize) {
            var n;
            (t = !0), (e.currentPage = this._calculateNewPageFromPageSizeChange(null != (n = e.pageSize) ? n : this._paginationState.pageSize, e.currentPage));
        }
        return (this._paginationState = a({}, this._paginationState, e)), t && this._rebuildPaginationChunksFromStoredMembers(), [!0, t];
    }
    updateSortedMembers(e) {
        let [t, n] = this._initPaginationFromRawMembers(e);
        return (this._sortedMemberIds = t), (this._cachedPaginationChunks = n), (this._version += 1), !0;
    }
    updateSortedMembersByUserIds(e) {
        return (this._sortedMemberIds = e), this._rebuildPaginationChunksFromStoredMembers(), !0;
    }
    _findMember(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            n = e;
        n < this._sortedMemberIds.length && (n = this._sortedMemberIds.length - 1), n < 0 && (n = 0);
        let i = this._sortedMemberIds[e],
            o = r.ZP.getMember(this.guildId, i);
        for (; null == o && !((e += t) < 0) && !(e >= this._sortedMemberIds.length); ) (i = this._sortedMemberIds[e]), (null == (o = r.ZP.getMember(this.guildId, i)) ? void 0 : o.joinedAt) == null && (o = null);
        return o;
    }
    getElasticSearchPagination() {
        return this.getPaginationState().elasticSearchCursor;
    }
    get paginatedMembers() {
        return this._cachedPaginationChunks;
    }
    get version() {
        return this._version;
    }
    constructor(e, t) {
        o(this, 'guildId', void 0),
            o(this, '_sortedMemberIds', void 0),
            o(this, '_paginationState', void 0),
            o(this, '_version', void 0),
            o(this, '_cachedPaginationChunks', void 0),
            o(this, '_reduceMemberIdsToPaginationChunks', (e, t, n) => {
                let r = Math.floor(n / this._paginationState.pageSize) + 1;
                return null == e[r] && (e[r] = []), e[r].push(t), e;
            }),
            (this.guildId = e),
            (this._paginationState = _()),
            (this._version = 0);
        let [n, r] = this._initPaginationFromRawMembers(t);
        (this._sortedMemberIds = n), (this._cachedPaginationChunks = r), (this._version += 1);
    }
}
