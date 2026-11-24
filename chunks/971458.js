n.d(t, { A: () => S });
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
    f = n(775602),
    p = n(421773),
    x = n(361779);
function C(e) {
    return !e.defaultPrevented && 0 === e.button && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
}
function A(e) {
    let { navId: t, option: n, selectedKey: r } = e;
    return "page" === n.type
        ? (0, l.jsx)(v, { option: n, selectedKey: r })
        : (0, l.jsx)(b, { navId: t, option: n, selectedKey: r });
}
function v(e) {
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
function b(e) {
    let { navId: t, option: n, selectedKey: s } = e,
        { route: i } = n,
        o = `${t}-${n.key}`,
        A = (function e(t, n) {
            return t.key === n || ("menu" === t.type && t.options.some((t) => e(t, n)));
        })(n, s),
        v = r.useRef(null),
        b = r.useRef(null),
        L = r.useRef(!1),
        { isHovered: y, setIsHovered: _, onMouseEnter: I, onMouseLeave: S, cancelTimers: k } = (0, p.A)(100, 100),
        j = r.useCallback(() => {
            ((L.current = f.Ay.keyboardModeEnabled), I());
        }, [I]),
        N = r.useCallback(() => {
            (k(), _(!0), (L.current = f.Ay.keyboardModeEnabled));
        }, [k, _]),
        O = r.useCallback(
            (e) => {
                (k(),
                    L.current && !f.Ay.keyboardModeEnabled && (0, E.uS)(),
                    _(!1),
                    e && requestAnimationFrame(() => (null != b.current ? b.current.focus() : v.current?.focus())));
            },
            [k, _],
        ),
        T = r.useCallback(() => {
            y ? O(!1) : N();
        }, [y, N, O]),
        R = r.useCallback(
            (e) => {
                (O(!1), null != n.route && C(e) && (e.preventDefault(), n.onClick(e)));
            },
            [n, O],
        ),
        D = r.useCallback(
            (e) => {
                "ArrowDown" === e.key &&
                    (e.preventDefault(), e.stopPropagation(), y ? (O(!1), requestAnimationFrame(N)) : N());
            },
            [y, N, O],
        ),
        P = (0, l.jsx)(c.E, { variant: "body-md/medium", color: "none", children: n.text }),
        M = (0, l.jsx)(m.ChevronSmallDownIcon, {
            size: "sm",
            color: "currentColor",
            className: a()(x.OW, { [x.g3]: y }),
        });
    return (0, l.jsx)("li", {
        className: x.I,
        children: (0, l.jsx)(g.Y, {
            targetElementRef: v,
            shouldShow: y,
            position: "bottom",
            align: "left",
            spacing: 4,
            onRequestOpen: N,
            onRequestClose: () => O(!0),
            animation: g.Y.Animation.NONE,
            renderPopout: () =>
                (0, l.jsx)("div", {
                    onMouseEnter: I,
                    onMouseLeave: S,
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
                          ref: v,
                          className: a()(x.ie, x.iL, { [x.wH]: A }),
                          children: [
                              (0, l.jsx)(u.D, {
                                  tag: "a",
                                  role: "link",
                                  href: i,
                                  onClick: R,
                                  onMouseEnter: j,
                                  onMouseLeave: S,
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
                                  onMouseEnter: j,
                                  onMouseLeave: S,
                                  focusProps: { offset: { top: -2, bottom: -2 } },
                                  className: a()(x.LA, x.nE),
                                  children: M,
                              }),
                          ],
                      })
                    : (0, l.jsxs)(u.D, {
                          ...e,
                          innerRef: v,
                          role: "button",
                          "aria-haspopup": "true",
                          onClick: T,
                          onKeyDown: D,
                          onMouseEnter: j,
                          onMouseLeave: S,
                          className: a()(x.ie, x.LA, { [x.wH]: A }),
                          children: [P, M],
                      }),
        }),
    });
}
var L = n(765671);
let y = 'a[href], [role="button"]';
function _(e, t) {
    let n = Array.from(e.querySelectorAll(y)),
        l = n.indexOf(document.activeElement);
    -1 !== l && n[l + t]?.focus();
}
function I(e) {
    switch (e.key) {
        case "ArrowRight":
            (e.preventDefault(), _(e.currentTarget, 1));
            return;
        case "ArrowLeft":
            (e.preventDefault(), _(e.currentTarget, -1));
            return;
        case "Home":
            (e.preventDefault(), e.currentTarget.querySelector(y)?.focus());
            return;
        case "End": {
            e.preventDefault();
            let t = e.currentTarget.querySelectorAll(y);
            t[t.length - 1]?.focus();
        }
    }
}
function S(e) {
    let { options: t, selectedKey: n, overflowLabel: s, overflowExpandLabel: o, className: u, ...c } = e,
        d = r.useId(),
        m = `collectibles-shop-navigation-menu-${d}`,
        {
            containerRef: g,
            isMeasured: h,
            visibleOptions: E,
            onItemLayout: f,
            overflowItemsRef: p,
        } = (function (e, t, n, l) {
            let { ref: s, width: a } = (0, L.Ay)(),
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
            (0, l.jsx)(k, {
                navId: m,
                options: t,
                overflowLabel: s,
                overflowExpandLabel: o,
                onItemLayout: f,
                overflowItemsRef: p,
            }),
            h &&
                (0, l.jsx)("ul", {
                    onKeyDown: I,
                    className: x.P_,
                    children: E.map((e) => (0, l.jsx)(A, { navId: m, option: e, selectedKey: n }, e.key)),
                }),
        ],
    });
}
function k(e) {
    let { options: t, navId: n, overflowLabel: r, overflowExpandLabel: s, onItemLayout: a, overflowItemsRef: o } = e,
        u = `${n}-measure`;
    return (0, l.jsxs)("div", {
        "aria-hidden": !0,
        className: x.Zb,
        children: [
            t.map((e, t) =>
                (0, l.jsx)(
                    i.Ae,
                    { index: t, onItemLayout: a, children: (0, l.jsx)(A, { navId: u, option: e }) },
                    e.key,
                ),
            ),
            (0, l.jsx)("div", {
                ref: o,
                children: (0, l.jsx)(A, {
                    navId: u,
                    option: { type: "menu", key: "more-measure", text: r, expandLabel: s, options: [] },
                }),
            }),
        ],
    });
}
