r.d(e, { $: () => c });
var n = r(636537),
    i = r(319400),
    a = r(39418),
    o = r(652215);
async function c(t) {
    let { timeout: e } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    try {
        return (await n.Bo.get({ url: o.Rsh.COLLECTIBLES_SEARCH, query: t, rejectWithError: !0, timeout: e })).body;
    } catch (e) {
        let t = new i.LG(e);
        throw ((0, a.o)(t), t);
    }
}
