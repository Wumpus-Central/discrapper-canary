n.d(t, { Z: () => v }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    s = n(110924),
    a = n(693546),
    c = n(863249),
    u = n(937111),
    d = n(914010),
    h = n(289090),
    p = n(727258),
    f = n(234383),
    g = n(179809),
    m = n(588275),
    b = n(388032),
    y = n(315268);
function _(e) {
    let { onActivate: t, children: n } = e,
        a = (0, l.e7)([u.Z], () => u.Z.hasJoinRequestCoackmark()),
        d = i.useCallback(() => {
            c.ZP.clearCoachmark();
        }, []),
        h = (0, s.Z)(a),
        p = i.useRef(null);
    return (
        i.useEffect(() => {
            if (a && a !== h) {
                var e, n, r, i, l;
                t(), null == (l = p.current) || null == (i = l.ref) || null == (r = i.current) || null == (n = r.layerRef) || null == (e = n.current) || e.updatePosition();
            }
        }, [p, a, h, t]),
        (0, r.jsxs)('div', {
            className: y.container,
            children: [
                (0, r.jsx)(o.yRy, {
                    ref: p,
                    shouldShow: a,
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
                                                    children: b.intl.string(b.t['0YV0YG'])
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: b.intl.string(b.t['0UQVDA'])
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)(o.zxk, {
                                            fullWidth: !0,
                                            size: o.PhG.SMALL,
                                            color: o.Ttl.BRAND,
                                            onClick: d,
                                            children: b.intl.string(b.t['4r+amZ'])
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
function v(e) {
    let { onActivate: t } = e,
        [n, v] = i.useState(!1),
        O = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
        C = (0, l.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds),
        j = (0, f.Z)(),
        S = (0, s.Z)(O),
        E = i.useMemo(() => {
            let e = (0, p.qQ)({
                folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: b.intl.string(b.t['scsU+v']),
                expanded: n,
                guildIds: []
            });
            for (let t of j) e.children.push((0, p.Mg)(t, e.id));
            return e;
        }, [j, n]);
    i.useEffect(() => {
        n && !C && a.Z.fetchRequestToJoinGuilds();
    }, [n, C]);
    let x = null != O && j.includes(O);
    return (i.useEffect(() => {
        !n && x && S !== O && v(!0);
    }, [n, x, S, O]),
    0 === j.length)
        ? null
        : (0, r.jsx)(_, {
              onActivate: t,
              children: (0, r.jsx)(g.Z, {
                  folderNode: E,
                  expanded: n,
                  selected: x,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      v(!n), c.ZP.clearCoachmark();
                  },
                  folderButtonSize: 'icon',
                  folderButtonContent: (0, r.jsx)('div', {
                      className: y.pendingFolderButtonIcon,
                      children: (0, r.jsx)(o.wGF, {
                          size: 'sm',
                          color: 'currentColor'
                      })
                  }),
                  renderChildNode: function (e, t, n) {
                      return e.type !== p.eD.GUILD
                          ? null
                          : (0, r.jsx)(
                                m.Z,
                                {
                                    guildNode: e,
                                    'aria-setsize': n,
                                    'aria-posinset': t
                                },
                                e.id
                            );
                  }
              })
          });
}
