n.d(t, { Z: () => C }), n(388685), n(472816), n(794429), n(953529);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    l = n(692547),
    a = n(481060),
    o = n(999382),
    c = n(279542),
    d = n(823379),
    u = n(63063),
    m = n(426563),
    g = n(727072),
    p = n(85960),
    h = n(577330),
    f = n(65912),
    x = n(51248),
    b = n(546513),
    j = n(572456),
    N = n(273504),
    _ = n(981631),
    v = n(388032),
    O = n(885655);
function C(e) {
    var t, n;
    let { guildId: C, setPreventNavigation: y = () => {} } = e,
        { editingRule: I, setEditingRule: E } = (0, f.V)(),
        { guild: S, subsection: T } = (0, s.cj)([o.Z], () => o.Z.getProps()),
        P = null != (n = null != (t = null == S ? void 0 : S.id) ? t : C) ? n : _.lds,
        w = null != I,
        [R] = (0, g.RD)(P),
        { rulesByTriggerType: Z } = (0, g.pH)(P),
        D = {
            [p.vh.MEMBERS]: v.NW.string(v.t.sx4E5u),
            [p.vh.CONTENT]: v.NW.string(v.t.fphZb2)
        },
        A = i.useMemo(
            () =>
                Object.values(null != Z ? Z : {})
                    .flat()
                    .filter(d.lm),
            [Z]
        ),
        W = {
            isInEditMode: w,
            setEditingRule: E
        },
        k = i.useRef(W);
    i.useEffect(() => {
        k.current = W;
    }),
        i.useEffect(() => {
            let { isInEditMode: e, setEditingRule: t } = k.current;
            e && t(null);
        }, [P]);
    let L = i.useCallback(
            (e, t) => {
                if (null != e) {
                    var n, r;
                    return null !=
                        (r =
                            null ==
                            (n = A.find((t) => {
                                let { id: n } = t;
                                return n === e;
                            }))
                                ? void 0
                                : n.name)
                        ? r
                        : null;
                }
                return null != t ? p.I6[t].getDefaultRuleName() : null;
            },
            [A]
        ),
        M = i.useMemo(() => {
            var e, t;
            return L(null != (e = null == I ? void 0 : I.id) ? e : null, null != (t = null == I ? void 0 : I.triggerType) ? t : null);
        }, [L, I]);
    i.useEffect(() => {
        y(w, (0, j.af)(M));
    }, [y, w, M]);
    let G = (0, p.Z6)(P),
        U = (e) =>
            (0, r.jsx)(r.Fragment, {
                children: e.map((e) => {
                    var t;
                    return (0, r.jsx)(
                        b.Z,
                        {
                            guildId: P,
                            triggerType: e,
                            rules: null != (t = Z[e]) ? t : [],
                            initWithEdit: T === _.KsC.AUTOMOD_MENTION_SPAM && e === N.fX.MENTION_SPAM
                        },
                        e
                    );
                })
            });
    return (0, r.jsxs)(a.hjN, {
        title: v.NW.string(v.t.uRelg4),
        tag: 'h1',
        children: [
            (0, r.jsxs)('div', {
                className: O.descriptionContainer,
                children: [
                    (0, r.jsxs)(a.hjN, {
                        tag: 'h3',
                        className: O.description,
                        titleClassName: O.descriptionHeader,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: v.NW.string(v.t.EwuSCQ)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                className: O.helpUrl,
                                children: v.NW.format(v.t['B+sgGh'], { helpUrl: u.Z.getArticleURL(_.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: O.descriptionAvatarContainer,
                        children: [
                            (0, r.jsx)(a.qEK, {
                                src: (0, m.j)(),
                                size: a.EFr.SIZE_80,
                                'aria-label': v.NW.string(v.t.hG1StL)
                            }),
                            (0, r.jsx)(a.IGR, {
                                text: (0, r.jsxs)('div', {
                                    className: O.automodBadgeText,
                                    children: [
                                        (0, r.jsx)(a.sV5, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: O.checkmarkIcon
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-xs/bold',
                                            className: O.automodText,
                                            children: v.NW.string(v.t.hG1StL)
                                        })
                                    ]
                                }),
                                color: l.Z.unsafe_rawColors.BRAND_500.css,
                                className: O.textBadge
                            })
                        ]
                    })
                ]
            }),
            R
                ? (0, r.jsx)(h.Z, {})
                : Object.entries(G).map((e) => {
                      let [t, n] = e;
                      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
                      let s =
                          null != D[t]
                              ? (0, r.jsx)(a.hjN, {
                                    tag: 'h3',
                                    className: O.categoryHeader,
                                    children: (0, r.jsx)(a.Text, {
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        children: D[t]
                                    })
                                })
                              : null;
                      return (0, r.jsxs)(
                          'div',
                          {
                              className: O.categoryContainer,
                              children: [s, U(n)]
                          },
                          t
                      );
                  }),
            null != S &&
                (0, r.jsx)(c.k0, {
                    guild: S,
                    withDivider: !1,
                    className: O.explicitContentFilterSection
                }),
            (0, r.jsx)(x.Z, {
                guildId: P,
                existingRules: A
            }),
            w && (0, r.jsx)('div', { className: O.endSpacer })
        ]
    });
}
