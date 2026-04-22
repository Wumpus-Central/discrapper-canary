e.d(n, { A: () => a });
var i = e(780964),
    l = e(858897),
    r = e(436620);
function a(t) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, l.openUserSettings)(
        (function (t) {
            switch (t) {
                case r.J.MY_GAMES:
                    return i.X.REGISTERED_GAMES_PANEL;
                case r.J.OVERLAY:
                    return i.X.OVERLAY_PANEL;
                case r.J.ACTIVITY_PRIVACY:
                    return i.X.ACTIVITY_PRIVACY_PANEL;
            }
        })(t),
        n,
    );
}
