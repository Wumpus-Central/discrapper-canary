r.d(n, {
    ZP: function () {
        return h;
    },
    tJ: function () {
        return _;
    }
});
var i = r(411104);
var a = r(664751),
    o = r(544891),
    s = r(710845),
    l = r(70956),
    u = r(981631);
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
let d = 5000,
    f = 5;
class p {
    async fetch(e, n, r) {
        if (!this.isCanceled)
            try {
                let a = await this.makeRequest();
                if (null == a || this.isCanceled) return;
                if (200 === a.status) e(a);
                else if (202 === a.status) {
                    var i;
                    if (((this.query.attempts = (null !== (i = this.query.attempts) && void 0 !== i ? i : 0) + 1), this.query.attempts > f)) return;
                    let o = parseInt(a.headers['retry-after']);
                    (this.retryDelay = isNaN(o) || 0 === o ? d : o * l.Z.Millis.SECOND), this.retryLater(e, n, r), n(a);
                }
            } catch (e) {
                new s.Z('SearchFetcher').error(e), r(e);
            }
    }
    cancel() {
        (this.isCanceled = !0), null != this.indexingPollId && clearTimeout(this.indexingPollId);
    }
    retryLater(e, n, r) {
        null != this.indexingPollId && clearTimeout(this.indexingPollId), (this.indexingPollId = setTimeout(this.fetch.bind(this, e, n, r), this.retryDelay));
    }
    constructor(e, n, r) {
        c(this, 'indexingPollId', void 0), c(this, 'searchId', void 0), c(this, 'searchType', void 0), c(this, 'query', void 0), c(this, 'retryDelay', void 0), c(this, 'isCanceled', !1), (this.searchId = e), (this.searchType = n), (this.query = r);
    }
}
class h extends p {
    getEndpoint() {
        switch (this.searchType) {
            case u.aib.DMS:
                return u.ANM.SEARCH_DMS;
            case u.aib.FAVORITES:
                return u.ANM.SEARCH_FAVORITES;
            case u.aib.GUILD:
                if (null == this.searchId || '' === this.searchId) return;
                return u.ANM.SEARCH_GUILD(this.searchId);
            case u.aib.CHANNEL:
                if (null == this.searchId || '' === this.searchId) return;
                return u.ANM.SEARCH_CHANNEL(this.searchId);
            default:
                throw Error('[SearchFetcher] Unhandled search type: '.concat(this.searchType));
        }
    }
    makeRequest() {
        let e = this.getEndpoint();
        return null == e
            ? null
            : o.tn.get({
                  url: e,
                  query: a.stringify(this.query),
                  oldFormErrors: !0,
                  rejectWithError: !1
              });
    }
}
class _ extends p {
    getEndpoint() {
        switch (this.searchType) {
            case u.aib.DMS:
                return u.ANM.SEARCH_TABS_DMS;
            case u.aib.GUILD_CHANNEL:
            case u.aib.GUILD:
                if (null == this.searchId || '' === this.searchId) return;
                return u.ANM.SEARCH_TABS_GUILD(this.searchId);
            case u.aib.CHANNEL:
                if (null == this.searchId || '' === this.searchId) return;
                return u.ANM.SEARCH_TABS_CHANNEL(this.searchId);
            default:
                throw Error('[SearchFetcher] Unhandled search type: '.concat(this.searchType));
        }
    }
    makeRequest() {
        let e = this.getEndpoint();
        return null == e
            ? null
            : o.tn.post({
                  url: e,
                  body: this.payload,
                  oldFormErrors: !0,
                  rejectWithError: !1
              });
    }
    constructor(e, n, r, i) {
        super(e, n, r), c(this, 'payload', void 0), (this.payload = i);
    }
}
