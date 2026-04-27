"use strict";
r.d(t, { A: () => d });
var n = r(636537),
    i = r(451988),
    a = r(228366),
    s = r(546183),
    l = r(652215);
let o = new i.OC(c, (e) => s.default.getFetchStateForApplication(e) !== s.FetchState.FETCHING);
async function c(e) {
    a.h.dispatch({
        type: "USER_AUTHORIZED_APPS_REQUEST",
        request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
    }),
        await n.Bo.get({
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
                        let r = Object.fromEntries(t?.map((e) => [e, null]) ?? []);
                        for (let t of e) r[t.application.id] = t;
                        return r;
                    })(t.body, e),
                }),
            () =>
                a.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                    request: null == e ? { type: "full" } : { type: "partial", applicationIds: e },
                }),
        );
}
let d = {
    fetch(e) {
        s.default.getFetchState() !== s.FetchState.FETCHING && (null != e ? o.queue(e) : (o.reset(), c()));
    },
    delete(e) {
        n.Bo.del({ url: l.Rsh.OAUTH2_TOKEN(e), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            this.fetch();
        });
    },
};
