"use strict";
n.d(t, { O: () => y });
var i = n(344351),
    r = n(228366),
    s = n(845584),
    a = n(20015),
    o = n(734057),
    l = n(933958),
    d = n(627968);
n(64700);
var _ = n(231723),
    u = n(192308),
    c = n(851907),
    E = n(157559),
    h = n(47167),
    m = n(994500),
    f = n(287809),
    g = n(240248),
    p = n(985018),
    A = n(969151),
    I = n(817636),
    T = n(574152),
    S = n(652215);
async function N(e) {
    let { applicationId: t, channelId: n, guildId: a } = e;
    try {
        return await (0, I.A)(t, n);
    } catch (o) {
        let e = null != a ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        r.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
            nonce: "",
            applicationId: t,
            channelId: n ?? null,
            guildId: a ?? null,
            error: new s.LG(o),
            locationKind: e,
        });
    }
}
async function C(e) {
    let {
        currentEmbeddedApplication: t,
        shouldClosePopoutOnLeaveCurrentEmbeddedApplication: n,
        onConfirmActivityLaunchChecksAlertOpen: i,
    } = e;
    return (
        (null == t ||
            !!(await new Promise((e) => {
                let r,
                    s = l.Ay.getSelfEmbeddedActivities().get(t.id),
                    a = (0, A.H)(s?.location),
                    d = o.A.getChannel(a);
                null == s || null == d
                    ? e(!0)
                    : (i?.(),
                      (r = null != d ? (0, h.m1)(d, f.default, m.A) : ""),
                      E.A.show({
                          title: p.intl.string(p.t.XkIWkk),
                          cancelText: p.intl.string(p.t["ETE/oC"]),
                          confirmText: p.intl.string(p.t["cY+Oob"]),
                          onConfirm: () => {
                              (0, T.A)().leaveActivity({
                                  location: s.location,
                                  applicationId: t.id,
                                  shouldClosePopout: n,
                              }),
                                  e(!0);
                          },
                          onCancel: () => e(!1),
                          body: p.intl.format(p.t["5/Xort"], {
                              currentApplicationName: t?.name ?? p.intl.string(p.t.G99XFs),
                              currentApplicationChannelName: (0, g.uJ)(r) ? p.intl.string(p.t.OGUjmt) : r,
                          }),
                      }));
            }))) &&
        !0
    );
}
async function R(e) {
    let { application: t, applicationId: i, channel: r, user: s, onConfirmActivityLaunchChecksAlertOpen: a } = e;
    if (null == s.nsfwAllowed) {
        let e = t ?? (await N({ applicationId: i, channelId: r?.id, guildId: r?.getGuildId() ?? void 0 }));
        if (
            null == e ||
            (e.embeddedActivityConfig?.requires_age_gate &&
                !(await new Promise((t) => {
                    a?.(),
                        (function (e) {
                            let { application: t, channelId: i, onAgree: r, onDisagree: s } = e,
                                a = null != (0, c.Ay)({ application: t, channelId: i }) ? _.KX : _.SY;
                            (0, u.openModalLazy)(
                                async () => {
                                    let { ActivityAgeGateModal: e } = await n.e("75710").then(n.bind(n, 89805));
                                    return (n) =>
                                        (0, d.jsx)(e, {
                                            ...n,
                                            channelId: i,
                                            application: t,
                                            onAgree: r,
                                            onDisagree: s,
                                        });
                                },
                                { modalKey: "activity-age-gate", contextKey: a },
                            ),
                                Promise.resolve();
                        })({ application: e, channelId: r?.id, onAgree: () => t(!0), onDisagree: () => t(!1) });
                })))
        )
            return !1;
    }
    return !0;
}
async function O(e) {
    let { application: t, applicationId: i, channel: r, onConfirmActivityLaunchChecksAlertOpen: s } = e,
        o = t ?? (await N({ applicationId: i, channelId: r?.id, guildId: r?.getGuildId() ?? void 0 }));
    return (
        null != o &&
        (!!((0, a.n)(o, S.gfo.EMBEDDED_RELEASED) || o.isVerified || l.Ay.hasActivityEverBeenLaunched(i)) ||
            new Promise((e) => {
                s?.(),
                    (function (e) {
                        let { application: t, onConfirm: i, onCancel: r } = e;
                        (0, u.openModalLazy)(async () => {
                            let { default: e } = await n.e("38435").then(n.bind(n, 130574));
                            return (n) => (0, d.jsx)(e, { application: t, onConfirm: i, onCancel: r, ...n });
                        }),
                            Promise.resolve();
                    })({ application: o, onConfirm: () => e(!0), onCancel: () => e(!1) });
            }))
    );
}
async function y(e) {
    return (
        !!(await C({
            currentEmbeddedApplication: e.currentEmbeddedApplication,
            shouldClosePopoutOnLeaveCurrentEmbeddedApplication: e.shouldClosePopoutOnLeaveCurrentEmbeddedApplication,
            onConfirmActivityLaunchChecksAlertOpen: e.onConfirmActivityLaunchChecksAlertOpen,
        })) &&
        !!(await R(e)) &&
        !!(await O(e))
    );
}
