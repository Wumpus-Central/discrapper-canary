t.d(n, { default: () => b });
var i = t(627968),
    l = t(64700),
    a = t(735438),
    r = t.n(a),
    s = t(311907),
    c = t(397927),
    o = t(334738),
    d = t(964486),
    u = t(915089),
    g = t(256587),
    A = t(71393),
    h = t(222823),
    m = t(954571),
    x = t(403362);
t(645034);
var C = t(661191),
    v = t(285059),
    p = t(770666),
    N = t(508654),
    E = t(614170),
    f = t(868711),
    j = t(823508),
    k = t(988794),
    y = t(652215),
    G = t(790782),
    _ = t(985018),
    I = t(658215);
function b(e) {
    let { transitionState: n, onClose: a, guildId: b } = e,
        T = (0, u.GV)(),
        P = (0, s.bG)([A.A], () => A.A.getGuild(b)),
        L = (0, p.A)(P?.id),
        S = (0, N.Ay)(b),
        M = l.useRef(h.Ay.ackMessageId(b, G.P.GUILD_EVENT)),
        w = (0, j.A)();
    return (
        l.useEffect(() => {
            S.forEach((e) => v.A.getGuildEventUserCounts(b, e.id, [])), v.A.getGuildEventsForCurrentUser(b);
        }, [S, b]),
        (0, d.Ay)(() => {
            m.default.track(y.HAw.OPEN_MODAL, { type: k.BV, guild_id: b, guild_events_count: S.length });
        }),
        l.useEffect(() => {
            r()(S)
                .map((e) => e.creator_id)
                .filter(x.Vq)
                .uniq()
                .forEach((e) => {
                    g.A.requestMember(b, e);
                });
        }, [b, S]),
        l.useEffect(() => {
            null != b && (0, o.hK)(b, G.P.GUILD_EVENT);
        }, [b]),
        (0, i.jsxs)(c.EOs, {
            size: c.rIJ.MEDIUM,
            transitionState: n,
            "aria-labelledby": T,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, i.jsxs)(c.rQ0, {
                    className: I.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, i.jsx)(c.CTc, { size: "md", color: "currentColor", className: I.Kk }),
                        (0, i.jsx)(c.Heading, {
                            id: T,
                            variant: "heading-md/semibold",
                            children:
                                S.length > 0
                                    ? _.intl.formatToPlainString(_.t.IBdqSu, { number: S.length })
                                    : _.intl.string(_.t.tlopTM),
                        }),
                        L &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: I.yF, children: "|" }),
                                    (0, i.jsx)(c.Button, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: () => {
                                            (0, c.mMO)(async () => {
                                                let { default: e } = await Promise.all([
                                                    t.e("68587"),
                                                    t.e("28136"),
                                                    t.e("342"),
                                                    t.e("70669"),
                                                ]).then(t.bind(t, 21653));
                                                return (n) => (0, i.jsx)(e, { ...n, guildId: b });
                                            }, w);
                                        },
                                        text: _.intl.string(_.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, i.jsx)(c.DUT, {
                            onClick: a,
                            className: I.gb,
                            "aria-label": _.intl.string(_.t.cpT0Cq),
                            children: (0, i.jsx)(c.PGe, { size: "md", color: "currentColor", className: I.Kk }),
                        }),
                    ],
                }),
                (0, i.jsx)(c.$mQ, {
                    className: I.Qs,
                    "data-migration-pending": !0,
                    children:
                        S.length > 0
                            ? S.map((e) =>
                                  (0, i.jsx)(
                                      E.A,
                                      {
                                          guildEvent: e,
                                          onActionTaken: a,
                                          isNew: null != M.current && C.default.compare(e.id, M.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, i.jsx)(f.A, { guildId: b, onClose: a }),
                }),
            ],
        })
    );
}
