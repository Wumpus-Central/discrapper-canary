i.d(e, {
    s: function () {
        return s;
    }
});
var r = i(442837),
    t = i(314897),
    a = i(699516);
function s(n) {
    return (0, r.e7)([a.Z, t.default], () => {
        let e = a.Z.isFriend(n.id),
            i = t.default.getId() === n.id;
        return e && !i && !n.bot && !n.system && !n.isProvisional;
    });
}
