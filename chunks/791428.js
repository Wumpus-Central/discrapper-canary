l.r(n), l.d(n, { default: () => eo });
var i = l(477900),
    t = l(582128),
    a = l(17928),
    r = l(228366),
    s = l(47167),
    c = l(726249),
    d = l(742589),
    o = l(131047),
    u = l(280450),
    h = l(71393),
    g = l(309010),
    f = l(683180);
l(321073);
var x = l(866665),
    p = l(408278),
    I = l(811893),
    A = l(70688),
    m = l(47294),
    C = l(16961),
    j = l(625180),
    y = l(91242),
    b = l(580954),
    k = l(672929),
    v = l(494126),
    E = l(5867);
async function N(e) {
    null == y.A.getFrame(e) ||
        ((await (0, v.refreshProxyTicket)(e)) &&
            ((0, v.promoteFrame)(e),
            (0, v.updateFramePanelMode)(e, E.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var T = l(574172),
    _ = l(869146),
    P = l(976860),
    w = l(808728),
    O = l(576705),
    S = l(972786),
    F = l(621466),
    R = l(453903),
    V = l(922016),
    D = l(980707),
    M = l(477782),
    z = l(22231),
    H = l(663417),
    B = l(625903),
    G = l(624479),
    L = l(365199),
    W = l(998939),
    U = l(976814),
    Y = l(459864),
    K = l(375708),
    X = l(452394);
function q(e) {
    let { onRefresh: n, isRefreshing: l, canEdit: r, onEdit: s, canFork: c, forking: d, onFork: o, projectId: u } = e,
        h = t.useRef(null),
        g = K.intl.string(K.t["UKOtz+"]),
        f = (0, a.bG)([W.Ay], () => null != u && null != W.Ay.getSettings(u), [u]),
        I = t.useCallback(() => {
            null != u && (0, U.A)(u);
        }, [u]);
    return (0, i.jsx)(V.Y, {
        targetElementRef: h,
        align: "right",
        position: "bottom",
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, F.vq)(document.activeElement, HTMLIFrameElement)) return R.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(D.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": g,
                children: (0, i.jsxs)(M.rX, {
                    children: [
                        r
                            ? (0, i.jsx)(M.Dr, {
                                  id: "edit",
                                  icon: z.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: z.PencilIcon },
                                  label: K.intl.string(Y.default.NXfIfj),
                                  action: s,
                              })
                            : null,
                        (0, i.jsx)(M.Dr, {
                            id: "refresh",
                            icon: H.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: H.RefreshIcon },
                            label: K.intl.string(Y.default.xKexN1),
                            disabled: l,
                            action: n,
                        }),
                        f
                            ? (0, i.jsx)(M.Dr, {
                                  id: "settings",
                                  icon: B.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: B.SettingsIcon },
                                  label: K.intl.string(Y.default.gTMvzD),
                                  action: I,
                              })
                            : null,
                        c
                            ? (0, i.jsx)(M.Dr, {
                                  id: "fork",
                                  icon: G.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: G.CopyIcon },
                                  label: K.intl.string(Y.default.sFFX7L),
                                  disabled: d,
                                  action: o,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: n } = e;
            return (0, i.jsx)("div", {
                ref: h,
                className: X.h,
                children: (0, i.jsx)(x.m, {
                    text: g,
                    ariaHidden: !0,
                    children: (0, i.jsx)(p.K, {
                        "aria-label": g,
                        icon: L.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: n,
                    }),
                }),
            });
        },
    });
}
var Z = l(534890),
    $ = l(27989),
    J = l(403853);
function Q(e) {
    let { badge: n, ...l } = e,
        a = t.useId();
    if (null == n) return (0, i.jsx)(Z.ChatIcon, { ...l });
    let r = "custom" === l.size ? { width: l.width, height: l.height } : (0, $.J)(l.size ?? "md");
    return (0, i.jsxs)("svg", {
        width: r?.width ?? 24,
        height: r?.height ?? 24,
        viewBox: "0 0 24 24",
        className: l.className,
        style: l.style,
        children: [
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, i.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        (0, i.jsx)("circle", { cx: "19", cy: "19", r: "7.5", fill: "black" }),
                    ],
                }),
            }),
            (0, i.jsx)("g", {
                mask: `url(#${a})`,
                children: (0, i.jsx)(Z.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: l.color,
                    colorClass: l.colorClass,
                }),
            }),
            (0, i.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === n ? J.a : J.Z }),
        ],
    });
}
var ee = l(594483),
    en = l(573163),
    el = l(652215),
    ei = l(746080),
    et = l(165610);
