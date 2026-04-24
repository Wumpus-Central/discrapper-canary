n.d(t, { A: () => d });
var a = n(636537),
    i = n(451988),
    l = n(228366),
    r = n(546183),
    o = n(652215);
let s = new i.OC(c, (e) => r.default.getFetchStateForApplication(e) !== r.FetchState.FETCHING);
async function c(e) {
    l.h.dispatch({
        type: "USER_AUTHORIZED_APPS_REQUEST",
        request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
    }),
        await a.Bo.get({
            url: o.Rsh.OAUTH2_TOKENS,
            oldFormErrors: !0,
            rejectWithError: !0,
            query: { application_ids: e },
        }).then(
            (t) =>
                l.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_UPDATE",
                    isFullFetch: null == e,
                    tokens: (function (e, t) {
                        let n = Object.fromEntries(t?.map((e) => [e, null]) ?? []);
                        for (let t of e) n[t.application.id] = t;
                        return n;
                    })(t.body, e),
                }),
            () =>
                l.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                    request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
                }),
        );
}
let d = {
    fetch(e) {
        r.default.getFetchState() !== r.FetchState.FETCHING && (null != e ? s.queue(e) : (s.reset(), c()));
    },
    delete(e) {
        a.Bo.del({ url: o.Rsh.OAUTH2_TOKEN(e), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            this.fetch();
        });
    },
};
