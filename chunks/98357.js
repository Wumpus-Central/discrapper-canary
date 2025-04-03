n.d(t, { Z: () => l });
var r = n(570140),
    a = n(432877);
function l(e, t) {
    let n = 'boolean' == typeof t ? t : !a.ZP.get(e);
    r.Z.dispatch({
        type: 'DEV_TOOLS_DEV_SETTING_SET',
        toggle: e,
        value: n
    });
}
