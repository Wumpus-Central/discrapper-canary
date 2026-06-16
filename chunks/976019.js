s.d(t, { A: () => x });
var i = s(627968),
    n = s(64700),
    l = s(17928),
    r = s(885574),
    a = s(661531),
    o = s(834730),
    c = s(287809),
    m = s(801365),
    d = s(52093),
    g = s(190107),
    u = s(375708),
    f = s(459878);
function h() {
    let e = n.useCallback(() => {}, []);
    return (0, i.jsxs)("div", {
        className: f.Jj,
        children: [
            (0, i.jsx)(r.m, { size: "sm", color: a.A.colors.TEXT_LINK, className: f.qf }),
            (0, i.jsxs)("div", {
                className: f.e4,
                children: [
                    (0, i.jsx)(o.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: u.intl.string(u.t["+pgFbW"]),
                    }),
                    (0, i.jsx)(o.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: u.intl.format(u.t.Uk4lV5, { onLearnMore: e }),
                    }),
                ],
            }),
        ],
    });
}
let x = function (e) {
    let { quest: t, hasAlreadyLinked: s, onClickGameTitle: r, selectedAuthMethod: a } = e,
        o = t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME,
        f = t.userStatus?.completedAt != null,
        x = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        p = n.useMemo(
            () => [
                {
                    renderContent: () => {
                        let e = t.config.messages.gameTitle;
                        if (!0 === s)
                            return (0, i.jsx)(d.L5, {
                                children: u.intl.formatToPlainString(u.t.C45G4B, { gameTitle: e }),
                            });
                        let n = a === g.qh.WEB,
                            l =
                                null == r
                                    ? u.intl.formatToPlainString(n ? u.t.j3155Y : u.t.tNmoIp, { gameTitle: e })
                                    : u.intl.format(n ? u.t["4+3zP/"] : u.t.vDLUD3, {
                                          gameTitle: e,
                                          onClickGameTitle: r,
                                      });
                        return (0, i.jsx)(d.L5, { children: l });
                    },
                    isComplete: (s ?? !1) || f,
                },
                {
                    renderContent: () =>
                        (0, i.jsx)(d.L5, {
                            children:
                                !0 !== s || f || null == r
                                    ? u.intl.formatToPlainString(u.t.nP1hFd, {
                                          objective: o?.messages.taskDescription ?? "",
                                          gameTitle: t.config.messages.gameTitle,
                                          rewardName: (0, m.mq)(t.config, x),
                                      })
                                    : u.intl.format(u.t.GLZnbq, {
                                          objective: o?.messages.taskDescription ?? "",
                                          gameTitle: t.config.messages.gameTitle,
                                          rewardName: (0, m.mq)(t.config, x),
                                          onClickGameTitle: r,
                                      }),
                        }),
                    isComplete: f,
                },
            ],
            [a, s, f, t.config, o, r, x],
        );
    return (0, i.jsx)(d.Ay, {
        heading: u.intl.string(u.t.dc9w4N),
        steps: p,
        children: !0 === s && !f && (0, i.jsx)(h, {}),
    });
};
