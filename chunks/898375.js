n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    l = n(158954),
    a = n(397927),
    s = n(341915),
    o = n(18437),
    d = n(590202),
    c = n(453384),
    u = n(646764),
    A = n(545986),
    h = n(985018),
    _ = n(554703);
function m(e) {
    let { quest: t, questDescription: n, completedRatio: m, minimizeFrame: p, onClose: g } = e,
        E = (0, o.Ut)(),
        I = r.useCallback(() => {
            E({
                questId: t.id,
                questContent: s.uF.RUNNING_ACTIVITY,
                questContentCTA: d.Cy.LEARN_MORE,
                sourceQuestContent: s.uF.RUNNING_ACTIVITY,
            }),
                (0, A.navigateToQuestHome)({ fromContent: s.uF.RUNNING_ACTIVITY, questId: t.id }),
                p(),
                g();
        }, [t.id, E, p, g]);
    return (0, i.jsxs)("div", {
        className: _.kL,
        children: [
            (0, i.jsxs)("div", {
                className: _.wx,
                children: [
                    (0, i.jsx)(l.EYj, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: h.intl.formatToPlainString(h.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(a.DUT, {
                        className: _.b,
                        "aria-label": h.intl.string(h.t.cpT0Cq),
                        onClick: g,
                        children: (0, i.jsx)(a.PGe, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: _.rf,
                children: [
                    (0, i.jsx)(c.A, {
                        size: 48,
                        style: "default",
                        percentComplete: m,
                        children: (0, i.jsx)(u.A, {
                            quest: t,
                            questContent: s.uF.RUNNING_ACTIVITY,
                            sourceQuestContent: s.uF.RUNNING_ACTIVITY,
                            autoplay: !1,
                            className: _.Qq,
                        }),
                    }),
                    (0, i.jsx)(l.EYj, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)(l.$nd, {
                fullWidth: !0,
                text: h.intl.string(h.t.LLLLPD),
                variant: "secondary",
                size: "md",
                onClick: I,
            }),
        ],
    });
}
