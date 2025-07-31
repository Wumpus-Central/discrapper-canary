r.d(e, { default: () => b });
var n = r(255367);
r(73800);
var o = r(442837),
    i = r(82659),
    c = r(481060),
    l = r(774078),
    s = r(569984),
    a = r(497505),
    u = r(602667),
    p = r(388032);
function O(t) {
    let { transitionState: e, onClose: r, questEnrollmentBlockedUntil: o } = t,
        { hours: s, minutes: a, seconds: u } = (0, l.Z)(o),
        O = String(s).padStart(2, '0'),
        b = String(a).padStart(2, '0'),
        f = String(u).padStart(2, '0'),
        d = ''.concat(O, ':').concat(b, ':').concat(f);
    return (0, n.jsx)(i.Modal, {
        size: 'sm',
        transitionState: e,
        onClose: r,
        title: p.intl.string(p.t['g+02d3']),
        actions: [
            {
                variant: 'secondary',
                onClick: () => r(),
                text: p.intl.string(p.t.cpT0Cg)
            }
        ],
        children: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: p.intl.string(p.t.XEHDT0)
                }),
                (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: p.intl.formatToPlainString(p.t['+5XVHx'], { countdownString: d })
                })
            ]
        })
    });
}
function b(t) {
    var { onClose: e, quest: r, sourceQuestContent: i } = t,
        c = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) ((r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]));
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++) ((r = i[n]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
            }
            return o;
        })(t, ['onClose', 'quest', 'sourceQuestContent']);
    let l = (0, o.e7)([s.Z], () => s.Z.questEnrollmentBlockedUntil);
    return null == l || null == r
        ? null
        : (0, n.jsx)(u.A, {
              overrideVisibility: !0,
              questOrQuests: r,
              questContent: a.jn.QUEST_ENROLLMENT_BLOCKED_MODAL,
              sourceQuestContent: i,
              children: () => {
                  var t, r;
                  return (0, n.jsx)(
                      O,
                      ((t = (function (t) {
                          for (var e = 1; e < arguments.length; e++) {
                              var r = null != arguments[e] ? arguments[e] : {},
                                  n = Object.keys(r);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (t) {
                                          return Object.getOwnPropertyDescriptor(r, t).enumerable;
                                      })
                                  )),
                                  n.forEach(function (e) {
                                      var n;
                                      ((n = r[e]),
                                          e in t
                                              ? Object.defineProperty(t, e, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (t[e] = n));
                                  }));
                          }
                          return t;
                      })({}, c)),
                      (r = r =
                          {
                              onClose: e,
                              questEnrollmentBlockedUntil: l
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
