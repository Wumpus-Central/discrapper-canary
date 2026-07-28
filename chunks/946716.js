t.d(e, { $: () => h });
var s = t(562465),
    a = t(319400),
    o = t(39418),
    c = t(652215);
async function h(r) {
    let { timeout: e } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    try {
        return (await s.Bo.get({ url: c.Rsh.COLLECTIBLES_SEARCH, query: r, rejectWithError: !0, timeout: e })).body;
    } catch (e) {
        let r = new a.LG(e);
        throw ((0, o.o)(r), r);
    }
}
