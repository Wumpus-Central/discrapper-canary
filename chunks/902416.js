i.d(e, { r: () => a });
var n = i(253932),
    l = i(954571),
    s = i(652215),
    r = i(406535);
function a(t) {
    n.Bh.updateSetting(t),
        l.default.track(s.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: r.Y.ACCOUNT,
            voice_activity_notifications: t,
        });
}
