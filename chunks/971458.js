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
    g = n(265872),
    h = n(165862),
    E = n(955572),
    p = n(775602),
    f = n(421773),
    x = n(361779);
function A(e) {
    return !e.defaultPrevented && 0 === e.button && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}
function v(e) {
    let { navId: t, option: n, selectedKey: r } = e;
    return "page" === n.type
        ? (0, l.jsx)(C, { option: n, selectedKey: r })
        : (0, l.jsx)(b, { navId: t, option: n, selectedKey: r });
}
function C(e) {
    var t;
    let { option: n, selectedKey: s } = e,
        i = n.key === s,
        d = r.useCallback(
            (e) => {
                A(e) && (e.preventDefault(), n.onClick(e));
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
function b(e) {
    let { navId: t, option: n, selectedKey: s } = e,
        { route: i } = n,
        o = `${t}-${n.key}`,
        v = (function e(t, n) {
            return t.key === n || ("menu" === t.type && t.options.some((t) => e(t, n)));
        })(n, s),
        C = r.useRef(null),
        b = r.useRef(null),
        y = r.useRef(!1),
        { isHovered: L, setIsHovered: _, onMouseEnter: S, onMouseLeave: I, cancelTimers: j } = (0, f.A)(100, 100),
        k = r.useCallback(() => {
            ((y.current = p.Ay.keyboardModeEnabled), S());
        }, [S]),
        N = r.useCallback(() => {
            (j(), _(!0), (y.current = p.Ay.keyboardModeEnabled));
        }, [j, _]),
        O = r.useCallback(
            (e) => {
                (j(),
                    y.current && !p.Ay.keyboardModeEnabled && (0, E.uS)(),
                    _(!1),
                    e && requestAnimationFrame(() => (null != b.current ? b.current.focus() : C.current?.focus())));
            },
            [j, _],
        ),
        T = r.useCallback(() => {
            L ? O(!1) : N();
        }, [L, N, O]),
        R = r.useCallback(
            (e) => {
                (O(!1), null != n.route && A(e) && (e.preventDefault(), n.onClick(e)));
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
        children: (0, l.jsx)(g.Y, {
            targetElementRef: C,
            shouldShow: L,
            position: "bottom",
            align: "left",
            spacing: 4,
            onRequestOpen: N,
            onRequestClose: () => O(!0),
            animation: g.Y.Animation.NONE,
            renderPopout: () =>
                (0, l.jsx)("div", {
                    onMouseEnter: S,
                    onMouseLeave: I,
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
                          className: a()(x.ie, x.iL, { [x.wH]: v }),
                          children: [
                              (0, l.jsx)(u.D, {
                                  tag: "a",
                                  role: "link",
                                  href: i,
                                  onClick: R,
                                  onMouseEnter: k,
                                  onMouseLeave: I,
                                  "aria-current": n.key === s ? "page" : void 0,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: a()(x.LA, x.tH),
                                  children: P,
                              }),
                              (0, l.jsx)(u.D, {
                                  ...e,
                                  innerRef: b,
                                  role: "button",
                                  "aria-haspopup": "true",
                                  "aria-label": n.expandLabel,
                                  onClick: T,
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
                          innerRef: C,
                          role: "button",
                          "aria-haspopup": "true",
                          onClick: T,
                          onKeyDown: D,
                          onMouseEnter: k,
                          onMouseLeave: I,
                          className: a()(x.ie, x.LA, { [x.wH]: v }),
                          children: [P, M],
                      }),
        }),
    });
}
var y = n(765671);
let L = 'a[href], [role="button"]';
function _(e, t) {
    let n = Array.from(e.querySelectorAll(L)),
        l = n.indexOf(document.activeElement);
    -1 !== l && n[l + t]?.focus();
}
function S(e) {
    switch (e.key) {
        case "ArrowRight":
            (e.preventDefault(), _(e.currentTarget, 1));
            return;
        case "ArrowLeft":
            (e.preventDefault(), _(e.currentTarget, -1));
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
            containerRef: g,
            isMeasured: h,
            visibleOptions: E,
            onItemLayout: p,
            overflowItemsRef: f,
        } = (function (e, t, n, l) {
            let { ref: s, width: a } = (0, y.Ay)(),
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
        ref: g,
        children: [
            (0, l.jsx)(j, {
                navId: m,
                options: t,
                overflowLabel: s,
                overflowExpandLabel: o,
                onItemLayout: p,
                overflowItemsRef: f,
            }),
            h &&
                (0, l.jsx)("ul", {
                    onKeyDown: S,
                    className: x.P_,
                    children: E.map((e) => (0, l.jsx)(v, { navId: m, option: e, selectedKey: n }, e.key)),
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
