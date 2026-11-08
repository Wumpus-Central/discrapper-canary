var i = n(477900),
    r = n(582128),
    l = n(503698),
    s = n.n(l),
    a = n(855986),
    o = n(778712),
    u = n(866665),
    d = n(834730),
    c = n(821609),
    h = n(212245),
    f = n(933958),
    g = n(211449),
    A = n(878549),
    p = n(969151),
    m = n(550151),
    I = n(902439),
    E = n(283488),
    S = n(732637),
    C = n(315206),
    _ = n(104171),
    N = n(594007),
    T = n(227042),
    y = n(793574),
    v = n(688810),
    M = n(698141),
    D = n(429913),
    R = n(625180),
    O = n(91242),
    x = n(898879),
    P = n(293495),
    U = n(267102),
    L = n(293432),
    w = n(46653),
    b = n(186111),
    G = n(287809),
    F = n(403362),
    j = n(562153),
    k = n(652215),
    V = n(165610),
    H = n(792996),
    B = n(782660);
let W = ["embedded_background"];
function Y(e) {
    let { avatarSize: t, guildId: n, channelId: r, users: l } = e,
        s = t ?? o._3.SIZE_32,
        a = (0, o.FT)(s);
    return (0, i.jsx)(_.Ay, {
        size: a,
        guildId: n,
        users: l,
        max: 4,
        renderUser: function (e) {
            if (null == e || e === _.mt) return null;
            let t = j.Ay.getName(n, r, e);
            return (0, i.jsx)(
                u.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, a), alt: t, className: B.my }, e.id) },
                e.id,
            );
        },
    });
}
function z(e) {
    let { participants: t, application: n, channel: l, width: u } = e,
        p = u > 400 ? 2 : +(u > 300),
        [I] = u > 400 ? [o._3.SIZE_56, 56] : u > 300 ? [o._3.SIZE_32, 32] : [o._3.SIZE_24, 24],
        E = (0, a.yK)([G.default, w.default], () =>
            Array.from(t)
                .map((e) => ((0, A.S)(e, w.default) ? null : G.default.getUser(e.userId)))
                .filter(F.Vq),
        ),
        S = (0, a.bG)([f.Ay], () =>
            f.Ay.getEmbeddedActivitiesForChannelIncludingHidden(l.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: C } = (0, v.Ay)(),
        _ = (0, h.p)(),
        N = j.Ay.getName(l.getGuildId(), l.id, E?.[0]),
        T = (0, m.vG)({ userId: G.default.getCurrentUser()?.id, channelId: l.id, application: n }) === m.Gy.CAN_JOIN,
        y = l.getGuildId() ?? void 0,
        D = r.useId(),
        R = n.id,
        O = r.useMemo(() => ({ channel: l, type: "channel" }), [l]),
        { submitting: x } = (0, M.A)({ applicationId: R, context: O, launchingComponentId: D });
    return (0, i.jsxs)("div", {
        className: B.Yi,
        children: [
            (0, i.jsx)(Y, { avatarSize: I, guildId: y, channelId: l.id, users: E }),
            (0, i.jsx)(d.E, {
                className: s()(B.m_, { [B.EX]: 0 === p, [B.Y]: 1 === p }),
                variant: "body-sm/normal",
                children:
                    E.length > 1
                        ? H.intl.formatToPlainString(H.t.cpe6CK, { username: N, count: E.length - 1 })
                        : H.intl.formatToPlainString(H.t["7Uuia2"], { username: N }),
            }),
            (0, i.jsx)(d.E, {
                className: s()(B.wx, { [B.EX]: 0 === p, [B.Y]: 1 === p }),
                variant: "body-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: B.Uo,
                children: T
                    ? (0, i.jsx)(c.$, {
                          text: H.intl.string(H.t["4i2vj+"]),
                          onClick: function (e) {
                              (e.stopPropagation(),
                                  null != S &&
                                      (0, g.A)({
                                          applicationId: S.applicationId,
                                          activityChannelId: l.id,
                                          locationObject: _.location,
                                          analyticsLocations: C,
                                          componentId: D,
                                      }));
                          },
                          loading: x,
                          size: 2 === p ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let { participant: t, width: n, selected: l, interactible: s, channel: o } = e,
                { analyticsLocations: u } = (0, v.Ay)(y.A.ACTIVITY_TILE),
                { applicationId: d, frameId: c } = t,
                h = (0, I.A)(),
                f = (0, a.bG)([O.A], () => (0, V.ny)(O.A.getFrame(c)), [c]),
                g = (0, U.Us)() === k.BRT.APP,
                A = null != h && (0, p.H)(h.location) === o.id && h.applicationId === d,
                m = f?.id,
                _ = f?.data.layoutMode,
                M = null != m || A,
                w = null != m ? g : A,
                [G] = (0, D.A)([d]),
                { url: F } = (0, E.A)({ applicationId: d, names: W, size: 1024 }),
                j = !l && w,
                H = !w,
                Y = (0, a.bG)([b.A, L.A], () => (0, T.A)({ LayerStore: b.A, PopoutWindowStore: L.A }));
            return (
                r.useEffect(() => {
                    if (j && null == m && null != h && !Y) {
                        let e = (0, N.A)(h.location.id, h.applicationId);
                        (0, C.cK)(e);
                    }
                }, [j, m, h, Y]),
                r.useEffect(() => {
                    j &&
                        null != m &&
                        _ !== V.y0.FOCUSED &&
                        R.A.updateFrameLayoutMode({ frameId: m, layoutMode: V.y0.FOCUSED });
                }, [j, m, _]),
                (0, i.jsx)(v.f5, {
                    value: u,
                    children: (0, i.jsxs)("div", {
                        className: B.kL,
                        children: [
                            j && null != f && (0, i.jsx)(x.A, { className: B.pU, embedId: (0, P.YY)(f) }),
                            j &&
                                null == f &&
                                null != h &&
                                (0, i.jsx)(S.A, { className: B.pU, embedId: (0, N.A)(h.location.id, d) }),
                            H && null != G && null != F && "" !== F
                                ? (0, i.jsx)("img", { className: B.j0, alt: G.name, src: F })
                                : null,
                            !M &&
                                !l &&
                                null != G &&
                                (0, i.jsx)(z, { width: n, channel: o, participants: t.participants, application: G }),
                            s || H ? null : (0, i.jsx)("div", { className: B.OB }),
                        ],
                    }),
                })
            );
        },
        LN: Y,
    },
);
