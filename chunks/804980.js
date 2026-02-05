n.d(t, { Ay: () => U, LN: () => w });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(212245),
    u = n(933958),
    h = n(447031),
    m = n(878549),
    A = n(969151),
    p = n(550151),
    g = n(902439),
    f = n(283488),
    _ = n(732637),
    E = n(315206),
    C = n(104171),
    x = n(594007),
    S = n(227042),
    T = n(793574),
    I = n(688810),
    N = n(698141),
    v = n(429913),
    y = n(87001),
    b = n(961350),
    R = n(186111),
    j = n(287809),
    M = n(403362),
    D = n(562153),
    O = n(985018),
    L = n(677406);
let P = ["embedded_background"];
function w(e) {
    let { avatarSize: t, guildId: n, channelId: l, users: a } = e,
        s = t ?? c._3J.SIZE_32,
        r = (0, c.FT9)(s);
    return (0, i.jsx)(C.Ay, {
        size: r,
        guildId: n,
        users: a,
        max: 4,
        renderUser: (e) => {
            if (null == e || e === C.mt) return null;
            let t = D.Ay.getName(n, l, e);
            return (0, i.jsx)(
                o.m_,
                { text: t, children: (0, i.jsx)("img", { src: e.getAvatarURL(n, r), alt: t, className: L.my }, e.id) },
                e.id,
            );
        },
    });
}
function k(e) {
    let { participants: t, application: n, channel: a, width: o } = e,
        A = o > 400 ? 2 : +(o > 300),
        [g] = o > 400 ? [c._3J.SIZE_56, 56] : o > 300 ? [c._3J.SIZE_32, 32] : [c._3J.SIZE_24, 24],
        f = (0, r.yK)([j.default, b.default], () =>
            Array.from(t)
                .map((e) => ((0, m.S)(e, b.default) ? null : j.default.getUser(e.userId)))
                .filter(M.Vq),
        ),
        _ = (0, r.bG)(
            [u.Ay],
            () =>
                u.Ay.getEmbeddedActivitiesForChannel(a.id).find((e) => e.applicationId === n.id) ??
                u.Ay.getEmbeddedActivitiesForStartingChannel(a.id).find((e) => e.applicationId === n.id),
        ),
        { analyticsLocations: E } = (0, I.Ay)(),
        C = (0, d.p)(),
        x = D.Ay.getName(a.getGuildId(), a.id, f?.[0]),
        S = (0, p.vG)({ userId: j.default.getCurrentUser()?.id, channelId: a.id, application: n }) === p.Gy.CAN_JOIN,
        T = a.getGuildId() ?? void 0,
        v = l.useId(),
        y = n.id,
        R = l.useMemo(() => ({ channel: a, type: "channel" }), [a]),
        { submitting: P } = (0, N.A)({ applicationId: y, context: R, launchingComponentId: v });
    return (0, i.jsxs)("div", {
        className: L.Yi,
        children: [
            (0, i.jsx)(w, { avatarSize: g, guildId: T, channelId: a.id, users: f }),
            (0, i.jsx)(c.Text, {
                className: s()(L.m_, { [L.EX]: 0 === A, [L.Y]: 1 === A }),
                variant: "text-sm/normal",
                children:
                    f.length > 1
                        ? O.intl.formatToPlainString(O.t.cpe6CK, { username: x, count: f.length - 1 })
                        : O.intl.formatToPlainString(O.t["7Uuia2"], { username: x }),
            }),
            (0, i.jsx)(c.Text, {
                className: s()(L.wx, { [L.EX]: 0 === A, [L.Y]: 1 === A }),
                variant: "text-sm/normal",
                children: n.name,
            }),
            (0, i.jsx)("div", {
                className: L.Uo,
                children: S
                    ? (0, i.jsx)(c.Button, {
                          text: O.intl.string(O.t["4i2vj+"]),
                          onClick: function (e) {
                              e.stopPropagation(),
                                  null != _ &&
                                      (0, h.A)({
                                          applicationId: _.applicationId,
                                          activityChannelId: a.id,
                                          locationObject: C.location,
                                          analyticsLocations: E,
                                          componentId: v,
                                      });
                          },
                          loading: P,
                          size: 2 === A ? "md" : "sm",
                          variant: "overlay-primary",
                      })
                    : null,
            }),
        ],
    });
}
function U(e) {
    let { participant: t, width: n, selected: a, interactible: s, channel: o } = e,
        { analyticsLocations: c } = (0, I.Ay)(T.A.ACTIVITY_TILE),
        { applicationId: d } = t,
        u = (0, g.A)(),
        h = null != u && (0, A.H)(u.location) === o.id && u.applicationId === d,
        [m] = (0, v.A)([d]),
        { url: p } = (0, f.A)({ applicationId: d, names: P, size: 1024 }),
        C = !a && h,
        N = !h,
        b = !h && !a,
        j = (0, r.bG)([R.A, y.A], () => (0, S.A)({ LayerStore: R.A, PopoutWindowStore: y.A }));
    return (
        l.useEffect(() => {
            if (C && null != u && !j) {
                let e = (0, x.A)(u.location.id, u.applicationId);
                (0, E.cK)(e);
            }
        }, [C, u, j]),
        (0, i.jsx)(I.f5, {
            value: c,
            children: (0, i.jsxs)("div", {
                className: L.kL,
                children: [
                    C && null != u && (0, i.jsx)(_.A, { className: L.pU, embedId: (0, x.A)(u.location.id, d) }),
                    N && null != m && null != p && "" !== p
                        ? (0, i.jsx)("img", { className: L.j0, alt: m.name, src: p })
                        : null,
                    b &&
                        null != m &&
                        (0, i.jsx)(k, { width: n, channel: o, participants: t.participants, application: m }),
                    s || N ? null : (0, i.jsx)("div", { className: L.OB }),
                ],
            }),
        })
    );
}
