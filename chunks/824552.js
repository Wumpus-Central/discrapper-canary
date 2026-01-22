n.d(t, {
    A: () => s,
});
var r = n(562465),
    i = n(73153),
    a = n(652215);
let s = {
    fetch() {
        i.h.dispatch({
            type: "USER_AUTHORIZED_APPS_REQUEST",
        }),
            r.Bo.get({
                url: a.Rsh.OAUTH2_TOKENS,
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then(
                (e) =>
                    i.h.dispatch({
                        type: "USER_AUTHORIZED_APPS_UPDATE",
                        tokens: e.body,
                    }),
                () =>
                    i.h.dispatch({
                        type: "USER_AUTHORIZED_APPS_UPDATE",
                        tokens: [],
                    }),
            );
    },
    fetchByApplicationId(e) {
        i.h.dispatch({
            type: "USER_AUTHORIZED_APPS_REQUEST_BY_ID",
            applicationId: e,
        }),
            r.Bo.get({
                url: a.Rsh.GET_APPLICATION_TOKENS(e),
                oldFormErrors: !0,
                rejectWithError: !0,
            }).then(
                (t) =>
                    i.h.dispatch({
                        type: "USER_AUTHORIZED_APPS_UPDATE_BY_ID",
                        tokens: t.body,
                        applicationId: e,
                    }),
                () =>
                    i.h.dispatch({
                        type: "USER_AUTHORIZED_APPS_UPDATE_BY_ID",
                        tokens: [],
                        applicationId: e,
                    }),
            );
    },
    delete(e) {
        r.Bo.del({
            url: a.Rsh.OAUTH2_TOKEN(e),
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(() => {
            this.fetch();
        });
    },
};
