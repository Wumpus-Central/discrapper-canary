var t = l(477900),
    r = l(582128),
    o = l(503698),
    u = l.n(o),
    a = l(621466),
    s = l(265872),
    i = l(331322),
    d = l(834730),
    c = l(627363),
    v = l(421773),
    m = l(499466),
    f = l(537129),
    g = l(104299),
    p = l(316980),
    j = l(827656),
    x = l(41799);
function C(e) {
    let {
            applicationId: n,
            guildId: l,
            targetElementRef: r,
            isHovered: o,
            isPointerOver: u,
            cardRef: a,
            onCardEnter: i,
            onCardLeave: d,
            onClose: v,
            position: m,
            animationPosition: f,
            spacing: g,
        } = e,
        j = (0, c.YY)(n).data,
        x = j?.conjureProjectId != null ? j : null,
        { creator: C, remixProject: h, editProject: A, isSettled: H } = (0, p.A)(x, l, u || o),
        L = o && null != x;
    return (0, t.jsx)(s.Y, {
        targetElementRef: r,
        position: m,
        animationPosition: f,
        spacing: g,
        shouldShow: L,
        onRequestClose: v,
        renderPopout: () =>
            null != x
                ? (0, t.jsx)(E, {
                      application: x,
                      creator: C,
                      remixProject: h,
                      editProject: A,
                      showFooter: !(H && null == C),
                      guildId: l,
                      cardRef: a,
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
function E(e) {
    let {
            application: n,
            creator: l,
            remixProject: r,
            editProject: o,
            showFooter: a,
            guildId: s,
            cardRef: c,
            onMouseEnter: v,
            onMouseLeave: m,
            onClose: f,
        } = e,
        p = n.getIconURL(96),
        C = n.description?.trim();
    return (0, t.jsxs)("div", {
        ref: c,
        className: x.Nr,
        onMouseEnter: v,
        onMouseLeave: m,
        onClick: h,
        onMouseDown: h,
        onContextMenu: h,
        children: [
            (0, t.jsxs)("div", {
                className: x.rf,
                children: [
                    null != p
                        ? (0, t.jsx)("img", { alt: "", src: p, className: u()(x.Kk, x.Dp) })
                        : (0, t.jsx)(g.A, { applicationId: n.id, name: n.name, glyphSize: 24, className: x.Kk }),
                    (0, t.jsxs)(i.B, {
                        gap: 4,
                        className: x.zH,
                        children: [
                            (0, t.jsx)(d.E, {
                                variant: "body-md/semibold",
                                color: "text-strong",
                                lineClamp: 1,
                                children: n.name,
                            }),
                            null != C && C.length > 0
                                ? (0, t.jsx)(d.E, {
                                      variant: "body-sm/normal",
                                      color: "text-default",
                                      lineClamp: 3,
                                      children: C,
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            a
                ? (0, t.jsx)(j.A, {
                      applicationId: n.id,
                      creator: l,
                      remixProject: r,
                      editProject: o,
                      guildId: s,
                      onClose: f,
                  })
                : null,
        ],
    });
}
l.d(
    n,
    {},
    {
        A: function (e) {
            let { applicationId: n, guildId: l, targetElementRef: o, disabled: u = !1, openOnFocus: s = !1, ...i } = e,
                {
                    isHovered: d,
                    setIsHovered: c,
                    onMouseEnter: g,
                    onMouseLeave: p,
                    cancelTimers: j,
                } = (0, v.A)(500, 150),
                [x, h] = r.useState(!1),
                [E, A] = r.useState(!1),
                H = r.useRef(null),
                L = r.useRef({ targetHovered: !1, targetFocused: !1, cardHovered: !1 }),
                P = (0, m.m0)({ guildId: l ?? void 0, location: "ConjureAppHoverCard" });
            r.useEffect(() => {
                P && (0, f.A)(n);
            }, [P, n]);
            let b = r.useCallback(() => {
                    ((L.current = { targetHovered: !1, targetFocused: !1, cardHovered: !1 }), j(), c(!1), A(!1));
                }, [j, c]),
                I = r.useCallback(
                    (e, n) => {
                        let l = L.current;
                        ((l[e] = n),
                            A(l.targetHovered || l.targetFocused || l.cardHovered),
                            n ? g() : l.targetHovered || l.targetFocused || l.cardHovered || p());
                    },
                    [g, p],
                );
            r.useEffect(() => {
                let e = o.current;
                if (!u && null != e)
                    return (
                        e.addEventListener("mouseenter", n),
                        e.addEventListener("mouseleave", l),
                        e.addEventListener("mousedown", b),
                        s && (e.addEventListener("focus", t), e.addEventListener("blur", r)),
                        () => {
                            (e.removeEventListener("mouseenter", n),
                                e.removeEventListener("mouseleave", l),
                                e.removeEventListener("mousedown", b),
                                e.removeEventListener("focus", t),
                                e.removeEventListener("blur", r),
                                b());
                        }
                    );
                function n() {
                    (h(!0), I("targetHovered", !0));
                }
                function l(e) {
                    if ((0, a.vq)(e.relatedTarget, Node) && H.current?.contains(e.relatedTarget) === !0) {
                        L.current.targetHovered = !1;
                        return;
                    }
                    I("targetHovered", !1);
                }
                function t() {
                    e?.matches(":focus-visible") === !0 && (h(!0), I("targetFocused", !0));
                }
                function r() {
                    I("targetFocused", !1);
                }
            }, [u, s, o, I, b]);
            let k = r.useCallback(() => I("cardHovered", !0), [I]),
                N = r.useCallback(() => I("cardHovered", !1), [I]);
            return x
                ? (0, t.jsx)(C, {
                      ...i,
                      applicationId: n,
                      guildId: l ?? null,
                      targetElementRef: o,
                      isHovered: d,
                      isPointerOver: E,
                      cardRef: H,
                      onCardEnter: k,
                      onCardLeave: N,
                      onClose: b,
                  })
                : null;
        },
    },
);
