n.d(t, {
    PA: () => l,
    Wl: () => c
});
var r = n(990547);
n(479531);
var i = n(573261),
    a = n(981631);
async function l() {
    let e = await i.Z.get({
        url: a.ANM.SAFETY_FLOWS_TASK,
        trackedActionData: { event: r.NetworkActionNames.USER_VERIFY },
        rejectWithError: !1
    });
    return 204 === e.status ? null : e.body;
}
async function c(e) {
    return (
        await i.Z.post({
            url: a.ANM.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: r.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0
        })
    ).body;
}
