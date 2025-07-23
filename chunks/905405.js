n.d(t, { p: () => o });
var a = n(592204),
    i = n(712950);
let o = () => {
    var e;
    let { profanity: t, sexualContent: n, slurs: o } = (0, i.g)();
    return !!(0, a.Xo)({ location: 'use-should-filter-keywords' }) && null != (e = t || n || o) && e;
};
