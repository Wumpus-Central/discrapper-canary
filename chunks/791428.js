i.r(n), i.d(n, { default: () => es });
var l = i(477900),
    t = i(582128),
    a = i(17928),
    r = i(228366),
    s = i(47167),
    c = i(726249),
    d = i(742589),
    o = i(131047),
    u = i(280450),
    h = i(71393),
    g = i(309010),
    f = i(683180);
i(321073);
var x = i(866665),
    p = i(408278),
    m = i(811893),
    A = i(70688),
    I = i(47294),
    C = i(16961),
    j = i(625180),
    y = i(91242),
    b = i(580954),
    v = i(672929),
    k = i(494126),
    E = i(5867);
async function T(e) {
    null == y.A.getFrame(e) ||
        ((await (0, k.refreshProxyTicket)(e)) &&
            ((0, k.promoteFrame)(e),
            (0, k.updateFramePanelMode)(e, E.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var N = i(574172),
    _ = i(869146),
    w = i(976860),
    O = i(808728),
    P = i(576705),
    S = i(621466),
    F = i(453903),
    R = i(922016),
    M = i(980707),
    z = i(477782),
    D = i(663417),
    H = i(625903),
    V = i(624479),
    G = i(365199),
    W = i(998939),
    B = i(976814),
    L = i(459864),
    U = i(375708),
    Y = i(452394);
function K(e) {
    let { onRefresh: n, isRefreshing: i, canFork: r, forking: s, onFork: c, projectId: d } = e,
        o = t.useRef(null),
        u = U.intl.string(U.t["UKOtz+"]),
        h = (0, a.bG)([W.Ay], () => null != d && null != W.Ay.getSettings(d), [d]),
        g = t.useCallback(() => {
            null != d && (0, B.A)(d);
        }, [d]);
    return (0, l.jsx)(R.Y, {
        targetElementRef: o,
        align: "right",
        position: "bottom",
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, S.vq)(document.activeElement, HTMLIFrameElement)) return F.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(M.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": u,
                children: (0, l.jsxs)(z.rX, {
                    children: [
                        (0, l.jsx)(z.Dr, {
                            id: "refresh",
                            icon: D.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: D.RefreshIcon },
                            label: U.intl.string(L.default.xKexN1),
                            disabled: i,
                            action: n,
                        }),
                        h
                            ? (0, l.jsx)(z.Dr, {
                                  id: "settings",
                                  icon: H.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: H.SettingsIcon },
                                  label: U.intl.string(L.default.gTMvzD),
                                  action: g,
                              })
                            : null,
                        r
                            ? (0, l.jsx)(z.Dr, {
                                  id: "fork",
                                  icon: V.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: V.CopyIcon },
                                  label: U.intl.string(L.default.sFFX7L),
                                  disabled: s,
                                  action: c,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: n } = e;
            return (0, l.jsx)("div", {
                ref: o,
                className: Y.h,
                children: (0, l.jsx)(x.m, {
                    text: u,
                    ariaHidden: !0,
                    children: (0, l.jsx)(p.K, {
                        "aria-label": u,
                        icon: G.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: n,
                    }),
                }),
            });
        },
    });
}
var q = i(534890),
    X = i(27989),
    Z = i(403853);
function $(e) {
    let { badge: n, ...i } = e,
        a = t.useId();
    if (null == n) return (0, l.jsx)(q.ChatIcon, { ...i });
    let r = "custom" === i.size ? { width: i.width, height: i.height } : (0, X.J)(i.size ?? "md");
    return (0, l.jsxs)("svg", {
        width: r?.width ?? 24,
        height: r?.height ?? 24,
        viewBox: "0 0 24 24",
        className: i.className,
        style: i.style,
        children: [
            (0, l.jsx)("defs", {
                children: (0, l.jsxs)("mask", {
                    id: a,
                    children: [
                        (0, l.jsx)("rect", { fill: "white", width: "100%", height: "100%" }),
                        (0, l.jsx)("circle", { cx: "19", cy: "19", r: "7.5", fill: "black" }),
                    ],
                }),
            }),
            (0, l.jsx)("g", {
                mask: `url(#${a})`,
                children: (0, l.jsx)(q.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: i.color,
                    colorClass: i.colorClass,
                }),
            }),
            (0, l.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === n ? Z.a : Z.Z }),
        ],
    });
}
var J = i(594483),
    Q = i(573163),
    ee = i(652215),
    en = i(165610);
function ei(e) {
    let { applicationId: n, surface: i, guildId: r, channelId: s, project: c, chatOpen: d, onToggleChat: o } = e,
        u = (0, v.A)(n, i),
        { badge: h, mentionCount: g } = (0, a.cf)([Q.Ay], () => {
            let e = Q.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : Q.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        f = (0, C.G)(),
        {
            fork: k,
            forking: E,
            canFork: S,
        } = (function (e, n) {
            let [i, l] = t.useState(!1),
                a = null != n && null != e;
            return {
                fork: t.useCallback(async () => {
                    if (!i && null != n && null != e) {
                        l(!0);
                        try {
                            await (0, J.A)(e, n);
                        } finally {
                            l(!1);
                        }
                    }
                }, [i, n, e]),
                forking: i,
                canFork: a,
            };
        })(c, r),
        F = (0, en.x1)(u) && u.data.proxyTicketRefreshing,
        R = t.useCallback(() => {
            null == u || F || j.A.refreshProxyTicket(u.id);
        }, [u, F]),
        M = t.useCallback(() => {
            null != u && (0, I.A)({ onConfirm: () => T(u.id) });
        }, [u]),
        z = t.useCallback(() => {
            let e = u?.id;
            null != e &&
                _.A.getWindowOpen(ee.MLl.ACTIVITY_POPOUT) &&
                y.A.getMainFrame()?.id === e &&
                (0, N.close)(ee.MLl.ACTIVITY_POPOUT),
                (0, b.A)().leaveFrame(e),
                (0, w.pX)(
                    (function (e, n) {
                        if (null == e) return ee.BVt.FRIENDS;
                        let i = O.Ay.getDefaultChannel(e);
                        if (null != i && i.id !== n) return ee.BVt.CHANNEL(e, i.id);
                        let l = O.Ay.getFirstChannel(e, (e) => {
                            let { channel: i } = e;
                            return i.id !== n && P.A.can(ee.xBc.VIEW_CHANNEL, i);
                        });
                        return null != l ? ee.BVt.CHANNEL(e, l.id) : ee.BVt.FRIENDS;
                    })(r, (0, en.h)(i)),
                );
        }, [u?.id, r, i]),
        D = U.intl.string(!0 === d ? L.default.YdgE0j : L.default.aWVf4j),
        H = !0 === d ? null : h,
        V = [D];
    "mention" === H
        ? V.push(U.intl.formatToPlainString(U.t["3l1GOx"], { mentionCount: g }))
        : "unread" === H && V.push(U.intl.string(U.t.x5zAGZ));
    let G = t.useCallback((e) => (0, l.jsx)($, { ...e, badge: H }), [H]),
        W =
            null == o
                ? null
                : (0, l.jsx)(x.m, {
                      text: D,
                      ariaHidden: !0,
                      children: (0, l.jsx)(p.K, {
                          "aria-label": V.join(", "),
                          "aria-pressed": !0 === d,
                          icon: G,
                          variant: "icon-only",
                          size: "sm",
                          onClick: o,
                      }),
                  });
    if (!(0, en.x1)(u)) return W;
    let B = U.intl.string(L.default["6g22y7"]),
        Y = U.intl.string(L.default.Ea0Wrr);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(K, { projectId: c?.id, onRefresh: R, isRefreshing: F, canFork: S, forking: E, onFork: k }),
            W,
            f
                ? (0, l.jsx)(x.m, {
                      text: B,
                      ariaHidden: !0,
                      children: (0, l.jsx)(p.K, {
                          "aria-label": B,
                          icon: m.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: M,
                      }),
                  })
                : null,
            (0, l.jsx)(x.m, {
                text: Y,
                ariaHidden: !0,
                children: (0, l.jsx)(p.K, {
                    "aria-label": Y,
                    icon: A.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: z,
                }),
            }),
        ],
    });
}
var el = i(214122),
    et = i(957907),
    ea = i(955999),
    er = i(999900);
