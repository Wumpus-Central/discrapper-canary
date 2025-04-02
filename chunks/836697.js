n.d(t, { Z: () => x }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(110924),
    u = n(540059),
    d = n(693546),
    p = n(863249),
    h = n(937111),
    f = n(914010),
    g = n(289090),
    m = n(727258),
    b = n(234383),
    v = n(179809),
    y = n(588275),
    _ = n(388032),
    O = n(168205);
function j(e) {
    let { onActivate: t, children: n } = e,
        o = (0, a.e7)([h.Z], () => h.Z.hasJoinRequestCoackmark()),
        l = i.useCallback(() => {
            p.ZP.clearCoachmark();
        }, []),
        u = (0, c.Z)(o),
        d = i.useRef(null);
    return (
        i.useEffect(() => {
            if (o && o !== u) {
                var e, n, r, i, l;
                t(), null === (l = d.current) || void 0 === l || null === (i = l.ref) || void 0 === i || null === (r = i.current) || void 0 === r || null === (n = r.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
            }
        }, [d, o, u, t]),
        (0, r.jsxs)('div', {
            className: O.container,
            children: [
                (0, r.jsx)(s.yRy, {
                    ref: d,
                    shouldShow: o,
                    renderPopout: () =>
                        (0, r.jsxs)('div', {
                            className: O.popoutContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: O.popoutContent,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: O.coachmarkTextContainer,
                                            children: [
                                                (0, r.jsx)(s.X6q, {
                                                    variant: 'heading-md/medium',
                                                    children: _.NW.string(_.t['0YV0YG'])
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: _.NW.string(_.t['0UQVDA'])
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(s.zxk, {
                                            fullWidth: !0,
                                            size: s.PhG.SMALL,
                                            color: s.Ttl.BRAND,
                                            onClick: l,
                                            children: _.NW.string(_.t['4r+amZ'])
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', { className: O.popoutCaretLeft })
                            ]
                        }),
                    position: 'right',
                    animationPosition: 'right',
                    align: 'top',
                    spacing: 16,
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            'div',
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (n = n = { className: O.popoutAnchor }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                        );
                    }
                }),
                n
            ]
        })
    );
}
function x(e) {
    let { onActivate: t } = e,
        n = (0, u.Q3)('PendingGuildJoinRequestsFolderNode'),
        [o, x] = i.useState(!1),
        C = (0, a.e7)([f.Z], () => f.Z.getGuildId()),
        S = (0, a.e7)([h.Z], () => h.Z.hasFetchedRequestToJoinGuilds),
        P = (0, b.Z)(),
        I = (0, c.Z)(C),
        N = i.useMemo(() => {
            let e = (0, m.qQ)({
                folderId: g.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: _.NW.string(_.t['scsU+v']),
                expanded: o,
                guildIds: []
            });
            for (let t of P) e.children.push((0, m.Mg)(t, e.id));
            return e;
        }, [P, o]);
    i.useEffect(() => {
        o && !S && d.Z.fetchRequestToJoinGuilds();
    }, [o, S]);
    let Z = null != C && P.includes(C);
    return (i.useEffect(() => {
        !o && Z && I !== C && x(!0);
    }, [o, Z, I, C]),
    0 === P.length)
        ? null
        : (0, r.jsx)(j, {
              onActivate: t,
              children: (0, r.jsx)('div', {
                  className: l()({ [O.folderWrapperCollapsed]: !o }),
                  children: (0, r.jsx)(v.Z, {
                      folderNode: N,
                      expanded: o,
                      useCircleMask: !o && !Z,
                      selected: Z,
                      draggable: !1,
                      sorting: !1,
                      onExpandCollapse: () => {
                          x(!o), p.ZP.clearCoachmark();
                      },
                      folderIconContentClassName: O.folderIconContent,
                      folderIconContent: (0, r.jsx)(s.wGF, {
                          size: n ? 'sm' : 'md',
                          color: 'currentColor',
                          className: O.pendingIcon
                      }),
                      renderChildNode: function (e, t) {
                          return e.type !== m.eD.GUILD
                              ? null
                              : (0, r.jsx)(
                                    y.Z,
                                    {
                                        guildNode: e,
                                        height: t
                                    },
                                    e.id
                                );
                      }
                  })
              })
          });
}
