n.d(e, { Z: () => g });
var i = n(951288),
    l = n(793030),
    r = n(442837),
    u = n(846027),
    s = n(825209),
    a = n(509613),
    o = n(131951),
    c = n(313789),
    E = n(595373),
    d = n(981631),
    S = n(388032),
    T = n(420496);
function O() {
    let t = (0, r.e7)([o.Z], () => {
        let { shortcut: t } = o.Z.getModeOptions();
        return t;
    });
    return (0, i.jsx)(l.gNt, {
        label: S.intl.string(S.t["o+BJQR"]),
        layout: "horizontal",
        children: (0, i.jsx)("div", {
            className: T.keybindContainer,
            children: (0, i.jsx)(s.Z, {
                defaultValue: t,
                onChange: (t) => u.Z.setMode(d.pM4.PUSH_TO_TALK, { shortcut: t }),
            }),
        }),
    });
}
let g = (0, a.ON)(c.n.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    usePredicate: E.p,
    render: () => (0, i.jsx)(O, {}),
    useSearchTerms: () => [S.intl.string(S.t["pS+K2L"]), S.intl.string(S.t.nuFtHH)],
});
