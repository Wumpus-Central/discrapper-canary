n.d(t, { A: () => j });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(3666),
    o = n(805251),
    c = n(939249),
    u = n(834730),
    d = n(477782),
    m = n(847374),
    g = n(265872),
    h = n(165862),
    p = n(955572),
    x = n(775602),
    f = n(421773),
    E = n(361779);
function v(e) {
    return !e.defaultPrevented && 0 === e.button && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}
function _(e) {
    let { navId: t, option: n, selectedKey: r } = e;
    return "page" === n.type
        ? (0, l.jsx)(C, { option: n, selectedKey: r })
        : (0, l.jsx)(y, { navId: t, option: n, selectedKey: r });
}
function C(e) {
    var t;
    let { option: n, selectedKey: s } = e,
        i = n.key === s,
        d = r.useCallback(
            (e) => {
                v(e) && (e.preventDefault(), n.onClick(e));
            },
            [n],
        ),
        m = n.icon;
    return (0, l.jsx)("li", {
        className: E.I,
        children: (0, l.jsxs)(c.D, {
            tag: "a",
            role: "link",
            href: n.route,
            onClick: d,
            "aria-current": i ? "page" : void 0,
            className: a()(E.ie, E.LA, { [E.wH]: i, [E.C3]: null != n.badge }),
            children: [
                null != m && (0, l.jsx)(m, { size: "sm", color: "currentColor" }),
                (0, l.jsx)(u.E, { variant: "body-md/medium", color: "none", children: n.text }),
                null == (t = n.badge)
                    ? null
                    : "object" == typeof t && "type" in t
                      ? (0, l.jsx)(o.E, { ...t })
                      : (0, l.jsx)(o.E, { type: t }),
            ],
        }),
    });
}
function y(e) {
    let { navId: t, option: n, selectedKey: s } = e,
        { route: i } = n,
        o = `${t}-${n.key}`,
        _ = (function e(t, n) {
            return t.key === n || ("menu" === t.type && t.options.some((t) => e(t, n)));
        })(n, s),
        C = r.useRef(null),
        y = r.useRef(null),
        b = r.useRef(!1),
        { isHovered: S, setIsHovered: I, onMouseEnter: A, onMouseLeave: j, cancelTimers: L } = (0, f.A)(100, 100),
        k = r.useCallback(() => {
            ((b.current = x.Ay.keyboardModeEnabled), A());
        }, [A]),
        N = r.useCallback(() => {
            (L(), I(!0), (b.current = x.Ay.keyboardModeEnabled));
        }, [L, I]),
        O = r.useCallback(
            (e) => {
                (L(),
                    b.current && !x.Ay.keyboardModeEnabled && (0, p.uS)(),
                    I(!1),
                    e && requestAnimationFrame(() => (null != y.current ? y.current.focus() : C.current?.focus())));
            },
            [L, I],
        ),
        T = r.useCallback(() => {
            S ? O(!1) : N();
        }, [S, N, O]),
        R = r.useCallback(
            (e) => {
                (O(!1), null != n.route && v(e) && (e.preventDefault(), n.onClick(e)));
            },
            [n, O],
        ),
        M = r.useCallback(
            (e) => {
                "ArrowDown" === e.key &&
                    (e.preventDefault(), e.stopPropagation(), S ? (O(!1), requestAnimationFrame(N)) : N());
            },
            [S, N, O],
        ),
        D = (0, l.jsx)(u.E, { variant: "body-md/medium", color: "none", children: n.text }),
        B = (0, l.jsx)(m.a, { size: "sm", color: "currentColor", className: a()(E.OW, { [E.g3]: S }) });
    return (0, l.jsx)("li", {
        className: E.I,
        children: (0, l.jsx)(g.Y, {
            targetElementRef: C,
            shouldShow: S,
            position: "bottom",
            align: "left",
            spacing: 4,
            onRequestOpen: N,
            onRequestClose: () => O(!0),
            animation: g.Y.Animation.NONE,
            renderPopout: () =>
                (0, l.jsx)("div", {
                    onMouseEnter: A,
                    onMouseLeave: j,
                    children: (0, l.jsx)(h.W, {
                        navId: o,
                        "aria-label": n.expandLabel,
                        onClose: () => O(!0),
                        onSelect: void 0,
                        children: (function e(t) {
                            return t.map((t) =>
                                "page" === t.type
                                    ? (0, l.jsx)(
                                          d.Dr,
                                          {
                                              id: t.key,
                                              label: t.text,
                                              leadingAccessory:
                                                  null != t.iconSrc ? { type: "image", src: t.iconSrc } : void 0,
                                              badge: t.badge,
                                              trailingIndicator: t.trailingIndicator,
                                              action: t.onClick,
                                          },
                                          t.key,
                                      )
                                    : (0, l.jsx)(
                                          d.Dr,
                                          { id: t.key, label: t.text, action: t.onClick, children: e(t.options) },
                                          t.key,
                                      ),
                            );
                        })(n.options),
                    }),
                }),
            children: (e) =>
                null != i
                    ? (0, l.jsxs)("span", {
                          ref: C,
                          className: a()(E.ie, E.iL, { [E.wH]: _ }),
                          children: [
                              (0, l.jsx)(c.D, {
                                  tag: "a",
                                  role: "link",
                                  href: i,
                                  onClick: R,
                                  onMouseEnter: k,
                                  onMouseLeave: j,
                                  "aria-current": n.key === s ? "page" : void 0,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: a()(E.LA, E.tH),
                                  children: D,
                              }),
                              (0, l.jsx)(c.D, {
                                  ...e,
                                  innerRef: y,
                                  role: "button",
                                  "aria-haspopup": "true",
                                  "aria-label": n.expandLabel,
                                  onClick: T,
                                  onKeyDown: M,
                                  onMouseEnter: k,
                                  onMouseLeave: j,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: a()(E.LA, E.nE),
                                  children: B,
                              }),
                          ],
                      })
                    : (0, l.jsxs)(c.D, {
                          ...e,
                          innerRef: C,
                          role: "button",
                          "aria-haspopup": "true",
                          onClick: T,
                          onKeyDown: M,
                          onMouseEnter: k,
                          onMouseLeave: j,
                          className: a()(E.ie, E.LA, { [E.wH]: _ }),
                          children: [D, B],
                      }),
        }),
    });
}
var b = n(765671);
let S = 'a[href], [role="button"]';
function I(e, t) {
    let n = Array.from(e.querySelectorAll(S)),
        l = n.indexOf(document.activeElement);
    -1 !== l && n[l + t]?.focus();
}
function A(e) {
    switch (e.key) {
        case "ArrowRight":
            (e.preventDefault(), I(e.currentTarget, 1));
            return;
        case "ArrowLeft":
            (e.preventDefault(), I(e.currentTarget, -1));
            return;
        case "Home":
            (e.preventDefault(), e.currentTarget.querySelector(S)?.focus());
            return;
        case "End": {
            e.preventDefault();
            let t = e.currentTarget.querySelectorAll(S);
            t[t.length - 1]?.focus();
        }
    }
}
function j(e) {
    let { options: t, selectedKey: n, overflowLabel: s, overflowExpandLabel: o, className: c, ...u } = e,
        d = r.useId(),
        m = `collectibles-shop-navigation-menu-${d}`,
        {
            containerRef: g,
            isMeasured: h,
            visibleOptions: p,
            onItemLayout: x,
            overflowItemsRef: f,
        } = (function (e, t, n, l) {
            let { ref: s, width: a } = (0, b.Ay)(),
                {
                    lastVisibleIndex: o,
                    onItemLayout: c,
                    overflowItemsRef: u,
                } = (0, i.Wv)({ items: e, itemGapPx: 32, maxLines: 1, containerWidth: a ?? 0 });
            return {
                containerRef: s,
                isMeasured: null != a,
                visibleOptions: r.useMemo(() => {
                    if (o >= e.length - 1) return e;
                    let r = { type: "menu", key: t, text: n, expandLabel: l, options: e.slice(o + 1) };
                    return [...e.slice(0, o + 1), r];
                }, [e, o, t, n, l]),
                onItemLayout: c,
                overflowItemsRef: u,
            };
        })(t, `${m}-more`, s, o);
    return (0, l.jsxs)("nav", {
        "aria-label": u["aria-label"],
        className: a()(E.C$, c),
        ref: g,
        children: [
            (0, l.jsx)(L, {
                navId: m,
                options: t,
                overflowLabel: s,
                overflowExpandLabel: o,
                onItemLayout: x,
                overflowItemsRef: f,
            }),
            h &&
                (0, l.jsx)("ul", {
                    onKeyDown: A,
                    className: E.P_,
                    children: p.map((e) => (0, l.jsx)(_, { navId: m, option: e, selectedKey: n }, e.key)),
                }),
        ],
    });
}
function L(e) {
    let { options: t, navId: n, overflowLabel: r, overflowExpandLabel: s, onItemLayout: a, overflowItemsRef: o } = e,
        c = `${n}-measure`;
    return (0, l.jsxs)("div", {
        "aria-hidden": !0,
        className: E.Zb,
        children: [
            t.map((e, t) =>
                (0, l.jsx)(
                    i.Ae,
                    { index: t, onItemLayout: a, children: (0, l.jsx)(_, { navId: c, option: e }) },
                    e.key,
                ),
            ),
            (0, l.jsx)("div", {
                ref: o,
                children: (0, l.jsx)(_, {
                    navId: c,
                    option: { type: "menu", key: "more-measure", text: r, expandLabel: s, options: [] },
                }),
            }),
        ],
    });
}
