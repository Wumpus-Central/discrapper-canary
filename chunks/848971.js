"use strict";
n.d(t, { A: () => E, m: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(421380),
    a = n(397927),
    o = n(73153),
    l = n(915089),
    u = n(450232),
    c = n(526162),
    d = n(603880),
    _ = n(635917),
    f = n(985018),
    p = n(593909),
    h = n(12698);
function m(e) {
    let { disabled: t, size: n } = e,
        [s] = (0, i.yK)([c.A], () => [c.A.getCurrentDesktopIcon()]),
        a = (e) => {
            o.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
        };
    return (0, r.jsx)(r.Fragment, {
        children: (0, _.v8)()
            .filter((e) => {
                let { isHidden: t } = e;
                return !t;
            })
            .map((e, i) =>
                (0, r.jsx)(
                    d.A,
                    {
                        icon: e,
                        isSelected: s === e.id,
                        onSelect: (e) => a(e),
                        disabled: t,
                        tabIndex: 0 !== i || t ? void 0 : 0,
                        locked: !1,
                        size: n,
                    },
                    e.id,
                ),
            ),
    });
}
function E(e) {
    let { className: t, disabled: n, isEditor: i, renderCTAButtons: o, iconSize: c } = e,
        d = (0, l.GV)(),
        { ref: _, ...E } = (0, s._u)({ orientation: "horizontal", labelledBy: d });
    return (0, r.jsx)("div", {
        ...E,
        ref: _,
        children: (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsxs)("div", {
                    className: p.wx,
                    children: [
                        (0, r.jsxs)("div", {
                            className: p.so,
                            children: [
                                !i &&
                                    (0, r.jsxs)("div", {
                                        className: p.DD,
                                        children: [
                                            (0, r.jsx)(a.Heading, {
                                                className: p.Qw,
                                                variant: "heading-xl/normal",
                                                color: "text-strong",
                                                children: f.intl.string(f.t.NThqTw),
                                            }),
                                            (0, r.jsx)(u.A, { color: a.LU0.colors.ICON_STRONG, size: "sm" }),
                                        ],
                                    }),
                                (0, r.jsx)(a.Heading, {
                                    variant: "text-sm/normal",
                                    className: h.W$,
                                    children: f.intl.string(f.t.IgENJo),
                                }),
                            ],
                        }),
                        o?.(),
                    ],
                }),
                (0, r.jsx)(a.BJc, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(m, { disabled: n, size: c }),
                }),
            ],
        }),
    });
}
