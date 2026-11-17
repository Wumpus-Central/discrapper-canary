n.d(t, { A: () => I });
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
    h = n(265872),
    g = n(165862),
    p = n(955572),
    E = n(775602),
    f = n(421773),
    x = n(361779);
function C(e) {
    return !e.defaultPrevented && 0 === e.button && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}
function v(e) {
    let { navId: t, option: n, selectedKey: r } = e;
    return "page" === n.type
        ? (0, l.jsx)(y, { option: n, selectedKey: r })
        : (0, l.jsx)(A, { navId: t, option: n, selectedKey: r });
}
function y(e) {
    var t;
    let { option: n, selectedKey: s } = e,
        i = n.key === s,
        d = r.useCallback(
            (e) => {
                C(e) && (e.preventDefault(), n.onClick(e));
            },
            [n],
        ),
        m = n.icon;
    return (0, l.jsx)("li", {
        className: x.I,
        children: (0, l.jsxs)(u.D, {
            tag: "a",
            role: "link",
            href: n.route,
            onClick: d,
            "aria-current": i ? "page" : void 0,
            className: a()(x.ie, x.LA, { [x.wH]: i, [x.C3]: null != n.badge }),
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
function A(e) {
    let { navId: t, option: n, selectedKey: s } = e,
        { route: i } = n,
        o = `${t}-${n.key}`,
        v = (function e(t, n) {
            return t.key === n || ("menu" === t.type && t.options.some((t) => e(t, n)));
        })(n, s),
        y = r.useRef(null),
        A = r.useRef(null),
        _ = r.useRef(!1),
        { isHovered: L, setIsHovered: b, onMouseEnter: S, onMouseLeave: I, cancelTimers: j } = (0, f.A)(100, 100),
        k = r.useCallback(() => {
            ((_.current = E.Ay.keyboardModeEnabled), S());
        }, [S]),
        N = r.useCallback(() => {
            (j(), b(!0), (_.current = E.Ay.keyboardModeEnabled));
        }, [j, b]),
        O = r.useCallback(
            (e) => {
                (j(),
                    _.current && !E.Ay.keyboardModeEnabled && (0, p.uS)(),
                    b(!1),
                    e && requestAnimationFrame(() => (null != A.current ? A.current.focus() : y.current?.focus())));
            },
            [j, b],
        ),
        R = r.useCallback(() => {
            L ? O(!1) : N();
        }, [L, N, O]),
        T = r.useCallback(
            (e) => {
                (O(!1), null != n.route && C(e) && (e.preventDefault(), n.onClick(e)));
            },
            [n, O],
        ),
        D = r.useCallback(
            (e) => {
                "ArrowDown" === e.key &&
                    (e.preventDefault(), e.stopPropagation(), L ? (O(!1), requestAnimationFrame(N)) : N());
            },
            [L, N, O],
        ),
        P = (0, l.jsx)(c.E, { variant: "body-md/medium", color: "none", children: n.text }),
        M = (0, l.jsx)(m.ChevronSmallDownIcon, {
            size: "sm",
            color: "currentColor",
            className: a()(x.OW, { [x.g3]: L }),
        });
    return (0, l.jsx)("li", {
        className: x.I,
        children: (0, l.jsx)(h.Y, {
            targetElementRef: y,
            shouldShow: L,
            position: "bottom",
            align: "left",
            spacing: 4,
            onRequestOpen: N,
            onRequestClose: () => O(!0),
            animation: h.Y.Animation.NONE,
            renderPopout: () =>
                (0, l.jsx)("div", {
                    onMouseEnter: S,
                    onMouseLeave: I,
                    children: (0, l.jsx)(g.W, {
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
                          ref: y,
                          className: a()(x.ie, x.iL, { [x.wH]: v }),
                          children: [
                              (0, l.jsx)(u.D, {
                                  tag: "a",
                                  role: "link",
                                  href: i,
                                  onClick: T,
                                  onMouseEnter: k,
                                  onMouseLeave: I,
                                  "aria-current": n.key === s ? "page" : void 0,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: a()(x.LA, x.tH),
                                  children: P,
                              }),
                              (0, l.jsx)(u.D, {
                                  ...e,
                                  innerRef: A,
                                  role: "button",
                                  "aria-haspopup": "true",
                                  "aria-label": n.expandLabel,
                                  onClick: R,
                                  onKeyDown: D,
                                  onMouseEnter: k,
                                  onMouseLeave: I,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: a()(x.LA, x.nE),
                                  children: M,
                              }),
                          ],
                      })
                    : (0, l.jsxs)(u.D, {
                          ...e,
                          innerRef: y,
                          role: "button",
                          "aria-haspopup": "true",
                          onClick: R,
                          onKeyDown: D,
                          onMouseEnter: k,
                          onMouseLeave: I,
                          className: a()(x.ie, x.LA, { [x.wH]: v }),
                          children: [P, M],
                      }),
        }),
    });
}
var _ = n(765671);
let L = 'a[href], [role="button"]';
function b(e, t) {
    let n = Array.from(e.querySelectorAll(L)),
        l = n.indexOf(document.activeElement);
    -1 !== l && n[l + t]?.focus();
}
function S(e) {
    switch (e.key) {
        case "ArrowRight":
            (e.preventDefault(), b(e.currentTarget, 1));
            return;
        case "ArrowLeft":
            (e.preventDefault(), b(e.currentTarget, -1));
            return;
        case "Home":
            (e.preventDefault(), e.currentTarget.querySelector(L)?.focus());
            return;
        case "End": {
            e.preventDefault();
            let t = e.currentTarget.querySelectorAll(L);
            t[t.length - 1]?.focus();
        }
    }
}
function I(e) {
    let { options: t, selectedKey: n, overflowLabel: s, overflowExpandLabel: o, className: u, ...c } = e,
        d = r.useId(),
        m = `collectibles-shop-navigation-menu-${d}`,
        {
            containerRef: h,
            isMeasured: g,
            visibleOptions: p,
            onItemLayout: E,
            overflowItemsRef: f,
        } = (function (e, t, n, l) {
            let { ref: s, width: a } = (0, _.Ay)(),
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
        className: a()(x.C$, u),
        ref: h,
        children: [
            (0, l.jsx)(j, {
                navId: m,
                options: t,
                overflowLabel: s,
                overflowExpandLabel: o,
                onItemLayout: E,
                overflowItemsRef: f,
            }),
            g &&
                (0, l.jsx)("ul", {
                    onKeyDown: S,
                    className: x.P_,
                    children: p.map((e) => (0, l.jsx)(v, { navId: m, option: e, selectedKey: n }, e.key)),
                }),
        ],
    });
}
function j(e) {
    let { options: t, navId: n, overflowLabel: r, overflowExpandLabel: s, onItemLayout: a, overflowItemsRef: o } = e,
        u = `${n}-measure`;
    return (0, l.jsxs)("div", {
        "aria-hidden": !0,
        className: x.Zb,
        children: [
            t.map((e, t) =>
                (0, l.jsx)(
                    i.Ae,
                    { index: t, onItemLayout: a, children: (0, l.jsx)(v, { navId: u, option: e }) },
                    e.key,
                ),
            ),
            (0, l.jsx)("div", {
                ref: o,
                children: (0, l.jsx)(v, {
                    navId: u,
                    option: { type: "menu", key: "more-measure", text: r, expandLabel: s, options: [] },
                }),
            }),
        ],
    });
}
