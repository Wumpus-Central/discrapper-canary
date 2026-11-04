var l = t(477900),
    r = t(582128),
    o = t(503698),
    a = t.n(o),
    u = t(621466),
    s = t(265872),
    d = t(331322),
    i = t(834730),
    c = t(627363),
    v = t(421773),
    m = t(499466),
    f = t(537129),
    g = t(104299),
    p = t(316980),
    j = t(827656),
    x = t(41799);
function C(e) {
    let {
            applicationId: n,
            guildId: t,
            targetElementRef: r,
            isHovered: o,
            isPointerOver: a,
            cardRef: u,
            onCardEnter: d,
            onCardLeave: i,
            onClose: v,
            position: m,
            animationPosition: f,
            spacing: g,
        } = e,
        j = (0, c.YY)(n).data,
        x = j?.conjureProjectId != null ? j : null,
        { creator: C, remixProject: E, isSettled: H } = (0, p.A)(x, t, a || o),
        L = o && null != x;
    return (0, l.jsx)(s.Y, {
        targetElementRef: r,
        position: m,
        animationPosition: f,
        spacing: g,
        shouldShow: L,
        onRequestClose: v,
        renderPopout: () =>
            null != x
                ? (0, l.jsx)(h, {
                      application: x,
                      creator: C,
                      remixProject: E,
                      showFooter: !(H && null == C),
                      guildId: t,
                      cardRef: u,
                      onMouseEnter: d,
                      onMouseLeave: i,
                      onClose: v,
                  })
                : null,
        children: () => null,
    });
}
function E(e) {
    e.stopPropagation();
}
function h(e) {
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
        className: x.Nr,
        onMouseEnter: c,
        onMouseLeave: v,
        onClick: E,
        onMouseDown: E,
        onContextMenu: E,
        children: [
            (0, l.jsxs)("div", {
                className: x.rf,
                children: [
                    null != f
                        ? (0, l.jsx)("img", { alt: "", src: f, className: a()(x.Kk, x.Dp) })
                        : (0, l.jsx)(g.A, { applicationId: n.id, name: n.name, glyphSize: 24, className: x.Kk }),
                    (0, l.jsxs)(d.B, {
                        gap: 4,
                        className: x.zH,
                        children: [
                            (0, l.jsx)(i.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: n.name,
                            }),
                            null != p && p.length > 0
                                ? (0, l.jsx)(i.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      lineClamp: 3,
                                      children: p,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            o ? (0, l.jsx)(j.A, { creator: t, remixProject: r, guildId: u, onClose: m }) : null,
        ],
    });
}
t.d(
    n,
    {},
    {
        A: function (e) {
            let { applicationId: n, guildId: t, targetElementRef: o, disabled: a = !1, openOnFocus: s = !1, ...d } = e,
                {
                    isHovered: i,
                    setIsHovered: c,
                    onMouseEnter: g,
                    onMouseLeave: p,
                    cancelTimers: j,
                } = (0, v.A)(500, 150),
                [x, E] = r.useState(!1),
                [h, H] = r.useState(!1),
                L = r.useRef(null),
                A = r.useRef({ targetHovered: !1, targetFocused: !1, cardHovered: !1 }),
                b = (0, m.m0)({ guildId: t ?? void 0, location: "ConjureAppHoverCard" });
            r.useEffect(() => {
                b && (0, f.A)(n);
            }, [b, n]);
            let k = r.useCallback(() => {
                    ((A.current = { targetHovered: !1, targetFocused: !1, cardHovered: !1 }), j(), c(!1), H(!1));
                }, [j, c]),
                I = r.useCallback(
                    (e, n) => {
                        let t = A.current;
                        ((t[e] = n),
                            H(t.targetHovered || t.targetFocused || t.cardHovered),
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
                        e.addEventListener("mousedown", k),
                        s && (e.addEventListener("focus", l), e.addEventListener("blur", r)),
                        () => {
                            (e.removeEventListener("mouseenter", n),
                                e.removeEventListener("mouseleave", t),
                                e.removeEventListener("mousedown", k),
                                e.removeEventListener("focus", l),
                                e.removeEventListener("blur", r),
                                k());
                        }
                    );
                function n() {
                    (E(!0), I("targetHovered", !0));
                }
                function t(e) {
                    if ((0, u.vq)(e.relatedTarget, Node) && L.current?.contains(e.relatedTarget) === !0) {
                        A.current.targetHovered = !1;
                        return;
                    }
                    I("targetHovered", !1);
                }
                function l() {
                    e?.matches(":focus-visible") === !0 && (E(!0), I("targetFocused", !0));
                }
                function r() {
                    I("targetFocused", !1);
                }
            }, [a, s, o, I, k]);
            let P = r.useCallback(() => I("cardHovered", !0), [I]),
                N = r.useCallback(() => I("cardHovered", !1), [I]);
            return x
                ? (0, l.jsx)(C, {
                      ...d,
                      applicationId: n,
                      guildId: t ?? null,
                      targetElementRef: o,
                      isHovered: i,
                      isPointerOver: h,
                      cardRef: L,
                      onCardEnter: P,
                      onCardLeave: N,
                      onClose: k,
                  })
                : null;
        },
    },
);
