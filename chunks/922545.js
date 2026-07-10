a.d(e, { default: () => E, O: () => C });
var i = a(627968),
    l = a(64700),
    r = a(834730),
    n = a(189213),
    s = a(150934),
    c = a(503852);
a(321073);
var o = a(512750),
    d = a(17928),
    u = a(386784),
    m = a(498642),
    x = a(317525),
    b = a(71393),
    k = a(853513),
    p = a(375708),
    f = a(898190),
    g = a(490557),
    h = a(193157),
    v = a(568065),
    j = a(832952);
function C(t) {
    let {
            size: e,
            title: a,
            body: c,
            warningText: o,
            acknowledgementText: d,
            error: u,
            isLoading: m,
            onDeactivate: x,
            ...b
        } = t,
        [f, g] = l.useState(!1);
    return (0, i.jsxs)(n.Modal, {
        ...b,
        size: e,
        title: p.intl.formatToPlainString(k.default.iEBw1M, { perk: a }),
        subtitle: p.intl.formatToPlainString(k.default["7o0K+2"], { perk: a }),
        actions: [
            { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: b.onClose },
            {
                variant: "critical-primary",
                text: p.intl.string(k.default.PYPdl4),
                loading: m,
                onClick: x,
                disabled: null != d && !f,
            },
        ],
        children: [
            c,
            (0, i.jsxs)("div", {
                className: j.UW,
                children: [
                    (0, i.jsx)(r.E, {
                        color: "text-feedback-critical",
                        variant: "eyebrow",
                        children: p.intl.string(k.default.OVt5CC),
                    }),
                    (0, i.jsx)(r.E, { className: j.i4, tag: "span", variant: "text-sm/medium", children: o }),
                ],
            }),
            null != u &&
                (0, i.jsx)(r.E, {
                    className: j.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: u,
                }),
            null != d &&
                (0, i.jsx)("div", {
                    className: j.ud,
                    children: (0, i.jsx)(s.S, { checked: f, onChange: g, label: d, labelType: "secondary" }),
                }),
        ],
    });
}
function E(t) {
    let e,
        a,
        n,
        s,
        E,
        { guildId: S, powerup: y, ...A } = t,
        { onDeactivate: T, error: w, isLoading: P } = (0, f.A)(S, y),
        { onClose: N } = A,
        L = l.useCallback(
            (t) => {
                t.stopPropagation(),
                    T().then(() => {
                        N?.();
                    });
            },
            [N, T],
        ),
        I =
            ((e = (0, d.bG)([m.A], () => m.A.getMemberCount(S))),
            (a = (0, u.A)(S)),
            (n = (0, d.bG)([b.A], () => b.A.getGuild(S)?.vanityURLCode != null)),
            (s = (0, d.bG)(
                [x.A],
                () =>
                    y.skuId !== o.aN || null == a
                        ? 0
                        : x.A.getSortedRoles(S).reduce(
                              (t, e) => (e.colorStrings?.secondaryColor == null ? t : t + (a[e.id] ?? 0)),
                              0,
                          ),
                [S, y.skuId, a],
            )),
            (E = l.useMemo(() => {
                let t;
                switch (y.skuId) {
                    case o.aN:
                        t =
                            s > 0
                                ? p.intl.formatToPlainString(k.default["4jSvr1"], { perk: y.title, memberCount: s })
                                : p.intl.formatToPlainString(k.default.cavtEo, { perk: y.title });
                        break;
                    case o.FB:
                        t = n ? p.intl.string(k.default.hN75yb) : p.intl.string(k.default.Du91Rb);
                        break;
                    case o.OJ:
                    case o.jF:
                    case o.Ht:
                    case o.tv:
                        t = p.intl.string(k.default.Vf2ZcR);
                        break;
                    default:
                        t = p.intl.formatToPlainString(k.default["4jSvr1"], { perk: y.title, memberCount: e ?? 0 });
                }
                let a = [{ text: t, critical: y.skuId === o.FB }];
                return n && y.skuId === o.YG && a.push({ text: p.intl.string(k.default.M4XL5n), critical: !0 }), a;
            }, [y, s, e, n])),
            l.useMemo(
                () =>
                    (0, i.jsx)(i.Fragment, {
                        children: E.map((t, e) =>
                            t.critical
                                ? (0, i.jsx)(
                                      r.E,
                                      {
                                          color: "text-feedback-critical",
                                          variant: "text-sm/semibold",
                                          children: t.text,
                                      },
                                      e,
                                  )
                                : (0, i.jsx)(l.Fragment, { children: t.text }, e),
                        ),
                    }),
                [E],
            ));
    return (
        (0, c.Z)(S, y, c.q.DEACTIVATE),
        (0, i.jsx)(C, {
            size: y.type === v.o9.LEVEL ? "md" : "sm",
            title: y.title,
            body: (() => {
                switch (y.type) {
                    case v.o9.LEVEL:
                        return (0, i.jsx)(h.A, { powerup: y });
                    case v.o9.PERK:
                        return (0, i.jsx)(g.l, { className: j.Sl, powerup: y });
                }
            })(),
            warningText: I,
            error: w,
            isLoading: P,
            onDeactivate: L,
            ...A,
        })
    );
}
