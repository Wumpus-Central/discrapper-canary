n.d(t, { m: () => w, A: () => R });
var i = n(477900),
    s = n(582128),
    r = n(17928);
if (588245 != n.j) var l = n(785007);
if (588245 != n.j) var a = n(297264);
if (588245 != n.j) var c = n(331322);
var o = n(228366),
    u = n(915089),
    d = n(450232),
    m = n(526162),
    h = n(503698),
    g = n.n(h),
    x = n(435558),
    f = n.n(x),
    p = n(866665),
    A = n(939249),
    v = n(194261),
    y = n(653523),
    S = n(350972),
    b = n(677056),
    j = n(174197),
    I = n(652215),
    N = n(375708),
    E = n(997328);
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
        x = t === S.Ic.PIRATE;
    return (0, i.jsx)(p.m, {
        text: m,
        onTooltipShow: () =>
            x &&
            h(
                f().sample([
                    N.intl.string(N.t["EgWTY+"]),
                    N.intl.string(N.t.umBn5f),
                    N.intl.string(N.t.dG1wD1),
                    N.intl.string(N.t.SesI4S),
                    N.intl.string(N.t.RnMLvl),
                ]) ?? N.intl.string(N.t["EgWTY+"]),
            ),
        children: (0, i.jsxs)("div", {
            className: E.Co,
            style: r,
            children: [
                (0, i.jsx)(A.D, {
                    role: "radio",
                    "aria-label": m,
                    "aria-checked": a,
                    "aria-disabled": d,
                    tabIndex: c ?? (a ? 0 : -1),
                    className: g()(E.Ni, { [E.wH]: a }, n),
                    onClick: a ? I.tEg : () => l?.(t),
                    children: o,
                }),
                a && (0, i.jsx)(y.H$, {}),
                u &&
                    (0, i.jsx)("div", {
                        className: E.RK,
                        children: (0, i.jsx)(v.LockIcon, { className: E.AA, color: "currentColor" }),
                    }),
            ],
        }),
    });
}
function T(e) {
    let { size: t = j.N8.SIZE_60, icon: n, isSelected: r, disabled: l, tabIndex: a, onSelect: c, locked: o } = e,
        u = s.useMemo(() => ({ "--custom-in-app-icon-selection-size": `${t}px` }), [t]);
    return (0, i.jsx)(C, {
        style: u,
        onSelect: l ? void 0 : c,
        isSelected: r,
        id: n.id,
        className: l ? E.r9 : void 0,
        tabIndex: a,
        locked: o,
        disabled: l,
        children: (0, i.jsx)(b.A, { id: n.id, size: t }),
    });
}
var P = n(40025);
function w(e) {
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
                    T,
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
function R(e) {
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
                    className: P.wx,
                    children: [
                        (0, i.jsxs)("div", {
                            className: P.so,
                            children: [
                                !s &&
                                    (0, i.jsxs)("div", {
                                        className: P.DD,
                                        children: [
                                            (0, i.jsx)(a.D, {
                                                className: P.Qw,
                                                variant: "heading-xl/normal",
                                                color: "text-strong",
                                                children: N.intl.string(N.t.NThqTw),
                                            }),
                                            (0, i.jsx)(d.A, { color: "strong", size: "sm" }),
                                        ],
                                    }),
                                (0, i.jsx)(a.D, {
                                    variant: "text-sm/normal",
                                    className: P.W$,
                                    children: N.intl.string(N.t.IgENJo),
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
                    children: (0, i.jsx)(w, { disabled: n, size: o }),
                }),
            ],
        }),
    });
}
