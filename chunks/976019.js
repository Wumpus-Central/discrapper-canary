s.d(t, { A: () => x });
var n = s(477900),
    i = s(582128),
    l = s(17928),
    r = s(885574),
    a = s(661531),
    o = s(834730),
    c = s(287809),
    m = s(801365),
    d = s(52093),
    g = s(190107),
    f = s(375708),
    u = s(457182);
function h() {
    let e = i.useCallback(() => {}, []);
    return (0, n.jsxs)("div", {
        className: u.Jj,
        children: [
            (0, n.jsx)(r.CircleInformationIcon, { size: "sm", color: a.A.colors.TEXT_LINK, className: u.qf }),
            (0, n.jsxs)("div", {
                className: u.e4,
                children: [
                    (0, n.jsx)(o.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: f.intl.string(f.t["+pgFbW"]),
                    }),
                    (0, n.jsx)(o.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: f.intl.format(f.t.Uk4lV5, { onLearnMore: e }),
                    }),
                ],
            }),
        ],
    });
}
let x = function (e) {
    let { quest: t, hasAlreadyLinked: s, onClickGameTitle: r, selectedAuthMethod: a } = e,
        o = t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME,
        u = t.userStatus?.completedAt != null,
        x = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        p = i.useMemo(
            () => [
                {
                    renderContent: () => {
                        let e = t.config.messages.gameTitle;
                        if (!0 === s)
                            return (0, n.jsx)(d.L5, {
                                children: f.intl.formatToPlainString(f.t.C45G4B, { gameTitle: e }),
                            });
                        let i = a === g.qh.WEB,
                            l =
                                null == r
                                    ? f.intl.formatToPlainString(i ? f.t.j3155Y : f.t.tNmoIp, { gameTitle: e })
                                    : f.intl.format(i ? f.t["4+3zP/"] : f.t.vDLUD3, {
                                          gameTitle: e,
                                          onClickGameTitle: r,
                                      });
                        return (0, n.jsx)(d.L5, { children: l });
                    },
                    isComplete: (s ?? !1) || u,
                },
                {
                    renderContent: () =>
                        (0, n.jsx)(d.L5, {
                            children:
                                !0 !== s || u || null == r
                                    ? f.intl.formatToPlainString(f.t.nP1hFd, {
                                          objective: o?.messages.taskDescription ?? "",
                                          gameTitle: t.config.messages.gameTitle,
                                          rewardName: (0, m.mq)(t.config, x),
                                      })
                                    : f.intl.format(f.t.GLZnbq, {
                                          objective: o?.messages.taskDescription ?? "",
                                          gameTitle: t.config.messages.gameTitle,
                                          rewardName: (0, m.mq)(t.config, x),
                                          onClickGameTitle: r,
                                      }),
                        }),
                    isComplete: u,
                },
            ],
            [a, s, u, t.config, o, r, x],
        );
    return (0, n.jsx)(d.Ay, {
        heading: f.intl.string(f.t.dc9w4N),
        steps: p,
        children: !0 === s && !u && (0, n.jsx)(h, {}),
    });
};
