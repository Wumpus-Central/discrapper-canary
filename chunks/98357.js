n.d(t, {
    Z: function () {
        return l;
    }
});
var a = n(570140),
    r = n(432877);
function l(e, t) {
    let n = 'boolean' == typeof t ? t : !r.ZP.get(e);
    a.Z.dispatch({
        type: 'DEV_TOOLS_DEV_SETTING_SET',
        toggle: e,
        value: n
    });
}
