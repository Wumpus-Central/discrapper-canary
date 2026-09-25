n.d(t, { d: () => i, g: () => a });
var r = n(636537),
    o = n(208137),
    s = n(652215);
function i(e) {
    return c(s.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e));
}
function a(e) {
    return c(s.Rsh.VIBEGRATIONS_PROJECT_REMIX_TICKET(e));
}
async function c(e) {
    let { body: t } = await r.Bo.post({ url: e, rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, o.C)() ?? t.url };
}
