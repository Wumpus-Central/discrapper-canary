n.d(t, {
    PM: () => c,
    ZC: () => i.u$,
    de: () => s,
    x9: () => l
});
var r = n(544891),
    i = n(921072),
    o = n(981631),
    a = n(388032);
async function s(e) {
    let t = o.ANM.APPLICATION_DISCLOSURES(e),
        n = await r.tn.get({
            url: t,
            retries: 3,
            rejectWithError: !1
        }),
        i = n.body.disclosures;
    return {
        disclosures: i,
        ackedDisclosures: n.body.acked_disclosures,
        allAcked: n.body.all_acked
    };
}
async function l(e, t) {
    let n = o.ANM.APPLICATION_DISCLOSURES(e);
    await r.tn.post({
        url: n,
        body: { disclosures: t },
        rejectWithError: !1
    });
}
function c(e) {
    switch (e) {
        case i.u$.IP_LOCATION:
            return a.NW.string(a.t['6wPmjo']);
        case i.u$.DISPLAYS_ADVERTISEMENTS:
            return a.NW.string(a.t['/uOMKS']);
        default:
            return null;
    }
}
