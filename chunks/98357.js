n.d(t, { Z: () => r });
var a = n(570140),
    i = n(432877);
function r(e, t) {
    let n = "boolean" == typeof t ? t : !i.ZP.get(e);
    a.Z.dispatch({
        type: "DEV_TOOLS_DEV_SETTING_SET",
        toggle: e,
        value: n,
    });
}
