"use strict";
n.d(t, { A: () => y, m: () => T });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(421380),
    o = n(397927),
    l = n(73153),
    u = n(915089),
    c = n(450232),
    d = n(358776),
    _ = n(193658),
    f = n(526162),
    h = n(603880),
    p = n(635917),
    g = n(355097),
    E = n(985018),
    A = n(638959),
    I = n(944255);
function T(e) {
    let { disabled: t } = e,
        [n] = (0, a.yK)([f.A], () => [f.A.getCurrentDesktopIcon()]),
        i = (e) => {
            l.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
        };
    return (0, r.jsx)(r.Fragment, {
        children: (0, p.v8)()
            .filter((e) => {
                let { isHidden: t } = e;
                return !t;
            })
            .map((e, a) =>
                (0, r.jsx)(
                    h.A,
                    {
                        icon: e,
                        isSelected: n === e.id,
                        onSelect: (e) => i(e),
                        disabled: t,
                        tabIndex: 0 !== a || t ? void 0 : 0,
                        locked: !1,
                    },
                    e.id,
                ),
            ),
    });
}
function y(e) {
    let { className: t, disabled: n, isEditor: a, renderCTAButtons: l } = e,
        f = (0, d.dk)("AppIconSelectionGroup"),
        h = i.useRef(null);
    (0, _.A)(h, g.kq.CUSTOM_APP_ICONS);
    let p = (0, u.GV)(),
        { ref: y, ...S } = (0, s._u)({ orientation: "horizontal", labelledBy: p });
    return (0, r.jsx)("div", {
        ref: h,
        children: (0, r.jsx)("div", {
            ...S,
            ref: y,
            children: (0, r.jsxs)("div", {
                className: t,
                children: [
                    (0, r.jsxs)("div", {
                        className: A.wx,
                        children: [
                            (0, r.jsxs)("div", {
                                className: A.so,
                                children: [
                                    !a &&
                                        (0, r.jsxs)("div", {
                                            className: A.DD,
                                            children: [
                                                (0, r.jsx)(o.Heading, {
                                                    className: A.Qw,
                                                    variant: f ? "heading-xl/normal" : "text-lg/medium",
                                                    color: f ? "text-strong" : void 0,
                                                    children: E.intl.string(E.t.NThqTw),
                                                }),
                                                (0, r.jsx)(c.A, { className: A.PC }),
                                            ],
                                        }),
                                    (0, r.jsx)(o.Heading, {
                                        variant: "text-sm/normal",
                                        className: I.W$,
                                        children: E.intl.string(E.t.IgENJo),
                                    }),
                                ],
                            }),
                            l?.(),
                        ],
                    }),
                    (0, r.jsx)(o.BJc, {
                        direction: "horizontal",
                        wrap: !0,
                        gap: 8,
                        style: { marginTop: 16 },
                        children: (0, r.jsx)(T, { disabled: n }),
                    }),
                ],
            }),
        }),
    });
}
