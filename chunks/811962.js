n.d(t, { d: () => o, g: () => a });
var r = n(636537),
    i = n(35413),
    s = n(652215);
function o(e) {
    return l(s.Rsh.CONJURE_PROJECT_WS_TICKET(e));
}
function a(e) {
    return l(s.Rsh.CONJURE_PROJECT_REMIX_TICKET(e));
}
async function l(e) {
    let { body: t } = await r.Bo.post({ url: e, rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, i.d)() ?? t.url };
}
