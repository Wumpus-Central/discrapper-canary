"use strict";
n.d(t, { m: () => b, A: () => w });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(785007),
    o = n(534514),
    l = n(661531),
    d = n(331322),
    _ = n(228366),
    u = n(915089),
    c = n(450232),
    E = n(526162),
    h = n(503698),
    m = n.n(h),
    f = n(735438),
    g = n.n(f),
    p = n(990078),
    A = n(939249),
    I = n(194261),
    T = n(653523),
    S = n(350972),
    N = n(677056),
    C = n(635917),
    R = n(652215),
    O = n(985018),
    y = n(588525);
function v(e) {
    let {
            id: t,
            className: n,
            style: s,
            onSelect: a,
            isSelected: o = !1,
            tabIndex: l,
            children: d,
            locked: _ = !1,
            disabled: u = !1,
        } = e,
        [c, E] = r.useState((0, C.gG)(t).name),
        h = t === S.Ic.PIRATE;
    return (0, i.jsx)(p.m, {
        text: c,
        onTooltipShow: () =>
            h &&
            E(
                g().sample([
                    O.intl.string(O.t["EgWTY+"]),
                    O.intl.string(O.t.umBn5f),
                    O.intl.string(O.t.dG1wD1),
                    O.intl.string(O.t.SesI4S),
                    O.intl.string(O.t.RnMLvl),
                ]) ?? O.intl.string(O.t["EgWTY+"]),
            ),
        children: (0, i.jsxs)("div", {
            className: y.Co,
            style: s,
            children: [
                (0, i.jsx)(A.D, {
                    role: "radio",
                    "aria-label": c,
                    "aria-checked": o,
                    "aria-disabled": u,
                    tabIndex: l ?? (o ? 0 : -1),
                    className: m()(y.Ni, { [y.wH]: o }, n),
                    onClick: o ? R.tEg : () => a?.(t),
                    children: d,
                }),
                o && (0, i.jsx)(T.H$, {}),
                _ &&
                    (0, i.jsx)("div", {
                        className: y.RK,
                        children: (0, i.jsx)(I.X, { className: y.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function D(e) {
    let { size: t = C.N8.SIZE_60, icon: n, isSelected: s, disabled: a, tabIndex: o, onSelect: l, locked: d } = e,
        _ = r.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(v, {
        style: _,
        onSelect: a ? void 0 : l,
        isSelected: s,
        id: n.id,
        className: a ? y.r9 : void 0,
        tabIndex: o,
        locked: d,
        disabled: a,
        children: (0, i.jsx)(N.A, { id: n.id, size: t }),
    });
}
var L = n(182686);
function b(e) {
    let { disabled: t, size: n } = e,
        [r] = (0, s.yK)([E.A], () => [E.A.getCurrentDesktopIcon()]);
    return (0, i.jsx)(i.Fragment, {
        children: (0, C.v8)()
            .filter((e) => {
                let { isHidden: t } = e;
                return !t;
            })
            .map((e, s) =>
                (0, i.jsx)(
                    D,
                    {
                        icon: e,
                        isSelected: r === e.id,
                        onSelect: (e) => {
                            _.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
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
    let { className: t, disabled: n, isEditor: r, renderCTAButtons: s, iconSize: _ } = e,
        E = (0, u.GV)(),
        { ref: h, ...m } = (0, a._u)({ orientation: "horizontal", labelledBy: E });
    return (0, i.jsx)("div", {
        ...m,
        ref: h,
        children: (0, i.jsxs)("div", {
            className: t,
            children: [
                (0, i.jsxs)("div", {
                    className: L.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: L.so,
                            children: [
                                !r &&
                                    (0, i.jsxs)("div", {
                                        className: L.DD,
                                        children: [
                                            (0, i.jsx)(o.D, {
                                                className: L.Qw,
                                                variant: "heading-xl/normal",
                                                color: "text-strong",
                                                children: O.intl.string(O.t.NThqTw),
                                            }),
                                            (0, i.jsx)(c.A, { color: l.A.colors.ICON_STRONG, size: "sm" }),
                                        ],
                                    }),
                                (0, i.jsx)(o.D, {
                                    variant: "text-sm/normal",
                                    className: L.W$,
                                    children: O.intl.string(O.t.IgENJo),
                                }),
                            ],
                        }),
                        s?.(),
                    ],
                }),
                (0, i.jsx)(d.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, i.jsx)(b, { disabled: n, size: _ }),
                }),
            ],
        }),
    });
}
