"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(397927),
    r = n(915089),
    o = n(341915),
    c = n(18437),
    d = n(590202),
    u = n(453384),
    h = n(646764),
    A = n(545986),
    m = n(985018),
    _ = n(384441);
function p(e) {
    let { quest: t, questDescription: n, completedRatio: p, minimizeFrame: g, onClose: f } = e,
        x = (0, r.GV)(),
        E = (0, c.Ut)(),
        C = s.useCallback(() => {
            E({
                questId: t.id,
                questContent: o.uF.RUNNING_ACTIVITY,
                questContentCTA: d.Cy.LEARN_MORE,
                sourceQuestContent: o.uF.RUNNING_ACTIVITY,
            }),
                (0, A.navigateToQuestHome)({ fromContent: o.uF.RUNNING_ACTIVITY, questId: t.id }),
                g(),
                f();
        }, [t.id, E, g, f]);
    return (0, i.jsxs)(a.lGe, {
        className: _.kL,
        "aria-labelledby": x,
        children: [
            (0, i.jsxs)("div", {
                className: _.wx,
                children: [
                    (0, i.jsx)(l.EYj, {
                        id: x,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: m.intl.formatToPlainString(m.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(a.DUT, {
                        className: _.b,
                        "aria-label": m.intl.string(m.t.cpT0Cq),
                        onClick: f,
                        children: (0, i.jsx)(a.PGe, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: _.rf,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(u.A, {
                            size: 48,
                            percentComplete: p,
                            children: (0, i.jsx)(h.A, {
                                fullWidth: !0,
                                quest: t,
                                questContent: o.uF.RUNNING_ACTIVITY,
                                sourceQuestContent: o.uF.RUNNING_ACTIVITY,
                                autoplay: !1,
                            }),
                        }),
                    }),
                    (0, i.jsx)(l.EYj, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)(l.$nd, {
                autoFocus: !0,
                fullWidth: !0,
                text: m.intl.string(m.t["th2+0j"]),
                variant: "secondary",
                size: "md",
                onClick: C,
            }),
        ],
    });
}
