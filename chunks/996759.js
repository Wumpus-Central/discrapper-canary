a.d(t, { V: () => l });
var n = a(636537),
    r = a(228366),
    i = a(652215);
function l(e) {
    return (
        r.h.dispatch({ type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING", applicationId: e }),
        n.Bo.get({ url: i.Rsh.STORE_LAYOUT(e), rejectWithError: !0 })
            .then(
                (t) => (
                    r.h.dispatch({
                        type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
                        applicationId: e,
                        layout: t.body,
                    }),
                    t.body
                ),
            )
            .catch(() => {
                r.h.dispatch({ type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED", applicationId: e });
            })
    );
}
