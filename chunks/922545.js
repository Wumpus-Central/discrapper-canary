a.d(t, { default: () => v, O: () => S });
var n = a(627968),
    r = a(64700),
    s = a(512750),
    i = a(834730),
    l = a(189213),
    o = a(150934),
    c = a(503852),
    d = a(17928),
    u = a(386784),
    m = a(498642),
    f = a(317525),
    b = a(71393),
    k = a(853513),
    p = a(985018),
    _ = a(898190),
    I = a(490557),
    g = a(193157),
    T = a(568065),
    x = a(832952);
function S(e) {
    let {
            size: t,
            title: a,
            body: s,
            warningText: c,
            acknowledgementText: d,
            error: u,
            isLoading: m,
            onDeactivate: f,
            ...b
        } = e,
        [_, I] = r.useState(!1);
    return (0, n.jsxs)(l.Modal, {
        ...b,
        size: t,
        title: p.intl.formatToPlainString(k.default.iEBw1M, { perk: a }),
        subtitle: p.intl.formatToPlainString(k.default["7o0K+2"], { perk: a }),
        actions: [
            { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: b.onClose },
            {
                variant: "critical-primary",
                text: p.intl.string(k.default.PYPdl4),
                loading: m,
                onClick: f,
                disabled: null != d && !_,
            },
        ],
        children: [
            s,
            (0, n.jsxs)("div", {
                className: x.UW,
                children: [
                    (0, n.jsx)(i.E, {
                        color: "text-feedback-critical",
                        variant: "eyebrow",
                        children: p.intl.string(k.default.OVt5CC),
                    }),
                    (0, n.jsx)(i.E, { className: x.i4, tag: "span", variant: "text-sm/medium", children: c }),
                ],
            }),
            null != u &&
                (0, n.jsx)(i.E, {
                    className: x.kc,
                    color: "text-feedback-critical",
                    variant: "text-sm/semibold",
                    children: u,
                }),
            null != d &&
                (0, n.jsx)("div", {
                    className: x.ud,
                    children: (0, n.jsx)(o.S, { checked: _, onChange: I, label: d, labelType: "secondary" }),
                }),
        ],
    });
}
function v(e) {
    let { guildId: t, powerup: a, ...l } = e,
        { onDeactivate: o, error: v, isLoading: E } = (0, _.A)(t, a),
        { onClose: C } = l,
        A = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    o().then(() => {
                        C?.();
                    });
            },
            [C, o],
        ),
        h = (function (e, t) {
            let a,
                l,
                o,
                c,
                { warningText: _, vanityUrlWarning: I } =
                    ((a = (0, d.bG)([m.A], () => m.A.getMemberCount(e))),
                    (l = (0, u.A)(e)),
                    (o = (0, d.bG)([b.A], () => b.A.getGuild(e)?.vanityURLCode != null)),
                    (c = (0, d.bG)(
                        [f.A],
                        () =>
                            t.skuId !== s.aN || null == l
                                ? 0
                                : f.A.getSortedRoles(e).reduce(
                                      (e, t) => (t.colorStrings?.secondaryColor == null ? e : e + (l[t.id] ?? 0)),
                                      0,
                                  ),
                        [e, t.skuId, l],
                    )),
                    r.useMemo(() => {
                        let e;
                        switch (t.skuId) {
                            case s.aN:
                                e =
                                    c > 0
                                        ? p.intl.formatToPlainString(k.default["4jSvr1"], {
                                              perk: t.title,
                                              memberCount: c,
                                          })
                                        : p.intl.formatToPlainString(k.default.cavtEo, { perk: t.title });
                                break;
                            case s.FB:
                                e = o ? p.intl.string(k.default.hN75yb) : p.intl.string(k.default.Du91Rb);
                                break;
                            case s.OJ:
                            case s.jF:
                                e = p.intl.string(k.default.Vf2ZcR);
                                break;
                            default:
                                e = p.intl.formatToPlainString(k.default["4jSvr1"], {
                                    perk: t.title,
                                    memberCount: a ?? 0,
                                });
                        }
                        let n = null;
                        return (
                            o && t.skuId === s.YG && (n = p.intl.string(k.default.M4XL5n)),
                            { warningText: e, vanityUrlWarning: n }
                        );
                    }, [t, c, a, o]));
            return r.useMemo(
                () =>
                    t.skuId === s.FB
                        ? (0, n.jsx)(i.E, { color: "text-feedback-critical", variant: "text-sm/semibold", children: _ })
                        : null != I
                          ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                    _,
                                    (0, n.jsx)(i.E, {
                                        color: "text-feedback-critical",
                                        variant: "text-sm/semibold",
                                        children: I,
                                    }),
                                ],
                            })
                          : _,
                [t.skuId, _, I],
            );
        })(t, a);
    return (
        (0, c.Z)(t, a, c.q.DEACTIVATE),
        (0, n.jsx)(S, {
            size: a.type === T.o9.LEVEL ? "md" : "sm",
            title: a.title,
            body: (() => {
                switch (a.type) {
                    case T.o9.LEVEL:
                        return (0, n.jsx)(g.A, { powerup: a });
                    case T.o9.PERK:
                        return (0, n.jsx)(I.l, { className: x.Sl, powerup: a });
                }
            })(),
            warningText: h,
            error: v,
            isLoading: E,
            onDeactivate: A,
            ...l,
        })
    );
}
