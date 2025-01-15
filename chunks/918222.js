n.d(t, {
    R: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    r = n(433517),
    s = n(493773);
function a(e, t) {
    let [n, a] = i.useState(() => {
        let n = r.K.get(e);
        return null != n ? n : t;
    });
    return (
        (0, s.Z)(() => {
            null == r.K.get(e) && r.K.set(e, t);
        }),
        [
            n,
            i.useCallback(
                (t) => {
                    a(t), r.K.set(e, t);
                },
                [e]
            )
        ]
    );
}
