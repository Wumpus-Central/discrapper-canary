"use strict";
n.d(t, { A: () => c });
var i = n(734057),
    r = n(287809),
    a = n(646865),
    s = n(909206),
    l = n(795816),
    o = n(817636),
    d = n(574152);
async function c(e) {
    let t;
    if (null == e.targetApplicationId) return !1;
    let n = !1;
    try {
        (t = await (0, o.A)(e.targetApplicationId, e.channelId)), (n = (0, a.f)());
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
            analyticsLocations: o,
            componentId: c,
            commandOrigin: u,
            sectionName: _,
            source: E,
            onExecutedCallback: A,
            referrerId: h,
            customId: I,
            inviterUserId: f,
            onConfirmActivityLaunchChecksAlertOpen: p,
        } = e,
        T = (0, d.A)(),
        m = r.default.getCurrentUser();
    return (
        null != a &&
        null != i.A.getChannel(a) &&
        null != m &&
        null != t &&
        (s.MJ(t.id),
        await (0, l.su)({
            channelId: a,
            applicationId: t.id,
            isStart: !0,
            embeddedActivitiesManager: T,
            componentId: c,
            commandOrigin: u,
            sectionName: _,
            locationObject: n,
            analyticsLocations: o,
            source: E,
            onExecutedCallback: A,
            referrerId: h,
            customId: I,
            inviterUserId: f,
            onConfirmActivityLaunchChecksAlertOpen: p,
        }))
    );
}
