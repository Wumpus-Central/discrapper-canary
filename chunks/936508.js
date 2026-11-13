a(321073);
var t = a(582128),
    l = a(664619),
    i = a(951178),
    r = a(733791),
    s = a(191850),
    o = a(792996);
a.d(
    n,
    {},
    {
        Ay: function (e) {
            let [n, a] = t.useState(!0),
                [i, d] = t.useState(!1),
                [c, u] = t.useState(!1),
                [p, m] = t.useState(null),
                [h, g] = t.useState(null),
                {
                    projectId: v,
                    guildId: x,
                    appName: b,
                    guildName: f,
                    channelNames: j,
                    keptChannelNames: k,
                    previewApp: N,
                    botStays: C,
                    inOtherServers: y,
                    endsCollaboration: I,
                } = h ?? e,
                S = !i && N?.canRemove !== !1,
                A = t.useMemo(() => {
                    let e = [];
                    return (
                        j.length > 0 &&
                            e.push({
                                item: {
                                    key: "channels",
                                    kind: "channel",
                                    label: new Intl.ListFormat(o.intl.currentLocale, { type: "conjunction" }).format(
                                        j.map((e) => `#${e}`),
                                    ),
                                },
                                checked: n,
                                onChange: a,
                                disabled: !1,
                            }),
                        null != N &&
                            e.push({
                                item: { key: "preview-app", kind: "app", label: N.name },
                                checked: S,
                                onChange: (e) => d(!e),
                                disabled: !N.canRemove,
                            }),
                        e
                    );
                }, [S, j, n, N]),
                w = t.useCallback(async () => {
                    (u(!0), m(null), g(e));
                    let a = !1;
                    try {
                        a = (
                            await (0, l.YI)(v, {
                                guildId: x,
                                deleteChannels: j.length > 0 && n,
                                alsoRemovePreviewBot: S,
                            })
                        ).ok;
                    } catch {
                        a = !1;
                    }
                    return (u(!1), a)
                        ? o.intl.formatToPlainString(s.default.SNFGxP, { app: b, server: f })
                        : (m(o.intl.string(s.default.PJ2Fkn)), g(null), null);
                }, [S, b, j.length, n, x, f, v, e]),
                P = t.useMemo(() => {
                    let e = (0, r.Mi)({ keptChannelNames: k });
                    return [
                        ...(I ? [o.intl.formatToPlainString(s.default["9b3KdT"], { server: f })] : []),
                        ...(C
                            ? [o.intl.formatToPlainString(y ? s.default.oQ3WRg : s.default["0a7JdI"], { server: f })]
                            : []),
                        ...(null != e ? [e] : []),
                    ];
                }, [C, I, f, y, k]);
            return {
                optionalItems: A,
                body: o.intl.formatToPlainString(s.default["8OKM1N"], { server: f }),
                notes: P,
                pending: c,
                error: p,
                submit: w,
            };
        },
        It: function (e) {
            return {
                projectId: e.projectId,
                guildId: e.guildId,
                appName: e.targetAppName,
                guildName: e.guildName,
                channelNames: e.deletableChannelNames,
                keptChannelNames: e.keptChannelNames,
                previewApp: e.previewApp,
                botStays: !1,
                inOtherServers: !1,
                endsCollaboration: !1,
            };
        },
        hJ: function (e, n) {
            return {
                projectId: e.id,
                guildId: n.guildId,
                appName: n.appName,
                guildName: n.guildName,
                channelNames: n.channelNames,
                keptChannelNames: n.keptChannelNames,
                previewApp:
                    null == n.previewAppName ? null : { name: n.previewAppName, canRemove: n.canRemovePreviewBot },
                botStays: !n.canRemoveBot,
                inOtherServers: (0, i.Jr)(e).some((e) => e !== n.guildId),
                endsCollaboration: n.guildId === e.guild_id && (0, i.pL)(e),
            };
        },
    },
);
