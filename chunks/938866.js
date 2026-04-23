"use strict";
let r;
function i() {
    return (
        r ??
        (r = (async () => {
            let { default: e } = await n.e("64920").then(n.t.bind(n, 259047, 23)),
                t = new e({
                    params: {
                        logProcessStats: !1,
                        useSharedArrayBuffer: !1,
                        debugLogs: !1,
                        bufferOverflowMS: 200,
                        models: {
                            model8: "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_8.kw",
                            model16: "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_16.kw",
                            model32: "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_32.kw",
                        },
                    },
                });
            return await t.init(), t;
        })())
    );
}
n.d(t, { e: () => i });
