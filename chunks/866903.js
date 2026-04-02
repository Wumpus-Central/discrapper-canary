"use strict";
n.d(t, { A: () => o });
var r = n(780964),
    i = n(858897),
    s = n(436620);
function a(e) {
    switch (e) {
        case s.J.MY_GAMES:
            return r.X.REGISTERED_GAMES_PANEL;
        case s.J.OVERLAY:
            return r.X.OVERLAY_PANEL;
        case s.J.ACTIVITY_PRIVACY:
            return r.X.ACTIVITY_PRIVACY_PANEL;
    }
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, i.openUserSettings)(a(e), t);
}
