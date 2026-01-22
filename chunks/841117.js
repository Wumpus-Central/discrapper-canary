n.d(t, {
    Cu: () => l,
    eU: () => r,
    sq: () => c,
});
let r = (e) => new Promise((t) => setTimeout(t, e)),
    i = 50,
    a = 500,
    s = 5000,
    o = () => Promise.resolve();
function l(e) {
    o = e;
}
async function c(e) {
    let { createPromise: t, webpackId: l } = e,
        c = a,
        u = 0;
    for (;;)
        try {
            return await t();
        } catch (e) {
            if ((console.log(e), l in n.c))
                throw (
                    (console.log(
                        "Module was found in webpack cache so it has loaded from the network and webpack will not retry",
                    ),
                    e)
                );
            if (u >= i) throw e;
            await r(c), await o(), (c = Math.min(s, 2 * c)), u++;
        }
}
