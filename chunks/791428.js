i.r(n), i.d(n, { default: () => et });
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
    m = i(408278),
    p = i(811893),
    C = i(70688),
    I = i(47294),
    A = i(16961),
    j = i(625180),
    b = i(91242),
    y = i(580954),
    v = i(672929),
    k = i(494126),
    E = i(5867);
async function N(e) {
    null == b.A.getFrame(e) ||
        ((await (0, k.refreshProxyTicket)(e)) &&
            ((0, k.promoteFrame)(e),
            (0, k.updateFramePanelMode)(e, E.Gd.ACTIVITY_POPOUT_WINDOW),
            r.h.dispatch({ type: "ACTIVITY_POPOUT_WINDOW_OPEN" })));
}
var T = i(574172),
    _ = i(869146),
    w = i(976860),
    O = i(808728),
    P = i(576705),
    F = i(621466),
    R = i(453903),
    S = i(922016),
    M = i(980707),
    z = i(477782),
    H = i(663417),
    D = i(624479),
    V = i(365199),
    W = i(295813),
    B = i(375708),
    G = i(452394);
function L(e) {
    let { onRefresh: n, isRefreshing: i, canFork: a, forking: r, onFork: s } = e,
        c = t.useRef(null),
        d = B.intl.string(B.t["UKOtz+"]);
    return (0, l.jsx)(S.Y, {
        targetElementRef: c,
        align: "right",
        position: "bottom",
        onRequestClose: (e, n) => {
            if ("user:escape" === n && (0, F.vq)(document.activeElement, HTMLIFrameElement)) return R.o;
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(M.W, {
                "data-menu-migrated": !0,
                navId: "vibegrations-channel-overflow",
                onClose: t,
                onSelect: t,
                "aria-label": d,
                children: (0, l.jsxs)(z.rX, {
                    children: [
                        (0, l.jsx)(z.Dr, {
                            id: "refresh",
                            icon: H.RefreshIcon,
                            leadingAccessory: { type: "icon", icon: H.RefreshIcon },
                            label: B.intl.string(W.default.xKexN1),
                            disabled: i,
                            action: n,
                        }),
                        a
                            ? (0, l.jsx)(z.Dr, {
                                  id: "fork",
                                  icon: D.CopyIcon,
                                  leadingAccessory: { type: "icon", icon: D.CopyIcon },
                                  label: B.intl.string(W.default.sFFX7L),
                                  disabled: r,
                                  action: s,
                              })
                            : null,
                    ],
                }),
            });
        },
        children: (e) => {
            let { onClick: n } = e;
            return (0, l.jsx)("div", {
                ref: c,
                className: G.h,
                children: (0, l.jsx)(x.m, {
                    text: d,
                    ariaHidden: !0,
                    children: (0, l.jsx)(m.K, {
                        "aria-label": d,
                        icon: V.MoreHorizontalIcon,
                        variant: "icon-only",
                        size: "sm",
                        onClick: n,
                    }),
                }),
            });
        },
    });
}
var U = i(534890),
    Y = i(27989),
    K = i(403853);
function q(e) {
    let { badge: n, ...i } = e,
        a = t.useId();
    if (null == n) return (0, l.jsx)(U.ChatIcon, { ...i });
    let r = "custom" === i.size ? { width: i.width, height: i.height } : (0, Y.J)(i.size ?? "md");
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
                children: (0, l.jsx)(U.ChatIcon, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: i.color,
                    colorClass: i.colorClass,
                }),
            }),
            (0, l.jsx)("circle", { cx: "19", cy: "19", r: "5", className: "mention" === n ? K.a : K.Z }),
        ],
    });
}
var X = i(594483),
    Z = i(573163),
    $ = i(652215),
    J = i(165610);
