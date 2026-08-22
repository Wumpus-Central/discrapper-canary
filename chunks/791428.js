l.r(n), l.d(n, { default: () => eu });
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
var p = l(866665),
    x = l(408278),
    m = l(811893),
    I = l(70688),
    A = l(47294),
    C = l(16961),
    j = l(625180),
    y = l(91242),
    b = l(580954),
    v = l(672929),
    k = l(494126),
    E = l(5867);
async function N(e) {
    null == y.A.getFrame(e) ||
        ((await (0, k.refreshProxyTicket)(e)) &&
            ((0, k.promoteFrame)(e),
            (0, k.updateFramePanelMode)(e, E.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var T = l(574172),
    _ = l(869146),
    w = l(976860),
    P = l(808728),
    S = l(576705),
    O = l(972786),
    F = l(621466),
    M = l(453903),
    R = l(922016),
    V = l(980707),
    D = l(477782),
    z = l(22231),
    H = l(663417),
    B = l(625903),
    G = l(624479),
    L = l(365199),
    W = l(998939),
    Y = l(976814),
    U = l(295813),
    K = l(375708),
    X = l(452394);
function q(e) {
    let { onRefresh: n, isRefreshing: l, canEdit: r, onEdit: s, canFork: c, forking: d, onFork: o, projectId: u } = e,
        h = t.useRef(null),
        g = K.intl.string(K.t["UKOtz+"]),
        f = (0, a.bG)([W.Ay], () => null != u && null != W.Ay.getSettings(u), [u]),
        m = t.useCallback(() => {
            null != u && (0, Y.A)(u);
        }, [u]);
    return (0, i.jsx)(R.Y, {
        targetElementRef: h,
        align: "right",
        position: "bottom",
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, F.vq)(document.activeElement, HTMLIFrameElement)) return M.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(V.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": g,
                children: (0, i.jsxs)(D.rX, {
                    children: [
                        r
                            ? (0, i.jsx)(D.Dr, {
                                  id: "edit",
                                  icon: z.PencilIcon,
                                  leadingAccessory: { type: "icon", icon: z.PencilIcon },
                                  label: K.intl.string(U.default.NXfIfj),
                                  action: s,
                              })
                            : null,
                        (0, i.jsx)(D.Dr, {
                            id: "refresh",
                            icon: H.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: H.RefreshIcon },
                            label: K.intl.string(U.default.xKexN1),
                            disabled: l,
                            action: n,
                        }),
                        f
                            ? (0, i.jsx)(D.Dr, {
                                  id: "settings",
                                  icon: B.SettingsIcon,
                                  leadingAccessory: { type: "icon", icon: B.SettingsIcon },
                                  label: K.intl.string(U.default.gTMvzD),
                                  action: m,
                              })
                            : null,
                        c
                            ? (0, i.jsx)(D.Dr, {
                                  id: "fork",
                                  icon: G.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: G.CopyIcon },
                                  label: K.intl.string(U.default.sFFX7L),
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
                children: (0, i.jsx)(p.m, {
                    text: g,
                    ariaHidden: !0,
                    children: (0, i.jsx)(x.K, {
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
    let {
            applicationId: n,
            surface: l,
            guildId: r,
            channelId: s,
            project: c,
            chatOpen: d,
            onToggleChat: o,
            previewModeSwitcher: u,
        } = e,
        h = (0, v.A)(n, l),
        { badge: g, mentionCount: f } = (0, a.cf)([en.Ay], () => {
            let e = en.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : en.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        k = (0, C.G)(),
        {
            fork: E,
            forking: F,
            canFork: M,
        } = (function (e, n) {
            let [l, i] = t.useState(!1),
                a = null != n && null != e && (0, O.P)(e);
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
            null != r && null != c && (0, w.pX)(el.BVt.CHANNEL(r, ei.VV.VIBEGRATIONS, c.id));
        }, [r, c]),
        D = (0, et.x1)(h) && h.data.proxyTicketRefreshing,
        z = t.useCallback(() => {
            null == h || D || j.A.refreshProxyTicket(h.id);
        }, [h, D]),
        H = t.useCallback(() => {
            null != h && (0, A.A)({ onConfirm: () => N(h.id) });
        }, [h]),
        B = t.useCallback(() => {
            let e = h?.id;
            null != e &&
                _.A.getWindowOpen(el.MLl.ACTIVITY_POPOUT) &&
                y.A.getMainFrame()?.id === e &&
                (0, T.close)(el.MLl.ACTIVITY_POPOUT),
                (0, b.A)().leaveFrame(e),
                (0, w.pX)(
                    (function (e, n) {
                        if (null == e) return el.BVt.FRIENDS;
                        let l = P.Ay.getDefaultChannel(e);
                        if (null != l && l.id !== n) return el.BVt.CHANNEL(e, l.id);
                        let i = P.Ay.getFirstChannel(e, (e) => {
                            let { channel: l } = e;
                            return l.id !== n && S.A.can(el.xBc.VIEW_CHANNEL, l);
                        });
                        return null != i ? el.BVt.CHANNEL(e, i.id) : el.BVt.FRIENDS;
                    })(r, (0, et.h)(l)),
                );
        }, [h?.id, r, l]),
        G = K.intl.string(!0 === d ? U.default.YdgE0j : U.default.aWVf4j),
        L = !0 === d ? null : g,
        W = [G];
    "mention" === L
        ? W.push(K.intl.formatToPlainString(K.t["3l1GOx"], { mentionCount: f }))
        : "unread" === L && W.push(K.intl.string(K.t.x5zAGZ));
    let Y = t.useCallback((e) => (0, i.jsx)(Q, { ...e, badge: L }), [L]),
        X =
            null == o
                ? null
                : (0, i.jsx)(p.m, {
                      text: G,
                      ariaHidden: !0,
                      children: (0, i.jsx)(x.K, {
                          "aria-label": W.join(", "),
                          "aria-pressed": !0 === d,
                          icon: Y,
                          variant: "icon-only",
                          size: "sm",
                          onClick: o,
                      }),
                  });
    if (!(0, et.x1)(h)) return (0, i.jsxs)(i.Fragment, { children: [u, X] });
    let Z = K.intl.string(U.default["6g22y7"]),
        $ = K.intl.string(U.default.Ea0Wrr);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u,
            (0, i.jsx)(q, {
                projectId: c?.id,
                onRefresh: z,
                isRefreshing: D,
                canEdit: R,
                onEdit: V,
                canFork: M,
                forking: F,
                onFork: E,
            }),
            X,
            k
                ? (0, i.jsx)(p.m, {
                      text: Z,
                      ariaHidden: !0,
                      children: (0, i.jsx)(x.K, {
                          "aria-label": Z,
                          icon: m.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: H,
                      }),
                  })
                : null,
            (0, i.jsx)(p.m, {
                text: $,
                ariaHidden: !0,
                children: (0, i.jsx)(x.K, {
                    "aria-label": $,
                    icon: I.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: B,
                }),
            }),
        ],
    });
}
var er = l(20455),
    es = l(250872),
    ec = l(957907),
    ed = l(955999),
    eo = l(999900);
function eu(e) {
    let { channel: n } = e,
        l = (0, f.B9)(n.topic),
        p = (0, ec.A)(n),
        x = (0, s.Ay)(n),
        m = (0, a.bG)([h.A], () => h.A.getGuild(n.guild_id), [n.guild_id]),
        [I, A] = t.useState(!1),
        C = t.useRef(!1),
        j = t.useCallback((e) => {
            (C.current = !e), A(e);
        }, []),
        y = t.useCallback(() => j(!I), [I, j]),
        b = t.useCallback(() => j(!1), [j]);
    t.useEffect(() => {
        function e(e) {
            e.optimistic ||
                e.channelId !== n.id ||
                e.message.author?.id === u.default.getId() ||
                g.Ay.getCurrentlySelectedChannelId() !== n.id ||
                C.current ||
                A(!0);
        }
        return (C.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [n.id]);
    let v = t.useMemo(() => ({ channel: n, guild: m ?? void 0, open: I, onClose: b }), [n, m, I, b]),
        k = t.useMemo(() => ({ type: et.U4.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }), [n]),
        { mode: E, setMode: N, hasBothModes: T } = (0, es.fY)(l, p?.preview_application_id ?? null);
    if (null == l) return null;
    let _ = (0, i.jsx)("div", {
        className: eo.SC,
        children: (0, i.jsx)(
            d.A,
            {
                guildId: n.guild_id,
                channelId: n.id,
                channelType: n.type,
                hideSearch: !0,
                toolbar: (0, i.jsx)(ea, {
                    applicationId: l,
                    surface: k,
                    guildId: n.guild_id,
                    channelId: n.id,
                    project: p ?? null,
                    chatOpen: I,
                    onToggleChat: y,
                    previewModeSwitcher: T ? (0, i.jsx)(es.Ay, { mode: E, onChange: N }) : null,
                }),
                className: eo.DD,
                "aria-label": K.intl.string(K.t.BIYAqa),
                children: (0, o.zF)({ channel: n, channelName: x, guild: m }),
            },
            `header-${n.id}`,
        ),
    });
    return (0, i.jsxs)("div", {
        className: ed.I,
        "data-vibegrations-channel": !0,
        children: [
            (0, i.jsx)(c.HI, { location: m?.name, subsection: x ?? void 0 }),
            (0, i.jsx)(er.A, {
                projectId: p?.id ?? null,
                previewApplicationId: p?.preview_application_id ?? null,
                applicationId: l,
                surface: k,
                header: _,
                chatOpen: !1,
                previewReady: !0,
                previewMode: E,
                channelMessages: v,
            }),
        ],
    });
}
