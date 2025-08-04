(n.d(t, { P: () => j }), n(290780), n(388685));
var i = n(255367);
n(73800);
var r = n(524437),
    s = n(481060),
    a = n(168107),
    l = n(480916),
    o = n(247206),
    c = n(656577),
    d = n(294602),
    u = n(249996),
    m = n(880257),
    p = n(63063),
    g = n(838436),
    h = n(526761),
    f = n(726985),
    b = n(981631),
    x = n(388032),
    _ = n(298136);
function j(e) {
    var t;
    let { isNested: n = !1 } = e,
        j = null == (t = (0, m.Z)()) || t,
        { explicitContentGuilds: C, explicitContentFriendDm: E, explicitContentNonFriendDm: O } = (0, d.B)(),
        v = (e) => {
            let t = Object.values(e);
            if ((0, o.Ks)() && t.includes(r.Q4.SHOW)) return void a.Z.showAgeVerificationGetStartedModal(l.cU.SENSITIVE_MEDIA_FILTER_SETTINGS);
            (0, c.zj)(e);
        },
        S = [
            {
                value: r.Q4.BLUR,
                label: x.intl.string(x.t.S49UaW)
            },
            {
                value: r.Q4.BLOCK,
                label: x.intl.string(x.t['D/157e'])
            }
        ],
        T = [
            {
                value: r.Q4.BLUR,
                label: x.intl.string(x.t.S49UaW)
            }
        ],
        N = {
            value: r.Q4.SHOW,
            label: x.intl.string(x.t['5k5OFh'])
        };
    return (
        j && (S.unshift(N), T.unshift(N)),
        (0, i.jsx)(g.U, {
            setting: f.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: h.FY.EXPLICIT_MEDIA_REDACTION_V2,
            children: n
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)('div', {
                              className: _.selectItemRow,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      children: x.intl.string(x.t['+uI23N'])
                                  }),
                                  (0, i.jsx)(s.q4e, {
                                      look: s.qQH.CUSTOM,
                                      options: S,
                                      value: E,
                                      onChange: (e) => v({ explicitContentFriendDm: e }),
                                      renderOptionValue: (e) => {
                                          let [t] = e;
                                          return (0, i.jsx)(u.Z, { option: t });
                                      },
                                      renderOptionLabel: (e) => (0, i.jsx)(u.Z, { option: e })
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: _.selectItemRow,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      children: x.intl.string(x.t['Yh+HX1'])
                                  }),
                                  (0, i.jsx)(s.q4e, {
                                      look: s.qQH.CUSTOM,
                                      options: S,
                                      value: O,
                                      onChange: (e) => v({ explicitContentNonFriendDm: e }),
                                      renderOptionValue: (e) => {
                                          let [t] = e;
                                          return (0, i.jsx)(u.Z, { option: t });
                                      },
                                      renderOptionLabel: (e) => (0, i.jsx)(u.Z, { option: e })
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: _.selectItemRow,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      color: j ? 'text-primary' : 'text-muted',
                                      children: x.intl.string(x.t['FP+a4+'])
                                  }),
                                  (0, i.jsx)(s.q4e, {
                                      look: s.qQH.CUSTOM,
                                      options: T,
                                      value: C,
                                      onChange: (e) => v({ explicitContentGuilds: e }),
                                      isDisabled: !j,
                                      renderOptionValue: (e) => {
                                          let [t] = e;
                                          return (0, i.jsx)(u.Z, { option: t });
                                      },
                                      renderOptionLabel: (e) => (0, i.jsx)(u.Z, { option: e })
                                  })
                              ]
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-muted',
                              children: x.intl.string(x.t.Wnojv7)
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.H, {
                              header: x.intl.string(x.t['c/UOwM']),
                              description: x.intl.format(x.t.ZUvrwM, { learnMoreLink: p.Z.getArticleURL(b.BhN.EXPLICIT_MEDIA_REDACTION) })
                          }),
                          (0, i.jsx)(s.xJW, {
                              tag: s.RB0.H3,
                              title: x.intl.string(x.t['6k0AgI']),
                              titleClassName: _.selectItemTitle,
                              children: (0, i.jsx)(s.q4e, {
                                  options: S,
                                  value: E,
                                  onChange: (e) => v({ explicitContentFriendDm: e })
                              })
                          }),
                          (0, i.jsx)(s.xJW, {
                              tag: s.RB0.H3,
                              title: x.intl.string(x.t.D2EGSk),
                              titleClassName: _.selectItemTitle,
                              children: (0, i.jsx)(s.q4e, {
                                  options: S,
                                  value: O,
                                  onChange: (e) => v({ explicitContentNonFriendDm: e })
                              })
                          }),
                          (0, i.jsx)(s.xJW, {
                              tag: s.RB0.H3,
                              title: x.intl.string(x.t['FP+a4+']),
                              titleClassName: _.selectItemTitle,
                              children: (0, i.jsx)(s.q4e, {
                                  options: T,
                                  value: C,
                                  onChange: (e) => v({ explicitContentGuilds: e }),
                                  isDisabled: !j
                              })
                          })
                      ]
                  })
        })
    );
}
