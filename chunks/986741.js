i.d(e, { default: () => u }), i(388685);
var n = i(951288),
    r = i(647438),
    a = i(82659),
    o = i(481060),
    c = i(168107),
    s = i(480916),
    l = i(277021);
let u = function (t) {
    let { onClose: e, transitionState: i } = t,
        [u, d] = r.useState(""),
        [f, h] = r.useState(!1),
        p = r.useCallback(() => {
            console.log("Scan complete");
        }, []),
        w = async () => {
            h(!0), d("");
            try {
                let t = await (0, l.Q)();
                c.Z.showAgeVerification({
                    webviewUrl: t.verification_webview_url,
                    onComplete: p,
                    onClose: e,
                    entryPoint: s.cU.DEV_TOOLS_QUICK_ACTIONS,
                });
            } catch (t) {
                d(t.message);
            } finally {
                h(!1);
            }
        };
    return (0, n.jsx)(a.Modal, {
        transitionState: i,
        onClose: e,
        title: "Age Verification Test Tool",
        actions: [
            {
                text: "Trigger Age Verification Test",
                onClick: w,
                loading: f,
            },
        ],
        children: (0, n.jsx)("div", { children: "" !== u && (0, n.jsx)(o.pdY, { error: u }) }),
    });
};
