r.d(n, {
    PM: function () {
        return c;
    },
    ZC: function () {
        return a.u$;
    },
    de: function () {
        return l;
    },
    x9: function () {
        return u;
    }
});
var i = r(544891),
    a = r(921072),
    o = r(981631),
    s = r(388032);
async function l(e) {
    let n = o.ANM.APPLICATION_DISCLOSURES(e),
        r = await i.tn.get({
            url: n,
            retries: 3,
            rejectWithError: !1
        }),
        a = r.body.disclosures,
        s = r.body.acked_disclosures;
    return {
        disclosures: a,
        ackedDisclosures: s,
        allAcked: r.body.all_acked
    };
}
async function u(e, n) {
    let r = o.ANM.APPLICATION_DISCLOSURES(e);
    await i.tn.post({
        url: r,
        body: { disclosures: n },
        rejectWithError: !1
    });
}
function c(e) {
    switch (e) {
        case a.u$.IP_LOCATION:
            return s.intl.string(s.t['6wPmjo']);
        case a.u$.DISPLAYS_ADVERTISEMENTS:
            return s.intl.string(s.t['/uOMKS']);
        default:
            return null;
    }
}
