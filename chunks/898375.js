"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(397927),
    a = n(341915),
    o = n(18437),
    c = n(590202),
    d = n(453384),
    u = n(646764),
    h = n(545986),
    A = n(985018),
    m = n(554703);
function p(e) {
    let { quest: t, questDescription: n, completedRatio: p, minimizeFrame: g, onClose: _ } = e,
        f = (0, o.Ut)(),
        x = s.useCallback(() => {
            f({
                questId: t.id,
                questContent: a.uF.RUNNING_ACTIVITY,
                questContentCTA: c.Cy.LEARN_MORE,
                sourceQuestContent: a.uF.RUNNING_ACTIVITY,
            }),
                (0, h.navigateToQuestHome)({ fromContent: a.uF.RUNNING_ACTIVITY, questId: t.id }),
                g(),
                _();
        }, [t.id, f, g, _]);
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [
            (0, i.jsxs)("div", {
                className: m.wx,
                children: [
                    (0, i.jsx)(l.EYj, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: A.intl.formatToPlainString(A.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(r.DUT, {
                        className: m.b,
                        "aria-label": A.intl.string(A.t.cpT0Cq),
                        onClick: _,
                        children: (0, i.jsx)(r.PGe, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: m.rf,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(d.A, {
                            size: 48,
                            percentComplete: p,
                            children: (0, i.jsx)(u.A, {
                                fullWidth: !0,
                                quest: t,
                                questContent: a.uF.RUNNING_ACTIVITY,
                                sourceQuestContent: a.uF.RUNNING_ACTIVITY,
                                autoplay: !1,
                            }),
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
