l.d(t, {
    $: () => i,
});
var n = l(562465),
    r = l(319400),
    s = l(18572),
    a = l(652215);
let i = async (e) => {
    try {
        return (
            await n.Bo.get({
                url: a.Rsh.COLLECTIBLES_SEARCH,
                query: e,
                rejectWithError: !0,
            })
        ).body;
    } catch (t) {
        let e = new r.LG(t);
        throw ((0, s.o)(e), e);
    }
};
