var l = n(582128),
    i = n(174947);
function r(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [, n] = l.useReducer((e) => e + 1, 0),
        r = e?.getTime();
    return (
        l.useEffect(() => {
            let e;
            if (null == r) return;
            let l = r - i.G3,
                u = () => {
                    let i = Date.now();
                    if (i < l) {
                        e = setTimeout(u, Math.min(l - i, 0x7fffffff));
                        return;
                    }
                    (n(), i < r && (e = setTimeout(u, Math.min(t ? 6e4 : 0x7fffffff, r - i))));
                };
            return (u(), () => clearTimeout(e));
        }, [r, t]),
        (0, i._z)(e)
    );
}
n.d(
    t,
    {},
    {
        A: r,
        N: function (e) {
            return null != r((0, i.fH)(e), !1);
        },
    },
);
