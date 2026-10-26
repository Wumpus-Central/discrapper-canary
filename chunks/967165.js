n.d(t, { A: () => A });
var l = n(477900),
    r = n(582128),
    o = n(503698),
    a = n.n(o),
    s = n(621466),
    u = n(265872),
    i = n(323384),
    d = n(661531),
    c = n(331322),
    v = n(834730),
    f = n(627363),
    m = n(421773),
    g = n(97005),
    p = n(756419),
    x = n(456709),
    h = n(827656),
    j = n(41799);
function A(e) {
    let { applicationId: t, guildId: n, targetElementRef: o, disabled: a = !1, openOnFocus: u = !1, ...i } = e,
        { isHovered: d, setIsHovered: c, onMouseEnter: v, onMouseLeave: f, cancelTimers: x } = (0, m.A)(500, 150),
        [h, j] = r.useState(!1),
        [A, C] = r.useState(!1),
        H = r.useRef(null),
        L = r.useRef({ targetHovered: !1, targetFocused: !1, cardHovered: !1 }),
        I = (0, g.m0)({ guildId: n ?? void 0, location: "ConjureAppHoverCard" });
    r.useEffect(() => {
        I && (0, p.A)(t);
    }, [I, t]);
    let k = r.useCallback(() => {
            ((L.current = { targetHovered: !1, targetFocused: !1, cardHovered: !1 }), x(), c(!1), C(!1));
        }, [x, c]),
        N = r.useCallback(
            (e, t) => {
                let n = L.current;
                ((n[e] = t),
                    C(n.targetHovered || n.targetFocused || n.cardHovered),
                    t ? v() : n.targetHovered || n.targetFocused || n.cardHovered || f());
            },
            [v, f],
        );
    r.useEffect(() => {
        let e = o.current;
        if (!a && null != e)
            return (
                e.addEventListener("mouseenter", t),
                e.addEventListener("mouseleave", n),
                e.addEventListener("mousedown", k),
                u && (e.addEventListener("focus", l), e.addEventListener("blur", r)),
                () => {
                    (e.removeEventListener("mouseenter", t),
                        e.removeEventListener("mouseleave", n),
                        e.removeEventListener("mousedown", k),
                        e.removeEventListener("focus", l),
                        e.removeEventListener("blur", r),
                        k());
                }
            );
        function t() {
            (j(!0), N("targetHovered", !0));
        }
        function n(e) {
            if ((0, s.vq)(e.relatedTarget, Node) && H.current?.contains(e.relatedTarget) === !0) {
                L.current.targetHovered = !1;
                return;
            }
            N("targetHovered", !1);
        }
        function l() {
            e?.matches(":focus-visible") === !0 && (j(!0), N("targetFocused", !0));
        }
        function r() {
            N("targetFocused", !1);
        }
    }, [a, u, o, N, k]);
    let P = r.useCallback(() => N("cardHovered", !0), [N]),
        b = r.useCallback(() => N("cardHovered", !1), [N]);
    return h
        ? (0, l.jsx)(E, {
              ...i,
              applicationId: t,
              guildId: n ?? null,
              targetElementRef: o,
              isHovered: d,
              isPointerOver: A,
              cardRef: H,
              onCardEnter: P,
              onCardLeave: b,
              onClose: k,
          })
        : null;
}
function E(e) {
    let {
            applicationId: t,
            guildId: n,
            targetElementRef: r,
            isHovered: o,
            isPointerOver: a,
            cardRef: s,
            onCardEnter: i,
            onCardLeave: d,
            onClose: c,
            position: v,
            animationPosition: m,
            spacing: g,
        } = e,
        p = (0, f.YY)(t).data,
        h = p?.conjureProjectId != null ? p : null,
        { creator: j, remixProject: A, isSettled: E } = (0, x.A)(h, n, a || o),
        C = o && null != h;
    return (0, l.jsx)(u.Y, {
        targetElementRef: r,
        position: v,
        animationPosition: m,
        spacing: g,
        shouldShow: C,
        onRequestClose: c,
        renderPopout: () =>
            null != h
                ? (0, l.jsx)(H, {
                      application: h,
                      creator: j,
                      remixProject: A,
                      showFooter: !(E && null == j),
                      guildId: n,
                      cardRef: s,
                      onMouseEnter: i,
                      onMouseLeave: d,
                      onClose: c,
                  })
                : null,
        children: () => null,
    });
}
function C(e) {
    e.stopPropagation();
}
function H(e) {
    let {
            application: t,
            creator: n,
            remixProject: r,
            showFooter: o,
            guildId: s,
            cardRef: u,
            onMouseEnter: f,
            onMouseLeave: m,
            onClose: g,
        } = e,
        p = t.getIconURL(96),
        x = t.description?.trim();
    return (0, l.jsxs)("div", {
        ref: u,
        className: j.Nr,
        onMouseEnter: f,
        onMouseLeave: m,
        onClick: C,
        onMouseDown: C,
        onContextMenu: C,
        children: [
            (0, l.jsxs)("div", {
                className: j.rf,
                children: [
                    null != p
                        ? (0, l.jsx)("img", { alt: "", src: p, className: a()(j.Kk, j.Dp) })
                        : (0, l.jsx)("div", {
                              className: a()(j.Kk, j.Pz),
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
                        className: j.zH,
                        children: [
                            (0, l.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: t.name,
                            }),
                            null != x && x.length > 0
                                ? (0, l.jsx)(v.E, {
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
            o ? (0, l.jsx)(h.A, { creator: n, remixProject: r, guildId: s, onClose: g }) : null,
        ],
    });
}
