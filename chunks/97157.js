n.d(t, { P: () => u, A: () => _ });
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
var d = n(645131),
    c = n(296872);
let u = (0, i.UT)(d.A, {
    getQueryId: (e) => (null != e ? `embedded-app-csp:${e}` : null),
    get: (e) => (null != e ? d.A.getPolicy(e) : null),
    load: async (e) => {
        null != e && (await o(e));
    },
});
function _(e) {
    let t = (0, c.XF)("useEmbeddedAppCSP"),
        n = t && null != e ? (0, r.S)(e) : null,
        { data: i, error: a } = u(n);
    return t
        ? null == n
            ? { status: "developer-served" }
            : null != i
              ? { status: "ready", policy: i, routerOrigin: n }
              : null != a
                ? { status: "failed" }
                : { status: "loading" }
        : { status: "not-enforced" };
}
