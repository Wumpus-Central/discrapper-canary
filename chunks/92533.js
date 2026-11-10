n.d(t, { m: () => T, A: () => w });
var i = n(477900),
    s = n(582128),
    r = n(855986);
if (588245 != n.j) var l = n(785007);
if (588245 != n.j) var a = n(534514);
if (588245 != n.j) var c = n(331322);
var o = n(73153),
    u = n(915089),
    d = n(450232),
    m = n(526162),
    h = n(503698),
    g = n.n(h),
    f = n(435558),
    p = n.n(f),
    A = n(866665),
    x = n(939249),
    v = n(194261),
    y = n(653523),
    b = n(350972),
    S = n(677056),
    j = n(236814),
    N = n(652215),
    E = n(792996),
    I = n(997328);
function C(e) {
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
        [m, h] = s.useState((0, j.gG)(t).name),
        f = t === b.Ic.PIRATE;
    return (0, i.jsx)(A.m, {
        text: m,
        onTooltipShow: () =>
            f &&
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
            className: I.Co,
            style: r,
            children: [
                (0, i.jsx)(x.D, {
                    role: "radio",
                    "aria-label": m,
                    "aria-checked": a,
                    "aria-disabled": d,
                    tabIndex: c ?? (a ? 0 : -1),
                    className: g()(I.Ni, { [I.wH]: a }, n),
                    onClick: a ? N.tEg : () => l?.(t),
                    children: o,
                }),
                a && (0, i.jsx)(y.H$, {}),
                u &&
                    (0, i.jsx)("div", {
                        className: I.RK,
                        children: (0, i.jsx)(v.LockIcon, { className: I.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function P(e) {
    let { size: t = j.N8.SIZE_60, icon: n, isSelected: r, disabled: l, tabIndex: a, onSelect: c, locked: o } = e,
        u = s.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(C, {
        style: u,
        onSelect: l ? void 0 : c,
        isSelected: r,
        id: n.id,
        className: l ? I.r9 : void 0,
        tabIndex: a,
        locked: o,
        disabled: l,
        children: (0, i.jsx)(S.A, { id: n.id, size: t }),
    });
}
var k = n(40025);
function T(e) {
    let { disabled: t, size: n } = e,
        [s] = (0, r.yK)([m.A], () => [m.A.getCurrentDesktopIcon()]);
    return (0, i.jsx)(i.Fragment, {
        children: (0, j.v8)()
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
                            o.h.dispatch({ type: "APP_ICON_UPDATED", id: e });
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
function w(e) {
    let { className: t, disabled: n, isEditor: s, renderCTAButtons: r, iconSize: o } = e,
        m = (0, u.GV)(),
        { ref: h, ...g } = (0, l._u)({ orientation: "horizontal", labelledBy: m });
    return (0, i.jsx)("div", {
        ...g,
        ref: h,
        children: (0, i.jsxs)("div", {
            className: t,
            children: [
                (0, i.jsxs)("div", {
                    className: k.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: k.so,
                            children: [
                                !s &&
                                    (0, i.jsxs)("div", {
                                        className: k.DD,
                                        children: [
                                            (0, i.jsx)(a.D, {
                                                className: k.Qw,
                                                variant: "heading-xl/medium",
                                                color: "text-strong",
                                                children: E.intl.string(E.t.NThqTw),
                                            }),
                                            (0, i.jsx)(d.A, { color: "strong", size: "sm" }),
                                        ],
                                    }),
                                (0, i.jsx)(a.D, {
                                    variant: "body-sm/normal",
                                    className: k.W$,
                                    children: E.intl.string(E.t.IgENJo),
                                }),
                            ],
                        }),
                        r?.(),
                    ],
                }),
                (0, i.jsx)(c.B, {
                    direction: "horizontal",
                    wrap: !0,
                    gap: 8,
                    style: { marginTop: 16 },
                    children: (0, i.jsx)(T, { disabled: n, size: o }),
                }),
            ],
        }),
    });
}
