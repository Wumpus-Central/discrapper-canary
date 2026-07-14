"use strict";
n.d(t, { A: () => c });
var i = n(636537),
    r = n(451988),
    a = n(228366),
    s = n(546183),
    l = n(652215);
let o = new r.OC(d, (e) => s.default.getFetchStateForApplication(e) !== s.FetchState.FETCHING);
async function d(e) {
    a.h.dispatch({
        type: "USER_AUTHORIZED_APPS_REQUEST",
        request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
    }),
        await i.Bo.get({
            url: l.Rsh.OAUTH2_TOKENS,
            oldFormErrors: !0,
            rejectWithError: !0,
            query: { application_ids: e },
        }).then(
            (t) =>
                a.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_UPDATE",
                    isFullFetch: null == e,
                    tokens: (function (e, t) {
                        let n = Object.fromEntries(t?.map((e) => [e, null]) ?? []);
                        for (let t of e) n[t.application.id] = t;
                        return n;
                    })(t.body, e),
                }),
            () =>
                a.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                    request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
                }),
        );
}
let c = {
    fetch(e) {
        s.default.getFetchState() !== s.FetchState.FETCHING && (null != e ? o.queue(e) : (o.reset(), d()));
    },
    delete(e) {
        i.Bo.del({ url: l.Rsh.OAUTH2_TOKEN(e), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            this.fetch();
        });
    },
};
