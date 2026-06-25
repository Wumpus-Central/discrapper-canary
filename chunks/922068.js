n.r(t), n.d(t, { default: () => s0 });
var s,
    l,
    a,
    i = n(627968),
    r = n(64700),
    o = n(503698),
    c = n.n(o),
    d = n(484030),
    u = n(873298),
    h = n(305866),
    m = n(707554),
    A = n(251333),
    g = n(17928),
    E = n(990078),
    f = n(408278),
    N = n(143838),
    _ = n(252431),
    I = n(322387),
    p = n(995273),
    C = n(334738),
    S = n(186840),
    R = n(135978),
    x = n(562708),
    T = n(636537),
    y = n(933681),
    j = n(228366),
    O = n(885386),
    D = n(499785),
    M = n(652215);
function v(e) {
    j.h.dispatch({ type: "NOTIFICATION_CENTER_SET_ACTIVE", active: e });
}
function b() {
    j.h.dispatch({ type: "RESET_NOTIFICATION_CENTER" });
}
async function F(e, t) {
    if (_.A.loading) return;
    await j.h.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS" });
    let n = Math.ceil(_.A.items.length / e.limit);
    try {
        let s = await D.A.get({
            url: M.Rsh.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
                event: x.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                properties: (e) => {
                    let t = (e.body?.items || []).map((e) => e.type);
                    return (0, y.e0)({ page: n, items: t, item_count: t.length });
                },
            },
            query: { ...e },
            rejectWithError: !0,
        });
        t?.(),
            await j.h.dispatch({
                type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
                items: s.body.items,
                cursor: s.body.cursor,
                hasMore: s.body.has_more,
            });
    } catch (e) {
        t?.(), await j.h.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE" });
    }
}
async function L(e) {
    try {
        j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: !0, ids: [e] }),
            await T.Bo.post({ url: M.Rsh.NOTIF_CENTER_ITEMS_ACK(e), rejectWithError: !0 });
    } catch (t) {
        j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: [e] });
    }
}
async function U(e) {
    let t = O.ns.getSetting();
    try {
        j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id }),
            await D.A.delete({
                url: M.Rsh.NOTIF_CENTER_ITEMS(e.id),
                body: { item_type: (0, p.gk)(e) ? "mention" : "regular" },
                trackedActionData: {
                    event: x.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                    properties: { notification_center_id: e.id, acked: (0, p.NW)(e, t), item_type: e.type },
                },
                rejectWithError: !1,
            });
    } catch (t) {
        throw (j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE", item: e }), t);
    }
}
var G = n(927813),
    k = n(935208);
let w = 90 * G.A.Millis.DAY,
    P = { tab: null, localItemAcks: {}, hasNewMentions: !1, isDataStale: !1, isRefreshing: !1 };
class K extends g.Ay.PersistedStore {
    static displayName = "NotificationCenterStore";
    static persistKey = "NotificationCenterStore";
    initialize(e) {
        this.waitFor(R.Ay),
            null != e &&
                (((P = e).localItemAcks = (function (e) {
                    let t = {};
                    for (let [n, s] of Object.entries(e)) Date.now() - s < w && (t[n] = s);
                    return t;
                })(P.localItemAcks ?? {})),
                (P.isDataStale = !0));
    }
    getState() {
        return P;
    }
    getTab() {
        return P.tab ?? I.$w.ForYou;
    }
    isLocalItemAcked(e) {
        return null != e.local_id && (null != P.localItemAcks[e.local_id] || k.default.age(e.id) > w);
    }
    hasNewMentions() {
        return P.hasNewMentions;
    }
    isDataStale() {
        return P.isDataStale;
    }
    isRefreshing() {
        return P.isRefreshing;
    }
    shouldReload() {
        return P.hasNewMentions || P.isDataStale || P.isRefreshing;
    }
}
function H() {
    (P.hasNewMentions = !1), (P.isDataStale = !1), (P.isRefreshing = !1);
}
let B = new K(j.h, {
    MESSAGE_CREATE: function (e) {
        let { message: t } = e;
    },
    NOTIFICATION_CENTER_SET_TAB: function (e) {
        P = { ...P, tab: e.tab };
    },
    NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function (e) {
        let { localIds: t } = e;
        t.forEach((e) => {
            P = { ...P, localItemAcks: { ...P.localItemAcks, [e]: Date.now() } };
        });
    },
    NOTIFICATION_CENTER_REFRESH: function () {
        P.isRefreshing = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: H,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: H,
});
var z = n(790782);
function J() {
    let {
        initialized: e,
        loading: t,
        items: n,
        hasMore: s,
        loadMore: l,
    } = ((e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: s, withMentions: l = !1, initialPageSize: a } = e,
            i = (0, g.bG)([B], () => B.shouldReload()),
            o = r.useRef(!1),
            [c, d] = r.useState(!1),
            {
                initialized: u,
                loading: h,
                items: m,
                hasMore: A,
                cursor: E,
                errored: f,
            } = (0, g.cf)([_.A], () => ({
                initialized: _.A.initialized,
                loading: _.A.loading,
                items: _.A.items,
                hasMore: _.A.hasMore,
                cursor: _.A.cursor,
                errored: _.A.errored,
            })),
            { roleFilter: N, everyoneFilter: I } = (0, g.cf)([R.Ay], () => ({
                everyoneFilter: R.Ay.everyoneFilter,
                roleFilter: R.Ay.roleFilter,
            }));
        r.useEffect(() => (v(!0), () => v(!1)), []),
            r.useEffect(() => {
                u && t && (0, C.d_)(z.P.NOTIFICATION_CENTER);
            }, [t, u]);
        let p = (0, S.A)();
        r.useEffect(
            () => () => {
                s ? !p() && (f || m.length > 100) && b() : n && m.length > 100 && b();
            },
            [n, m, s, p, f],
        ),
            r.useEffect(() => {
                let e = i && t;
                (!u || e) && F({ limit: a ?? (l ? 8 : 20), with_mentions: l, roles_filter: N, everyone_filter: I });
            }, [u, i, t, l, N, I, a]);
        let x = r.useCallback(
            async (e) => {
                !o.current &&
                    u &&
                    A &&
                    null != E &&
                    (e || !f) &&
                    ((o.current = !0),
                    d(!0),
                    await F(
                        { after: E, with_mentions: l, roles_filter: N, everyone_filter: I, limit: l ? 8 : 20 },
                        () => {
                            o.current = !1;
                        },
                    ),
                    d(!1));
            },
            [u, A, E, f, l, N, I],
        );
        return {
            initialized: u,
            loading: h,
            items: m,
            hasMore: A,
            loadMore: x,
            loadingMore: c,
            setReadNotifItemToAcked: function (e) {
                e.acked || (e.acked = !0);
            },
            errored: f,
        };
    })({ isFocused: !0, isDesktop: !0 });
    return {
        initialized: e,
        loading: t,
        items: n.filter((e) => "notification-center-item" === e.kind),
        hasMore: s,
        loadMore: l,
    };
}
var Y = n(837381),
    X = n(289873),
    Q = n(689175),
    V = n(928039),
    W = n(139286),
    $ = n(375708),
    q = n(988480);
function Z() {
    return (0, i.jsxs)("div", {
        className: q.kL,
        children: [
            (0, i.jsx)("img", { className: q.Sl, alt: "", src: "/assets/993e32de43e0d570.svg" }),
            (0, i.jsx)("div", { className: q.DD, children: $.intl.string($.t.MwjTvn) }),
            (0, i.jsx)("div", { className: q.rf, children: $.intl.string($.t.AKBgPy) }),
        ],
    });
}
var ee = n(778712),
    et = n(834730),
    en = n(192308),
    es = n(890856),
    el = n(565645),
    ea = n(730134),
    ei = n(688810),
    er = n(587895),
    eo = n(741231),
    ec = n(46054),
    ed = n(102876),
    eu = n(975732),
    eh = n(889227),
    em = n(287809),
    eA = n(174459),
    eg = n(998218),
    eE = n(284009),
    ef = n.n(eE),
    eN = n(698441),
    e_ = n(71393),
    eI = n(994500),
    ep = n(240248),
    eC = n(427262);
