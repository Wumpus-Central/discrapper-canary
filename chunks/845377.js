n.d(t, { Z: () => I }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(498607),
    o = n.n(l),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    g = n(481060),
    p = n(984933),
    h = n(63063),
    f = n(709054),
    b = n(434404),
    x = n(118215),
    j = n(981631),
    N = n(388032),
    _ = n(252151);
function v(e) {
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
let O = (e) => {
    let { name: t, failingName: n, description: i, checked: s, pending: a, pendingDescription: l, failingDescription: o } = e,
        c = t,
        d = null,
        u = null;
    return (
        a
            ? ((d = (0, r.jsx)(g.P4T, {
                  size: 'custom',
                  color: m.Z.unsafe_rawColors.YELLOW_300.css,
                  width: 20,
                  height: 20
              })),
              (u = null != l ? l : i))
            : s
              ? ((d = (0, r.jsx)(g.XZJ, {
                    readOnly: !0,
                    shape: g.XZJ.Shapes.ROUND,
                    size: 20,
                    type: g.XZJ.Types.INVERTED,
                    value: !0
                })),
                (u = i))
              : ((d = (0, r.jsx)(g.k$p, {
                    size: 'custom',
                    color: m.Z.unsafe_rawColors.RED_400.css,
                    width: 20,
                    height: 20
                })),
                (c = null != n ? n : t),
                (u = null != o ? o : i)),
        (0, r.jsxs)('div', {
            className: _.checklistItem,
            children: [
                (0, r.jsx)('div', {
                    className: _.checklistIcon,
                    children: d
                }),
                (0, r.jsxs)('div', {
                    className: _.checklistText,
                    children: [
                        (0, r.jsx)(g.X6q, {
                            variant: 'heading-md/semibold',
                            children: c
                        }),
                        (0, r.jsx)(g.Text, {
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
function y(e, t) {
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
    let { guild: t, guildId: s, className: l, headerContent: o, failedItemsOnly: c = !1 } = e,
        [m, I] = (0, u.Wu)([x.ZP], () => [x.ZP.getDiscoveryChecklist(s), x.ZP.isLoading()], [s]),
        { nsfwProperties: E } = null != m ? m : {},
        S = null == t ? void 0 : t.hasFeature(j.oNc.PARTNERED),
        T = null == E ? void 0 : E.channels_banned_keywords,
        P = (0, u.e7)(
            [p.ZP],
            () => {
                var e, n, r;
                if (null == T) return [];
                let i = null != (n = (null != (e = p.ZP.getChannels(t.id)) ? e : {})[p.sH]) ? n : [],
                    s = null != (r = null == i ? void 0 : i.map((e) => e.channel).reduce((e, t) => C(v({}, e), { [t.id]: t }), {})) ? r : {};
                return null == T
                    ? []
                    : Object.entries(T).map((e) => {
                          let [t, n] = e;
                          return [s[t], n];
                      });
            },
            [t.id, T],
            y
        );
    if (I || null == m)
        return (0, r.jsxs)('div', {
            className: a()(_.container, _.loaderContainer, l),
            children: [
                (0, r.jsx)(g.X6q, {
                    className: _.loadingText,
                    variant: 'heading-md/semibold',
                    color: 'header-secondary',
                    children: N.NW.string(N.t.e1gm0d)
                }),
                (0, r.jsx)(g.$jN, { className: _.__invalid_spinner })
            ]
        });
    let w = S ? N.t['WH+1Y2'] : N.t.a4MYDA,
        R = [
            {
                name: N.NW.string(N.t.yvk9p6),
                failingName: N.NW.string(N.t['IY/UT0']),
                description: N.NW.string(N.t.hSLSMz),
                failingDescription: N.NW.format(N.t.odsGg4, {
                    termsURL: j.EYA.TERMS,
                    guidelinesURL: h.Z.getArticleURL(j.BhN.PUBLIC_GUILD_GUILDLINES)
                }),
                checked: null == m ? void 0 : m.safeEnvironment
            },
            {
                name: N.NW.formatToPlainString(N.t.NYovAw, { minMembers: m.minimumGuildSize }),
                failingName: N.NW.formatToPlainString(N.t.wvJwYm, { minMembers: m.minimumGuildSize.toLocaleString() }),
                description: null,
                failingDescription: N.NW.format(w, { minMembers: m.minimumGuildSize.toLocaleString() }),
                checked: null == m ? void 0 : m.size
            },
            {
                name: N.NW.string(N.t.PtxOCA),
                failingName: N.NW.string(N.t.JPF5IC),
                description: N.NW.formatToPlainString(N.t.VT0bQE, { minimumGuildAge: Math.ceil(m.minimumGuildAge / 7) }),
                failingDescription: N.NW.formatToPlainString(N.t.jYwM1d, {
                    minimumGuildAge: Math.ceil(m.minimumGuildAge / 7),
                    passDate: d()(f.default.extractTimestamp(s)).add(m.minimumGuildAge, 'days').format('LL')
                }),
                checked: null == m ? void 0 : m.age
            },
            {
                name: (null == m ? void 0 : m.healthScorePending) ? N.NW.string(N.t.G77ud3) : N.NW.string(N.t['95nW0N']),
                failingName: N.NW.string(N.t['+GHxPz']),
                description: N.NW.string(N.t.rTWJwc),
                failingDescription: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.Text, {
                            color: 'text-muted',
                            className: _.healthFailingDescription,
                            variant: 'text-sm/normal',
                            children: N.NW.string(N.t.LjqS0N)
                        }),
                        (null == m ? void 0 : m.engagementHealthy)
                            ? null
                            : (0, r.jsx)(g.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/normal',
                                  children: N.NW.string(N.t['X8Lt7+'])
                              }),
                        (null == m ? void 0 : m.retentionHealthy)
                            ? null
                            : (0, r.jsx)(g.Text, {
                                  color: 'text-danger',
                                  variant: 'text-sm/normal',
                                  children: N.NW.string(N.t['esdy8/'])
                              }),
                        (() => {
                            if (null == m || null == m.healthScore) return !1;
                            let { retentionHealthy: e, engagementHealthy: t, healthScore: n } = m,
                                { avg_nonnew_participators: r, avg_nonnew_communicators: i, perc_ret_w1_intentful: s } = n;
                            return (!e && null != s) || (!t && null != r && null != i);
                        })() &&
                            (0, r.jsx)(g.zxk, {
                                className: _.detailsButton,
                                look: g.zxk.Looks.LINK,
                                size: g.zxk.Sizes.NONE,
                                color: g.zxk.Colors.LINK,
                                onClick: () =>
                                    (0, g.ZDy)(async () => {
                                        let { default: e } = await n.e('23401').then(n.bind(n, 666599));
                                        return (t) => (0, r.jsx)(e, C(v({}, t), { guildChecklist: m }));
                                    }),
                                children: N.NW.string(N.t.qyiTHx)
                            })
                    ]
                }),
                pendingDescription: (null == m ? void 0 : m.size)
                    ? N.NW.format(N.t.ALtXIC, {
                          checkBackHook: (e, t) =>
                              (0, r.jsx)(
                                  'strong',
                                  {
                                      className: _.healthPending,
                                      children: e
                                  },
                                  t
                              )
                      })
                    : N.NW.formatToPlainString(N.t['6S/96O'], { minMembers: 200 }),
                checked: null == m ? void 0 : m.healthy,
                pending: null == m ? void 0 : m.healthScorePending
            },
            {
                name: N.NW.string(N.t['/cghSE']),
                failingName: N.NW.string(N.t['0HJNa2']),
                description: N.NW.string(N.t.Pbu9AQ),
                failingDescription: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (null == E ? void 0 : E.channels) != null
                            ? (0, r.jsx)(g.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: N.NW.format(N.t['T+DQYW'], {
                                      channelHook: (e, t) =>
                                          (0, r.jsx)(
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
                        P.length > 0
                            ? (0, r.jsx)('div', {
                                  className: _.indent,
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
                                  children: N.NW.format(N.t.KVD8Ex, {
                                      nameHook: (e, t) =>
                                          (0, r.jsx)(
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
                        (null == E ? void 0 : E.description) != null
                            ? (0, r.jsx)(g.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: N.NW.format(N.t['/W9Ken'], {
                                      descriptionHook: (e, t) =>
                                          (0, r.jsx)(
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
                checked: null == E || 0 === Object.keys(E).length
            },
            {
                name: N.NW.string(N.t.lSXnLy),
                failingName: N.NW.string(N.t.awA3PT),
                description: N.NW.string(N.t.QbBJ7e),
                failingDescription: N.NW.format(N.t.kBXInZ, { onClick: () => b.Z.setSection(j.pNK.SAFETY, j.KsC.SAFETY_PERMISSIONS) }),
                checked: null == m ? void 0 : m.protected
            }
        ];
    return (0, r.jsxs)('div', {
        className: a()(_.container, l),
        children: [
            (() => {
                let e = (null == m ? void 0 : m.sufficient) ? n(909425) : n(177266);
                return null == o
                    ? null
                    : (0, r.jsxs)('div', {
                          className: _.header,
                          children: [
                              (0, r.jsx)('img', {
                                  alt: '',
                                  src: e,
                                  className: _.headerIcon,
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
                        children: [(0, r.jsx)(O, v({}, e)), t < R.length - 1 ? (0, r.jsx)('hr', { className: _.separator }) : null]
                    },
                    ''.concat(e.name)
                )
            )
        ]
    });
};
