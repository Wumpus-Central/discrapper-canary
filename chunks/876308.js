n.d(e, { default: () => N }), n(411104);
var i = n(200651),
    r = n(192379),
    o = n(817080),
    a = n(442837),
    s = n(481060),
    u = n(668781),
    c = n(239091),
    l = n(883385),
    d = n(108843),
    f = n(100527),
    p = n(299206),
    w = n(496675),
    h = n(358085),
    b = n(998502),
    y = n(22382),
    g = n(51078),
    v = n(710111),
    m = n(981631),
    S = n(388032);
let N = (0, d.Z)(
    (0, l.Z)(
        function (t) {
            let { soundGuild: e, sound: l, activeCallGuildId: d, onSelect: f } = t,
                m = (function (t, e) {
                    let { canManageGuildExpressions: o } = (0, a.cj)([w.Z], () => (null == e ? { canManageGuildExpressions: !1 } : w.Z.getGuildPermissionProps(e)), [e]),
                        u = r.useCallback(() => {
                            if ((null == e ? void 0 : e.id) == null) return null;
                            (0, s.ZDy)(async () => {
                                let { default: r } = await Promise.all([n.e('56035'), n.e('13519')]).then(n.bind(n, 758961));
                                return (n) =>
                                    (0, i.jsx)(r, {
                                        ...n,
                                        existingSound: t,
                                        guildId: e.id
                                    });
                            });
                        }, [e, t]);
                    return o
                        ? (0, i.jsx)(
                              s.sNh,
                              {
                                  id: 'edit-soundboard-sound',
                                  label: S.intl.string(S.t.ponZcH),
                                  action: u
                              },
                              'edit-soundboard-sound'
                          )
                        : null;
                })(l, e),
                N = (function (t) {
                    let { soundId: e } = t,
                        n = r.useCallback(async () => {
                            try {
                                let t = (0, y.Z)(e),
                                    n = await fetch(t),
                                    i = await n.blob(),
                                    r = (function (t) {
                                        switch (t.type) {
                                            case 'audio/mpeg':
                                            case 'audio/mpeg3':
                                                return 'mp3';
                                            case 'audio/ogg':
                                                return 'ogg';
                                            default:
                                                throw Error('unable to determine file type');
                                        }
                                    })(i),
                                    a = ''.concat(e, '.').concat(r);
                                h.isPlatformEmbedded ? await b.ZP.saveFile(t, a) : (0, o.saveAs)(i, a);
                            } catch (t) {
                                u.Z.show({
                                    title: S.intl.string(S.t.mK3tDA),
                                    body: S.intl.string(S.t.jLlfDA),
                                    confirmText: S.intl.string(S.t.BddRzc)
                                });
                            }
                        }, [e]);
                    return t.guildId === v.X8
                        ? null
                        : (0, i.jsx)(
                              s.sNh,
                              {
                                  id: 'download-soundboard-sound',
                                  label: S.intl.string(S.t['/fzLLC']),
                                  action: n
                              },
                              'download-soundboard-sound'
                          );
                })(l),
                O = (0, g.Z)(l, d),
                x = (0, p.Z)({
                    id: l.soundId,
                    label: S.intl.string(S.t.HJikXl)
                });
            return (0, i.jsx)(s.v2r, {
                navId: 'sound-button-context',
                onClose: c.Zy,
                'aria-label': S.intl.string(S.t.liqwPD),
                onSelect: f,
                children: (0, i.jsxs)(s.kSQ, {
                    children: [m, O, N, x]
                })
            });
        },
        { object: m.qAy.CONTEXT_MENU }
    ),
    [f.Z.CONTEXT_MENU, f.Z.SOUNDBOARD_BUTTON]
);
