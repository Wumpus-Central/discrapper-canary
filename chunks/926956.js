t.d(n, { default: () => D });
var l = t(627968),
    i = t(64700),
    a = t(735438),
    s = t.n(a),
    r = t(311907),
    c = t(192308),
    o = t(935462),
    d = t(81466),
    u = t(534514),
    g = t(821609),
    A = t(939249),
    m = t(789645),
    h = t(334738),
    v = t(964486),
    C = t(915089),
    x = t(256587),
    p = t(71393),
    N = t(222823),
    E = t(954571),
    f = t(403362);
t(645034);
var j = t(661191),
    k = t(285059),
    y = t(770666),
    G = t(508654),
    _ = t(614170),
    I = t(868711),
    b = t(823508),
    P = t(988794),
    L = t(652215),
    M = t(790782),
    S = t(985018),
    T = t(420183);
function D(e) {
    let { transitionState: n, onClose: a, guildId: D } = e,
        w = (0, C.GV)(),
        B = (0, r.bG)([p.A], () => p.A.getGuild(D)),
        R = (0, y.A)(B?.id),
        U = (0, G.Ay)(D),
        V = i.useRef(N.Ay.ackMessageId(D, M.P.GUILD_EVENT)),
        O = (0, b.A)();
    return (
        i.useEffect(() => {
            U.forEach((e) => k.A.getGuildEventUserCounts(D, e.id, [])), k.A.getGuildEventsForCurrentUser(D);
        }, [U, D]),
        (0, v.Ay)(() => {
            E.default.track(L.HAw.OPEN_MODAL, { type: P.BV, guild_id: D, guild_events_count: U.length });
        }),
        i.useEffect(() => {
            s()(U)
                .map((e) => e.creator_id)
                .filter(f.Vq)
                .uniq()
                .forEach((e) => {
                    x.A.requestMember(D, e);
                });
        }, [D, U]),
        i.useEffect(() => {
            null != D && (0, h.hK)(D, M.P.GUILD_EVENT);
        }, [D]),
        (0, l.jsxs)(o.EO, {
            size: o.rI.MEDIUM,
            transitionState: n,
            "aria-labelledby": w,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, l.jsxs)(o.rQ, {
                    className: T.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, l.jsx)(d.C, { size: "md", color: "currentColor", className: T.Kk }),
                        (0, l.jsx)(u.D, {
                            id: w,
                            variant: "heading-md/semibold",
                            children:
                                U.length > 0
                                    ? S.intl.formatToPlainString(S.t.IBdqSu, { number: U.length })
                                    : S.intl.string(S.t.tlopTM),
                        }),
                        R &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: T.yF, children: "|" }),
                                    (0, l.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: () => {
                                            (0, c.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    t.e("28136"),
                                                    t.e("68587"),
                                                    t.e("342"),
                                                    t.e("95504"),
                                                ]).then(t.bind(t, 21653));
                                                return (n) => (0, l.jsx)(e, { ...n, guildId: D });
                                            }, O);
                                        },
                                        text: S.intl.string(S.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, l.jsx)(A.D, {
                            onClick: a,
                            className: T.gb,
                            "aria-label": S.intl.string(S.t.cpT0Cq),
                            children: (0, l.jsx)(m.P, { size: "md", color: "currentColor", className: T.Kk }),
                        }),
                    ],
                }),
                (0, l.jsx)(o.$m, {
                    className: T.Qs,
                    "data-migration-pending": !0,
                    children:
                        U.length > 0
                            ? U.map((e) =>
                                  (0, l.jsx)(
                                      _.A,
                                      {
                                          guildEvent: e,
                                          onActionTaken: a,
                                          isNew: null != V.current && j.default.compare(e.id, V.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, l.jsx)(I.A, { guildId: D, onClose: a }),
                }),
            ],
        })
    );
}
