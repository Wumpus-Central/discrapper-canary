n.d(t, { A: () => o });
var i = n(734057),
    r = n(287809),
    a = n(646865),
    l = n(909206),
    s = n(795816),
    E = n(817636),
    _ = n(574152);
async function o(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        (t = await (0, E.A)(e.targetApplicationId, e.channelId)), (n = (0, a.f)());
    } catch {
        return !1;
    }
    return (0, a.w)(n, () => u({ ...e, targetApplication: t }));
}
async function u(e) {
    let {
            targetApplication: t,
            locationObject: n,
            channelId: a,
            analyticsLocations: E,
            componentId: o,
            commandOrigin: u,
            sectionName: A,
            source: d,
            onExecutedCallback: c,
            referrerId: I,
            customId: T,
            inviterUserId: N,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        O = (0, _.A)(),
        C = r.default.getCurrentUser();
    return (
        null != a &&
        null != i.A.getChannel(a) &&
        null != C &&
        null != t &&
        (l.MJ(t.id),
        await (0, s.su)({
            channelId: a,
            applicationId: t.id,
            isStart: !0,
            embeddedActivitiesManager: O,
            componentId: o,
            commandOrigin: u,
            sectionName: A,
            locationObject: n,
            analyticsLocations: E,
            source: d,
            onExecutedCallback: c,
            referrerId: I,
            customId: T,
            inviterUserId: N,
            onConfirmActivityLaunchChecksAlertOpen: S,
        }))
    );
}
