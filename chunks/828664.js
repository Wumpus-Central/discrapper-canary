n.d(e, { default: () => b });
var r = n(255367);
n(73800);
var o = n(442837),
    c = n(755721),
    l = n(481060),
    s = n(774078),
    i = n(569984),
    a = n(497505),
    u = n(602667),
    p = n(388032),
    d = n(842054);
function f(t) {
    let { transitionState: e, onClose: n, questEnrollmentBlockedUntil: o } = t,
        { hours: i, minutes: a, seconds: u } = (0, s.Z)(o),
        f = String(i).padStart(2, '0'),
        b = String(a).padStart(2, '0'),
        O = String(u).padStart(2, '0'),
        m = ''.concat(f, ':').concat(b, ':').concat(O);
    return (0, r.jsxs)(l.Y0X, {
        transitionState: e,
        size: l.CgR.DYNAMIC,
        className: d.modal,
        parentComponent: 'QuestsMinorEnrollmentBlockModal',
        children: [
            (0, r.jsx)('div', {
                className: d.header,
                children: (0, r.jsx)(l.olH, {
                    className: d.closeBtn,
                    onClick: n
                })
            }),
            (0, r.jsx)(l.X6q, {
                variant: 'heading-lg/medium',
                className: d.title,
                children: p.intl.string(p.t['g+02d3'])
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: d.subtext,
                children: p.intl.string(p.t.XEHDT0)
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: d.subtext,
                children: p.intl.formatToPlainString(p.t['+5XVHx'], { countdownString: m })
            }),
            (0, r.jsx)(c.zx, {
                className: d.ctaBtn,
                onClick: n,
                children: p.intl.string(p.t.cpT0Cg)
            })
        ]
    });
}
function b(t) {
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
                    for (r = 0; r < c.length; r++) ((n = c[r]), e.indexOf(n) >= 0 || (o[n] = t[n]));
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(t);
                for (r = 0; r < c.length; r++) ((n = c[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]));
            }
            return o;
        })(t, ['onClose', 'quest', 'sourceQuestContent']);
    let s = (0, o.e7)([i.Z], () => i.Z.questEnrollmentBlockedUntil);
    return null == s || null == n
        ? null
        : (0, r.jsx)(u.A, {
              overrideVisibility: !0,
              questOrQuests: n,
              questContent: a.jn.QUEST_ENROLLMENT_BLOCKED_MODAL,
              sourceQuestContent: c,
              children: () => {
                  var t, n;
                  return (0, r.jsx)(
                      f,
                      ((t = (function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var n = null != arguments[e] ? arguments[e] : {},
                                  r = Object.keys(n);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (t) {
                                          return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                      })
                                  )),
                                  r.forEach(function (e) {
                                      var r;
                                      ((r = n[e]),
                                          e in t
                                              ? Object.defineProperty(t, e, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (t[e] = r));
                                  }));
                          }
                          return t;
                      })({}, l)),
                      (n = n =
                          {
                              onClose: e,
                              questEnrollmentBlockedUntil: s
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
