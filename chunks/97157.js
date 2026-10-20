n.d(t, { P: () => c, A: () => u });
var i = n(17928),
    r = n(956518),
    a = n(636537),
    s = n(73153),
    l = n(38405);
async function o(e) {
    try {
        let { body: t } = await a.Bo.get({ url: `${e}/.discord/csp.json`, rejectWithError: !0 });
        s.h.dispatch({ type: "EMBEDDED_APP_CSP_FETCH_SUCCESS", routerOrigin: e, policy: t });
    } catch (e) {
        throw (l.A.captureException(e), e);
    }
}
var d = n(645131);
let c = (0, i.UT)(d.A, {
    getQueryId: (e) => (null != e ? `embedded-app-csp:${e}` : null),
    get: (e) => (null != e ? d.A.getPolicy(e) : null),
    load: async (e) => {
        null != e && (await o(e));
    },
});
function u(e, t) {
    let n = 2 === t && null != e ? (0, r.S)(e) : null,
        { data: i, error: a } = c(n);
    return null == n
        ? { status: "unneeded" }
        : null != i
          ? { status: "ready", policy: i }
          : null != a
            ? { status: "failed" }
            : { status: "loading" };
}
