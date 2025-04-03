n.d(t, { Z: () => x }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
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
    y = n(179809),
    _ = n(588275),
    v = n(388032),
    O = n(315268);
function j(e) {
    let { onActivate: t, children: n } = e,
        l = (0, a.e7)([h.Z], () => h.Z.hasJoinRequestCoackmark()),
        o = i.useCallback(() => {
            p.ZP.clearCoachmark();
        }, []),
        u = (0, c.Z)(l),
        d = i.useRef(null);
    return (
        i.useEffect(() => {
            if (l && l !== u) {
                var e, n, r, i, o;
                t(), null == (o = d.current) || null == (i = o.ref) || null == (r = i.current) || null == (n = r.layerRef) || null == (e = n.current) || e.updatePosition();
            }
        }, [d, l, u, t]),
        (0, r.jsxs)('div', {
            className: O.container,
            children: [
                (0, r.jsx)(s.yRy, {
                    ref: d,
                    shouldShow: l,
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
                                                    children: v.NW.string(v.t['0YV0YG'])
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: v.NW.string(v.t['0UQVDA'])
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(s.zxk, {
                                            fullWidth: !0,
                                            size: s.PhG.SMALL,
                                            color: s.Ttl.BRAND,
                                            onClick: o,
                                            children: v.NW.string(v.t['4r+amZ'])
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
        [l, x] = i.useState(!1),
        C = (0, a.e7)([f.Z], () => f.Z.getGuildId()),
        S = (0, a.e7)([h.Z], () => h.Z.hasFetchedRequestToJoinGuilds),
        P = (0, b.Z)(),
        I = (0, c.Z)(C),
        N = i.useMemo(() => {
            let e = (0, m.qQ)({
                folderId: g.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: v.NW.string(v.t['scsU+v']),
                expanded: l,
                guildIds: []
            });
            for (let t of P) e.children.push((0, m.Mg)(t, e.id));
            return e;
        }, [P, l]);
    i.useEffect(() => {
        l && !S && d.Z.fetchRequestToJoinGuilds();
    }, [l, S]);
    let Z = null != C && P.includes(C);
    return (i.useEffect(() => {
        !l && Z && I !== C && x(!0);
    }, [l, Z, I, C]),
    0 === P.length)
        ? null
        : (0, r.jsx)(j, {
              onActivate: t,
              children: (0, r.jsx)('div', {
                  className: o()({ [O.folderWrapperCollapsed]: !l }),
                  children: (0, r.jsx)(y.Z, {
                      folderNode: N,
                      expanded: l,
                      useCircleMask: !l && !Z,
                      selected: Z,
                      draggable: !1,
                      sorting: !1,
                      onExpandCollapse: () => {
                          x(!l), p.ZP.clearCoachmark();
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
                                    _.Z,
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
