"use strict";
function r(e, t, n) {
    let r,
        i = [],
        a = function () {
            for (var s = arguments.length, o = Array(s), l = 0; l < s; l++) o[l] = arguments[l];
            let u = Date.now();
            for (null != r && (clearTimeout(r), (r = null)); i.length > 0 && i[0] <= u; ) i.shift();
            i.length < e ? (i.push(u + t), n(...o)) : (r = setTimeout(() => a(...o), i[0] - u));
        };
    return a;
}
n.d(t, { A: () => r }), n(321073);
