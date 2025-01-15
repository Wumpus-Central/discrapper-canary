n.d(t, {
    N: function () {
        return c;
    }
});
var i = n(544891),
    s = n(570140),
    r = n(230307),
    a = n(70956),
    l = n(981631);
let o = 6 * a.Z.Millis.HOUR;
async function c() {
    let e = r.Z.lastFetched;
    if (!(null != e && Date.now() - e < o))
        try {
            let e = await i.tn.get({
                url: l.ANM.USER_ACTIVITY_STATISTICS,
                oldFormErrors: !0,
                rejectWithError: !1
            });
            s.Z.dispatch({
                type: 'USER_ACTIVITY_STATISTICS_FETCH_SUCCESS',
                statistics: e.body
            });
        } catch (e) {
            return e;
        }
}
