"use strict";
n.d(t, { A: () => d });
var r = n(562465),
    i = n(451988),
    s = n(73153),
    a = n(546183),
    o = n(652215);
let l = new i.OC(c, (e) => a.default.getFetchStateForApplication(e) !== a.FetchState.FETCHING);
function u(e, t) {
    let n = Object.fromEntries(t?.map((e) => [e, null]) ?? []);
    for (let t of e) n[t.application.id] = t;
    return n;
}
async function c(e) {
    s.h.dispatch({
        type: "USER_AUTHORIZED_APPS_REQUEST",
        request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
    }),
        await r.Bo.get({
            url: o.Rsh.OAUTH2_TOKENS,
            oldFormErrors: !0,
            rejectWithError: !0,
            query: { application_ids: e },
        }).then(
            (t) => s.h.dispatch({ type: "USER_AUTHORIZED_APPS_UPDATE", isFullFetch: null == e, tokens: u(t.body, e) }),
            () =>
                s.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                    request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
                }),
        );
}
let d = {
    fetch(e) {
        a.default.getFetchState() !== a.FetchState.FETCHING && (null != e ? l.queue(e) : (l.reset(), c()));
    },
    delete(e) {
        r.Bo.del({ url: o.Rsh.OAUTH2_TOKEN(e), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            this.fetch();
        });
    },
};
