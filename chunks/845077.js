n.d(t, {
    PA: () => i,
    Wl: () => s,
});
var a = n(990547);
n(479531);
var l = n(573261),
    r = n(981631);
async function i() {
    let e = await l.Z.get({
        url: r.ANM.SAFETY_FLOWS_TASK,
        trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function s(e) {
    return (
        await l.Z.post({
            url: r.ANM.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
