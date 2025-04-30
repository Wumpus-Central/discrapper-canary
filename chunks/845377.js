n.d(t, { Z: () => I }), n(953529), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(498607),
    o = n.n(a),
    c = n(913527),
    u = n.n(c),
    d = n(442837),
    m = n(692547),
    g = n(481060),
    p = n(984933),
    h = n(63063),
    f = n(709054),
    x = n(434404),
    b = n(118215),
    j = n(981631),
    _ = n(388032),
    v = n(252151);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function C(e, t) {
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
let y = (e) => {
    let { name: t, failingName: n, description: i, checked: l, pending: s, pendingDescription: a, failingDescription: o } = e,
        c = t,
        u = null,
        d = null;
    return (
        s
            ? ((u = (0, r.jsx)(g.P4T, {
                  size: 'custom',
                  color: m.Z.unsafe_rawColors.YELLOW_300.css,
                  width: 20,
                  height: 20
              })),
              (d = null != a ? a : i))
            : l
              ? ((u = (0, r.jsx)(g.XZJ, {
                    readOnly: !0,
                    shape: g.XZJ.Shapes.ROUND,
                    size: 20,
                    type: g.XZJ.Types.INVERTED,
                    value: !0
                })),
                (d = i))
              : ((u = (0, r.jsx)(g.k$p, {
                    size: 'custom',
                    color: m.Z.unsafe_rawColors.RED_400.css,
                    width: 20,
                    height: 20
                })),
                (c = null != n ? n : t),
                (d = null != o ? o : i)),
        (0, r.jsxs)('div', {
            className: v.checklistItem,
            children: [
                (0, r.jsx)('div', {
                    className: v.checklistIcon,
                    children: u
                }),
                (0, r.jsxs)('div', {
                    className: v.checklistText,
                    children: [
                        (0, r.jsx)(g.X6q, {
                            variant: 'heading-md/semibold',
                            children: c
                        }),
                        (0, r.jsx)(g.Text, {
                            color: 'text-muted',
                            variant: 'text-sm/normal',
                            children: d
                        })
                    ]
                })
            ]
        })
    );
};
function N(e, t) {
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
let I = (e) => {
    let { guild: t, guildId: l, className: a, headerContent: o, failedItemsOnly: c = !1 } = e,
        [m, I] = (0, d.Wu)([b.ZP], () => [b.ZP.getDiscoveryChecklist(l), b.ZP.isLoading()], [l]),
        { nsfwProperties: E } = null != m ? m : {},
        S = null == t ? void 0 : t.hasFeature(j.oNc.PARTNERED),
        T = null == E ? void 0 : E.channels_banned_keywords,
        P = (0, d.e7)(
            [p.ZP],
            () => {
                var e, n, r;
                if (null == T) return [];
                let i = null != (n = (null != (e = p.ZP.getChannels(t.id)) ? e : {})[p.sH]) ? n : [],
                    l = null != (r = null == i ? void 0 : i.map((e) => e.channel).reduce((e, t) => C(O({}, e), { [t.id]: t }), {})) ? r : {};
                return null == T
                    ? []
                    : Object.entries(T).map((e) => {
                          let [t, n] = e;
                          return [l[t], n];
                      });
            },
            [t.id, T],
            N
        );
    if (I || null == m)
        return (0, r.jsxs)('div', {
            className: s()(v.container, v.loaderContainer, a),
            children: [
                (0, r.jsx)(g.X6q, {
                    className: v.loadingText,
                    variant: 'heading-md/semibold',
                    color: 'header-secondary',
                    children: _.intl.string(_.t.e1gm0d)
                }),
                (0, r.jsx)(g.$jN, { className: v.__invalid_spinner })
            ]
        });
    let w = S ? _.t['WH+1Y2'] : _.t.a4MYDA,
        R = [
            {
                name: _.intl.string(_.t.yvk9p6),
                failingName: _.intl.string(_.t['IY/UT0']),
                description: _.intl.string(_.t.hSLSMz),
                failingDescription: _.intl.format(_.t.odsGg4, {
                    termsURL: j.EYA.TERMS,
                    guidelinesURL: h.Z.getArticleURL(j.BhN.PUBLIC_GUILD_GUILDLINES)
                }),
                checked: null == m ? void 0 : m.safeEnvironment
            },
            {
                name: _.intl.formatToPlainString(_.t.NYovAw, { minMembers: m.minimumGuildSize }),
                failingName: _.intl.formatToPlainString(_.t.wvJwYm, { minMembers: m.minimumGuildSize.toLocaleString() }),
                description: null,
                failingDescription: _.intl.format(w, { minMembers: m.minimumGuildSize.toLocaleString() }),
                checked: null == m ? void 0 : m.size
            },
            {
                name: _.intl.string(_.t.PtxOCA),
                failingName: _.intl.string(_.t.JPF5IC),
                description: _.intl.formatToPlainString(_.t.VT0bQE, { minimumGuildAge: Math.ceil(m.minimumGuildAge / 7) }),
                failingDescription: _.intl.formatToPlainString(_.t.jYwM1d, {
                    minimumGuildAge: Math.ceil(m.minimumGuildAge / 7),
                    passDate: u()(f.default.extractTimestamp(l)).add(m.minimumGuildAge, 'days').format('LL')
                }),
                checked: null == m ? void 0 : m.age
            },
            {
                name: (null == m ? void 0 : m.healthScorePending) ? _.intl.string(_.t.G77ud3) : _.intl.string(_.t['95nW0N']),
                failingName: _.intl.string(_.t['+GHxPz']),
                description: _.intl.string(_.t.rTWJwc),
                failingDescription: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.Text, {
                            color: 'text-muted',
                            className: v.healthFailingDescription,
                            variant: 'text-sm/normal',
                            children: _.intl.string(_.t.LjqS0N)
                        }),
                        (null == m ? void 0 : m.engagementHealthy)
                            ? null
                            : (0, r.jsx)(g.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/normal',
                                  children: _.intl.string(_.t['X8Lt7+'])
                              }),
                        (null == m ? void 0 : m.retentionHealthy)
                            ? null
                            : (0, r.jsx)(g.Text, {
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
                            (0, r.jsx)(g.zxk, {
                                className: v.detailsButton,
                                look: g.zxk.Looks.LINK,
                                size: g.zxk.Sizes.NONE,
                                color: g.zxk.Colors.LINK,
                                onClick: () =>
                                    (0, g.ZDy)(async () => {
                                        let { default: e } = await n.e('23401').then(n.bind(n, 666599));
                                        return (t) => (0, r.jsx)(e, C(O({}, t), { guildChecklist: m }));
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
                                      className: v.healthPending,
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
                        (null == E ? void 0 : E.channels) != null
                            ? (0, r.jsx)(g.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: _.intl.format(_.t['T+DQYW'], {
                                      channelHook: (e, t) =>
                                          (0, r.jsx)(
                                              'span',
                                              {
                                                  className: v.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                              })
                            : null,
                        P.length > 0
                            ? (0, r.jsx)('div', {
                                  className: v.indent,
                                  children: P.map((e) => {
                                      let [t, n] = e;
                                      return null != t
                                          ? (0, r.jsxs)(
                                                g.Text,
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
                        (null == E ? void 0 : E.name) != null
                            ? (0, r.jsx)(g.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: _.intl.format(_.t.KVD8Ex, {
                                      nameHook: (e, t) =>
                                          (0, r.jsx)(
                                              'span',
                                              {
                                                  className: v.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                              })
                            : null,
                        (null == E ? void 0 : E.description) != null
                            ? (0, r.jsx)(g.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: _.intl.format(_.t['/W9Ken'], {
                                      descriptionHook: (e, t) =>
                                          (0, r.jsx)(
                                              'span',
                                              {
                                                  className: v.doesNot,
                                                  children: e
                                              },
                                              t
                                          )
                                  })
                              })
                            : null
                    ]
                }),
                checked: null == E || 0 === Object.keys(E).length
            },
            {
                name: _.intl.string(_.t.lSXnLy),
                failingName: _.intl.string(_.t.awA3PT),
                description: _.intl.string(_.t.QbBJ7e),
                failingDescription: _.intl.format(_.t.kBXInZ, { onClick: () => x.Z.setSection(j.pNK.SAFETY, j.KsC.SAFETY_PERMISSIONS) }),
                checked: null == m ? void 0 : m.protected
            }
        ];
    return (0, r.jsxs)('div', {
        className: s()(v.container, a),
        children: [
            (() => {
                let e = (null == m ? void 0 : m.sufficient) ? n(909425) : n(177266);
                return null == o
                    ? null
                    : (0, r.jsxs)('div', {
                          className: v.header,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: e,
                                  className: v.headerIcon,
                                  width: 40
                              }),
                              o
                          ]
                      });
            })(),
            R.filter((e) => !c || null == e.checked || !e.checked).map((e, t) =>
                (0, r.jsxs)(
                    i.Fragment,
                    {
                        children: [(0, r.jsx)(y, O({}, e)), t < R.length - 1 ? (0, r.jsx)('hr', { className: v.separator }) : null]
                    },
                    ''.concat(e.name)
                )
            )
        ]
    });
};
