n.d(t, {
    ZP: () => f,
    tJ: () => _
}),
    n(411104);
var i = n(664751),
    r = n(544891),
    a = n(710845),
    s = n(70956),
    o = n(981631);
function l(e, t, n) {
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
let u = 5000,
    c = 5;
class d {
    async fetch(e, t, n) {
        if (!this.isCanceled)
            try {
                let r = await this.makeRequest();
                if (null == r || this.isCanceled) return;
                if (200 === r.status) e(r);
                else if (202 === r.status) {
                    var i;
                    if (((this.query.attempts = (null !== (i = this.query.attempts) && void 0 !== i ? i : 0) + 1), this.query.attempts > c)) return;
                    let a = parseInt(r.headers['retry-after']);
                    (this.retryDelay = isNaN(a) || 0 === a ? u : a * s.Z.Millis.SECOND), this.retryLater(e, t, n), t(r);
                }
            } catch (e) {
                new a.Z('SearchFetcher').error(e), n(e);
            }
    }
    cancel() {
        (this.isCanceled = !0), null != this.indexingPollId && clearTimeout(this.indexingPollId);
    }
    retryLater(e, t, n) {
        null != this.indexingPollId && clearTimeout(this.indexingPollId), (this.indexingPollId = setTimeout(this.fetch.bind(this, e, t, n), this.retryDelay));
    }
    constructor(e, t, n) {
        l(this, 'indexingPollId', void 0), l(this, 'searchId', void 0), l(this, 'searchType', void 0), l(this, 'query', void 0), l(this, 'retryDelay', void 0), l(this, 'isCanceled', !1), (this.searchId = e), (this.searchType = t), (this.query = n);
    }
}
class f extends d {
    getEndpoint() {
        switch (this.searchType) {
            case o.aib.DMS:
                return o.ANM.SEARCH_DMS;
            case o.aib.FAVORITES:
                return o.ANM.SEARCH_FAVORITES;
            case o.aib.GUILD:
                if (null == this.searchId || '' === this.searchId) return;
                return o.ANM.SEARCH_GUILD(this.searchId);
            case o.aib.CHANNEL:
                if (null == this.searchId || '' === this.searchId) return;
                return o.ANM.SEARCH_CHANNEL(this.searchId);
            default:
                throw Error('[SearchFetcher] Unhandled search type: '.concat(this.searchType));
        }
    }
    makeRequest() {
        let e = this.getEndpoint();
        return null == e
            ? null
            : r.tn.get({
                  url: e,
                  query: i.stringify(this.query),
                  oldFormErrors: !0,
                  rejectWithError: !1
              });
    }
}
class _ extends d {
    getEndpoint() {
        switch (this.searchType) {
            case o.aib.DMS:
                return o.ANM.SEARCH_TABS_DMS;
            case o.aib.GUILD_CHANNEL:
            case o.aib.GUILD:
                if (null == this.searchId || '' === this.searchId) return;
                return o.ANM.SEARCH_TABS_GUILD(this.searchId);
            case o.aib.CHANNEL:
                if (null == this.searchId || '' === this.searchId) return;
                return o.ANM.SEARCH_TABS_CHANNEL(this.searchId);
            default:
                throw Error('[SearchFetcher] Unhandled search type: '.concat(this.searchType));
        }
    }
    makeRequest() {
        let e = this.getEndpoint();
        return null == e
            ? null
            : r.tn.post({
                  url: e,
                  body: this.payload,
                  oldFormErrors: !0,
                  rejectWithError: !1
              });
    }
    constructor(e, t, n, i) {
        super(e, t, n), l(this, 'payload', void 0), (this.payload = i);
    }
}
