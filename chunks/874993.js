n.d(t, { Z: () => y }), n(388685), n(472816), n(794429), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(692547),
    a = n(481060),
    o = n(999382),
    c = n(279542),
    u = n(823379),
    d = n(63063),
    m = n(426563),
    g = n(727072),
    p = n(85960),
    h = n(577330),
    f = n(65912),
    x = n(51248),
    b = n(546513),
    j = n(572456),
    _ = n(273504),
    v = n(981631),
    O = n(388032),
    C = n(885655);
function y(e) {
    var t, n;
    let { guildId: y, setPreventNavigation: N = () => {} } = e,
        { editingRule: I, setEditingRule: E } = (0, f.V)(),
        { guild: S, subsection: T } = (0, l.cj)([o.Z], () => o.Z.getProps()),
        P = null != (n = null != (t = null == S ? void 0 : S.id) ? t : y) ? n : v.lds,
        w = null != I,
        [R] = (0, g.RD)(P),
        { rulesByTriggerType: Z } = (0, g.pH)(P),
        D = {
            [p.vh.MEMBERS]: O.intl.string(O.t.sx4E5u),
            [p.vh.CONTENT]: O.intl.string(O.t.fphZb2)
        },
        k = i.useMemo(
            () =>
                Object.values(null != Z ? Z : {})
                    .flat()
                    .filter(u.lm),
            [Z]
        ),
        A = {
            isInEditMode: w,
            setEditingRule: E
        },
        L = i.useRef(A);
    i.useEffect(() => {
        L.current = A;
    }),
        i.useEffect(() => {
            let { isInEditMode: e, setEditingRule: t } = L.current;
            e && t(null);
        }, [P]);
    let M = i.useCallback(
            (e, t) => {
                if (null != e) {
                    var n, r;
                    return null !=
                        (r =
                            null ==
                            (n = k.find((t) => {
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
            [k]
        ),
        G = i.useMemo(() => {
            var e, t;
            return M(null != (e = null == I ? void 0 : I.id) ? e : null, null != (t = null == I ? void 0 : I.triggerType) ? t : null);
        }, [M, I]);
    i.useEffect(() => {
        N(w, (0, j.af)(G));
    }, [N, w, G]);
    let U = (0, p.Z6)(P),
        B = (e) =>
            (0, r.jsx)(r.Fragment, {
                children: e.map((e) => {
                    var t;
                    return (0, r.jsx)(
                        b.Z,
                        {
                            guildId: P,
                            triggerType: e,
                            rules: null != (t = Z[e]) ? t : [],
                            initWithEdit: T === v.KsC.AUTOMOD_MENTION_SPAM && e === _.fX.MENTION_SPAM
                        },
                        e
                    );
                })
            });
    return (0, r.jsxs)(a.hjN, {
        title: O.intl.string(O.t.uRelg4),
        tag: 'h1',
        children: [
            (0, r.jsxs)('div', {
                className: C.descriptionContainer,
                children: [
                    (0, r.jsxs)(a.hjN, {
                        tag: 'h3',
                        className: C.description,
                        titleClassName: C.descriptionHeader,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: O.intl.string(O.t.EwuSCQ)
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                className: C.helpUrl,
                                children: O.intl.format(O.t['B+sgGh'], { helpUrl: d.Z.getArticleURL(v.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: C.descriptionAvatarContainer,
                        children: [
                            (0, r.jsx)(a.qEK, {
                                src: (0, m.j)(),
                                size: a.EFr.SIZE_80,
                                'aria-label': O.intl.string(O.t.hG1StL)
                            }),
                            (0, r.jsx)(a.IGR, {
                                text: (0, r.jsxs)('div', {
                                    className: C.automodBadgeText,
                                    children: [
                                        (0, r.jsx)(a.sV5, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: C.checkmarkIcon
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            variant: 'text-xs/bold',
                                            className: C.automodText,
                                            children: O.intl.string(O.t.hG1StL)
                                        })
                                    ]
                                }),
                                color: s.Z.unsafe_rawColors.BRAND_500.css,
                                className: C.textBadge
                            })
                        ]
                    })
                ]
            }),
            R
                ? (0, r.jsx)(h.Z, {})
                : Object.entries(U).map((e) => {
                      let [t, n] = e;
                      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
                      let l =
                          null != D[t]
                              ? (0, r.jsx)(a.hjN, {
                                    tag: 'h3',
                                    className: C.categoryHeader,
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
                              className: C.categoryContainer,
                              children: [l, B(n)]
                          },
                          t
                      );
                  }),
            null != S &&
                (0, r.jsx)(c.k0, {
                    guild: S,
                    withDivider: !1,
                    className: C.explicitContentFilterSection
                }),
            (0, r.jsx)(x.Z, {
                guildId: P,
                existingRules: k
            }),
            w && (0, r.jsx)('div', { className: C.endSpacer })
        ]
    });
}
