"use strict";
n.d(t, { A: () => T, m: () => I });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(421380),
    o = n(397927),
    l = n(73153),
    u = n(915089),
    c = n(450232),
    d = n(358776),
    _ = n(193658),
    f = n(526162),
    p = n(603880),
    h = n(635917),
    m = n(355097),
    E = n(985018),
    g = n(270405),
    A = n(239589);
function I(e) {
    let { disabled: t, size: n } = e,
        [i] = (0, s.yK)([f.A], () => [f.A.getCurrentDesktopIcon()]),
        a = (e) => {
            l.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
        };
    return (0, r.jsx)(r.Fragment, {
        children: (0, h.v8)()
            .filter((e) => {
                let { isHidden: t } = e;
                return !t;
            })
            .map((e, s) =>
                (0, r.jsx)(
                    p.A,
                    {
                        icon: e,
                        isSelected: i === e.id,
                        onSelect: (e) => a(e),
                        disabled: t,
                        tabIndex: 0 !== s || t ? void 0 : 0,
                        locked: !1,
                        size: n,
                    },
                    e.id,
                ),
            ),
    });
}
function T(e) {
    let { className: t, disabled: n, isEditor: s, renderCTAButtons: l, iconSize: f } = e,
        p = (0, d.dk)("AppIconSelectionGroup"),
        h = i.useRef(null);
    (0, _.A)(h, m.kq.CUSTOM_APP_ICONS);
    let T = (0, u.GV)(),
        { ref: S, ...y } = (0, a._u)({ orientation: "horizontal", labelledBy: T });
    return (0, r.jsx)("div", {
        ref: h,
        children: (0, r.jsx)("div", {
            ...y,
            ref: S,
            children: (0, r.jsxs)("div", {
                className: t,
                children: [
                    (0, r.jsxs)("div", {
                        className: g.wx,
                        children: [
                            (0, r.jsxs)("div", {
                                className: g.so,
                                children: [
                                    !s &&
                                        (0, r.jsxs)("div", {
                                            className: g.DD,
                                            children: [
                                                (0, r.jsx)(o.Heading, {
                                                    className: g.Qw,
                                                    variant: p ? "heading-xl/normal" : "text-lg/medium",
                                                    color: p ? "text-strong" : void 0,
                                                    children: E.intl.string(E.t.NThqTw),
                                                }),
                                                (0, r.jsx)(c.A, { className: g.PC }),
                                            ],
                                        }),
                                    (0, r.jsx)(o.Heading, {
                                        variant: "text-sm/normal",
                                        className: A.W$,
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
                        children: (0, r.jsx)(I, { disabled: n, size: f }),
                    }),
                ],
            }),
        }),
    });
}
