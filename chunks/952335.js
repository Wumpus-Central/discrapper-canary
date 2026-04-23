"use strict";
function r(e, t, n) {
    let r,
        i = [],
        s = function () {
            for (var a = arguments.length, o = Array(a), l = 0; l < a; l++) o[l] = arguments[l];
            let u = Date.now();
            for (null != r && (clearTimeout(r), (r = null)); i.length > 0 && i[0] <= u; ) i.shift();
            i.length < e ? (i.push(u + t), n(...o)) : (r = setTimeout(() => s(...o), i[0] - u));
        };
    return s;
}
n.d(t, { A: () => r }), n(321073);
