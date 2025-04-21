n.d(t, { N: () => c });
var i = n(544891),
    r = n(570140),
    s = n(230307),
    l = n(70956),
    a = n(981631);
let o = 6 * l.Z.Millis.HOUR;
async function c() {
    let e = s.Z.lastFetched;
    if (!(null != e && Date.now() - e < o))
        try {
            let e = await i.tn.get({
                url: a.ANM.USER_ACTIVITY_STATISTICS,
                oldFormErrors: !0,
                rejectWithError: !1
            });
            r.Z.dispatch({
                type: 'USER_ACTIVITY_STATISTICS_FETCH_SUCCESS',
                statistics: e.body
            });
        } catch (e) {
            return e;
        }
}
