a.d(t, { Z: () => l });
var n = a(570140),
    r = a(432877);
function l(e, t) {
    let a = 'boolean' == typeof t ? t : !r.ZP.get(e);
    n.Z.dispatch({
        type: 'DEV_TOOLS_DEV_SETTING_SET',
        toggle: e,
        value: a
    });
}
