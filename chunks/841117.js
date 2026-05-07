"use strict";
n.d(t, { Cu: () => s, eU: () => i, sq: () => a });
let i = (e) => new Promise((t) => setTimeout(t, e)),
    r = () => Promise.resolve();
function s(e) {
    r = e;
}
async function a(e) {
    let { createPromise: t, webpackId: s, name: a } = e,
        o = 500,
        l = 0;
    for (;;)
        try {
            return performance.mark("importWithRetry:start", { detail: { webpackId: s, name: a } }), await t();
        } catch (e) {
            if ((console.log(e), s in n.c))
                throw (
                    (console.log(
                        "Module was found in webpack cache so it has loaded from the network and webpack will not retry",
                    ),
                    e)
                );
            if (l >= 50) throw e;
            await i(o), await r(), (o = Math.min(5e3, 2 * o)), l++;
        }
}
