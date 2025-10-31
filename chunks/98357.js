n.d(t, { Z: () => l });
var a = n(570140),
    i = n(432877);
function l(e, t) {
    let n = "boolean" == typeof t ? t : !i.ZP.get(e);
    a.Z.dispatch({
        type: "DEV_TOOLS_DEV_SETTING_SET",
        toggle: e,
        value: n,
    });
}
