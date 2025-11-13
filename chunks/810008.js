n.d(t, { b: () => o });
var r = n(994339),
    i = n(981631);
let a = 25;
function o(e, t, n, o) {
    return !t.hasAnyAfter(
        e,
        (e) => {
            var t;
            return (
                null != e.activity &&
                (null == (t = e.application) ? void 0 : t.id) === n &&
                e.activity.type === i.mFx.JOIN &&
                !(0, r.Z)(o, e, n)
            );
        },
        a,
    );
}
