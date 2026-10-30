n.d(t, { A: () => C });
var l = n(477900),
    r = n(582128),
    o = n(503698),
    a = n.n(o),
    u = n(621466),
    s = n(265872),
    i = n(323384),
    d = n(331322),
    c = n(834730),
    v = n(627363),
    f = n(421773),
    m = n(97005),
    g = n(105840),
    p = n(756419),
    x = n(456709),
    h = n(827656),
    j = n(41799);
function C(e) {
    let { applicationId: t, guildId: n, targetElementRef: o, disabled: a = !1, openOnFocus: s = !1, ...i } = e,
        { isHovered: d, setIsHovered: c, onMouseEnter: v, onMouseLeave: g, cancelTimers: x } = (0, f.A)(500, 150),
        [h, j] = r.useState(!1),
        [C, E] = r.useState(!1),
        H = r.useRef(null),
        L = r.useRef({ targetHovered: !1, targetFocused: !1, cardHovered: !1 }),
        k = (0, m.m0)({ guildId: n ?? void 0, location: "ConjureAppHoverCard" });
    r.useEffect(() => {
        k && (0, p.A)(t);
    }, [k, t]);
    let b = r.useCallback(() => {
            ((L.current = { targetHovered: !1, targetFocused: !1, cardHovered: !1 }), x(), c(!1), E(!1));
        }, [x, c]),
        P = r.useCallback(
            (e, t) => {
                let n = L.current;
                ((n[e] = t),
                    E(n.targetHovered || n.targetFocused || n.cardHovered),
                    t ? v() : n.targetHovered || n.targetFocused || n.cardHovered || g());
            },
            [v, g],
        );
    r.useEffect(() => {
        let e = o.current;
        if (!a && null != e)
            return (
                e.addEventListener("mouseenter", t),
                e.addEventListener("mouseleave", n),
                e.addEventListener("mousedown", b),
                s && (e.addEventListener("focus", l), e.addEventListener("blur", r)),
                () => {
                    (e.removeEventListener("mouseenter", t),
                        e.removeEventListener("mouseleave", n),
                        e.removeEventListener("mousedown", b),
                        e.removeEventListener("focus", l),
                        e.removeEventListener("blur", r),
                        b());
                }
            );
        function t() {
            (j(!0), P("targetHovered", !0));
        }
        function n(e) {
            if ((0, u.vq)(e.relatedTarget, Node) && H.current?.contains(e.relatedTarget) === !0) {
                L.current.targetHovered = !1;
                return;
            }
            P("targetHovered", !1);
        }
        function l() {
            e?.matches(":focus-visible") === !0 && (j(!0), P("targetFocused", !0));
        }
        function r() {
            P("targetFocused", !1);
        }
    }, [a, s, o, P, b]);
    let w = r.useCallback(() => P("cardHovered", !0), [P]),
        I = r.useCallback(() => P("cardHovered", !1), [P]);
    return h
        ? (0, l.jsx)(A, {
              ...i,
              applicationId: t,
              guildId: n ?? null,
              targetElementRef: o,
              isHovered: d,
              isPointerOver: C,
              cardRef: H,
              onCardEnter: w,
              onCardLeave: I,
              onClose: b,
          })
        : null;
}
function A(e) {
    let {
            applicationId: t,
            guildId: n,
            targetElementRef: r,
            isHovered: o,
            isPointerOver: a,
            cardRef: u,
            onCardEnter: i,
            onCardLeave: d,
            onClose: c,
            position: f,
            animationPosition: m,
            spacing: g,
        } = e,
        p = (0, v.YY)(t).data,
        h = p?.conjureProjectId != null ? p : null,
        { creator: j, remixProject: C, isSettled: A } = (0, x.A)(h, n, a || o),
        E = o && null != h;
    return (0, l.jsx)(s.Y, {
        targetElementRef: r,
        position: f,
        animationPosition: m,
        spacing: g,
        shouldShow: E,
        onRequestClose: c,
        renderPopout: () =>
            null != h
                ? (0, l.jsx)(H, {
                      application: h,
                      creator: j,
                      remixProject: C,
                      showFooter: !(A && null == j),
                      guildId: n,
                      cardRef: u,
                      onMouseEnter: i,
                      onMouseLeave: d,
                      onClose: c,
                  })
                : null,
        children: () => null,
    });
}
function E(e) {
    e.stopPropagation();
}
function H(e) {
    let {
            application: t,
            creator: n,
            remixProject: r,
            showFooter: o,
            guildId: u,
            cardRef: s,
            onMouseEnter: v,
            onMouseLeave: f,
            onClose: m,
        } = e,
        p = t.getIconURL(96),
        x = t.description?.trim(),
        C = (0, g.A)(t.id, t.name);
    return (0, l.jsxs)("div", {
        ref: s,
        className: j.Nr,
        onMouseEnter: v,
        onMouseLeave: f,
        onClick: E,
        onMouseDown: E,
        onContextMenu: E,
        children: [
            (0, l.jsxs)("div", {
                className: j.rf,
                children: [
                    null != p
                        ? (0, l.jsx)("img", { alt: "", src: p, className: a()(j.Kk, j.Dp) })
                        : (0, l.jsx)("div", {
                              className: a()(j.Kk, j.Pz),
                              style: { backgroundColor: C.backgroundColor, color: C.foregroundColor },
                              "aria-hidden": !0,
                              children:
                                  C.character ??
                                  (0, l.jsx)(i.k, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                          }),
                    (0, l.jsxs)(d.B, {
                        gap: 4,
                        className: j.zH,
                        children: [
                            (0, l.jsx)(c.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            null != x && x.length > 0
                                ? (0, l.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      lineClamp: 3,
                                      children: x,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            o ? (0, l.jsx)(h.A, { creator: n, remixProject: r, guildId: u, onClose: m }) : null,
        ],
    });
}
