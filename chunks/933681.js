function r(e) {
    return e;
}

function i(e, t) {
    return Object.setPrototypeOf(e, t.prototype);
}

function a(e) {
    let { andFail: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (t) throw Error();
}

function s(e) {
    return e.length > 0;
}
n.d(t, {
    YV: () => s,
    dr: () => a,
    e0: () => r,
    pp: () => i,
}),
    n(65821);
