n.d(t, { R: () => l }), n(388685);
var i = n(192379),
    r = n(433517),
    s = n(493773);
function l(e, t) {
    let [n, l] = i.useState(() => {
        let n = r.K.get(e);
        return null != n ? n : t;
    });
    return (
        (0, s.ZP)(() => {
            null == r.K.get(e) && r.K.set(e, t);
        }),
        [
            n,
            i.useCallback(
                (t) => {
                    l(t), r.K.set(e, t);
                },
                [e]
            )
        ]
    );
}
