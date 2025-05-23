r.d(e, { default: () => b });
var n = r(255367);
r(73800);
var c = r(442837),
    l = r(481060),
    o = r(774078),
    i = r(569984),
    a = r(497505),
    s = r(602667),
    u = r(388032),
    f = r(388866);
function p(t) {
    let { transitionState: e, onClose: r, questEnrollmentBlockedUntil: c } = t,
        { hours: i, minutes: a, seconds: s } = (0, o.Z)(c),
        p = String(i).padStart(2, '0'),
        b = String(a).padStart(2, '0'),
        d = String(s).padStart(2, '0'),
        O = ''.concat(p, ':').concat(b, ':').concat(d);
    return (0, n.jsxs)(l.Y0X, {
        transitionState: e,
        size: l.CgR.DYNAMIC,
        className: f.modal,
        children: [
            (0, n.jsx)('div', {
                className: f.header,
                children: (0, n.jsx)(l.olH, {
                    className: f.closeBtn,
                    onClick: r
                })
            }),
            (0, n.jsx)(l.X6q, {
                variant: 'heading-lg/medium',
                className: f.title,
                children: u.intl.string(u.t['g+02d3'])
            }),
            (0, n.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: f.subtext,
                children: u.intl.string(u.t.XEHDT0)
            }),
            (0, n.jsx)(l.Text, {
                variant: 'text-md/normal',
                className: f.subtext,
                children: u.intl.formatToPlainString(u.t['+5XVHx'], { countdownString: O })
            }),
            (0, n.jsx)(l.zxk, {
                className: f.ctaBtn,
                onClick: r,
                children: u.intl.string(u.t.cpT0Cg)
            })
        ]
    });
}
function b(t) {
    var { onClose: e, quest: r } = t,
        l = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                c = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        c = {},
                        l = Object.keys(t);
                    for (n = 0; n < l.length; n++) (r = l[n]), e.indexOf(r) >= 0 || (c[r] = t[r]);
                    return c;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(t);
                for (n = 0; n < l.length; n++) (r = l[n]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (c[r] = t[r]);
            }
            return c;
        })(t, ['onClose', 'quest']);
    let o = (0, c.e7)([i.Z], () => i.Z.questEnrollmentBlockedUntil);
    return null == o || null == r
        ? null
        : (0, n.jsx)(s.A, {
              overrideVisibility: !0,
              questOrQuests: r,
              questContent: a.jn.QUEST_ENROLLMENT_BLOCKED_MODAL,
              children: () => {
                  var t, r;
                  return (0, n.jsx)(
                      p,
                      ((t = (function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var r = null != arguments[e] ? arguments[e] : {},
                                  n = Object.keys(r);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (t) {
                                          return Object.getOwnPropertyDescriptor(r, t).enumerable;
                                      })
                                  )),
                                  n.forEach(function (e) {
                                      var n;
                                      (n = r[e]),
                                          e in t
                                              ? Object.defineProperty(t, e, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (t[e] = n);
                                  });
                          }
                          return t;
                      })({}, l)),
                      (r = r =
                          {
                              onClose: e,
                              questEnrollmentBlockedUntil: o
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : (function (t, e) {
                                var r = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(t);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      t)
                  );
              }
          });
}
