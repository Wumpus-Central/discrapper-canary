r.d(e, { V: () => n });
var s = r(636537),
    o = r(228366),
    i = r(652215);
function n(t) {
    return (
        o.h.dispatch({ type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING", applicationId: t }),
        s.Bo.get({ url: i.Rsh.STORE_LAYOUT(t), rejectWithError: !0 })
            .then(
                (e) => (
                    o.h.dispatch({
                        type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
                        applicationId: t,
                        layout: e.body,
                    }),
                    e.body
                ),
            )
            .catch(() => {
                o.h.dispatch({ type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED", applicationId: t });
            })
    );
}
