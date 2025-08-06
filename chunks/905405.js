n.d(t, { p: () => o });
var r = n(592204),
    i = n(712950);
let o = () => {
    var e;
    let { profanity: t, sexualContent: n, slurs: o } = (0, i.g)();
    return !!(0, r.Xo)({ location: 'use-should-filter-keywords' }) && null != (e = t || n || o) && e;
};
