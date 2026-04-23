n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(834730),
    a = n(821609),
    r = n(305866),
    o = n(939249),
    d = n(789645),
    c = n(915089),
    u = n(341915),
    h = n(18437),
    A = n(590202),
    _ = n(453384),
    m = n(646764),
    g = n(545986),
    p = n(985018),
    f = n(571038);
function E(e) {
    let { quest: t, questDescription: n, completedRatio: E, minimizeFrame: x, onClose: I } = e,
        C = (0, c.GV)(),
        b = (0, h.Ut)(),
        N = l.useCallback(() => {
            b({
                questId: t.id,
                questContent: u.uF.RUNNING_ACTIVITY,
                questContentCTA: A.Cy.LEARN_MORE,
                sourceQuestContent: u.uF.RUNNING_ACTIVITY,
            }),
                (0, g.navigateToQuestHome)({ fromContent: u.uF.RUNNING_ACTIVITY, questId: t.id }),
                x(),
                I();
        }, [t.id, b, x, I]);
    return (0, i.jsxs)(r.l, {
        className: f.kL,
        "aria-labelledby": C,
        children: [
            (0, i.jsxs)("div", {
                className: f.wx,
                children: [
                    (0, i.jsx)(s.E, {
                        id: C,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: p.intl.formatToPlainString(p.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(o.D, {
                        className: f.b,
                        "aria-label": p.intl.string(p.t.cpT0Cq),
                        onClick: I,
                        children: (0, i.jsx)(d.P, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: f.rf,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(_.A, {
                            size: 48,
                            percentComplete: E,
                            children: (0, i.jsx)(m.A, {
                                fullWidth: !0,
                                quest: t,
                                questContent: u.uF.RUNNING_ACTIVITY,
                                sourceQuestContent: u.uF.RUNNING_ACTIVITY,
                                autoplay: !1,
                            }),
                        }),
                    }),
                    (0, i.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)(a.$, {
                autoFocus: !0,
                fullWidth: !0,
                text: p.intl.string(p.t["th2+0j"]),
                variant: "secondary",
                size: "md",
                onClick: N,
            }),
        ],
    });
}
