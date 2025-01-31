n.d(t, { a: () => a }), n(47120);
var i = n(192379),
    o = n(363577);
let a = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        r = (0, o.M)(e, t, n),
        [s, l] = i.useState(void 0);
    return (
        i.useEffect(() => {
            '' === e || e === a ? l(void 0) : null != r && l(r);
        }, [r, e, a]),
        s
    );
};
