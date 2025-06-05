n.d(t, {
    P: () => l,
    W: () => c
});
var r = n(990547),
    i = n(573261),
    a = n(981631);
async function l() {
    return (
        await i.Z.get({
            url: a.ANM.SAFETY_FLOWS_TASK,
            trackedActionData: { event: r.NetworkActionNames.USER_VERIFY },
            rejectWithError: !1
        })
    ).body;
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
