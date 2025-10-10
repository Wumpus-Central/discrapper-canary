i.d(t, { x: () => s });
var l = i(512722),
    n = i.n(l),
    r = i(442837),
    a = i(594174);
let s = () => {
    let e = (0, r.e7)([a.default], () => a.default.getCurrentUser());
    return n()(null != e, "user has to be signed in before accessing shop"), e;
};
