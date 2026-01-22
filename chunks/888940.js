n.d(t, {
    E: () => s,
});
var a = n(562465),
    i = n(73153),
    r = n(652215);
async function s(e) {
    let t = await a.Bo.get({
        url: r.Rsh.STORE_EULA(e),
        oldFormErrors: !0,
        rejectWithError: !1,
    });
    i.h.dispatch({
        type: "EULA_FETCH_SUCCESS",
        eula: t.body,
    });
}
