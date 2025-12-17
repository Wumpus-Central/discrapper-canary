n.d(t, { a: () => s }), n(388685);
var r = n(473749),
    i = n(363577);
let s = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        a = (0, i.M)(e, t, n),
        [l, o] = r.useState(void 0);
    return (
        r.useEffect(() => {
            "" === e || e === s ? o(void 0) : null != a && o(a);
        }, [a, e, s]),
        l
    );
};
