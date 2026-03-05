"use strict";
n.d(t, { A: () => I, m: () => A });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(421380),
    o = n(397927),
    l = n(73153),
    u = n(915089),
    c = n(450232),
    d = n(193658),
    _ = n(526162),
    f = n(603880),
    p = n(635917),
    h = n(355097),
    m = n(985018),
    E = n(638959),
    g = n(944255);
function A(e) {
    let { disabled: t, size: n } = e,
        [i] = (0, s.yK)([_.A], () => [_.A.getCurrentDesktopIcon()]),
        a = (e) => {
            l.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
        };
    return (0, r.jsx)(r.Fragment, {
        children: (0, p.v8)()
            .filter((e) => {
                let { isHidden: t } = e;
                return !t;
            })
            .map((e, s) =>
                (0, r.jsx)(
                    f.A,
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
function I(e) {
    let { className: t, disabled: n, isEditor: s, renderCTAButtons: l, iconSize: _ } = e,
        f = i.useRef(null);
    (0, d.A)(f, h.kq.CUSTOM_APP_ICONS);
    let p = (0, u.GV)(),
        { ref: I, ...T } = (0, a._u)({ orientation: "horizontal", labelledBy: p });
    return (0, r.jsx)("div", {
        ref: f,
        children: (0, r.jsx)("div", {
            ...T,
            ref: I,
            children: (0, r.jsxs)("div", {
                className: t,
                children: [
                    (0, r.jsxs)("div", {
                        className: E.wx,
                        children: [
                            (0, r.jsxs)("div", {
                                className: E.so,
                                children: [
                                    !s &&
                                        (0, r.jsxs)("div", {
                                            className: E.DD,
                                            children: [
                                                (0, r.jsx)(o.Heading, {
                                                    className: E.Qw,
                                                    variant: "heading-xl/normal",
                                                    color: "text-strong",
                                                    children: m.intl.string(m.t.NThqTw),
                                                }),
                                                (0, r.jsx)(c.A, { color: o.LU0.colors.ICON_STRONG, size: "sm" }),
                                            ],
                                        }),
                                    (0, r.jsx)(o.Heading, {
                                        variant: "text-sm/normal",
                                        className: g.W$,
                                        children: m.intl.string(m.t.IgENJo),
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
                        children: (0, r.jsx)(A, { disabled: n, size: _ }),
                    }),
                ],
            }),
        }),
    });
}
