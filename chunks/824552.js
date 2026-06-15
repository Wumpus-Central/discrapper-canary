"use strict";
n.d(t, { A: () => c });
var i = n(636537),
    r = n(451988),
    s = n(228366),
    a = n(546183),
    o = n(652215);
let l = new r.OC(u, (e) => a.default.getFetchStateForApplication(e) !== a.FetchState.FETCHING);
async function u(e) {
    s.h.dispatch({
        type: "USER_AUTHORIZED_APPS_REQUEST",
        request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
    }),
        await i.Bo.get({
            url: o.Rsh.OAUTH2_TOKENS,
            oldFormErrors: !0,
            rejectWithError: !0,
            query: { application_ids: e },
        }).then(
            (t) =>
                s.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_UPDATE",
                    isFullFetch: null == e,
                    tokens: (function (e, t) {
                        let n = Object.fromEntries(t?.map((e) => [e, null]) ?? []);
                        for (let t of e) n[t.application.id] = t;
                        return n;
                    })(t.body, e),
                }),
            () =>
                s.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                    request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
                }),
        );
}
let c = {
    fetch(e) {
        a.default.getFetchState() !== a.FetchState.FETCHING && (null != e ? l.queue(e) : (l.reset(), u()));
    },
    delete(e) {
        i.Bo.del({ url: o.Rsh.OAUTH2_TOKEN(e), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            this.fetch();
        });
    },
};
