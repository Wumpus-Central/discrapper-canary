n.d(t, { Z: () => O }), n(388685), n(472816), n(794429), n(953529);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(692547),
    l = n(481060),
    o = n(999382),
    c = n(279542),
    d = n(823379),
    u = n(63063),
    m = n(426563),
    g = n(727072),
    p = n(85960),
    f = n(577330),
    h = n(65912),
    b = n(51248),
    x = n(546513),
    j = n(572456),
    N = n(273504),
    v = n(981631),
    _ = n(388032),
    y = n(885655);
function O(e) {
    var t, n;
    let { guildId: O, setPreventNavigation: C = () => {} } = e,
        { editingRule: I, setEditingRule: E } = (0, h.V)(),
        { guild: S, subsection: T } = (0, s.cj)([o.Z], () => o.Z.getProps()),
        P = null != (n = null != (t = null == S ? void 0 : S.id) ? t : O) ? n : v.lds,
        w = null != I,
        [R] = (0, g.RD)(P),
        { rulesByTriggerType: Z } = (0, g.pH)(P),
        D = {
            [p.vh.MEMBERS]: _.NW.string(_.t.sx4E5u),
            [p.vh.CONTENT]: _.NW.string(_.t.fphZb2)
        },
        k = i.useMemo(
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
        A = i.useRef(W);
    i.useEffect(() => {
        A.current = W;
    }),
        i.useEffect(() => {
            let { isInEditMode: e, setEditingRule: t } = A.current;
            e && t(null);
        }, [P]);
    let L = i.useCallback(
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
        M = i.useMemo(() => {
            var e, t;
            return L(null != (e = null == I ? void 0 : I.id) ? e : null, null != (t = null == I ? void 0 : I.triggerType) ? t : null);
        }, [L, I]);
    i.useEffect(() => {
        C(w, (0, j.af)(M));
    }, [C, w, M]);
    let G = (0, p.Z6)(P),
        U = (e) =>
            (0, r.jsx)(r.Fragment, {
                children: e.map((e) => {
                    var t;
                    return (0, r.jsx)(
                        x.Z,
                        {
                            guildId: P,
                            triggerType: e,
                            rules: null != (t = Z[e]) ? t : [],
                            initWithEdit: T === v.KsC.AUTOMOD_MENTION_SPAM && e === N.fX.MENTION_SPAM
                        },
                        e
                    );
                })
            });
    return (0, r.jsxs)(l.hjN, {
        title: _.NW.string(_.t.uRelg4),
        tag: 'h1',
        children: [
            (0, r.jsxs)('div', {
                className: y.descriptionContainer,
                children: [
                    (0, r.jsxs)(l.hjN, {
                        tag: 'h3',
                        className: y.description,
                        titleClassName: y.descriptionHeader,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: _.NW.string(_.t.EwuSCQ)
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: y.helpUrl,
                                children: _.NW.format(_.t['B+sgGh'], { helpUrl: u.Z.getArticleURL(v.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: y.descriptionAvatarContainer,
                        children: [
                            (0, r.jsx)(l.qEK, {
                                src: (0, m.j)(),
                                size: l.EFr.SIZE_80,
                                'aria-label': _.NW.string(_.t.hG1StL)
                            }),
                            (0, r.jsx)(l.IGR, {
                                text: (0, r.jsxs)('div', {
                                    className: y.automodBadgeText,
                                    children: [
                                        (0, r.jsx)(l.sV5, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: y.checkmarkIcon
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-xs/bold',
                                            className: y.automodText,
                                            children: _.NW.string(_.t.hG1StL)
                                        })
                                    ]
                                }),
                                color: a.Z.unsafe_rawColors.BRAND_500.css,
                                className: y.textBadge
                            })
                        ]
                    })
                ]
            }),
            R
                ? (0, r.jsx)(f.Z, {})
                : Object.entries(G).map((e) => {
                      let [t, n] = e;
                      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
                      let s =
                          null != D[t]
                              ? (0, r.jsx)(l.hjN, {
                                    tag: 'h3',
                                    className: y.categoryHeader,
                                    children: (0, r.jsx)(l.Text, {
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        children: D[t]
                                    })
                                })
                              : null;
                      return (0, r.jsxs)(
                          'div',
                          {
                              className: y.categoryContainer,
                              children: [s, U(n)]
                          },
                          t
                      );
                  }),
            null != S &&
                (0, r.jsx)(c.k0, {
                    guild: S,
                    withDivider: !1,
                    className: y.explicitContentFilterSection
                }),
            (0, r.jsx)(b.Z, {
                guildId: P,
                existingRules: k
            }),
            w && (0, r.jsx)('div', { className: y.endSpacer })
        ]
    });
}
