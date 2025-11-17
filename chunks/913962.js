i.d(n, { default: () => g });
var e = i(54381);
i(473749);
var a = i(793030),
    o = i(481060),
    s = i(695346),
    r = i(313789),
    c = i(518596),
    l = i(626135),
    p = i(981631),
    d = i(526761),
    u = i(388032),
    C = i(38880);
function g(t) {
    let { onClose: n, transitionState: i } = t;
    function g() {
        n(),
            (0, c.openUserSettings)(r.n.ACCESSIBILITY_PANEL, {
                section: p.oAB.ACCESSIBILITY,
                scrollPosition: d.rP.LEGACY_CHAT_INPUT,
            });
    }
    return (0, e.jsx)(a.ExpressiveModal, {
        transitionState: i,
        title: u.intl.string(u.t.G9HG5O),
        subtitle: u.intl.format(u.t.ZtUieE, {
            openSettingsHook: (t, n) =>
                (0, e.jsx)(
                    o.Anchor,
                    {
                        onClick: g,
                        children: t,
                    },
                    n,
                ),
        }),
        onClose: n,
        graphic: {
            type: "image",
            src: C,
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
                    l.default.track(p.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
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
