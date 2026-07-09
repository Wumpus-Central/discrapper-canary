l.d(e, { A: () => p });
var r = l(636537),
    a = l(451988),
    u = l(228366),
    n = l(546183),
    i = l(652215);
let c = new a.OC(o, (t) => n.default.getFetchStateForApplication(t) !== n.FetchState.FETCHING);
async function o(t) {
    u.h.dispatch({
        type: "USER_AUTHORIZED_APPS_REQUEST",
        request: null == t ? { type: "full" } : { type: "partial", applicationIds: t },
    }),
        await r.Bo.get({
            url: i.Rsh.OAUTH2_TOKENS,
            oldFormErrors: !0,
            rejectWithError: !0,
            query: { application_ids: t },
        }).then(
            (e) =>
                u.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_UPDATE",
                    isFullFetch: null == t,
                    tokens: (function (t, e) {
                        let l = Object.fromEntries(e?.map((t) => [t, null]) ?? []);
                        for (let e of t) l[e.application.id] = e;
                        return l;
                    })(e.body, t),
                }),
            () =>
                u.h.dispatch({
                    type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                    request: null == t ? { type: "full" } : { type: "partial", applicationIds: t },
                }),
        );
}
let p = {
    fetch(t) {
        n.default.getFetchState() !== n.FetchState.FETCHING && (null != t ? c.queue(t) : (c.reset(), o()));
    },
    delete(t) {
        r.Bo.del({ url: i.Rsh.OAUTH2_TOKEN(t), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            this.fetch();
        });
    },
};
