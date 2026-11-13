n.d(t, { A: () => k });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    i = n(3666),
    o = n(805251),
    u = n(939249),
    c = n(834730),
    d = n(477782),
    m = n(847374),
    g = n(265872),
    h = n(165862),
    p = n(955572),
    f = n(775602),
    x = n(421773),
    E = n(361779);
function v(e) {
    return !e.defaultPrevented && 0 === e.button && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}
function C(e) {
    let { navId: t, option: n, selectedKey: r } = e;
    return "page" === n.type
        ? (0, l.jsx)(_, { option: n, selectedKey: r })
        : (0, l.jsx)(y, { navId: t, option: n, selectedKey: r });
}
function _(e) {
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
        children: (0, l.jsxs)(u.D, {
            tag: "a",
            role: "link",
            href: n.route,
            onClick: d,
            "aria-current": i ? "page" : void 0,
            className: a()(E.ie, E.LA, { [E.wH]: i, [E.C3]: null != n.badge }),
            children: [
                null != m && (0, l.jsx)(m, { size: "sm", color: "currentColor" }),
                (0, l.jsx)(c.E, { variant: "body-md/medium", color: "none", children: n.text }),
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
        C = (function e(t, n) {
            return t.key === n || ("menu" === t.type && t.options.some((t) => e(t, n)));
        })(n, s),
        _ = r.useRef(null),
        y = r.useRef(null),
        b = r.useRef(!1),
        { isHovered: A, setIsHovered: I, onMouseEnter: S, onMouseLeave: k, cancelTimers: j } = (0, x.A)(100, 100),
        L = r.useCallback(() => {
            ((b.current = f.Ay.keyboardModeEnabled), S());
        }, [S]),
        N = r.useCallback(() => {
            (j(), I(!0), (b.current = f.Ay.keyboardModeEnabled));
        }, [j, I]),
        O = r.useCallback(
            (e) => {
                (j(),
                    b.current && !f.Ay.keyboardModeEnabled && (0, p.uS)(),
                    I(!1),
                    e && requestAnimationFrame(() => (null != y.current ? y.current.focus() : _.current?.focus())));
            },
            [j, I],
        ),
        R = r.useCallback(() => {
            A ? O(!1) : N();
        }, [A, N, O]),
        T = r.useCallback(
            (e) => {
                (O(!1), null != n.route && v(e) && (e.preventDefault(), n.onClick(e)));
            },
            [n, O],
        ),
        M = r.useCallback(
            (e) => {
                "ArrowDown" === e.key &&
                    (e.preventDefault(), e.stopPropagation(), A ? (O(!1), requestAnimationFrame(N)) : N());
            },
            [A, N, O],
        ),
        D = (0, l.jsx)(c.E, { variant: "body-md/medium", color: "none", children: n.text }),
        B = (0, l.jsx)(m.ChevronSmallDownIcon, {
            size: "sm",
            color: "currentColor",
            className: a()(E.OW, { [E.g3]: A }),
        });
    return (0, l.jsx)("li", {
        className: E.I,
        children: (0, l.jsx)(g.Y, {
            targetElementRef: _,
            shouldShow: A,
            position: "bottom",
            align: "left",
            spacing: 4,
            onRequestOpen: N,
            onRequestClose: () => O(!0),
            animation: g.Y.Animation.NONE,
            renderPopout: () =>
                (0, l.jsx)("div", {
                    onMouseEnter: S,
                    onMouseLeave: k,
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
                          ref: _,
                          className: a()(E.ie, E.iL, { [E.wH]: C }),
                          children: [
                              (0, l.jsx)(u.D, {
                                  tag: "a",
                                  role: "link",
                                  href: i,
                                  onClick: T,
                                  onMouseEnter: L,
                                  onMouseLeave: k,
                                  "aria-current": n.key === s ? "page" : void 0,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: a()(E.LA, E.tH),
                                  children: D,
                              }),
                              (0, l.jsx)(u.D, {
                                  ...e,
                                  innerRef: y,
                                  role: "button",
                                  "aria-haspopup": "true",
                                  "aria-label": n.expandLabel,
                                  onClick: R,
                                  onKeyDown: M,
                                  onMouseEnter: L,
                                  onMouseLeave: k,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: a()(E.LA, E.nE),
                                  children: B,
                              }),
                          ],
                      })
                    : (0, l.jsxs)(u.D, {
                          ...e,
                          innerRef: _,
                          role: "button",
                          "aria-haspopup": "true",
                          onClick: R,
                          onKeyDown: M,
                          onMouseEnter: L,
                          onMouseLeave: k,
                          className: a()(E.ie, E.LA, { [E.wH]: C }),
                          children: [D, B],
                      }),
        }),
    });
}
var b = n(765671);
let A = 'a[href], [role="button"]';
function I(e, t) {
    let n = Array.from(e.querySelectorAll(A)),
        l = n.indexOf(document.activeElement);
    -1 !== l && n[l + t]?.focus();
}
function S(e) {
    switch (e.key) {
        case "ArrowRight":
            (e.preventDefault(), I(e.currentTarget, 1));
            return;
        case "ArrowLeft":
            (e.preventDefault(), I(e.currentTarget, -1));
            return;
        case "Home":
            (e.preventDefault(), e.currentTarget.querySelector(A)?.focus());
            return;
        case "End": {
            e.preventDefault();
            let t = e.currentTarget.querySelectorAll(A);
            t[t.length - 1]?.focus();
        }
    }
}
function k(e) {
    let { options: t, selectedKey: n, overflowLabel: s, overflowExpandLabel: o, className: u, ...c } = e,
        d = r.useId(),
        m = `collectibles-shop-navigation-menu-${d}`,
        {
            containerRef: g,
            isMeasured: h,
            visibleOptions: p,
            onItemLayout: f,
            overflowItemsRef: x,
        } = (function (e, t, n, l) {
            let { ref: s, width: a } = (0, b.Ay)(),
                {
                    lastVisibleIndex: o,
                    onItemLayout: u,
                    overflowItemsRef: c,
                } = (0, i.Wv)({ items: e, itemGapPx: 32, maxLines: 1, containerWidth: a ?? 0 });
            return {
                containerRef: s,
                isMeasured: null != a,
                visibleOptions: r.useMemo(() => {
                    if (o >= e.length - 1) return e;
                    let r = { type: "menu", key: t, text: n, expandLabel: l, options: e.slice(o + 1) };
                    return [...e.slice(0, o + 1), r];
                }, [e, o, t, n, l]),
                onItemLayout: u,
                overflowItemsRef: c,
            };
        })(t, `${m}-more`, s, o);
    return (0, l.jsxs)("nav", {
        "aria-label": c["aria-label"],
        className: a()(E.C$, u),
        ref: g,
        children: [
            (0, l.jsx)(j, {
                navId: m,
                options: t,
                overflowLabel: s,
                overflowExpandLabel: o,
                onItemLayout: f,
                overflowItemsRef: x,
            }),
            h &&
                (0, l.jsx)("ul", {
                    onKeyDown: S,
                    className: E.P_,
                    children: p.map((e) => (0, l.jsx)(C, { navId: m, option: e, selectedKey: n }, e.key)),
                }),
        ],
    });
}
function j(e) {
    let { options: t, navId: n, overflowLabel: r, overflowExpandLabel: s, onItemLayout: a, overflowItemsRef: o } = e,
        u = `${n}-measure`;
    return (0, l.jsxs)("div", {
        "aria-hidden": !0,
        className: E.Zb,
        children: [
            t.map((e, t) =>
                (0, l.jsx)(
                    i.Ae,
                    { index: t, onItemLayout: a, children: (0, l.jsx)(C, { navId: u, option: e }) },
                    e.key,
                ),
            ),
            (0, l.jsx)("div", {
                ref: o,
                children: (0, l.jsx)(C, {
                    navId: u,
                    option: { type: "menu", key: "more-measure", text: r, expandLabel: s, options: [] },
                }),
            }),
        ],
    });
}
