n.r(t), n.d(t, { default: () => s$ });
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
    _ = n(408278),
    N = n(143838),
    f = n(252431),
    I = n(322387),
    C = n(995273),
    S = n(334738),
    p = n(186840),
    R = n(135978),
    x = n(562708),
    T = n(636537),
    y = n(933681),
    j = n(228366),
    D = n(885386),
    O = n(499785),
    M = n(652215);
function v(e) {
    j.h.dispatch({ type: "NOTIFICATION_CENTER_SET_ACTIVE", active: e });
}
function b() {
    j.h.dispatch({ type: "RESET_NOTIFICATION_CENTER" });
}
async function F(e, t) {
    if (f.A.loading) return;
    await j.h.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS" });
    let n = Math.ceil(f.A.items.length / e.limit);
    try {
        let s = await O.A.get({
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
    let t = D.ns.getSetting();
    try {
        j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id }),
            await O.A.delete({
                url: M.Rsh.NOTIF_CENTER_ITEMS(e.id),
                body: { item_type: (0, C.gk)(e) ? "mention" : "regular" },
                trackedActionData: {
                    event: x.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                    properties: { notification_center_id: e.id, acked: (0, C.NW)(e, t), item_type: e.type },
                },
                rejectWithError: !1,
            });
    } catch (t) {
        throw (j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE", item: e }), t);
    }
}
var k = n(927813),
    G = n(935208);
let w = 90 * k.A.Millis.DAY,
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
        return null != e.local_id && (null != P.localItemAcks[e.local_id] || G.default.age(e.id) > w);
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
let J = () => {
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
                errored: _,
            } = (0, g.cf)([f.A], () => ({
                initialized: f.A.initialized,
                loading: f.A.loading,
                items: f.A.items,
                hasMore: f.A.hasMore,
                cursor: f.A.cursor,
                errored: f.A.errored,
            })),
            { roleFilter: N, everyoneFilter: I } = (0, g.cf)([R.Ay], () => ({
                everyoneFilter: R.Ay.everyoneFilter,
                roleFilter: R.Ay.roleFilter,
            }));
        r.useEffect(() => (v(!0), () => v(!1)), []),
            r.useEffect(() => {
                u && t && (0, S.d_)(z.P.NOTIFICATION_CENTER);
            }, [t, u]);
        let C = (0, p.A)();
        r.useEffect(
            () => () => {
                s ? !C() && (_ || m.length > 100) && b() : n && m.length > 100 && b();
            },
            [n, m, s, C, _],
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
                    (e || !_) &&
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
            [u, A, E, _, l, N, I],
        );
        return {
            initialized: u,
            loading: h,
            items: m,
            hasMore: A,
            loadMore: x,
            loadingMore: c,
            setReadNotifItemToAcked: (e) => {
                e.acked || (e.acked = !0);
            },
            errored: _,
        };
    })({ isFocused: !0, isDesktop: !0 });
    return {
        initialized: e,
        loading: t,
        items: n.filter((e) => "notification-center-item" === e.kind),
        hasMore: s,
        loadMore: l,
    };
};
var Y = n(837381),
    X = n(289873),
    Q = n(689175),
    V = n(928039),
    W = n(139286),
    $ = n(375708),
    q = n(729920);
let Z = () =>
    (0, i.jsxs)("div", {
        className: q.kL,
        children: [
            (0, i.jsx)("img", { className: q.Sl, alt: "", src: "/assets/993e32de43e0d570.svg" }),
            (0, i.jsx)("div", { className: q.DD, children: $.intl.string($.t.MwjTvn) }),
            (0, i.jsx)("div", { className: q.rf, children: $.intl.string($.t.AKBgPy) }),
        ],
    });
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
    e_ = n.n(eE),
    eN = n(698441),
    ef = n(71393),
    eI = n(994500),
    eC = n(240248),
    eS = n(427262);
function ep(e) {
    let { username: t, applicationId: n, renderApplication: s, withApplication: l, withDefault: a } = e;
    return null != n
        ? $.intl.format(l, { username: t, applicationName: () => s(n) })
        : $.intl.format(a, { username: t });
}
n(321073);
var eR = n(429913);
let ex = new Set([
    I.Uo.INCOMING_GAME_FRIEND_REQUESTS,
    I.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED,
    I.Uo.INCOMING_FRIEND_REQUESTS,
    I.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED,
]);
var eT = n(573435),
    ey = n(486020),
    ej = n(661531);
let eD = "/assets/03f95d2957fb9ed2.svg",
    eO = "/assets/89f880b6428b1aea.svg",
    eM = {
        MISSED_MESSAGES: "/assets/f7d60ae597f16731.svg",
        FRIEND_REQUEST_REMINDER: "/assets/70750ced4a16e7ec.svg",
        SCHEDULED_GUILD_EVENT: "/assets/a67e28f364664918.svg",
        TOP_MESSAGES: "/assets/1704496c3b4213df.svg",
        NOTIFICATION_CENTER: "/assets/417c4def7a33b274.svg",
        UPDATE_PROFILE: "/assets/21131df8cbb15b26.svg",
        FIND_FRIENDS: eD,
        ADD_FRIEND: eD,
        FIRST_MESSAGE: "/assets/5ef5055571515a96.svg",
    };
