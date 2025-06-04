n.d(t, { A: () => o });
var r = n(221292),
    i = n(626135),
    a = n(981631);
function o(e) {
    let { analyticsLocations: t, activityType: n, applicationId: o, voiceChannelId: s } = e;
    i.default.track(a.rMx.ACTIVITY_STATUS_ICON_TOOLTIP_SHOWN, {
        location_stack: t,
        activity_type: (0, r.te)(n),
        activity_application_id: o,
        voice_channel_id: s
    });
}
