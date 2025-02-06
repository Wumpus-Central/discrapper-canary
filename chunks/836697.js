n.d(t, { Z: () => Z }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(110924),
    s = n(540059),
    c = n(693546),
    d = n(863249),
    u = n(937111),
    h = n(914010),
    p = n(289090),
    m = n(727258),
    g = n(234383),
    f = n(179809),
    _ = n(588275),
    v = n(388032),
    C = n(738945);
function x(e) {
    let { onActivate: t, children: n } = e,
        s = (0, r.e7)([u.Z], () => u.Z.hasJoinRequestCoackmark()),
        c = l.useCallback(() => {
            d.ZP.clearCoachmark();
        }, []),
        h = (0, o.Z)(s),
        p = l.useRef(null);
    return (
        l.useEffect(() => {
            if (s && s !== h) {
                var e, n, i, l, r;
                t(), null === (r = p.current) || void 0 === r || null === (l = r.ref) || void 0 === l || null === (i = l.current) || void 0 === i || null === (n = i.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
            }
        }, [p, s, h, t]),
        (0, i.jsxs)('div', {
            className: C.container,
            children: [
                (0, i.jsx)(a.yRy, {
                    ref: p,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, i.jsxs)('div', {
                            className: C.popoutContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: C.popoutContent,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: C.coachmarkTextContainer,
                                            children: [
                                                (0, i.jsx)(a.X6q, {
                                                    variant: 'heading-md/medium',
                                                    children: v.intl.string(v.t['0YV0YG'])
                                                }),
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: v.intl.string(v.t['0UQVDA'])
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(a.zxk, {
                                            fullWidth: !0,
                                            size: a.PhG.SMALL,
                                            color: a.Ttl.BRAND,
                                            onClick: c,
                                            children: v.intl.string(v.t['4r+amZ'])
                                        })
                                    ]
                                }),
                                (0, i.jsx)('div', { className: C.popoutCaretLeft })
                            ]
                        }),
                    position: 'right',
                    animationPosition: 'right',
                    align: 'top',
                    spacing: 16,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            ...e,
                            className: C.popoutAnchor
                        })
                }),
                n
            ]
        })
    );
}
function Z(e) {
    let { onActivate: t } = e,
        n = (0, s.Q3)('PendingGuildJoinRequestsFolderNode'),
        [Z, I] = l.useState(!1),
        b = (0, r.e7)([h.Z], () => h.Z.getGuildId()),
        S = (0, r.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds),
        N = (0, g.Z)(),
        E = (0, o.Z)(b),
        j = l.useMemo(() => {
            let e = (0, m.qQ)({
                folderId: p.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: v.intl.string(v.t['scsU+v']),
                expanded: Z,
                guildIds: []
            });
            for (let t of N) e.children.push((0, m.Mg)(t, e.id));
            return e;
        }, [N, Z]);
    l.useEffect(() => {
        Z && !S && c.Z.fetchRequestToJoinGuilds();
    }, [Z, S]);
    let y = null != b && N.includes(b);
    return (l.useEffect(() => {
        !Z && y && E !== b && I(!0);
    }, [Z, y, E, b]),
    0 === N.length)
        ? null
        : (0, i.jsx)(x, {
              onActivate: t,
              children: (0, i.jsx)(f.Z, {
                  folderNode: j,
                  expanded: Z,
                  useCircleMask: !Z && !y,
                  selected: y,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      I(!Z), d.ZP.clearCoachmark();
                  },
                  folderIconContentClassName: C.folderIconContent,
                  folderIconContent: (0, i.jsx)(a.wGF, {
                      size: n ? 'sm' : 'md',
                      color: 'currentColor',
                      className: C.pendingIcon
                  }),
                  renderChildNode: function (e, t) {
                      return e.type !== m.eD.GUILD
                          ? null
                          : (0, i.jsx)(
                                _.Z,
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
