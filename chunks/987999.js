r.d(t, { default: () => j });
var n = r(200651);
r(192379);
var i = r(442837),
    o = r(481060),
    c = r(239091),
    a = r(100527),
    l = r(970606),
    s = r(299206),
    u = r(693546),
    p = r(246364),
    d = r(937111),
    b = r(703656),
    f = r(914010),
    g = r(981631),
    O = r(388032);
function j(e) {
    let { guild: t, onSelect: r } = e,
        j = t.id,
        y = (0, s.Z)({
            id: t.id,
            label: O.NW.string(O.t['94lLDw'])
        }),
        h = (0, i.e7)([d.Z], () => d.Z.getRequest(j)),
        w = () => {
            u.Z.removeGuildJoinRequest(j), f.Z.getGuildId() === j && (0, b.uL)(g.Z5c.ME);
        };
    return (0, n.jsxs)(o.v2r, {
        navId: 'join-request-guild-context',
        onClose: c.Zy,
        'aria-label': O.NW.string(O.t.HpQykZ),
        onSelect: r,
        children: [
            (null == h ? void 0 : h.applicationStatus) === p.wB.REJECTED &&
                (0, n.jsx)(o.sNh, {
                    id: 'reapply',
                    label: O.NW.string(O.t.rpFCLi),
                    action: () => {
                        t.hasFeature(g.oNc.CLAN) &&
                            (0, l.Vr)({
                                guildId: j,
                                source: a.Z.CLAN_REAPPLY
                            }),
                            u.Z.resetGuildJoinRequest(j).then(() => {
                                (0, b.uL)(g.Z5c.GUILD_MEMBER_VERIFICATION(j));
                            });
                    },
                    color: 'default'
                }),
            (0, n.jsx)(o.sNh, {
                id: 'withdraw',
                label: (null == h ? void 0 : h.applicationStatus) === p.wB.STARTED ? O.NW.string(O.t.OQFlFB) : O.NW.string(O.t.mqtdmZ),
                action: () => {
                    (0, o.h7j)((e) => {
                        var r, i;
                        return (0, n.jsx)(
                            o.ConfirmModal,
                            ((r = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (n = n.concat(
                                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                            })
                                        )),
                                        n.forEach(function (t) {
                                            var n;
                                            (n = r[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: n,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = n);
                                        });
                                }
                                return e;
                            })(
                                {
                                    header: O.NW.string(O.t.y0CVen),
                                    confirmText: O.NW.string(O.t.p89ACg),
                                    cancelText: O.NW.string(O.t.oEAioK),
                                    onConfirm: w
                                },
                                e
                            )),
                            (i = i =
                                {
                                    children: (0, n.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        children: (null == h ? void 0 : h.applicationStatus) === p.wB.STARTED ? O.NW.string(O.t.fJwWVl) : O.NW.format(O.t['9ZezpK'], { name: t.name })
                                    })
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
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
