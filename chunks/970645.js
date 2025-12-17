n.d(t, { o: () => s });
var r = n(544891),
    i = n(570140),
    l = n(355467),
    a = n(853872),
    o = n(981631);
async function s() {
    try {
        i.Z.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH" });
        let { body: e } = await r.tn.get({
                url: o.ANM.CHECKOUT_RECOVERY,
                rejectWithError: !0,
            }),
            t = (null == e ? void 0 : e.is_eligible) === !0;
        t && !a.Z.hasFetchedPaymentSources && (await (0, l.tZ)()),
            i.Z.dispatch({
                type: "CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS",
                isTargeted: t,
            });
    } catch (e) {
        i.Z.dispatch({ type: "CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE" });
    }
}
