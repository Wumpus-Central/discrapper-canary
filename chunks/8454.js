n.d(t, { Z: () => l });
var r = n(442837),
    i = n(314897),
    o = n(158776),
    a = n(676035),
    s = n(981631);
function l(e) {
    let t = (0, r.e7)([i.default], () => i.default.getId() === e),
        n = (0, a.a)(),
        l = (0, r.e7)([o.Z], () =>
            o.Z.findActivity(e, (e) => {
                let { type: t } = e;
                return t === s.IIU.CUSTOM_STATUS;
            })
        );
    return t ? n : l;
}
