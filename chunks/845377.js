n(47120), n(724458);
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
    f = n(434404),
    C = n(118215),
    v = n(981631),
    N = n(388032),
    _ = n(555437);
let I = (e) => {
    let { name: t, failingName: n, description: r, checked: l, pending: s, pendingDescription: a, failingDescription: o } = e,
        c = t,
        d = null,
        u = null;
    return (
        s
            ? ((d = (0, i.jsx)(h.CircleWarningIcon, {
                  size: 'custom',
                  color: m.Z.unsafe_rawColors.YELLOW_300.css,
                  width: 20,
                  height: 20
              })),
              (u = null != a ? a : r))
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
            className: _.checklistItem,
            children: [
                (0, i.jsx)('div', {
                    className: _.checklistIcon,
                    children: d
                }),
                (0, i.jsxs)('div', {
                    className: _.checklistText,
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
    let { guild: t, guildId: l, className: a, headerContent: o, failedItemsOnly: c = !1 } = e,
        [m, j] = (0, u.Wu)([C.ZP], () => [C.ZP.getDiscoveryChecklist(l), C.ZP.isLoading()], [l]),
        { nsfwProperties: b } = null != m ? m : {},
        E = null == t ? void 0 : t.hasFeature(v.oNc.PARTNERED),
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
            T
        );
    if (j || null == m)
        return (0, i.jsxs)('div', {
            className: s()(_.container, _.loaderContainer, a),
            children: [
                (0, i.jsx)(h.Heading, {
                    className: _.loadingText,
                    variant: 'heading-md/semibold',
                    color: 'header-secondary',
                    children: N.intl.string(N.t.e1gm0d)
                }),
                (0, i.jsx)(h.Spinner, { className: _.__invalid_spinner })
            ]
        });
    let y = E ? N.t['WH+1Y2'] : N.t.a4MYDA,
        A = [
            {
                name: N.intl.string(N.t.yvk9p6),
                failingName: N.intl.string(N.t['IY/UT0']),
                description: N.intl.string(N.t.hSLSMz),
                failingDescription: N.intl.format(N.t.odsGg4, {
                    termsURL: v.EYA.TERMS,
                    guidelinesURL: x.Z.getArticleURL(v.BhN.PUBLIC_GUILD_GUILDLINES)
                }),
                checked: null == m ? void 0 : m.safeEnvironment
            },
            {
                name: N.intl.formatToPlainString(N.t.NYovAw, { minMembers: m.minimumGuildSize }),
                failingName: N.intl.formatToPlainString(N.t.wvJwYm, { minMembers: m.minimumGuildSize.toLocaleString() }),
                description: null,
                failingDescription: N.intl.format(y, { minMembers: m.minimumGuildSize.toLocaleString() }),
                checked: null == m ? void 0 : m.size
            },
            {
                name: N.intl.string(N.t.PtxOCA),
                failingName: N.intl.string(N.t.JPF5IC),
                description: N.intl.formatToPlainString(N.t.VT0bQE, { minimumGuildAge: Math.ceil(m.minimumGuildAge / 7) }),
                failingDescription: N.intl.formatToPlainString(N.t.jYwM1d, {
                    minimumGuildAge: Math.ceil(m.minimumGuildAge / 7),
                    passDate: d()(p.default.extractTimestamp(l)).add(m.minimumGuildAge, 'days').format('LL')
                }),
                checked: null == m ? void 0 : m.age
            },
            {
                name: (null == m ? void 0 : m.healthScorePending) ? N.intl.string(N.t.G77ud3) : N.intl.string(N.t['95nW0N']),
                failingName: N.intl.string(N.t['+GHxPz']),
                description: N.intl.string(N.t.rTWJwc),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(h.Text, {
                            color: 'text-muted',
                            className: _.healthFailingDescription,
                            variant: 'text-sm/normal',
                            children: N.intl.string(N.t.LjqS0N)
                        }),
                        (null == m ? void 0 : m.engagementHealthy)
                            ? null
                            : (0, i.jsx)(h.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/normal',
                                  children: N.intl.string(N.t['X8Lt7+'])
                              }),
                        (null == m ? void 0 : m.retentionHealthy)
                            ? null
                            : (0, i.jsx)(h.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/normal',
                                  children: N.intl.string(N.t['esdy8/'])
                              }),
                        (() => {
                            if (null == m || null == m.healthScore) return !1;
                            let { retentionHealthy: e, engagementHealthy: t, healthScore: n } = m,
                                { avg_nonnew_participators: i, avg_nonnew_communicators: r, perc_ret_w1_intentful: l } = n;
                            return (!e && null != l) || (!t && null != i && null != r);
                        })() &&
                            (0, i.jsx)(h.Button, {
                                className: _.detailsButton,
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
                                children: N.intl.string(N.t.qyiTHx)
                            })
                    ]
                }),
                pendingDescription: (null == m ? void 0 : m.size)
                    ? N.intl.format(N.t.ALtXIC, {
                          checkBackHook: (e, t) =>
                              (0, i.jsx)(
                                  'strong',
                                  {
                                      className: _.healthPending,
                                      children: e
                                  },
                                  t
                              )
                      })
                    : N.intl.formatToPlainString(N.t['6S/96O'], { minMembers: 200 }),
                checked: null == m ? void 0 : m.healthy,
                pending: null == m ? void 0 : m.healthScorePending
            },
            {
                name: N.intl.string(N.t['/cghSE']),
                failingName: N.intl.string(N.t['0HJNa2']),
                description: N.intl.string(N.t.Pbu9AQ),
                failingDescription: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (null == b ? void 0 : b.channels) != null
                            ? (0, i.jsx)(h.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: N.intl.format(N.t['T+DQYW'], {
                                      channelHook: (e, t) =>
                                          (0, i.jsx)(
                                              'span',
                                              {
                                                  className: _.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                              })
                            : null,
                        R.length > 0
                            ? (0, i.jsx)('div', {
                                  className: _.indent,
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
                                  children: N.intl.format(N.t.KVD8Ex, {
                                      nameHook: (e, t) =>
                                          (0, i.jsx)(
                                              'span',
                                              {
                                                  className: _.doesNot,
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
                                  children: N.intl.format(N.t['/W9Ken'], {
                                      descriptionHook: (e, t) =>
                                          (0, i.jsx)(
                                              'span',
                                              {
                                                  className: _.doesNot,
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
                name: N.intl.string(N.t.lSXnLy),
                failingName: N.intl.string(N.t.awA3PT),
                description: N.intl.string(N.t.QbBJ7e),
                failingDescription: N.intl.format(N.t.kBXInZ, { onClick: () => f.Z.setSection(v.pNK.SAFETY, v.KsC.SAFETY_PERMISSIONS) }),
                checked: null == m ? void 0 : m.protected
            }
        ];
    return (0, i.jsxs)('div', {
        className: s()(_.container, a),
        children: [
            (() => {
                let e = (null == m ? void 0 : m.sufficient) ? n(909425) : n(177266);
                return null == o
                    ? null
                    : (0, i.jsxs)('div', {
                          className: _.header,
                          children: [
                              (0, i.jsx)('img', {
                                  alt: '',
                                  src: e,
                                  className: _.headerIcon,
                                  width: 40
                              }),
                              o
                          ]
                      });
            })(),
            A.filter((e) => !c || null == e.checked || !e.checked).map((e, t) =>
                (0, i.jsxs)(
                    r.Fragment,
                    {
                        children: [(0, i.jsx)(I, { ...e }), t < A.length - 1 ? (0, i.jsx)('hr', { className: _.separator }) : null]
                    },
                    ''.concat(e.name)
                )
            )
        ]
    });
};
