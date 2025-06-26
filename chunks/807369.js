n.d(t, { a: () => o }), n(388685);
var i = n(73800),
    r = n(363577);
let o = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = (0, r.M)(e, t, n),
        [s, l] = i.useState(void 0);
    return (
        i.useEffect(() => {
            '' === e || e === o ? l(void 0) : null != a && l(a);
        }, [a, e, o]),
        s
    );
};
