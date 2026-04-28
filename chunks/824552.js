a.d(t, { A: () => d });
var n = a(636537),
    l = a(451988),
    r = a(228366),
    i = a(546183),
    s = a(652215);
let o = new l.OC(c, (e) => i.default.getFetchStateForApplication(e) !== i.FetchState.FETCHING);
async function c(e) {
    r.h.dispatch({
        type: "USER_AUTHORIZED_APPS_REQUEST",
        request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
    }),
        await n.Bo.get({
            url: s.Rsh.OAUTH2_TOKENS,
            oldFormErrors: !0,
            rejectWithError: !0,
            query: { application_ids: e },
        }).then(
            (t) =>
                r.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_UPDATE",
                    isFullFetch: null == e,
                    tokens: (function (e, t) {
                        let a = Object.fromEntries(t?.map((e) => [e, null]) ?? []);
                        for (let t of e) a[t.application.id] = t;
                        return a;
                    })(t.body, e),
                }),
            () =>
                r.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                    request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
                }),
        );
}
let d = {
    fetch(e) {
        i.default.getFetchState() !== i.FetchState.FETCHING && (null != e ? o.queue(e) : (o.reset(), c()));
    },
    delete(e) {
        n.Bo.del({ url: s.Rsh.OAUTH2_TOKEN(e), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            this.fetch();
        });
    },
};
