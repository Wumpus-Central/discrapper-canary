i.d(t, { A: () => T });
var n = i(477900),
    s = i(582128),
    a = i(17928),
    r = i(885574),
    l = i(661531),
    o = i(834730),
    c = i(287809),
    m = i(975571),
    g = i(801365),
    d = i(52093),
    f = i(190107),
    u = i(652215),
    h = i(375708),
    x = i(475169);
function p(e) {
    let { gameTitle: t, showConfirmationWindow: i } = e,
        a = s.useCallback(() => {
            window.open(m.A.getArticleURL(u.MVz.QUESTS_LEARN_MORE));
        }, []);
    return (0, n.jsxs)("div", {
        className: x.lm,
        children: [
            (0, n.jsx)(r.CircleInformationIcon, { size: "sm", color: l.A.colors.TEXT_LINK, className: x.EP }),
            (0, n.jsxs)("div", {
                className: x.qZ,
                children: [
                    (0, n.jsx)(o.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: h.intl.formatToPlainString(h.t.VaiGaz, { gameTitle: t }),
                    }),
                    i &&
                        (0, n.jsx)(o.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: h.intl.format(h.t.GBjQwf, { onLearnMore: a }),
                        }),
                ],
            }),
        ],
    });
}
let T = function (e) {
    let { quest: t, hasAlreadyLinked: i, onClickGameTitle: r, selectedAuthMethod: l } = e,
        o = t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME,
        m = t.userStatus?.completedAt != null,
        u = (0, a.bG)([c.default], () => c.default.getCurrentUser()),
        x = s.useMemo(
            () => [
                {
                    renderContent: () => {
                        let e = t.config.messages.gameTitle;
                        if (!0 === i)
                            return (0, n.jsx)(d.L5, {
                                children: h.intl.formatToPlainString(h.t.C45G4B, { gameTitle: e }),
                            });
                        let s = l === f.qh.WEB,
                            a =
                                null == r
                                    ? h.intl.formatToPlainString(s ? h.t.j3155Y : h.t.tNmoIp, { gameTitle: e })
                                    : h.intl.format(s ? h.t["4+3zP/"] : h.t.vDLUD3, {
                                          gameTitle: e,
                                          onClickGameTitle: r,
                                      });
                        return (0, n.jsx)(d.L5, { children: a });
                    },
                    isComplete: (i ?? !1) || m,
                },
                {
                    renderContent: () =>
                        (0, n.jsx)(d.L5, {
                            children:
                                !0 !== i || m || null == r
                                    ? h.intl.formatToPlainString(h.t.nP1hFd, {
                                          objective: o?.messages.taskDescription ?? "",
                                          gameTitle: t.config.messages.gameTitle,
                                          rewardName: (0, g.mq)(t.config, u),
                                      })
                                    : h.intl.format(h.t.GLZnbq, {
                                          objective: o?.messages.taskDescription ?? "",
                                          gameTitle: t.config.messages.gameTitle,
                                          rewardName: (0, g.mq)(t.config, u),
                                          onClickGameTitle: r,
                                      }),
                        }),
                    isComplete: m,
                },
            ],
            [l, i, m, t.config, o, r, u],
        );
    return (0, n.jsx)(d.Ay, {
        heading: h.intl.string(h.t.dc9w4N),
        steps: x,
        children: !m && (0, n.jsx)(p, { gameTitle: t.config.messages.gameTitle, showConfirmationWindow: !0 === i }),
    });
};
