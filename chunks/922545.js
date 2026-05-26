l.d(e, { default: () => E, O: () => C });
var a = l(627968),
    i = l(64700),
    n = l(512750),
    r = l(834730),
    s = l(189213),
    o = l(150934),
    c = l(503852),
    d = l(17928),
    u = l(386784),
    m = l(498642),
    b = l(317525),
    k = l(71393),
    f = l(645704),
    x = l(375708),
    g = l(898190),
    p = l(490557),
    h = l(193157),
    j = l(568065),
    v = l(9720);
function C(t) {
    let {
            size: e,
            title: l,
            body: n,
            warningText: c,
            acknowledgementText: d,
            error: u,
            isLoading: m,
            onDeactivate: b,
            ...k
        } = t,
        [g, p] = i.useState(!1);
    return (0, a.jsxs)(s.Modal, {
        ...k,
        size: e,
        title: x.intl.formatToPlainString(f.default.iEBw1M, { perk: l }),
        subtitle: x.intl.formatToPlainString(f.default["7o0K+2"], { perk: l }),
        actions: [
            { variant: "secondary", text: x.intl.string(x.t["ETE/oC"]), onClick: k.onClose },
            {
                variant: "critical-primary",
                text: x.intl.string(f.default.PYPdl4),
                loading: m,
                onClick: b,
                disabled: null != d && !g,
            },
        ],
        children: [
            n,
            (0, a.jsxs)("div", {
                className: v.UW,
                children: [
                    (0, a.jsx)(r.E, {
                        color: "text-feedback-critical",
                        variant: "eyebrow",
                        children: x.intl.string(f.default.OVt5CC),
                    }),
                    (0, a.jsx)(r.E, { className: v.i4, tag: "span", variant: "text-sm/medium", children: c }),
                ],
            }),
            null != u &&
                (0, a.jsx)(r.E, {
                    className: v.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: u,
                }),
            null != d &&
                (0, a.jsx)("div", {
                    className: v.ud,
                    children: (0, a.jsx)(o.S, { checked: g, onChange: p, label: d, labelType: "secondary" }),
                }),
        ],
    });
}
function E(t) {
    let { guildId: e, powerup: l, ...s } = t,
        { onDeactivate: o, error: E, isLoading: S } = (0, g.A)(e, l),
        { onClose: y } = s,
        A = i.useCallback(
            (t) => {
                t.stopPropagation(),
                    o().then(() => {
                        y?.();
                    });
            },
            [y, o],
        ),
        T = (function (t, e) {
            let l,
                s,
                o,
                c,
                { warningText: g, vanityUrlWarning: p } =
                    ((l = (0, d.bG)([m.A], () => m.A.getMemberCount(t))),
                    (s = (0, u.A)(t)),
                    (o = (0, d.bG)([k.A], () => k.A.getGuild(t)?.vanityURLCode != null)),
                    (c = (0, d.bG)(
                        [b.A],
                        () =>
                            e.skuId !== n.aN || null == s
                                ? 0
                                : b.A.getSortedRoles(t).reduce(
                                      (t, e) => (e.colorStrings?.secondaryColor == null ? t : t + (s[e.id] ?? 0)),
                                      0,
                                  ),
                        [t, e.skuId, s],
                    )),
                    i.useMemo(() => {
                        let t;
                        switch (e.skuId) {
                            case n.aN:
                                t =
                                    c > 0
                                        ? x.intl.formatToPlainString(f.default["4jSvr1"], {
                                              perk: e.title,
                                              memberCount: c,
                                          })
                                        : x.intl.formatToPlainString(f.default.cavtEo, { perk: e.title });
                                break;
                            case n.FB:
                                t = o ? x.intl.string(f.default.hN75yb) : x.intl.string(f.default.Du91Rb);
                                break;
                            case n.OJ:
                            case n.jF:
                                t = x.intl.string(f.default.Vf2ZcR);
                                break;
                            default:
                                t = x.intl.formatToPlainString(f.default["4jSvr1"], {
                                    perk: e.title,
                                    memberCount: l ?? 0,
                                });
                        }
                        let a = null;
                        return (
                            o && e.skuId === n.YG && (a = x.intl.string(f.default.M4XL5n)),
                            { warningText: t, vanityUrlWarning: a }
                        );
                    }, [e, c, l, o]));
            return i.useMemo(
                () =>
                    e.skuId === n.FB
                        ? (0, a.jsx)(r.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: g })
                        : null != p
                          ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                    g,
                                    (0, a.jsx)(r.E, {
                                        color: "text-feedback-critical",
                                        variant: "text-sm/semibold",
                                        children: p,
                                    }),
                                ],
                            })
                          : g,
                [e.skuId, g, p],
            );
        })(e, l);
    return (
        (0, c.Z)(e, l, c.q.DEACTIVATE),
        (0, a.jsx)(C, {
            size: l.type === j.o9.LEVEL ? "md" : "sm",
            title: l.title,
            body: (() => {
                switch (l.type) {
                    case j.o9.LEVEL:
                        return (0, a.jsx)(h.A, { powerup: l });
                    case j.o9.PERK:
                        return (0, a.jsx)(p.l, { className: v.Sl, powerup: l });
                }
            })(),
            warningText: T,
            error: E,
            isLoading: S,
            onDeactivate: A,
            ...s,
        })
    );
}
