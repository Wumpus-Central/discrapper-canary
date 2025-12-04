i.d(t, { default: () => f }), i(539854), i(388685);
var a = i(54381),
    n = i(473749),
    o = i(793030),
    r = i(199849),
    s = i(481060),
    l = i(168107),
    c = i(480916),
    u = i(277021),
    d = i(469775);
let p = Object.values(d.Rp)
    .filter((e) => "number" != typeof e)
    .map((e) => ({
        value: d.Rp[e],
        label: d.Rp[d.Rp[e]],
    }));
p.push({
    value: void 0,
    label: "undefined",
});
let f = function (e) {
    let { onClose: t, transitionState: i } = e,
        [d, f] = n.useState(""),
        [S, b] = n.useState(!1),
        [h, v] = n.useState(void 0),
        w = n.useCallback(() => {
            console.log("Scan complete");
        }, []),
        _ = async () => {
            b(!0), f("");
            try {
                let e = await (0, u.Q)(h);
                l.Z.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: w,
                    onClose: t,
                    entryPoint: c.cU.DEV_TOOLS_QUICK_ACTIONS,
                });
            } catch (e) {
                f(e.message);
            } finally {
                b(!1);
            }
        };
    return (0, a.jsxs)(o.Modal, {
        transitionState: i,
        onClose: t,
        title: "Age Verification Test Tool",
        actions: [
            {
                text: "Trigger Age Verification Test",
                onClick: _,
                loading: S,
            },
        ],
        children: [
            (0, a.jsx)(r.B6, {
                select: v,
                isSelected: (e) => e === h,
                serialize: String,
                options: p,
            }),
            (0, a.jsx)("div", { children: "" !== d && (0, a.jsx)(s.pdY, { error: d }) }),
        ],
    });
};
