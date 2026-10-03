n.d(t, { d: () => o, g: () => a });
var r = n(636537),
    s = n(208137),
    i = n(652215);
function o(e) {
    return l(i.Rsh.VIBEGRATIONS_PROJECT_WS_TICKET(e));
}
function a(e) {
    return l(i.Rsh.VIBEGRATIONS_PROJECT_REMIX_TICKET(e));
}
async function l(e) {
    let { body: t } = await r.Bo.post({ url: e, rejectWithError: !0 });
    return { ticket: t.ticket, baseUrl: (0, s.C)() ?? t.url };
}
