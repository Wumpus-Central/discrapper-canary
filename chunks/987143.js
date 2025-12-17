n.d(e, { A: () => c });
var i = n(54381);
n(473749);
var l = n(442837),
    s = n(481060),
    u = n(579806),
    r = n(435064),
    a = n(39604),
    o = n(509613),
    S = n(313789),
    T = n(388032);
let c = (0, o.ON)(S.n.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [T.intl.string(T.t.s4773E), T.intl.string(T.t.svjwGh)],
    Component: () => {
        let t = (0, l.e7)([r.Z], () => r.Z.getSettings().storageLocation),
            e = async () => {
                let t = await u.Z.fileManager.showOpenDialog({
                    properties: ["openDirectory", "createDirectory"],
                });
                t.length > 0 && a.T1(t[0]);
            };
        return (0, i.jsx)(s.gNt, {
            label: T.intl.string(T.t.s4773E),
            description: T.intl.string(T.t.svjwGh),
            layout: "horizontal",
            children: (0, i.jsx)(s.P3F, {
                "aria-label": T.intl.formatToPlainString(T.t.iMONTj, { storageLocation: t }),
                onClick: e,
                children: (0, i.jsx)(s.oil, {
                    tabIndex: -1,
                    value: t,
                    editable: !1,
                    "aria-hidden": !0,
                }),
            }),
        });
    },
});
