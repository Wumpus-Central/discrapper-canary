r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(442837),
    a = r(314897),
    o = r(158776),
    s = r(676035),
    l = r(981631);
function u(e) {
    let n = (0, i.e7)([a.default], () => a.default.getId() === e),
        r = (0, s.a)(),
        u = (0, i.e7)([o.Z], () =>
            o.Z.findActivity(e, (e) => {
                let { type: n } = e;
                return n === l.IIU.CUSTOM_STATUS;
            })
        );
    return n ? r : u;
}
