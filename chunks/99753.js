"use strict";
let r;
n.d(t, { A: () => A });
var i = n(311907),
    a = n(73153),
    s = n(83971);
let o = new Map(),
    l = new Map(),
    u = new Map(),
    c = !1;
function d(e) {
    e(o), (o = new Map(o));
}
function _(e) {
    let { feedId: t, feed: n } = e;
    d((e) => e.set(t, n)), u.set(t, new Date());
}
function f(e) {
    let { feedId: t, state: n } = e;
    l.set(t, n);
}
function p() {
    o = new Map();
}
function h(e) {
    let { feedId: t } = e;
    if (!o.has(t)) return !1;
    d((e) => e.delete(t));
}
function m(e) {
    let { filters: t } = e;
    r = t;
}
function g() {
    c = !c;
}
class E extends i.Ay.Store {
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
        return c;
    }
    getMatchingInboxEntry(e) {
        let { activity: t, userId: n, feedId: r } = e,
            i = this.getFeed(r);
        if (null == i || null == t) return;
        let a = i.entries.reduce((e, t) => (t.content.author_id === n ? [...e, t.content] : [...e]), []);
        return (0, s.nU)(a, t);
    }
}
let A = new E(a.h, {
    CONNECTION_OPEN: p,
    CONTENT_INVENTORY_SET_FEED: _,
    CONTENT_INVENTORY_SET_FEED_STATE: f,
    CONTENT_INVENTORY_SET_FILTERS: m,
    CONTENT_INVENTORY_CLEAR_FEED: h,
    CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: g,
});
