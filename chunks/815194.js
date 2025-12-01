n.d(e, { Z: () => O });
var i = n(54381),
    r = n(793030),
    l = n(442837),
    u = n(846027),
    s = n(825209),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    d = n(518596),
    E = n(595373),
    S = n(981631),
    T = n(388032),
    I = n(53179);
function g() {
    let t = (0, l.e7)([o.Z], () => {
            let { shortcut: t } = o.Z.getModeOptions();
            return t;
        }),
        e = T.intl.format(T.t.HVvn5T, {
            onClick: () => (0, d.openUserSettings)(c.n.KEYBINDS_PANEL, { section: S.oAB.KEYBINDS }),
        });
    return (0, i.jsx)(r.gNt, {
        label: T.intl.string(T.t["o+BJQR"]),
        description: e,
        layout: "horizontal-responsive",
        children: (0, i.jsx)("div", {
            className: I.keybindContainer,
            children: (0, i.jsx)(s.Z, {
                defaultValue: t,
                onChange: (t) => u.Z.setMode(S.pM4.PUSH_TO_TALK, { shortcut: t }),
            }),
        }),
    });
}
let O = (0, a.ON)(c.n.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    usePredicate: E.J,
    render: () => (0, i.jsx)(g, {}),
    useSearchTerms: () => [T.intl.string(T.t["pS+K2L"]), T.intl.string(T.t.nuFtHH)],
});
