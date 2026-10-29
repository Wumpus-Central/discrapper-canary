n.d(t, { Ay: () => J, LN: () => Y });
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
    A = n(878549),
    p = n(969151),
    m = n(550151),
    E = n(902439),
    I = n(283488),
    S = n(732637),
    C = n(315206),
    _ = n(104171),
    N = n(594007),
    T = n(227042),
    v = n(793574),
    y = n(688810),
    M = n(698141),
    D = n(429913),
    R = n(625180),
    O = n(91242),
    x = n(898879),
    L = n(293495),
    w = n(267102),
    U = n(567249),
    P = n(280450),
    b = n(186111),
    G = n(287809),
    F = n(403362),
    j = n(562153),
    k = n(652215),
    V = n(165610),
    H = n(105292),
    B = n(782660);
let W = ["embedded_background"];
function Y(e) {
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
            let t = j.Ay.getName(n, l, e);
            return (0, i.jsx)(
                u.m,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, a), alt: t, className: B.my }, e.id) },
                e.id,
            );
        },
    });
}
function z(e) {
    let { participants: t, application: n, channel: r, width: u } = e,
        p = u > 400 ? 2 : +(u > 300),
        [E] = u > 400 ? [o._3.SIZE_56, 56] : u > 300 ? [o._3.SIZE_32, 32] : [o._3.SIZE_24, 24],
        I = (0, a.yK)([G.default, P.default], () =>
            Array.from(t)
                .map((e) => ((0, A.S)(e, P.default) ? null : G.default.getUser(e.userId)))
                .filter(F.Vq),
        ),
        S = (0, a.bG)([f.Ay], () =>
            f.Ay.getEmbeddedActivitiesForChannelIncludingHidden(r.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: C } = (0, y.Ay)(),
        _ = (0, h.p)(),
        N = j.Ay.getName(r.getGuildId(), r.id, I?.[0]),
        T = (0, m.vG)({ userId: G.default.getCurrentUser()?.id, channelId: r.id, application: n }) === m.Gy.CAN_JOIN,
        v = r.getGuildId() ?? void 0,
        D = l.useId(),
        R = n.id,
        O = l.useMemo(() => ({ channel: r, type: "channel" }), [r]),
        { submitting: x } = (0, M.A)({ applicationId: R, context: O, launchingComponentId: D });
    return (0, i.jsxs)("div", {
        className: B.Yi,
        children: [
            (0, i.jsx)(Y, { avatarSize: E, guildId: v, channelId: r.id, users: I }),
            (0, i.jsx)(d.E, {
                className: s()(B.m_, { [B.EX]: 0 === p, [B.Y]: 1 === p }),
                variant: "text-sm/normal",
                children:
                    I.length > 1
                        ? H.intl.formatToPlainString(H.t.cpe6CK, { username: N, count: I.length - 1 })
                        : H.intl.formatToPlainString(H.t["7Uuia2"], { username: N }),
            }),
            (0, i.jsx)(d.E, {
                className: s()(B.wx, { [B.EX]: 0 === p, [B.Y]: 1 === p }),
                variant: "text-sm/normal",
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
                                          activityChannelId: r.id,
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
function J(e) {
    let { participant: t, width: n, selected: r, interactible: s, channel: o } = e,
        { analyticsLocations: u } = (0, y.Ay)(v.A.ACTIVITY_TILE),
        { applicationId: d, frameId: c } = t,
        h = (0, E.A)(),
        f = (0, a.bG)([O.A], () => (0, V.ny)(O.A.getFrame(c)), [c]),
        g = (0, w.Us)() === k.BRT.APP,
        A = null != h && (0, p.H)(h.location) === o.id && h.applicationId === d,
        m = f?.id,
        _ = f?.data.layoutMode,
        M = null != m || A,
        P = null != m ? g : A,
        [G] = (0, D.A)([d]),
        { url: F } = (0, I.A)({ applicationId: d, names: W, size: 1024 }),
        j = !r && P,
        H = !P,
        Y = (0, a.bG)([b.A, U.A], () => (0, T.A)({ LayerStore: b.A, PopoutWindowStore: U.A }));
    return (
        l.useEffect(() => {
            if (j && null == m && null != h && !Y) {
                let e = (0, N.A)(h.location.id, h.applicationId);
                (0, C.cK)(e);
            }
        }, [j, m, h, Y]),
        l.useEffect(() => {
            j && null != m && _ !== V.y0.FOCUSED && R.A.updateFrameLayoutMode({ frameId: m, layoutMode: V.y0.FOCUSED });
        }, [j, m, _]),
        (0, i.jsx)(y.f5, {
            value: u,
            children: (0, i.jsxs)("div", {
                className: B.kL,
                children: [
                    j && null != f && (0, i.jsx)(x.A, { className: B.pU, embedId: (0, L.YY)(f) }),
                    j &&
                        null == f &&
                        null != h &&
                        (0, i.jsx)(S.A, { className: B.pU, embedId: (0, N.A)(h.location.id, d) }),
                    H && null != G && null != F && "" !== F
                        ? (0, i.jsx)("img", { className: B.j0, alt: G.name, src: F })
                        : null,
                    !M &&
                        !r &&
                        null != G &&
                        (0, i.jsx)(z, { width: n, channel: o, participants: t.participants, application: G }),
                    s || H ? null : (0, i.jsx)("div", { className: B.OB }),
                ],
            }),
        })
    );
}
