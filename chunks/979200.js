n.d(t, {
    PM: () => u,
    ZC: () => r.u$,
    de: () => o,
    x9: () => l
});
var i = n(544891),
    r = n(921072),
    a = n(981631),
    s = n(388032);
async function o(e) {
    let t = a.ANM.APPLICATION_DISCLOSURES(e),
        n = await i.tn.get({
            url: t,
            retries: 3,
            rejectWithError: !1
        }),
        r = n.body.disclosures;
    return {
        disclosures: r,
        ackedDisclosures: n.body.acked_disclosures,
        allAcked: n.body.all_acked
    };
}
async function l(e, t) {
    let n = a.ANM.APPLICATION_DISCLOSURES(e);
    await i.tn.post({
        url: n,
        body: { disclosures: t },
        rejectWithError: !1
    });
}
function u(e) {
    switch (e) {
        case r.u$.IP_LOCATION:
            return s.intl.string(s.t['6wPmjo']);
        case r.u$.DISPLAYS_ADVERTISEMENTS:
            return s.intl.string(s.t['/uOMKS']);
        default:
            return null;
    }
}
