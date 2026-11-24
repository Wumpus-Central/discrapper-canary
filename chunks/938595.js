var t = e(158390),
    u = e(855986),
    i = e(73153),
    c = e(927813);
let o = c.A.Millis.DAY,
    s = c.A.Millis.MINUTE,
    E = c.A.Millis.HOUR,
    a = null,
    C = null,
    d = null,
    T = !1,
    A = new t.A(s, E);
class O extends u.Ay.Store {
    static displayName = "CollectiblesRecommendationStore";
    getRecommendations() {
        return a;
    }
    shouldFetch() {
        return !(T || (null != d && Date.now() < d)) && (null == C || Date.now() - C >= o);
    }
}
let S = new O(i.h, {
    COLLECTIBLES_RECOMMENDATIONS_FETCH_START: function () {
        ((a = null), (C = null), (T = !0));
    },
    COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS: function (l) {
        ((a = l.recommendation), (C = Date.now()), (d = null), (T = !1), A.succeed());
    },
    COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE: function () {
        ((d = Date.now() + A.fail()), (T = !1));
    },
    LOGOUT: function () {
        ((a = null), (C = null), (d = null), (T = !1), A.succeed());
    },
});
e.d(n, {}, { A: S });
