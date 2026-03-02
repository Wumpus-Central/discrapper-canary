n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    a = n(397927),
    s = n(341915),
    o = n(890687),
    d = n(18437),
    c = n(590202),
    u = n(453384),
    A = n(646764),
    h = n(545986),
    _ = n(985018),
    m = n(554703);
function p(e) {
    let { quest: t, questDescription: n, minimizeFrame: p, onClose: g } = e,
        E = (0, d.Ut)(),
        { completedRatio: I } = (0, o.O9)(t),
        f = r.useCallback(() => {
            E({
                questId: t.id,
                questContent: s.uF.RUNNING_ACTIVITY,
                questContentCTA: c.Cy.LEARN_MORE,
                sourceQuestContent: s.uF.RUNNING_ACTIVITY,
            }),
                (0, h.navigateToQuestHome)({ fromContent: s.uF.RUNNING_ACTIVITY, questId: t.id }),
                p(),
                g();
        }, [t.id, E, p, g]);
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [
            (0, i.jsxs)("div", {
                className: m.wx,
                children: [
                    (0, i.jsx)(l.EYj, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: _.intl.formatToPlainString(_.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(a.DUT, {
                        className: m.b,
                        "aria-label": _.intl.string(_.t.cpT0Cq),
                        onClick: g,
                        children: (0, i.jsx)(a.PGe, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: m.rf,
                children: [
                    (0, i.jsx)(u.A, {
                        size: 48,
                        style: "default",
                        percentComplete: I,
                        children: (0, i.jsx)(A.A, {
                            quest: t,
                            questContent: s.uF.RUNNING_ACTIVITY,
                            sourceQuestContent: s.uF.RUNNING_ACTIVITY,
                            autoplay: !1,
                            className: m.Qq,
                        }),
                    }),
                    (0, i.jsx)(l.EYj, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)(l.$nd, {
                fullWidth: !0,
                text: _.intl.string(_.t.LLLLPD),
                variant: "secondary",
                size: "md",
                onClick: f,
            }),
        ],
    });
}
