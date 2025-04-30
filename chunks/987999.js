n.d(e, { default: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    l = n(239091),
    c = n(299206),
    a = n(693546),
    s = n(246364),
    u = n(937111),
    p = n(703656),
    d = n(914010),
    b = n(981631),
    f = n(388032);
function g(t) {
    let { guild: e, onSelect: n } = t,
        g = e.id,
        O = (0, c.Z)({
            id: e.id,
            label: f.intl.string(f.t['94lLDw'])
        }),
        j = (0, i.e7)([u.Z], () => u.Z.getRequest(g)),
        y = () => {
            a.Z.removeGuildJoinRequest(g), d.Z.getGuildId() === g && (0, p.uL)(b.Z5c.ME);
        };
    return (0, r.jsxs)(o.v2r, {
        navId: 'join-request-guild-context',
        onClose: l.Zy,
        'aria-label': f.intl.string(f.t.HpQykZ),
        onSelect: n,
        children: [
            (null == j ? void 0 : j.applicationStatus) === s.wB.REJECTED &&
                (0, r.jsx)(o.sNh, {
                    id: 'reapply',
                    label: f.intl.string(f.t.rpFCLi),
                    action: () => {
                        a.Z.resetGuildJoinRequest(g).then(() => {
                            (0, p.uL)(b.Z5c.GUILD_MEMBER_VERIFICATION(g));
                        });
                    },
                    color: 'default'
                }),
            (0, r.jsx)(o.sNh, {
                id: 'withdraw',
                label: (null == j ? void 0 : j.applicationStatus) === s.wB.STARTED ? f.intl.string(f.t.OQFlFB) : f.intl.string(f.t.mqtdmZ),
                action: () => {
                    (0, o.h7j)((t) => {
                        var n, i;
                        return (0, r.jsx)(
                            o.ConfirmModal,
                            ((n = (function (t) {
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
                            })(
                                {
                                    header: f.intl.string(f.t.y0CVen),
                                    confirmText: f.intl.string(f.t.p89ACg),
                                    cancelText: f.intl.string(f.t.oEAioK),
                                    onConfirm: y
                                },
                                t
                            )),
                            (i = i =
                                {
                                    children: (0, r.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        children: (null == j ? void 0 : j.applicationStatus) === s.wB.STARTED ? f.intl.string(f.t.fJwWVl) : f.intl.format(f.t['9ZezpK'], { name: e.name })
                                    })
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                : (function (t, e) {
                                      var n = Object.keys(t);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(t);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (t) {
                                      Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t));
                                  }),
                            n)
                        );
                    });
                },
                color: 'danger'
            }),
            (0, r.jsx)(o.kSQ, { children: O })
        ]
    });
}
