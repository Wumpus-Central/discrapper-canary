n.d(t, { N: () => c });
var r = n(544891),
    i = n(570140),
    a = n(230307),
    o = n(70956),
    s = n(981631);
let l = 6 * o.Z.Millis.HOUR;
async function c() {
    let e = a.Z.lastFetched;
    if (!(null != e && Date.now() - e < l))
        try {
            let e = await r.tn.get({
                url: s.ANM.USER_ACTIVITY_STATISTICS,
                oldFormErrors: !0,
                rejectWithError: !1
            });
            i.Z.dispatch({
                type: 'USER_ACTIVITY_STATISTICS_FETCH_SUCCESS',
                statistics: e.body
            });
        } catch (e) {
            return e;
        }
}
