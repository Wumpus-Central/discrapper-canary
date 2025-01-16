n.r(e), n(411104);
var r = n(200651),
    o = n(192379),
    i = n(817080),
    a = n(442837),
    u = n(481060),
    c = n(668781),
    s = n(239091),
    l = n(883385),
    d = n(108843),
    f = n(100527),
    p = n(299206),
    w = n(496675),
    b = n(358085),
    y = n(998502),
    g = n(22382),
    h = n(51078),
    v = n(710111),
    m = n(981631),
    S = n(388032);
e.default = (0, d.Z)(
    (0, l.Z)(
        function (t) {
            let { soundGuild: e, sound: l, activeCallGuildId: d, onSelect: f } = t,
                m = (function (t, e) {
                    let { canManageGuildExpressions: i } = (0, a.cj)([w.Z], () => (null == e ? { canManageGuildExpressions: !1 } : w.Z.getGuildPermissionProps(e)), [e]),
                        c = o.useCallback(() => {
                            if ((null == e ? void 0 : e.id) == null) return null;
                            (0, u.openModalLazy)(async () => {
                                let { default: o } = await Promise.all([n.e('56035'), n.e('28394')]).then(n.bind(n, 758961));
                                return (n) =>
                                    (0, r.jsx)(o, {
                                        ...n,
                                        existingSound: t,
                                        guildId: e.id
                                    });
                            });
                        }, [e, t]);
                    return i
                        ? (0, r.jsx)(
                              u.MenuItem,
                              {
                                  id: 'edit-soundboard-sound',
                                  label: S.intl.string(S.t.ponZcH),
                                  action: c
                              },
                              'edit-soundboard-sound'
                          )
                        : null;
                })(l, e),
                O = (function (t) {
                    let { soundId: e } = t,
                        n = o.useCallback(async () => {
                            try {
                                let t = (0, g.Z)(e),
                                    n = await fetch(t),
                                    r = await n.blob(),
                                    o = (function (t) {
                                        switch (t.type) {
                                            case 'audio/mpeg':
                                            case 'audio/mpeg3':
                                                return 'mp3';
                                            case 'audio/ogg':
                                                return 'ogg';
                                            default:
                                                throw Error('unable to determine file type');
                                        }
                                    })(r),
                                    a = ''.concat(e, '.').concat(o);
                                b.isPlatformEmbedded ? await y.ZP.saveFile(t, a) : (0, i.saveAs)(r, a);
                            } catch (t) {
                                c.Z.show({
                                    title: S.intl.string(S.t.mK3tDA),
                                    body: S.intl.string(S.t.jLlfDA),
                                    confirmText: S.intl.string(S.t.BddRzc)
                                });
                            }
                        }, [e]);
                    return t.guildId === v.X8
                        ? null
                        : (0, r.jsx)(
                              u.MenuItem,
                              {
                                  id: 'download-soundboard-sound',
                                  label: S.intl.string(S.t['/fzLLC']),
                                  action: n
                              },
                              'download-soundboard-sound'
                          );
                })(l),
                x = (0, h.Z)(l, d),
                E = (0, p.Z)({
                    id: l.soundId,
                    label: S.intl.string(S.t.HJikXl)
                });
            return (0, r.jsx)(u.Menu, {
                navId: 'sound-button-context',
                onClose: s.Zy,
                'aria-label': S.intl.string(S.t.liqwPD),
                onSelect: f,
                children: (0, r.jsxs)(u.MenuGroup, {
                    children: [m, x, O, E]
                })
            });
        },
        { object: m.qAy.CONTEXT_MENU }
    ),
    [f.Z.CONTEXT_MENU, f.Z.SOUNDBOARD_BUTTON]
);
