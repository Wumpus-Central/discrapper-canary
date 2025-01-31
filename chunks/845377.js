n.d(t, { Z: () => E }), n(47120), n(724458);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(498607),
    o = n.n(a),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    h = n(481060),
    g = n(984933),
    x = n(63063),
    p = n(709054),
    _ = n(434404),
    C = n(118215),
    f = n(981631),
    v = n(388032),
    N = n(555437);
let j = (e) => {
    let { name: t, failingName: n, description: r, checked: l, pending: s, pendingDescription: a, failingDescription: o } = e,
        c = t,
        d = null,
        u = null;
    return (
        s
            ? ((d = (0, i.jsx)(h.P4T, {
                  size: 'custom',
                  color: m.Z.unsafe_rawColors.YELLOW_300.css,
                  width: 20,
                  height: 20
              })),
              (u = null != a ? a : r))
            : l
              ? ((d = (0, i.jsx)(h.XZJ, {
                    readOnly: !0,
                    shape: h.XZJ.Shapes.ROUND,
                    size: 20,
                    type: h.XZJ.Types.INVERTED,
                    value: !0
                })),
                (u = r))
              : ((d = (0, i.jsx)(h.k$p, {
                    size: 'custom',
                    color: m.Z.unsafe_rawColors.RED_400.css,
                    width: 20,
                    height: 20
                })),
                (c = null != n ? n : t),
                (u = null != o ? o : r)),
        (0, i.jsxs)('div', {
            className: N.checklistItem,
            children: [
                (0, i.jsx)('div', {
                    className: N.checklistIcon,
                    children: d
                }),
                (0, i.jsxs)('div', {
                    className: N.checklistText,
                    children: [
                        (0, i.jsx)(h.X6q, {
                            variant: 'heading-md/semibold',
                            children: c
                        }),
                        (0, i.jsx)(h.Text, {
                            color: 'text-muted',
                            variant: 'text-sm/normal',
                            children: u
                        })
                    ]
                })
            ]
        })
    );
};
function I(e, t) {
    return o()(
        null == e
            ? void 0
            : e.map((e) => {
                  let [t, n] = e;
                  return null == t ? void 0 : t.id;
              }),
        null == t
            ? void 0
            : t.map((e) => {
                  let [t, n] = e;
                  return null == t ? void 0 : t.id;
              })
    );
}
let E = (e) => {
    let { guild: t, guildId: l, className: a, headerContent: o, failedItemsOnly: c = !1 } = e,
        [m, E] = (0, u.Wu)([C.ZP], () => [C.ZP.getDiscoveryChecklist(l), C.ZP.isLoading()], [l]),
        { nsfwProperties: b } = null != m ? m : {},
        T = null == t ? void 0 : t.hasFeature(f.oNc.PARTNERED),
        S = null == b ? void 0 : b.channels_banned_keywords,
        R = (0, u.e7)(
            [g.ZP],
            () => {
                var e, n, i;
                if (null == S) return [];
                let r = null !== (n = (null !== (e = g.ZP.getChannels(t.id)) && void 0 !== e ? e : {})[g.sH]) && void 0 !== n ? n : [],
                    l =
                        null !==
                            (i =
                                null == r
                                    ? void 0
                                    : r
                                          .map((e) => e.channel)
                                          .reduce(
                                              (e, t) => ({
                                                  ...e,
                                                  [t.id]: t
                                              }),
                                              {}
                                          )) && void 0 !== i
                            ? i
                            : {};
                return null == S
                    ? []
                    : Object.entries(S).map((e) => {
                          let [t, n] = e;
                          return [l[t], n];
                      });
            },
            [t.id, S],
            I
        );
    if (E || null == m)
        return (0, i.jsxs)('div', {
            className: s()(N.container, N.loaderContainer, a),
            children: [
                (0, i.jsx)(h.X6q, {
                    className: N.loadingText,
                    variant: 'heading-md/semibold',
                    color: 'header-secondary',
                    children: v.intl.string(v.t.e1gm0d)
                }),
                (0, i.jsx)(h.$jN, { className: N.__invalid_spinner })
            ]
        });
    let Z = T ? v.t['WH+1Y2'] : v.t.a4MYDA,
        y = [
            {
                name: v.intl.string(v.t.yvk9p6),
                failingName: v.intl.string(v.t['IY/UT0']),
                description: v.intl.string(v.t.hSLSMz),
                failingDescription: v.intl.format(v.t.odsGg4, {
                    termsURL: f.EYA.TERMS,
                    guidelinesURL: x.Z.getArticleURL(f.BhN.PUBLIC_GUILD_GUILDLINES)
                }),
                checked: null == m ? void 0 : m.safeEnvironment
            },
            {
                name: v.intl.formatToPlainString(v.t.NYovAw, { minMembers: m.minimumGuildSize }),
                failingName: v.intl.formatToPlainString(v.t.wvJwYm, { minMembers: m.minimumGuildSize.toLocaleString() }),
                description: null,
                failingDescription: v.intl.format(Z, { minMembers: m.minimumGuildSize.toLocaleString() }),
                checked: null == m ? void 0 : m.size
            },
            {
                name: v.intl.string(v.t.PtxOCA),
                failingName: v.intl.string(v.t.JPF5IC),
                description: v.intl.formatToPlainString(v.t.VT0bQE, { minimumGuildAge: Math.ceil(m.minimumGuildAge / 7) }),
                failingDescription: v.intl.formatToPlainString(v.t.jYwM1d, {
                    minimumGuildAge: Math.ceil(m.minimumGuildAge / 7),
                    passDate: d()(p.default.extractTimestamp(l)).add(m.minimumGuildAge, 'days').format('LL')
                }),
                checked: null == m ? void 0 : m.age
            },
            {
                name: (null == m ? void 0 : m.healthScorePending) ? v.intl.string(v.t.G77ud3) : v.intl.string(v.t['95nW0N']),
                failingName: v.intl.string(v.t['+GHxPz']),
                description: v.intl.string(v.t.rTWJwc),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(h.Text, {
                            color: 'text-muted',
                            className: N.healthFailingDescription,
                            variant: 'text-sm/normal',
                            children: v.intl.string(v.t.LjqS0N)
                        }),
                        (null == m ? void 0 : m.engagementHealthy)
                            ? null
                            : (0, i.jsx)(h.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/normal',
                                  children: v.intl.string(v.t['X8Lt7+'])
                              }),
                        (null == m ? void 0 : m.retentionHealthy)
                            ? null
                            : (0, i.jsx)(h.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/normal',
                                  children: v.intl.string(v.t['esdy8/'])
                              }),
                        (() => {
                            if (null == m || null == m.healthScore) return !1;
                            let { retentionHealthy: e, engagementHealthy: t, healthScore: n } = m,
                                { avg_nonnew_participators: i, avg_nonnew_communicators: r, perc_ret_w1_intentful: l } = n;
                            return (!e && null != l) || (!t && null != i && null != r);
                        })() &&
                            (0, i.jsx)(h.zxk, {
                                className: N.detailsButton,
                                look: h.zxk.Looks.LINK,
                                size: h.zxk.Sizes.NONE,
                                color: h.zxk.Colors.LINK,
                                onClick: () =>
                                    (0, h.ZDy)(async () => {
                                        let { default: e } = await n.e('23401').then(n.bind(n, 666599));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                guildChecklist: m
                                            });
                                    }),
                                children: v.intl.string(v.t.qyiTHx)
                            })
                    ]
                }),
                pendingDescription: (null == m ? void 0 : m.size)
                    ? v.intl.format(v.t.ALtXIC, {
                          checkBackHook: (e, t) =>
                              (0, i.jsx)(
                                  'strong',
                                  {
                                      className: N.healthPending,
                                      children: e
                                  },
                                  t
                              )
                      })
                    : v.intl.formatToPlainString(v.t['6S/96O'], { minMembers: 200 }),
                checked: null == m ? void 0 : m.healthy,
                pending: null == m ? void 0 : m.healthScorePending
            },
            {
                name: v.intl.string(v.t['/cghSE']),
                failingName: v.intl.string(v.t['0HJNa2']),
                description: v.intl.string(v.t.Pbu9AQ),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (null == b ? void 0 : b.channels) != null
                            ? (0, i.jsx)(h.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: v.intl.format(v.t['T+DQYW'], {
                                      channelHook: (e, t) =>
                                          (0, i.jsx)(
                                              'span',
                                              {
                                                  className: N.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                              })
                            : null,
                        R.length > 0
                            ? (0, i.jsx)('div', {
                                  className: N.indent,
                                  children: R.map((e) => {
                                      let [t, n] = e;
                                      return null != t
                                          ? (0, i.jsxs)(
                                                h.Text,
                                                {
                                                    color: 'text-muted',
                                                    variant: 'text-sm/normal',
                                                    children: ['#', t.name, ': ', n.join(', ')]
                                                },
                                                t.id
                                            )
                                          : null;
                                  })
                              })
                            : null,
                        (null == b ? void 0 : b.name) != null
                            ? (0, i.jsx)(h.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: v.intl.format(v.t.KVD8Ex, {
                                      nameHook: (e, t) =>
                                          (0, i.jsx)(
                                              'span',
                                              {
                                                  className: N.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                              })
                            : null,
                        (null == b ? void 0 : b.description) != null
                            ? (0, i.jsx)(h.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: v.intl.format(v.t['/W9Ken'], {
                                      descriptionHook: (e, t) =>
                                          (0, i.jsx)(
                                              'span',
                                              {
                                                  className: N.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                              })
                            : null
                    ]
                }),
                checked: null == b || 0 === Object.keys(b).length
            },
            {
                name: v.intl.string(v.t.lSXnLy),
                failingName: v.intl.string(v.t.awA3PT),
                description: v.intl.string(v.t.QbBJ7e),
                failingDescription: v.intl.format(v.t.kBXInZ, { onClick: () => _.Z.setSection(f.pNK.SAFETY, f.KsC.SAFETY_PERMISSIONS) }),
                checked: null == m ? void 0 : m.protected
            }
        ];
    return (0, i.jsxs)('div', {
        className: s()(N.container, a),
        children: [
            (() => {
                let e = (null == m ? void 0 : m.sufficient) ? n(909425) : n(177266);
                return null == o
                    ? null
                    : (0, i.jsxs)('div', {
                          className: N.header,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: e,
                                  className: N.headerIcon,
                                  width: 40
                              }),
                              o
                          ]
                      });
            })(),
            y
                .filter((e) => !c || null == e.checked || !e.checked)
                .map((e, t) =>
                    (0, i.jsxs)(
                        r.Fragment,
                        {
                            children: [(0, i.jsx)(j, { ...e }), t < y.length - 1 ? (0, i.jsx)('hr', { className: N.separator }) : null]
                        },
                        ''.concat(e.name)
                    )
                )
        ]
    });
};
