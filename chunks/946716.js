s.d(t, { $: () => o });
var r = s(562465),
    l = s(319400),
    a = s(18572),
    n = s(652215);
let o = async (e) => {
    try {
        return (await r.Bo.get({ url: n.Rsh.COLLECTIBLES_SEARCH, query: e, rejectWithError: !0 })).body;
    } catch (t) {
        let e = new l.LG(t);
        throw ((0, a.o)(e), e);
    }
};
