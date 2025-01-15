n.d(t, {
    R: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    s = n(433517),
    r = n(493773);
function a(e, t) {
    let [n, a] = i.useState(() => {
        let n = s.K.get(e);
        return null != n ? n : t;
    });
    return (
        (0, r.Z)(() => {
            null == s.K.get(e) && s.K.set(e, t);
        }),
        [
            n,
            i.useCallback(
                (t) => {
                    a(t), s.K.set(e, t);
                },
                [e]
            )
        ]
    );
}