function ea(e) {
    let { applicationId: n, surface: l, guildId: r, channelId: s, project: c, chatOpen: d, onToggleChat: o } = e,
        u = (0, k.A)(n, l),
        { badge: h, mentionCount: g } = (0, a.cf)([en.Ay], () => {
            let e = en.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : en.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        f = (0, C.G)(),
        {
            fork: v,
            forking: E,
            canFork: F,
        } = (function (e, n) {
            let [l, i] = t.useState(!1),
                a = null != n && null != e && (0, S.P)(e);
            return {
                fork: t.useCallback(async () => {
                    if (!l && null != n && null != e) {
                        i(!0);
                        try {
                            await (0, ee.A)(e, n);
                        } finally {
                            i(!1);
                        }
                    }
                }, [l, n, e]),
                forking: l,
                canFork: a,
            };
        })(c, r),
        R = null != r && null != c,
        V = t.useCallback(() => {
            null != r && null != c && (0, P.pX)(el.BVt.CHANNEL(r, ei.VV.VIBEGRATIONS, c.id));
        }, [r, c]),
        D = (0, et.x1)(u) && u.data.proxyTicketRefreshing,
        M = t.useCallback(() => {
            null == u || D || j.A.refreshProxyTicket(u.id);
        }, [u, D]),
        z = t.useCallback(() => {
            null != u && (0, m.A)({ onConfirm: () => N(u.id) });
        }, [u]),
        H = t.useCallback(() => {
            let e = u?.id;
            null != e &&
                _.A.getWindowOpen(el.MLl.ACTIVITY_POPOUT) &&
                y.A.getMainFrame()?.id === e &&
                (0, T.close)(el.MLl.ACTIVITY_POPOUT),
                (0, b.A)().leaveFrame(e),
                (0, P.pX)(
                    (function (e, n) {
                        if (null == e) return el.BVt.FRIENDS;
                        let l = w.Ay.getDefaultChannel(e);
                        if (null != l && l.id !== n) return el.BVt.CHANNEL(e, l.id);
                        let i = w.Ay.getFirstChannel(e, (e) => {
                            let { channel: l } = e;
                            return l.id !== n && O.A.can(el.xBc.VIEW_CHANNEL, l);
                        });
                        return null != i ? el.BVt.CHANNEL(e, i.id) : el.BVt.FRIENDS;
                    })(r, (0, et.h)(l)),
                );
        }, [u?.id, r, l]),
        B = K.intl.string(!0 === d ? Y.default.YdgE0j : Y.default.aWVf4j),
        G = !0 === d ? null : h,
        L = [B];
    "mention" === G
        ? L.push(K.intl.formatToPlainString(K.t["3l1GOx"], { mentionCount: g }))
        : "unread" === G && L.push(K.intl.string(K.t.x5zAGZ));
    let W = t.useCallback((e) => (0, i.jsx)(Q, { ...e, badge: G }), [G]),
        U =
            null == o
                ? null
                : (0, i.jsx)(x.m, {
                      text: B,
                      ariaHidden: !0,
                      children: (0, i.jsx)(p.K, {
                          "aria-label": L.join(", "),
                          "aria-pressed": !0 === d,
                          icon: W,
                          variant: "icon-only",
                          size: "sm",
                          onClick: o,
                      }),
                  });
    if (!(0, et.x1)(u)) return U;
    let X = K.intl.string(Y.default["6g22y7"]),
        Z = K.intl.string(Y.default.Ea0Wrr);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(q, {
                projectId: c?.id,
                onRefresh: M,
                isRefreshing: D,
                canEdit: R,
                onEdit: V,
                canFork: F,
                forking: E,
                onFork: v,
            }),
            U,
            f
                ? (0, i.jsx)(x.m, {
                      text: X,
                      ariaHidden: !0,
                      children: (0, i.jsx)(p.K, {
                          "aria-label": X,
                          icon: I.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: z,
                      }),
                  })
                : null,
            (0, i.jsx)(x.m, {
                text: Z,
                ariaHidden: !0,
                children: (0, i.jsx)(p.K, {
                    "aria-label": Z,
                    icon: A.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: H,
                }),
            }),
        ],
    });
}
var er = l(214122),
    es = l(957907),
    ec = l(955999),
    ed = l(999900);
function eo(e) {
    let { channel: n } = e,
        l = (0, f.B9)(n.topic),
        x = (0, es.A)(n),
        p = (0, s.Ay)(n),
        I = (0, a.bG)([h.A], () => h.A.getGuild(n.guild_id), [n.guild_id]),
        [A, m] = t.useState(!1),
        C = t.useRef(!1),
        j = t.useCallback((e) => {
            (C.current = !e), m(e);
        }, []),
        y = t.useCallback(() => j(!A), [A, j]),
        b = t.useCallback(() => j(!1), [j]);
    t.useEffect(() => {
        function e(e) {
            e.optimistic ||
                e.channelId !== n.id ||
                e.message.author?.id === u.default.getId() ||
                g.Ay.getCurrentlySelectedChannelId() !== n.id ||
                C.current ||
                m(!0);
        }
        return (C.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [n.id]);
    let k = t.useMemo(() => ({ channel: n, guild: I ?? void 0, open: A, onClose: b }), [n, I, A, b]),
        v = t.useMemo(() => ({ type: et.U4.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }), [n]);
    if (null == l) return null;
    let E = (0, i.jsx)("div", {
        className: ed.SC,
        children: (0, i.jsx)(
            d.A,
            {
                guildId: n.guild_id,
                channelId: n.id,
                channelType: n.type,
                hideSearch: !0,
                toolbar: (0, i.jsx)(ea, {
                    applicationId: l,
                    surface: v,
                    guildId: n.guild_id,
                    channelId: n.id,
                    project: x ?? null,
                    chatOpen: A,
                    onToggleChat: y,
                }),
                className: ed.DD,
                "aria-label": K.intl.string(K.t.BIYAqa),
                children: (0, o.zF)({ channel: n, channelName: p, guild: I }),
            },
            `header-${n.id}`,
        ),
    });
    return (0, i.jsxs)("div", {
        className: ec.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, i.jsx)(c.HI, { location: I?.name, subsection: p ?? void 0 }),
            (0, i.jsx)(er.A, {
                projectId: x?.id ?? null,
                previewApplicationId: x?.preview_application_id ?? null,
                applicationId: l,
                surface: v,
                header: E,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: k,
            }),
        ],
    });
}
