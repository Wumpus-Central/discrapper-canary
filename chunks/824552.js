"use strict";
n.d(t, { A: () => d });
var a = n(636537),
    r = n(451988),
    i = n(228366),
    l = n(546183),
    s = n(652215);
let o = new r.OC(c, (e) => l.default.getFetchStateForApplication(e) !== l.FetchState.FETCHING);
async function c(e) {
    i.h.dispatch({
        type: "USER_AUTHORIZED_APPS_REQUEST",
        request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
    }),
        await a.Bo.get({
            url: s.Rsh.OAUTH2_TOKENS,
            oldFormErrors: !0,
            rejectWithError: !0,
            query: { application_ids: e },
        }).then(
            (t) =>
                i.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_UPDATE",
                    isFullFetch: null == e,
                    tokens: (function (e, t) {
                        let n = Object.fromEntries(t?.map((e) => [e, null]) ?? []);
                        for (let t of e) n[t.application.id] = t;
                        return n;
                    })(t.body, e),
                }),
            () =>
                i.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                    request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
                }),
        );
}
let d = {
    fetch(e) {
        l.default.getFetchState() !== l.FetchState.FETCHING && (null != e ? o.queue(e) : (o.reset(), c()));
    },
    delete(e) {
        a.Bo.del({ url: s.Rsh.OAUTH2_TOKEN(e), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            this.fetch();
        });
    },
};
