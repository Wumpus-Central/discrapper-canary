r.d(n, {
    GR: function () {
        return c;
    },
    b8: function () {
        return u;
    },
    ul: function () {
        return d;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(85521),
    s = r(73346),
    l = r(981631);
async function u() {
    try {
        let e = await (0, s.Kb)(
            {
                url: l.ANM.LIBRARY,
                oldFormErrors: !0,
                rejectWithError: !1
            },
            !1
        );
        a.Z.dispatch({
            type: 'LIBRARY_FETCH_SUCCESS',
            libraryApplications: e.body
        });
    } catch (e) {
        a.Z.dispatch({
            type: 'LIBRARY_FETCH_FAIL',
            error: e
        });
    }
}
async function c(e) {
    let n = e.primarySkuId;
    if (null == n) return;
    let r = (
        await i.tn
            .get({
                url: l.ANM.APPLICATION_BRANCH_LIST(e.id),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => e.body)
    ).map((r) =>
        o.Z.createForTestMode({
            id: e.id,
            skuId: n,
            branch: r
        })
    );
    a.Z.dispatch({
        type: 'LIBRARY_APPLICATIONS_TEST_MODE_ENABLED',
        libraryApplications: r
    });
}
function d(e, n, r) {
    a.Z.dispatch({
        type: 'LIBRARY_APPLICATION_ACTIVE_LAUNCH_OPTION_UPDATE',
        applicationId: e,
        branchId: n,
        launchOptionId: r
    });
}
