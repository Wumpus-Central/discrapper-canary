n.d(t, { o: () => o });
var i = n(544891),
    r = n(570140),
    l = n(355467),
    s = n(853872),
    a = n(981631);
async function o() {
    try {
        r.Z.dispatch({ type: 'CHECKOUT_RECOVERY_STATUS_FETCH' });
        let { body: e } = await i.tn.get({
                url: a.ANM.CHECKOUT_RECOVERY,
                rejectWithError: !0
            }),
            t = (null == e ? void 0 : e.is_eligible) === !0;
        t && !s.Z.hasFetchedPaymentSources && (await (0, l.tZ)()),
            r.Z.dispatch({
                type: 'CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS',
                isTargeted: t
            });
    } catch (e) {
        r.Z.dispatch({ type: 'CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE' });
    }
}
