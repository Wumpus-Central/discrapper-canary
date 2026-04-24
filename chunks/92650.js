n.d(t, { t: () => _ });
var i = n(64700),
    l = n(424266),
    s = n.n(l),
    a = n(845584),
    r = n(928658),
    o = n(841595),
    c = n(576622),
    d = n(253932),
    u = n(954571),
    h = n(966107),
    m = n(627968),
    p = n(192308),
    g = n(687599),
    A = n(652215),
    f = n(166643);
function _(e) {
    let { user: t, onAcceptSuccess: l, onRejectSuccess: _, onError: E } = e,
        C = (0, f.A)(),
        [x, b] = i.useState(!1),
        [S, I] = i.useState(!1),
        [y, T] = i.useState(!1),
        [v, N] = i.useState(!1),
        [j, M] = i.useState(!1),
        R = x || S || y,
        L = i.useCallback(
            async (e) => {
                if (!R) {
                    b(!0);
                    try {
                        await (0, h.RK)(e), N(!0), l?.();
                    } catch (t) {
                        let e = new a.LG(t);
                        E?.(e);
                    } finally {
                        b(!1);
                    }
                }
            },
            [R, l, E],
        ),
        D = i.useCallback(
            async (e) => {
                if (!R) {
                    I(!0);
                    try {
                        await (0, h.UK)(e), M(!0), _?.();
                    } catch (t) {
                        let e = new a.LG(t);
                        E?.(e);
                    } finally {
                        I(!1);
                    }
                }
            },
            [R, _, E],
        ),
        k = i.useCallback(
            async (e) => {
                if (R) return;
                I(!0);
                let t = s()(e, 50);
                try {
                    for (let e of t) await (0, h.ST)(e);
                    M(!0), _?.();
                } catch (t) {
                    let e = new a.LG(t);
                    E?.(e);
                } finally {
                    I(!1);
                }
            },
            [R, _, E],
        ),
        P = i.useCallback(
            async (e) => {
                if (R) return;
                if (null != t && null == o.A.getMutualGuilds(t.id)) {
                    T(!0);
                    try {
                        await (0, c.A)(t.id, t.getAvatarURL(void 0, 80), {
                            withMutualGuilds: !0,
                            withMutualFriendsCount: !0,
                        });
                    } catch (e) {
                    } finally {
                        T(!1);
                    }
                }
                let i = async () => {
                    let n = null != t ? o.A.getMutualGuilds(t.id)?.map((e) => e.guild.id) : [];
                    u.default.track(A.HAw.MESSAGE_REQUEST_ACTION, {
                        action: g.LD.ACCEPT_CONFIRMATION_PROMPT,
                        channel_id: e,
                        mutual_guild_ids: n ?? [],
                        other_user_id: t?.id,
                    }),
                        await L(e);
                };
                !(function (e) {
                    let { channelId: t, onConfirm: i, onCancel: l } = e;
                    u.default.track(A.HAw.OPEN_MODAL, { type: g.PY, channel_id: t }),
                        (0, p.openModalLazy)(async () => {
                            let { default: e } = await n.e("61841").then(n.bind(n, 987176));
                            return (t) => (0, m.jsx)(e, { onConfirm: i, onDismiss: l, ...t });
                        });
                })({
                    channelId: e,
                    onConfirm: i,
                    onCancel: () => {
                        let n = null != t ? o.A.getMutualGuilds(t.id)?.map((e) => e.guild.id) : [];
                        u.default.track(A.HAw.MESSAGE_REQUEST_ACTION, {
                            action: g.LD.DISMISS_CONFIRMATION_PROMPT,
                            channel_id: e,
                            mutual_guild_ids: n ?? [],
                            other_user_id: t?.id,
                        });
                    },
                });
            },
            [L, R, t],
        ),
        G = i.useCallback(
            (e, t, i) => {
                let l = (n, l) => {
                        l && d.WY.updateSetting(n),
                            n && null != t && (0, r.tJ)(t),
                            L(e.id),
                            u.default.track(A.HAw.MESSAGE_REQUEST_ACTION, {
                                action: g.LD.ACCEPT_HAM_CONFIRMATION_PROMPT,
                                channel_id: e.id,
                                is_dont_show_again_checked: l,
                                non_spam_retraining_opt_in: n,
                            }),
                            null != i && i();
                    },
                    s = d.WY.getSetting();
                null == s
                    ? (function (e) {
                          let { onConfirm: t, onCancel: i } = e;
                          (0, p.openModalLazy)(async () => {
                              let { default: e } = await n.e("19729").then(n.bind(n, 693864));
                              return (n) => (0, m.jsx)(e, { onConfirm: t, onDismiss: i, ...n });
                          });
                      })({
                          channel: e,
                          onConfirm: l,
                          onCancel: () => {
                              u.default.track(A.HAw.MESSAGE_REQUEST_ACTION, {
                                  action: g.LD.DISMISS_HAM_CONFIRMATION_PROMPT,
                                  channel_id: e.id,
                              });
                          },
                      })
                    : l(s);
            },
            [L],
        );
    return {
        acceptMessageRequest: C ? P : L,
        rejectMessageRequest: D,
        rejectAll: k,
        markAsNotSpam: G,
        isAcceptLoading: x,
        isRejectLoading: S,
        isUserProfileLoading: y,
        isOptimisticAccepted: v,
        isOptimisticRejected: j,
    };
}
