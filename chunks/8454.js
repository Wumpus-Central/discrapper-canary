n.d(t, { Z: () => l });
var i = n(442837),
    r = n(314897),
    a = n(158776),
    s = n(676035),
    o = n(981631);
function l(e) {
    let t = (0, i.e7)([r.default], () => r.default.getId() === e),
        n = (0, s.a)(),
        l = (0, i.e7)([a.Z], () =>
            a.Z.findActivity(e, (e) => {
                let { type: t } = e;
                return t === o.IIU.CUSTOM_STATUS;
            })
        );
    return t ? n : l;
}
