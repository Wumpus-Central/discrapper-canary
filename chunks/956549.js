n.d(t, { A: () => d });
var i = n(734057),
    r = n(287809),
    a = n(646865),
    s = n(909206),
    l = n(795816),
    o = n(817636);
async function d(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        ((t = await (0, o.A)(e.targetApplicationId, e.channelId)), (n = (0, a.f)()));
    } catch {
        return !1;
    }
    return (0, a.w)(n, () => c({ ...e, targetApplication: t }));
}
async function c(e) {
    let {
            targetApplication: t,
            locationObject: n,
            channelId: a,
            analyticsLocations: o,
            componentId: d,
            commandOrigin: c,
            sectionName: u,
            source: _,
            onExecutedCallback: E,
            referrerId: A,
            customId: h,
            inviterUserId: f,
            onConfirmActivityLaunchChecksAlertOpen: I,
        } = e,
        p = r.default.getCurrentUser();
    return (
        null != a &&
        null != i.A.getChannel(a) &&
        null != p &&
        null != t &&
        (s.MJ(t.id),
        await (0, l.su)({
            channelId: a,
            applicationId: t.id,
            isStart: !0,
            componentId: d,
            commandOrigin: c,
            sectionName: u,
            locationObject: n,
            analyticsLocations: o,
            source: _,
            onExecutedCallback: E,
            referrerId: A,
            customId: h,
            inviterUserId: f,
            onConfirmActivityLaunchChecksAlertOpen: I,
        }))
    );
}
