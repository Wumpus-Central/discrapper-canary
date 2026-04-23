r.d(t, { $: () => o });
var n = r(562465),
    s = r(319400),
    l = r(18572),
    a = r(652215);
let o = async (e) => {
    try {
        return (await n.Bo.get({ url: a.Rsh.COLLECTIBLES_SEARCH, query: e, rejectWithError: !0 })).body;
    } catch (t) {
        let e = new s.LG(t);
        throw ((0, l.o)(e), e);
    }
};
