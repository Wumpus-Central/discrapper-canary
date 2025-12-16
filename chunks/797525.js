n.d(e, {
    Ey: () => r,
    Vh: () => s,
    py: () => a,
    t8: () => o,
    wA: () => u,
});
var i = n(972959),
    l = n(998502);
let s = (0, i.H)(() => ({
    openOnStartup: !0,
    startMinimized: !1,
    minimizeToTray: !0,
}));
async function u() {
    let t = await l.ZP.getOpenOnStart(),
        e = await l.ZP.getSetting("START_MINIMIZED", !1),
        n = await l.ZP.getSetting("MINIMIZE_TO_TRAY", !0);
    s.setState({
        openOnStartup: t,
        startMinimized: e,
        minimizeToTray: n,
    });
}
function r(t) {
    s.setState({ openOnStartup: t }), l.ZP.send("TOGGLE_OPEN_ON_STARTUP", t);
}
function a(t) {
    s.setState({ startMinimized: t }), l.ZP.send("TOGGLE_START_MINIMIZED", t);
}
function o(t) {
    s.setState({ minimizeToTray: t }), l.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", t);
}
