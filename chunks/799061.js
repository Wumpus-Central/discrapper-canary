"use strict";
n.d(t, { O: () => L });
var i = n(344351),
    r = n(228366),
    a = n(913122),
    s = n(20015),
    l = n(734057),
    o = n(933958),
    d = n(477900);
n(582128);
var c = n(231723),
    u = n(192308),
    _ = n(851907),
    E = n(157559),
    A = n(47167),
    h = n(994500),
    I = n(287809),
    f = n(240248),
    p = n(375708),
    T = n(969151),
    m = n(817636),
    g = n(574152),
    S = n(652215);
async function N(e) {
    let { applicationId: t, channelId: n, guildId: s } = e;
    try {
        return await (0, m.A)(t, n);
    } catch (l) {
        let e = null != s ? i.T.GUILD_CHANNEL : i.T.PRIVATE_CHANNEL;
        r.h.dispatch({
            type: "EMBEDDED_ACTIVITY_LAUNCH_FAIL",
            nonce: "",
            applicationId: t,
            channelId: n ?? null,
            guildId: s ?? null,
            error: new a.LG(l),
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
                    a = o.Ay.getSelfEmbeddedActivities().get(t.id),
                    s = (0, T.H)(a?.location),
                    d = l.A.getChannel(s);
                null == a || null == d
                    ? e(!0)
                    : (i?.(),
                      (r = null != d ? (0, A.m1)(d, I.default, h.A) : ""),
                      E.A.show({
                          title: p.intl.string(p.t.XkIWkk),
                          cancelText: p.intl.string(p.t["ETE/oC"]),
                          confirmText: p.intl.string(p.t["cY+Oob"]),
                          onConfirm: () => {
                              (0, g.A)().leaveActivity({
                                  location: a.location,
                                  applicationId: t.id,
                                  shouldClosePopout: n,
                              }),
                                  e(!0);
                          },
                          onCancel: () => e(!1),
                          body: p.intl.format(p.t["5/Xort"], {
                              currentApplicationName: t?.name ?? p.intl.string(p.t.G99XFs),
                              currentApplicationChannelName: (0, f.uJ)(r) ? p.intl.string(p.t.OGUjmt) : r,
                          }),
                      }));
            }))) &&
        !0
    );
}
async function R(e) {
    let { application: t, applicationId: i, channel: r, user: a, onConfirmActivityLaunchChecksAlertOpen: s } = e;
    if (null == a.nsfwAllowed) {
        let e = t ?? (await N({ applicationId: i, channelId: r?.id, guildId: r?.getGuildId() ?? void 0 }));
        if (
            null == e ||
            (e.embeddedActivityConfig?.requires_age_gate &&
                !(await new Promise((t) => {
                    s?.(),
                        (function (e) {
                            let { application: t, channelId: i, onAgree: r, onDisagree: a } = e,
                                s = null != (0, _.Ay)({ application: t, channelId: i }) ? c.KX : c.SY;
                            (0, u.openModalLazy)(
                                async () => {
                                    let { ActivityAgeGateModal: e } = await n.e("675710").then(n.bind(n, 89805));
                                    return (n) =>
                                        (0, d.jsx)(e, {
                                            ...n,
                                            channelId: i,
                                            application: t,
                                            onAgree: r,
                                            onDisagree: a,
                                        });
                                },
                                { modalKey: "activity-age-gate", contextKey: s },
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
    let { application: t, applicationId: i, channel: r, onConfirmActivityLaunchChecksAlertOpen: a } = e,
        l = t ?? (await N({ applicationId: i, channelId: r?.id, guildId: r?.getGuildId() ?? void 0 }));
    return (
        null != l &&
        (!!((0, s.n)(l, S.gfo.EMBEDDED_RELEASED) || l.isVerified || o.Ay.hasActivityEverBeenLaunched(i)) ||
            new Promise((e) => {
                a?.(),
                    (function (e) {
                        let { application: t, onConfirm: i, onCancel: r } = e;
                        (0, u.openModalLazy)(async () => {
                            let { default: e } = await n.e("738435").then(n.bind(n, 130574));
                            return (n) => (0, d.jsx)(e, { application: t, onConfirm: i, onCancel: r, ...n });
                        }),
                            Promise.resolve();
                    })({ application: l, onConfirm: () => e(!0), onCancel: () => e(!1) });
            }))
    );
}
async function L(e) {
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
