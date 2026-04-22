"use strict";
n.d(t, { HP: () => o, Jp: () => c, fy: () => u, nf: () => d, xv: () => l });
var r,
    i,
    s = n(353640),
    a = n(121894),
    o =
        (((r = {}).CLIENT_THEMES = "CLIENT_THEMES"),
        (r.APP_ICON = "APP_ICON"),
        (r.CUSTOM_THEME = "CUSTOM_THEME"),
        (r.APPLICATION_TEST_MODE_DEBUG = "APPLICATION_TEST_MODE_DEBUG"),
        r),
    l =
        (((i = {}).CLIENT_THEMES_EDITOR = "CLIENT_THEMES_EDITOR"),
        (i.SETTING = "SETTING"),
        (i.SHARE_MESSAGE = "SHARE_MESSAGE"),
        i);
let u = (0, s.v)(() => ({ activePanel: null, metadata: null }));
function d(e, t) {
    (0, a.r)(() => {
        u.setState({ activePanel: e, metadata: t ?? null });
    });
}
function c() {
    (0, a.r)(() => {
        u.setState({ activePanel: null, metadata: null });
    });
}
