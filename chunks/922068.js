n.r(t), n.d(t, { default: () => sX });
var s,
    a,
    l,
    i = n(627968),
    r = n(64700),
    o = n(503698),
    d = n.n(o),
    c = n(484030),
    u = n(873298),
    h = n(305866),
    _ = n(707554),
    m = n(251333),
    g = n(17928),
    f = n(990078),
    A = n(408278),
    E = n(143838),
    N = n(252431),
    p = n(322387),
    I = n(995273),
    C = n(334738),
    S = n(186840),
    x = n(135978),
    R = n(110259),
    y = n(636537),
    T = n(933681),
    j = n(228366),
    b = n(253932),
    D = n(499785),
    O = n(652215);
function M(e) {
    j.h.dispatch({ type: "NOTIFICATION_CENTER_SET_ACTIVE", active: e });
}
function v() {
    j.h.dispatch({ type: "RESET_NOTIFICATION_CENTER" });
}
async function F(e, t) {
    if (N.A.loading) return;
    await j.h.dispatch({ type: "LOAD_NOTIFICATION_CENTER_ITEMS" });
    let n = Math.ceil(N.A.items.length / e.limit);
    try {
        let s = await D.A.get({
            url: O.Rsh.NOTIF_CENTER_ITEMS(),
            trackedActionData: {
                event: R.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                properties: (e) => {
                    let t = (e.body?.items || []).map((e) => e.type);
                    return (0, T.e0)({ page: n, items: t, item_count: t.length });
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
            await y.Bo.post({ url: O.Rsh.NOTIF_CENTER_ITEMS_ACK(e), rejectWithError: !0 });
    } catch (t) {
        j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE", ids: [e] });
    }
}
async function U(e) {
    let t = b.ns.getSetting();
    try {
        j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEM_DELETE", id: e.id }),
            await D.A.delete({
                url: O.Rsh.NOTIF_CENTER_ITEMS(e.id),
                body: { item_type: (0, I.gk)(e) ? "mention" : "regular" },
                trackedActionData: {
                    event: R.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                    properties: { notification_center_id: e.id, acked: (0, I.NW)(e, t), item_type: e.type },
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
class B extends g.Ay.PersistedStore {
    static displayName = "NotificationCenterStore";
    static persistKey = "NotificationCenterStore";
    initialize(e) {
        this.waitFor(x.Ay),
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
        return P.tab ?? p.$w.ForYou;
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
function K() {
    (P.hasNewMentions = !1), (P.isDataStale = !1), (P.isRefreshing = !1);
}
let H = new B(j.h, {
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
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: K,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: K,
});
var z = n(790782);
let J = () => {
    let {
        initialized: e,
        loading: t,
        items: n,
        hasMore: s,
        loadMore: a,
    } = ((e) => {
        let { isFocused: t, navigatedAway: n, isDesktop: s, withMentions: a = !1, initialPageSize: l } = e,
            i = (0, g.bG)([H], () => H.shouldReload()),
            o = r.useRef(!1),
            [d, c] = r.useState(!1),
            {
                initialized: u,
                loading: h,
                items: _,
                hasMore: m,
                cursor: f,
                errored: A,
            } = (0, g.cf)([N.A], () => ({
                initialized: N.A.initialized,
                loading: N.A.loading,
                items: N.A.items,
                hasMore: N.A.hasMore,
                cursor: N.A.cursor,
                errored: N.A.errored,
            })),
            { roleFilter: E, everyoneFilter: p } = (0, g.cf)([x.Ay], () => ({
                everyoneFilter: x.Ay.everyoneFilter,
                roleFilter: x.Ay.roleFilter,
            }));
        r.useEffect(() => (M(!0), () => M(!1)), []),
            r.useEffect(() => {
                u && t && (0, C.d_)(z.P.NOTIFICATION_CENTER);
            }, [t, u]);
        let I = (0, S.A)();
        r.useEffect(
            () => () => {
                s ? !I() && (A || _.length > 100) && v() : n && _.length > 100 && v();
            },
            [n, _, s, I, A],
        ),
            r.useEffect(() => {
                let e = i && t;
                (!u || e) && F({ limit: l ?? (a ? 8 : 20), with_mentions: a, roles_filter: E, everyone_filter: p });
            }, [u, i, t, a, E, p, l]);
        let R = r.useCallback(
            async (e) => {
                !o.current &&
                    u &&
                    m &&
                    null != f &&
                    (e || !A) &&
                    ((o.current = !0),
                    c(!0),
                    await F(
                        { after: f, with_mentions: a, roles_filter: E, everyone_filter: p, limit: a ? 8 : 20 },
                        () => {
                            o.current = !1;
                        },
                    ),
                    c(!1));
            },
            [u, m, f, A, a, E, p],
        );
        return {
            initialized: u,
            loading: h,
            items: _,
            hasMore: m,
            loadMore: R,
            loadingMore: d,
            setReadNotifItemToAcked: (e) => {
                e.acked || (e.acked = !0);
            },
            errored: A,
        };
    })({ isFocused: !0, isDesktop: !0 });
    return {
        initialized: e,
        loading: t,
        items: n.filter((e) => "notification-center-item" === e.kind),
        hasMore: s,
        loadMore: a,
    };
};
var W = n(837381),
    Y = n(289873),
    $ = n(689175),
    V = n(928039),
    Q = n(139286),
    X = n(985018),
    q = n(729920);
let Z = () =>
    (0, i.jsxs)("div", {
        className: q.kL,
        children: [
            (0, i.jsx)("img", { className: q.Sl, alt: "", src: "/assets/993e32de43e0d570.svg" }),
            (0, i.jsx)("div", { className: q.DD, children: X.intl.string(X.t.MwjTvn) }),
            (0, i.jsx)("div", { className: q.rf, children: X.intl.string(X.t.AKBgPy) }),
        ],
    });
var ee = n(778712),
    et = n(834730),
    en = n(192308),
    es = n(890856),
    ea = n(565645),
    el = n(730134),
    ei = n(688810),
    er = n(587895),
    eo = n(22007),
    ed = n(46054),
    ec = n(102876),
    eu = n(975732),
    eh = n(889227),
    e_ = n(287809),
    em = n(954571),
    eg = n(998218),
    ef = n(284009),
    eA = n.n(ef),
    eE = n(698441),
    eN = n(71393),
    ep = n(994500),
    eI = n(240248),
    eC = n(427262);
function eS(e) {
    let { username: t, applicationId: n, renderApplication: s, withApplication: a, withDefault: l } = e;
    return null != n
        ? X.intl.format(a, { username: t, applicationName: () => s(n) })
        : X.intl.format(l, { username: t });
}
n(321073);
var ex = n(429913);
let eR = new Set([
    p.Uo.INCOMING_GAME_FRIEND_REQUESTS,
    p.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED,
    p.Uo.INCOMING_FRIEND_REQUESTS,
    p.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED,
]);
var ey = n(573435),
    eT = n(486020),
    ej = n(661531);
let eb = "/assets/03f95d2957fb9ed2.svg",
    eD = "/assets/89f880b6428b1aea.svg",
    eO = {
        MISSED_MESSAGES: "/assets/f7d60ae597f16731.svg",
        FRIEND_REQUEST_REMINDER: "/assets/70750ced4a16e7ec.svg",
        SCHEDULED_GUILD_EVENT: "/assets/a67e28f364664918.svg",
        TOP_MESSAGES: "/assets/1704496c3b4213df.svg",
        NOTIFICATION_CENTER: "/assets/417c4def7a33b274.svg",
        UPDATE_PROFILE: "/assets/21131df8cbb15b26.svg",
        FIND_FRIENDS: eb,
        ADD_FRIEND: eb,
        FIRST_MESSAGE: "/assets/5ef5055571515a96.svg",
    };
var eM = n(555644);
let ev = (e) => {
        let { mask: t } = e;
        return null == t
            ? null
            : (0, i.jsx)("div", {
                  className: eM.tK,
                  style: { backgroundColor: t.color.css },
                  children: (0, i.jsx)("img", { className: eM.QR, alt: "", src: t.icon }),
              });
    },
    eF = r.memo(function (e) {
        let { item: t } = e,
            n = null,
            s = !1,
            a = (0, g.bG)([eN.A], () => eN.A.getGuild(t.guild_id));
        if (null != t.icon_name)
            n = (0, i.jsx)("img", {
                alt: "",
                src: eO["icHighlight" === t.icon_name ? "TOP_MESSAGES" : "NOTIFICATION_CENTER"],
            });
        else if (null != t.other_user) {
            let e = t.other_user instanceof eh.A ? t.other_user : new eh.A(t.other_user),
                a = e.globalName ?? e.username;
            (n = (0, i.jsx)("img", { alt: a, className: eM.Sl, src: e.getAvatarURL(void 0, 40) })), (s = !0);
        } else if (null != t.icon_url) {
            let e = (null != a ? eT.Ay.getGuildIconURL({ id: a.id, icon: a.icon, size: 40 }) : null) ?? t.icon_url;
            n = (0, i.jsx)("img", { alt: a?.name ?? "", className: eM.Sl, src: e });
        } else
            n = (0, i.jsx)("img", {
                alt: "",
                src: eO[
                    ((e) => {
                        switch (e.type) {
                            case "lifecycle_item":
                                switch (e.item_enum) {
                                    case p.r_.ADD_FRIEND:
                                        return "ADD_FRIEND";
                                    case p.r_.FIND_FRIENDS:
                                        return "FIND_FRIENDS";
                                    case p.r_.FIRST_MESSAGE:
                                        return "FIRST_MESSAGE";
                                    case p.r_.UPDATE_PROFILE:
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
        let l = ((e) => {
            switch (e) {
                case p.hW.GO_LIVE_PUSH:
                    return { icon: "/assets/0038fc958959af7c.svg", color: ej.A.colors.BACKGROUND_MOD_STRONG };
                case p.hW.FRIEND_REQUEST_ACCEPTED:
                case p.hW.GAME_FRIEND_REQUEST_ACCEPTED:
                    return { icon: "/assets/c8ae30e56eb87fdf.svg", color: ej.A.colors.STATUS_POSITIVE_BACKGROUND };
                case p.hW.FRIEND_REQUEST_PENDING:
                case p.hW.FRIEND_SUGGESTION_CREATED:
                    return { icon: eD, color: ej.A.colors.BACKGROUND_MOD_STRONG };
                case p.hW.DM_FRIEND_NUDGE:
                    return { icon: "/assets/a7dd94c728c7093a.svg", color: ej.A.colors.BACKGROUND_MOD_STRONG };
                case p.Uo.INCOMING_FRIEND_REQUESTS:
                case p.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                    return { icon: eD, color: ej.A.colors.BACKGROUND_MOD_STRONG };
                case p.Uo.INCOMING_GAME_FRIEND_REQUESTS:
                case p.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                    return { icon: "/assets/fe02228daf40c37f.svg", color: ej.A.colors.BACKGROUND_MOD_STRONG };
                default:
                    return null;
            }
        })(t.type);
        return (0, i.jsxs)("div", {
            className: eM.kL,
            children: [
                (0, i.jsx)(ey.Ay, {
                    mask: null == l ? ey.hW.AVATAR_DEFAULT : ey.hW.AVATAR_STATUS_ROUND_16,
                    width: 40,
                    height: 40,
                    rightOverhang: 3,
                    bottomOverhang: 3,
                    className: eM.dK,
                    children: (0, i.jsx)("div", {
                        className: eM.ZS,
                        style: s
                            ? void 0
                            : {
                                  backgroundColor: ((e) => {
                                      switch (e.item_enum) {
                                          case p.r_.UPDATE_PROFILE:
                                              return "#83DDC5";
                                          case p.r_.ADD_FRIEND:
                                          case p.r_.FIND_FRIENDS:
                                              return "#F47FFF";
                                          case p.r_.FIRST_MESSAGE:
                                              return "#FFDE4D";
                                          default:
                                              return ej.A.unsafe_rawColors.BRAND_500.css;
                                      }
                                  })(t),
                              },
                        children: n,
                    }),
                }),
                (0, i.jsx)(ev, { mask: l }),
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
            children: (0, i.jsx)(eU.$, { variant: "secondary", onClick: n, text: X.intl.string(X.t["g33r/P"]) }),
        }),
    });
}
function eB(e) {
    let { userId: t, applicationId: n } = e,
        [s, a] = r.useState(!1),
        [l, o] = r.useState(!1),
        d = r.useCallback(
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
        c = r.useCallback(
            async (e) => {
                e.stopPropagation(), a(!0);
                try {
                    await eG.A.maybeConfirmFriendRequestAccept({
                        userId: t,
                        applicationId: n,
                        location: "ActionButtonFriendRequest",
                    });
                } finally {
                    a(!1);
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
                    onClick: c,
                    text: X.intl.string(X.t.Zcibdf),
                    loading: s,
                    disabled: l,
                }),
                (0, i.jsx)(eU.$, {
                    variant: "secondary",
                    onClick: d,
                    text: X.intl.string(X.t.xuio0C),
                    loading: l,
                    disabled: s,
                }),
            ],
        }),
    });
}
var eK = n(550079),
    eH = n(477782),
    ez = n(241326),
    eJ = n(922016),
    eW = n(365199);
let eY = (e) => {
        let { item: t, closePopout: n } = e;
        return (0, i.jsx)(eK.W, {
            "data-menu-migrated": !0,
            navId: "notification-actions",
            onClose: n,
            onSelect: n,
            "aria-label": X.intl.string(X.t.ljs3Oe),
            children: (0, i.jsx)(eH.Dr, {
                id: "delete",
                label: X.intl.string(X.t.oyYWHE),
                icon: ez.u,
                leadingAccessory: { type: "icon", icon: ez.u },
                action: async () => {
                    await U(t);
                },
            }),
        });
    },
    e$ = r.memo(function (e) {
        let { item: t } = e,
            n = r.useRef(null);
        return (0, i.jsx)(eJ.Y, {
            targetElementRef: n,
            renderPopout: (e) => (0, i.jsx)(eY, { ...e, item: t }),
            position: "bottom",
            align: "right",
            animation: eJ.Y.Animation.NONE,
            children: (e) => {
                let { onClick: t } = e;
                return (0, i.jsx)(f.m, {
                    text: X.intl.string(X.t["UKOtz+"]),
                    asContainer: !0,
                    children: (0, i.jsx)(A.K, {
                        buttonRef: n,
                        size: "sm",
                        icon: eW.j,
                        variant: "icon-only",
                        "aria-label": X.intl.string(X.t["UKOtz+"]),
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
    let s = e_.default.getUser(t.message?.author?.id) ?? new eh.A(t.message?.author),
        a = ed.A.parse(n);
    return (0, i.jsxs)("div", {
        className: ew.PI,
        children: [
            (0, i.jsx)(el.A, { user: s, size: ee._3.SIZE_24 }),
            (0, i.jsx)(et.E, { className: ew.Bp, variant: "text-sm/normal", lineClamp: 2, children: a }),
        ],
    });
}
function eQ(e) {
    let {
        item: { callout: t },
    } = e;
    if (null == t) return null;
    let n = ed.A.parse(t);
    return (0, i.jsx)("div", {
        className: ew.CD,
        children: (0, i.jsx)(et.E, { variant: "text-sm/normal", lineClamp: 2, children: n }),
    });
}
function eX(e) {
    let { item: t } = e,
        n = "/assets/4f3c39503b4b7fe4.svg",
        s = X.intl.string(X.t.SJTHJb);
    return (
        t.completed && ((n = "/assets/7f6a66c14402315f.svg"), (s = X.intl.string(X.t.f6RTAM))),
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
    return null == n ? (0, i.jsx)("div", {}) : (0, i.jsx)(ec.A, { application: n }, n.id);
}
let eZ = r.memo(function (e) {
        let t,
            { item: s, ackedBeforeId: a } = e,
            { analyticsLocations: l } = (0, ei.Ay)(),
            o = ((t = (0, g.bG)([H], () => H.isLocalItemAcked(s))), !s.forceUnacked && (t || (0, I.NW)(s, a))),
            d = r.useCallback(async () => {
                var e, t;
                if (
                    (o ||
                        (null != s.local_id
                            ? ((e = [s.local_id]),
                              j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK", localIds: e }))
                            : (0, I.gk)(s)
                              ? ((t = s.id),
                                j.h.dispatch({ type: "NOTIFICATION_CENTER_ITEMS_ACK", optimistic: !0, ids: [t] }))
                              : L(s.id)),
                    null != s.item_enum && s.item_enum === p.r_.FIND_FRIENDS)
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
                                  sourceAnalyticsLocations: l,
                              })
                            : await (0, eo.A)(n);
                    }
                    em.default.track(O.HAw.NOTIFICATION_CENTER_ACTION, {
                        action_type: p.e1.CLICKED,
                        notification_center_id: s.id,
                        item_type: s.type,
                        acked: o,
                    });
                }
            }, [s, o, l]),
            c = null;
        s.type === p.Uo.INCOMING_FRIEND_REQUESTS && null != s.other_user
            ? (c = (0, i.jsx)(eB, { userId: s.other_user.id }))
            : s.type === p.Uo.INCOMING_GAME_FRIEND_REQUESTS && null != s.other_user
              ? (c = (0, i.jsx)(eB, { userId: s.other_user.id, applicationId: s.applicationId }))
              : (s.type === p.hW.FRIEND_REQUEST_ACCEPTED || s.type === p.hW.GAME_FRIEND_REQUEST_ACCEPTED) &&
                null != s.other_user &&
                (c = (0, i.jsx)(eP, { userId: s.other_user.id }));
        let u = null != s.local_id,
            h = (function (e) {
                let { item: t, renderApplication: n } = e,
                    s = t.other_user?.id ?? O.dJq,
                    a = eC.Ay.getName(e_.default.getUser(t.other_user?.id)),
                    l = t.applicationId;
                switch (t.type) {
                    case p.Uo.FRIEND_REQUESTS_GROUPED:
                        let i = eC.Ay.getName(e_.default.getUser(t.other_users?.[0]?.id)),
                            r = eC.Ay.getName(e_.default.getUser(t.other_users?.[1]?.id)),
                            o = Math.max((t.other_users?.length ?? 0) - 2, 0);
                        return X.intl.format(X.t.g5xyIC, { user: i, user2: r, count: o });
                    case p.Uo.MOBILE_NATIVE_UPDATE_AVAILABLE:
                        let d = t.local_id?.split("_").pop() ?? "unknown";
                        return `Update to build ${d} available!`;
                    case p.hW.FRIEND_SUGGESTION_CREATED:
                        ep.A.getRelationshipType(s), O.eA$.PENDING_OUTGOING;
                        break;
                    case p.hW.GUILD_SCHEDULED_EVENT_STARTED:
                        let c = t.guild_scheduled_event_id,
                            u = null != c ? eE.Ay.getGuildScheduledEvent(c) : null,
                            h = u?.name,
                            _ = eN.A.getGuild(u?.guild_id)?.name,
                            m = (0, eE.AZ)(u ?? void 0);
                        return (0, eI.uJ)(_) || (0, eI.uJ)(h) || !m
                            ? (t.body ?? "")
                            : X.intl.format(X.t.AyvfXR, { event_name: h, guild_name: _ });
                    case p.Uo.INCOMING_FRIEND_REQUESTS:
                        return eS({
                            username: a,
                            applicationId: l,
                            renderApplication: n,
                            withApplication: X.t["9Dgf1L"],
                            withDefault: X.t.uIomXw,
                        });
                    case p.Uo.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                        return eS({
                            username: a,
                            applicationId: l,
                            renderApplication: n,
                            withApplication: X.t.nnC1q9,
                            withDefault: X.t["5Uzkdp"],
                        });
                    case p.hW.FRIEND_REQUEST_ACCEPTED:
                        return eS({
                            username: a,
                            applicationId: l,
                            renderApplication: n,
                            withApplication: X.t.jXlYiF,
                            withDefault: X.t.McYRBk,
                        });
                    case p.Uo.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED:
                        return (
                            eA()(null != l, `Expected application id for ${t.type}`),
                            X.intl.format(X.t["BB/0vn"], { username: a, applicationName: () => n(l) })
                        );
                    case p.Uo.INCOMING_GAME_FRIEND_REQUESTS:
                        return (
                            eA()(null != l, `Expected application id for ${t.type}`),
                            X.intl.format(X.t["7cqOLI"], { username: a, applicationName: () => n(l) })
                        );
                    case p.hW.GAME_FRIEND_REQUEST_ACCEPTED:
                        if (null == l) return t.body;
                        return X.intl.format(X.t.Wi64vN, { username: a, applicationName: () => n(l) });
                }
                return t.body ?? "";
            })({ item: s, renderApplication: (e) => (0, i.jsx)(eq, { applicationId: e }) }),
            { emoji_id: _, emoji_name: m } = s,
            f = null != _ || null != m ? (0, i.jsx)(ea.A, { className: ew.Zg, emojiId: _, emojiName: m }) : null;
        return (0, i.jsxs)("div", {
            className: ew.nM,
            children: [
                (0, i.jsxs)(es.s, {
                    className: ew.u4,
                    focusProps: { offset: 4 },
                    "aria-label": h,
                    onClick: d,
                    children: [
                        o ? null : (0, i.jsx)("div", { className: ew.gy }),
                        (0, i.jsx)(eF, { item: s }),
                        (0, i.jsxs)("div", {
                            className: ew.rf,
                            children: [
                                "lifecycle_item" === s.type && null != s.item_enum && (0, i.jsx)(eX, { item: s }),
                                (0, i.jsxs)(et.E, {
                                    variant: "text-md/normal",
                                    color: o ? "text-muted" : "text-default",
                                    children: ["string" != typeof h ? h : ed.A.parse(h), f],
                                }),
                                s.message?.content != null ? (0, i.jsx)(eV, { item: s }) : null,
                                null != s.callout ? (0, i.jsx)(eQ, { item: s }) : null,
                                (0, i.jsx)(et.E, {
                                    variant: "text-xs/medium",
                                    color: o ? "text-muted" : "text-default",
                                    children: (0, I.jb)(G.default.extractTimestamp(s.id)),
                                }),
                                c,
                            ],
                        }),
                    ],
                }),
                u ? null : (0, i.jsx)(e$, { item: s }),
            ],
        });
    }),
    e0 = r.memo(function (e) {
        let t,
            { items: n } = e,
            s = b.ns.useSetting();
        return (
            (t = r.useMemo(() => {
                let e = new Set(),
                    t = [];
                return (
                    n.forEach((n) => {
                        let { applicationId: s, type: a } = n;
                        !eR.has(a) || null == s || e.has(s) || (e.add(s), t.push(s));
                    }),
                    t
                );
            }, [n])),
            (0, ex.A)(t),
            (0, i.jsx)(i.Fragment, { children: n.map((e) => (0, i.jsx)(eZ, { item: e, ackedBeforeId: s }, e.id)) })
        );
    });
var e1 = n(523396);
function e6(e) {
    let { initialized: t, items: n, loading: s, loadMore: a } = e,
        l = r.useRef(null),
        o = (0, V.A)("for-you", l);
    (0, Q.A)(
        {
            type: R.ImpressionTypes.VIEW,
            name: R.ImpressionNames.NOTIFICATION_CENTER_LANDING,
            properties: { empty: 0 === n.length },
        },
        { disableTrack: !t },
        [t],
    );
    let d = () => {
        let e = l.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 1500 && a());
    };
    return t
        ? 0 === n.length
            ? (0, i.jsx)(Z, {})
            : (0, i.jsx)(W.hD, {
                  navigator: o,
                  children: (0, i.jsx)(W.PR, {
                      children: (e) => {
                          let { ref: t, ...a } = e;
                          return (0, i.jsxs)($.Ch, {
                              className: e1.kL,
                              ref: (e) => {
                                  (l.current = e), (t.current = e?.getScrollerNode() ?? null);
                              },
                              ...a,
                              onScroll: d,
                              children: [
                                  (0, i.jsx)(e0, { items: n }),
                                  s ? (0, i.jsx)(Y.y, { className: e1.u1 }) : null,
                              ],
                          });
                      },
                  }),
              })
        : (0, i.jsx)(Y.y, { className: e1.k$ });
}
function e3() {
    let { initialized: e, items: t, loading: n, loadMore: s } = J(),
        a = e2(
            t,
            (0, g.bG)([N.A], () => N.A.localItems),
        );
    return (0, i.jsx)(e6, { initialized: e, items: a, loading: n, loadMore: s });
}
function e2(e, t) {
    return r.useMemo(() => [...[...e, ...t].sort((e, t) => -1 * G.default.compare(e.id, t.id))], [e, t]);
}
function e9() {
    let { items: e } = J(),
        t = e.length > 0 ? e[0] : null,
        n = e2(
            e,
            (0, g.bG)([N.A], () => N.A.localItems),
        ),
        s = b.ns.useSetting();
    return r.useMemo(() => {
        if (null != t && 0 >= G.default.compare(t.id, s)) return !1;
        for (let e of n) {
            if (0 >= G.default.compare(e.id, s)) break;
            if (!(0, I.NW)(e, s)) return !0;
        }
        return !1;
    }, [t, s, n])
        ? (0, i.jsx)(f.m, {
              text: X.intl.string(X.t["8k+6QY"]),
              children: (0, i.jsx)(A.K, {
                  "aria-label": X.intl.string(X.t["8k+6QY"]),
                  icon: E.i,
                  variant: "secondary",
                  size: "sm",
                  onClick: () => {
                      null != t &&
                          (b.ns.updateSetting(t.id),
                          em.default.track(O.HAw.NOTIFICATION_CENTER_ACTION, { action_type: p.e1.MARK_ALL_READ }));
                  },
              }),
          })
        : null;
}
var e7 = n(815021),
    e5 = n(935063),
    e4 = n(378939),
    e8 = n(964486),
    te = n(475743),
    tt = n(323073),
    tn = n(202803),
    ts = n(636922),
    ta = n(835835),
    tl = n(910425),
    ti = n(734057),
    tr = n(517019),
    to = n(309010),
    td = n(939249),
    tc = n(373423);
function tu(e) {
    let { className: t, onJump: n } = e,
        [s, a] = r.useState(!1);
    return (0, i.jsx)(td.D, {
        className: d()(tc.n, t),
        onClick: (e) => {
            a(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(Y.y, { type: Y.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(et.E, { variant: "text-xs/medium", className: tc.Q, children: X.intl.string(X.t.k5WiPf) }),
    });
}
var th = n(187322),
    t_ = n(534514),
    tm = n(777666),
    tg = n(397244),
    tf = n(714114),
    tA = n(729551),
    tE = n(58149),
    tN = n(571694),
    tp = n(47167),
    tI = n(713654),
    tC = n(915089),
    tS = n(548118),
    tx = n(616356),
    tR = n(290863),
    ty = n(222823),
    tT = n(147925),
    tj = n(110357);
let tb = { top: 8, bottom: 8, left: -4, right: -4 };
function tD(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: s } = e;
    return (0, i.jsx)(f.m, {
        text: X.intl.string(X.t.iTcuma),
        children: (0, i.jsx)(td.D, {
            className: d()(tj.cS, { [tj.yZ]: t?.collapsed }),
            onClick: function () {
                null != t &&
                    null != n &&
                    (n(t),
                    (0, tE.zV)(O.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: s?.() ?? 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, i.jsx)(tT.A, { width: 16, height: 16 }),
        }),
    });
}
function tO(e) {
    let {
            channel: t,
            children: n,
            gotoChannel: s,
            mentionCount: a,
            channelState: l,
            toggleCollapsed: r,
            showCollapseButton: o = !1,
            getNumUnreadChannels: c,
        } = e,
        u = (0, W.rm)(`recents-header-${t.id}-${(0, tC.GV)()}`),
        h = o && !t.isNSFW() && null != l && "nsfw" !== l.type;
    return (0, i.jsx)(th.vN, {
        offset: tb,
        children: (0, i.jsxs)("div", {
            className: d()(tj.ZO, { [tj.b4]: h }),
            ...u,
            tabIndex: 0,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r &&
                    null != l &&
                    (("ArrowRight" === e.key && l.collapsed) || ("ArrowLeft" === e.key && !l.collapsed)) &&
                    r?.(l);
            },
            children: [
                h && null != l ? (0, i.jsx)(tD, { channelState: l, toggle: r, getNumUnreadChannels: c }) : null,
                (0, i.jsx)(tM, { channel: t, gotoChannel: s }),
                (0, i.jsx)(tL, { channel: t, gotoChannel: s, mentionCount: a }),
                n,
            ],
        }),
    });
}
function tM(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(tv, { channel: t, gotoChannel: n })
        : (0, i.jsx)(tF, { channel: t, gotoChannel: n });
}
function tv(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, g.bG)([e_.default], () => (t.isDM() ? e_.default.getUser(t.getRecipientId()) : null)),
        a = null == s ? (0, tN.Y)(t) : s.getAvatarURL(void 0, 40);
    return (0, i.jsx)(td.D, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)("img", { className: tj.ro, src: a, alt: "", "aria-hidden": !0 }),
    });
}
function tF(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, g.bG)([eN.A], () => eN.A.getGuild(t.guild_id));
    return null == s
        ? null
        : (0, i.jsx)(tS.Ay, {
              "aria-hidden": !0,
              className: tj.$f,
              guild: s,
              size: tS.Ay.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function tL(e) {
    let { channel: t, gotoChannel: n, mentionCount: s } = e,
        a = (0, g.bG)([eN.A], () => eN.A.getGuild(t.guild_id)),
        l = (0, g.bG)([ti.A], () => ti.A.getChannel(t.parent_id)),
        r = (0, g.bG)([ty.Ay], () => ty.Ay.getIsMentionLowImportance(t.id)),
        o = (0, tI.gU)(t, a),
        c = (0, tp.Ay)(t, !1),
        u = (0, tp.Ay)(l),
        h = null == l ? a?.name : `${a?.name} › ${u}`,
        _ = t.isMultiUserDM()
            ? X.intl.formatToPlainString(X.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(tU, { channel: t })
              : (0, i.jsx)(td.D, { className: d()(tj.W$, tj.J5), onClick: n, children: h });
    return (0, i.jsxs)("div", {
        className: tj.yP,
        children: [
            (0, i.jsx)(t_.D, {
                variant: "heading-md/semibold",
                className: tj.un,
                children: (0, i.jsxs)(td.D, {
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
                        (0, i.jsx)("span", { className: tj.je, children: c }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: tj.qS,
                                  children: (0, i.jsx)(tm.hV, {
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
            (0, i.jsx)(et.E, { color: "text-default", variant: "text-xs/normal", className: tj.PL, children: _ }),
        ],
    });
}
function tU(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: a,
            applicationStream: l,
        } = (0, g.cf)([e_.default, tR.A, tx.A], () => {
            let e = e_.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? tR.A.getStatus(e.id) : null,
                activities: null != e ? tR.A.getActivities(e.id) : null,
                applicationStream: null != e ? tx.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, tf.A)({ userId: n?.id });
    return (0, tg.A)({ activities: a, status: s, applicationStream: l, voiceChannel: r })
        ? (0, i.jsx)(tA.A, { user: n, activities: a, applicationStream: l, voiceChannel: r, hideTooltip: !0 })
        : null;
}
var tk = n(303727),
    tG = n(711917);
function tw(e) {
    let { Icon: t, header: n, tip: s, disableStars: a } = e;
    return (0, i.jsxs)("div", {
        className: tG.kL,
        children: [
            (0, i.jsxs)("div", {
                className: tG.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: tG.Kk, width: 36, height: 36 }),
                    a ? null : (0, i.jsx)(tk.A, { className: tG.uf }),
                ],
            }),
            (0, i.jsx)(t_.D, { className: tG.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(et.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    a
                        ? null
                        : (0, i.jsxs)(et.E, {
                              tag: "span",
                              className: tG.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [X.intl.string(X.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var tP = n(575863);
let tB = { offset: { left: 4, right: -12 } };
function tK(e, t, n) {
    let s = t ? x.Ay.guildFilter : null,
        a = t ? x.Ay.roleFilter : null,
        l = t ? x.Ay.everyoneFilter : null,
        i = null;
    null != e && null != s && (i = s === O.KE7.ALL_SERVERS ? null : e.getGuildId()),
        e4.A.fetchRecentMentions({ before: n, limit: O.Ue3, guildId: i, roles: a, everyone: l });
}
function tH(e) {
    let { onJump: t } = e,
        n = (0, g.bG)([ti.A, to.A], () => ti.A.getChannel(to.A.getChannelId())),
        {
            messages: s,
            hasMore: a,
            loading: l,
            guildFilter: o,
            roleFilter: c,
            everyoneFilter: u,
        } = (0, g.cf)([x.Ay], () => ({
            messages: x.Ay.getMentions(),
            hasMore: x.Ay.hasMore,
            loading: x.Ay.loading,
            guildFilter: x.Ay.guildFilter,
            roleFilter: x.Ay.roleFilter,
            everyoneFilter: x.Ay.everyoneFilter,
        })),
        h = (0, tl.Sc)(),
        _ = (0, te.A)(o),
        m = (0, te.A)(c),
        f = (0, te.A)(u);
    r.useEffect(() => {
        x.Ay.hasLoadedEver
            ? ((null != _ && o !== _) || (null != m && c !== m) || (null != f && u !== f)) && tK(n, !0)
            : tK(n, !0);
    }, [_, o, m, c, f, u, n, !0]),
        (0, e8.Ay)(() => {
            s?.some(tn.$r) && (e4.A.clearMentions(), tK(n, !0));
        }),
        r.useEffect(
            () => () => {
                e4.A.truncateMentions(O.Ue3);
            },
            [],
        );
    let A = r.useCallback(() => null, []);
    return (0, i.jsx)(ta.Ay, {
        className: d()(tP.sH, { [tP.qC]: h }),
        scrollerClassName: tP.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            e4.A.deleteRecentMention(e.id);
        },
        channel: n,
        messages: s,
        loading: l,
        hasMore: a,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            tK(n, !0, null != s && s.length > 0 ? s[s.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: A,
        renderEmptyState: tW,
        renderMessage: tz,
        "aria-label": X.intl.string(X.t.jbV6MM),
        listName: "recents",
    });
}
function tz(e, t) {
    return [(0, i.jsx)(tJ, { message: e, gotoMessage: t, dismissible: !0 }, e.id)];
}
function tJ(e) {
    let { message: t, gotoMessage: n, dismissible: s } = e;
    if (null == t) return null;
    let a = ti.A.getChannel(t.channel_id);
    if (null == a || (0, tt.Jm)(a) || (0, tt.$v)(a)) return null;
    let l = tr.A.didAgree(a.getGuildId()),
        r = !!(0, tt.Gc)(a) && !l;
    return (0, i.jsxs)("div", {
        className: tP.kL,
        children: [
            (0, i.jsx)(tO, {
                channel: a,
                gotoChannel: n,
                children:
                    null != s ? (0, i.jsx)(e7.J, { size: "sm", onClick: () => e4.A.deleteRecentMention(t.id) }) : null,
            }),
            (0, i.jsxs)("div", {
                className: tP.zC,
                children: [
                    (0, i.jsx)(tu, { className: tP.QT, onJump: n }),
                    (0, i.jsx)(
                        ts.A,
                        {
                            message: t,
                            channel: a,
                            className: tP.iU,
                            hideAccessories: r,
                            compact: b.hH.getSetting(),
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
function tW() {
    return (0, i.jsx)(tw, { Icon: e5.X, header: X.intl.string(X.t.bgDz74), tip: X.intl.string(X.t.NS15vk) });
}
var tY = n(702841),
    t$ = n(912592),
    tV = n(761508),
    tQ = n(966597),
    tX = n(85109),
    tq = n(214947),
    tZ = n(711950),
    t0 = n(912309),
    t1 = n(911933);
function t6(e) {
    let { closePopout: t } = e,
        n = (0, t0.kX)();
    return (0, i.jsx)(f.m, {
        asContainer: !0,
        text: X.intl.string(X.t["lMR96+"]),
        children: (0, i.jsxs)(td.D, {
            "aria-label": `${X.intl.string(X.t["lMR96+"])}, ${n}`,
            className: t1.b,
            onClick: () => {
                em.default.track(O.HAw.NOTIFICATION_CENTER_ACTION, { action_type: p.e1.FRIEND_REQUESTS_BUTTON_CLICK }),
                    tZ.A.transitionToSection(O.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(tq.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(tm.hV, { count: n, color: ej.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var t3 = n(783977);
function t2(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, g.bG)([ti.A, to.A], () => ti.A.getChannel(to.A.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: l,
            guildFilter: r,
        } = (0, g.cf)([x.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = x.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(eK.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": X.intl.string(X.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(eH.sL, {
                id: "Everyone",
                label: X.intl.string(X.t.cdyUsV),
                action: function () {
                    e4.A.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, i.jsx)(eH.sL, {
                id: "Roles",
                label: X.intl.string(X.t.lZejCq),
                action: function () {
                    e4.A.setGuildFilter({ roleFilter: !l });
                },
                checked: l,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(eH.sL, {
                      id: "All Servers",
                      label: X.intl.string(X.t.GWMA6s),
                      action: function () {
                          e4.A.setGuildFilter({
                              guildFilter: r === O.KE7.THIS_SERVER ? O.KE7.ALL_SERVERS : O.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === O.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function t9() {
    let e = r.useRef(null);
    return (0, i.jsx)(eJ.Y, {
        targetElementRef: e,
        align: "right",
        animation: eJ.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(t2, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(f.m, {
                text: X.intl.string(X.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(A.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": X.intl.string(X.t.pEasFX),
                    icon: t3.R,
                    onClick: n,
                }),
            });
        },
    });
}
var t7 = n(481613),
    t5 = n.n(t7),
    t4 = n(775602),
    t8 = n(625494),
    ne = n(723702),
    nt = n(862482),
    nn = n(640238);
function ns(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1),
        a = () => {
            t(),
                em.default.track(O.HAw.INBOX_CHANNEL_ACKED, {
                    marked_all_channels_as_read: !0,
                    num_unread_channels_remaining: 0,
                });
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(na, { confirm: a, cancel: () => s(!1) }) : null,
            (0, i.jsx)(f.m, {
                text: X.intl.string(X.t["8k+6QY"]),
                children: (0, i.jsx)(A.K, {
                    variant: "secondary",
                    "aria-label": X.intl.string(X.t["8k+6QY"]),
                    size: "sm",
                    icon: E.i,
                    onClick: (e) => {
                        e.shiftKey ? a() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function na(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(nn.M, {
        dismissable: !0,
        header: X.intl.string(X.t.h4bVZ2),
        confirmText: X.intl.string(X.t.e6RscS),
        cancelText: X.intl.string(X.t["ETE/oC"]),
        confirmButtonColor: nt.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(et.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: X.intl.string(X.t["0MQ0Bf"]),
        }),
    });
}
var nl = n(735438),
    ni = n.n(nl),
    nr = n(749314),
    no = n(419354),
    nd = n(311283),
    nc = n(717421),
    nu = n(933832),
    nh = n(976860),
    n_ = n(782603),
    nm = n(461678),
    ng = n(914703);
function nf(e) {
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
                      label: X.intl.string(X.t.ljs3Oe),
                  })
                : (0, i.jsx)(nm.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: X.intl.string(X.t.ljs3Oe),
                      location: { section: O.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(f.m, {
                text: X.intl.string(X.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(A.K, {
                    "aria-label": X.intl.string(X.t.h850Ss),
                    icon: n_.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var nA = n(350527),
    nE = n(218152),
    nN = n(970278),
    np = n(747926),
    nI = n(403362),
    nC = n(37411),
    nS = n(791641);
function nx(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        a = (0, g.yK)(
            [nN.A, ti.A],
            () =>
                ni()(nN.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return G.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return ti.A.getChannel(t);
                    })
                    .filter(nI.Vq)
                    .sort((e, t) => G.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        l = r.useCallback((e, t) => {
            (0, np.JA)(e, t, nC.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== a.length ||
                j.h.wait(() => {
                    (0, C.ack)(
                        t.channelId,
                        {
                            section: O.JJy.INBOX,
                            object: O.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: O.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: nS.k,
            children: a.map((e) =>
                (0, i.jsx)(
                    nE.Cp,
                    { channel: n, children: (0, i.jsx)(nA.Ay, { className: nS.u, threadId: e.id, goToThread: l }) },
                    e.id,
                ),
            ),
        })
    );
}
var nR = n(989349),
    ny = n.n(nR),
    nT = n(123292),
    nj = n(559149),
    nb = n(857069),
    nD = n(694318),
    nO = n(789645),
    nM = n(33358),
    nv = n(384231),
    nF = n(207133),
    nL = n(704413),
    nU = n(9842),
    nk = n(5095),
    nG = n(320095),
    nw = n(143413),
    nP = n(763754),
    nB = n(467073),
    nK = n(491182),
    nH = n(860227),
    nz = n(970848),
    nJ = n(375199),
    nW = n(522871),
    nY = n(715628),
    n$ = n(752636),
    nV = n(352043),
    nQ = n(268719),
    nX = n(234957),
    nq = n(888675),
    nZ = n(21623),
    n0 = n(701628);
let n1 = r.memo(function e(t) {
    let n,
        {
            channel: s,
            message: a,
            compact: l = !1,
            className: r,
            onContextMenu: o,
            onClick: c,
            disableInteraction: u = !1,
            hasThread: h,
            treatSpam: _,
        } = t,
        m = O.sl8.has(a.type) ? a.messageReference : void 0,
        f = (0, g.bG)([nU.A], () => nU.A.getMessageByReference(m)),
        A = (0, g.bG)([ti.A], () =>
            a.type === O.lAJ.THREAD_STARTER_MESSAGE && f.state === nU.a.LOADED
                ? ti.A.getChannel(f.message.channel_id)
                : null,
        ),
        E = b.X6.useSetting(),
        N = b.hD.useSetting(),
        p = b.rs.useSetting(),
        I = b.kt.useSetting(),
        C = (0, nv.S)((a.editedTimestamp ?? a.timestamp).valueOf()),
        S = (0, nF.A)(s?.id),
        { disableReactionCreates: x } = (0, nB.A)(s),
        {
            content: R,
            hasSpoilerEmbeds: y,
            hasBailedAst: T,
        } = (0, nJ.A)(a, {
            hideSimpleEmbedContent: N && p,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        j = (0, nP.Ay)(a),
        D = (0, g.bG)(
            [ti.A],
            () => a.hasFlag(O.pr7.HAS_THREAD) && ti.A.getChannel(G.default.castMessageIdAsChannelId(a.id)),
        ),
        M = a.type === O.lAJ.THREAD_STARTER_MESSAGE && f.state === nU.a.LOADED && null != A,
        v = !M && void 0 === n,
        F = (0, nW.A)({ message: a, channel: s, enabled: v }),
        L = (0, nM.P)(a),
        U = (0, nk._f)(a.id, a.channel_id),
        k = (0, nL.A)(a),
        w = (0, nH.fF)(a);
    return M
        ? (0, i.jsx)(e, { ...t, message: f.message, channel: A, hasThread: !1 })
        : (ep.A.isBlockedForMessage(a)
                ? (n = X.t["+FcYM/"])
                : ep.A.isIgnoredForMessage(a)
                  ? (n = X.t["VFWjc+"])
                  : (0, nD.kf)(a) && _ && (n = X.t.xfkfTK),
            void 0 !== n)
          ? (0, i.jsx)(n6, { className: r, compact: l, count: 1, collapsedReason: n })
          : (0, i.jsx)(nK.A, {
                compact: l,
                className: d()(r, { [n0.M1]: (0, nG.ec)(a), [n0.XN]: u, [n0._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, nX.A)(a, s, m, f, l),
                childrenHeader: (0, n$.A)({ ...t, author: j, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(nz.iV, {
                    channel: s,
                    message: a,
                    hasSpoilerEmbeds: y,
                    hasBailedAst: T,
                    compact: l,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: x,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: E,
                    inlineEmbedMedia: N,
                    renderEmbeds: p,
                    gifAutoPlay: I,
                    poll: k,
                    showListsAndHeaders: C,
                    showMaskedLinks: C,
                    shouldHideMediaOptions: S,
                    enabledContentHarmTypeFlags: L,
                    ctaButtonType: U,
                }),
                childrenExecutedCommand: (0, nQ.A)(a, s, l),
                childrenMessageContent: (0, nY.A)(t, R),
                childrenSystemMessage: (0, nV.A)(t),
                onContextMenu: o,
                onClick: c,
                hasThread: !1 !== h && null != D && a.hasFlag(O.pr7.HAS_THREAD),
                hasReply: a.type === O.lAJ.REPLY,
                isSystemMessage: (0, nw.A)(a),
                messageRef: F,
                author: j,
                "aria-labelledby": w,
                "aria-roledescription": X.intl.string(X.t.BAB0yK),
            });
});
function n6(e) {
    let { className: t, count: n, compact: s, collapsedReason: a } = e;
    return (0, i.jsx)(nK.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(nq.A, {
            compact: s,
            className: nZ.L9,
            iconNode: (0, i.jsx)(nO.P, { size: "md", color: "currentColor", className: nZ.Q6 }),
            children: (0, i.jsx)("div", { className: nZ.Fo, children: X.intl.format(a, { count: n }) }),
        }),
    });
}
var n3 = n(495544),
    n2 = n(58703),
    n9 = n(143236),
    n7 = n(720149),
    n5 = n(181079),
    n4 = n(567035),
    n8 = n(455234),
    se = n(695633),
    st = n(152007),
    sn = n(607508),
    ss = n(594061),
    sa = n(617617),
    sl = n(95701),
    si = n(808728),
    sr = n(232835),
    so = n(576705),
    sd = n(711014),
    sc = n(543465),
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
    sh = (((a = {}).Loading = "loading"), (a.Loaded = "loaded"), (a.Done = "done"), a);
class s_ extends n9.EventEmitter {
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
                        (eA()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || s.some((e, n) => e !== t[n])) &&
            this.setState({ channels: s, loadState: n ? this.state.loadState : "done" });
    }
    populateInitialStateFromStore(e) {
        if ("messages" === e.type) {
            let t = sm(e, !1);
            return t.messages.some(tn.$r) ? (n7.A.clearChannel(e.channelId), { ...e, messages: [] }) : t;
        }
        if ("nsfw" === e.type) return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
        if ("forum" === e.type) {
            let t = nN.A.hasLoaded(e.guildId);
            return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
        }
        (0, nI.xb)(e);
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? sm(e, !1, !0) : e,
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
                    section: O.JJy.INBOX,
                    object: O.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: O.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
              t4.A.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        C.ack(
            e.channelId,
            { section: O.JJy.INBOX, object: O.ZSU.UNDO_MARK_AS_READ, objectType: O.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        j.h.wait(() => (0, n4.A)([e], O.JJy.INBOX)),
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
        C.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: a, loadState: l } = this.state,
            i = ni().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            o = !r.collapsed;
        (a[t] = o),
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
                collapsedChannels: a,
                loadState: "done" !== l || o || r.isFullyLoaded ? l : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: o })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !sc.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
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
                let t = nN.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        n7.A.clearChannel(e.channelId);
        let t = n7.A.fetchMessages({
            channelId: e.channelId,
            limit: O.EMb,
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
                            eA()("messages" === e.type, "channel cannot change type");
                            let n = sm(e, !0);
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
                                eA()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...sm(e, !0),
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
function sm(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = sr.A.getMessages(e.channelId),
        a = s
            .toArray()
            .filter(
                (t) =>
                    G.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= G.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (a.length === e.messages.length && a.every((t, n) => e.messages[n] === t) && n) return e;
    let l = null != s.getAfter(e.oldestReadMessageId) || a[0]?.id === e.oldestUnreadMessageId,
        i = a[a.length - 1],
        r = G.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || a.length >= 25;
    return {
        ...e,
        messages: a,
        hasLoadedAnything: e.hasLoadedAnything || l || t,
        hasLoadedFirst: e.hasLoadedFirst || l || t,
        isFullyLoaded: e.isFullyLoaded || (l && r) || (t && !s.hasMoreAfter),
    };
}
function sg() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = sa.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let a = ti.A.getChannel(s);
                    (s in e && a?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            ti.A.getSortedPrivateChannels().forEach((n) => sf(e, t, null, n.id)),
            sd.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = si.Ay.getSelectableChannelIds(n),
                    a = se.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    sf(e, t, n, s);
                    let l = a[s] ?? {};
                    for (let s in l) sf(e, t, n, s);
                });
            }),
            ni().sortBy(t, (e) => e.sortOrder)),
        a = ni()
            .uniq(s.map((e) => e.guildId))
            .filter(nI.Vq);
    return (
        j.h.dispatch({ type: "INBOX_OPEN", guildIds: a }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function sf(e, t, n, s) {
    if (null == s) return;
    let a = ti.A.getChannel(s);
    if (null == a || (!sl.Le.has(a.type) && sc.Ay.isGuildOrCategoryOrChannelMuted(n, a.id))) return;
    if (a.isPrivate()) {
        if (0 === ty.Ay.getMentionCount(s)) return;
    } else if (!(0, n8.Y)(a) && 0 === ty.Ay.getMentionCount(s)) return;
    if ((!a.isPrivate() && !so.A.can(O.xBc.READ_MESSAGE_HISTORY, a)) || (0, tt.qR)(a)) return;
    let l = ty.Ay.ackMessageId(s);
    if (null == l) {
        let e = eN.A.getGuild(a.guild_id);
        if (null == e || null == e.joinedAt) return;
        l = G.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = ty.Ay.getOldestUnreadMessageId(s),
        r = ty.Ay.lastMessageId(s),
        o = ty.Ay.getMentionCount(s),
        d = o > 0 || a.isPrivate();
    if (null == r || G.default.compare(l, r) >= 0) return;
    let c = {
        guildId: n,
        channelId: s,
        oldestReadMessageId: l,
        oldestUnreadMessageId: i,
        newestUnreadMessageId: r,
        collapsed: !0 === e[s],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: d,
        mentionCount: o,
        sortOrder: (function (e, t, n) {
            let s = ti.A.getChannel(t);
            if (n5.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (ty.Ay.getMentionCount(t) > 0) return ty.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = G.default.extractTimestamp(n);
                if (Date.now() - e > sE) return 8;
                if (Date.now() - e > sA) return 6;
            }
            if (s.isThread()) {
                let e = (0, sn.l)(s);
                return e === nC.CP.ALL_MESSAGES ? 4 : e === nC.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = sc.Ay.getChannelMessageNotifications(e, t),
                    s = n === O.orn.NULL ? sc.Ay.getMessageNotifications(e) : n;
                return s === O.orn.ALL_MESSAGES ? 4 : s === O.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, tt.qR)(a)
        ? t.push({ ...c, type: "nsfw" })
        : a.isForumLikeChannel()
          ? t.push({ ...c, type: "forum" })
          : t.push({ ...c, type: "messages", messages: [] });
}
let sA = 2 * k.A.Millis.DAY,
    sE = 10 * k.A.Millis.DAY;
var sN = n(357242);
let sp = { left: 4, right: -12 },
    sI = [O.lAJ.THREAD_CREATED];
function sC(e) {
    let { channel: t, message: n, compact: s, isGroupStart: a, treatSpam: l, gotoChannel: o } = e,
        d = (0, W.rm)(n.id ?? ""),
        c = r.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), o(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, o, n.id],
        ),
        u = sI.includes(n.type);
    return (0, i.jsx)(th.vN, {
        offset: sp,
        children: (0, i.jsxs)("div", {
            className: sN.zC,
            onKeyDown: c,
            ...d,
            children: [
                !u && (0, i.jsx)(tu, { className: sN.nn, onJump: (e) => o(e, n.id) }),
                (0, i.jsx)(n1, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: sN.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: a,
                    treatSpam: l,
                }),
            ],
        }),
    });
}
function sS(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        { enabled: a } = nj.A.useExperiment({ location: "20e3b0_1" }, { autoTrackExposure: !1 }),
        l = b.hH.useSetting(),
        r = (0, nD.iJ)(n),
        o = !1,
        d = 0 === t.messages.length || ny()(t.messages[0].timestamp).isSame(ny()(), "day"),
        c = e_.default.getUser(n3.default.getId())?.hasFlag(O.nhx.SPAMMER) ?? !1,
        u = [];
    if (!t.collapsed) {
        let e = null,
            h = null,
            _ = t.messages.slice(0, 25);
        _.forEach((t) => {
            if (!d && (null == e || !e.isSame(t.timestamp, "day"))) {
                let n = (0, n2.i$)(t.timestamp, "LL");
                u.push((0, i.jsx)(nr.A, { className: sN.yF, children: n }, n)), (e = ny()(t.timestamp));
            }
            let _ = null == h || (0, nb.A)(n, h, t);
            (h = t),
                (o = o || (0, nD.kf)(t)),
                u.push(
                    (0, i.jsx)(
                        sC,
                        {
                            channel: n,
                            message: t,
                            compact: l,
                            isGroupStart: _,
                            treatSpam: !c && a && (0, nD.kf)(t) && r,
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
                            className: sN.Gr,
                            children: (0, i.jsx)(nT.Q, {
                                variant: "primary",
                                text: `${X.intl.string(X.t["9OB9hq"])} \u203A`,
                                onClick: (e) => s(e, _[_.length - 1].id),
                            }),
                        },
                        "view-all",
                    ),
                ),
            0 === u.length && (u = [(0, i.jsx)(Y.y, {}, "spinner")]);
    }
    return o && r && nj.A.trackExposure({ location: "20e3b0_2" }), (0, i.jsx)("div", { className: sN.DZ, children: u });
}
var sx = n(201489);
let sR = r.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            s = r.useRef(null),
            [[a, l], o] = r.useState([0, 0]),
            d = t.deleted && a > 0;
        r.useLayoutEffect(() => {
            if (!t.deleted || 0 !== a || null == s.current) return;
            let e = s.current,
                l = e.offsetHeight;
            if (l <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                d = r > i ? l - (r - i) : l;
            o([l, l - d]);
        }, [t.deleted, t.channelId, n, a]);
        let { opacity: c, size: u } = (0, nc.z)(
                {
                    config: { clamp: !0, friction: 18, tension: 200 },
                    opacity: +!d,
                    size: +!d,
                    onRest: () => {
                        n(t.channelId);
                    },
                },
                "animate-always",
            ),
            h = {
                opacity: c,
                height: u.to((e) => {
                    var t, n;
                    return d ? ((t = a), (n = l) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(no.animated.div, { ref: s, style: h, children: (0, i.jsx)(sy, { ...e }) });
    }),
    sy = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: a } = e,
            l = (0, g.bG)([ti.A], () => ti.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == l ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    j.h.wait(() => {
                        (0, C.ack)(
                            t.channelId,
                            {
                                section: O.JJy.INBOX,
                                object: O.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: O.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId);
                    });
            }),
            null == l || !t.hasLoadedAnything)
        )
            return null;
        let o = (e, s) => {
            (0, tE.zV)(O.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let a = s ?? t.oldestUnreadMessageId;
            (0, nh.pX)(O.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : a)), n(e);
        };
        return (0, i.jsx)("div", {
            className: sx.Ix,
            children: (0, i.jsx)(_.F, {
                component: (0, i.jsx)(tO, {
                    channel: l,
                    gotoChannel: o,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: a,
                    showCollapseButton: !0,
                    channelState: t,
                    getNumUnreadChannels: e.getNumUnreadChannels,
                    children: (0, i.jsxs)(eL.e, {
                        size: "sm",
                        className: sx.GC,
                        children: [(0, i.jsx)(nf, { channel: l }), (0, i.jsx)(sT, { ...e })],
                    }),
                }),
                children: t.collapsed
                    ? null
                    : "messages" === t.type
                      ? (0, i.jsx)(sS, { channel: t, channelRecord: l, gotoChannel: o })
                      : "forum" === t.type
                        ? (0, i.jsx)(nx, { channel: t, channelRecord: l, deleteChannel: s })
                        : null,
            }),
        });
    });
function sT(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: a } = e,
        l = (0, nd.A)() && null != t.guildId;
    return (0, i.jsx)(f.m, {
        text: l ? X.intl.string(X.t["5lLMhM"]) : X.intl.string(X.t.e6RscS),
        children: (0, i.jsx)(A.K, {
            variant: "secondary",
            "aria-label": l ? X.intl.string(X.t["5lLMhM"]) : X.intl.string(X.t.e6RscS),
            size: "sm",
            icon: l ? E.i : nu.A,
            onClick: function () {
                l && null != t.guildId ? s(t.guildId) : n(t),
                    (0, tE.zV)(O.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: a() - 1,
                    });
            },
        }),
    });
}
var sj = n(301328),
    sb = n(691503);
function sD(e) {
    var t, n, s, a, l, o;
    let { onJump: c, showTutorial: u, setSeenTutorial: h, closePopout: _ } = e,
        m = r.useRef(null),
        [f, A] = (function (e) {
            let [t, n] = r.useState(() => new s_(sg(), e)),
                [s, a] = r.useState(!1),
                l = r.useRef(Date.now()),
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
                    0 === r.channels.length || t - l.current < 10 * k.A.Millis.SECOND
                        ? a(!0)
                        : ((l.current = Date.now()), n(new s_(r, e)));
                }, [i, s, e]);
            let d = r.useRef(t);
            return (
                r.useLayoutEffect(() => {
                    d.current = t;
                }),
                r.useLayoutEffect(() => {
                    i?.channels, i?.loadState, d.current.maybeLoadMore();
                }, [i?.channels, i?.loadState]),
                r.useEffect(
                    () => (sr.A.addChangeListener(t.reloadMessages), () => sr.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        sc.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => sc.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
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
                        nN.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => nN.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(m),
        { loadState: E, channels: N } = f,
        { maybeLoadMore: p } = A,
        I = (0, g.bG)([t4.A], () => t4.A.messageGroupSpacing);
    (t = m),
        (n = f),
        (s = A),
        r.useLayoutEffect(() => {
            let { scrollToChannelIndex: e } = n;
            s.clearScrollToChannelIndex();
            let { current: a } = t;
            if (null == a || null == e) return;
            let l = a.getScrollerNode()?.children;
            if (null == l) return;
            let i = l[e];
            if (null == i) return;
            let { scrollTop: r, offsetHeight: o } = a.getScrollerState();
            (i.offsetTop < r || i.offsetTop > r + o) && a.scrollTo({ to: i.offsetTop });
        }),
        (a = f),
        (l = A),
        r.useEffect(() => {
            let e = () => {
                let e = a.channels.find((e) => !e.collapsed);
                null != e && l.markChannelRead(e);
            };
            return (
                t8._.subscribe(O.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    t8._.unsubscribe(O.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [l, a.channels]),
        (o = A),
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
            em.default.track(O.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        r.useEffect(
            () => (
                j.h.subscribe("CONNECTION_OPEN", _),
                () => {
                    j.h.unsubscribe("CONNECTION_OPEN", _);
                }
            ),
            [_],
        ),
        (0, e8.Ay)(
            () => (
                t8._.subscribe(O.jej.INBOX_MARK_ALL_UNREADS_READ, A.markAllRead),
                () => {
                    t8._.unsubscribe(O.jej.INBOX_MARK_ALL_UNREADS_READ, A.markAllRead);
                }
            ),
        );
    let C = (0, V.A)("unreads", m);
    return 0 === N.length
        ? (0, i.jsx)(tw, {
              Icon: t$.K,
              header: X.intl.string(X.t["6XMM+D"]),
              tip: t5().os?.family === "OS X" ? X.intl.string(X.t.w9uDOW) : X.intl.string(X.t.BiUJC6),
          })
        : (0, i.jsx)(W.hD, {
              navigator: C,
              children: (0, i.jsx)(W.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)($.Ch, {
                          ref: (e) => {
                              (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: E === sh.Done ? void 0 : p,
                          className: d()(sb.XG, `group-spacing-${I}`),
                          children: [
                              u ? (0, i.jsx)(sO, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: a,
                                          deleteChannel: l,
                                          toggle: r,
                                          getNumUnreadChannels: o,
                                      } = t,
                                      d = null;
                                  return ni().flatMap(e, (e) => {
                                      let t = e.sortOrder !== d;
                                      d = e.sortOrder;
                                      let c = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === su.ReallyOldChannel
                                                  ? c.push(
                                                        (0, i.jsx)(
                                                            nr.A,
                                                            {
                                                                className: sj.y,
                                                                contentClassName: sj.$,
                                                                children: X.intl.string(X.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === su.NoNotifications &&
                                                    c.push(
                                                        (0, i.jsx)(
                                                            nr.A,
                                                            {
                                                                className: sj.y,
                                                                contentClassName: sj.$,
                                                                children: X.intl.string(X.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          c.push(
                                              (0, i.jsx)(
                                                  sR,
                                                  {
                                                      channel: e,
                                                      markChannelRead: s,
                                                      markGuildRead: a,
                                                      toggle: r,
                                                      deleteChannel: l,
                                                      onJump: n,
                                                      getNumUnreadChannels: o,
                                                  },
                                                  e.channelId,
                                              ),
                                          ),
                                          c
                                      );
                                  });
                              })(N, A, c),
                              E === sh.Done ? null : (0, i.jsx)(Y.y, { className: sb.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function sO(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: sb.d$,
        children: [
            (0, i.jsx)("div", { className: sb.cm, children: (0, i.jsx)(t$.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(t_.D, {
                        className: sb.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: X.intl.string(X.t.vZPktJ),
                    }),
                    (0, i.jsx)(et.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: X.intl.string(X.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: sb.dh,
                        children: (0, i.jsx)(eU.$, {
                            variant: "primary",
                            size: "sm",
                            text: X.intl.string(X.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function sM() {
    return (0, i.jsx)(tw, {
        Icon: t$.K,
        disableStars: !0,
        header: X.intl.string(X.t["KG/ynf"]),
        tip: X.intl.string(X.t.cvcKzX),
    });
}
let sv = () => (0, i.jsx)(ns, { onClick: () => t8._.dispatch(O.jej.INBOX_MARK_ALL_UNREADS_READ) });
var sF = n(716030);
function sL(e) {
    let { tab: t, setTab: n, badgeState: s, closePopout: a } = e,
        { enabled: l, inInbox: r } = tQ.A.useConfig({ location: "RecentsPopout" }),
        o = (0, tl.Sc)(),
        d = (0, tY.bG)([tX.A], () => tX.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: sF.wx,
        children: [
            (0, i.jsxs)("div", {
                className: sF.qd,
                children: [
                    (0, i.jsx)(t$.K, { size: "md", color: "currentColor", className: sF.yH }),
                    (0, i.jsx)(t_.D, {
                        className: sF.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: X.intl.string(X.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(es.s, {
                        className: sF.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": X.intl.string(X.t["8k+6QY"]),
                        children: [(0, i.jsx)(sU, { tab: t }), (0, i.jsx)(t6, { closePopout: a })],
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
                            "aria-label": X.intl.string(X.t["En+D+u"]),
                            className: sF.Mf,
                            children: [
                                X.intl.string(X.t["En+D+u"]),
                                s?.badgeForYou
                                    ? (0, i.jsx)(tm.SC, {
                                          color: ej.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                          className: sF.bG,
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsx)(tV.V.Item, {
                            id: u.Y2.UNREADS,
                            className: sF.Mf,
                            children: X.intl.string(X.t.sRUdB8),
                        }),
                        (0, i.jsx)(tV.V.Item, {
                            "aria-label": X.intl.string(X.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: sF.Mf,
                            children: X.intl.string(X.t.GRZF96),
                        }),
                        l && r
                            ? (0, i.jsx)(tV.V.Item, {
                                  "aria-label": X.intl.string(X.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: sF.Mf,
                                  children:
                                      0 === d
                                          ? X.intl.string(X.t["2pAkDA"])
                                          : X.intl.formatToPlainString(X.t.I4fryG, { count: d }),
                              })
                            : null,
                        o
                            ? (0, i.jsx)(tV.V.Item, {
                                  "aria-label": "scheduled",
                                  id: u.Y2.SCHEDULED,
                                  className: sF.Mf,
                                  children: X.intl.string(X.t.Fn6Odn),
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
        ? (0, i.jsx)(e9, {})
        : t === u.Y2.UNREADS
          ? (0, i.jsx)(sv, {})
          : t === u.Y2.MENTIONS
            ? (0, i.jsx)(t9, {})
            : null;
}
var sk = n(406810),
    sG = n(285796),
    sw = n(151282),
    sP = n(199160),
    sB =
        (((l = {})[(l.SCHEDULED = 0)] = "SCHEDULED"),
        (l[(l.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (l[(l.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (l[(l.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (l[(l.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (l[(l.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        l),
    sK = n(970244),
    sH = n(383233),
    sz = n(560502);
let sJ = { offset: { left: 4, right: -12 } };
function sW() {
    return (
        r.useEffect(() => {
            (0, sw.sy)();
        }, []),
        (0, i.jsx)(sY, {})
    );
}
function sY() {
    let e = (0, g.bG)([sP.A], () => sP.A.getScheduledMessagesForInbox(), []),
        t = r.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, g.bG)([sP.A], () => sP.A.loading, []),
        s = r.useRef(null),
        a = (0, V.A)("scheduled-messages", s);
    return n
        ? (0, i.jsx)(Y.y, { className: sz.k$ })
        : 0 === t.length
          ? (0, i.jsx)(tw, { Icon: sk.O, header: X.intl.string(X.t.aJQZfZ), tip: X.intl.string(X.t.rCN4pN) })
          : (0, i.jsx)(W.hD, {
                navigator: a,
                children: (0, i.jsx)(W.PR, {
                    children: (e) => {
                        let { ref: n, ...a } = e;
                        return (0, i.jsx)($.Ch, {
                            ref: (e) => {
                                (s.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...a,
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
            let [t, { channel: n, scheduledMessages: a }] = e;
            return (0, i.jsxs)(
                "div",
                {
                    className: sz.WG,
                    children: [
                        (0, i.jsx)(tO, {
                            channel: n,
                            gotoChannel: () => (0, nh.pX)(O.BVt.CHANNEL(n.getGuildId(), n.id)),
                            children: null,
                        }),
                        a.map((e) => {
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
        a = new sH.Ay({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: e_.default.getUser(t.userId),
            timestamp: ny()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: l, stateMessage: o } = (function (e) {
            switch (e) {
                case sB.SCHEDULED:
                    return { isError: !1, stateMessage: X.intl.string(X.t.Fn6Odn) };
                case sB.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: X.intl.string(X.t.v5O2dK) };
                case sB.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: X.intl.string(X.t.j8uIfG) };
                case sB.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: X.intl.string(X.t["w6zHX/"]) };
                case sB.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: X.intl.string(X.t.pflV7z) };
                case sB.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: X.intl.string(X.t.j8uIfG) };
                default:
                    (0, nI.xb)(e);
            }
        })(t.state),
        c = r.useCallback(() => {
            (0, sw.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, sK.Re)();
                })
                .catch((e) => {
                    (0, sK.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, sK.CI)({ scheduledMessage: t });
        }, [t]);
    return (0, i.jsx)(
        "div",
        {
            className: d()(sz.zC, { [sz._4]: l, [sz.j3]: !l }),
            children: s
                ? (0, i.jsx)(Y.y, { className: sz.$5 })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(et.E, {
                              variant: "text-xs/semibold",
                              color: l ? "text-feedback-critical" : "text-feedback-positive",
                              className: sz.Rq,
                              children: o,
                          }),
                          (0, i.jsxs)("div", {
                              className: sz.Pd,
                              children: [
                                  (0, i.jsx)(
                                      ts.A,
                                      {
                                          message: a,
                                          channel: n,
                                          className: sz.iU,
                                          compact: b.hH.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: sJ,
                                      },
                                      a.id,
                                  ),
                                  (0, i.jsxs)(eL.e, {
                                      size: "sm",
                                      children: [
                                          (0, i.jsx)(A.K, {
                                              icon: sk.O,
                                              onClick: u,
                                              variant: "icon-only",
                                              "aria-label": X.intl.string(X.t.SBcdAN),
                                          }),
                                          (0, i.jsx)(A.K, {
                                              icon: sG.a,
                                              onClick: c,
                                              "aria-label": X.intl.string(X.t.O3sL8F),
                                              variant: "icon-only",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
        },
        a.id,
    );
});
var sQ = n(665553);
function sX(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: a,
        badgeState: l,
        closePopout: r,
        handleMentionsJump: o,
        showTutorial: g,
        setSeenTutorial: f,
        forLaterEnabled: A,
        showForLater: E,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": X.intl.string(X.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: d()(sQ.k, { [sQ.q]: n }),
            children: (0, i.jsx)(_.F, {
                component: (0, i.jsx)(sL, { tab: s, setTab: a, badgeState: l, closePopout: r }),
                children:
                    s === u.Y2.FOR_YOU
                        ? (0, i.jsx)(e3, {})
                        : s === u.Y2.MENTIONS
                          ? (0, i.jsx)(tH, { onJump: o })
                          : A && E && s === u.Y2.BOOKMARKS
                            ? (0, i.jsx)(m.J, { closePopout: r })
                            : s === u.Y2.SCHEDULED
                              ? (0, i.jsx)(sW, {})
                              : (0, i.jsx)(c.tH, {
                                    fallback: (0, i.jsx)(sM, {}),
                                    children: (0, i.jsx)(sD, {
                                        onJump: o,
                                        showTutorial: g,
                                        setSeenTutorial: f,
                                        closePopout: r,
                                    }),
                                }),
            }),
        }),
    });
}
