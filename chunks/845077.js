n.d(t, {
    P: () => i,
    W: () => s
});
var a = n(990547),
    r = n(573261),
    l = n(981631);
async function i() {
    return (
        await r.Z.get({
            url: l.ANM.SAFETY_FLOWS_TASK,
            trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
            rejectWithError: !1
        })
    ).body;
}
async function s(e) {
    return (
        await r.Z.post({
            url: l.ANM.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: a.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0
        })
    ).body;
}
