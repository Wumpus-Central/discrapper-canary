n.d(e, { A: () => f });
var t = n(582128),
    a = n(173912),
    u = n(855986),
    i = n(734057),
    r = n(576705),
    s = n(951178);
function c(l, e) {
    return "guild" === l.install_scope && null != l.guild_id && null != e && l.guild_id === e;
}
var o = n(652215);
function d(l, e) {
    return null != l && l.type === o.rbe.GUILD_APP && l.application_id === e && r.A.can(o.xBc.VIEW_CHANNEL, l);
}
function f(l, e, n) {
    let {
            canLaunch: o,
            launching: f,
            failed: p,
            launch: g,
        } = (function (l, e, n) {
            var u;
            let { guildId: i, channelId: r } = n,
                [o, d] = t.useState(!1),
                [f, p] = t.useState(!1),
                g = null != e && null != r && c((u = e), i) && (u.supported_surfaces ?? []).includes(s.q7.ACTIVITY),
                y = t.useCallback(async () => {
                    if (!g || null == i || null == r) return !1;
                    (d(!0), p(!1));
                    try {
                        return (
                            await (function (l) {
                                let { applicationId: e, guildId: n, channelId: t } = l;
                                return (0, a.A)({
                                    applicationId: e,
                                    channel: null,
                                    launch: { entry: "share", sourceChannelId: t, sourceGuildId: n },
                                    showErrorModal: !1,
                                }).launched;
                            })({ applicationId: l, guildId: i, channelId: r }),
                            !0
                        );
                    } catch {
                        return (p(!0), !1);
                    } finally {
                        d(!1);
                    }
                }, [g, l, i, r]);
            return { canLaunch: g, launching: o, failed: f, launch: y };
        })(l, e, n),
        y = (function (l, e, n) {
            let { guildId: a, channelId: s } = n,
                o = null != e && null != s && c(e, a) ? a : null,
                f = (0, u.bG)(
                    [i.A],
                    () => null == o || Object.keys(i.A.getMutableGuildChannelsForGuild(o)).length > 0,
                    [o],
                ),
                p = (0, u.bG)(
                    [i.A, r.A],
                    () =>
                        null != o && null != s
                            ? ((function (l, e, n) {
                                  let t = i.A.getChannel(n);
                                  if (t?.guild_id === l && d(t, e)) return { guildId: l, channelId: n };
                                  let a = null;
                                  for (let n of Object.values(i.A.getMutableGuildChannelsForGuild(l)))
                                      (null == a || n.position < a.position) && d(n, e) && (a = n);
                                  return null != a ? { guildId: l, channelId: a.id } : null;
                              })(o, l, s)?.channelId ?? null)
                            : null,
                    [o, l, s],
                ),
                g = t.useRef(null);
            return (
                t.useEffect(() => {
                    null == o || f || g.current === o || ((g.current = o), i.D.loadGuildIds([o]));
                }, [o, f]),
                t.useMemo(() => (null != o && null != p ? { guildId: o, channelId: p } : null), [o, p])
            );
        })(l, e, n),
        h = o ? "launch" : null != y ? "open" : null,
        A = t.useCallback(
            () =>
                "launch" === h
                    ? g()
                    : "open" !== h || null == y
                      ? Promise.resolve(!1)
                      : ((0, a.A)({ applicationId: l, channel: y }), Promise.resolve(!0)),
            [h, g, l, y],
        );
    return { type: h, launching: f, launchFailed: p, run: A };
}
