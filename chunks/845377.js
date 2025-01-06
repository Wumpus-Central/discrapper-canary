n(47120), n(724458);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(498607),
    o = n.n(s),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    h = n(481060),
    g = n(984933),
    x = n(63063),
    p = n(709054),
    f = n(434404),
    C = n(118215),
    v = n(981631),
    _ = n(388032),
    I = n(555437);
let N = (e) => {
    let { name: t, failingName: n, description: r, checked: l, pending: a, pendingDescription: s, failingDescription: o } = e,
        c = t,
        d = null,
        u = null;
    return (
        a
            ? ((d = (0, i.jsx)(h.CircleWarningIcon, {
                  size: 'custom',
                  color: m.Z.unsafe_rawColors.YELLOW_300.css,
                  width: 20,
                  height: 20
              })),
              (u = null != s ? s : r))
            : l
              ? ((d = (0, i.jsx)(h.Checkbox, {
                    readOnly: !0,
                    shape: h.Checkbox.Shapes.ROUND,
                    size: 20,
                    type: h.Checkbox.Types.INVERTED,
                    value: !0
                })),
                (u = r))
              : ((d = (0, i.jsx)(h.CircleXIcon, {
                    size: 'custom',
                    color: m.Z.unsafe_rawColors.RED_400.css,
                    width: 20,
                    height: 20
                })),
                (c = null != n ? n : t),
                (u = null != o ? o : r)),
        (0, i.jsxs)('div', {
            className: I.checklistItem,
            children: [
                (0, i.jsx)('div', {
                    className: I.checklistIcon,
                    children: d
                }),
                (0, i.jsxs)('div', {
                    className: I.checklistText,
                    children: [
                        (0, i.jsx)(h.Heading, {
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
function T(e, t) {
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
t.Z = (e) => {
    let { guild: t, guildId: l, className: s, noHeader: o = !1, failedItemsOnly: c = !1 } = e,
        [m, j] = (0, u.Wu)([C.ZP], () => [C.ZP.getDiscoveryChecklist(l), C.ZP.isLoading()], [l]),
        { nsfwProperties: b } = null != m ? m : {},
        S = null == t ? void 0 : t.hasFeature(v.oNc.PARTNERED),
        E = null == b ? void 0 : b.channels_banned_keywords,
        R = (0, u.e7)(
            [g.ZP],
            () => {
                var e, n, i;
                if (null == E) return [];
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
                return null == E
                    ? []
                    : Object.entries(E).map((e) => {
                          let [t, n] = e;
                          return [l[t], n];
                      });
            },
            [t.id, E],
            T
        );
    if (j || null == m)
        return (0, i.jsxs)('div', {
            className: a()(I.container, I.loaderContainer, s),
            children: [
                (0, i.jsx)(h.Heading, {
                    className: I.loadingText,
                    variant: 'heading-md/semibold',
                    color: 'header-secondary',
                    children: _.intl.string(_.t.e1gm0d)
                }),
                (0, i.jsx)(h.Spinner, { className: I.__invalid_spinner })
            ]
        });
    let y = S ? _.t['WH+1Y2'] : _.t.a4MYDA,
        A = [
            {
                name: _.intl.string(_.t.yvk9p6),
                failingName: _.intl.string(_.t['IY/UT0']),
                description: _.intl.string(_.t.hSLSMz),
                failingDescription: _.intl.format(_.t.odsGg4, {
                    termsURL: v.EYA.TERMS,
                    guidelinesURL: x.Z.getArticleURL(v.BhN.PUBLIC_GUILD_GUILDLINES)
                }),
                checked: null == m ? void 0 : m.safeEnvironment
            },
            {
                name: _.intl.formatToPlainString(_.t.NYovAw, { minMembers: m.minimumGuildSize }),
                failingName: _.intl.formatToPlainString(_.t.wvJwYm, { minMembers: m.minimumGuildSize.toLocaleString() }),
                description: null,
                failingDescription: _.intl.format(y, { minMembers: m.minimumGuildSize.toLocaleString() }),
                checked: null == m ? void 0 : m.size
            },
            {
                name: _.intl.string(_.t.PtxOCA),
                failingName: _.intl.string(_.t.JPF5IC),
                description: _.intl.formatToPlainString(_.t.VT0bQE, { minimumGuildAge: Math.ceil(m.minimumGuildAge / 7) }),
                failingDescription: _.intl.formatToPlainString(_.t.jYwM1d, {
                    minimumGuildAge: Math.ceil(m.minimumGuildAge / 7),
                    passDate: d()(p.default.extractTimestamp(l)).add(m.minimumGuildAge, 'days').format('LL')
                }),
                checked: null == m ? void 0 : m.age
            },
            {
                name: (null == m ? void 0 : m.healthScorePending) ? _.intl.string(_.t.G77ud3) : _.intl.string(_.t['95nW0N']),
                failingName: _.intl.string(_.t['+GHxPz']),
                description: _.intl.string(_.t.rTWJwc),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(h.Text, {
                            color: 'text-muted',
                            className: I.healthFailingDescription,
                            variant: 'text-sm/normal',
                            children: _.intl.string(_.t.LjqS0N)
                        }),
                        (null == m ? void 0 : m.engagementHealthy)
                            ? null
                            : (0, i.jsx)(h.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/normal',
                                  children: _.intl.string(_.t['X8Lt7+'])
                              }),
                        (null == m ? void 0 : m.retentionHealthy)
                            ? null
                            : (0, i.jsx)(h.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/normal',
                                  children: _.intl.string(_.t['esdy8/'])
                              }),
                        (() => {
                            if (null == m || null == m.healthScore) return !1;
                            let { retentionHealthy: e, engagementHealthy: t, healthScore: n } = m,
                                { avg_nonnew_participators: i, avg_nonnew_communicators: r, perc_ret_w1_intentful: l } = n;
                            return (!e && null != l) || (!t && null != i && null != r);
                        })() &&
                            (0, i.jsx)(h.Button, {
                                className: I.detailsButton,
                                look: h.Button.Looks.LINK,
                                size: h.Button.Sizes.NONE,
                                color: h.Button.Colors.LINK,
                                onClick: () =>
                                    (0, h.openModalLazy)(async () => {
                                        let { default: e } = await n.e('23401').then(n.bind(n, 666599));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                guildChecklist: m
                                            });
                                    }),
                                children: _.intl.string(_.t.qyiTHx)
                            })
                    ]
                }),
                pendingDescription: (null == m ? void 0 : m.size)
                    ? _.intl.format(_.t.ALtXIC, {
                          checkBackHook: (e, t) =>
                              (0, i.jsx)(
                                  'strong',
                                  {
                                      className: I.healthPending,
                                      children: e
                                  },
                                  t
                              )
                      })
                    : _.intl.formatToPlainString(_.t['6S/96O'], { minMembers: 200 }),
                checked: null == m ? void 0 : m.healthy,
                pending: null == m ? void 0 : m.healthScorePending
            },
            {
                name: _.intl.string(_.t['/cghSE']),
                failingName: _.intl.string(_.t['0HJNa2']),
                description: _.intl.string(_.t.Pbu9AQ),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (null == b ? void 0 : b.channels) != null
                            ? (0, i.jsx)(h.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: _.intl.format(_.t['T+DQYW'], {
                                      channelHook: (e, t) =>
                                          (0, i.jsx)(
                                              'span',
                                              {
                                                  className: I.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                              })
                            : null,
                        R.length > 0
                            ? (0, i.jsx)('div', {
                                  className: I.indent,
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
                                  children: _.intl.format(_.t.KVD8Ex, {
                                      nameHook: (e, t) =>
                                          (0, i.jsx)(
                                              'span',
                                              {
                                                  className: I.doesNot,
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
                                  children: _.intl.format(_.t['/W9Ken'], {
                                      descriptionHook: (e, t) =>
                                          (0, i.jsx)(
                                              'span',
                                              {
                                                  className: I.doesNot,
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
                name: _.intl.string(_.t.lSXnLy),
                failingName: _.intl.string(_.t.awA3PT),
                description: _.intl.string(_.t.QbBJ7e),
                failingDescription: _.intl.format(_.t.kBXInZ, { onClick: () => f.Z.setSection(v.pNK.SAFETY, v.KsC.SAFETY_PERMISSIONS) }),
                checked: null == m ? void 0 : m.protected
            }
        ];
    return (0, i.jsxs)('div', {
        className: a()(I.container, s),
        children: [
            (() => {
                let e = _.t['+6Hylp'],
                    t = (null == m ? void 0 : m.sufficient) ? n(909425) : n(177266);
                return o
                    ? null
                    : (0, i.jsxs)('div', {
                          className: I.header,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: t,
                                  className: I.headerIcon,
                                  width: 40
                              }),
                              (0, i.jsx)(h.Heading, {
                                  variant: 'heading-md/semibold',
                                  children: (null == m ? void 0 : m.sufficient)
                                      ? _.intl.string(_.t.XAgDU1)
                                      : _.intl.format(e, {
                                            doesNotHook: (e, t) =>
                                                (0, i.jsx)(
                                                    'strong',
                                                    {
                                                        className: I.doesNot,
                                                        children: e
                                                    },
                                                    t
                                                )
                                        })
                              })
                          ]
                      });
            })(),
            A.filter((e) => !c || null == e.checked || !e.checked).map((e, t) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [(0, i.jsx)(N, { ...e }), t < A.length - 1 ? (0, i.jsx)('hr', { className: I.separator }) : null]
                    },
                    ''.concat(e.name)
                )
            )
        ]
    });
};
