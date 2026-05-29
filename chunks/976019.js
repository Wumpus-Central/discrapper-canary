"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(885574),
    o = n(661531),
    l = n(834730),
    u = n(287809),
    c = n(801365),
    d = n(52093),
    _ = n(190107),
    h = n(375708),
    f = n(459878);
function p() {
    let e = r.useCallback(() => {}, []);
    return (0, i.jsxs)("div", {
        className: f.Jj,
        children: [
            (0, i.jsx)(a.m, {
                size: "sm",
                color: o.A.colors.TEXT_LINK,
                secondaryColor: o.A.colors.WHITE,
                className: f.qf,
            }),
            (0, i.jsxs)("div", {
                className: f.e4,
                children: [
                    (0, i.jsx)(l.E, {
                        variant: "text-xs/semibold",
                        color: "text-default",
                        children: h.intl.string(h.t["+pgFbW"]),
                    }),
                    (0, i.jsx)(l.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: h.intl.format(h.t.Uk4lV5, { onLearnMore: e }),
                    }),
                ],
            }),
        ],
    });
}
let E = function (e) {
    let { quest: t, hasAlreadyLinked: n, onClickGameTitle: a, selectedAuthMethod: o } = e,
        l = t.config.taskConfigV2.tasks.ACHIEVEMENT_IN_GAME,
        f = t.userStatus?.completedAt != null,
        E = (0, s.bG)([u.default], () => u.default.getCurrentUser()),
        m = r.useMemo(
            () => [
                {
                    renderContent: () =>
                        (0, i.jsx)(d.L5, {
                            children:
                                !0 === n
                                    ? h.intl.formatToPlainString(h.t.C45G4B, { gameTitle: t.config.messages.gameTitle })
                                    : o === _.qh.WEB
                                      ? h.intl.string(h.t.yqSr9m)
                                      : h.intl.format(h.t.vDLUD3, {
                                            gameTitle: t.config.messages.gameTitle,
                                            onClickGameTitle: a,
                                        }),
                        }),
                    isComplete: (n ?? !1) || f,
                },
                {
                    renderContent: () =>
                        (0, i.jsx)(d.L5, {
                            children: h.intl.formatToPlainString(h.t.nP1hFd, {
                                objective: l?.messages.taskDescription ?? "",
                                rewardName: (0, c.mq)(t.config, E),
                            }),
                        }),
                    isComplete: f,
                },
            ],
            [o, n, f, t.config, l, a, E],
        );
    return (0, i.jsx)(d.Ay, {
        heading: h.intl.string(h.t.dc9w4N),
        steps: m,
        children: !0 === n && !f && (0, i.jsx)(p, {}),
    });
};
