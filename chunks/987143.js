n.d(e, { Z: () => d });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    u = n(579806),
    s = n(435064),
    a = n(39604),
    o = n(509613),
    c = n(313789),
    E = n(388032);
let d = (0, o.ON)(c.n.CLIPS_STORAGE_LOCATION, {
    useSearchTerms: () => [E.intl.string(E.t.s4773E), E.intl.string(E.t.svjwGh)],
    render: () => {
        let t = (0, r.e7)([s.Z], () => s.Z.getSettings().storageLocation),
            e = async () => {
                let t = await u.Z.fileManager.showOpenDialog({
                    properties: ["openDirectory", "createDirectory"],
                });
                t.length > 0 && a.T1(t[0]);
            };
        return (0, i.jsx)(l.gNt, {
            label: E.intl.string(E.t.s4773E),
            description: E.intl.string(E.t.svjwGh),
            layout: "horizontal",
            children: (0, i.jsx)(l.P3F, {
                "aria-label": E.intl.formatToPlainString(E.t.iMONTj, { storageLocation: t }),
                onClick: e,
                children: (0, i.jsx)(l.oil, {
                    tabIndex: -1,
                    value: t,
                    editable: !1,
                    "aria-hidden": !0,
                }),
            }),
        });
    },
});
