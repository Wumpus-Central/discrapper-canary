n.d(e, { Z: () => E });
var i = n(54381);
n(473749);
var l = n(442837),
    s = n(481060),
    r = n(579806),
    u = n(435064),
    a = n(39604),
    o = n(509613),
    c = n(313789),
    d = n(388032);
let E = (0, o.ON)(c.n.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [d.intl.string(d.t.s4773E), d.intl.string(d.t.svjwGh)],
    render: () => {
        let t = (0, l.e7)([u.Z], () => u.Z.getSettings().storageLocation),
            e = async () => {
                let t = await r.Z.fileManager.showOpenDialog({
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
