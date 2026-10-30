n.d(t, { A: () => h });
var l = n(477900),
    r = n(582128),
    a = n(503698),
    o = n.n(a),
    u = n(621466),
    s = n(265872),
    i = n(331322),
    d = n(834730),
    c = n(627363),
    v = n(421773),
    f = n(97005),
    m = n(649045),
    g = n(756419),
    p = n(456709),
    x = n(827656),
    j = n(41799);
function h(e) {
    let { applicationId: t, guildId: n, targetElementRef: a, disabled: o = !1, openOnFocus: s = !1, ...i } = e,
        { isHovered: d, setIsHovered: c, onMouseEnter: m, onMouseLeave: p, cancelTimers: x } = (0, v.A)(500, 150),
        [j, h] = r.useState(!1),
        [C, E] = r.useState(!1),
        H = r.useRef(null),
        L = r.useRef({ targetHovered: !1, targetFocused: !1, cardHovered: !1 }),
        k = (0, f.m0)({ guildId: n ?? void 0, location: "ConjureAppHoverCard" });
    r.useEffect(() => {
        k && (0, g.A)(t);
    }, [k, t]);
    let I = r.useCallback(() => {
            ((L.current = { targetHovered: !1, targetFocused: !1, cardHovered: !1 }), x(), c(!1), E(!1));
        }, [x, c]),
        P = r.useCallback(
            (e, t) => {
                let n = L.current;
                ((n[e] = t),
                    E(n.targetHovered || n.targetFocused || n.cardHovered),
                    t ? m() : n.targetHovered || n.targetFocused || n.cardHovered || p());
            },
            [m, p],
        );
    r.useEffect(() => {
        let e = a.current;
        if (!o && null != e)
            return (
                e.addEventListener("mouseenter", t),
                e.addEventListener("mouseleave", n),
                e.addEventListener("mousedown", I),
                s && (e.addEventListener("focus", l), e.addEventListener("blur", r)),
                () => {
                    (e.removeEventListener("mouseenter", t),
                        e.removeEventListener("mouseleave", n),
                        e.removeEventListener("mousedown", I),
                        e.removeEventListener("focus", l),
                        e.removeEventListener("blur", r),
                        I());
                }
            );
        function t() {
            (h(!0), P("targetHovered", !0));
        }
        function n(e) {
            if ((0, u.vq)(e.relatedTarget, Node) && H.current?.contains(e.relatedTarget) === !0) {
                L.current.targetHovered = !1;
                return;
            }
            P("targetHovered", !1);
        }
        function l() {
            e?.matches(":focus-visible") === !0 && (h(!0), P("targetFocused", !0));
        }
        function r() {
            P("targetFocused", !1);
        }
    }, [o, s, a, P, I]);
    let b = r.useCallback(() => P("cardHovered", !0), [P]),
        N = r.useCallback(() => P("cardHovered", !1), [P]);
    return j
        ? (0, l.jsx)(A, {
              ...i,
              applicationId: t,
              guildId: n ?? null,
              targetElementRef: a,
              isHovered: d,
              isPointerOver: C,
              cardRef: H,
              onCardEnter: b,
              onCardLeave: N,
              onClose: I,
          })
        : null;
}
function A(e) {
    let {
            applicationId: t,
            guildId: n,
            targetElementRef: r,
            isHovered: a,
            isPointerOver: o,
            cardRef: u,
            onCardEnter: i,
            onCardLeave: d,
            onClose: v,
            position: f,
            animationPosition: m,
            spacing: g,
        } = e,
        x = (0, c.YY)(t).data,
        j = x?.conjureProjectId != null ? x : null,
        { creator: h, remixProject: A, isSettled: C } = (0, p.A)(j, n, o || a),
        H = a && null != j;
    return (0, l.jsx)(s.Y, {
        targetElementRef: r,
        position: f,
        animationPosition: m,
        spacing: g,
        shouldShow: H,
        onRequestClose: v,
        renderPopout: () =>
            null != j
                ? (0, l.jsx)(E, {
                      application: j,
                      creator: h,
                      remixProject: A,
                      showFooter: !(C && null == h),
                      guildId: n,
                      cardRef: u,
                      onMouseEnter: i,
                      onMouseLeave: d,
                      onClose: v,
                  })
                : null,
        children: () => null,
    });
}
function C(e) {
    e.stopPropagation();
}
function E(e) {
    let {
            application: t,
            creator: n,
            remixProject: r,
            showFooter: a,
            guildId: u,
            cardRef: s,
            onMouseEnter: c,
            onMouseLeave: v,
            onClose: f,
        } = e,
        g = t.getIconURL(96),
        p = t.description?.trim();
    return (0, l.jsxs)("div", {
        ref: s,
        className: j.Nr,
        onMouseEnter: c,
        onMouseLeave: v,
        onClick: C,
        onMouseDown: C,
        onContextMenu: C,
        children: [
            (0, l.jsxs)("div", {
                className: j.rf,
                children: [
                    null != g
                        ? (0, l.jsx)("img", { alt: "", src: g, className: o()(j.Kk, j.Dp) })
                        : (0, l.jsx)(m.A, { applicationId: t.id, name: t.name, glyphSize: 24, className: j.Kk }),
                    (0, l.jsxs)(i.B, {
                        gap: 4,
                        className: j.zH,
                        children: [
                            (0, l.jsx)(d.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            null != p && p.length > 0
                                ? (0, l.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      lineClamp: 3,
                                      children: p,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            a ? (0, l.jsx)(x.A, { creator: n, remixProject: r, guildId: u, onClose: f }) : null,
        ],
    });
}
