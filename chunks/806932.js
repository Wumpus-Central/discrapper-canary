"use strict";
n.d(t, { m: () => L, A: () => w });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(785007),
    o = n(534514),
    l = n(661531),
    u = n(331322),
    c = n(228366),
    d = n(915089),
    _ = n(450232),
    h = n(526162),
    f = n(503698),
    p = n.n(f),
    E = n(735438),
    m = n.n(E),
    g = n(990078),
    A = n(939249),
    I = n(194261),
    T = n(653523),
    S = n(350972),
    y = n(677056),
    C = n(174197),
    N = n(652215),
    v = n(375708),
    R = n(588525);
function O(e) {
    let {
            id: t,
            className: n,
            style: s,
            onSelect: a,
            isSelected: o = !1,
            tabIndex: l,
            children: u,
            locked: c = !1,
            disabled: d = !1,
        } = e,
        [_, h] = r.useState((0, C.gG)(t).name),
        f = t === S.Ic.PIRATE;
    return (0, i.jsx)(g.m, {
        text: _,
        onTooltipShow: () =>
            f &&
            h(
                m().sample([
                    v.intl.string(v.t["EgWTY+"]),
                    v.intl.string(v.t.umBn5f),
                    v.intl.string(v.t.dG1wD1),
                    v.intl.string(v.t.SesI4S),
                    v.intl.string(v.t.RnMLvl),
                ]) ?? v.intl.string(v.t["EgWTY+"]),
            ),
        children: (0, i.jsxs)("div", {
            className: R.Co,
            style: s,
            children: [
                (0, i.jsx)(A.D, {
                    role: "radio",
                    "aria-label": _,
                    "aria-checked": o,
                    "aria-disabled": d,
                    tabIndex: l ?? (o ? 0 : -1),
                    className: p()(R.Ni, { [R.wH]: o }, n),
                    onClick: o ? N.tEg : () => a?.(t),
                    children: u,
                }),
                o && (0, i.jsx)(T.H$, {}),
                c &&
                    (0, i.jsx)("div", {
                        className: R.RK,
                        children: (0, i.jsx)(I.X, { className: R.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function b(e) {
    let { size: t = C.N8.SIZE_60, icon: n, isSelected: s, disabled: a, tabIndex: o, onSelect: l, locked: u } = e,
        c = r.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(O, {
        style: c,
        onSelect: a ? void 0 : l,
        isSelected: s,
        id: n.id,
        className: a ? R.r9 : void 0,
        tabIndex: o,
        locked: u,
        disabled: a,
        children: (0, i.jsx)(y.A, { id: n.id, size: t }),
    });
}
var D = n(182686);
function L(e) {
    let { disabled: t, size: n } = e,
        [r] = (0, s.yK)([h.A], () => [h.A.getCurrentDesktopIcon()]);
    return (0, i.jsx)(i.Fragment, {
        children: (0, C.v8)()
            .filter((e) => {
                let { isHidden: t } = e;
                return !t;
            })
            .map((e, s) =>
                (0, i.jsx)(
                    b,
                    {
                        icon: e,
                        isSelected: r === e.id,
                        onSelect: (e) => {
                            c.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
                        },
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
function w(e) {
    let { className: t, disabled: n, isEditor: r, renderCTAButtons: s, iconSize: c } = e,
        h = (0, d.GV)(),
        { ref: f, ...p } = (0, a._u)({ orientation: "horizontal", labelledBy: h });
    return (0, i.jsx)("div", {
        ...p,
        ref: f,
        children: (0, i.jsxs)("div", {
            className: t,
            children: [
                (0, i.jsxs)("div", {
                    className: D.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: D.so,
                            children: [
                                !r &&
                                    (0, i.jsxs)("div", {
                                        className: D.DD,
                                        children: [
                                            (0, i.jsx)(o.D, {
                                                className: D.Qw,
                                                variant: "heading-xl/normal",
                                                color: "text-strong",
                                                children: v.intl.string(v.t.NThqTw),
                                            }),
                                            (0, i.jsx)(_.A, { color: l.A.colors.ICON_STRONG, size: "sm" }),
                                        ],
                                    }),
                                (0, i.jsx)(o.D, {
                                    variant: "text-sm/normal",
                                    className: D.W$,
                                    children: v.intl.string(v.t.IgENJo),
                                }),
                            ],
                        }),
                        s?.(),
                    ],
                }),
                (0, i.jsx)(u.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, i.jsx)(L, { disabled: n, size: c }),
                }),
            ],
        }),
    });
}
