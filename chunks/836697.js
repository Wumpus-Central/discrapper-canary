n.d(t, { Z: () => O }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(110924),
    s = n(540059),
    c = n(693546),
    u = n(863249),
    d = n(937111),
    p = n(914010),
    h = n(289090),
    f = n(727258),
    g = n(234383),
    m = n(179809),
    b = n(588275),
    v = n(388032),
    y = n(546070);
function _(e) {
    let { onActivate: t, children: n } = e,
        s = (0, l.e7)([d.Z], () => d.Z.hasJoinRequestCoackmark()),
        c = i.useCallback(() => {
            u.ZP.clearCoachmark();
        }, []),
        p = (0, a.Z)(s),
        h = i.useRef(null);
    return (
        i.useEffect(() => {
            if (s && s !== p) {
                var e, n, r, i, l;
                t(), null === (l = h.current) || void 0 === l || null === (i = l.ref) || void 0 === i || null === (r = i.current) || void 0 === r || null === (n = r.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
            }
        }, [h, s, p, t]),
        (0, r.jsxs)('div', {
            className: y.container,
            children: [
                (0, r.jsx)(o.yRy, {
                    ref: h,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, r.jsxs)('div', {
                            className: y.popoutContainer,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: y.popoutContent,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: y.coachmarkTextContainer,
                                            children: [
                                                (0, r.jsx)(o.X6q, {
                                                    variant: 'heading-md/medium',
                                                    children: v.NW.string(v.t['0YV0YG'])
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: v.NW.string(v.t['0UQVDA'])
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(o.zxk, {
                                            fullWidth: !0,
                                            size: o.PhG.SMALL,
                                            color: o.Ttl.BRAND,
                                            onClick: c,
                                            children: v.NW.string(v.t['4r+amZ'])
                                        })
                                    ]
                                }),
                                (0, r.jsx)('div', { className: y.popoutCaretLeft })
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
                            (n = n = { className: y.popoutAnchor }),
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
function O(e) {
    let { onActivate: t } = e,
        n = (0, s.Q3)('PendingGuildJoinRequestsFolderNode'),
        [O, j] = i.useState(!1),
        C = (0, l.e7)([p.Z], () => p.Z.getGuildId()),
        x = (0, l.e7)([d.Z], () => d.Z.hasFetchedRequestToJoinGuilds),
        P = (0, g.Z)(),
        S = (0, a.Z)(C),
        I = i.useMemo(() => {
            let e = (0, f.qQ)({
                folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: v.NW.string(v.t['scsU+v']),
                expanded: O,
                guildIds: []
            });
            for (let t of P) e.children.push((0, f.Mg)(t, e.id));
            return e;
        }, [P, O]);
    i.useEffect(() => {
        O && !x && c.Z.fetchRequestToJoinGuilds();
    }, [O, x]);
    let N = null != C && P.includes(C);
    return (i.useEffect(() => {
        !O && N && S !== C && j(!0);
    }, [O, N, S, C]),
    0 === P.length)
        ? null
        : (0, r.jsx)(_, {
              onActivate: t,
              children: (0, r.jsx)(m.Z, {
                  folderNode: I,
                  expanded: O,
                  useCircleMask: !O && !N,
                  selected: N,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      j(!O), u.ZP.clearCoachmark();
                  },
                  folderIconContentClassName: y.folderIconContent,
                  folderIconContent: (0, r.jsx)(o.wGF, {
                      size: n ? 'sm' : 'md',
                      color: 'currentColor',
                      className: y.pendingIcon
                  }),
                  renderChildNode: function (e, t) {
                      return e.type !== f.eD.GUILD
                          ? null
                          : (0, r.jsx)(
                                b.Z,
                                {
                                    guildNode: e,
                                    height: t
                                },
                                e.id
                            );
                  }
              })
          });
}
