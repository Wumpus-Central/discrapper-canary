n.d(t, { m: () => w, A: () => k });
var i = n(627968),
    s = n(64700),
    r = n(17928);
if (88245 != n.j) var l = n(785007);
if (88245 != n.j) var a = n(297264);
if (88245 != n.j) var c = n(661531);
if (88245 != n.j) var o = n(331322);
var u = n(228366),
    d = n(915089),
    m = n(450232),
    h = n(526162),
    g = n(503698),
    x = n.n(g),
    f = n(435558),
    p = n.n(f),
    A = n(990078),
    y = n(939249),
    v = n(194261),
    S = n(653523),
    b = n(350972),
    j = n(677056),
    I = n(174197),
    N = n(652215),
    E = n(375708),
    C = n(588525);
function T(e) {
    let {
            id: t,
            className: n,
            style: r,
            onSelect: l,
            isSelected: a = !1,
            tabIndex: c,
            children: o,
            locked: u = !1,
            disabled: d = !1,
        } = e,
        [m, h] = s.useState((0, I.gG)(t).name),
        g = t === b.Ic.PIRATE;
    return (0, i.jsx)(A.m, {
        text: m,
        onTooltipShow: () =>
            g &&
            h(
                p().sample([
                    E.intl.string(E.t["EgWTY+"]),
                    E.intl.string(E.t.umBn5f),
                    E.intl.string(E.t.dG1wD1),
                    E.intl.string(E.t.SesI4S),
                    E.intl.string(E.t.RnMLvl),
                ]) ?? E.intl.string(E.t["EgWTY+"]),
            ),
        children: (0, i.jsxs)("div", {
            className: C.Co,
            style: r,
            children: [
                (0, i.jsx)(y.D, {
                    role: "radio",
                    "aria-label": m,
                    "aria-checked": a,
                    "aria-disabled": d,
                    tabIndex: c ?? (a ? 0 : -1),
                    className: x()(C.Ni, { [C.wH]: a }, n),
                    onClick: a ? N.tEg : () => l?.(t),
                    children: o,
                }),
                a && (0, i.jsx)(S.H$, {}),
                u &&
                    (0, i.jsx)("div", {
                        className: C.RK,
                        children: (0, i.jsx)(v.X, { className: C.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function P(e) {
    let { size: t = I.N8.SIZE_60, icon: n, isSelected: r, disabled: l, tabIndex: a, onSelect: c, locked: o } = e,
        u = s.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(T, {
        style: u,
        onSelect: l ? void 0 : c,
        isSelected: r,
        id: n.id,
        className: l ? C.r9 : void 0,
        tabIndex: a,
        locked: o,
        disabled: l,
        children: (0, i.jsx)(j.A, { id: n.id, size: t }),
    });
}
var R = n(182686);
function w(e) {
    let { disabled: t, size: n } = e,
        [s] = (0, r.yK)([h.A], () => [h.A.getCurrentDesktopIcon()]);
    return (0, i.jsx)(i.Fragment, {
        children: (0, I.v8)()
            .filter((e) => {
                let { isHidden: t } = e;
                return !t;
            })
            .map((e, r) =>
                (0, i.jsx)(
                    P,
                    {
                        icon: e,
                        isSelected: s === e.id,
                        onSelect: (e) => {
                            u.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
                        },
                        disabled: t,
                        tabIndex: 0 !== r || t ? void 0 : 0,
                        locked: !1,
                        size: n,
                    },
                    e.id,
                ),
            ),
    });
}
function k(e) {
    let { className: t, disabled: n, isEditor: s, renderCTAButtons: r, iconSize: u } = e,
        h = (0, d.GV)(),
        { ref: g, ...x } = (0, l._u)({ orientation: "horizontal", labelledBy: h });
    return (0, i.jsx)("div", {
        ...x,
        ref: g,
        children: (0, i.jsxs)("div", {
            className: t,
            children: [
                (0, i.jsxs)("div", {
                    className: R.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: R.so,
                            children: [
                                !s &&
                                    (0, i.jsxs)("div", {
                                        className: R.DD,
                                        children: [
                                            (0, i.jsx)(a.D, {
                                                className: R.Qw,
                                                variant: "heading-xl/normal",
                                                color: "text-strong",
                                                children: E.intl.string(E.t.NThqTw),
                                            }),
                                            (0, i.jsx)(m.A, { color: c.A.colors.ICON_STRONG, size: "sm" }),
                                        ],
                                    }),
                                (0, i.jsx)(a.D, {
                                    variant: "text-sm/normal",
                                    className: R.W$,
                                    children: E.intl.string(E.t.IgENJo),
                                }),
                            ],
                        }),
                        r?.(),
                    ],
                }),
                (0, i.jsx)(o.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, i.jsx)(w, { disabled: n, size: u }),
                }),
            ],
        }),
    });
}
