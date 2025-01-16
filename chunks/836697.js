n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(110924),
    s = n(540059),
    c = n(693546),
    u = n(863249),
    d = n(937111),
    h = n(914010),
    p = n(289090),
    m = n(727258),
    f = n(234383),
    g = n(179809),
    v = n(588275),
    C = n(388032),
    x = n(738945);
function I(e) {
    let { onActivate: t, children: n } = e,
        s = (0, r.e7)([d.Z], () => d.Z.hasJoinRequestCoackmark()),
        c = l.useCallback(() => {
            u.ZP.clearCoachmark();
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
            className: x.container,
            children: [
                (0, i.jsx)(a.Popout, {
                    ref: p,
                    shouldShow: s,
                    renderPopout: () =>
                        (0, i.jsxs)('div', {
                            className: x.popoutContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: x.popoutContent,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: x.coachmarkTextContainer,
                                            children: [
                                                (0, i.jsx)(a.Heading, {
                                                    variant: 'heading-md/medium',
                                                    children: C.intl.string(C.t['0YV0YG'])
                                                }),
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: C.intl.string(C.t['0UQVDA'])
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(a.Button, {
                                            fullWidth: !0,
                                            size: a.ButtonSizes.SMALL,
                                            color: a.ButtonColors.BRAND,
                                            onClick: c,
                                            children: C.intl.string(C.t['4r+amZ'])
                                        })
                                    ]
                                }),
                                (0, i.jsx)('div', { className: x.popoutCaretLeft })
                            ]
                        }),
                    position: 'right',
                    animationPosition: 'right',
                    align: 'top',
                    spacing: 16,
                    children: (e) =>
                        (0, i.jsx)('div', {
                            ...e,
                            className: x.popoutAnchor
                        })
                }),
                n
            ]
        })
    );
}
function _(e) {
    let { onActivate: t } = e,
        n = (0, s.Q3)('PendingGuildJoinRequestsFolderNode'),
        [_, Z] = l.useState(!1),
        b = (0, r.e7)([h.Z], () => h.Z.getGuildId()),
        S = (0, r.e7)([d.Z], () => d.Z.hasFetchedRequestToJoinGuilds),
        N = (0, f.Z)(),
        E = (0, o.Z)(b),
        y = l.useMemo(() => {
            let e = (0, m.qQ)({
                folderId: p.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: C.intl.string(C.t['scsU+v']),
                expanded: _,
                guildIds: []
            });
            for (let t of N) e.children.push((0, m.Mg)(t, e.id));
            return e;
        }, [N, _]);
    l.useEffect(() => {
        _ && !S && c.Z.fetchRequestToJoinGuilds();
    }, [_, S]);
    let j = null != b && N.includes(b);
    return (l.useEffect(() => {
        !_ && j && E !== b && Z(!0);
    }, [_, j, E, b]),
    0 === N.length)
        ? null
        : (0, i.jsx)(I, {
              onActivate: t,
              children: (0, i.jsx)(g.Z, {
                  folderNode: y,
                  expanded: _,
                  useCircleMask: !_ && !j,
                  selected: j,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      Z(!_), u.ZP.clearCoachmark();
                  },
                  folderIconContentClassName: x.folderIconContent,
                  folderIconContent: (0, i.jsx)(a.HourglassIcon, {
                      size: n ? 'sm' : 'md',
                      color: 'currentColor',
                      className: x.pendingIcon
                  }),
                  renderChildNode: function (e, t) {
                      return e.type !== m.eD.GUILD
                          ? null
                          : (0, i.jsx)(
                                v.Z,
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
