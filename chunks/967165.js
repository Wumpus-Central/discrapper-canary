n.d(t, { A: () => j });
var l = n(477900),
    r = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(621466),
    u = n(265872),
    i = n(323384),
    d = n(661531),
    c = n(331322),
    m = n(834730),
    v = n(627363),
    f = n(421773),
    p = n(416733),
    x = n(827656),
    g = n(41799);
function j(e) {
    let { applicationId: t, guildId: n, targetElementRef: s, disabled: a = !1, openOnFocus: u = !1, ...i } = e,
        { isHovered: d, setIsHovered: c, onMouseEnter: m, onMouseLeave: v, cancelTimers: p } = (0, f.A)(500, 150),
        [x, g] = r.useState(!1),
        [j, E] = r.useState(!1),
        C = r.useRef(null),
        A = r.useRef({ targetHovered: !1, targetFocused: !1, cardHovered: !1 }),
        L = r.useCallback(() => {
            ((A.current = { targetHovered: !1, targetFocused: !1, cardHovered: !1 }), p(), c(!1), E(!1));
        }, [p, c]),
        N = r.useCallback(
            (e, t) => {
                let n = A.current;
                ((n[e] = t),
                    E(n.targetHovered || n.targetFocused || n.cardHovered),
                    t ? m() : n.targetHovered || n.targetFocused || n.cardHovered || v());
            },
            [m, v],
        );
    r.useEffect(() => {
        let e = s.current;
        if (!a && null != e)
            return (
                e.addEventListener("mouseenter", t),
                e.addEventListener("mouseleave", n),
                e.addEventListener("mousedown", L),
                u && (e.addEventListener("focus", l), e.addEventListener("blur", r)),
                () => {
                    (e.removeEventListener("mouseenter", t),
                        e.removeEventListener("mouseleave", n),
                        e.removeEventListener("mousedown", L),
                        e.removeEventListener("focus", l),
                        e.removeEventListener("blur", r),
                        L());
                }
            );
        function t() {
            (g(!0), N("targetHovered", !0));
        }
        function n(e) {
            if ((0, o.vq)(e.relatedTarget, Node) && C.current?.contains(e.relatedTarget) === !0) {
                A.current.targetHovered = !1;
                return;
            }
            N("targetHovered", !1);
        }
        function l() {
            e?.matches(":focus-visible") === !0 && (g(!0), N("targetFocused", !0));
        }
        function r() {
            N("targetFocused", !1);
        }
    }, [a, u, s, N, L]);
    let H = r.useCallback(() => N("cardHovered", !0), [N]),
        P = r.useCallback(() => N("cardHovered", !1), [N]);
    return x
        ? (0, l.jsx)(h, {
              ...i,
              applicationId: t,
              guildId: n ?? null,
              targetElementRef: s,
              isHovered: d,
              isPointerOver: j,
              cardRef: C,
              onCardEnter: H,
              onCardLeave: P,
              onClose: L,
          })
        : null;
}
function h(e) {
    let {
            applicationId: t,
            guildId: n,
            targetElementRef: s,
            isHovered: a,
            isPointerOver: o,
            cardRef: i,
            onCardEnter: d,
            onCardLeave: c,
            onClose: m,
            position: f,
            animationPosition: x,
            spacing: g,
        } = e,
        j = (0, v.YY)(t).data,
        h = j?.conjureProjectId != null ? j : null,
        E = null != h,
        { creator: A, remixProject: L, isSettled: N } = (0, p.A)(h, n, o || a),
        [H, P] = r.useState(null);
    (r.useEffect(() => {
        if (!a || !E || N || null == t) return;
        let e = setTimeout(() => P(t), 300);
        return () => clearTimeout(e);
    }, [a, E, N, t]),
        a || null == H || P(null));
    let [I, k] = r.useState(null),
        b = I?.isOpen === !0 && I.applicationId === t,
        R = a && E && (N || H === t || b);
    (R && !b && k({ applicationId: t, creator: A, remixProject: L, isOpen: !0 }),
        R || I?.isOpen !== !0 || k({ ...I, isOpen: !1 }));
    let M = R && !b ? { creator: A, remixProject: L } : I;
    return (0, l.jsx)(u.Y, {
        targetElementRef: s,
        position: f,
        animationPosition: x,
        spacing: g,
        shouldShow: R,
        onRequestClose: m,
        renderPopout: () =>
            null != h
                ? (0, l.jsx)(C, {
                      application: h,
                      creator: M?.creator ?? null,
                      remixProject: M?.remixProject ?? null,
                      guildId: n,
                      cardRef: i,
                      onMouseEnter: d,
                      onMouseLeave: c,
                      onClose: m,
                  })
                : null,
        children: () => null,
    });
}
function E(e) {
    e.stopPropagation();
}
function C(e) {
    let {
            application: t,
            creator: n,
            remixProject: r,
            guildId: s,
            cardRef: o,
            onMouseEnter: u,
            onMouseLeave: v,
            onClose: f,
        } = e,
        p = t.getIconURL(96),
        j = t.description?.trim();
    return (0, l.jsxs)("div", {
        ref: o,
        className: g.Nr,
        onMouseEnter: u,
        onMouseLeave: v,
        onClick: E,
        onMouseDown: E,
        onContextMenu: E,
        children: [
            (0, l.jsxs)("div", {
                className: g.rf,
                children: [
                    null != p
                        ? (0, l.jsx)("img", { alt: "", src: p, className: a()(g.Kk, g.Dp) })
                        : (0, l.jsx)("div", {
                              className: a()(g.Kk, g.Pz),
                              "aria-hidden": !0,
                              children: (0, l.jsx)(i.k, {
                                  size: "custom",
                                  width: 24,
                                  height: 24,
                                  color: d.A.colors.INTERACTIVE_ICON_DEFAULT,
                              }),
                          }),
                    (0, l.jsxs)(c.B, {
                        gap: 4,
                        className: g.zH,
                        children: [
                            (0, l.jsx)(m.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            null != j && j.length > 0
                                ? (0, l.jsx)(m.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      lineClamp: 3,
                                      children: j,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            null != n ? (0, l.jsx)(x.A, { creator: n, remixProject: r, guildId: s, onClose: f }) : null,
        ],
    });
}
