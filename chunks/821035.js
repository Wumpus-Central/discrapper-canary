n.d(t, { P: () => y }), n(290780), n(388685);
var r = n(951288);
n(647438);
var i = n(524437),
    o = n(481060),
    a = n(168107),
    s = n(480916),
    l = n(247206),
    c = n(656577),
    u = n(294602),
    d = n(249996),
    f = n(880257),
    _ = n(63063),
    p = n(838436),
    h = n(526761),
    m = n(726985),
    g = n(981631),
    E = n(388032),
    b = n(789318);
function y(e) {
    var t;
    let { isNested: n = !1 } = e,
        y = null == (t = (0, f.Z)()) || t,
        { explicitContentGuilds: O, explicitContentFriendDm: v, explicitContentNonFriendDm: I } = (0, u.B)(),
        T = (e) => {
            let t = Object.values(e);
            if ((0, l.Ks)() && t.includes(i.Q4.SHOW))
                return void a.Z.showAgeVerificationGetStartedModal({
                    entryPoint: s.cU.SENSITIVE_MEDIA_FILTER_SETTINGS,
                });
            (0, c.zj)(e);
        },
        S = [
            {
                value: i.Q4.BLUR,
                label: E.intl.string(E.t.S49UaW),
            },
            {
                value: i.Q4.BLOCK,
                label: E.intl.string(E.t["D/157e"]),
            },
        ],
        A = [
            {
                value: i.Q4.BLUR,
                label: E.intl.string(E.t.S49UaW),
            },
        ],
        C = {
            value: i.Q4.SHOW,
            label: E.intl.string(E.t["5k5OFh"]),
        };
    return (
        y && (S.unshift(C), A.unshift(C)),
        (0, r.jsx)(p.U, {
            setting: m.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: h.FY.EXPLICIT_MEDIA_REDACTION_V2,
            children: n
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: b.selectItemRow,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-md/medium",
                                      children: E.intl.string(E.t["+uI23N"]),
                                  }),
                                  (0, r.jsx)(o.q4e, {
                                      variant: "text-only",
                                      className: b.select,
                                      options: S,
                                      value: v,
                                      onChange: (e) => T({ explicitContentFriendDm: e }),
                                      renderOptionValue: (e) => {
                                          let [t] = e;
                                          return (0, r.jsx)(d.Z, { option: t });
                                      },
                                      renderOptionLabel: (e) => (0, r.jsx)(d.Z, { option: e }),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: b.selectItemRow,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-md/medium",
                                      children: E.intl.string(E.t["Yh+HX1"]),
                                  }),
                                  (0, r.jsx)(o.q4e, {
                                      variant: "text-only",
                                      className: b.select,
                                      options: S,
                                      value: I,
                                      onChange: (e) => T({ explicitContentNonFriendDm: e }),
                                      renderOptionValue: (e) => {
                                          let [t] = e;
                                          return (0, r.jsx)(d.Z, { option: t });
                                      },
                                      renderOptionLabel: (e) => (0, r.jsx)(d.Z, { option: e }),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: b.selectItemRow,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-md/medium",
                                      color: y ? "text-primary" : "text-muted",
                                      children: E.intl.string(E.t["FP+a4+"]),
                                  }),
                                  (0, r.jsx)(o.q4e, {
                                      variant: "text-only",
                                      className: b.select,
                                      options: A,
                                      value: O,
                                      onChange: (e) => T({ explicitContentGuilds: e }),
                                      isDisabled: !y,
                                      renderOptionValue: (e) => {
                                          let [t] = e;
                                          return (0, r.jsx)(d.Z, { option: t });
                                      },
                                      renderOptionLabel: (e) => (0, r.jsx)(d.Z, { option: e }),
                                  }),
                              ],
                          }),
                          (0, r.jsx)(o.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(E.t.Wnojv7),
                          }),
                      ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(p.H, {
                              header: E.intl.string(E.t["c/UOwM"]),
                              description: E.intl.format(E.t.ZUvrwM, {
                                  learnMoreLink: _.Z.getArticleURL(g.BhN.EXPLICIT_MEDIA_REDACTION),
                              }),
                          }),
                          (0, r.jsx)(o.xJW, {
                              tag: o.RB0.H3,
                              title: E.intl.string(E.t["6k0AgI"]),
                              titleClassName: b.selectItemTitle,
                              children: (0, r.jsx)(o.q4e, {
                                  variant: "text-only",
                                  className: b.select,
                                  options: S,
                                  value: v,
                                  onChange: (e) => T({ explicitContentFriendDm: e }),
                              }),
                          }),
                          (0, r.jsx)(o.xJW, {
                              tag: o.RB0.H3,
                              title: E.intl.string(E.t.D2EGSk),
                              titleClassName: b.selectItemTitle,
                              children: (0, r.jsx)(o.q4e, {
                                  variant: "text-only",
                                  className: b.select,
                                  options: S,
                                  value: I,
                                  onChange: (e) => T({ explicitContentNonFriendDm: e }),
                              }),
                          }),
                          (0, r.jsx)(o.xJW, {
                              tag: o.RB0.H3,
                              title: E.intl.string(E.t["FP+a4+"]),
                              titleClassName: b.selectItemTitle,
                              children: (0, r.jsx)(o.q4e, {
                                  variant: "text-only",
                                  className: b.select,
                                  options: A,
                                  value: O,
                                  onChange: (e) => T({ explicitContentGuilds: e }),
                                  isDisabled: !y,
                              }),
                          }),
                      ],
                  }),
        })
    );
}
