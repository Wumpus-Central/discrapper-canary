n.d(t, { Z: () => o });
var i = n(442837),
    l = n(314897),
    r = n(88751);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, i.cj)(
        [r.ZP, l.default],
        () => {
            let n = l.default.getId();
            return r.ZP.getPermissionsForUser(n, e, t);
        },
        [e, t]
    );
}
