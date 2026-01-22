n.d(t, {
    r: () => o,
});
var r = n(253932),
    i = n(954571),
    a = n(652215),
    s = n(406535);

function o(e) {
    r.Bh.updateSetting(e),
        i.default.track(a.HAw.NOTIFICATION_SETTINGS_UPDATED, {
            update_type: s.Y.ACCOUNT,
            voice_activity_notifications: e,
        });
}
