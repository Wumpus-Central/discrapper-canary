n.d(t, { J: () => h, v: () => d });
var r = n(735438),
    l = n(636537),
    a = n(228366),
    s = n(913122),
    i = n(671281),
    c = n(652215);
let o = ["request_params"];
function u(e) {
    return (0, r.isObject)(e)
        ? (0, r.isArray)(e)
            ? e.map(u)
            : (0, r.reduce)(
                  e,
                  (e, t, n) => {
                      let l = (0, r.camelCase)(n);
                      return o.includes(n) ? { ...e, [l]: t } : { ...e, [l]: u(t) };
                  },
                  {},
              )
        : e;
}
async function d(e) {
    let { tenantId: t, layoutId: n, abortSignal: r } = e;
    if (!i.A.isFetchingLayout(t, n))
        try {
            a.h.dispatch({ type: "LAYOUT_SYSTEM_FETCH", tenantId: t, layoutId: n });
            let e = await l.Bo.get({ url: c.Rsh.LAYOUT_SYSTEM(t, n), rejectWithError: !0, signal: r });
            a.h.dispatch({ type: "LAYOUT_SYSTEM_FETCH_SUCCESS", tenantId: t, layout: u(e.body) });
        } catch (r) {
            let e = new s.LG(r);
            throw (a.h.dispatch({ type: "LAYOUT_SYSTEM_FETCH_FAILURE", tenantId: t, layoutId: n, apiError: e }), e);
        }
}
async function h(e) {
    let { tenantId: t, templateId: n, abortSignal: r, requestParams: o } = e;
    if (!i.A.isFetchingTemplate(t, n, o))
        try {
            a.h.dispatch({ type: "LAYOUT_SYSTEM_TEMPLATE_FETCH", tenantId: t, templateId: n, requestParams: o });
            let e = await l.Bo.get({
                url: c.Rsh.LAYOUT_SYSTEM_TEMPLATE(t, n),
                rejectWithError: !0,
                signal: r,
                query: o,
            });
            a.h.dispatch({
                type: "LAYOUT_SYSTEM_TEMPLATE_FETCH_SUCCESS",
                tenantId: t,
                templateId: n,
                requestParams: o,
                layout: u(e.body),
            });
        } catch (r) {
            let e = new s.LG(r);
            throw (
                (a.h.dispatch({
                    type: "LAYOUT_SYSTEM_TEMPLATE_FETCH_FAILURE",
                    tenantId: t,
                    templateId: n,
                    requestParams: o,
                    apiError: e,
                }),
                e)
            );
        }
}
