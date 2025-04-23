n.d(t, { Z: () => j }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(110924),
    u = n(540059),
    d = n(693546),
    h = n(863249),
    p = n(937111),
    f = n(914010),
    g = n(289090),
    m = n(727258),
    b = n(234383),
    y = n(179809),
    _ = n(588275),
    O = n(388032),
    v = n(315268);
function C(e) {
    let { onActivate: t, children: n } = e,
        l = (0, s.e7)([p.Z], () => p.Z.hasJoinRequestCoackmark()),
        o = i.useCallback(() => {
            h.ZP.clearCoachmark();
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
            className: v.container,
            children: [
                (0, r.jsx)(a.yRy, {
                    ref: d,
                    shouldShow: l,
                    renderPopout: () =>
                        (0, r.jsxs)('div', {
                            className: v.popoutContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: v.popoutContent,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: v.coachmarkTextContainer,
                                            children: [
                                                (0, r.jsx)(a.X6q, {
                                                    variant: 'heading-md/medium',
                                                    children: O.intl.string(O.t['0YV0YG'])
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: O.intl.string(O.t['0UQVDA'])
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(a.zxk, {
                                            fullWidth: !0,
                                            size: a.PhG.SMALL,
                                            color: a.Ttl.BRAND,
                                            onClick: o,
                                            children: O.intl.string(O.t['4r+amZ'])
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', { className: v.popoutCaretLeft })
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
                            (n = n = { className: v.popoutAnchor }),
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
function j(e) {
    let { onActivate: t } = e,
        n = (0, u.Q3)('PendingGuildJoinRequestsFolderNode'),
        [l, j] = i.useState(!1),
        x = (0, s.e7)([f.Z], () => f.Z.getGuildId()),
        S = (0, s.e7)([p.Z], () => p.Z.hasFetchedRequestToJoinGuilds),
        E = (0, b.Z)(),
        P = (0, c.Z)(x),
        I = i.useMemo(() => {
            let e = (0, m.qQ)({
                folderId: g.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: O.intl.string(O.t['scsU+v']),
                expanded: l,
                guildIds: []
            });
            for (let t of E) e.children.push((0, m.Mg)(t, e.id));
            return e;
        }, [E, l]);
    i.useEffect(() => {
        l && !S && d.Z.fetchRequestToJoinGuilds();
    }, [l, S]);
    let w = null != x && E.includes(x);
    return (i.useEffect(() => {
        !l && w && P !== x && j(!0);
    }, [l, w, P, x]),
    0 === E.length)
        ? null
        : (0, r.jsx)(C, {
              onActivate: t,
              children: (0, r.jsx)('div', {
                  className: o()({ [v.folderWrapperCollapsed]: !l }),
                  children: (0, r.jsx)(y.Z, {
                      folderNode: I,
                      expanded: l,
                      useCircleMask: !l && !w,
                      selected: w,
                      draggable: !1,
                      sorting: !1,
                      onExpandCollapse: () => {
                          j(!l), h.ZP.clearCoachmark();
                      },
                      folderIconContentClassName: v.folderIconContent,
                      folderIconContent: (0, r.jsx)(a.wGF, {
                          size: n ? 'sm' : 'md',
                          color: 'currentColor',
                          className: v.pendingIcon
                      }),
                      renderChildNode: function (e, t, n, i) {
                          return e.type !== m.eD.GUILD
                              ? null
                              : (0, r.jsx)(
                                    _.Z,
                                    {
                                        guildNode: e,
                                        height: i,
                                        'aria-setsize': n,
                                        'aria-posinset': t
                                    },
                                    e.id
                                );
                      }
                  })
              })
          });
}
