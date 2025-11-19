n.d(t, {
    PA: () => r,
    Wl: () => s,
});
var a = n(990547);
n(479531);
var l = n(573261),
    i = n(981631);
async function r() {
    let e = await l.Z.get({
        url: i.ANM.SAFETY_FLOWS_TASK,
        trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function s(e) {
    return (
        await l.Z.post({
            url: i.ANM.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