function Q(e) {
    let { applicationId: n, surface: i, guildId: r, channelId: s, project: c, chatOpen: d, onToggleChat: o } = e,
        u = (0, v.A)(n, i),
        { badge: h, mentionCount: g } = (0, a.cf)([Z.Ay], () => {
            let e = Z.Ay.getMentionCount(s);
            return e > 0
                ? { badge: "mention", mentionCount: e }
                : Z.Ay.hasUnread(s)
                  ? { badge: "unread", mentionCount: e }
                  : { badge: null, mentionCount: e };
        }, [s]),
        f = (0, A.G)(),
        {
            fork: k,
            forking: E,
            canFork: F,
        } = (function (e, n) {
            let [i, l] = t.useState(!1),
                a = null != n && null != e;
            return {
                fork: t.useCallback(async () => {
                    if (!i && null != n && null != e) {
                        l(!0);
                        try {
                            await (0, X.A)(e, n);
                        } finally {
                            l(!1);
                        }
                    }
                }, [i, n, e]),
                forking: i,
                canFork: a,
            };
        })(c, r),
        R = (0, J.x1)(u) && u.data.proxyTicketRefreshing,
        S = t.useCallback(() => {
            null == u || R || j.A.refreshProxyTicket(u.id);
        }, [u, R]),
        M = t.useCallback(() => {
            null != u && (0, I.A)({ onConfirm: () => N(u.id) });
        }, [u]),
        z = t.useCallback(() => {
            let e = u?.id;
            null != e &&
                _.A.getWindowOpen($.MLl.ACTIVITY_POPOUT) &&
                b.A.getMainFrame()?.id === e &&
                (0, T.close)($.MLl.ACTIVITY_POPOUT),
                (0, y.A)().leaveFrame(e),
                (0, w.pX)(
                    (function (e, n) {
                        if (null == e) return $.BVt.FRIENDS;
                        let i = O.Ay.getDefaultChannel(e);
                        if (null != i && i.id !== n) return $.BVt.CHANNEL(e, i.id);
                        let l = O.Ay.getFirstChannel(e, (e) => {
                            let { channel: i } = e;
                            return i.id !== n && P.A.can($.xBc.VIEW_CHANNEL, i);
                        });
                        return null != l ? $.BVt.CHANNEL(e, l.id) : $.BVt.FRIENDS;
                    })(r, (0, J.h)(i)),
                );
        }, [u?.id, r, i]),
        H = B.intl.string(!0 === d ? W.default.YdgE0j : W.default.aWVf4j),
        D = !0 === d ? null : h,
        V = [H];
    "mention" === D
        ? V.push(B.intl.formatToPlainString(B.t["3l1GOx"], { mentionCount: g }))
        : "unread" === D && V.push(B.intl.string(B.t.x5zAGZ));
    let G = t.useCallback((e) => (0, l.jsx)(q, { ...e, badge: D }), [D]),
        U =
            null == o
                ? null
                : (0, l.jsx)(x.m, {
                      text: H,
                      ariaHidden: !0,
                      children: (0, l.jsx)(m.K, {
                          "aria-label": V.join(", "),
                          "aria-pressed": !0 === d,
                          icon: G,
                          variant: "icon-only",
                          size: "sm",
                          onClick: o,
                      }),
                  });
    if (!(0, J.x1)(u)) return U;
    let Y = B.intl.string(W.default["6g22y7"]),
        K = B.intl.string(W.default.Ea0Wrr);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L, { onRefresh: S, isRefreshing: R, canFork: F, forking: E, onFork: k }),
            U,
            f
                ? (0, l.jsx)(x.m, {
                      text: Y,
                      ariaHidden: !0,
                      children: (0, l.jsx)(m.K, {
                          "aria-label": Y,
                          icon: p.t,
                          variant: "icon-only",
                          size: "sm",
                          onClick: M,
                      }),
                  })
                : null,
            (0, l.jsx)(x.m, {
                text: K,
                ariaHidden: !0,
                children: (0, l.jsx)(m.K, {
                    "aria-label": K,
                    icon: C.DoorExitIcon,
                    variant: "icon-only",
                    size: "sm",
                    onClick: z,
                }),
            }),
        ],
    });
}
var ee = i(429880),
    en = i(957907),
    ei = i(955999),
    el = i(999900);
function et(e) {
    let { channel: n } = e,
        i = (0, f.B9)(n.topic),
        x = (0, en.A)(n),
        m = (0, s.Ay)(n),
        p = (0, a.bG)([h.A], () => h.A.getGuild(n.guild_id), [n.guild_id]),
        [C, I] = t.useState(!1),
        A = t.useRef(!1),
        j = t.useCallback((e) => {
            (A.current = !e), I(e);
        }, []),
        b = t.useCallback(() => j(!C), [C, j]),
        y = t.useCallback(() => j(!1), [j]);
    t.useEffect(() => {
        function e(e) {
            e.optimistic ||
                e.channelId !== n.id ||
                e.message.author?.id === u.default.getId() ||
                g.Ay.getCurrentlySelectedChannelId() !== n.id ||
                A.current ||
                I(!0);
        }
        return (A.current = !1), r.h.subscribe("MESSAGE_CREATE", e), () => r.h.unsubscribe("MESSAGE_CREATE", e);
    }, [n.id]);
    let v = t.useMemo(() => ({ channel: n, guild: p ?? void 0, open: C, onClose: y }), [n, p, C, y]),
        k = t.useMemo(() => ({ type: J.U4.APP_CHANNEL, channelId: n.id, guildId: n.guild_id ?? void 0 }), [n]);
    return null == i
        ? null
        : (0, l.jsxs)("div", {
              "data-has-border": !0,
              className: el.TE,
              children: [
                  (0, l.jsx)(c.HI, { location: p?.name, subsection: m ?? void 0 }),
                  (0, l.jsx)("div", {
                      className: el.SC,
                      children: (0, l.jsx)(
                          d.A,
                          {
                              guildId: n.guild_id,
                              channelId: n.id,
                              channelType: n.type,
                              hideSearch: !0,
                              toolbar: (0, l.jsx)(Q, {
                                  applicationId: i,
                                  surface: k,
                                  guildId: n.guild_id,
                                  channelId: n.id,
                                  project: x ?? null,
                                  chatOpen: C,
                                  onToggleChat: b,
                              }),
                              className: el.DD,
                              "aria-label": B.intl.string(B.t.BIYAqa),
                              children: (0, o.zF)({ channel: n, channelName: m, guild: p }),
                          },
                          `header-${n.id}`,
                      ),
                  }),
                  (0, l.jsx)("div", {
                      className: ei.I,
                      "data-vibegrations-channel": !0,
                      children: (0, l.jsx)(ee.A, {
                          projectId: x?.id ?? null,
                          previewApplicationId: x?.preview_application_id ?? null,
                          applicationId: i,
                          surface: k,
                          chatOpen: !1,
                          previewReady: !0,
                          channelMessages: v,
                      }),
                  }),
              ],
          });
}
