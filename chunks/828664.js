n.d(e, { default: () => f });
var r = n(255367);
n(73800);
var o = n(442837),
    c = n(481060),
    l = n(774078),
    s = n(569984),
    i = n(497505),
    a = n(602667),
    u = n(388032),
    p = n(842054);
function d(t) {
    let { transitionState: e, onClose: n, questEnrollmentBlockedUntil: o } = t,
        { hours: s, minutes: i, seconds: a } = (0, l.Z)(o),
        d = String(s).padStart(2, '0'),
        f = String(i).padStart(2, '0'),
        b = String(a).padStart(2, '0'),
        O = ''.concat(d, ':').concat(f, ':').concat(b);
    return (0, r.jsxs)(c.Y0X, {
        transitionState: e,
        size: c.CgR.DYNAMIC,
        className: p.modal,
        parentComponent: 'QuestsMinorEnrollmentBlockModal',
        children: [
            (0, r.jsx)('div', {
                className: p.header,
                children: (0, r.jsx)(c.olH, {
                    className: p.closeBtn,
                    onClick: n
                })
            }),
            (0, r.jsx)(c.X6q, {
                variant: 'heading-lg/medium',
                className: p.title,
                children: u.intl.string(u.t['g+02d3'])
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-md/normal',
                className: p.subtext,
                children: u.intl.string(u.t.XEHDT0)
            }),
            (0, r.jsx)(c.Text, {
                variant: 'text-md/normal',
                className: p.subtext,
                children: u.intl.formatToPlainString(u.t['+5XVHx'], { countdownString: O })
            }),
            (0, r.jsx)(c.zxk, {
                className: p.ctaBtn,
                onClick: n,
                children: u.intl.string(u.t.cpT0Cg)
            })
        ]
    });
}
function f(t) {
    var { onClose: e, quest: n, sourceQuestContent: c } = t,
        l = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        c = Object.keys(t);
                    for (r = 0; r < c.length; r++) (n = c[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(t);
                for (r = 0; r < c.length; r++) (n = c[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ['onClose', 'quest', 'sourceQuestContent']);
    let u = (0, o.e7)([s.Z], () => s.Z.questEnrollmentBlockedUntil);
    return null == u || null == n
        ? null
        : (0, r.jsx)(a.A, {
              overrideVisibility: !0,
              questOrQuests: n,
              questContent: i.jn.QUEST_ENROLLMENT_BLOCKED_MODAL,
              sourceQuestContent: c,
              children: () => {
                  var t, n;
                  return (0, r.jsx)(
                      d,
                      ((t = (function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var n = null != arguments[e] ? arguments[e] : {},
                                  r = Object.keys(n);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (t) {
                                          return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                      })
                                  )),
                                  r.forEach(function (e) {
                                      var r;
                                      (r = n[e]),
                                          e in t
                                              ? Object.defineProperty(t, e, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (t[e] = r);
                                  });
                          }
                          return t;
                      })({}, l)),
                      (n = n =
                          {
                              onClose: e,
                              questEnrollmentBlockedUntil: u
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : (function (t, e) {
                                var n = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(t);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            }),
                      t)
                  );
              }
          });
}
