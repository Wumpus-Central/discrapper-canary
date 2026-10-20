e.d(r, { $: () => s });
var n = e(636537),
    a = e(319400),
    i = e(39418),
    o = e(652215);
async function s(t) {
    let { timeout: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    try {
        return (await n.Bo.get({ url: o.Rsh.COLLECTIBLES_SEARCH, query: t, rejectWithError: !0, timeout: r })).body;
    } catch (r) {
        let t = new a.LG(r);
        throw ((0, i.o)(t), t);
    }
}
