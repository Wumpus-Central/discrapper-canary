var i = s(477900),
    n = s(582128),
    l = s(855986),
    r = s(885574),
    a = s(646514),
    o = s(834730),
    c = s(287809),
    d = s(975571),
    m = s(417404),
    u = s(52093),
    x = s(221596),
    g = s(652215),
    h = s(792996),
    f = s(475169);
function j(e) {
    let { gameTitle: t, showConfirmationWindow: s } = e,
        l = n.useCallback(() => {
            window.open(d.A.getArticleURL(g.MVz.QUESTS_LEARN_MORE));
        }, []);
    return (0, i.jsxs)("div", {
        className: f.lm,
        children: [
            (0, i.jsx)(r.CircleInformationIcon, { size: "sm", color: a.A.colors.TEXT_LINK, className: f.EP }),
            (0, i.jsxs)("div", {
                className: f.qZ,
                children: [
                    (0, i.jsx)(o.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: h.intl.formatToPlainString(h.t.VaiGaz, { gameTitle: t }),
                    }),
                    s &&
                        (0, i.jsx)(o.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: h.intl.format(h.t.GBjQwf, { onLearnMore: l }),
                        }),
                ],
            }),
        ],
    });
}
s.d(
    t,
    {},
    {
        A: function (e) {
            let { quest: t, hasAlreadyLinked: s, onClickGameTitle: r, selectedAuthMethod: a } = e,
                o = t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME,
                d = t.userStatus?.completedAt != null,
                g = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
                f = n.useMemo(
                    () => [
                        {
                            renderContent: () => {
                                let e = t.config.messages.gameTitle;
                                if (!0 === s)
                                    return (0, i.jsx)(u.L, {
                                        children: h.intl.formatToPlainString(h.t.C45G4B, { gameTitle: e }),
                                    });
                                let n = a === x.qh.WEB,
                                    l =
                                        null == r
                                            ? h.intl.formatToPlainString(n ? h.t.j3155Y : h.t.tNmoIp, { gameTitle: e })
                                            : h.intl.format(n ? h.t["4+3zP/"] : h.t.vDLUD3, {
                                                  gameTitle: e,
                                                  onClickGameTitle: r,
                                              });
                                return (0, i.jsx)(u.L, { children: l });
                            },
                            isComplete: (s ?? !1) || d,
                        },
                        {
                            renderContent: () =>
                                (0, i.jsx)(u.L, {
                                    children:
                                        !0 !== s || d || null == r
                                            ? h.intl.formatToPlainString(h.t.nP1hFd, {
                                                  objective: o?.messages.taskDescription ?? "",
                                                  gameTitle: t.config.messages.gameTitle,
                                                  rewardName: (0, m.mq)(t.config, g),
                                              })
                                            : h.intl.format(h.t.GLZnbq, {
                                                  objective: o?.messages.taskDescription ?? "",
                                                  gameTitle: t.config.messages.gameTitle,
                                                  rewardName: (0, m.mq)(t.config, g),
                                                  onClickGameTitle: r,
                                              }),
                                }),
                            isComplete: d,
                        },
                    ],
                    [a, s, d, t.config, o, r, g],
                );
            return (0, i.jsx)(u.A, {
                heading: h.intl.string(h.t.dc9w4N),
                steps: f,
                children:
                    !d && (0, i.jsx)(j, { gameTitle: t.config.messages.gameTitle, showConfirmationWindow: !0 === s }),
            });
        },
    },
);
