n.d(t, { p: () => o });
var r = n(592204),
    l = n(712950);
let o = () => {
    var e;
    let { profanity: t, sexualContent: n, slurs: o } = (0, l.g)();
    return !!(0, r.Xo)({ location: 'use-should-filter-keywords' }) && null != (e = t || n || o) && e;
};
