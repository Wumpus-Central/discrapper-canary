n.d(t, {
    GR: () => c,
    b8: () => l,
    ul: () => u
});
var r = n(544891),
    i = n(570140),
    o = n(85521),
    a = n(73346),
    s = n(981631);
async function l() {
    try {
        let e = await (0, a.Kb)(
            {
                url: s.ANM.LIBRARY,
                oldFormErrors: !0,
                rejectWithError: !1
            },
            !1
        );
        i.Z.dispatch({
            type: 'LIBRARY_FETCH_SUCCESS',
            libraryApplications: e.body
        });
    } catch (e) {
        i.Z.dispatch({
            type: 'LIBRARY_FETCH_FAIL',
            error: e
        });
    }
}
async function c(e) {
    let t = e.primarySkuId;
    if (null == t) return;
    let n = (
        await r.tn
            .get({
                url: s.ANM.APPLICATION_BRANCH_LIST(e.id),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => e.body)
    ).map((n) =>
        o.Z.createForTestMode({
            id: e.id,
            skuId: t,
            branch: n
        })
    );
    i.Z.dispatch({
        type: 'LIBRARY_APPLICATIONS_TEST_MODE_ENABLED',
        libraryApplications: n
    });
}
function u(e, t, n) {
    i.Z.dispatch({
        type: 'LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE',
        applicationId: e,
        branchId: t,
        launchOptionId: n
    });
}
