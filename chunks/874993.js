n.d(t, { Z: () => E }), n(47120), n(536091);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(692547),
    a = n(481060),
    o = n(999382),
    c = n(279542),
    d = n(823379),
    u = n(63063),
    m = n(426563),
    h = n(727072),
    g = n(85960),
    x = n(577330),
    p = n(65912),
    _ = n(51248),
    C = n(546513),
    f = n(572456),
    v = n(273504),
    N = n(981631),
    j = n(388032),
    I = n(925144);
function E(e) {
    var t, n;
    let { guildId: E, setPreventNavigation: b = () => {} } = e,
        { editingRule: T, setEditingRule: S } = (0, p.V)(),
        { guild: R, subsection: Z } = (0, l.cj)([o.Z], () => o.Z.getProps()),
        y = null !== (n = null !== (t = null == R ? void 0 : R.id) && void 0 !== t ? t : E) && void 0 !== n ? n : N.lds,
        A = null != T,
        [L] = (0, h.RD)(y),
        { rulesByTriggerType: D } = (0, h.pH)(y),
        O = {
            [g.vh.MEMBERS]: j.intl.string(j.t.sx4E5u),
            [g.vh.CONTENT]: j.intl.string(j.t.fphZb2)
        },
        k = r.useMemo(
            () =>
                Object.values(null != D ? D : {})
                    .flat()
                    .filter(d.lm),
            [D]
        ),
        P = {
            isInEditMode: A,
            setEditingRule: S
        },
        w = r.useRef(P);
    r.useEffect(() => {
        w.current = P;
    }),
        r.useEffect(() => {
            let { isInEditMode: e, setEditingRule: t } = w.current;
            e && t(null);
        }, [y]);
    let M = r.useCallback(
            (e, t) => {
                if (null != e) {
                    var n, i;
                    return null !==
                        (i =
                            null ===
                                (n = k.find((t) => {
                                    let { id: n } = t;
                                    return n === e;
                                })) || void 0 === n
                                ? void 0
                                : n.name) && void 0 !== i
                        ? i
                        : null;
                }
                return null != t ? g.I6[t].getDefaultRuleName() : null;
            },
            [k]
        ),
        U = r.useMemo(() => {
            var e, t;
            return M(null !== (e = null == T ? void 0 : T.id) && void 0 !== e ? e : null, null !== (t = null == T ? void 0 : T.triggerType) && void 0 !== t ? t : null);
        }, [M, T]);
    r.useEffect(() => {
        b(A, (0, f.af)(U));
    }, [b, A, U]);
    let G = (0, g.Z6)(y),
        B = (e) =>
            (0, i.jsx)(i.Fragment, {
                children: e.map((e) => {
                    var t;
                    return (0, i.jsx)(
                        C.Z,
                        {
                            guildId: y,
                            triggerType: e,
                            rules: null !== (t = D[e]) && void 0 !== t ? t : [],
                            initWithEdit: Z === N.KsC.AUTOMOD_MENTION_SPAM && e === v.fX.MENTION_SPAM
                        },
                        e
                    );
                })
            });
    return (0, i.jsxs)(a.hjN, {
        title: j.intl.string(j.t.uRelg4),
        tag: 'h1',
        children: [
            (0, i.jsxs)('div', {
                className: I.descriptionContainer,
                children: [
                    (0, i.jsxs)(a.hjN, {
                        tag: 'h3',
                        className: I.description,
                        titleClassName: I.descriptionHeader,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: j.intl.string(j.t.EwuSCQ)
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                className: I.helpUrl,
                                children: j.intl.format(j.t['B+sgGh'], { helpUrl: u.Z.getArticleURL(N.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: I.descriptionAvatarContainer,
                        children: [
                            (0, i.jsx)(a.qEK, {
                                src: (0, m.j)(),
                                size: a.EFr.SIZE_80,
                                'aria-label': j.intl.string(j.t.hG1StL)
                            }),
                            (0, i.jsx)(a.IGR, {
                                text: (0, i.jsxs)('div', {
                                    className: I.automodBadgeText,
                                    children: [
                                        (0, i.jsx)(a.sV5, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: I.checkmarkIcon
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-xs/bold',
                                            className: I.automodText,
                                            children: j.intl.string(j.t.hG1StL)
                                        })
                                    ]
                                }),
                                color: s.Z.unsafe_rawColors.BRAND_500.css,
                                className: I.textBadge
                            })
                        ]
                    })
                ]
            }),
            L
                ? (0, i.jsx)(x.Z, {})
                : Object.entries(G).map((e) => {
                      let [t, n] = e;
                      if (0 === n.length) return (0, i.jsx)(r.Fragment, {}, t);
                      let l =
                          null != O[t]
                              ? (0, i.jsx)(a.hjN, {
                                    tag: 'h3',
                                    className: I.categoryHeader,
                                    children: (0, i.jsx)(a.Text, {
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        children: O[t]
                                    })
                                })
                              : null;
                      return (0, i.jsxs)(
                          'div',
                          {
                              className: I.categoryContainer,
                              children: [l, B(n)]
                          },
                          t
                      );
                  }),
            null != R &&
                (0, i.jsx)(c.k0, {
                    guild: R,
                    withDivider: !1,
                    className: I.explicitContentFilterSection
                }),
            (0, i.jsx)(_.Z, {
                guildId: y,
                existingRules: k
            }),
            A && (0, i.jsx)('div', { className: I.endSpacer })
        ]
    });
}
