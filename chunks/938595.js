l.d(n, { A: () => c });
var t = l(17928),
    i = l(73153);
let o = l(927813).A.Millis.DAY,
    u = null,
    a = null,
    d = !1;
class s extends t.Ay.Store {
    static displayName = "CollectiblesRecommendationStore";
    getRecommendations() {
        return u;
    }
    shouldFetch() {
        return !d && (null == a || Date.now() - a >= o);
    }
}
let c = new s(i.h, {
    COLLECTIBLES_RECOMMENDATIONS_FETCH_START: function () {
        ((u = null), (a = null), (d = !0));
    },
    COLLECTIBLES_RECOMMENDATIONS_FETCH_SUCCESS: function (e) {
        ((u = e.recommendation), (a = Date.now()), (d = !1));
    },
    COLLECTIBLES_RECOMMENDATIONS_FETCH_FAILURE: function () {
        d = !1;
    },
    LOGOUT: function () {
        ((u = null), (a = null), (d = !1));
    },
});
