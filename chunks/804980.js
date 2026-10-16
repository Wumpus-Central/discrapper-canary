n.d(t, { Ay: () => z, LN: () => W });
var i = n(477900),
    l = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(778712),
    u = n(866665),
    d = n(834730),
    c = n(821609),
    h = n(212245),
    f = n(933958),
    g = n(62583),
    C = n(878549),
    A = n(969151),
    p = n(550151),
    m = n(902439),
    E = n(283488),
    I = n(732637),
    S = n(315206),
    _ = n(104171),
    N = n(594007),
    T = n(227042),
    M = n(793574),
    v = n(688810),
    y = n(698141),
    L = n(429913),
    x = n(625180),
    D = n(91242),
    R = n(898879),
    O = n(293495),
    w = n(267102),
    U = n(567249),
    P = n(280450),
    b = n(186111),
    j = n(287809),
    V = n(403362),
    F = n(562153),
    G = n(652215),
    H = n(165610),
    k = n(105292),
    Z = n(782660);
let B = ["embedded_background"];
function W(e) {
    let { avatarSize: t, guildId: n, channelId: l, users: r } = e,
        s = t ?? o._3.SIZE_32,
        a = (0, o.FT)(s);
    return (0, i.jsx)(_.Ay, {
        size: a,
        guildId: n,
        users: r,
        max: 4,
        renderUser: function (e) {
            if (null == e || e === _.mt) return null;
            let t = F.Ay.getName(n, l, e);
            return (0, i.jsx)(
                u.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, a), alt: t, className: Z.my }, e.id) },
                e.id,
            );
        },
    });
}
function Y(e) {
    let { participants: t, application: n, channel: r, width: u } = e,
        A = u > 400 ? 2 : +(u > 300),
        [m] = u > 400 ? [o._3.SIZE_56, 56] : u > 300 ? [o._3.SIZE_32, 32] : [o._3.SIZE_24, 24],
        E = (0, a.yK)([j.default, P.default], () =>
            Array.from(t)
                .map((e) => ((0, C.S)(e, P.default) ? null : j.default.getUser(e.userId)))
                .filter(V.Vq),
        ),
        I = (0, a.bG)([f.Ay], () =>
            f.Ay.getEmbeddedActivitiesForChannelIncludingHidden(r.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: S } = (0, v.Ay)(),
        _ = (0, h.p)(),
        N = F.Ay.getName(r.getGuildId(), r.id, E?.[0]),
        T = (0, p.vG)({ userId: j.default.getCurrentUser()?.id, channelId: r.id, application: n }) === p.Gy.CAN_JOIN,
        M = r.getGuildId() ?? void 0,
        L = l.useId(),
        x = n.id,
        D = l.useMemo(() => ({ channel: r, type: "channel" }), [r]),
        { submitting: R } = (0, y.A)({ applicationId: x, context: D, launchingComponentId: L });
    return (0, i.jsxs)("div", {
        className: Z.Yi,
        children: [
            (0, i.jsx)(W, { avatarSize: m, guildId: M, channelId: r.id, users: E }),
            (0, i.jsx)(d.E, {
                className: s()(Z.m_, { [Z.EX]: 0 === A, [Z.Y]: 1 === A }),
                variant: "text-sm/normal",
                children:
                    E.length > 1
                        ? k.intl.formatToPlainString(k.t.cpe6CK, { username: N, count: E.length - 1 })
                        : k.intl.formatToPlainString(k.t["7Uuia2"], { username: N }),
            }),
            (0, i.jsx)(d.E, {
                className: s()(Z.wx, { [Z.EX]: 0 === A, [Z.Y]: 1 === A }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: Z.Uo,
                children: T
                    ? (0, i.jsx)(c.$, {
                          text: k.intl.string(k.t["4i2vj+"]),
                          onClick: function (e) {
                              (e.stopPropagation(),
                                  null != I &&
                                      (0, g.A)({
                                          applicationId: I.applicationId,
                                          activityChannelId: r.id,
                                          locationObject: _.location,
                                          analyticsLocations: S,
                                          componentId: L,
                                      }));
                          },
                          loading: R,
                          size: 2 === A ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function z(e) {
    let { participant: t, width: n, selected: r, interactible: s, channel: o } = e,
        { analyticsLocations: u } = (0, v.Ay)(M.A.ACTIVITY_TILE),
        { applicationId: d, frameId: c } = t,
        h = (0, m.A)(),
        f = (0, a.bG)([D.A], () => (0, H.ny)(D.A.getFrame(c)), [c]),
        g = (0, w.Us)() === G.BRT.APP,
        C = null != h && (0, A.H)(h.location) === o.id && h.applicationId === d,
        p = f?.id,
        _ = f?.data.layoutMode,
        y = null != p || C,
        P = null != p ? g : C,
        [j] = (0, L.A)([d]),
        { url: V } = (0, E.A)({ applicationId: d, names: B, size: 1024 }),
        F = !r && P,
        k = !P,
        W = (0, a.bG)([b.A, U.A], () => (0, T.A)({ LayerStore: b.A, PopoutWindowStore: U.A }));
    return (
        l.useEffect(() => {
            if (F && null == p && null != h && !W) {
                let e = (0, N.A)(h.location.id, h.applicationId);
                (0, S.cK)(e);
            }
        }, [F, p, h, W]),
        l.useEffect(() => {
            F && null != p && _ !== H.y0.FOCUSED && x.A.updateFrameLayoutMode({ frameId: p, layoutMode: H.y0.FOCUSED });
        }, [F, p, _]),
        (0, i.jsx)(v.f5, {
            value: u,
            children: (0, i.jsxs)("div", {
                className: Z.kL,
                children: [
                    F && null != f && (0, i.jsx)(R.A, { className: Z.pU, embedId: (0, O.YY)(f) }),
                    F &&
                        null == f &&
                        null != h &&
                        (0, i.jsx)(I.A, { className: Z.pU, embedId: (0, N.A)(h.location.id, d) }),
                    k && null != j && null != V && "" !== V
                        ? (0, i.jsx)("img", { className: Z.j0, alt: j.name, src: V })
                        : null,
                    !y &&
                        !r &&
                        null != j &&
                        (0, i.jsx)(Y, { width: n, channel: o, participants: t.participants, application: j }),
                    s || k ? null : (0, i.jsx)("div", { className: Z.OB }),
                ],
            }),
        })
    );
}
