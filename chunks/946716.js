e.d(t, { $: () => i });
var c = e(636537),
    h = e(319400),
    o = e(39418),
    a = e(652215);
async function i(r) {
    let { timeout: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    try {
        return (await c.Bo.get({ url: a.Rsh.COLLECTIBLES_SEARCH, query: r, rejectWithError: !0, timeout: t })).body;
    } catch (t) {
        let r = new h.LG(t);
        throw ((0, o.o)(r), r);
    }
}
