n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(397927),
    r = n(915089),
    o = n(341915),
    c = n(18437),
    d = n(590202),
    u = n(453384),
    h = n(646764),
    A = n(545986),
    _ = n(985018),
    m = n(292142);
function g(e) {
    let { quest: t, questDescription: n, completedRatio: g, minimizeFrame: p, onClose: f } = e,
        x = (0, r.GV)(),
        E = (0, c.Ut)(),
        I = l.useCallback(() => {
            E({
                questId: t.id,
                questContent: o.uF.RUNNING_ACTIVITY,
                questContentCTA: d.Cy.LEARN_MORE,
                sourceQuestContent: o.uF.RUNNING_ACTIVITY,
            }),
                (0, A.navigateToQuestHome)({ fromContent: o.uF.RUNNING_ACTIVITY, questId: t.id }),
                p(),
                f();
        }, [t.id, E, p, f]);
    return (0, i.jsxs)(a.lGe, {
        className: m.kL,
        "aria-labelledby": x,
        children: [
            (0, i.jsxs)("div", {
                className: m.wx,
                children: [
                    (0, i.jsx)(s.EYj, {
                        id: x,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: _.intl.formatToPlainString(_.t.EAYZAr, { questName: t.config.messages.questName }),
                    }),
                    (0, i.jsx)(a.DUT, {
                        className: m.b,
                        "aria-label": _.intl.string(_.t.cpT0Cq),
                        onClick: f,
                        children: (0, i.jsx)(a.PGe, { size: "sm", color: "currentColor" }),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: m.rf,
                children: [
                    (0, i.jsx)("div", {
                        children: (0, i.jsx)(u.A, {
                            size: 48,
                            percentComplete: g,
                            children: (0, i.jsx)(h.A, {
                                fullWidth: !0,
                                quest: t,
                                questContent: o.uF.RUNNING_ACTIVITY,
                                sourceQuestContent: o.uF.RUNNING_ACTIVITY,
                                autoplay: !1,
                            }),
                        }),
                    }),
                    (0, i.jsx)(s.EYj, { variant: "text-sm/normal", color: "text-muted", children: n }),
                ],
            }),
            (0, i.jsx)(s.$nd, {
                autoFocus: !0,
                fullWidth: !0,
                text: _.intl.string(_.t["th2+0j"]),
                variant: "secondary",
                size: "md",
                onClick: I,
            }),
        ],
    });
}
