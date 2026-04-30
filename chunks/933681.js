"use strict";
function i(e) {
    return e;
}
function r(e, t) {
    return Object.setPrototypeOf(e, t.prototype);
}
function s(e) {
    let { andFail: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (t) throw Error();
}
n.d(t, { dr: () => s, e0: () => i, pp: () => r });
