r.d(e, { default: () => j });
var n = r(200651);
r(192379);
var i = r(442837),
    o = r(481060),
    l = r(239091),
    c = r(100527),
    a = r(970606),
    s = r(299206),
    u = r(693546),
    p = r(246364),
    d = r(937111),
    b = r(703656),
    f = r(914010),
    g = r(981631),
    O = r(388032);
function j(t) {
    let { guild: e, onSelect: r } = t,
        j = e.id,
        y = (0, s.Z)({
            id: e.id,
            label: O.intl.string(O.t['94lLDw'])
        }),
        h = (0, i.e7)([d.Z], () => d.Z.getRequest(j)),
        w = () => {
            u.Z.removeGuildJoinRequest(j), f.Z.getGuildId() === j && (0, b.uL)(g.Z5c.ME);
        };
    return (0, n.jsxs)(o.v2r, {
        navId: 'join-request-guild-context',
        onClose: l.Zy,
        'aria-label': O.intl.string(O.t.HpQykZ),
        onSelect: r,
        children: [
            (null == h ? void 0 : h.applicationStatus) === p.wB.REJECTED &&
                (0, n.jsx)(o.sNh, {
                    id: 'reapply',
                    label: O.intl.string(O.t.rpFCLi),
                    action: () => {
                        e.hasFeature(g.oNc.CLAN) &&
                            (0, a.Vr)({
                                guildId: j,
                                source: c.Z.CLAN_REAPPLY
                            }),
                            u.Z.resetGuildJoinRequest(j).then(() => {
                                (0, b.uL)(g.Z5c.GUILD_MEMBER_VERIFICATION(j));
                            });
                    },
                    color: 'default'
                }),
            (0, n.jsx)(o.sNh, {
                id: 'withdraw',
                label: (null == h ? void 0 : h.applicationStatus) === p.wB.STARTED ? O.intl.string(O.t.OQFlFB) : O.intl.string(O.t.mqtdmZ),
                action: () => {
                    (0, o.h7j)((t) => {
                        var r, i;
                        return (0, n.jsx)(
                            o.ConfirmModal,
                            ((r = (function (t) {
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
                            })(
                                {
                                    header: O.intl.string(O.t.y0CVen),
                                    confirmText: O.intl.string(O.t.p89ACg),
                                    cancelText: O.intl.string(O.t.oEAioK),
                                    onConfirm: w
                                },
                                t
                            )),
                            (i = i =
                                {
                                    children: (0, n.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        children: (null == h ? void 0 : h.applicationStatus) === p.wB.STARTED ? O.intl.string(O.t.fJwWVl) : O.intl.format(O.t['9ZezpK'], { name: e.name })
                                    })
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                : (function (t, e) {
                                      var r = Object.keys(t);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(t);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(i)).forEach(function (t) {
                                      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(i, t));
                                  }),
                            r)
                        );
                    });
                },
                color: 'danger'
            }),
            (0, n.jsx)(o.kSQ, { children: y })
        ]
    });
}
