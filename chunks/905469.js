"use strict";
n.d(t, { l: () => o });
var r = n(236705),
    i = n(607399),
    s = n(855522);
function a() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    if (null != s.A.Messages.SELF_XSS_HEADER)
        if (
            (console.log(
                `%c${s.A.Messages.SELF_XSS_HEADER}`,
                "color: #5865f2; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;",
            ),
            console.log(`%c${s.A.Messages.SELF_XSS_LINE_1}`, "font-size: 16px;"),
            console.log(`%c${s.A.Messages.SELF_XSS_LINE_2}`, "font-size: 18px; font-weight: bold; color: red;"),
            e >= 4)
        ) {
            console.log(`%c${s.A.Messages.SELF_XSS_LINE_3}`, "font-size: 16px;");
            let e = s.A.Messages.SELF_XSS_LINE_4.format({
                url: `${location.protocol}${window.GLOBAL_ENV.MARKETING_ENDPOINT}/jobs`,
            });
            console.log(`%c${e}`, "font-size: 16px;");
        } else setTimeout(() => a(e + 1), 1e3);
}
function o(e, t) {
    if (null != t && "0.0.0" === t.app.getVersion()) return;
    let n = new r.$();
    if (null != t)
        if (null != t.window.setDevtoolsCallbacks)
            t.window.setDevtoolsCallbacks(
                () => {
                    e.hideToken(), a();
                },
                () => {
                    e.showToken();
                },
            );
        else {
            let n = t.window.webContents;
            n.removeAllListeners("devtools-opened"),
                n.on("devtools-opened", () => {
                    e.hideToken(), a();
                }),
                n.on("devtools-closed", e.showToken);
        }
    else
        i.Fr ||
            i.v1 ||
            n.on("changed", (t) => {
                let { open: n } = t;
                n ? (e.hideToken(), a()) : e.showToken();
            });
    window.addEventListener("beforeunload", (t) => {
        t.isTrusted && e.showToken();
    });
}
