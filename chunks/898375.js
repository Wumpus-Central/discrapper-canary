"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(397927),
    r = n(341915),
    o = n(18437),
    c = n(590202),
    d = n(453384),
    u = n(646764),
    h = n(545986),
    A = n(985018),
    p = n(554703);
function m(e) {
    let { quest: t, questDescription: n, completedRatio: m, minimizeFrame: g, onClose: _ } = e,
        f = (0, o.Ut)(),
        x = s.useCallback(() => {
            f({
                questId: t.id,
                questContent: r.uF.RUNNING_ACTIVITY,
                questContentCTA: c.Cy.LEARN_MORE,
                sourceQuestContent: r.uF.RUNNING_ACTIVITY,
            }),
                (0, h.navigateToQuestHome)({ fromContent: r.uF.RUNNING_ACTIVITY, questId: t.id }),
                g(),
                _();
        }, [t.id, f, g, _]);
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [
            (0, i.jsxs)("div", {
                className: p.wx,
                children: [
                    (0, i.jsx)(l.EYj, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: A.intl.formatToPlainString(A.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(a.DUT, {
                        className: p.b,
                        "aria-label": A.intl.string(A.t.cpT0Cq),
                        onClick: _,
                        children: (0, i.jsx)(a.PGe, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: p.rf,
                children: [
                    (0, i.jsx)(d.A, {
                        size: 48,
                        style: "default",
                        percentComplete: m,
                        children: (0, i.jsx)(u.A, {
                            quest: t,
                            questContent: r.uF.RUNNING_ACTIVITY,
                            sourceQuestContent: r.uF.RUNNING_ACTIVITY,
                            autoplay: !1,
                            className: p.Qq,
                        }),
                    }),
                    (0, i.jsx)(l.EYj, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)(l.$nd, {
                fullWidth: !0,
                text: A.intl.string(A.t.LLLLPD),
                variant: "secondary",
                size: "md",
                onClick: x,
            }),
        ],
    });
}
