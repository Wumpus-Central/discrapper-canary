var i = n(477900);
n(582128);
var s = n(855986);
if (588245 != n.j) var r = n(785007);
if (588245 != n.j) var l = n(534514);
if (588245 != n.j) var a = n(331322);
var c = n(73153),
    o = n(915089),
    u = n(336044),
    d = n(450232),
    m = n(526162),
    h = n(603880),
    g = n(236814),
    f = n(792996),
    p = n(40025);
function A(e) {
    let { disabled: t, size: n } = e,
        [r] = (0, s.yK)([m.A], () => [m.A.getCurrentDesktopIcon()]),
        l = (0, u.i)();
    return (0, i.jsx)(i.Fragment, {
        children: (0, g.v8)()
            .filter((e) => {
                let { isHidden: t } = e;
                return !t;
            })
            .map((e, s) => {
                let a = l || (!0 === t && e.isPremium);
                return (0, i.jsx)(
                    h.A,
                    {
                        icon: e,
                        isSelected: r === e.id,
                        onSelect: (e) => {
                            !(0, u.rs)() && c.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
                        },
                        disabled: a,
                        tabIndex: 0 !== s || a ? void 0 : 0,
                        locked: !1,
                        size: n,
                    },
                    e.id,
                );
            }),
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { className: t, disabled: n, isEditor: s, renderCTAButtons: c, iconSize: u } = e,
                m = (0, o.GV)(),
                { ref: h, ...g } = (0, r._u)({ orientation: "horizontal", labelledBy: m });
            return (0, i.jsx)("div", {
                ...g,
                ref: h,
                children: (0, i.jsxs)("div", {
                    className: t,
                    children: [
                        (0, i.jsxs)("div", {
                            className: p.wx,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: p.so,
                                    children: [
                                        !s &&
                                            (0, i.jsxs)("div", {
                                                className: p.DD,
                                                children: [
                                                    (0, i.jsx)(l.D, {
                                                        className: p.Qw,
                                                        variant: "heading-xl/medium",
                                                        color: "text-strong",
                                                        children: f.intl.string(f.t.NThqTw),
                                                    }),
                                                    (0, i.jsx)(d.A, { color: "strong", size: "sm" }),
                                                ],
                                            }),
                                        (0, i.jsx)(l.D, {
                                            variant: "body-sm/normal",
                                            className: p.W$,
                                            children: f.intl.string(f.t.IgENJo),
                                        }),
                                    ],
                                }),
                                c?.(),
                            ],
                        }),
                        (0, i.jsx)(a.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 16 },
                            children: (0, i.jsx)(A, { disabled: n, size: u }),
                        }),
                    ],
                }),
            });
        },
        m: A,
    },
);
