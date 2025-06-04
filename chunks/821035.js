n.d(t, { P: () => x }), n(290780);
var i = n(255367);
n(73800);
var r = n(524437),
    s = n(481060),
    l = n(168107),
    a = n(480916),
    o = n(247206),
    c = n(656577),
    d = n(294602),
    u = n(880257),
    m = n(63063),
    g = n(838436),
    p = n(526761),
    h = n(726985),
    f = n(981631),
    b = n(388032),
    _ = n(298136);
function x(e) {
    var t;
    let { isNested: n = !1 } = e,
        x = null == (t = (0, u.Z)()) || t,
        { explicitContentGuilds: E, explicitContentFriendDm: C, explicitContentNonFriendDm: j } = (0, d.B)(),
        O = (e) => {
            let t = Object.values(e);
            if ((0, o.Ks)() && t.includes(r.Q4.SHOW)) return void l.Z.showAgeVerificationGetStartedModal(a.cU.SENSITIVE_MEDIA_FILTER_SETTINGS);
            (0, c.zj)(e);
        },
        S = [
            {
                value: r.Q4.BLUR,
                label: b.intl.string(b.t.S49UaW)
            },
            {
                value: r.Q4.BLOCK,
                label: b.intl.string(b.t['D/157e'])
            }
        ],
        v = [
            {
                value: r.Q4.BLUR,
                label: b.intl.string(b.t.S49UaW)
            }
        ],
        T = {
            value: r.Q4.SHOW,
            label: b.intl.string(b.t['5k5OFh'])
        };
    return (
        x && (S.unshift(T), v.unshift(T)),
        (0, i.jsx)(g.U, {
            setting: h.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: p.FY.EXPLICIT_MEDIA_REDACTION_V2,
            children: n
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsxs)('div', {
                              className: _.selectItemRow,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      children: b.intl.string(b.t['6k0AgI'])
                                  }),
                                  (0, i.jsx)(s.q4e, {
                                      look: s.qQH.CUSTOM,
                                      options: S,
                                      value: C,
                                      onChange: (e) => O({ explicitContentFriendDm: e })
                                  })
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: _.selectItemRow,
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      children: b.intl.string(b.t.D2EGSk)
                                  }),
                                  (0, i.jsx)(s.q4e, {
                                      look: s.qQH.CUSTOM,
                                      options: S,
                                      value: j,
                                      onChange: (e) => O({ explicitContentNonFriendDm: e })
                                  })
                              ]
                          }),
                          x &&
                              (0, i.jsxs)('div', {
                                  className: _.selectItemRow,
                                  children: [
                                      (0, i.jsx)(s.Text, {
                                          variant: 'text-md/medium',
                                          children: b.intl.string(b.t['FP+a4+'])
                                      }),
                                      (0, i.jsx)(s.q4e, {
                                          look: s.qQH.CUSTOM,
                                          options: v,
                                          value: E,
                                          onChange: (e) => O({ explicitContentGuilds: e })
                                      })
                                  ]
                              }),
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-muted',
                              children: b.intl.string(b.t.Wnojv7)
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(g.H, {
                              header: b.intl.string(b.t['c/UOwM']),
                              description: b.intl.format(b.t.ZUvrwM, { learnMoreLink: m.Z.getArticleURL(f.BhN.EXPLICIT_MEDIA_REDACTION) })
                          }),
                          (0, i.jsx)(s.xJW, {
                              tag: s.RB0.H3,
                              title: b.intl.string(b.t['6k0AgI']),
                              titleClassName: _.selectItemTitle,
                              children: (0, i.jsx)(s.q4e, {
                                  options: S,
                                  value: C,
                                  onChange: (e) => O({ explicitContentFriendDm: e })
                              })
                          }),
                          (0, i.jsx)(s.xJW, {
                              tag: s.RB0.H3,
                              title: b.intl.string(b.t.D2EGSk),
                              titleClassName: _.selectItemTitle,
                              children: (0, i.jsx)(s.q4e, {
                                  options: S,
                                  value: j,
                                  onChange: (e) => O({ explicitContentNonFriendDm: e })
                              })
                          }),
                          x &&
                              (0, i.jsx)(s.xJW, {
                                  tag: s.RB0.H3,
                                  title: b.intl.string(b.t['FP+a4+']),
                                  titleClassName: _.selectItemTitle,
                                  children: (0, i.jsx)(s.q4e, {
                                      options: v,
                                      value: E,
                                      onChange: (e) => O({ explicitContentGuilds: e })
                                  })
                              })
                      ]
                  })
        })
    );
}
