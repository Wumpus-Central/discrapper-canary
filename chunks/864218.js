n.d(t, { F: () => s });
var r = n(657707),
    i = n(433390);
function a(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = o(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function o(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let s = (e) => {
    var { iconOverride: t, variantOverride: n } = e,
        o = a(e, ["iconOverride", "variantOverride"]);
    let { buttonText: s, disabled: l } = (0, i.Z)(o);
    return {
        subscribeButtonProps: {
            text: s,
            disabled: l,
            icon: null != t ? t : r.NitroWheelIcon,
            variant: null != n ? n : "expressive",
        },
    };
};
