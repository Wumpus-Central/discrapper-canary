"use strict";
n.d(t, { i: () => r });
var i = n(64700),
    s = n(519249);
let r = function (e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
        l = (0, s.W)(e, t, n),
        [a, o] = i.useState(void 0);
    return (
        i.useEffect(() => {
            "" === e || e === r ? o(void 0) : null != l && o(l);
        }, [l, e, r]),
        a
    );
};
