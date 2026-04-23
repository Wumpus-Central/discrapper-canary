r.d(t, { E: () => s });
var a = r(562465),
    n = r(73153),
    l = r(652215);
async function s(e) {
    let t = await a.Bo.get({ url: l.Rsh.STORE_EULA(e), oldFormErrors: !0, rejectWithError: !1 });
    n.h.dispatch({ type: "EULA_FETCH_SUCCESS", eula: t.body });
}
