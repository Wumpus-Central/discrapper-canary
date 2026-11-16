var n = l(582128),
    i = l(174947);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [, l] = n.useReducer((e) => e + 1, 0),
        a = e?.getTime();
    return (
        n.useEffect(() => {
            let e;
            if (null == a) return;
            let n = a - i.G3,
                r = () => {
                    let i = Date.now();
                    if (i < n) {
                        e = setTimeout(r, Math.min(n - i, 0x7fffffff));
                        return;
                    }
                    (l(), i < a && (e = setTimeout(r, Math.min(t ? 6e4 : 0x7fffffff, a - i))));
                };
            return (r(), () => clearTimeout(e));
        }, [a, t]),
        (0, i._z)(e)
    );
}
l.d(
    t,
    {},
    {
        A: a,
        N: function (e) {
            return null != a((0, i.fH)(e), !1);
        },
    },
);
