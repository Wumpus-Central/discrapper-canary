"use strict";
n.d(t, { HP: () => o, Jp: () => d, fy: () => u, nf: () => c, xv: () => l });
var i,
    r,
    s = n(353640),
    a = n(121894),
    o =
        (((i = {}).CLIENT_THEMES = "CLIENT_THEMES"),
        (i.APP_ICON = "APP_ICON"),
        (i.CUSTOM_THEME = "CUSTOM_THEME"),
        (i.GUILD_THEME_PREVIEW = "GUILD_THEME_PREVIEW"),
        (i.APPLICATION_TEST_MODE_DEBUG = "APPLICATION_TEST_MODE_DEBUG"),
        i),
    l =
        (((r = {}).CLIENT_THEMES_EDITOR = "CLIENT_THEMES_EDITOR"),
        (r.SETTING = "SETTING"),
        (r.SHARE_MESSAGE = "SHARE_MESSAGE"),
        r);
let u = (0, s.v)(() => ({ activePanel: null, metadata: null }));
function c(e, t) {
    (0, a.r)(() => {
        u.setState({ activePanel: e, metadata: t ?? null });
    });
}
function d() {
    (0, a.r)(() => {
        u.setState({ activePanel: null, metadata: null });
    });
}
