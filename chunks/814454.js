n.d(t, { A: () => a });
var r = n(221292),
    i = n(626135),
    o = n(981631);
function a(e) {
    let { analyticsLocations: t, activityType: n, applicationId: a, voiceChannelId: s } = e;
    i.default.track(o.rMx.ACTIVITY_STATUS_ICON_TOOLTIP_SHOWN, {
        location_stack: t,
        activity_type: (0, r.te)(n),
        activity_application_id: a,
        voice_channel_id: s
    });
}