let eS = /[\\`*_~|<>[\]:]/g;
function eR(e) {
    if (void 0 !== e) return e.replace(eS, "\\$&");
}
function ex(e) {
    let { username: t, applicationId: n, renderApplication: s, withApplication: l, withDefault: a } = e;
    return null != n
        ? $.intl.format(l, { username: t, applicationName: () => s(n) })
        : $.intl.format(a, { username: t });
}
n(321073);
var eT = n(429913);
let ey = new Set([
    I.Uo.INCOMING_GAME_FRIEND_REQUESTS,
    I.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED,
    I.Uo.INCOMING_FRIEND_REQUESTS,
    I.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED,
]);
var ej = n(573435),
    eO = n(486020),
    eD = n(661531);
let eM = "/assets/03f95d2957fb9ed2.svg",
    ev = "/assets/89f880b6428b1aea.svg",
    eb = {
        MISSED_MESSAGES: "/assets/f7d60ae597f16731.svg",
        FRIEND_REQUEST_REMINDER: "/assets/70750ced4a16e7ec.svg",
        SCHEDULED_GUILD_EVENT: "/assets/a67e28f364664918.svg",
        TOP_MESSAGES: "/assets/1704496c3b4213df.svg",
        NOTIFICATION_CENTER: "/assets/417c4def7a33b274.svg",
        UPDATE_PROFILE: "/assets/21131df8cbb15b26.svg",
        FIND_FRIENDS: eM,
        ADD_FRIEND: eM,
        FIRST_MESSAGE: "/assets/5ef5055571515a96.svg",
    };
var eF = n(218876);
function eL(e) {
    let { mask: t } = e;
    return null == t
        ? null
        : (0, i.jsx)("div", {
              className: eF.tK,
              style: { backgroundColor: t.color.css },
              children: (0, i.jsx)("img", { className: eF.QR, alt: "", src: t.icon }),
          });
}
let eU = r.memo(function (e) {
    let { item: t } = e,
        n = null,
        s = !1,
        l = (0, g.bG)([e_.A], () => e_.A.getGuild(t.guild_id));
    if (null != t.icon_name)
        n = (0, i.jsx)("img", {
            alt: "",
            src: eb["icHighlight" === t.icon_name ? "TOP_MESSAGES" : "NOTIFICATION_CENTER"],
        });
    else if (null != t.other_user) {
        let e = t.other_user instanceof eh.A ? t.other_user : new eh.A(t.other_user),
            l = e.globalName ?? e.username;
        (n = (0, i.jsx)("img", { alt: l, className: eF.Sl, src: e.getAvatarURL(void 0, 40) })), (s = !0);
    } else if (null != t.icon_url) {
        let e = (null != l ? eO.Ay.getGuildIconURL({ id: l.id, icon: l.icon, size: 40 }) : null) ?? t.icon_url;
        n = (0, i.jsx)("img", { alt: l?.name ?? "", className: eF.Sl, src: e });
    } else
        n = (0, i.jsx)("img", {
            alt: "",
            src: eb[
                (function (e) {
                    switch (e.type) {
                        case "lifecycle_item":
                            switch (e.item_enum) {
                                case I.r_.ADD_FRIEND:
                                    return "ADD_FRIEND";
                                case I.r_.FIND_FRIENDS:
                                    return "FIND_FRIENDS";
                                case I.r_.FIRST_MESSAGE:
                                    return "FIRST_MESSAGE";
                                case I.r_.UPDATE_PROFILE:
                                    return "UPDATE_PROFILE";
                                default:
                                    return "NOTIFICATION_CENTER";
                            }
                        case "missed_messages":
                            return "MISSED_MESSAGES";
                        case "friend_request_reminder":
                            return "FRIEND_REQUEST_REMINDER";
                        case "referral_program_entrypoint_reminder":
                        default:
                            return "NOTIFICATION_CENTER";
                        case "scheduled_guild_event_started":
                            return "SCHEDULED_GUILD_EVENT";
                        case "top_messages":
                            return "TOP_MESSAGES";
                    }
                })(t)
            ],
        });
    let a = (function (e) {
        switch (e) {
            case I.hW.GO_LIVE_PUSH:
                return { icon: "/assets/0038fc958959af7c.svg", color: eD.A.colors.BACKGROUND_MOD_STRONG };
            case I.hW.FRIEND_REQUEST_ACCEPTED:
            case I.hW.GAME_FRIEND_REQUEST_ACCEPTED:
                return { icon: "/assets/c8ae30e56eb87fdf.svg", color: eD.A.colors.STATUS_POSITIVE_BACKGROUND };
            case I.hW.FRIEND_REQUEST_PENDING:
            case I.hW.FRIEND_SUGGESTION_CREATED:
                return { icon: ev, color: eD.A.colors.BACKGROUND_MOD_STRONG };
            case I.hW.DM_FRIEND_NUDGE:
                return { icon: "/assets/a7dd94c728c7093a.svg", color: eD.A.colors.BACKGROUND_MOD_STRONG };
            case I.Uo.INCOMING_FRIEND_REQUESTS:
            case I.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                return { icon: ev, color: eD.A.colors.BACKGROUND_MOD_STRONG };
            case I.Uo.INCOMING_GAME_FRIEND_REQUESTS:
            case I.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                return { icon: "/assets/fe02228daf40c37f.svg", color: eD.A.colors.BACKGROUND_MOD_STRONG };
            default:
                return null;
        }
    })(t.type);
    return (0, i.jsxs)("div", {
        className: eF.kL,
        children: [
            (0, i.jsx)(ej.Ay, {
                mask: null == a ? ej.hW.AVATAR_DEFAULT : ej.hW.AVATAR_STATUS_ROUND_16,
                width: 40,
                height: 40,
                rightOverhang: 3,
                bottomOverhang: 3,
                className: eF.dK,
                children: (0, i.jsx)("div", {
                    className: eF.ZS,
                    style: s
                        ? void 0
                        : {
                              backgroundColor: (function (e) {
                                  switch (e.item_enum) {
                                      case I.r_.UPDATE_PROFILE:
                                          return "#83DDC5";
                                      case I.r_.ADD_FRIEND:
                                      case I.r_.FIND_FRIENDS:
                                          return "#F47FFF";
                                      case I.r_.FIRST_MESSAGE:
                                          return "#FFDE4D";
                                      default:
                                          return eD.A.unsafe_rawColors.BRAND_500.css;
                                  }
                              })(t),
                          },
                    children: n,
                }),
            }),
            (0, i.jsx)(eL, { mask: a }),
        ],
    });
});
var eG = n(825484),
    ek = n(821609),
    ew = n(308528),
    eP = n(411986),
    eK = n(395248);
function eH(e) {
    let { userId: t } = e,
        n = r.useCallback(
            (e) => {
                e.stopPropagation(), ew.A.openPrivateChannel({ recipientIds: [t] });
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: eK.Ze,
        children: (0, i.jsx)(eG.e, {
            size: "sm",
            children: (0, i.jsx)(ek.$, { variant: "secondary", onClick: n, text: $.intl.string($.t["g33r/P"]) }),
        }),
    });
}
function eB(e) {
    let { userId: t, applicationId: n } = e,
        [s, l] = r.useState(!1),
        [a, o] = r.useState(!1),
        c = r.useCallback(
            async (e) => {
                e.stopPropagation(), o(!0);
                try {
                    await eP.A.cancelFriendRequest({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    o(!1);
                }
            },
            [n, t],
        ),
        d = r.useCallback(
            async (e) => {
                e.stopPropagation(), l(!0);
                try {
                    await eP.A.maybeConfirmFriendRequestAccept({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    l(!1);
                }
            },
            [n, t],
        );
    return (0, i.jsx)("div", {
        className: eK.Ze,
        children: (0, i.jsxs)(eG.e, {
            size: "sm",
            children: [
                (0, i.jsx)(ek.$, {
                    variant: "active",
                    onClick: d,
                    text: $.intl.string($.t.Zcibdf),
                    loading: s,
                    disabled: a,
                }),
                (0, i.jsx)(ek.$, {
                    variant: "secondary",
                    onClick: c,
                    text: $.intl.string($.t.xuio0C),
                    loading: a,
                    disabled: s,
                }),
            ],
        }),
    });
}
var ez = n(980707),
    eJ = n(477782),
    eY = n(241326),
    eX = n(922016),
    eQ = n(365199);
function eV(e) {
    let { item: t, closePopout: n } = e;
    return (0, i.jsx)(ez.W, {
        "data-menu-migrated": !0,
        navId: "notification-actions",
        onClose: n,
        onSelect: n,
        "aria-label": $.intl.string($.t.ljs3Oe),
        children: (0, i.jsx)(eJ.Dr, {
            id: "delete",
            label: $.intl.string($.t.oyYWHE),
            icon: eY.u,
            leadingAccessory: { type: "icon", icon: eY.u },
            action: async () => {
                await U(t);
            },
        }),
    });
}
let eW = r.memo(function (e) {
    let { item: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(eX.Y, {
        targetElementRef: n,
        renderPopout: function (e) {
            return (0, i.jsx)(eV, { ...e, item: t });
        },
        position: "bottom",
        align: "right",
        animation: eX.Y.Animation.NONE,
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(E.m, {
                text: $.intl.string($.t["UKOtz+"]),
                asContainer: !0,
                children: (0, i.jsx)(f.K, {
                    buttonRef: n,
                    size: "sm",
                    icon: eQ.j,
                    variant: "icon-only",
                    "aria-label": $.intl.string($.t["UKOtz+"]),
                    "aria-haspopup": "menu",
                    onClick: (e) => {
                        e.stopPropagation(), t(e);
                    },
                    role: "button",
                }),
            });
        },
    });
});
function e$(e) {
    let { item: t } = e,
        n = t.message?.content;
    if (null == n) return (0, i.jsx)("div", {});
    let s = em.default.getUser(t.message?.author?.id) ?? new eh.A(t.message?.author),
        l = ec.A.parse(n);
    return (0, i.jsxs)("div", {
        className: eK.PI,
        children: [
            (0, i.jsx)(ea.A, { user: s, size: ee._3.SIZE_24 }),
            (0, i.jsx)(et.E, { className: eK.Bp, variant: "text-sm/normal", lineClamp: 2, children: l }),
        ],
    });
}
function eq(e) {
    let {
        item: { callout: t },
    } = e;
    if (null == t) return null;
    let n = ec.A.parse(t);
    return (0, i.jsx)("div", {
        className: eK.CD,
        children: (0, i.jsx)(et.E, { variant: "text-sm/normal", lineClamp: 2, children: n }),
    });
}
function eZ(e) {
    let { item: t } = e,
        n = "/assets/4f3c39503b4b7fe4.svg",
        s = $.intl.string($.t.SJTHJb);
    return (
        t.completed && ((n = "/assets/7f6a66c14402315f.svg"), (s = $.intl.string($.t.f6RTAM))),
        (0, i.jsxs)("div", {
            className: eK.AE,
            children: [
                (0, i.jsx)("img", { className: eK.kv, alt: "", src: n }),
                (0, i.jsx)(et.E, { className: eK.mc, variant: "text-xs/bold", color: "text-default", children: s }),
            ],
        })
    );
}
function e0(e) {
    let { applicationId: t } = e,
        n = (0, g.bG)([er.A], () => er.A.getApplication(t));
    return null == n ? (0, i.jsx)("div", {}) : (0, i.jsx)(ed.A, { application: n }, n.id);
}
let e1 = r.memo(function (e) {
        let t,
            { item: s, ackedBeforeId: l } = e,
            { analyticsLocations: a } = (0, ei.Ay)(),
            o = ((t = (0, g.bG)([B], () => B.isLocalItemAcked(s))), !s.forceUnacked && (t || (0, p.NW)(s, l))),
            c = r.useCallback(async () => {
                var e, t;
                if (
                    (o ||
                        (null != s.local_id
                            ? ((e = [s.local_id]),
                              j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: e }))
                            : (0, p.gk)(s)
                              ? ((t = s.id),
                                j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: !0, ids: [t] }))
                              : L(s.id)),
                    null != s.item_enum && s.item_enum === I.r_.FIND_FRIENDS)
                )
                    return void (0, en.openModalLazy)(async () => {
                        let { default: e } = await n.e("39396").then(n.bind(n, 5950));
                        return (t) => (0, i.jsx)(e, { source: "Notification Center", ...t });
                    });
                if (null != s.deeplink) {
                    let e = eg.A.safeParseWithQuery(s.deeplink);
                    if (null == e) return;
                    let t = e.hostname,
                        n = e.path;
                    if (null == t || null == n) return;
                    if (eg.A.isDiscordHostname(t)) {
                        let e = n.match("^/users/(\\d+)");
                        null != e && 2 === e.length
                            ? (0, eu.openUserProfileModal)({
                                  userId: e[1],
                                  messageId: s.message?.id,
                                  sourceAnalyticsLocations: a,
                              })
                            : await (0, eo.A)(n);
                    }
                    eA.default.track(M.HAw.NOTIFICATION_CENTER_ACTION, {
                        action_type: I.e1.CLICKED,
                        notification_center_id: s.id,
                        item_type: s.type,
                        acked: o,
                    });
                }
            }, [s, o, a]),
            d = null;
        s.type === I.Uo.INCOMING_FRIEND_REQUESTS && null != s.other_user
            ? (d = (0, i.jsx)(eB, { userId: s.other_user.id }))
            : s.type === I.Uo.INCOMING_GAME_FRIEND_REQUESTS && null != s.other_user
              ? (d = (0, i.jsx)(eB, { userId: s.other_user.id, applicationId: s.applicationId }))
              : (s.type === I.hW.FRIEND_REQUEST_ACCEPTED || s.type === I.hW.GAME_FRIEND_REQUEST_ACCEPTED) &&
                null != s.other_user &&
                (d = (0, i.jsx)(eH, { userId: s.other_user.id }));
        let u = null != s.local_id,
            h = (function (e) {
                let { item: t, renderApplication: n } = e,
                    s = t.other_user?.id ?? M.dJq,
                    l = eR(eC.Ay.getName(em.default.getUser(t.other_user?.id))),
                    a = t.applicationId;
                switch (t.type) {
                    case I.Uo.FRIEND_REQUESTS_GROUPED:
                        let i = eR(eC.Ay.getName(em.default.getUser(t.other_users?.[0]?.id))),
                            r = eR(eC.Ay.getName(em.default.getUser(t.other_users?.[1]?.id))),
                            o = Math.max((t.other_users?.length ?? 0) - 2, 0);
                        return $.intl.format($.t.g5xyIC, { user: i, user2: r, count: o });
                    case I.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE:
                        let c = t.local_id?.split("_").pop() ?? "unknown";
                        return `Update to build ${c} available!`;
                    case I.hW.FRIEND_SUGGESTION_CREATED:
                        eI.A.getRelationshipType(s), M.eA$.PENDING_OUTGOING;
                        break;
                    case I.hW.GUILD_SCHEDULED_EVENT_STARTED:
                        let d = t.guild_scheduled_event_id,
                            u = null != d ? eN.Ay.getGuildScheduledEvent(d) : null,
                            h = u?.name,
                            m = e_.A.getGuild(u?.guild_id)?.name,
                            A = (0, eN.AZ)(u ?? void 0);
                        return (0, ep.uJ)(m) || (0, ep.uJ)(h) || !A
                            ? (t.body ?? "")
                            : $.intl.format($.t.AyvfXR, { event_name: eR(h), guild_name: eR(m) });
                    case I.Uo.INCOMING_FRIEND_REQUESTS:
                        return ex({
                            username: l,
                            applicationId: a,
                            renderApplication: n,
                            withApplication: $.t["9Dgf1L"],
                            withDefault: $.t.uIomXw,
                        });
                    case I.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                        return ex({
                            username: l,
                            applicationId: a,
                            renderApplication: n,
                            withApplication: $.t.nnC1q9,
                            withDefault: $.t["5Uzkdp"],
                        });
                    case I.hW.FRIEND_REQUEST_ACCEPTED:
                        return ex({
                            username: l,
                            applicationId: a,
                            renderApplication: n,
                            withApplication: $.t.jXlYiF,
                            withDefault: $.t.McYRBk,
                        });
                    case I.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                        return (
                            ef()(null != a, `Expected application id for ${t.type}`),
                            $.intl.format($.t["BB/0vn"], { username: l, applicationName: () => n(a) })
                        );
                    case I.Uo.INCOMING_GAME_FRIEND_REQUESTS:
                        return (
                            ef()(null != a, `Expected application id for ${t.type}`),
                            $.intl.format($.t["7cqOLI"], { username: l, applicationName: () => n(a) })
                        );
                    case I.hW.GAME_FRIEND_REQUEST_ACCEPTED:
                        if (null == a) return t.body;
                        return $.intl.format($.t.Wi64vN, { username: l, applicationName: () => n(a) });
                }
                return t.body ?? "";
            })({ item: s, renderApplication: (e) => (0, i.jsx)(e0, { applicationId: e }) }),
            { emoji_id: m, emoji_name: A } = s,
            E = null != m || null != A ? (0, i.jsx)(el.A, { className: eK.Zg, emojiId: m, emojiName: A }) : null;
        return (0, i.jsxs)("div", {
            className: eK.nM,
            children: [
                (0, i.jsxs)(es.s, {
                    className: eK.u4,
                    focusProps: { offset: 4 },
                    "aria-label": h,
                    onClick: c,
                    children: [
                        o ? null : (0, i.jsx)("div", { className: eK.gy }),
                        (0, i.jsx)(eU, { item: s }),
                        (0, i.jsxs)("div", {
                            className: eK.rf,
                            children: [
                                "lifecycle_item" === s.type && null != s.item_enum && (0, i.jsx)(eZ, { item: s }),
                                (0, i.jsxs)(et.E, {
                                    variant: "text-md/normal",
                                    color: o ? "text-muted" : "text-default",
                                    children: ["string" != typeof h ? h : ec.A.parse(h), E],
                                }),
                                s.message?.content != null ? (0, i.jsx)(e$, { item: s }) : null,
                                null != s.callout ? (0, i.jsx)(eq, { item: s }) : null,
                                (0, i.jsx)(et.E, {
                                    variant: "text-xs/medium",
                                    color: o ? "text-muted" : "text-default",
                                    children: (0, p.jb)(k.default.extractTimestamp(s.id)),
                                }),
                                d,
                            ],
                        }),
                    ],
                }),
                u ? null : (0, i.jsx)(eW, { item: s }),
            ],
        });
    }),
    e3 = r.memo(function (e) {
        let t,
            { items: n } = e,
            s = O.ns.useSetting();
        return (
            (t = r.useMemo(() => {
                let e = new Set(),
                    t = [];
                return (
                    n.forEach((n) => {
                        let { applicationId: s, type: l } = n;
                        !ey.has(l) || null == s || e.has(s) || (e.add(s), t.push(s));
                    }),
                    t
                );
            }, [n])),
            (0, eT.A)(t),
            (0, i.jsx)(i.Fragment, { children: n.map((e) => (0, i.jsx)(e1, { item: e, ackedBeforeId: s }, e.id)) })
        );
    });
var e2 = n(700164);
function e8(e) {
    let { initialized: t, items: n, loading: s, loadMore: l } = e,
        a = r.useRef(null),
        o = (0, V.A)("for-you", a);
    function c() {
        let e = a.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 1500 && l());
    }
    return ((0, W.A)(
        {
            type: x.ImpressionTypes.VIEW,
            name: x.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: { empty: 0 === n.length },
        },
        { disableTrack: !t },
        [t],
    ),
    t)
        ? 0 === n.length
            ? (0, i.jsx)(Z, {})
            : (0, i.jsx)(Y.hD, {
                  navigator: o,
                  children: (0, i.jsx)(Y.PR, {
                      children: (e) => {
                          let { ref: t, ...l } = e;
                          return (0, i.jsxs)(Q.Ch, {
                              className: e2.kL,
                              ref: (e) => {
                                  (a.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              ...l,
                              onScroll: c,
                              children: [
                                  (0, i.jsx)(e3, { items: n }),
                                  s ? (0, i.jsx)(X.y, { className: e2.u1 }) : null,
                              ],
                          });
                      },
                  }),
              })
        : (0, i.jsx)(X.y, { className: e2.k$ });
}
function e7() {
    let { initialized: e, items: t, loading: n, loadMore: s } = J(),
        l = e4(
            t,
            (0, g.bG)([_.A], () => _.A.localItems),
        );
    return (0, i.jsx)(e8, { initialized: e, items: l, loading: n, loadMore: s });
}
function e4(e, t) {
    return r.useMemo(() => [...[...e, ...t].sort((e, t) => -1 * k.default.compare(e.id, t.id))], [e, t]);
}
function e9() {
    let { items: e } = J(),
        t = e.length > 0 ? e[0] : null,
        n = e4(
            e,
            (0, g.bG)([_.A], () => _.A.localItems),
        ),
        s = O.ns.useSetting();
    return r.useMemo(() => {
        if (null != t && 0 >= k.default.compare(t.id, s)) return !1;
        for (let e of n) {
            if (0 >= k.default.compare(e.id, s)) break;
            if (!(0, p.NW)(e, s)) return !0;
        }
        return !1;
    }, [t, s, n])
        ? (0, i.jsx)(E.m, {
              text: $.intl.string($.t["8k+6QY"]),
              children: (0, i.jsx)(f.K, {
                  "aria-label": $.intl.string($.t["8k+6QY"]),
                  icon: N.i,
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                      null != t &&
                          (O.ns.updateSetting(t.id),
                          eA.default.track(M.HAw.NOTIFICATION_CENTER_ACTION, { action_type: I.e1.MARK_ALL_READ }));
                  },
              }),
          })
        : null;
}
var e6 = n(815021),
    e5 = n(935063),
    te = n(378939),
    tt = n(964486),
    tn = n(475743),
    ts = n(323073),
    tl = n(202803),
    ta = n(636922),
    ti = n(835835),
    tr = n(910425),
    to = n(734057),
    tc = n(517019),
    td = n(309010),
    tu = n(939249),
    th = n(186415);
function tm(e) {
    let { className: t, onJump: n } = e,
        [s, l] = r.useState(!1);
    return (0, i.jsx)(tu.D, {
        className: c()(th.n, t),
        onClick: function (e) {
            l(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(X.y, { type: X.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(et.E, { variant: "text-xs/medium", className: th.Q, children: $.intl.string($.t.k5WiPf) }),
    });
}
var tA = n(187322),
    tg = n(534514),
    tE = n(812993),
    tf = n(397244),
    tN = n(714114),
    t_ = n(394871),
    tI = n(95561),
    tp = n(571694),
    tC = n(47167),
    tS = n(713654),
    tR = n(915089),
    tx = n(548118),
    tT = n(616356),
    ty = n(290863),
    tj = n(568548),
    tO = n(147925),
    tD = n(851157);
let tM = { top: 8, bottom: 8, left: -4, right: -4 };
function tv(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: s } = e;
    return (0, i.jsx)(E.m, {
        text: $.intl.string($.t.iTcuma),
        children: (0, i.jsx)(tu.D, {
            className: c()(tD.cS, { [tD.yZ]: t?.collapsed }),
            onClick: function () {
                null != t &&
                    null != n &&
                    (n(t),
                    (0, tI.zV)(M.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: s?.() ?? 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, i.jsx)(tO.A, { width: 16, height: 16 }),
        }),
    });
}
function tb(e) {
    let {
            channel: t,
            children: n,
            gotoChannel: s,
            mentionCount: l,
            channelState: a,
            toggleCollapsed: r,
            showCollapseButton: o = !1,
            getNumUnreadChannels: c,
        } = e,
        d = (0, Y.rm)(`recents-header-${t.id}-${(0, tR.GV)()}`),
        u = o && !t.isNSFW() && null != a && "nsfw" !== a.type;
    return (0, i.jsx)(tA.vN, {
        offset: tM,
        children: (0, i.jsxs)("div", {
            className: tD.ZO,
            ...d,
            tabIndex: 0,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r &&
                    null != a &&
                    (("ArrowRight" === e.key && a.collapsed) || ("ArrowLeft" === e.key && !a.collapsed)) &&
                    r?.(a);
            },
            children: [
                u && null != a ? (0, i.jsx)(tv, { channelState: a, toggle: r, getNumUnreadChannels: c }) : null,
                (0, i.jsx)(tF, { channel: t, gotoChannel: s }),
                (0, i.jsx)(tG, { channel: t, gotoChannel: s, mentionCount: l }),
                n,
            ],
        }),
    });
}
function tF(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(tL, { channel: t, gotoChannel: n })
        : (0, i.jsx)(tU, { channel: t, gotoChannel: n });
}
function tL(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, g.bG)([em.default], () => (t.isDM() ? em.default.getUser(t.getRecipientId()) : null)),
        l = null == s ? (0, tp.Y)(t) : s.getAvatarURL(void 0, 40);
    return (0, i.jsx)(tu.D, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)("img", { className: tD.ro, src: l, alt: "", "aria-hidden": !0 }),
    });
}
function tU(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, g.bG)([e_.A], () => e_.A.getGuild(t.guild_id));
    return null == s
        ? null
        : (0, i.jsx)(tx.Ay, {
              "aria-hidden": !0,
              className: tD.$f,
              guild: s,
              size: tx.Ay.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function tG(e) {
    let { channel: t, gotoChannel: n, mentionCount: s } = e,
        l = (0, g.bG)([e_.A], () => e_.A.getGuild(t.guild_id)),
        a = (0, g.bG)([to.A], () => to.A.getChannel(t.parent_id)),
        r = (0, g.bG)([tj.Ay], () => tj.Ay.getIsMentionLowImportance(t.id)),
        o = (0, tS.gU)(t, l),
        d = (0, tC.Ay)(t, !1),
        u = (0, tC.Ay)(a),
        h = null == a ? l?.name : `${l?.name} \u{203A} ${u}`,
        m = t.isMultiUserDM()
            ? $.intl.formatToPlainString($.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(tk, { channel: t })
              : (0, i.jsx)(tu.D, { className: c()(tD.W$, tD.J5), onClick: n, children: h });
    return (0, i.jsxs)("div", {
        className: tD.yP,
        children: [
            (0, i.jsx)(tg.D, {
                variant: "heading-md/semibold",
                className: tD.un,
                children: (0, i.jsxs)(tu.D, {
                    className: tD.HA,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == o
                            ? null
                            : (0, i.jsx)(o, {
                                  className: t.isForumLikeChannel() ? tD.dj : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, i.jsx)("span", { className: tD.je, children: d }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: tD.qS,
                                  children: (0, i.jsx)(tE.hV, {
                                      count: s,
                                      color: r
                                          ? eD.A.colors.BACKGROUND_MOD_STRONG.css
                                          : eD.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(et.E, { color: "text-default", variant: "text-xs/normal", className: tD.PL, children: m }),
        ],
    });
}
function tk(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: a,
        } = (0, g.cf)([em.default, ty.A, tT.A], () => {
            let e = em.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? ty.A.getStatus(e.id) : null,
                activities: null != e ? ty.A.getActivities(e.id) : null,
                applicationStream: null != e ? tT.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, tN.Ay)({ userId: n?.id });
    return (0, tf.A)({ activities: l, status: s, applicationStream: a, voiceChannel: r })
        ? (0, i.jsx)(t_.A, { user: n, activities: l, applicationStream: a, voiceChannel: r, hideTooltip: !0 })
        : null;
}
var tw = n(303727),
    tP = n(492589);
function tK(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, i.jsxs)("div", {
        className: tP.kL,
        children: [
            (0, i.jsxs)("div", {
                className: tP.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: tP.Kk, width: 36, height: 36 }),
                    l ? null : (0, i.jsx)(tw.A, { className: tP.uf }),
                ],
            }),
            (0, i.jsx)(tg.D, { className: tP.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(et.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, i.jsxs)(et.E, {
                              tag: "span",
                              className: tP.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [$.intl.string($.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var tH = n(724151);
let tB = { offset: { left: 4, right: -12 } };
function tz(e, t, n) {
    let s = t ? R.Ay.guildFilter : null,
        l = t ? R.Ay.roleFilter : null,
        a = t ? R.Ay.everyoneFilter : null,
        i = null;
    null != e && null != s && (i = s === M.KE7.ALL_SERVERS ? null : e.getGuildId()),
        te.A.fetchRecentMentions({ before: n, limit: M.Ue3, guildId: i, roles: l, everyone: a });
}
function tJ(e) {
    let { onJump: t } = e,
        n = (0, g.bG)([to.A, td.A], () => to.A.getChannel(td.A.getChannelId())),
        {
            messages: s,
            hasMore: l,
            loading: a,
            guildFilter: o,
            roleFilter: d,
            everyoneFilter: u,
        } = (0, g.cf)([R.Ay], () => ({
            messages: R.Ay.getMentions(),
            hasMore: R.Ay.hasMore,
            loading: R.Ay.loading,
            guildFilter: R.Ay.guildFilter,
            roleFilter: R.Ay.roleFilter,
            everyoneFilter: R.Ay.everyoneFilter,
        })),
        h = (0, tr.Sc)(),
        m = (0, tn.A)(o),
        A = (0, tn.A)(d),
        E = (0, tn.A)(u);
    r.useEffect(() => {
        R.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != A && d !== A) || (null != E && u !== E)) && tz(n, !0)
            : tz(n, !0);
    }, [m, o, A, d, E, u, n, !0]),
        (0, tt.Ay)(() => {
            s?.some(tl.$r) && (te.A.clearMentions(), tz(n, !0));
        }),
        r.useEffect(
            () => () => {
                te.A.truncateMentions(M.Ue3);
            },
            [],
        );
    let f = r.useCallback(() => null, []);
    return (0, i.jsx)(ti.Ay, {
        className: c()(tH.sH, { [tH.qC]: h }),
        scrollerClassName: tH.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            te.A.deleteRecentMention(e.id);
        },
        channel: n,
        messages: s,
        loading: a,
        hasMore: l,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            tz(n, !0, null != s && s.length > 0 ? s[s.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: f,
        renderEmptyState: tQ,
        renderMessage: tY,
        "aria-label": $.intl.string($.t.jbV6MM),
        listName: "recents",
    });
}
function tY(e, t) {
    return [(0, i.jsx)(tX, { message: e, gotoMessage: t, dismissible: !0 }, e.id)];
}
function tX(e) {
    let { message: t, gotoMessage: n, dismissible: s } = e;
    if (null == t) return null;
    let l = to.A.getChannel(t.channel_id);
    if (null == l || (0, ts.Jm)(l) || (0, ts.$v)(l)) return null;
    let a = tc.A.didAgree(l.getGuildId()),
        r = !!(0, ts.Gc)(l) && !a;
    return (0, i.jsxs)("div", {
        className: tH.kL,
        children: [
            (0, i.jsx)(tb, {
                channel: l,
                gotoChannel: n,
                children:
                    null != s ? (0, i.jsx)(e6.J, { size: "sm", onClick: () => te.A.deleteRecentMention(t.id) }) : null,
            }),
            (0, i.jsxs)("div", {
                className: tH.zC,
                children: [
                    (0, i.jsx)(tm, { className: tH.QT, onJump: n }),
                    (0, i.jsx)(
                        ta.A,
                        {
                            message: t,
                            channel: l,
                            className: tH.iU,
                            hideAccessories: r,
                            compact: O.hH.getSetting(),
                            animateAvatar: !1,
                            focusProps: tB,
                            trackAnnouncementViews: !0,
                        },
                        t.id,
                    ),
                ],
            }),
        ],
    });
}
function tQ() {
    return (0, i.jsx)(tK, { Icon: e5.X, header: $.intl.string($.t.bgDz74), tip: $.intl.string($.t.NS15vk) });
}
var tV = n(702841),
    tW = n(912592),
    t$ = n(761508),
    tq = n(966597),
    tZ = n(85109),
    t0 = n(214947),
    t1 = n(711950),
    t3 = n(912309),
    t2 = n(169085);
function t8(e) {
    let { closePopout: t } = e,
        n = (0, t3.kX)();
    return (0, i.jsx)(E.m, {
        asContainer: !0,
        text: $.intl.string($.t["lMR96+"]),
        children: (0, i.jsxs)(tu.D, {
            "aria-label": `${$.intl.string($.t["lMR96+"])}, ${n}`,
            className: t2.b,
            onClick: () => {
                eA.default.track(M.HAw.NOTIFICATION_CENTER_ACTION, { action_type: I.e1.FRIEND_REQUESTS_BUTTON_CLICK }),
                    t1.A.transitionToSection(M.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(t0.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(tE.hV, { count: n, color: eD.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var t7 = n(783977);
function t4(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, g.bG)([to.A, td.A], () => to.A.getChannel(td.A.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: a,
            guildFilter: r,
        } = (0, g.cf)([R.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = R.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(ez.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": $.intl.string($.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(eJ.sL, {
                id: "Everyone",
                label: $.intl.string($.t.cdyUsV),
                action: function () {
                    te.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, i.jsx)(eJ.sL, {
                id: "Roles",
                label: $.intl.string($.t.lZejCq),
                action: function () {
                    te.A.setGuildFilter({ roleFilter: !a });
                },
                checked: a,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(eJ.sL, {
                      id: "All Servers",
                      label: $.intl.string($.t.GWMA6s),
                      action: function () {
                          te.A.setGuildFilter({
                              guildFilter: r === M.KE7.THIS_SERVER ? M.KE7.ALL_SERVERS : M.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === M.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function t9() {
    let e = r.useRef(null);
    return (0, i.jsx)(eX.Y, {
        targetElementRef: e,
        align: "right",
        animation: eX.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(t4, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(E.m, {
                text: $.intl.string($.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(f.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": $.intl.string($.t.pEasFX),
                    icon: t7.R,
                    onClick: n,
                }),
            });
        },
    });
}
var t6 = n(481613),
    t5 = n.n(t6),
    ne = n(621466),
    nt = n(775602),
    nn = n(625494),
    ns = n(723702),
    nl = n(862482),
    na = n(640238);
function ni(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function l() {
        t(),
            eA.default.track(M.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(nr, { confirm: l, cancel: () => s(!1) }) : null,
            (0, i.jsx)(E.m, {
                text: $.intl.string($.t["8k+6QY"]),
                children: (0, i.jsx)(f.K, {
                    variant: "secondary",
                    "aria-label": $.intl.string($.t["8k+6QY"]),
                    size: "sm",
                    icon: N.i,
                    onClick: function (e) {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function nr(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(na.M, {
        dismissable: !0,
        header: $.intl.string($.t.h4bVZ2),
        confirmText: $.intl.string($.t.e6RscS),
        cancelText: $.intl.string($.t["ETE/oC"]),
        confirmButtonColor: nl.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(et.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: $.intl.string($.t["0MQ0Bf"]),
        }),
    });
}
var no = n(735438),
    nc = n.n(no),
    nd = n(749314),
    nu = n(308186),
    nh = n(311283),
    nm = n(717421),
    nA = n(933832),
    ng = n(976860),
    nE = n(782603),
    nf = n(461678),
    nN = n(914703);
function n_(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(eX.Y, {
        targetElementRef: n,
        align: "right",
        animation: eX.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(nN.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: $.intl.string($.t.ljs3Oe),
                  })
                : (0, i.jsx)(nf.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: $.intl.string($.t.ljs3Oe),
                      location: { section: M.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(E.m, {
                text: $.intl.string($.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(f.K, {
                    "aria-label": $.intl.string($.t.h850Ss),
                    icon: nE.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var nI = n(350527),
    np = n(218152),
    nC = n(970278),
    nS = n(747926),
    nR = n(403362),
    nx = n(37411),
    nT = n(288921);
function ny(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, g.yK)(
            [nC.A, to.A],
            () =>
                nc()(nC.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return k.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return to.A.getChannel(t);
                    })
                    .filter(nR.Vq)
                    .sort((e, t) => k.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        a = r.useCallback((e, t) => {
            (0, nS.JA)(e, t, nx.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                j.h.wait(() => {
                    (0, C.ack)(
                        t.channelId,
                        {
                            section: M.JJy.INBOX,
                            object: M.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: M.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: nT.k,
            children: l.map((e) =>
                (0, i.jsx)(
                    np.Cp,
                    { channel: n, children: (0, i.jsx)(nI.Ay, { className: nT.u, threadId: e.id, goToThread: a }) },
                    e.id,
                ),
            ),
        })
    );
}
var nj = n(989349),
    nO = n.n(nj),
    nD = n(123292),
    nM = n(559149),
    nv = n(857069),
    nb = n(694318),
    nF = n(789645),
    nL = n(33358),
    nU = n(384231),
    nG = n(207133),
    nk = n(704413),
    nw = n(9842),
    nP = n(5095),
    nK = n(320095),
    nH = n(143413),
    nB = n(763754),
    nz = n(467073),
    nJ = n(491182),
    nY = n(860227),
    nX = n(610912),
    nQ = n(375199),
    nV = n(824556),
    nW = n(715628),
    n$ = n(752636),
    nq = n(352043),
    nZ = n(268719),
    n0 = n(234957),
    n1 = n(888675),
    n3 = n(92919),
    n2 = n(798204);
let n8 = r.memo(function e(t) {
    let n,
        {
            channel: s,
            message: l,
            compact: a = !1,
            className: r,
            onContextMenu: o,
            onClick: d,
            disableInteraction: u = !1,
            hasThread: h,
            treatSpam: m,
        } = t,
        A = M.sl8.has(l.type) ? l.messageReference : void 0,
        E = (0, g.bG)([nw.A], () => nw.A.getMessageByReference(A)),
        f = (0, g.bG)([to.A], () =>
            l.type === M.lAJ.THREAD_STARTER_MESSAGE && E.state === nw.a.LOADED
                ? to.A.getChannel(E.message.channel_id)
                : null,
        ),
        N = O.X6.useSetting(),
        _ = O.hD.useSetting(),
        I = O.rs.useSetting(),
        p = O.kt.useSetting(),
        C = (0, nU.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        S = (0, nG.A)(s?.id),
        { disableReactionCreates: R } = (0, nz.A)(s),
        {
            content: x,
            hasSpoilerEmbeds: T,
            hasBailedAst: y,
        } = (0, nQ.A)(l, {
            hideSimpleEmbedContent: _ && I,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        j = (0, nB.Ay)(l),
        D = (0, g.bG)(
            [to.A],
            () => l.hasFlag(M.pr7.HAS_THREAD) && to.A.getChannel(k.default.castMessageIdAsChannelId(l.id)),
        ),
        v = l.type === M.lAJ.THREAD_STARTER_MESSAGE && E.state === nw.a.LOADED && null != f,
        b = !v && void 0 === n,
        F = (0, nV.A)({ message: l, channel: s, announcementEnabled: b }),
        L = (0, nL.P)(l),
        U = (0, nP._f)(l.id, l.channel_id),
        G = (0, nk.A)(l),
        w = (0, nY.fF)(l);
    return v
        ? (0, i.jsx)(e, { ...t, message: E.message, channel: f, hasThread: !1 })
        : (eI.A.isBlockedForMessage(l)
                ? (n = $.t["+FcYM/"])
                : eI.A.isIgnoredForMessage(l)
                  ? (n = $.t["VFWjc+"])
                  : (0, nb.kf)(l) && m && (n = $.t.xfkfTK),
            void 0 !== n)
          ? (0, i.jsx)(n7, { className: r, compact: a, count: 1, collapsedReason: n })
          : (0, i.jsx)(nJ.A, {
                compact: a,
                className: c()(r, { [n2.M1]: (0, nK.ec)(l), [n2.XN]: u, [n2._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, n0.A)(l, s, A, E, a),
                childrenHeader: (0, n$.A)({ ...t, author: j, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(nX.iV, {
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: T,
                    hasBailedAst: y,
                    compact: a,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: R,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: N,
                    inlineEmbedMedia: _,
                    renderEmbeds: I,
                    gifAutoPlay: p,
                    poll: G,
                    showListsAndHeaders: C,
                    showMaskedLinks: C,
                    shouldHideMediaOptions: S,
                    enabledContentHarmTypeFlags: L,
                    ctaButtonType: U,
                }),
                childrenExecutedCommand: (0, nZ.A)(l, s, a),
                childrenMessageContent: (0, nW.A)(t, x),
                childrenSystemMessage: (0, nq.A)(t),
                onContextMenu: o,
                onClick: d,
                hasThread: !1 !== h && null != D && l.hasFlag(M.pr7.HAS_THREAD),
                hasReply: l.type === M.lAJ.REPLY,
                isSystemMessage: (0, nH.A)(l),
                messageRef: F,
                author: j,
                "aria-labelledby": w,
                "aria-roledescription": $.intl.string($.t.BAB0yK),
            });
});
function n7(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, i.jsx)(nJ.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(n1.A, {
            compact: s,
            className: n3.L9,
            iconNode: (0, i.jsx)(nF.P, { size: "md", color: "currentColor", className: n3.Q6 }),
            children: (0, i.jsx)("div", { className: n3.Fo, children: $.intl.format(l, { count: n }) }),
        }),
    });
}
var n4 = n(495544),
    n9 = n(58703),
    n6 = n(143236),
    n5 = n(493336),
    se = n(181079),
    st = n(567035),
    sn = n(455234),
    ss = n(695633),
    sl = n(152007),
    sa = n(607508),
    si = n(594061),
    sr = n(617617),
    so = n(95701),
    sc = n(808728),
    sd = n(232835),
    su = n(576705),
    sh = n(711014),
    sm = n(543465),
    sA =
        (((s = {})[(s.Favorite = 0)] = "Favorite"),
        (s[(s.PrivateChannel = 1)] = "PrivateChannel"),
        (s[(s.HighImportanceMentioned = 2)] = "HighImportanceMentioned"),
        (s[(s.LowImportanceMentioned = 3)] = "LowImportanceMentioned"),
        (s[(s.AllMessagesNotifications = 4)] = "AllMessagesNotifications"),
        (s[(s.GuildChannel = 5)] = "GuildChannel"),
        (s[(s.OldChannel = 6)] = "OldChannel"),
        (s[(s.NoNotifications = 7)] = "NoNotifications"),
        (s[(s.ReallyOldChannel = 8)] = "ReallyOldChannel"),
        s),
    sg = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
class sE extends n6.EventEmitter {
    state;
    scrollerRef;
    undoStack = [];
    constructor(e, t) {
        super(), (this.state = e), (this.scrollerRef = t);
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t;
    }
    maybeLoadMore = () => {
        let e = this.scrollerRef.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 2e3 && this.loadMore());
    };
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ("loaded" !== e) return;
        let n = !1,
            s = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return { ...e, hasLoadedAnything: !0 };
                    else return e;
                return (
                    (e = this.populateInitialStateFromStore(e)).isFullyLoaded ||
                        (ef()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || s.some((e, n) => e !== t[n])) &&
            this.setState({ channels: s, loadState: n ? this.state.loadState : "done" });
    }
    populateInitialStateFromStore(e) {
        switch (e.type) {
            case "messages": {
                let t = sf(e, !1);
                if (t.messages.some(tl.$r)) return n5.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = nC.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, nR.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? sf(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        j.h.wait(() =>
            C.ack(
                t,
                {
                    section: M.JJy.INBOX,
                    object: M.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: M.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                void 0,
                n,
            ),
        );
        let s = this.state.channels.find((e) => e.channelId === t);
        (null != s && this.undoStack.push(s), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              nt.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        C.ack(
            e.channelId,
            { section: M.JJy.INBOX, object: M.ZSU.UNDO_MARK_AS_READ, objectType: M.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        j.h.wait(() => (0, st.A)([e], M.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: nc().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        C.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = nc().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            o = !r.collapsed;
        (l[t] = o),
            (0, si.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = o;
                },
                si.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: l,
                loadState: "done" !== a || o || r.isFullyLoaded ? a : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: o })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !sm.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !sl.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = nC.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        n5.A.clearChannel(e.channelId);
        let t = n5.A.fetchMessages({
            channelId: e.channelId,
            limit: M.EMb,
            jump: { messageId: e.oldestReadMessageId, flash: !0 },
        });
        return (
            null != t &&
            !1 !== t &&
            (this.setState({ loadState: "loading" }),
            t.then(
                (t) => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(e.channelId, (e) => {
                            ef()("messages" === e.type, "channel cannot change type");
                            let n = sf(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = { ...n, hasLoadedAnything: !0, isFullyLoaded: !0, hasError: !t }),
                                n
                            );
                        }),
                    });
                },
                () => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(
                            e.channelId,
                            (e) => (
                                ef()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...sf(e, !0),
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: e.messages[e.messages.length - 1]?.id,
                                }
                            ),
                        ),
                    });
                },
            ),
            !0)
        );
    }
    updateChannel(e, t) {
        return this.state.channels.map((n) => (n.channelId === e ? t(n) : n));
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
function sf(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = sd.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    k.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= k.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = k.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !s.hasMoreAfter),
    };
}
function sN() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = sr.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let l = to.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            to.A.getSortedPrivateChannels().forEach((n) => s_(e, t, null, n.id)),
            sh.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = sc.Ay.getSelectableChannelIds(n),
                    l = ss.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    s_(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) s_(e, t, n, s);
                });
            }),
            nc().sortBy(t, (e) => e.sortOrder)),
        l = nc()
            .uniq(s.map((e) => e.guildId))
            .filter(nR.Vq);
    return (
        j.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function s_(e, t, n, s) {
    if (null == s) return;
    let l = to.A.getChannel(s);
    if (null == l || (!so.Le.has(l.type) && sm.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === tj.Ay.getMentionCount(s)) return;
    } else if (!(0, sn.Y)(l) && 0 === tj.Ay.getMentionCount(s)) return;
    if ((!l.isPrivate() && !su.A.can(M.xBc.READ_MESSAGE_HISTORY, l)) || (0, ts.qR)(l)) return;
    let a = tj.Ay.ackMessageId(s);
    if (null == a) {
        let e = e_.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = k.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = tj.Ay.getOldestUnreadMessageId(s),
        r = tj.Ay.lastMessageId(s),
        o = tj.Ay.getMentionCount(s),
        c = o > 0 || l.isPrivate();
    if (null == r || k.default.compare(a, r) >= 0) return;
    let d = {
        guildId: n,
        channelId: s,
        oldestReadMessageId: a,
        oldestUnreadMessageId: i,
        newestUnreadMessageId: r,
        collapsed: !0 === e[s],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: o,
        sortOrder: (function (e, t, n) {
            let s = to.A.getChannel(t);
            if (se.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (tj.Ay.getMentionCount(t) > 0) return tj.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = k.default.extractTimestamp(n);
                if (Date.now() - e > sp) return 8;
                if (Date.now() - e > sI) return 6;
            }
            if (s.isThread()) {
                let e = (0, sa.l)(s);
                return e === nx.CP.ALL_MESSAGES ? 4 : e === nx.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = sm.Ay.getChannelMessageNotifications(e, t),
                    s = n === M.orn.NULL ? sm.Ay.getMessageNotifications(e) : n;
                return s === M.orn.ALL_MESSAGES ? 4 : s === M.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, ts.qR)(l)
        ? t.push({ ...d, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...d, type: "forum" })
          : t.push({ ...d, type: "messages", messages: [] });
}
let sI = 2 * G.A.Millis.DAY,
    sp = 10 * G.A.Millis.DAY;
var sC = n(916813);
let sS = { left: 4, right: -12 },
    sR = [M.lAJ.THREAD_CREATED];
function sx(e) {
    let { channel: t, message: n, compact: s, isGroupStart: l, treatSpam: a, gotoChannel: o } = e,
        c = (0, Y.rm)(n.id ?? ""),
        d = r.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), o(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, o, n.id],
        ),
        u = sR.includes(n.type);
    return (0, i.jsx)(tA.vN, {
        offset: sS,
        children: (0, i.jsxs)("div", {
            className: sC.zC,
            onKeyDown: d,
            ...c,
            children: [
                !u && (0, i.jsx)(tm, { className: sC.nn, onJump: (e) => o(e, n.id) }),
                (0, i.jsx)(n8, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: sC.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: l,
                    treatSpam: a,
                }),
            ],
        }),
    });
}
function sT(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        { enabled: l } = nM.A.useExperiment({ location: "20e3b0_1" }, { autoTrackExposure: !1 }),
        a = O.hH.useSetting(),
        r = (0, nb.iJ)(n),
        o = !1,
        c = 0 === t.messages.length || nO()(t.messages[0].timestamp).isSame(nO()(), "day"),
        d = em.default.getUser(n4.default.getId())?.hasFlag(M.nhx.SPAMMER) ?? !1,
        u = [];
    if (!t.collapsed) {
        let e = null,
            h = null,
            m = t.messages.slice(0, 25);
        m.forEach((t) => {
            if (!c && (null == e || !e.isSame(t.timestamp, "day"))) {
                let n = (0, n9.i$)(t.timestamp, "LL");
                u.push((0, i.jsx)(nd.A, { className: sC.yF, children: n }, n)), (e = nO()(t.timestamp));
            }
            let m = null == h || (0, nv.A)(n, h, t);
            (h = t),
                (o = o || (0, nb.kf)(t)),
                u.push(
                    (0, i.jsx)(
                        sx,
                        {
                            channel: n,
                            message: t,
                            compact: a,
                            isGroupStart: m,
                            treatSpam: !d && l && (0, nb.kf)(t) && r,
                            gotoChannel: s,
                        },
                        t.id,
                    ),
                );
        });
        let A = m[m.length - 1];
        null != A &&
            0 > k.default.compare(A.id, t.newestUnreadMessageId) &&
            u.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: sC.Gr,
                        children: (0, i.jsx)(nD.Q, {
                            variant: "primary",
                            text: `${$.intl.string($.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, A.id),
                        }),
                    },
                    "view-all",
                ),
            ),
            0 === u.length && (u = [(0, i.jsx)(X.y, {}, "spinner")]);
    }
    return o && r && nM.A.trackExposure({ location: "20e3b0_2" }), (0, i.jsx)("div", { className: sC.DZ, children: u });
}
var sy = n(179345);
let sj = r.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            s = r.useRef(null),
            [[l, a], o] = r.useState([0, 0]),
            c = t.deleted && l > 0;
        r.useLayoutEffect(() => {
            if (!t.deleted || 0 !== l || null == s.current) return;
            let e = s.current,
                a = e.offsetHeight;
            if (a <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                c = r > i ? a - (r - i) : a;
            o([a, a - c]);
        }, [t.deleted, t.channelId, n, l]);
        let { opacity: d, size: u } = (0, nm.z)(
                {
                    config: { clamp: !0, friction: 18, tension: 200 },
                    opacity: +!c,
                    size: +!c,
                    onRest: () => {
                        n(t.channelId);
                    },
                },
                "animate-always",
            ),
            h = {
                opacity: d,
                height: u.to((e) => {
                    var t, n;
                    return c ? ((t = l), (n = a) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(nu.animated.div, { ref: s, style: h, children: (0, i.jsx)(sO, { ...e }) });
    }),
    sO = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: l } = e,
            a = (0, g.bG)([to.A], () => to.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == a ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    j.h.wait(() => {
                        (0, C.ack)(
                            t.channelId,
                            {
                                section: M.JJy.INBOX,
                                object: M.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: M.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId);
                    });
            }),
            null == a || !t.hasLoadedAnything)
        )
            return null;
        function o(e, s) {
            (0, tI.zV)(M.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let l = s ?? t.oldestUnreadMessageId;
            (0, ng.pX)(M.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e);
        }
        return (0, i.jsx)("div", {
            className: sy.Ix,
            children: (0, i.jsx)(m.F, {
                component: (0, i.jsx)(tb, {
                    channel: a,
                    gotoChannel: o,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: l,
                    showCollapseButton: !0,
                    channelState: t,
                    getNumUnreadChannels: e.getNumUnreadChannels,
                    children: (0, i.jsxs)(eG.e, {
                        size: "sm",
                        className: sy.GC,
                        children: [(0, i.jsx)(n_, { channel: a }), (0, i.jsx)(sD, { ...e })],
                    }),
                }),
                children: t.collapsed
                    ? null
                    : "messages" === t.type
                      ? (0, i.jsx)(sT, { channel: t, channelRecord: a, gotoChannel: o })
                      : "forum" === t.type
                        ? (0, i.jsx)(ny, { channel: t, channelRecord: a, deleteChannel: s })
                        : null,
            }),
        });
    });
