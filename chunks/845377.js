(n.d(t, { Z: () => E }), n(953529), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(498607),
    o = n.n(a),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    g = n(755721),
    p = n(481060),
    f = n(984933),
    h = n(63063),
    x = n(709054),
    b = n(434404),
    j = n(118215),
    v = n(981631),
    _ = n(388032),
    O = n(252151);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = (e) => {
    let { name: t, failingName: n, description: i, checked: l, pending: s, pendingDescription: a, failingDescription: o } = e,
        c = t,
        d = null,
        u = null;
    return (
        s
            ? ((d = (0, r.jsx)(p.P4T, {
                  size: 'custom',
                  color: m.Z.unsafe_rawColors.YELLOW_300.css,
                  width: 20,
                  height: 20
              })),
              (u = null != a ? a : i))
            : l
              ? ((d = (0, r.jsx)(p.XZJ, {
                    readOnly: !0,
                    shape: p.XZJ.Shapes.ROUND,
                    size: 20,
                    type: p.XZJ.Types.INVERTED,
                    value: !0
                })),
                (u = i))
              : ((d = (0, r.jsx)(p.k$p, {
                    size: 'custom',
                    color: m.Z.unsafe_rawColors.RED_400.css,
                    width: 20,
                    height: 20
                })),
                (c = null != n ? n : t),
                (u = null != o ? o : i)),
        (0, r.jsxs)('div', {
            className: O.checklistItem,
            children: [
                (0, r.jsx)('div', {
                    className: O.checklistIcon,
                    children: d
                }),
                (0, r.jsxs)('div', {
                    className: O.checklistText,
                    children: [
                        (0, r.jsx)(p.X6q, {
                            variant: 'heading-md/semibold',
                            children: c
                        }),
                        (0, r.jsx)(p.Text, {
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
        [m, E] = (0, u.Wu)([j.ZP], () => [j.ZP.getDiscoveryChecklist(l), j.ZP.isLoading()], [l]),
        { nsfwProperties: S } = null != m ? m : {},
        T = null == t ? void 0 : t.features.has(v.oNc.PARTNERED),
        P = null == S ? void 0 : S.channels_banned_keywords,
        w = (0, u.e7)(
            [f.ZP],
            () => {
                var e, n, r;
                if (null == P) return [];
                let i = null != (n = (null != (e = f.ZP.getChannels(t.id)) ? e : {})[f.sH]) ? n : [],
                    l = null != (r = null == i ? void 0 : i.map((e) => e.channel).reduce((e, t) => y(C({}, e), { [t.id]: t }), {})) ? r : {};
                return null == P
                    ? []
                    : Object.entries(P).map((e) => {
                          let [t, n] = e;
                          return [l[t], n];
                      });
            },
            [t.id, P],
            I
        );
    if (E || null == m)
        return (0, r.jsxs)('div', {
            className: s()(O.container, O.loaderContainer, a),
            children: [
                (0, r.jsx)(p.X6q, {
                    className: O.loadingText,
                    variant: 'heading-md/semibold',
                    color: 'header-secondary',
                    children: _.intl.string(_.t.e1gm0d)
                }),
                (0, r.jsx)(p.$jN, { className: O.__invalid_spinner })
            ]
        });
    let R = T ? _.t['WH+1Y2'] : _.t.a4MYDA,
        Z = [
            {
                name: _.intl.string(_.t.yvk9p6),
                failingName: _.intl.string(_.t['IY/UT0']),
                description: _.intl.string(_.t.hSLSMz),
                failingDescription: _.intl.format(_.t.odsGg4, {
                    termsURL: v.EYA.TERMS,
                    guidelinesURL: h.Z.getArticleURL(v.BhN.PUBLIC_GUILD_GUILDLINES)
                }),
                checked: null == m ? void 0 : m.safeEnvironment
            },
            {
                name: _.intl.formatToPlainString(_.t.NYovAw, { minMembers: m.minimumGuildSize }),
                failingName: _.intl.formatToPlainString(_.t.wvJwYm, { minMembers: m.minimumGuildSize.toLocaleString() }),
                description: null,
                failingDescription: _.intl.format(R, { minMembers: m.minimumGuildSize.toLocaleString() }),
                checked: null == m ? void 0 : m.size
            },
            {
                name: _.intl.string(_.t.PtxOCA),
                failingName: _.intl.string(_.t.JPF5IC),
                description: _.intl.formatToPlainString(_.t.VT0bQE, { minimumGuildAge: Math.ceil(m.minimumGuildAge / 7) }),
                failingDescription: _.intl.formatToPlainString(_.t.jYwM1d, {
                    minimumGuildAge: Math.ceil(m.minimumGuildAge / 7),
                    passDate: d()(x.default.extractTimestamp(l)).add(m.minimumGuildAge, 'days').format('LL')
                }),
                checked: null == m ? void 0 : m.age
            },
            {
                name: (null == m ? void 0 : m.healthScorePending) ? _.intl.string(_.t.G77ud3) : _.intl.string(_.t['95nW0N']),
                failingName: _.intl.string(_.t['+GHxPz']),
                description: _.intl.string(_.t.rTWJwc),
                failingDescription: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.Text, {
                            color: 'text-muted',
                            className: O.healthFailingDescription,
                            variant: 'text-sm/normal',
                            children: _.intl.string(_.t.LjqS0N)
                        }),
                        (null == m ? void 0 : m.engagementHealthy)
                            ? null
                            : (0, r.jsx)(p.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/normal',
                                  children: _.intl.string(_.t['X8Lt7+'])
                              }),
                        (null == m ? void 0 : m.retentionHealthy)
                            ? null
                            : (0, r.jsx)(p.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/normal',
                                  children: _.intl.string(_.t['esdy8/'])
                              }),
                        (() => {
                            if (null == m || null == m.healthScore) return !1;
                            let { retentionHealthy: e, engagementHealthy: t, healthScore: n } = m,
                                { avg_nonnew_participators: r, avg_nonnew_communicators: i, perc_ret_w1_intentful: l } = n;
                            return (!e && null != l) || (!t && null != r && null != i);
                        })() &&
                            (0, r.jsx)(g.zx, {
                                className: O.detailsButton,
                                look: g.zx.Looks.LINK,
                                size: g.zx.Sizes.NONE,
                                color: g.zx.Colors.LINK,
                                onClick: () =>
                                    (0, p.ZDy)(async () => {
                                        let { default: e } = await n.e('23401').then(n.bind(n, 666599));
                                        return (t) => (0, r.jsx)(e, y(C({}, t), { guildChecklist: m }));
                                    }),
                                children: _.intl.string(_.t.qyiTHx)
                            })
                    ]
                }),
                pendingDescription: (null == m ? void 0 : m.size)
                    ? _.intl.format(_.t.ALtXIC, {
                          checkBackHook: (e, t) =>
                              (0, r.jsx)(
                                  'strong',
                                  {
                                      className: O.healthPending,
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
                failingDescription: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (null == S ? void 0 : S.channels) != null
                            ? (0, r.jsx)(p.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: _.intl.format(_.t['T+DQYW'], {
                                      channelHook: (e, t) =>
                                          (0, r.jsx)(
                                              'span',
                                              {
                                                  className: O.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                              })
                            : null,
                        w.length > 0
                            ? (0, r.jsx)('div', {
                                  className: O.indent,
                                  children: w.map((e) => {
                                      let [t, n] = e;
                                      return null != t
                                          ? (0, r.jsxs)(
                                                p.Text,
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
                        (null == S ? void 0 : S.name) != null
                            ? (0, r.jsx)(p.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: _.intl.format(_.t.KVD8Ex, {
                                      nameHook: (e, t) =>
                                          (0, r.jsx)(
                                              'span',
                                              {
                                                  className: O.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                              })
                            : null,
                        (null == S ? void 0 : S.description) != null
                            ? (0, r.jsx)(p.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: _.intl.format(_.t['/W9Ken'], {
                                      descriptionHook: (e, t) =>
                                          (0, r.jsx)(
                                              'span',
                                              {
                                                  className: O.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                              })
                            : null
                    ]
                }),
                checked: null == S || 0 === Object.keys(S).length
            },
            {
                name: _.intl.string(_.t.lSXnLy),
                failingName: _.intl.string(_.t.awA3PT),
                description: _.intl.string(_.t.QbBJ7e),
                failingDescription: _.intl.format(_.t.kBXInZ, { onClick: () => b.Z.setSection(v.pNK.SAFETY, v.KsC.SAFETY_PERMISSIONS) }),
                checked: null == m ? void 0 : m.protected
            }
        ];
    return (0, r.jsxs)('div', {
        className: s()(O.container, a),
        children: [
            (() => {
                let e = (null == m ? void 0 : m.sufficient) ? n(909425) : n(177266);
                return null == o
                    ? null
                    : (0, r.jsxs)('div', {
                          className: O.header,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: e,
                                  className: O.headerIcon,
                                  width: 40
                              }),
                              o
                          ]
                      });
            })(),
            Z.filter((e) => !c || null == e.checked || !e.checked).map((e, t) =>
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [(0, r.jsx)(N, C({}, e)), t < Z.length - 1 ? (0, r.jsx)('hr', { className: O.separator }) : null]
                    },
                    ''.concat(e.name)
                )
            )
        ]
    });
};