function es(e) {
    let { channel: n } = e,
        i = (0, f.B9)(n.topic),
        x = (0, et.A)(n),
        p = (0, s.Ay)(n),
        m = (0, a.bG)([h.A], () => h.A.getGuild(n.guild_id), [n.guild_id]),
        [A, I] = t.useState(!1),
        C = t.useRef(!1),
        j = t.useCallback((e) => {
            (C.current = !e), I(e);
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
                I(!0);
        }
        return (C.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [n.id]);
    let v = t.useMemo(() => ({ channel: n, guild: m ?? void 0, open: A, onClose: b }), [n, m, A, b]),
        k = t.useMemo(() => ({ type: en.U4.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }), [n]);
    if (null == i) return null;
    let E = (0, l.jsx)("div", {
        className: er.SC,
        children: (0, l.jsx)(
            d.A,
            {
                guildId: n.guild_id,
                channelId: n.id,
                channelType: n.type,
                hideSearch: !0,
                toolbar: (0, l.jsx)(ei, {
                    applicationId: i,
                    surface: k,
                    guildId: n.guild_id,
                    channelId: n.id,
                    project: x ?? null,
                    chatOpen: A,
                    onToggleChat: y,
                }),
                className: er.DD,
                "aria-label": U.intl.string(U.t.BIYAqa),
                children: (0, o.zF)({ channel: n, channelName: p, guild: m }),
            },
            `header-${n.id}`,
        ),
    });
    return (0, l.jsxs)("div", {
        className: ea.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, l.jsx)(c.HI, { location: m?.name, subsection: p ?? void 0 }),
            (0, l.jsx)(el.A, {
                projectId: x?.id ?? null,
                previewApplicationId: x?.preview_application_id ?? null,
                applicationId: i,
                surface: k,
                header: E,
                chatOpen: !1,
                previewReady: !0,
                channelMessages: v,
            }),
        ],
    });
}
