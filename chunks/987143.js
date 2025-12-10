n.d(e, { A: () => S });
var i = n(54381);
n(473749);
var l = n(442837),
    s = n(481060),
    u = n(579806),
    r = n(435064),
    a = n(39604),
    o = n(509613),
    c = n(313789),
    d = n(388032);
let S = (0, o.ON)(c.n.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [d.intl.string(d.t.s4773E), d.intl.string(d.t.svjwGh)],
    Component: () => {
        let t = (0, l.e7)([r.Z], () => r.Z.getSettings().storageLocation),
            e = async () => {
                let t = await u.Z.fileManager.showOpenDialog({
                    properties: ["openDirectory", "createDirectory"],
                });
                t.length > 0 && a.T1(t[0]);
            };
        return (0, i.jsx)(s.gNt, {
            label: d.intl.string(d.t.s4773E),
            description: d.intl.string(d.t.svjwGh),
            layout: "horizontal",
            children: (0, i.jsx)(s.P3F, {
                "aria-label": d.intl.formatToPlainString(d.t.iMONTj, { storageLocation: t }),
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
