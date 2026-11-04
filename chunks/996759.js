var s = r(620632),
    o = r(73153),
    i = r(652215);
r.d(
    e,
    {},
    {
        V: function (t) {
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
        },
    },
);
