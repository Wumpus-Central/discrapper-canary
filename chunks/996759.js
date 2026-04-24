n.d(t, { V: () => r });
var i = n(636537),
    l = n(228366),
    a = n(652215);
function r(e) {
    return (
        l.h.dispatch({ type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING", applicationId: e }),
        i.Bo.get({ url: a.Rsh.STORE_LAYOUT(e), rejectWithError: !0 })
            .then(
                (t) => (
                    l.h.dispatch({
                        type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
                        applicationId: e,
                        layout: t.body,
                    }),
                    t.body
                ),
            )
            .catch(() => {
                l.h.dispatch({ type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED", applicationId: e });
            })
    );
}