var ev = n(555644);
let eb = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, i.jsx)("div", {
                  className: ev.tK,
                  style: { backgroundColor: t.color.css },
                  children: (0, i.jsx)("img", { className: ev.QR, alt: "", src: t.icon }),
              });
    },
    eF = r.memo(function (e) {
        let { item: t } = e,
            n = null,
            s = !1,
            l = (0, g.bG)([ef.A], () => ef.A.getGuild(t.guild_id));
        if (null != t.icon_name)
            n = (0, i.jsx)("img", {
                alt: "",
                src: eM["icHighlight" === t.icon_name ? "TOP_MESSAGES" : "NOTIFICATION_CENTER"],
            });
        else if (null != t.other_user) {
            let e = t.other_user instanceof eh.A ? t.other_user : new eh.A(t.other_user),
                l = e.globalName ?? e.username;
            (n = (0, i.jsx)("img", { alt: l, className: ev.Sl, src: e.getAvatarURL(void 0, 40) })), (s = !0);
        } else if (null != t.icon_url) {
            let e = (null != l ? ey.Ay.getGuildIconURL({ id: l.id, icon: l.icon, size: 40 }) : null) ?? t.icon_url;
            n = (0, i.jsx)("img", { alt: l?.name ?? "", className: ev.Sl, src: e });
        } else
            n = (0, i.jsx)("img", {
                alt: "",
                src: eM[
                    ((e) => {
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
        let a = ((e) => {
            switch (e) {
                case I.hW.GO_LIVE_PUSH:
                    return { icon: "/assets/0038fc958959af7c.svg", color: ej.A.colors.BACKGROUND_MOD_STRONG };
                case I.hW.FRIEND_REQUEST_ACCEPTED:
                case I.hW.GAME_FRIEND_REQUEST_ACCEPTED:
                    return { icon: "/assets/c8ae30e56eb87fdf.svg", color: ej.A.colors.STATUS_POSITIVE_BACKGROUND };
                case I.hW.FRIEND_REQUEST_PENDING:
                case I.hW.FRIEND_SUGGESTION_CREATED:
                    return { icon: eO, color: ej.A.colors.BACKGROUND_MOD_STRONG };
                case I.hW.DM_FRIEND_NUDGE:
                    return { icon: "/assets/a7dd94c728c7093a.svg", color: ej.A.colors.BACKGROUND_MOD_STRONG };
                case I.Uo.INCOMING_FRIEND_REQUESTS:
                case I.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                    return { icon: eO, color: ej.A.colors.BACKGROUND_MOD_STRONG };
                case I.Uo.INCOMING_GAME_FRIEND_REQUESTS:
                case I.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                    return { icon: "/assets/fe02228daf40c37f.svg", color: ej.A.colors.BACKGROUND_MOD_STRONG };
                default:
                    return null;
            }
        })(t.type);
        return (0, i.jsxs)("div", {
            className: ev.kL,
            children: [
                (0, i.jsx)(eT.Ay, {
                    mask: null == a ? eT.hW.AVATAR_DEFAULT : eT.hW.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: ev.dK,
                    children: (0, i.jsx)("div", {
                        className: ev.ZS,
                        style: s
                            ? void 0
                            : {
                                  backgroundColor: ((e) => {
                                      switch (e.item_enum) {
                                          case I.r_.UPDATE_PROFILE:
                                              return "#83DDC5";
                                          case I.r_.ADD_FRIEND:
                                          case I.r_.FIND_FRIENDS:
                                              return "#F47FFF";
                                          case I.r_.FIRST_MESSAGE:
                                              return "#FFDE4D";
                                          default:
                                              return ej.A.unsafe_rawColors.BRAND_500.css;
                                      }
                                  })(t),
                              },
                        children: n,
                    }),
                }),
                (0, i.jsx)(eb, { mask: a }),
            ],
        });
    });
var eL = n(825484),
    eU = n(821609),
    ek = n(308528),
    eG = n(430159),
    ew = n(897968);
function eP(e) {
    let { userId: t } = e,
        n = r.useCallback(
            (e) => {
                e.stopPropagation(), ek.A.openPrivateChannel({ recipientIds: [t] });
            },
            [t],
        );
    return (0, i.jsx)("div", {
        className: ew.Ze,
        children: (0, i.jsx)(eL.e, {
            size: "sm",
            children: (0, i.jsx)(eU.$, { variant: "secondary", onClick: n, text: $.intl.string($.t["g33r/P"]) }),
        }),
    });
}
function eK(e) {
    let { userId: t, applicationId: n } = e,
        [s, l] = r.useState(!1),
        [a, o] = r.useState(!1),
        c = r.useCallback(
            async (e) => {
                e.stopPropagation(), o(!0);
                try {
                    await eG.A.cancelFriendRequest({
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
                    await eG.A.maybeConfirmFriendRequestAccept({
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
        className: ew.Ze,
        children: (0, i.jsxs)(eL.e, {
            size: "sm",
            children: [
                (0, i.jsx)(eU.$, {
                    variant: "active",
                    onClick: d,
                    text: $.intl.string($.t.Zcibdf),
                    loading: s,
                    disabled: a,
                }),
                (0, i.jsx)(eU.$, {
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
var eH = n(980707),
    eB = n(477782),
    ez = n(241326),
    eJ = n(922016),
    eY = n(365199);
let eX = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, i.jsx)(eH.W, {
            "data-menu-migrated": !0,
            navId: "notification-actions",
            onClose: n,
            onSelect: n,
            "aria-label": $.intl.string($.t.ljs3Oe),
            children: (0, i.jsx)(eB.Dr, {
                id: "delete",
                label: $.intl.string($.t.oyYWHE),
                icon: ez.u,
                leadingAccessory: { type: "icon", icon: ez.u },
                action: async () => {
                    await U(t);
                },
            }),
        });
    },
    eQ = r.memo(function (e) {
        let { item: t } = e,
            n = r.useRef(null);
        return (0, i.jsx)(eJ.Y, {
            targetElementRef: n,
            renderPopout: (e) => (0, i.jsx)(eX, { ...e, item: t }),
            position: "bottom",
            align: "right",
            animation: eJ.Y.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)(E.m, {
                    text: $.intl.string($.t["UKOtz+"]),
                    asContainer: !0,
                    children: (0, i.jsx)(_.K, {
                        buttonRef: n,
                        size: "sm",
                        icon: eY.j,
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
function eV(e) {
    let { item: t } = e,
        n = t.message?.content;
    if (null == n) return (0, i.jsx)("div", {});
    let s = em.default.getUser(t.message?.author?.id) ?? new eh.A(t.message?.author),
        l = ec.A.parse(n);
    return (0, i.jsxs)("div", {
        className: ew.PI,
        children: [
            (0, i.jsx)(ea.A, { user: s, size: ee._3.SIZE_24 }),
            (0, i.jsx)(et.E, { className: ew.Bp, variant: "text-sm/normal", lineClamp: 2, children: l }),
        ],
    });
}
function eW(e) {
    let {
        item: { callout: t },
    } = e;
    if (null == t) return null;
    let n = ec.A.parse(t);
    return (0, i.jsx)("div", {
        className: ew.CD,
        children: (0, i.jsx)(et.E, { variant: "text-sm/normal", lineClamp: 2, children: n }),
    });
}
function e$(e) {
    let { item: t } = e,
        n = "/assets/4f3c39503b4b7fe4.svg",
        s = $.intl.string($.t.SJTHJb);
    return (
        t.completed && ((n = "/assets/7f6a66c14402315f.svg"), (s = $.intl.string($.t.f6RTAM))),
        (0, i.jsxs)("div", {
            className: ew.AE,
            children: [
                (0, i.jsx)("img", { className: ew.kv, alt: "", src: n }),
                (0, i.jsx)(et.E, { className: ew.mc, variant: "text-xs/bold", color: "text-default", children: s }),
            ],
        })
    );
}
function eq(e) {
    let { applicationId: t } = e,
        n = (0, g.bG)([er.A], () => er.A.getApplication(t));
    return null == n ? (0, i.jsx)("div", {}) : (0, i.jsx)(ed.A, { application: n }, n.id);
}
let eZ = r.memo(function (e) {
        let t,
            { item: s, ackedBeforeId: l } = e,
            { analyticsLocations: a } = (0, ei.Ay)(),
            o = ((t = (0, g.bG)([B], () => B.isLocalItemAcked(s))), !s.forceUnacked && (t || (0, C.NW)(s, l))),
            c = r.useCallback(async () => {
                var e, t;
                if (
                    (o ||
                        (null != s.local_id
                            ? ((e = [s.local_id]),
                              j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: e }))
                            : (0, C.gk)(s)
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
            ? (d = (0, i.jsx)(eK, { userId: s.other_user.id }))
            : s.type === I.Uo.INCOMING_GAME_FRIEND_REQUESTS && null != s.other_user
              ? (d = (0, i.jsx)(eK, { userId: s.other_user.id, applicationId: s.applicationId }))
              : (s.type === I.hW.FRIEND_REQUEST_ACCEPTED || s.type === I.hW.GAME_FRIEND_REQUEST_ACCEPTED) &&
                null != s.other_user &&
                (d = (0, i.jsx)(eP, { userId: s.other_user.id }));
        let u = null != s.local_id,
            h = (function (e) {
                let { item: t, renderApplication: n } = e,
                    s = t.other_user?.id ?? M.dJq,
                    l = eS.Ay.getName(em.default.getUser(t.other_user?.id)),
                    a = t.applicationId;
                switch (t.type) {
                    case I.Uo.FRIEND_REQUESTS_GROUPED:
                        let i = eS.Ay.getName(em.default.getUser(t.other_users?.[0]?.id)),
                            r = eS.Ay.getName(em.default.getUser(t.other_users?.[1]?.id)),
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
                            m = ef.A.getGuild(u?.guild_id)?.name,
                            A = (0, eN.AZ)(u ?? void 0);
                        return (0, eC.uJ)(m) || (0, eC.uJ)(h) || !A
                            ? (t.body ?? "")
                            : $.intl.format($.t.AyvfXR, { event_name: h, guild_name: m });
                    case I.Uo.INCOMING_FRIEND_REQUESTS:
                        return ep({
                            username: l,
                            applicationId: a,
                            renderApplication: n,
                            withApplication: $.t["9Dgf1L"],
                            withDefault: $.t.uIomXw,
                        });
                    case I.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                        return ep({
                            username: l,
                            applicationId: a,
                            renderApplication: n,
                            withApplication: $.t.nnC1q9,
                            withDefault: $.t["5Uzkdp"],
                        });
                    case I.hW.FRIEND_REQUEST_ACCEPTED:
                        return ep({
                            username: l,
                            applicationId: a,
                            renderApplication: n,
                            withApplication: $.t.jXlYiF,
                            withDefault: $.t.McYRBk,
                        });
                    case I.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                        return (
                            e_()(null != a, `Expected application id for ${t.type}`),
                            $.intl.format($.t["BB/0vn"], { username: l, applicationName: () => n(a) })
                        );
                    case I.Uo.INCOMING_GAME_FRIEND_REQUESTS:
                        return (
                            e_()(null != a, `Expected application id for ${t.type}`),
                            $.intl.format($.t["7cqOLI"], { username: l, applicationName: () => n(a) })
                        );
                    case I.hW.GAME_FRIEND_REQUEST_ACCEPTED:
                        if (null == a) return t.body;
                        return $.intl.format($.t.Wi64vN, { username: l, applicationName: () => n(a) });
                }
                return t.body ?? "";
            })({ item: s, renderApplication: (e) => (0, i.jsx)(eq, { applicationId: e }) }),
            { emoji_id: m, emoji_name: A } = s,
            E = null != m || null != A ? (0, i.jsx)(el.A, { className: ew.Zg, emojiId: m, emojiName: A }) : null;
        return (0, i.jsxs)("div", {
            className: ew.nM,
            children: [
                (0, i.jsxs)(es.s, {
                    className: ew.u4,
                    focusProps: { offset: 4 },
                    "aria-label": h,
                    onClick: c,
                    children: [
                        o ? null : (0, i.jsx)("div", { className: ew.gy }),
                        (0, i.jsx)(eF, { item: s }),
                        (0, i.jsxs)("div", {
                            className: ew.rf,
                            children: [
                                "lifecycle_item" === s.type && null != s.item_enum && (0, i.jsx)(e$, { item: s }),
                                (0, i.jsxs)(et.E, {
                                    variant: "text-md/normal",
                                    color: o ? "text-muted" : "text-default",
                                    children: ["string" != typeof h ? h : ec.A.parse(h), E],
                                }),
                                s.message?.content != null ? (0, i.jsx)(eV, { item: s }) : null,
                                null != s.callout ? (0, i.jsx)(eW, { item: s }) : null,
                                (0, i.jsx)(et.E, {
                                    variant: "text-xs/medium",
                                    color: o ? "text-muted" : "text-default",
                                    children: (0, C.jb)(G.default.extractTimestamp(s.id)),
                                }),
                                d,
                            ],
                        }),
                    ],
                }),
                u ? null : (0, i.jsx)(eQ, { item: s }),
            ],
        });
    }),
    e0 = r.memo(function (e) {
        let t,
            { items: n } = e,
            s = D.ns.useSetting();
        return (
            (t = r.useMemo(() => {
                let e = new Set(),
                    t = [];
                return (
                    n.forEach((n) => {
                        let { applicationId: s, type: l } = n;
                        !ex.has(l) || null == s || e.has(s) || (e.add(s), t.push(s));
                    }),
                    t
                );
            }, [n])),
            (0, eR.A)(t),
            (0, i.jsx)(i.Fragment, { children: n.map((e) => (0, i.jsx)(eZ, { item: e, ackedBeforeId: s }, e.id)) })
        );
    });
var e1 = n(523396);
function e3(e) {
    let { initialized: t, items: n, loading: s, loadMore: l } = e,
        a = r.useRef(null),
        o = (0, V.A)("for-you", a);
    (0, W.A)(
        {
            type: x.ImpressionTypes.VIEW,
            name: x.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: { empty: 0 === n.length },
        },
        { disableTrack: !t },
        [t],
    );
    let c = () => {
        let e = a.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 1500 && l());
    };
    return t
        ? 0 === n.length
            ? (0, i.jsx)(Z, {})
            : (0, i.jsx)(Y.hD, {
                  navigator: o,
                  children: (0, i.jsx)(Y.PR, {
                      children: (e) => {
                          let { ref: t, ...l } = e;
                          return (0, i.jsxs)(Q.Ch, {
                              className: e1.kL,
                              ref: (e) => {
                                  (a.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              ...l,
                              onScroll: c,
                              children: [
                                  (0, i.jsx)(e0, { items: n }),
                                  s ? (0, i.jsx)(X.y, { className: e1.u1 }) : null,
                              ],
                          });
                      },
                  }),
              })
        : (0, i.jsx)(X.y, { className: e1.k$ });
}
function e2() {
    let { initialized: e, items: t, loading: n, loadMore: s } = J(),
        l = e7(
            t,
            (0, g.bG)([f.A], () => f.A.localItems),
        );
    return (0, i.jsx)(e3, { initialized: e, items: l, loading: n, loadMore: s });
}
function e7(e, t) {
    return r.useMemo(() => [...[...e, ...t].sort((e, t) => -1 * G.default.compare(e.id, t.id))], [e, t]);
}
function e8() {
    let { items: e } = J(),
        t = e.length > 0 ? e[0] : null,
        n = e7(
            e,
            (0, g.bG)([f.A], () => f.A.localItems),
        ),
        s = D.ns.useSetting();
    return r.useMemo(() => {
        if (null != t && 0 >= G.default.compare(t.id, s)) return !1;
        for (let e of n) {
            if (0 >= G.default.compare(e.id, s)) break;
            if (!(0, C.NW)(e, s)) return !0;
        }
        return !1;
    }, [t, s, n])
        ? (0, i.jsx)(E.m, {
              text: $.intl.string($.t["8k+6QY"]),
              children: (0, i.jsx)(_.K, {
                  "aria-label": $.intl.string($.t["8k+6QY"]),
                  icon: N.i,
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                      null != t &&
                          (D.ns.updateSetting(t.id),
                          eA.default.track(M.HAw.NOTIFICATION_CENTER_ACTION, { action_type: I.e1.MARK_ALL_READ }));
                  },
              }),
          })
        : null;
}
var e5 = n(815021),
    e4 = n(935063),
    e6 = n(378939),
    e9 = n(964486),
    te = n(475743),
    tt = n(323073),
    tn = n(202803),
    ts = n(636922),
    tl = n(835835),
    ta = n(910425),
    ti = n(734057),
    tr = n(517019),
    to = n(309010),
    tc = n(939249),
    td = n(373423);
function tu(e) {
    let { className: t, onJump: n } = e,
        [s, l] = r.useState(!1);
    return (0, i.jsx)(tc.D, {
        className: c()(td.n, t),
        onClick: (e) => {
            l(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(X.y, { type: X.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(et.E, { variant: "text-xs/medium", className: td.Q, children: $.intl.string($.t.k5WiPf) }),
    });
}
var th = n(187322),
    tm = n(534514),
    tA = n(777666),
    tg = n(397244),
    tE = n(714114),
    t_ = n(394871),
    tN = n(95561),
    tf = n(571694),
    tI = n(47167),
    tC = n(713654),
    tS = n(915089),
    tp = n(548118),
    tR = n(616356),
    tx = n(290863),
    tT = n(222823),
    ty = n(147925),
    tj = n(110357);
let tD = { top: 8, bottom: 8, left: -4, right: -4 };
function tO(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: s } = e;
    return (0, i.jsx)(E.m, {
        text: $.intl.string($.t.iTcuma),
        children: (0, i.jsx)(tc.D, {
            className: c()(tj.cS, { [tj.yZ]: t?.collapsed }),
            onClick: function () {
                null != t &&
                    null != n &&
                    (n(t),
                    (0, tN.zV)(M.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: s?.() ?? 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, i.jsx)(ty.A, { width: 16, height: 16 }),
        }),
    });
}
function tM(e) {
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
        d = (0, Y.rm)(`recents-header-${t.id}-${(0, tS.GV)()}`),
        u = o && !t.isNSFW() && null != a && "nsfw" !== a.type;
    return (0, i.jsx)(th.vN, {
        offset: tD,
        children: (0, i.jsxs)("div", {
            className: tj.ZO,
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
                u && null != a ? (0, i.jsx)(tO, { channelState: a, toggle: r, getNumUnreadChannels: c }) : null,
                (0, i.jsx)(tv, { channel: t, gotoChannel: s }),
                (0, i.jsx)(tL, { channel: t, gotoChannel: s, mentionCount: l }),
                n,
            ],
        }),
    });
}
function tv(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(tb, { channel: t, gotoChannel: n })
        : (0, i.jsx)(tF, { channel: t, gotoChannel: n });
}
function tb(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, g.bG)([em.default], () => (t.isDM() ? em.default.getUser(t.getRecipientId()) : null)),
        l = null == s ? (0, tf.Y)(t) : s.getAvatarURL(void 0, 40);
    return (0, i.jsx)(tc.D, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)("img", { className: tj.ro, src: l, alt: "", "aria-hidden": !0 }),
    });
}
function tF(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, g.bG)([ef.A], () => ef.A.getGuild(t.guild_id));
    return null == s
        ? null
        : (0, i.jsx)(tp.Ay, {
              "aria-hidden": !0,
              className: tj.$f,
              guild: s,
              size: tp.Ay.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function tL(e) {
    let { channel: t, gotoChannel: n, mentionCount: s } = e,
        l = (0, g.bG)([ef.A], () => ef.A.getGuild(t.guild_id)),
        a = (0, g.bG)([ti.A], () => ti.A.getChannel(t.parent_id)),
        r = (0, g.bG)([tT.Ay], () => tT.Ay.getIsMentionLowImportance(t.id)),
        o = (0, tC.gU)(t, l),
        d = (0, tI.Ay)(t, !1),
        u = (0, tI.Ay)(a),
        h = null == a ? l?.name : `${l?.name} \u{203A} ${u}`,
        m = t.isMultiUserDM()
            ? $.intl.formatToPlainString($.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(tU, { channel: t })
              : (0, i.jsx)(tc.D, { className: c()(tj.W$, tj.J5), onClick: n, children: h });
    return (0, i.jsxs)("div", {
        className: tj.yP,
        children: [
            (0, i.jsx)(tm.D, {
                variant: "heading-md/semibold",
                className: tj.un,
                children: (0, i.jsxs)(tc.D, {
                    className: tj.HA,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == o
                            ? null
                            : (0, i.jsx)(o, {
                                  className: t.isForumLikeChannel() ? tj.dj : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, i.jsx)("span", { className: tj.je, children: d }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: tj.qS,
                                  children: (0, i.jsx)(tA.hV, {
                                      count: s,
                                      color: r
                                          ? ej.A.colors.BACKGROUND_MOD_STRONG.css
                                          : ej.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(et.E, { color: "text-default", variant: "text-xs/normal", className: tj.PL, children: m }),
        ],
    });
}
function tU(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: a,
        } = (0, g.cf)([em.default, tx.A, tR.A], () => {
            let e = em.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? tx.A.getStatus(e.id) : null,
                activities: null != e ? tx.A.getActivities(e.id) : null,
                applicationStream: null != e ? tR.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, tE.A)({ userId: n?.id });
    return (0, tg.A)({ activities: l, status: s, applicationStream: a, voiceChannel: r })
        ? (0, i.jsx)(t_.A, { user: n, activities: l, applicationStream: a, voiceChannel: r, hideTooltip: !0 })
        : null;
}
var tk = n(303727),
    tG = n(711917);
function tw(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, i.jsxs)("div", {
        className: tG.kL,
        children: [
            (0, i.jsxs)("div", {
                className: tG.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: tG.Kk, width: 36, height: 36 }),
                    l ? null : (0, i.jsx)(tk.A, { className: tG.uf }),
                ],
            }),
            (0, i.jsx)(tm.D, { className: tG.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(et.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, i.jsxs)(et.E, {
                              tag: "span",
                              className: tG.PP,
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
var tP = n(575863);
let tK = { offset: { left: 4, right: -12 } };
function tH(e, t, n) {
    let s = t ? R.Ay.guildFilter : null,
        l = t ? R.Ay.roleFilter : null,
        a = t ? R.Ay.everyoneFilter : null,
        i = null;
    null != e && null != s && (i = s === M.KE7.ALL_SERVERS ? null : e.getGuildId()),
        e6.A.fetchRecentMentions({ before: n, limit: M.Ue3, guildId: i, roles: l, everyone: a });
}
function tB(e) {
    let { onJump: t } = e,
        n = (0, g.bG)([ti.A, to.A], () => ti.A.getChannel(to.A.getChannelId())),
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
        h = (0, ta.Sc)(),
        m = (0, te.A)(o),
        A = (0, te.A)(d),
        E = (0, te.A)(u);
    r.useEffect(() => {
        R.Ay.hasLoadedEver
            ? ((null != m && o !== m) || (null != A && d !== A) || (null != E && u !== E)) && tH(n, !0)
            : tH(n, !0);
    }, [m, o, A, d, E, u, n, !0]),
        (0, e9.Ay)(() => {
            s?.some(tn.$r) && (e6.A.clearMentions(), tH(n, !0));
        }),
        r.useEffect(
            () => () => {
                e6.A.truncateMentions(M.Ue3);
            },
            [],
        );
    let _ = r.useCallback(() => null, []);
    return (0, i.jsx)(tl.Ay, {
        className: c()(tP.sH, { [tP.qC]: h }),
        scrollerClassName: tP.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            e6.A.deleteRecentMention(e.id);
        },
        channel: n,
        messages: s,
        loading: a,
        hasMore: l,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            tH(n, !0, null != s && s.length > 0 ? s[s.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: _,
        renderEmptyState: tY,
        renderMessage: tz,
        "aria-label": $.intl.string($.t.jbV6MM),
        listName: "recents",
    });
}
function tz(e, t) {
    return [(0, i.jsx)(tJ, { message: e, gotoMessage: t, dismissible: !0 }, e.id)];
}
function tJ(e) {
    let { message: t, gotoMessage: n, dismissible: s } = e;
    if (null == t) return null;
    let l = ti.A.getChannel(t.channel_id);
    if (null == l || (0, tt.Jm)(l) || (0, tt.$v)(l)) return null;
    let a = tr.A.didAgree(l.getGuildId()),
        r = !!(0, tt.Gc)(l) && !a;
    return (0, i.jsxs)("div", {
        className: tP.kL,
        children: [
            (0, i.jsx)(tM, {
                channel: l,
                gotoChannel: n,
                children:
                    null != s ? (0, i.jsx)(e5.J, { size: "sm", onClick: () => e6.A.deleteRecentMention(t.id) }) : null,
            }),
            (0, i.jsxs)("div", {
                className: tP.zC,
                children: [
                    (0, i.jsx)(tu, { className: tP.QT, onJump: n }),
                    (0, i.jsx)(
                        ts.A,
                        {
                            message: t,
                            channel: l,
                            className: tP.iU,
                            hideAccessories: r,
                            compact: D.hH.getSetting(),
                            animateAvatar: !1,
                            focusProps: tK,
                            trackAnnouncementViews: !0,
                        },
                        t.id,
                    ),
                ],
            }),
        ],
    });
}
function tY() {
    return (0, i.jsx)(tw, { Icon: e4.X, header: $.intl.string($.t.bgDz74), tip: $.intl.string($.t.NS15vk) });
}
var tX = n(702841),
    tQ = n(912592),
    tV = n(761508),
    tW = n(966597),
    t$ = n(85109),
    tq = n(214947),
    tZ = n(711950),
    t0 = n(912309),
    t1 = n(134314);
function t3(e) {
    let { closePopout: t } = e,
        n = (0, t0.kX)();
    return (0, i.jsx)(E.m, {
        asContainer: !0,
        text: $.intl.string($.t["lMR96+"]),
        children: (0, i.jsxs)(tc.D, {
            "aria-label": `${$.intl.string($.t["lMR96+"])}, ${n}`,
            className: t1.b,
            onClick: () => {
                eA.default.track(M.HAw.NOTIFICATION_CENTER_ACTION, { action_type: I.e1.FRIEND_REQUESTS_BUTTON_CLICK }),
                    tZ.A.transitionToSection(M.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(tq.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(tA.hV, { count: n, color: ej.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var t2 = n(783977);
function t7(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, g.bG)([ti.A, to.A], () => ti.A.getChannel(to.A.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: a,
            guildFilter: r,
        } = (0, g.cf)([R.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = R.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(eH.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": $.intl.string($.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(eB.sL, {
                id: "Everyone",
                label: $.intl.string($.t.cdyUsV),
                action: function () {
                    e6.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, i.jsx)(eB.sL, {
                id: "Roles",
                label: $.intl.string($.t.lZejCq),
                action: function () {
                    e6.A.setGuildFilter({ roleFilter: !a });
                },
                checked: a,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(eB.sL, {
                      id: "All Servers",
                      label: $.intl.string($.t.GWMA6s),
                      action: function () {
                          e6.A.setGuildFilter({
                              guildFilter: r === M.KE7.THIS_SERVER ? M.KE7.ALL_SERVERS : M.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === M.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function t8() {
    let e = r.useRef(null);
    return (0, i.jsx)(eJ.Y, {
        targetElementRef: e,
        align: "right",
        animation: eJ.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(t7, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(E.m, {
                text: $.intl.string($.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(_.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": $.intl.string($.t.pEasFX),
                    icon: t2.R,
                    onClick: n,
                }),
            });
        },
    });
}
var t5 = n(481613),
    t4 = n.n(t5),
    t6 = n(775602),
    t9 = n(625494),
    ne = n(723702),
    nt = n(862482),
    nn = n(640238);
function ns(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1),
        l = () => {
            t(),
                eA.default.track(M.HAw.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0,
                });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(nl, { confirm: l, cancel: () => s(!1) }) : null,
            (0, i.jsx)(E.m, {
                text: $.intl.string($.t["8k+6QY"]),
                children: (0, i.jsx)(_.K, {
                    variant: "secondary",
                    "aria-label": $.intl.string($.t["8k+6QY"]),
                    size: "sm",
                    icon: N.i,
                    onClick: (e) => {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function nl(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(nn.M, {
        dismissable: !0,
        header: $.intl.string($.t.h4bVZ2),
        confirmText: $.intl.string($.t.e6RscS),
        cancelText: $.intl.string($.t["ETE/oC"]),
        confirmButtonColor: nt.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(et.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: $.intl.string($.t["0MQ0Bf"]),
        }),
    });
}
var na = n(735438),
    ni = n.n(na),
    nr = n(749314),
    no = n(873174),
    nc = n(311283),
    nd = n(717421),
    nu = n(933832),
    nh = n(976860),
    nm = n(782603),
    nA = n(461678),
    ng = n(914703);
function nE(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(eJ.Y, {
        targetElementRef: n,
        align: "right",
        animation: eJ.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(ng.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: $.intl.string($.t.ljs3Oe),
                  })
                : (0, i.jsx)(nA.A, {
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
                children: (0, i.jsx)(_.K, {
                    "aria-label": $.intl.string($.t.h850Ss),
                    icon: nm.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var n_ = n(350527),
    nN = n(218152),
    nf = n(970278),
    nI = n(747926),
    nC = n(403362),
    nS = n(37411),
    np = n(791641);
function nR(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, g.yK)(
            [nf.A, ti.A],
            () =>
                ni()(nf.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return G.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return ti.A.getChannel(t);
                    })
                    .filter(nC.Vq)
                    .sort((e, t) => G.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        a = r.useCallback((e, t) => {
            (0, nI.JA)(e, t, nS.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                j.h.wait(() => {
                    (0, S.ack)(
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
            className: np.k,
            children: l.map((e) =>
                (0, i.jsx)(
                    nN.Cp,
                    { channel: n, children: (0, i.jsx)(n_.Ay, { className: np.u, threadId: e.id, goToThread: a }) },
                    e.id,
                ),
            ),
        })
    );
}
var nx = n(989349),
    nT = n.n(nx),
    ny = n(123292),
    nj = n(559149),
    nD = n(857069),
    nO = n(694318),
    nM = n(789645),
    nv = n(33358),
    nb = n(384231),
    nF = n(207133),
    nL = n(704413),
    nU = n(9842),
    nk = n(5095),
    nG = n(320095),
    nw = n(143413),
    nP = n(763754),
    nK = n(467073),
    nH = n(491182),
    nB = n(860227),
    nz = n(474463),
    nJ = n(375199),
    nY = n(824556),
    nX = n(715628),
    nQ = n(752636),
    nV = n(352043),
    nW = n(268719),
    n$ = n(234957),
    nq = n(888675),
    nZ = n(21623),
    n0 = n(701628);
let n1 = r.memo(function e(t) {
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
        E = (0, g.bG)([nU.A], () => nU.A.getMessageByReference(A)),
        _ = (0, g.bG)([ti.A], () =>
            l.type === M.lAJ.THREAD_STARTER_MESSAGE && E.state === nU.a.LOADED
                ? ti.A.getChannel(E.message.channel_id)
                : null,
        ),
        N = D.X6.useSetting(),
        f = D.hD.useSetting(),
        I = D.rs.useSetting(),
        C = D.kt.useSetting(),
        S = (0, nb.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        p = (0, nF.A)(s?.id),
        { disableReactionCreates: R } = (0, nK.A)(s),
        {
            content: x,
            hasSpoilerEmbeds: T,
            hasBailedAst: y,
        } = (0, nJ.A)(l, {
            hideSimpleEmbedContent: f && I,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        j = (0, nP.Ay)(l),
        O = (0, g.bG)(
            [ti.A],
            () => l.hasFlag(M.pr7.HAS_THREAD) && ti.A.getChannel(G.default.castMessageIdAsChannelId(l.id)),
        ),
        v = l.type === M.lAJ.THREAD_STARTER_MESSAGE && E.state === nU.a.LOADED && null != _,
        b = !v && void 0 === n,
        F = (0, nY.A)({ message: l, channel: s, announcementEnabled: b }),
        L = (0, nv.P)(l),
        U = (0, nk._f)(l.id, l.channel_id),
        k = (0, nL.A)(l),
        w = (0, nB.fF)(l);
    return v
        ? (0, i.jsx)(e, { ...t, message: E.message, channel: _, hasThread: !1 })
        : (eI.A.isBlockedForMessage(l)
                ? (n = $.t["+FcYM/"])
                : eI.A.isIgnoredForMessage(l)
                  ? (n = $.t["VFWjc+"])
                  : (0, nO.kf)(l) && m && (n = $.t.xfkfTK),
            void 0 !== n)
          ? (0, i.jsx)(n3, { className: r, compact: a, count: 1, collapsedReason: n })
          : (0, i.jsx)(nH.A, {
                compact: a,
                className: c()(r, { [n0.M1]: (0, nG.ec)(l), [n0.XN]: u, [n0._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, n$.A)(l, s, A, E, a),
                childrenHeader: (0, nQ.A)({ ...t, author: j, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(nz.iV, {
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
                    inlineEmbedMedia: f,
                    renderEmbeds: I,
                    gifAutoPlay: C,
                    poll: k,
                    showListsAndHeaders: S,
                    showMaskedLinks: S,
                    shouldHideMediaOptions: p,
                    enabledContentHarmTypeFlags: L,
                    ctaButtonType: U,
                }),
                childrenExecutedCommand: (0, nW.A)(l, s, a),
                childrenMessageContent: (0, nX.A)(t, x),
                childrenSystemMessage: (0, nV.A)(t),
                onContextMenu: o,
                onClick: d,
                hasThread: !1 !== h && null != O && l.hasFlag(M.pr7.HAS_THREAD),
                hasReply: l.type === M.lAJ.REPLY,
                isSystemMessage: (0, nw.A)(l),
                messageRef: F,
                author: j,
                "aria-labelledby": w,
                "aria-roledescription": $.intl.string($.t.BAB0yK),
            });
});
function n3(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, i.jsx)(nH.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(nq.A, {
            compact: s,
            className: nZ.L9,
            iconNode: (0, i.jsx)(nM.P, { size: "md", color: "currentColor", className: nZ.Q6 }),
            children: (0, i.jsx)("div", { className: nZ.Fo, children: $.intl.format(l, { count: n }) }),
        }),
    });
}
var n2 = n(495544),
    n7 = n(58703),
    n8 = n(143236),
    n5 = n(720149),
    n4 = n(181079),
    n6 = n(567035),
    n9 = n(455234),
    se = n(695633),
    st = n(152007),
    sn = n(607508),
    ss = n(594061),
    sl = n(617617),
    sa = n(95701),
    si = n(808728),
    sr = n(232835),
    so = n(576705),
    sc = n(711014),
    sd = n(543465),
    su =
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
    sh = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
class sm extends n8.EventEmitter {
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
                        (e_()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || s.some((e, n) => e !== t[n])) &&
            this.setState({ channels: s, loadState: n ? this.state.loadState : "done" });
    }
    populateInitialStateFromStore(e) {
        if ("messages" === e.type) {
            let t = sA(e, !1);
            return t.messages.some(tn.$r) ? (n5.A.clearChannel(e.channelId), { ...e, messages: [] }) : t;
        }
        if ("nsfw" === e.type) return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
        if ("forum" === e.type) {
            let t = nf.A.hasLoaded(e.guildId);
            return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
        }
        (0, nC.xb)(e);
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? sA(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        j.h.wait(() =>
            S.ack(
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
              t6.A.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        S.ack(
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
        j.h.wait(() => (0, n6.A)([e], M.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: ni().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        S.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = ni().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            o = !r.collapsed;
        (l[t] = o),
            (0, ss.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = o;
                },
                ss.Sb.FREQUENT_USER_ACTION,
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
        let e = this.state.channels.filter((e) => !sd.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !st.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = nf.A.hasLoaded(e.guildId);
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
                            e_()("messages" === e.type, "channel cannot change type");
                            let n = sA(e, !0);
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
                                e_()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...sA(e, !0),
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
function sA(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = sr.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    G.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= G.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = G.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !s.hasMoreAfter),
    };
}
function sg() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = sl.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let l = ti.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            ti.A.getSortedPrivateChannels().forEach((n) => sE(e, t, null, n.id)),
            sc.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = si.Ay.getSelectableChannelIds(n),
                    l = se.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    sE(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) sE(e, t, n, s);
                });
            }),
            ni().sortBy(t, (e) => e.sortOrder)),
        l = ni()
            .uniq(s.map((e) => e.guildId))
            .filter(nC.Vq);
    return (
        j.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function sE(e, t, n, s) {
    if (null == s) return;
    let l = ti.A.getChannel(s);
    if (null == l || (!sa.Le.has(l.type) && sd.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === tT.Ay.getMentionCount(s)) return;
    } else if (!(0, n9.Y)(l) && 0 === tT.Ay.getMentionCount(s)) return;
    if ((!l.isPrivate() && !so.A.can(M.xBc.READ_MESSAGE_HISTORY, l)) || (0, tt.qR)(l)) return;
    let a = tT.Ay.ackMessageId(s);
    if (null == a) {
        let e = ef.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = G.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = tT.Ay.getOldestUnreadMessageId(s),
        r = tT.Ay.lastMessageId(s),
        o = tT.Ay.getMentionCount(s),
        c = o > 0 || l.isPrivate();
    if (null == r || G.default.compare(a, r) >= 0) return;
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
            let s = ti.A.getChannel(t);
            if (n4.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (tT.Ay.getMentionCount(t) > 0) return tT.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = G.default.extractTimestamp(n);
                if (Date.now() - e > sN) return 8;
                if (Date.now() - e > s_) return 6;
            }
            if (s.isThread()) {
                let e = (0, sn.l)(s);
                return e === nS.CP.ALL_MESSAGES ? 4 : e === nS.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = sd.Ay.getChannelMessageNotifications(e, t),
                    s = n === M.orn.NULL ? sd.Ay.getMessageNotifications(e) : n;
                return s === M.orn.ALL_MESSAGES ? 4 : s === M.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, tt.qR)(l)
        ? t.push({ ...d, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...d, type: "forum" })
          : t.push({ ...d, type: "messages", messages: [] });
}
let s_ = 2 * k.A.Millis.DAY,
    sN = 10 * k.A.Millis.DAY;
var sf = n(357242);
let sI = { left: 4, right: -12 },
    sC = [M.lAJ.THREAD_CREATED];
function sS(e) {
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
        u = sC.includes(n.type);
    return (0, i.jsx)(th.vN, {
        offset: sI,
        children: (0, i.jsxs)("div", {
            className: sf.zC,
            onKeyDown: d,
            ...c,
            children: [
                !u && (0, i.jsx)(tu, { className: sf.nn, onJump: (e) => o(e, n.id) }),
                (0, i.jsx)(n1, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: sf.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: l,
                    treatSpam: a,
                }),
            ],
        }),
    });
}
function sp(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        { enabled: l } = nj.A.useExperiment({ location: "20e3b0_1" }, { autoTrackExposure: !1 }),
        a = D.hH.useSetting(),
        r = (0, nO.iJ)(n),
        o = !1,
        c = 0 === t.messages.length || nT()(t.messages[0].timestamp).isSame(nT()(), "day"),
        d = em.default.getUser(n2.default.getId())?.hasFlag(M.nhx.SPAMMER) ?? !1,
        u = [];
    if (!t.collapsed) {
        let e = null,
            h = null,
            m = t.messages.slice(0, 25);
        m.forEach((t) => {
            if (!c && (null == e || !e.isSame(t.timestamp, "day"))) {
                let n = (0, n7.i$)(t.timestamp, "LL");
                u.push((0, i.jsx)(nr.A, { className: sf.yF, children: n }, n)), (e = nT()(t.timestamp));
            }
            let m = null == h || (0, nD.A)(n, h, t);
            (h = t),
                (o = o || (0, nO.kf)(t)),
                u.push(
                    (0, i.jsx)(
                        sS,
                        {
                            channel: n,
                            message: t,
                            compact: a,
                            isGroupStart: m,
                            treatSpam: !d && l && (0, nO.kf)(t) && r,
                            gotoChannel: s,
                        },
                        t.id,
                    ),
                );
        }),
            t.messages.length >= 25 &&
                u.push(
                    (0, i.jsx)(
                        "div",
                        {
                            className: sf.Gr,
                            children: (0, i.jsx)(ny.Q, {
                                variant: "primary",
                                text: `${$.intl.string($.t["9OB9hq"])} \u203A`,
                                onClick: (e) => s(e, m[m.length - 1].id),
                            }),
                        },
                        "view-all",
                    ),
                ),
            0 === u.length && (u = [(0, i.jsx)(X.y, {}, "spinner")]);
    }
    return o && r && nj.A.trackExposure({ location: "20e3b0_2" }), (0, i.jsx)("div", { className: sf.DZ, children: u });
}
var sR = n(201489);
let sx = r.memo(function (e) {
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
        let { opacity: d, size: u } = (0, nd.z)(
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
        return (0, i.jsx)(no.animated.div, { ref: s, style: h, children: (0, i.jsx)(sT, { ...e }) });
    }),
    sT = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: l } = e,
            a = (0, g.bG)([ti.A], () => ti.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == a ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    j.h.wait(() => {
                        (0, S.ack)(
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
        let o = (e, s) => {
            (0, tN.zV)(M.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let l = s ?? t.oldestUnreadMessageId;
            (0, nh.pX)(M.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e);
        };
        return (0, i.jsx)("div", {
            className: sR.Ix,
            children: (0, i.jsx)(m.F, {
                component: (0, i.jsx)(tM, {
                    channel: a,
                    gotoChannel: o,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: l,
                    showCollapseButton: !0,
                    channelState: t,
                    getNumUnreadChannels: e.getNumUnreadChannels,
                    children: (0, i.jsxs)(eL.e, {
                        size: "sm",
                        className: sR.GC,
                        children: [(0, i.jsx)(nE, { channel: a }), (0, i.jsx)(sy, { ...e })],
                    }),
                }),
                children: t.collapsed
                    ? null
                    : "messages" === t.type
                      ? (0, i.jsx)(sp, { channel: t, channelRecord: a, gotoChannel: o })
                      : "forum" === t.type
                        ? (0, i.jsx)(nR, { channel: t, channelRecord: a, deleteChannel: s })
                        : null,
            }),
        });
    });
function sy(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        a = (0, nc.A)() && null != t.guildId;
    return (0, i.jsx)(E.m, {
        text: a ? $.intl.string($.t["5lLMhM"]) : $.intl.string($.t.e6RscS),
        children: (0, i.jsx)(_.K, {
            variant: "secondary",
            "aria-label": a ? $.intl.string($.t["5lLMhM"]) : $.intl.string($.t.e6RscS),
            size: "sm",
            icon: a ? N.i : nu.A,
            onClick: function () {
                a && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tN.zV)(M.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
var sj = n(301328),
    sD = n(691503);
function sO(e) {
    var t, n, s, l, a, o;
    let { onJump: d, showTutorial: u, setSeenTutorial: h, closePopout: m } = e,
        A = r.useRef(null),
        [E, _] = (function (e) {
            let [t, n] = r.useState(() => new sm(sg(), e)),
                [s, l] = r.useState(!1),
                a = r.useRef(Date.now()),
                [i, o] = r.useState(() => sg());
            r.useEffect(() => {
                let e = (e) => o(e);
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
                        r = sg();
                    0 === r.channels.length || t - a.current < 10 * k.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new sm(r, e)));
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
                    () => (sr.A.addChangeListener(t.reloadMessages), () => sr.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        sd.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => sd.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        st.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => st.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nf.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => nf.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(A),
        { loadState: N, channels: f } = E,
        { maybeLoadMore: I } = _,
        C = (0, g.bG)([t6.A], () => t6.A.messageGroupSpacing);
    (t = A),
        (n = E),
        (s = _),
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
        (a = _),
        r.useEffect(() => {
            let e = () => {
                let e = l.channels.find((e) => !e.collapsed);
                null != e && a.markChannelRead(e);
            };
            return (
                t9._.subscribe(M.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    t9._.unsubscribe(M.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [a, l.channels]),
        (o = _),
        r.useEffect(() => {
            let e = (e) => {
                ((0, ne.isMac)() || (0, ne.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                    !e.shiftKey &&
                    !e.altKey &&
                    "z" === e.key &&
                    o.undoMarkChannelRead();
            };
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
        (0, e9.Ay)(
            () => (
                t9._.subscribe(M.jej.INBOX_MARK_ALL_UNREADS_READ, _.markAllRead),
                () => {
                    t9._.unsubscribe(M.jej.INBOX_MARK_ALL_UNREADS_READ, _.markAllRead);
                }
            ),
        );
    let S = (0, V.A)("unreads", A);
    return 0 === f.length
        ? (0, i.jsx)(tw, {
              Icon: tQ.K,
              header: $.intl.string($.t["6XMM+D"]),
              tip: t4().os?.family === "OS X" ? $.intl.string($.t.w9uDOW) : $.intl.string($.t.BiUJC6),
          })
        : (0, i.jsx)(Y.hD, {
              navigator: S,
              children: (0, i.jsx)(Y.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(Q.Ch, {
                          ref: (e) => {
                              (A.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: N === sh.Done ? void 0 : I,
                          className: c()(sD.XG, `group-spacing-${C}`),
                          children: [
                              u ? (0, i.jsx)(sM, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: a,
                                          toggle: r,
                                          getNumUnreadChannels: o,
                                      } = t,
                                      c = null;
                                  return ni().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let d = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === su.ReallyOldChannel
                                                  ? d.push(
                                                        (0, i.jsx)(
                                                            nr.A,
                                                            {
                                                                className: sj.y,
                                                                contentClassName: sj.$,
                                                                children: $.intl.string($.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === su.NoNotifications &&
                                                    d.push(
                                                        (0, i.jsx)(
                                                            nr.A,
                                                            {
                                                                className: sj.y,
                                                                contentClassName: sj.$,
                                                                children: $.intl.string($.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          d.push(
                                              (0, i.jsx)(
                                                  sx,
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
                              })(f, _, d),
                              N === sh.Done ? null : (0, i.jsx)(X.y, { className: sD.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function sM(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: sD.d$,
        children: [
            (0, i.jsx)("div", { className: sD.cm, children: (0, i.jsx)(tQ.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(tm.D, {
                        className: sD.__invalid_tutorialHeader,
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
                        className: sD.dh,
                        children: (0, i.jsx)(eU.$, {
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
function sv() {
    return (0, i.jsx)(tw, {
        Icon: tQ.K,
        disableStars: !0,
        header: $.intl.string($.t["KG/ynf"]),
        tip: $.intl.string($.t.cvcKzX),
    });
}
let sb = () => (0, i.jsx)(ns, { onClick: () => t9._.dispatch(M.jej.INBOX_MARK_ALL_UNREADS_READ) });
var sF = n(716030);
function sL(e) {
    let { tab: t, setTab: n, badgeState: s, closePopout: l } = e,
        { enabled: a, inInbox: r } = tW.A.useConfig({ location: "RecentsPopout" }),
        o = (0, ta.Sc)(),
        c = (0, tX.bG)([t$.A], () => t$.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: sF.wx,
        children: [
            (0, i.jsxs)("div", {
                className: sF.qd,
                children: [
                    (0, i.jsx)(tQ.K, { size: "md", color: "currentColor", className: sF.yH }),
                    (0, i.jsx)(tm.D, {
                        className: sF.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: $.intl.string($.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(es.s, {
                        className: sF.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": $.intl.string($.t["8k+6QY"]),
                        children: [(0, i.jsx)(sU, { tab: t }), (0, i.jsx)(t3, { closePopout: l })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: sF.YF,
                children: (0, i.jsxs)(tV.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: sF.$H,
                    children: [
                        (0, i.jsxs)(tV.V.Item, {
                            id: u.Y2.FOR_YOU,
                            "aria-label": $.intl.string($.t["En+D+u"]),
                            className: sF.Mf,
                            children: [
                                $.intl.string($.t["En+D+u"]),
                                s?.badgeForYou
                                    ? (0, i.jsx)(tA.SC, {
                                          color: ej.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                          className: sF.bG,
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(tV.V.Item, {
                            id: u.Y2.UNREADS,
                            className: sF.Mf,
                            children: $.intl.string($.t.sRUdB8),
                        }),
                        (0, i.jsx)(tV.V.Item, {
                            "aria-label": $.intl.string($.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: sF.Mf,
                            children: $.intl.string($.t.GRZF96),
                        }),
                        a && r
                            ? (0, i.jsx)(tV.V.Item, {
                                  "aria-label": $.intl.string($.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: sF.Mf,
                                  children:
                                      0 === c
                                          ? $.intl.string($.t["2pAkDA"])
                                          : $.intl.formatToPlainString($.t.I4fryG, { count: c }),
                              })
                            : null,
                        o
                            ? (0, i.jsx)(tV.V.Item, {
                                  "aria-label": "scheduled",
                                  id: u.Y2.SCHEDULED,
                                  className: sF.Mf,
                                  children: $.intl.string($.t.Fn6Odn),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function sU(e) {
    let { tab: t } = e;
    return t === u.Y2.FOR_YOU
        ? (0, i.jsx)(e8, {})
        : t === u.Y2.UNREADS
          ? (0, i.jsx)(sb, {})
          : t === u.Y2.MENTIONS
            ? (0, i.jsx)(t8, {})
            : null;
}
var sk = n(406810),
    sG = n(285796),
    sw = n(151282),
    sP = n(199160),
    sK =
        (((a = {})[(a.SCHEDULED = 0)] = "SCHEDULED"),
        (a[(a.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (a[(a.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (a[(a.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (a[(a.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (a[(a.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        a),
    sH = n(970244),
    sB = n(383233),
    sz = n(560502);
let sJ = { offset: { left: 4, right: -12 } };
function sY() {
    return (
        r.useEffect(() => {
            (0, sw.sy)();
        }, []),
        (0, i.jsx)(sX, {})
    );
}
function sX() {
    let e = (0, g.bG)([sP.A], () => sP.A.getScheduledMessagesForInbox(), []),
        t = r.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, g.bG)([sP.A], () => sP.A.loading, []),
        s = r.useRef(null),
        l = (0, V.A)("scheduled-messages", s);
    return n
        ? (0, i.jsx)(X.y, { className: sz.k$ })
        : 0 === t.length
          ? (0, i.jsx)(tw, { Icon: sk.O, header: $.intl.string($.t.aJQZfZ), tip: $.intl.string($.t.rCN4pN) })
          : (0, i.jsx)(Y.hD, {
                navigator: l,
                children: (0, i.jsx)(Y.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsx)(Q.Ch, {
                            className: sz.XG,
                            ref: (e) => {
                                (s.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...l,
                            children: (0, i.jsx)(sQ, { scheduledMessages: t }),
                        });
                    },
                }),
            });
}
function sQ(e) {
    let { scheduledMessages: t } = e,
        n = r.useMemo(
            () =>
                t.reduce((e, t) => {
                    let n = ti.A.getChannel(t.scheduledMessage.channelId);
                    return (
                        null == n ||
                            (e[n.id] = { channel: n, scheduledMessages: [...(e[n.id]?.scheduledMessages ?? []), t] }),
                        e
                    );
                }, {}),
            [t],
        ),
        s = (0, g.bG)([sP.A], () => sP.A.getMessagesPendingDeletion(), []);
    return (0, i.jsx)(i.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: l }] = e;
            return (0, i.jsxs)(
                "div",
                {
                    className: sz.WG,
                    children: [
                        (0, i.jsx)(tM, {
                            channel: n,
                            gotoChannel: () => (0, nh.pX)(M.BVt.CHANNEL(n.getGuildId(), n.id)),
                            children: null,
                        }),
                        l.map((e) => {
                            let t = s.has(e.scheduledMessageId);
                            return (0, i.jsx)(
                                sV,
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
let sV = r.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: s } = e,
        l = new sB.Ay({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: em.default.getUser(t.userId),
            timestamp: nT()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: a, stateMessage: o } = (function (e) {
            switch (e) {
                case sK.SCHEDULED:
                    return { isError: !1, stateMessage: $.intl.string($.t.Fn6Odn) };
                case sK.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: $.intl.string($.t.v5O2dK) };
                case sK.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: $.intl.string($.t.j8uIfG) };
                case sK.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: $.intl.string($.t["w6zHX/"]) };
                case sK.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: $.intl.string($.t.pflV7z) };
                case sK.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: $.intl.string($.t.j8uIfG) };
                default:
                    (0, nC.xb)(e);
            }
        })(t.state),
        d = r.useCallback(() => {
            (0, sw.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, sH.Re)();
                })
                .catch((e) => {
                    (0, sH.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, sH.CI)({ scheduledMessage: t });
        }, [t]);
    return (0, i.jsx)(
        "div",
        {
            className: c()(sz.zC, { [sz._4]: a, [sz.j3]: !a }),
            children: s
                ? (0, i.jsx)(X.y, { className: sz.$5 })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(et.E, {
                              variant: "text-xs/semibold",
                              color: a ? "text-feedback-critical" : "text-feedback-positive",
                              className: sz.Rq,
                              children: o,
                          }),
                          (0, i.jsxs)("div", {
                              className: sz.Pd,
                              children: [
                                  (0, i.jsx)(
                                      ts.A,
                                      {
                                          message: l,
                                          channel: n,
                                          className: sz.iU,
                                          compact: D.hH.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: sJ,
                                      },
                                      l.id,
                                  ),
                                  (0, i.jsxs)(eL.e, {
                                      size: "sm",
                                      children: [
                                          (0, i.jsx)(_.K, {
                                              icon: sk.O,
                                              onClick: u,
                                              variant: "icon-only",
                                              "aria-label": $.intl.string($.t.SBcdAN),
                                          }),
                                          (0, i.jsx)(_.K, {
                                              icon: sG.a,
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
var sW = n(665553);
function s$(e) {
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
        forLaterEnabled: _,
        showForLater: N,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": $.intl.string($.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(sW.k, { [sW.q]: n }),
            children: (0, i.jsx)(m.F, {
                component: (0, i.jsx)(sL, { tab: s, setTab: l, badgeState: a, closePopout: r }),
                children:
                    s === u.Y2.FOR_YOU
                        ? (0, i.jsx)(e2, {})
                        : s === u.Y2.MENTIONS
                          ? (0, i.jsx)(tB, { onJump: o })
                          : _ && N && s === u.Y2.BOOKMARKS
                            ? (0, i.jsx)(A.J, { closePopout: r })
                            : s === u.Y2.SCHEDULED
                              ? (0, i.jsx)(sY, {})
                              : (0, i.jsx)(d.tH, {
                                    fallback: (0, i.jsx)(sv, {}),
                                    children: (0, i.jsx)(sO, {
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
