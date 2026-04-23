"use strict";
n.d(t, { A: () => g, m: () => m });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(785007),
    a = n(534514),
    o = n(827734),
    l = n(331322),
    u = n(73153),
    c = n(915089),
    d = n(450232),
    _ = n(526162),
    f = n(603880),
    p = n(635917),
    h = n(985018),
    E = n(182686);
function m(e) {
    let { disabled: t, size: n } = e,
        [s] = (0, i.yK)([_.A], () => [_.A.getCurrentDesktopIcon()]);
    return (0, r.jsx)(r.Fragment, {
        children: (0, p.v8)()
            .filter((e) => {
                let { isHidden: t } = e;
                return !t;
            })
            .map((e, i) =>
                (0, r.jsx)(
                    f.A,
                    {
                        icon: e,
                        isSelected: s === e.id,
                        onSelect: (e) => {
                            u.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
                        },
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
function g(e) {
    let { className: t, disabled: n, isEditor: i, renderCTAButtons: u, iconSize: _ } = e,
        f = (0, c.GV)(),
        { ref: p, ...g } = (0, s._u)({ orientation: "horizontal", labelledBy: f });
    return (0, r.jsx)("div", {
        ...g,
        ref: p,
        children: (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsxs)("div", {
                    className: E.wx,
                    children: [
                        (0, r.jsxs)("div", {
                            className: E.so,
                            children: [
                                !i &&
                                    (0, r.jsxs)("div", {
                                        className: E.DD,
                                        children: [
                                            (0, r.jsx)(a.D, {
                                                className: E.Qw,
                                                variant: "heading-xl/normal",
                                                color: "text-strong",
                                                children: h.intl.string(h.t.NThqTw),
                                            }),
                                            (0, r.jsx)(d.A, { color: o.A.colors.ICON_STRONG, size: "sm" }),
                                        ],
                                    }),
                                (0, r.jsx)(a.D, {
                                    variant: "text-sm/normal",
                                    className: E.W$,
                                    children: h.intl.string(h.t.IgENJo),
                                }),
                            ],
                        }),
                        u?.(),
                    ],
                }),
                (0, r.jsx)(l.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(m, { disabled: n, size: _ }),
                }),
            ],
        }),
    });
}
