"use strict";
n.d(t, { m: () => b, A: () => M });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(785007),
    l = n(297264),
    o = n(661531),
    d = n(331322),
    c = n(228366),
    u = n(915089),
    _ = n(450232),
    E = n(526162),
    A = n(503698),
    h = n.n(A),
    I = n(735438),
    f = n.n(I),
    p = n(990078),
    T = n(939249),
    m = n(194261),
    g = n(653523),
    S = n(350972),
    N = n(677056),
    C = n(174197),
    O = n(652215),
    R = n(375708),
    L = n(588525);
function D(e) {
    let {
            id: t,
            className: n,
            style: a,
            onSelect: s,
            isSelected: l = !1,
            tabIndex: o,
            children: d,
            locked: c = !1,
            disabled: u = !1,
        } = e,
        [_, E] = r.useState((0, C.gG)(t).name),
        A = t === S.Ic.PIRATE;
    return (0, i.jsx)(p.m, {
        text: _,
        onTooltipShow: () =>
            A &&
            E(
                f().sample([
                    R.intl.string(R.t["EgWTY+"]),
                    R.intl.string(R.t.umBn5f),
                    R.intl.string(R.t.dG1wD1),
                    R.intl.string(R.t.SesI4S),
                    R.intl.string(R.t.RnMLvl),
                ]) ?? R.intl.string(R.t["EgWTY+"]),
            ),
        children: (0, i.jsxs)("div", {
            className: L.Co,
            style: a,
            children: [
                (0, i.jsx)(T.D, {
                    role: "radio",
                    "aria-label": _,
                    "aria-checked": l,
                    "aria-disabled": u,
                    tabIndex: o ?? (l ? 0 : -1),
                    className: h()(L.Ni, { [L.wH]: l }, n),
                    onClick: l ? O.tEg : () => s?.(t),
                    children: d,
                }),
                l && (0, i.jsx)(g.H$, {}),
                c &&
                    (0, i.jsx)("div", {
                        className: L.RK,
                        children: (0, i.jsx)(m.X, { className: L.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function y(e) {
    let { size: t = C.N8.SIZE_60, icon: n, isSelected: a, disabled: s, tabIndex: l, onSelect: o, locked: d } = e,
        c = r.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(D, {
        style: c,
        onSelect: s ? void 0 : o,
        isSelected: a,
        id: n.id,
        className: s ? L.r9 : void 0,
        tabIndex: l,
        locked: d,
        disabled: s,
        children: (0, i.jsx)(N.A, { id: n.id, size: t }),
    });
}
var v = n(182686);
function b(e) {
    let { disabled: t, size: n } = e,
        [r] = (0, a.yK)([E.A], () => [E.A.getCurrentDesktopIcon()]);
    return (0, i.jsx)(i.Fragment, {
        children: (0, C.v8)()
            .filter((e) => {
                let { isHidden: t } = e;
                return !t;
            })
            .map((e, a) =>
                (0, i.jsx)(
                    y,
                    {
                        icon: e,
                        isSelected: r === e.id,
                        onSelect: (e) => {
                            c.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
                        },
                        disabled: t,
                        tabIndex: 0 !== a || t ? void 0 : 0,
                        locked: !1,
                        size: n,
                    },
                    e.id,
                ),
            ),
    });
}
function M(e) {
    let { className: t, disabled: n, isEditor: r, renderCTAButtons: a, iconSize: c } = e,
        E = (0, u.GV)(),
        { ref: A, ...h } = (0, s._u)({ orientation: "horizontal", labelledBy: E });
    return (0, i.jsx)("div", {
        ...h,
        ref: A,
        children: (0, i.jsxs)("div", {
            className: t,
            children: [
                (0, i.jsxs)("div", {
                    className: v.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: v.so,
                            children: [
                                !r &&
                                    (0, i.jsxs)("div", {
                                        className: v.DD,
                                        children: [
                                            (0, i.jsx)(l.D, {
                                                className: v.Qw,
                                                variant: "heading-xl/normal",
                                                color: "text-strong",
                                                children: R.intl.string(R.t.NThqTw),
                                            }),
                                            (0, i.jsx)(_.A, { color: o.A.colors.ICON_STRONG, size: "sm" }),
                                        ],
                                    }),
                                (0, i.jsx)(l.D, {
                                    variant: "text-sm/normal",
                                    className: v.W$,
                                    children: R.intl.string(R.t.IgENJo),
                                }),
                            ],
                        }),
                        a?.(),
                    ],
                }),
                (0, i.jsx)(d.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, i.jsx)(b, { disabled: n, size: c }),
                }),
            ],
        }),
    });
}
