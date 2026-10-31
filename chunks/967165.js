t.d(n, { A: () => C });
var l = t(477900),
    r = t(582128),
    o = t(503698),
    a = t.n(o),
    u = t(621466),
    s = t(265872),
    i = t(331322),
    d = t(834730),
    c = t(627363),
    v = t(421773),
    m = t(97005),
    f = t(537129),
    g = t(649045),
    p = t(456709),
    x = t(827656),
    j = t(41799);
function C(e) {
    let { applicationId: n, guildId: t, targetElementRef: o, disabled: a = !1, openOnFocus: s = !1, ...i } = e,
        { isHovered: d, setIsHovered: c, onMouseEnter: g, onMouseLeave: p, cancelTimers: x } = (0, v.A)(500, 150),
        [j, C] = r.useState(!1),
        [h, A] = r.useState(!1),
        H = r.useRef(null),
        L = r.useRef({ targetHovered: !1, targetFocused: !1, cardHovered: !1 }),
        k = (0, m.m0)({ guildId: t ?? void 0, location: "ConjureAppHoverCard" });
    r.useEffect(() => {
        k && (0, f.A)(n);
    }, [k, n]);
    let I = r.useCallback(() => {
            ((L.current = { targetHovered: !1, targetFocused: !1, cardHovered: !1 }), x(), c(!1), A(!1));
        }, [x, c]),
        P = r.useCallback(
            (e, n) => {
                let t = L.current;
                ((t[e] = n),
                    A(t.targetHovered || t.targetFocused || t.cardHovered),
                    n ? g() : t.targetHovered || t.targetFocused || t.cardHovered || p());
            },
            [g, p],
        );
    r.useEffect(() => {
        let e = o.current;
        if (!a && null != e)
            return (
                e.addEventListener("mouseenter", n),
                e.addEventListener("mouseleave", t),
                e.addEventListener("mousedown", I),
                s && (e.addEventListener("focus", l), e.addEventListener("blur", r)),
                () => {
                    (e.removeEventListener("mouseenter", n),
                        e.removeEventListener("mouseleave", t),
                        e.removeEventListener("mousedown", I),
                        e.removeEventListener("focus", l),
                        e.removeEventListener("blur", r),
                        I());
                }
            );
        function n() {
            (C(!0), P("targetHovered", !0));
        }
        function t(e) {
            if ((0, u.vq)(e.relatedTarget, Node) && H.current?.contains(e.relatedTarget) === !0) {
                L.current.targetHovered = !1;
                return;
            }
            P("targetHovered", !1);
        }
        function l() {
            e?.matches(":focus-visible") === !0 && (C(!0), P("targetFocused", !0));
        }
        function r() {
            P("targetFocused", !1);
        }
    }, [a, s, o, P, I]);
    let b = r.useCallback(() => P("cardHovered", !0), [P]),
        N = r.useCallback(() => P("cardHovered", !1), [P]);
    return j
        ? (0, l.jsx)(E, {
              ...i,
              applicationId: n,
              guildId: t ?? null,
              targetElementRef: o,
              isHovered: d,
              isPointerOver: h,
              cardRef: H,
              onCardEnter: b,
              onCardLeave: N,
              onClose: I,
          })
        : null;
}
function E(e) {
    let {
            applicationId: n,
            guildId: t,
            targetElementRef: r,
            isHovered: o,
            isPointerOver: a,
            cardRef: u,
            onCardEnter: i,
            onCardLeave: d,
            onClose: v,
            position: m,
            animationPosition: f,
            spacing: g,
        } = e,
        x = (0, c.YY)(n).data,
        j = x?.conjureProjectId != null ? x : null,
        { creator: C, remixProject: E, isSettled: h } = (0, p.A)(j, t, a || o),
        H = o && null != j;
    return (0, l.jsx)(s.Y, {
        targetElementRef: r,
        position: m,
        animationPosition: f,
        spacing: g,
        shouldShow: H,
        onRequestClose: v,
        renderPopout: () =>
            null != j
                ? (0, l.jsx)(A, {
                      application: j,
                      creator: C,
                      remixProject: E,
                      showFooter: !(h && null == C),
                      guildId: t,
                      cardRef: u,
                      onMouseEnter: i,
                      onMouseLeave: d,
                      onClose: v,
                  })
                : null,
        children: () => null,
    });
}
function h(e) {
    e.stopPropagation();
}
function A(e) {
    let {
            application: n,
            creator: t,
            remixProject: r,
            showFooter: o,
            guildId: u,
            cardRef: s,
            onMouseEnter: c,
            onMouseLeave: v,
            onClose: m,
        } = e,
        f = n.getIconURL(96),
        p = n.description?.trim();
    return (0, l.jsxs)("div", {
        ref: s,
        className: j.Nr,
        onMouseEnter: c,
        onMouseLeave: v,
        onClick: h,
        onMouseDown: h,
        onContextMenu: h,
        children: [
            (0, l.jsxs)("div", {
                className: j.rf,
                children: [
                    null != f
                        ? (0, l.jsx)("img", { alt: "", src: f, className: a()(j.Kk, j.Dp) })
                        : (0, l.jsx)(g.A, { applicationId: n.id, name: n.name, glyphSize: 24, className: j.Kk }),
                    (0, l.jsxs)(i.B, {
                        gap: 4,
                        className: j.zH,
                        children: [
                            (0, l.jsx)(d.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: n.name,
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
            o ? (0, l.jsx)(x.A, { creator: t, remixProject: r, guildId: u, onClose: m }) : null,
        ],
    });
}
