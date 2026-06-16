"use strict";
n.d(t, { A: () => s });
var i = n(174459),
    r = n(652215);
function s(e, t, n, s) {
    return i.default.track(r.HAw.VOICE_AND_VIDEO_SETTINGS_UPDATED, {
        previous_setting_value: null != n ? String(n) : void 0,
        [e]: t,
        location_stack: s,
    });
}
