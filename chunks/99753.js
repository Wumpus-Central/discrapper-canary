"use strict";
let r;
n.d(t, { A: () => f });
var i = n(311907),
    s = n(73153),
    a = n(83971);
let o = new Map(),
    l = new Map(),
    u = new Map(),
    d = !1;
function c(e) {
    e(o), (o = new Map(o));
}
class _ extends i.Ay.Store {
    static displayName = "ContentInventoryStore";
    getFeeds() {
        return o;
    }
    getFeed(e) {
        return o.get(e);
    }
    getFeedState(e) {
        return l.get(e);
    }
    getLastFeedFetchDate(e) {
        return u.get(e);
    }
    getFilters() {
        return r;
    }
    getFeedRequestId(e) {
        return this.getFeed(e)?.request_id;
    }
    getDebugImpressionCappingDisabled() {
        return d;
    }
    getMatchingInboxEntry(e) {
        let { activity: t, userId: n, feedId: r } = e,
            i = this.getFeed(r);
        if (null == i || null == t) return;
        let s = i.entries.reduce((e, t) => (t.content.author_id === n ? [...e, t.content] : [...e]), []);
        return (0, a.nU)(s, t);
    }
}
let f = new _(s.h, {
    CONNECTION_OPEN: function () {
        o = new Map();
    },
    CONTENT_INVENTORY_SET_FEED: function (e) {
        let { feedId: t, feed: n } = e;
        c((e) => e.set(t, n)), u.set(t, new Date());
    },
    CONTENT_INVENTORY_SET_FEED_STATE: function (e) {
        let { feedId: t, state: n } = e;
        l.set(t, n);
    },
    CONTENT_INVENTORY_SET_FILTERS: function (e) {
        let { filters: t } = e;
        r = t;
    },
    CONTENT_INVENTORY_CLEAR_FEED: function (e) {
        let { feedId: t } = e;
        if (!o.has(t)) return !1;
        c((e) => e.delete(t));
    },
    CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function () {
        d = !d;
    },
});
