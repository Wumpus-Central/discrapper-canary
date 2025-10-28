n.d(t, {
    PA: () => i,
    Wl: () => o,
});
var a = n(990547);
n(479531);
var r = n(573261),
    l = n(981631);
async function i() {
    let e = await r.Z.get({
        url: l.ANM.SAFETY_FLOWS_TASK,
        trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function o(e) {
    return (
        await r.Z.post({
            url: l.ANM.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
