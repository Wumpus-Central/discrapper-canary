n.d(t, {
    ZP: () => f,
    tJ: () => _
}),
    n(415506);
var r = n(664751),
    i = n(544891),
    a = n(710845),
    o = n(70956),
    s = n(981631);
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
let c = 5000,
    u = 5;
class d {
    async fetch(e, t, n) {
        if (!this.isCanceled)
            try {
                let i = await this.makeRequest();
                if (null == i || this.isCanceled) return;
                if (200 === i.status) e(i);
                else if (202 === i.status) {
                    var r;
                    if (((this.query.attempts = (null != (r = this.query.attempts) ? r : 0) + 1), this.query.attempts > u)) return;
                    let a = parseInt(i.headers['retry-after']);
                    (this.retryDelay = isNaN(a) || 0 === a ? c : a * o.Z.Millis.SECOND), this.retryLater(e, t, n), t(i);
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
            case s.aib.DMS:
                return s.ANM.SEARCH_DMS;
            case s.aib.FAVORITES:
                return s.ANM.SEARCH_FAVORITES;
            case s.aib.GUILD:
                if (null == this.searchId || '' === this.searchId) return;
                return s.ANM.SEARCH_GUILD(this.searchId);
            case s.aib.CHANNEL:
                if (null == this.searchId || '' === this.searchId) return;
                return s.ANM.SEARCH_CHANNEL(this.searchId);
            default:
                throw Error('[SearchFetcher] Unhandled search type: '.concat(this.searchType));
        }
    }
    makeRequest() {
        let e = this.getEndpoint();
        return null == e
            ? null
            : i.tn.get({
                  url: e,
                  query: r.stringify(this.query),
                  oldFormErrors: !0,
                  rejectWithError: !1
              });
    }
}
class _ extends d {
    getEndpoint() {
        switch (this.searchType) {
            case s.aib.DMS:
                return s.ANM.SEARCH_TABS_DMS;
            case s.aib.GUILD_CHANNEL:
            case s.aib.GUILD:
                if (null == this.searchId || '' === this.searchId) return;
                return s.ANM.SEARCH_TABS_GUILD(this.searchId);
            case s.aib.CHANNEL:
                if (null == this.searchId || '' === this.searchId) return;
                return s.ANM.SEARCH_TABS_CHANNEL(this.searchId);
            default:
                throw Error('[SearchFetcher] Unhandled search type: '.concat(this.searchType));
        }
    }
    makeRequest() {
        let e = this.getEndpoint();
        return null == e
            ? null
            : i.tn.post({
                  url: e,
                  body: this.payload,
                  oldFormErrors: !0,
                  rejectWithError: !1
              });
    }
    constructor(e, t, n, r) {
        super(e, t, n), l(this, 'payload', void 0), (this.payload = r);
    }
}
