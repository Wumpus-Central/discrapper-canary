r.d(n, {
    IF: function () {
        return _;
    },
    LU: function () {
        return d;
    },
    Rt: function () {
        return g;
    },
    hW: function () {
        return f;
    },
    t3: function () {
        return m;
    }
});
var i,
    a = r(724458);
var o = r(653041);
var s = r(47120);
var l = r(271383),
    u = r(588215);
function c(e, n, r) {
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
let d = [12, 25, 50, 100],
    f = 7,
    p = 5,
    h = 250;
function _() {
    return {
        pageSize: d[0],
        currentPage: 1,
        continuationToken: null,
        sort: u.d$.ORDER_BY_UNSPECIFIED,
        elasticSearchCursor: null
    };
}
function m(e) {
    return Math.max(e.pageSize * p, h);
}
!(function (e) {
    (e[(e.FORWARD = 1)] = 'FORWARD'), (e[(e.BACKWARD = -1)] = 'BACKWARD');
})(i || (i = {}));
class g {
    reset() {
        (this._paginationState = _()), (this._sortedMemberIds = []), (this._cachedPaginationChunks = {}), (this._version += 1);
    }
    isMemberOnCurrentPage(e) {
        var n;
        return (null !== (n = this._cachedPaginationChunks[this._paginationState.currentPage]) && void 0 !== n ? n : []).includes(e);
    }
    isMemberInAnyChunk(e) {
        return this._sortedMemberIds.includes(e);
    }
    _initPaginationFromRawMembers(e) {
        let n = [],
            r = e.reduce((e, r, i) => ((e = this._reduceMemberIdsToPaginationChunks(e, r.userId, i)), n.push(r.userId), e), {});
        return [n, r];
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
        return (
            e !== this._paginationState.continuationToken &&
            ((this._paginationState = {
                ...this._paginationState,
                continuationToken: e
            }),
            !0)
        );
    }
    _calculateNewPageFromPageSizeChange(e, n) {
        let { currentPage: r, pageSize: i } = this._paginationState;
        return e * i <= this._sortedMemberIds.length ? Math.max(Math.ceil((i / e) * (null != n ? n : r)), 1) : 1;
    }
    updatePaginationState(e) {
        let n = !1;
        if (null != e.pageSize && e.pageSize !== this._paginationState.pageSize) {
            var r;
            (n = !0), (e.currentPage = this._calculateNewPageFromPageSizeChange(null !== (r = e.pageSize) && void 0 !== r ? r : this._paginationState.pageSize, e.currentPage));
        }
        return (
            (this._paginationState = {
                ...this._paginationState,
                ...e
            }),
            n && this._rebuildPaginationChunksFromStoredMembers(),
            [!0, n]
        );
    }
    updateSortedMembers(e) {
        let [n, r] = this._initPaginationFromRawMembers(e);
        return (this._sortedMemberIds = n), (this._cachedPaginationChunks = r), (this._version += 1), !0;
    }
    updateSortedMembersByUserIds(e) {
        return (this._sortedMemberIds = e), this._rebuildPaginationChunksFromStoredMembers(), !0;
    }
    _findMember(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
            r = e;
        r < this._sortedMemberIds.length && (r = this._sortedMemberIds.length - 1), r < 0 && (r = 0);
        let i = this._sortedMemberIds[e],
            a = l.ZP.getMember(this.guildId, i);
        for (; null == a && !((e += n) < 0) && !(e >= this._sortedMemberIds.length); ) {
            (i = this._sortedMemberIds[e]), (null == (a = l.ZP.getMember(this.guildId, i)) ? void 0 : a.joinedAt) == null && (a = null);
        }
        return a;
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
    constructor(e, n) {
        c(this, 'guildId', void 0),
            c(this, '_sortedMemberIds', void 0),
            c(this, '_paginationState', void 0),
            c(this, '_version', void 0),
            c(this, '_cachedPaginationChunks', void 0),
            c(this, '_reduceMemberIdsToPaginationChunks', (e, n, r) => {
                let i = Math.floor(r / this._paginationState.pageSize) + 1;
                return null == e[i] && (e[i] = []), e[i].push(n), e;
            }),
            (this.guildId = e),
            (this._paginationState = _()),
            (this._version = 0);
        let [r, i] = this._initPaginationFromRawMembers(n);
        (this._sortedMemberIds = r), (this._cachedPaginationChunks = i), (this._version += 1);
    }
}
