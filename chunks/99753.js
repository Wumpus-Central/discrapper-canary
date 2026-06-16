"use strict";
let i;
n.d(t, { A: () => h });
var r = n(17928),
    s = n(228366),
    a = n(83971);
let o = new Map(),
    l = new Map(),
    u = new Map(),
    c = !1;
function d(e) {
    e(o), (o = new Map(o));
}
class _ extends r.Ay.Store {
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
        return i;
    }
    getFeedRequestId(e) {
        return this.getFeed(e)?.request_id;
    }
    getDebugImpressionCappingDisabled() {
        return c;
    }
    getMatchingInboxEntry(e) {
        let { activity: t, userId: n, feedId: i } = e,
            r = this.getFeed(i);
        if (null == r || null == t) return;
        let s = r.entries.reduce((e, t) => (t.content.author_id === n ? [...e, t.content] : [...e]), []);
        return (0, a.nU)(s, t);
    }
}
let h = new _(s.h, {
    CONNECTION_OPEN: function () {
        o = new Map();
    },
    CONTENT_INVENTORY_SET_FEED: function (e) {
        let { feedId: t, feed: n } = e;
        d((e) => e.set(t, n)), u.set(t, new Date());
    },
    CONTENT_INVENTORY_SET_FEED_STATE: function (e) {
        let { feedId: t, state: n } = e;
        l.set(t, n);
    },
    CONTENT_INVENTORY_SET_FILTERS: function (e) {
        let { filters: t } = e;
        i = t;
    },
    CONTENT_INVENTORY_CLEAR_FEED: function (e) {
        let { feedId: t } = e;
        if (!o.has(t)) return !1;
        d((e) => e.delete(t));
    },
    CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function () {
        c = !c;
    },
});
