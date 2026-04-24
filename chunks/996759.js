"use strict";
n.d(t, { V: () => l });
var i = n(636537),
    a = n(228366),
    s = n(652215);
function l(e) {
    return (
        a.h.dispatch({ type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCHING", applicationId: e }),
        i.Bo.get({ url: s.Rsh.STORE_LAYOUT(e), rejectWithError: !0 })
            .then(
                (t) => (
                    a.h.dispatch({
                        type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_SUCCESS",
                        applicationId: e,
                        layout: t.body,
                    }),
                    t.body
                ),
            )
            .catch(() => {
                a.h.dispatch({ type: "APPLICATION_STORE_DIRECTORY_LAYOUT_FETCH_FAILED", applicationId: e });
            })
    );
}
