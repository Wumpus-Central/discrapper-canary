t.d(e, {
    s: function () {
        return a;
    }
});
var i = t(442837),
    r = t(314897),
    l = t(699516);
function a(n) {
    return (0, i.e7)([l.Z, r.default], () => {
        let e = l.Z.isFriend(n.id),
            t = r.default.getId() === n.id;
        return e && !t && !n.bot && !n.system && !n.isProvisional;
    });
}
