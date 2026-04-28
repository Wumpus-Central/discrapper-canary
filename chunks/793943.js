"use strict";
n.d(t, { HP: () => o, Jp: () => u, fy: () => _, nf: () => d, xv: () => l });
var i,
    r,
    s = n(353640),
    a = n(121894),
    o =
        (((i = {}).CLIENT_THEMES = "CLIENT_THEMES"),
        (i.APP_ICON = "APP_ICON"),
        (i.CUSTOM_THEME = "CUSTOM_THEME"),
        (i.APPLICATION_TEST_MODE_DEBUG = "APPLICATION_TEST_MODE_DEBUG"),
        (i.CLIPS_REMINDER = "CLIPS_REMINDER"),
        i),
    l =
        (((r = {}).CLIENT_THEMES_EDITOR = "CLIENT_THEMES_EDITOR"),
        (r.SETTING = "SETTING"),
        (r.SHARE_MESSAGE = "SHARE_MESSAGE"),
        r);
let _ = (0, s.v)(() => ({ activePanel: null, metadata: null }));
function d(e, t) {
    (0, a.r)(() => {
        _.setState({ activePanel: e, metadata: t ?? null });
    });
}
function u() {
    (0, a.r)(() => {
        _.setState({ activePanel: null, metadata: null });
    });
}
