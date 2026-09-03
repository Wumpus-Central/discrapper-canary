n.d(t, { HP: () => o, Jp: () => E, dJ: () => c, fy: () => u, nf: () => _, xv: () => d });
var i,
    r,
    a,
    s = n(196765),
    l = n(121894),
    o =
        (((i = {}).CLIENT_THEMES = "CLIENT_THEMES"),
        (i.APP_ICON = "APP_ICON"),
        (i.CUSTOM_THEME = "CUSTOM_THEME"),
        (i.GUILD_THEME_PREVIEW = "GUILD_THEME_PREVIEW"),
        (i.APPLICATION_TEST_MODE_DEBUG = "APPLICATION_TEST_MODE_DEBUG"),
        i),
    d =
        (((r = {}).CLIENT_THEMES_EDITOR = "CLIENT_THEMES_EDITOR"),
        (r.SETTING = "SETTING"),
        (r.SHARE_MESSAGE = "SHARE_MESSAGE"),
        r),
    c = (((a = {}).GUILD_SETTINGS = "GUILD_SETTINGS"), (a.PERK_MODAL = "PERK_MODAL"), a);
let u = (0, s.v)(() => ({ activePanel: null, metadata: null }));
function _(e, t) {
    (0, l.r)(() => {
        u.setState({ activePanel: e, metadata: t ?? null });
    });
}
function E() {
    (0, l.r)(() => {
        u.setState({ activePanel: null, metadata: null });
    });
}
