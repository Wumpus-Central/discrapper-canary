a(321073);
var t = a(582128),
    l = a(664619),
    i = a(733791),
    r = a(191850),
    s = a(792996);
a.d(
    n,
    {},
    {
        Ay: function (e) {
            let [n, a] = t.useState(!0),
                [c, o] = t.useState(!1),
                [d, u] = t.useState(!1),
                [p, m] = t.useState(null),
                [h, g] = t.useState(null),
                {
                    projectId: x,
                    guildId: v,
                    appName: b,
                    guildName: j,
                    channelNames: k,
                    keptChannelNames: N,
                    previewApp: f,
                    botStays: y,
                } = h ?? e,
                C = !c && f?.canRemove !== !1,
                A = t.useMemo(() => {
                    let e = [];
                    return (
                        k.length > 0 &&
                            e.push({
                                item: {
                                    key: "channels",
                                    kind: "channel",
                                    label: new Intl.ListFormat(s.intl.currentLocale, { type: "conjunction" }).format(
                                        k.map((e) => `#${e}`),
                                    ),
                                },
                                checked: n,
                                onChange: a,
                                disabled: !1,
                            }),
                        null != f &&
                            e.push({
                                item: { key: "preview-app", kind: "app", label: f.name },
                                checked: C,
                                onChange: (e) => o(!e),
                                disabled: !f.canRemove,
                            }),
                        e
                    );
                }, [C, k, n, f]),
                I = t.useCallback(async () => {
                    (u(!0), m(null), g(e));
                    let a = !1;
                    try {
                        a = (
                            await (0, l.YI)(x, {
                                guildId: v,
                                deleteChannels: k.length > 0 && n,
                                alsoRemovePreviewBot: C,
                            })
                        ).ok;
                    } catch {
                        a = !1;
                    }
                    return (u(!1), a)
                        ? s.intl.formatToPlainString(r.default.SNFGxP, { app: b, server: j })
                        : (m(s.intl.string(r.default.PJ2Fkn)), g(null), null);
                }, [C, b, k.length, n, v, j, x, e]),
                S = t.useMemo(() => {
                    let e = (0, i.Mi)({ keptChannelNames: N });
                    return [
                        ...(y ? [s.intl.formatToPlainString(r.default["0a7JdI"], { server: j })] : []),
                        ...(null != e ? [e] : []),
                    ];
                }, [y, j, N]);
            return {
                optionalItems: A,
                body: s.intl.formatToPlainString(r.default["8OKM1N"], { server: j }),
                notes: S,
                pending: d,
                error: p,
                submit: I,
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
            };
        },
        hJ: function (e, n) {
            return null == e.guild_id
                ? null
                : {
                      projectId: e.id,
                      guildId: e.guild_id,
                      appName: n.appName,
                      guildName: n.guildName,
                      channelNames: n.channelNames,
                      keptChannelNames: n.keptChannelNames,
                      previewApp:
                          null == n.previewAppName
                              ? null
                              : { name: n.previewAppName, canRemove: n.canRemovePreviewBot },
                      botStays: !n.canRemoveBot,
                  };
        },
    },
);
