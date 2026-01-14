i.d(n, { default: () => A });
var e = i(54381);
i(473749);
var a = i(793030),
    o = i(481060),
    s = i(695346),
    r = i(313789),
    l = i(526665),
    c = i(518596),
    p = i(626135),
    d = i(981631),
    C = i(526761),
    u = i(388032),
    E = i(38880);
function A(t) {
    let { onClose: n, transitionState: i } = t;
    function A() {
        n();
        let t = (0, l.Gl)("LegacyChatInputExplanationModal");
        (0, c.openUserSettings)(t ? r.n.ENABLE_LEGACY_CHAT_INPUT : r.n.ACCESSIBILITY_PANEL, {
            section: d.oAB.ACCESSIBILITY,
            scrollPosition: t ? void 0 : C.rP.LEGACY_CHAT_INPUT,
        });
    }
    return (0, e.jsx)(a.ExpressiveModal, {
        transitionState: i,
        title: u.intl.string(u.t.G9HG5O),
        subtitle: u.intl.format(u.t.ZtUieE, {
            openSettingsHook: (t, n) =>
                (0, e.jsx)(
                    o.eee,
                    {
                        onClick: A,
                        children: t,
                    },
                    n,
                ),
        }),
        onClose: n,
        graphic: {
            type: "image",
            src: E,
        },
        actions: [
            {
                variant: "secondary",
                text: u.intl.string(u.t.f3Pet9),
                onClick: n,
            },
            {
                variant: "primary",
                text: u.intl.string(u.t.VdzwlA),
                onClick: function () {
                    p.default.track(d.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                        enabled: !1,
                        location: "LegacyChatInputExplanationModal",
                    }),
                        s.dN.updateSetting(!1),
                        n();
                },
            },
        ],
    });
}
