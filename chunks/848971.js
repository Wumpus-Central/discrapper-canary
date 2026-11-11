var l = n(477900);
n(582128);
var r = n(855986);
if (588245 != n.j) var i = n(785007);
if (588245 != n.j) var s = n(534514);
if (588245 != n.j) var a = n(331322);
var o = n(73153),
    c = n(915089),
    u = n(336044),
    d = n(450232),
    h = n(526162),
    g = n(603880),
    m = n(236814),
    x = n(792996),
    f = n(40025);
function v(e) {
    let { disabled: t, size: n } = e,
        [i] = (0, r.yK)([h.A], () => [h.A.getCurrentDesktopIcon()]),
        s = (0, u.i)();
    return (0, l.jsx)(l.Fragment, {
        children: (0, m.v8)()
            .filter((e) => {
                let { isHidden: t } = e;
                return !t;
            })
            .map((e, r) => {
                let a = s || (!0 === t && e.isPremium);
                return (0, l.jsx)(
                    g.A,
                    {
                        icon: e,
                        isSelected: i === e.id,
                        onSelect: (e) => {
                            !(0, u.rs)() && o.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
                        },
                        disabled: a,
                        tabIndex: 0 !== r || a ? void 0 : 0,
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
            let { className: t, disabled: n, isEditor: r, renderCTAButtons: o, iconSize: u } = e,
                h = (0, c.GV)(),
                { ref: g, ...m } = (0, i._u)({ orientation: "horizontal", labelledBy: h });
            return (0, l.jsx)("div", {
                ...m,
                ref: g,
                children: (0, l.jsxs)("div", {
                    className: t,
                    children: [
                        (0, l.jsxs)("div", {
                            className: f.wx,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: f.so,
                                    children: [
                                        !r &&
                                            (0, l.jsxs)("div", {
                                                className: f.DD,
                                                children: [
                                                    (0, l.jsx)(s.D, {
                                                        className: f.Qw,
                                                        variant: "heading-xl/medium",
                                                        color: "text-strong",
                                                        children: x.intl.string(x.t.NThqTw),
                                                    }),
                                                    (0, l.jsx)(d.A, { color: "strong", size: "sm" }),
                                                ],
                                            }),
                                        (0, l.jsx)(s.D, {
                                            variant: "body-sm/normal",
                                            className: f.W$,
                                            children: x.intl.string(x.t.IgENJo),
                                        }),
                                    ],
                                }),
                                o?.(),
                            ],
                        }),
                        (0, l.jsx)(a.B, {
                            direction: "horizontal",
                            wrap: !0,
                            gap: 8,
                            style: { marginTop: 16 },
                            children: (0, l.jsx)(v, { disabled: n, size: u }),
                        }),
                    ],
                }),
            });
        },
        m: v,
    },
);