function sD(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        a = (0, nh.A)() && null != t.guildId;
    return (0, i.jsx)(E.m, {
        text: a ? $.intl.string($.t["5lLMhM"]) : $.intl.string($.t.e6RscS),
        children: (0, i.jsx)(f.K, {
            variant: "secondary",
            "aria-label": a ? $.intl.string($.t["5lLMhM"]) : $.intl.string($.t.e6RscS),
            size: "sm",
            icon: a ? N.i : nA.A,
            onClick: function () {
                a && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tI.zV)(M.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
var sM = n(449616),
    sv = n(350703);
function sb(e) {
    var t, n, s, l, a, o;
    let { onJump: d, showTutorial: u, setSeenTutorial: h, closePopout: m } = e,
        A = r.useRef(null),
        [E, f] = (function (e) {
            let [t, n] = r.useState(() => new sE(sN(), e)),
                [s, l] = r.useState(!1),
                a = r.useRef(Date.now()),
                [i, o] = r.useState(() => sN());
            r.useEffect(() => {
                function e(e) {
                    return o(e);
                }
                return (
                    t.on("change", e),
                    o(t.state),
                    () => {
                        t.off("change", e);
                    }
                );
            }, [t]),
                r.useEffect(() => {
                    if (null == i || i.channels.length > 0 || s) return;
                    let t = Date.now(),
                        r = sN();
                    0 === r.channels.length || t - a.current < 10 * G.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new sE(r, e)));
                }, [i, s, e]);
            let c = r.useRef(t);
            return (
                r.useLayoutEffect(() => {
                    c.current = t;
                }),
                r.useLayoutEffect(() => {
                    i?.channels, i?.loadState, c.current.maybeLoadMore();
                }, [i?.channels, i?.loadState]),
                r.useEffect(
                    () => (sd.A.addChangeListener(t.reloadMessages), () => sd.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        sm.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => sm.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        sl.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => sl.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nC.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => nC.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(A),
        { loadState: N, channels: _ } = E,
        { maybeLoadMore: I } = f,
        p = (0, g.bG)([nt.Ay], () => nt.Ay.messageGroupSpacing);
    (t = A),
        (n = E),
        (s = f),
        r.useLayoutEffect(() => {
            let { scrollToChannelIndex: e } = n;
            s.clearScrollToChannelIndex();
            let { current: l } = t;
            if (null == l || null == e) return;
            let a = l.getScrollerNode()?.children;
            if (null == a) return;
            let i = a[e];
            if (null == i) return;
            let { scrollTop: r, offsetHeight: o } = l.getScrollerState();
            (i.offsetTop < r || i.offsetTop > r + o) && l.scrollTo({ to: i.offsetTop });
        }),
        (l = E),
        (a = f),
        r.useEffect(() => {
            function e() {
                let e = l.channels.find((e) => !e.collapsed);
                null != e && a.markChannelRead(e);
            }
            return (
                nn._.subscribe(M.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    nn._.unsubscribe(M.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [a, l.channels]),
        (o = f),
        r.useEffect(() => {
            function e(e) {
                if ((0, en.hasAnyModalOpen)()) return;
                let t = (0, ne.BF)(e)?.activeElement;
                (0, ne.Cw)(t) ||
                    (((0, ns.isMac)() || (0, ns.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                        !e.shiftKey &&
                        !e.altKey &&
                        "z" === e.key &&
                        o.undoMarkChannelRead());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [o]),
        r.useEffect(() => {
            eA.default.track(M.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        r.useEffect(
            () => (
                j.h.subscribe("CONNECTION_OPEN", m),
                () => {
                    j.h.unsubscribe("CONNECTION_OPEN", m);
                }
            ),
            [m],
        ),
        (0, tt.Ay)(
            () => (
                nn._.subscribe(M.jej.INBOX_MARK_ALL_UNREADS_READ, f.markAllRead),
                () => {
                    nn._.unsubscribe(M.jej.INBOX_MARK_ALL_UNREADS_READ, f.markAllRead);
                }
            ),
        );
    let C = (0, V.A)("unreads", A);
    return 0 === _.length
        ? (0, i.jsx)(tK, {
              Icon: tW.K,
              header: $.intl.string($.t["6XMM+D"]),
              tip: t5().os?.family === "OS X" ? $.intl.string($.t.w9uDOW) : $.intl.string($.t.BiUJC6),
          })
        : (0, i.jsx)(Y.hD, {
              navigator: C,
              children: (0, i.jsx)(Y.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(Q.Ch, {
                          ref: (e) => {
                              (A.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: N === sg.Done ? void 0 : I,
                          className: c()(sv.XG, `group-spacing-${p}`),
                          children: [
                              u ? (0, i.jsx)(sF, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: a,
                                          toggle: r,
                                          getNumUnreadChannels: o,
                                      } = t,
                                      c = null;
                                  return nc().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let d = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === sA.ReallyOldChannel
                                                  ? d.push(
                                                        (0, i.jsx)(
                                                            nd.A,
                                                            {
                                                                className: sM.y,
                                                                contentClassName: sM.$,
                                                                children: $.intl.string($.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === sA.NoNotifications &&
                                                    d.push(
                                                        (0, i.jsx)(
                                                            nd.A,
                                                            {
                                                                className: sM.y,
                                                                contentClassName: sM.$,
                                                                children: $.intl.string($.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          d.push(
                                              (0, i.jsx)(
                                                  sj,
                                                  {
                                                      channel: e,
                                                      markChannelRead: s,
                                                      markGuildRead: l,
                                                      toggle: r,
                                                      deleteChannel: a,
                                                      onJump: n,
                                                      getNumUnreadChannels: o,
                                                  },
                                                  e.channelId,
                                              ),
                                          ),
                                          d
                                      );
                                  });
                              })(_, f, d),
                              N === sg.Done ? null : (0, i.jsx)(X.y, { className: sv.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function sF(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: sv.d$,
        children: [
            (0, i.jsx)("div", { className: sv.cm, children: (0, i.jsx)(tW.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(tg.D, {
                        className: sv.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: $.intl.string($.t.vZPktJ),
                    }),
                    (0, i.jsx)(et.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: $.intl.string($.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: sv.dh,
                        children: (0, i.jsx)(ek.$, {
                            variant: "primary",
                            size: "sm",
                            text: $.intl.string($.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function sL() {
    return (0, i.jsx)(tK, {
        Icon: tW.K,
        disableStars: !0,
        header: $.intl.string($.t["KG/ynf"]),
        tip: $.intl.string($.t.cvcKzX),
    });
}
function sU() {
    return (0, i.jsx)(ni, { onClick: () => nn._.dispatch(M.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var sG = n(693886);
function sk(e) {
    let { tab: t, setTab: n, badgeState: s, closePopout: l } = e,
        { enabled: a, inInbox: r } = tq.A.useConfig({ location: "RecentsPopout" }),
        o = (0, tr.Sc)(),
        c = (0, tV.bG)([tZ.A], () => tZ.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: sG.wx,
        children: [
            (0, i.jsxs)("div", {
                className: sG.qd,
                children: [
                    (0, i.jsx)(tW.K, { size: "md", color: "currentColor", className: sG.yH }),
                    (0, i.jsx)(tg.D, {
                        className: sG.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: $.intl.string($.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(es.s, {
                        className: sG.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": $.intl.string($.t["8k+6QY"]),
                        children: [(0, i.jsx)(sw, { tab: t }), (0, i.jsx)(t8, { closePopout: l })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: sG.YF,
                children: (0, i.jsxs)(t$.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: sG.$H,
                    children: [
                        (0, i.jsxs)(t$.V.Item, {
                            id: u.Y2.FOR_YOU,
                            "aria-label": $.intl.string($.t["En+D+u"]),
                            className: sG.Mf,
                            children: [
                                (0, i.jsx)("span", { className: sG.Gn, children: $.intl.string($.t["En+D+u"]) }),
                                s?.badgeForYou
                                    ? (0, i.jsx)(tE.SC, {
                                          color: eD.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                          className: sG.bG,
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(t$.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": $.intl.string($.t.sRUdB8),
                            className: sG.Mf,
                            children: (0, i.jsx)("span", { className: sG.Gn, children: $.intl.string($.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(t$.V.Item, {
                            "aria-label": $.intl.string($.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: sG.Mf,
                            children: (0, i.jsx)("span", { className: sG.Gn, children: $.intl.string($.t.GRZF96) }),
                        }),
                        a && r
                            ? (0, i.jsx)(t$.V.Item, {
                                  "aria-label": $.intl.string($.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: sG.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sG.Gn,
                                      children:
                                          0 === c
                                              ? $.intl.string($.t["2pAkDA"])
                                              : $.intl.formatToPlainString($.t.I4fryG, { count: c }),
                                  }),
                              })
                            : null,
                        o
                            ? (0, i.jsx)(t$.V.Item, {
                                  "aria-label": $.intl.string($.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: sG.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: sG.Gn,
                                      children: $.intl.string($.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function sw(e) {
    let { tab: t } = e;
    return t === u.Y2.FOR_YOU
        ? (0, i.jsx)(e9, {})
        : t === u.Y2.UNREADS
          ? (0, i.jsx)(sU, {})
          : t === u.Y2.MENTIONS
            ? (0, i.jsx)(t9, {})
            : null;
}
var sP = n(406810),
    sK = n(285796),
    sH = n(151282),
    sB = n(199160),
    sz =
        (((a = {})[(a.SCHEDULED = 0)] = "SCHEDULED"),
        (a[(a.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (a[(a.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (a[(a.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (a[(a.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (a[(a.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        a),
    sJ = n(970244),
    sY = n(383233),
    sX = n(933494);
let sQ = { offset: { left: 4, right: -12 } };
function sV() {
    return (
        r.useEffect(() => {
            (0, sH.sy)();
        }, []),
        (0, i.jsx)(sW, {})
    );
}
function sW() {
    let e = (0, g.bG)([sB.A], () => sB.A.getScheduledMessagesForInbox(), []),
        t = r.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, g.bG)([sB.A], () => sB.A.loading, []),
        s = r.useRef(null),
        l = (0, V.A)("scheduled-messages", s);
    return n
        ? (0, i.jsx)(X.y, { className: sX.k$ })
        : 0 === t.length
          ? (0, i.jsx)(tK, { Icon: sP.O, header: $.intl.string($.t.aJQZfZ), tip: $.intl.string($.t.rCN4pN) })
          : (0, i.jsx)(Y.hD, {
                navigator: l,
                children: (0, i.jsx)(Y.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsx)(Q.Ch, {
                            className: sX.XG,
                            ref: (e) => {
                                (s.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...l,
                            children: (0, i.jsx)(s$, { scheduledMessages: t }),
                        });
                    },
                }),
            });
}
function s$(e) {
    let { scheduledMessages: t } = e,
        n = r.useMemo(
            () =>
                t.reduce((e, t) => {
                    let n = to.A.getChannel(t.scheduledMessage.channelId);
                    return (
                        null == n ||
                            (e[n.id] = { channel: n, scheduledMessages: [...(e[n.id]?.scheduledMessages ?? []), t] }),
                        e
                    );
                }, {}),
            [t],
        ),
        s = (0, g.bG)([sB.A], () => sB.A.getMessagesPendingDeletion(), []);
    return (0, i.jsx)(i.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: l }] = e;
            return (0, i.jsxs)(
                "div",
                {
                    className: sX.WG,
                    children: [
                        (0, i.jsx)(tb, {
                            channel: n,
                            gotoChannel: () => (0, ng.pX)(M.BVt.CHANNEL(n.getGuildId(), n.id)),
                            children: null,
                        }),
                        l.map((e) => {
                            let t = s.has(e.scheduledMessageId);
                            return (0, i.jsx)(
                                sq,
                                { scheduledMessage: e, channel: n, isPendingDeletion: t },
                                e.scheduledMessageId,
                            );
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
let sq = r.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: s } = e,
        l = new sY.Ay({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: em.default.getUser(t.userId),
            timestamp: nO()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: a, stateMessage: o } = (function (e) {
            switch (e) {
                case sz.SCHEDULED:
                    return { isError: !1, stateMessage: $.intl.string($.t.Fn6Odn) };
                case sz.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: $.intl.string($.t.v5O2dK) };
                case sz.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: $.intl.string($.t.j8uIfG) };
                case sz.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: $.intl.string($.t["w6zHX/"]) };
                case sz.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: $.intl.string($.t.pflV7z) };
                case sz.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: $.intl.string($.t.j8uIfG) };
                default:
                    (0, nR.xb)(e);
            }
        })(t.state),
        d = r.useCallback(() => {
            (0, sH.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, sJ.Re)();
                })
                .catch((e) => {
                    (0, sJ.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, sJ.CI)({ scheduledMessage: t });
        }, [t]);
    return (0, i.jsx)(
        "div",
        {
            className: c()(sX.zC, { [sX._4]: a, [sX.j3]: !a }),
            children: s
                ? (0, i.jsx)(X.y, { className: sX.$5 })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(et.E, {
                              variant: "text-xs/semibold",
                              color: a ? "text-feedback-critical" : "text-feedback-positive",
                              className: sX.Rq,
                              children: o,
                          }),
                          (0, i.jsxs)("div", {
                              className: sX.Pd,
                              children: [
                                  (0, i.jsx)(
                                      ta.A,
                                      {
                                          message: l,
                                          channel: n,
                                          className: sX.iU,
                                          compact: O.hH.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: sQ,
                                      },
                                      l.id,
                                  ),
                                  (0, i.jsxs)(eG.e, {
                                      size: "sm",
                                      children: [
                                          (0, i.jsx)(f.K, {
                                              icon: sP.O,
                                              onClick: u,
                                              variant: "icon-only",
                                              "aria-label": $.intl.string($.t.SBcdAN),
                                          }),
                                          (0, i.jsx)(f.K, {
                                              icon: sK.a,
                                              onClick: d,
                                              "aria-label": $.intl.string($.t.O3sL8F),
                                              variant: "icon-only",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
        },
        l.id,
    );
});
var sZ = n(66001);
function s0(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: l,
        badgeState: a,
        closePopout: r,
        handleMentionsJump: o,
        showTutorial: g,
        setSeenTutorial: E,
        forLaterEnabled: f,
        showForLater: N,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": $.intl.string($.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(sZ.k, { [sZ.q]: n }),
            children: (0, i.jsx)(m.F, {
                component: (0, i.jsx)(sk, { tab: s, setTab: l, badgeState: a, closePopout: r }),
                children:
                    s === u.Y2.FOR_YOU
                        ? (0, i.jsx)(e7, {})
                        : s === u.Y2.MENTIONS
                          ? (0, i.jsx)(tJ, { onJump: o })
                          : f && N && s === u.Y2.BOOKMARKS
                            ? (0, i.jsx)(A.J, { closePopout: r })
                            : s === u.Y2.SCHEDULED
                              ? (0, i.jsx)(sV, {})
                              : (0, i.jsx)(d.tH, {
                                    fallback: (0, i.jsx)(sL, {}),
                                    children: (0, i.jsx)(sb, {
                                        onJump: o,
                                        showTutorial: g,
                                        setSeenTutorial: E,
                                        closePopout: r,
                                    }),
                                }),
            }),
        }),
    });
}
