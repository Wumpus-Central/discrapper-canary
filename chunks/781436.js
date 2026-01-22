n.d(t, {
    i: () => s,
}),
    n(896048);
var r = n(64700),
    i = n(565478);
let s = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        l = (0, i.W)(e, t, n),
        [a, o] = r.useState(void 0);
    return (
        r.useEffect(() => {
            "" === e || e === s ? o(void 0) : null != l && o(l);
        }, [l, e, s]),
        a
    );
};
