n.d(t, {
    HP: () => a,
    Jp: () => c,
    fy: () => o,
    nf: () => l,
    xv: () => s,
});
var r = n(353640),
    i = n(121894),
    a = (function (e) {
        return (
            (e.CLIENT_THEMES = "CLIENT_THEMES"),
            (e.APP_ICON = "APP_ICON"),
            (e.CUSTOM_THEME = "CUSTOM_THEME"),
            (e.APPLICATION_TEST_MODE_DEBUG = "APPLICATION_TEST_MODE_DEBUG"),
            e
        );
    })({}),
    s = (function (e) {
        return (
            (e.CLIENT_THEMES_EDITOR = "CLIENT_THEMES_EDITOR"),
            (e.SETTING = "SETTING"),
            (e.SHARE_MESSAGE = "SHARE_MESSAGE"),
            e
        );
    })({});
let o = (0, r.v)(() => ({
    activePanel: null,
    metadata: null,
}));

function l(e, t) {
    (0, i.r)(() => {
        o.setState({
            activePanel: e,
            metadata: null != t ? t : null,
        });
    });
}

function c() {
    (0, i.r)(() => {
        o.setState({
            activePanel: null,
            metadata: null,
        });
    });
}
