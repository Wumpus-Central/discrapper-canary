i.d(t, { default: () => p }), i(539854), i(388685);
var n = i(54381),
    l = i(473749),
    a = i(793030),
    o = i(481060),
    s = i(168107),
    r = i(480916),
    c = i(277021),
    d = i(469775);
let u = Object.values(d.Rp)
    .filter((e) => "number" != typeof e)
    .map((e) => ({
        id: e,
        value: d.Rp[e],
        label: d.Rp[d.Rp[e]],
    }));
u.push({
    id: "undefined",
    value: void 0,
    label: "undefined",
});
let p = function (e) {
    let { onClose: t, transitionState: i } = e,
        [d, p] = l.useState(""),
        [h, f] = l.useState(!1),
        [b, v] = l.useState(void 0),
        S = l.useCallback(() => {
            console.log("Scan complete");
        }, []),
        g = async () => {
            f(!0), p("");
            try {
                let e = await (0, c.Q)(b);
                s.Z.showAgeVerification({
                    webviewUrl: e.verification_webview_url,
                    onComplete: S,
                    onClose: t,
                    entryPoint: r.cU.DEV_TOOLS_QUICK_ACTIONS,
                });
            } catch (e) {
                p(e.message);
            } finally {
                f(!1);
            }
        };
    return (0, n.jsxs)(a.Modal, {
        transitionState: i,
        onClose: t,
        title: "Age Verification Test Tool",
        actions: [
            {
                text: "Trigger Age Verification Test",
                onClick: g,
                loading: h,
            },
        ],
        children: [
            (0, n.jsx)(o.PhF, {
                label: "Method",
                hideLabel: !0,
                onSelectionChange: (e) => v(null != e ? e : void 0),
                value: b,
                options: u,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, n.jsx)("div", { children: "" !== d && (0, n.jsx)(o.pdY, { error: d }) }),
        ],
    });
};
