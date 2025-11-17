i.d(t, { default: () => p }), i(539854), i(388685);
var a = i(54381),
    n = i(473749),
    o = i(793030),
    r = i(481060),
    s = i(168107),
    l = i(480916),
    c = i(277021),
    u = i(469775);
let d = Object.values(u.Rp)
    .filter((e) => "number" != typeof e)
    .map((e) => ({
        value: u.Rp[e],
        label: u.Rp[u.Rp[e]],
    }));
d.push({
    value: void 0,
    label: "undefined",
});
let p = function (e) {
    let { onClose: t, transitionState: i } = e,
        [u, p] = n.useState(""),
        [f, h] = n.useState(!1),
        [S, b] = n.useState(void 0),
        v = n.useCallback(() => {
            console.log("Scan complete");
        }, []),
        w = async () => {
            h(!0), p("");
            try {
                let e = await (0, c.Q)(S);
                s.Z.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: v,
                    onClose: t,
                    entryPoint: l.cU.DEV_TOOLS_QUICK_ACTIONS,
                });
            } catch (e) {
                p(e.message);
            } finally {
                h(!1);
            }
        };
    return (0, a.jsxs)(o.Modal, {
        transitionState: i,
        onClose: t,
        title: "Age Verification Test Tool",
        actions: [
            {
                text: "Trigger Age Verification Test",
                onClick: w,
                loading: f,
            },
        ],
        children: [
            (0, a.jsx)(r.PhF, {
                select: b,
                isSelected: (e) => e === S,
                serialize: String,
                options: d,
            }),
            (0, a.jsx)("div", { children: "" !== u && (0, a.jsx)(r.pdY, { error: u }) }),
        ],
    });
};
