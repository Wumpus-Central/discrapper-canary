n.d(t, { Z: () => l });
var r = n(442837),
    i = n(314897),
    a = n(158776),
    o = n(676035),
    s = n(981631);
function l(e) {
    let t = (0, r.e7)([i.default], () => i.default.getId() === e),
        n = (0, o.a)(),
        l = (0, r.e7)([a.Z], () =>
            a.Z.findActivity(e, (e) => {
                let { type: t } = e;
                return t === s.IIU.CUSTOM_STATUS;
            })
        );
    return t ? n : l;
}
