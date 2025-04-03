n.d(t, { o: () => a });
var r = n(544891),
    i = n(570140),
    o = n(355467),
    l = n(853872),
    s = n(981631);
async function a() {
    try {
        i.Z.dispatch({ type: 'CHECKOUT_RECOVERY_STATUS_FETCH' });
        let { body: e } = await r.tn.get({
                url: s.ANM.CHECKOUT_RECOVERY,
                rejectWithError: !0
            }),
            t = (null == e ? void 0 : e.is_eligible) === !0;
        t && !l.Z.hasFetchedPaymentSources && (await (0, o.tZ)()),
            i.Z.dispatch({
                type: 'CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS',
                isTargeted: t
            });
    } catch (e) {
        i.Z.dispatch({ type: 'CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE' });
    }
}
