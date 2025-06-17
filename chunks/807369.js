n.d(t, { a: () => l }), n(388685);
var r = n(73800),
    i = n(363577);
let l = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        o = (0, i.M)(e, t, n),
        [a, s] = r.useState(void 0);
    return (
        r.useEffect(() => {
            '' === e || e === l ? s(void 0) : null != o && s(o);
        }, [o, e, l]),
        a
    );
};
