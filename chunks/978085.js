n.d(t, {
    GR: () => u,
    b8: () => l,
    ul: () => c
});
var i = n(544891),
    r = n(570140),
    a = n(85521),
    s = n(73346),
    o = n(981631);
async function l() {
    try {
        let e = await (0, s.Kb)(
            {
                url: o.ANM.LIBRARY,
                oldFormErrors: !0,
                rejectWithError: !1
            },
            !1
        );
        r.Z.dispatch({
            type: 'LIBRARY_FETCH_SUCCESS',
            libraryApplications: e.body
        });
    } catch (e) {
        r.Z.dispatch({
            type: 'LIBRARY_FETCH_FAIL',
            error: e
        });
    }
}
async function u(e) {
    let t = e.primarySkuId;
    if (null == t) return;
    let n = (
        await i.tn
            .get({
                url: o.ANM.APPLICATION_BRANCH_LIST(e.id),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => e.body)
    ).map((n) =>
        a.Z.createForTestMode({
            id: e.id,
            skuId: t,
            branch: n
        })
    );
    r.Z.dispatch({
        type: 'LIBRARY_APPLICATIONS_TEST_MODE_ENABLED',
        libraryApplications: n
    });
}
function c(e, t, n) {
    r.Z.dispatch({
        type: 'LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE',
        applicationId: e,
        branchId: t,
        launchOptionId: n
    });
}
