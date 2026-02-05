"use strict";
n.d(t, { A: () => I });
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
    p = n(603880),
    h = n(635917),
    m = n(355097),
    g = n(985018),
    E = n(638959),
    A = n(944255);
function I(e) {
    let { className: t, disabled: n, isEditor: I, renderCTAButtons: T } = e,
        [y] = (0, a.yK)([f.A], () => [f.A.getCurrentDesktopIcon()]),
        S = (0, d.dk)("AppIconSelectionGroup"),
        v = i.useRef(null);
    (0, _.A)(v, m.kq.CUSTOM_APP_ICONS);
    let C = (0, u.GV)(),
        { ref: b, ...N } = (0, s._u)({ orientation: "horizontal", labelledBy: C }),
        R = (e) => {
            l.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
        };
    return (0, r.jsx)("div", {
        ref: v,
        children: (0, r.jsx)("div", {
            ...N,
            ref: b,
            className: E.__invalid_container,
            children: (0, r.jsxs)("div", {
                className: t,
                children: [
                    (0, r.jsxs)("div", {
                        className: E.wx,
                        children: [
                            (0, r.jsxs)("div", {
                                className: E.so,
                                children: [
                                    !I &&
                                        (0, r.jsxs)("div", {
                                            className: E.DD,
                                            children: [
                                                (0, r.jsx)(o.Heading, {
                                                    className: E.Qw,
                                                    variant: S ? "heading-xl/normal" : "text-lg/medium",
                                                    color: S ? "text-strong" : void 0,
                                                    children: g.intl.string(g.t.NThqTw),
                                                }),
                                                (0, r.jsx)(c.A, { className: E.PC }),
                                            ],
                                        }),
                                    (0, r.jsx)(o.Heading, {
                                        variant: "text-sm/normal",
                                        className: A.W$,
                                        children: g.intl.string(g.t.IgENJo),
                                    }),
                                ],
                            }),
                            T?.(),
                        ],
                    }),
                    (0, r.jsx)(o.BJc, {
                        direction: "horizontal",
                        wrap: !0,
                        gap: 8,
                        style: { marginTop: 16 },
                        children: (0, h.v8)()
                            .filter((e) => {
                                let { isHidden: t } = e;
                                return !t;
                            })
                            .map((e, t) =>
                                (0, r.jsx)(
                                    p.A,
                                    {
                                        icon: e,
                                        isSelected: y === e.id,
                                        onSelect: (e) => R(e),
                                        disabled: n,
                                        tabIndex: 0 !== t || n ? void 0 : 0,
                                        locked: !1,
                                    },
                                    e.id,
                                ),
                            ),
                    }),
                ],
            }),
        }),
    });
}
