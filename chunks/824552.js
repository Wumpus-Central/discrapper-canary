"use strict";
a.d(t, { A: () => c });
var r = a(562465),
    l = a(451988),
    n = a(73153),
    i = a(546183),
    s = a(652215);
let o = new l.OC(d, (e) => i.default.getFetchStateForApplication(e) !== i.FetchState.FETCHING);
async function d(e) {
    n.h.dispatch({
        type: "USER_AUTHORIZED_APPS_REQUEST",
        request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
    }),
        await r.Bo.get({
            url: s.Rsh.OAUTH2_TOKENS,
            oldFormErrors: !0,
            rejectWithError: !0,
            query: { application_ids: e },
        }).then(
            (t) =>
                n.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_UPDATE",
                    isFullFetch: null == e,
                    tokens: (function (e, t) {
                        let a = Object.fromEntries(t?.map((e) => [e, null]) ?? []);
                        for (let t of e) a[t.application.id] = t;
                        return a;
                    })(t.body, e),
                }),
            () =>
                n.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                    request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
                }),
        );
}
let c = {
    fetch(e) {
        i.default.getFetchState() !== i.FetchState.FETCHING && (null != e ? o.queue(e) : (o.reset(), d()));
    },
    delete(e) {
        r.Bo.del({ url: s.Rsh.OAUTH2_TOKEN(e), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            this.fetch();
        });
    },
};
