t.d(n, { p: () => u });
var r = t(592204),
    l = t(712950);
let u = () => {
    var e;
    let { profanity: n, sexualContent: t, slurs: u } = (0, l.g)();
    return !!(0, r.Xo)({ location: 'use-should-filter-keywords' }) && null != (e = n || t || u) && e;
};
