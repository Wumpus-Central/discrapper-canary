e.d(n, { default: () => b });
var i = e(951288);
e(647438);
var a = e(481060),
    s = e(600164),
    r = e(313201),
    o = e(695346),
    l = e(313789),
    c = e(518596),
    d = e(626135),
    x = e(981631),
    p = e(526761),
    u = e(388032),
    h = e(836123),
    C = e(38880);
function b(t) {
    let { onClose: n, transitionState: e } = t,
        b = (0, r.Dt)();
    function _() {
        n(),
            (0, c.openUserSettings)(l.n.ACCESSIBILITY_PANEL, {
                section: x.oAB.ACCESSIBILITY,
                scrollPosition: p.rP.LEGACY_CHAT_INPUT,
            });
    }
    return (0, i.jsxs)(a.Y0X, {
        transitionState: e,
        "aria-labelledby": b,
        parentComponent: "LegacyChatInputExplanationModal",
        children: [
            (0, i.jsx)("img", {
                className: h.art,
                src: C,
                alt: "",
            }),
            (0, i.jsx)(a.hzk, {
                children: (0, i.jsxs)(s.Z, {
                    direction: s.Z.Direction.VERTICAL,
                    justify: s.Z.Justify.CENTER,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            id: b,
                            variant: "heading-lg/semibold",
                            className: h.title,
                            children: u.intl.string(u.t.G9HG5O),
                        }),
                        (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: h.body,
                            children: u.intl.format(u.t.ZtUieH, {
                                openSettingsHook: (t, n) =>
                                    (0, i.jsx)(
                                        a.eee,
                                        {
                                            onClick: _,
                                            children: t,
                                        },
                                        n,
                                    ),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)(a.mzw, {
                children: (0, i.jsxs)(a.hE2, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, i.jsx)(a.zxk, {
                            variant: "primary",
                            text: u.intl.string(u.t.VdzwlJ),
                            type: "button",
                            onClick: function () {
                                d.default.track(x.rMx.LEGACY_CHAT_INPUT_TOGGLED, {
                                    enabled: !1,
                                    location: "LegacyChatInputExplanationModal",
                                }),
                                    o.dN.updateSetting(!1),
                                    n();
                            },
                        }),
                        (0, i.jsx)(a.zxk, {
                            variant: "secondary",
                            text: u.intl.string(u.t.f3Pet7),
                            type: "button",
                            onClick: n,
                        }),
                    ],
                }),
            }),
        ],
    });
}
