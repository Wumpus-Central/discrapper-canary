n.d(e, { A: () => f });
var t = n(582128),
    a = n(173912),
    u = n(855986),
    r = n(734057),
    i = n(576705),
    s = n(951178);
function c(l, e) {
    return "guild" === l.install_scope && null != l.guild_id && null != e && l.guild_id === e;
}
var o = n(652215);
function d(l, e) {
    return null != l && l.type === o.rbe.GUILD_APP && l.application_id === e && i.A.can(o.xBc.VIEW_CHANNEL, l);
}
function f(l, e, n) {
    let {
            canLaunch: o,
            launching: f,
            failed: p,
            launch: g,
        } = (function (l, e, n) {
            var u;
            let { guildId: r, channelId: i } = n,
                [o, d] = t.useState(!1),
                [f, p] = t.useState(!1),
                g = null != e && null != i && c((u = e), r) && (u.supported_surfaces ?? []).includes(s.q7.ACTIVITY),
                y = t.useCallback(async () => {
                    if (!g || null == r || null == i) return !1;
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
                            })({ applicationId: l, guildId: r, channelId: i }),
                            !0
                        );
                    } catch {
                        return (p(!0), !1);
                    } finally {
                        d(!1);
                    }
                }, [g, l, r, i]);
            return { canLaunch: g, launching: o, failed: f, launch: y };
        })(l, e, n),
        y = (function (l, e, n) {
            let { guildId: a, channelId: s } = n,
                o = null != e && null != s && c(e, a) ? a : null,
                f = (0, u.bG)(
                    [r.A],
                    () => null == o || Object.keys(r.A.getMutableGuildChannelsForGuild(o)).length > 0,
                    [o],
                ),
                p = (0, u.bG)(
                    [r.A, i.A],
                    () =>
                        null != o && null != s
                            ? ((function (l, e, n) {
                                  let t = r.A.getChannel(n);
                                  if (t?.guild_id === l && d(t, e)) return { guildId: l, channelId: n };
                                  let a = null;
                                  for (let n of Object.values(r.A.getMutableGuildChannelsForGuild(l)))
                                      (null == a || n.position < a.position) && d(n, e) && (a = n);
                                  return null != a ? { guildId: l, channelId: a.id } : null;
                              })(o, l, s)?.channelId ?? null)
                            : null,
                    [o, l, s],
                ),
                g = t.useRef(null);
            return (
                t.useEffect(() => {
                    null == o || f || g.current === o || ((g.current = o), r.D.loadGuildIds([o]));
                }, [o, f]),
                t.useMemo(() => (null != o && null != p ? { guildId: o, channelId: p } : null), [o, p])
            );
        })(l, e, n),
        A = o ? "launch" : null != y ? "open" : null,
        h = t.useCallback(
            () =>
                "launch" === A
                    ? g()
                    : "open" !== A || null == y
                      ? Promise.resolve(!1)
                      : ((0, a.A)({ applicationId: l, channel: y }), Promise.resolve(!0)),
            [A, g, l, y],
        );
    return { type: A, launching: f, launchFailed: p, run: h };
}
