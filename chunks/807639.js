n.d(t, { C: () => h });
var i = n(627968),
    s = n(158954),
    l = n(311907),
    r = n(827343),
    a = n(117178),
    o = n(419954),
    d = n(430452),
    c = n(780964),
    u = n(858897),
    m = n(916607),
    g = n(652215),
    _ = n(985018),
    x = n(285802);
let h = (0, o.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [_.intl.string(_.t["pS+K2L"]), _.intl.string(_.t.nuFtHH)],
    usePredicate: m.P,
    Component: function () {
        let e = (0, l.bG)([d.Ay], () => {
                let { shortcut: e } = d.Ay.getModeOptions();
                return e;
            }),
            t = _.intl.format(_.t.HVvn5T, { onClick: () => (0, u.openUserSettings)(c.X.KEYBINDS_PANEL) });
        return (0, i.jsx)(s.D0$, {
            label: _.intl.string(_.t["o+BJQR"]),
            description: t,
            layout: "horizontal-responsive",
            children: (0, i.jsx)("div", {
                className: x.e,
                children: (0, i.jsx)(a.A, {
                    defaultValue: e,
                    onChange: (e) => r.A.setMode(g.TBI.PUSH_TO_TALK, { shortcut: e }),
                }),
            }),
        });
    },
});
