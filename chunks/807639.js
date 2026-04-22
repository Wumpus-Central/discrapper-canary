n.d(t, { C: () => h });
var i = n(627968),
    s = n(452027),
    l = n(311907),
    a = n(827343),
    r = n(117178),
    o = n(419954),
    d = n(430452),
    u = n(780964),
    c = n(858897),
    g = n(916607),
    m = n(652215),
    _ = n(985018),
    A = n(7914);
let h = (0, o.E2)(u.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t["pS+K2L"]), _.intl.string(_.t.nuFtHH)],
    usePredicate: g.P,
    Component: function () {
        let e = (0, l.bG)([d.Ay], () => {
                let { shortcut: e } = d.Ay.getModeOptions();
                return e;
            }),
            t = _.intl.format(_.t.HVvn5T, { onClick: () => (0, c.openUserSettings)(u.X.KEYBINDS_PANEL) });
        return (0, i.jsx)(s.D, {
            label: _.intl.string(_.t["o+BJQR"]),
            description: t,
            layout: "horizontal-responsive",
            children: (0, i.jsx)("div", {
                className: A.e,
                children: (0, i.jsx)(r.A, {
                    defaultValue: e,
                    onChange: (e) => a.A.setMode(m.TBI.PUSH_TO_TALK, { shortcut: e }),
                }),
            }),
        });
    },
});
