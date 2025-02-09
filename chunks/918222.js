n.d(t, { R: () => r }), n(47120);
var i = n(192379),
    s = n(433517),
    l = n(493773);
function r(e, t) {
    let [n, r] = i.useState(() => {
        let n = s.K.get(e);
        return null != n ? n : t;
    });
    return (
        (0, l.ZP)(() => {
            null == s.K.get(e) && s.K.set(e, t);
        }),
        [
            n,
            i.useCallback(
                (t) => {
                    r(t), s.K.set(e, t);
                },
                [e]
            )
        ]
    );
}
