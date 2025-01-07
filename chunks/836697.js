n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(110924),
    s = n(693546),
    c = n(863249),
    u = n(937111),
    d = n(914010),
    h = n(289090),
    p = n(727258),
    f = n(234383),
    m = n(179809),
    g = n(588275),
    v = n(388032),
    C = n(738945);
function x(e) {
    let { onActivate: t, children: n } = e,
        s = (0, r.e7)([u.Z], () => u.Z.hasJoinRequestCoackmark()),
        d = l.useCallback(() => {
            c.ZP.clearCoachmark();
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
                (0, i.jsx)(a.Popout, {
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
                                                (0, i.jsx)(a.Heading, {
                                                    variant: 'heading-md/medium',
                                                    children: v.intl.string(v.t.fRUGzs)
                                                }),
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: v.intl.string(v.t.ja0Tg4)
                                                })
                                            ]
                                        }),
                                        (0, i.jsx)(a.Button, {
                                            fullWidth: !0,
                                            size: a.ButtonSizes.SMALL,
                                            color: a.ButtonColors.BRAND,
                                            onClick: d,
                                            children: v.intl.string(v.t.E0MgHh)
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
function I(e) {
    let { onActivate: t } = e,
        [n, I] = l.useState(!1),
        _ = (0, r.e7)([d.Z], () => d.Z.getGuildId()),
        Z = (0, r.e7)([u.Z], () => u.Z.hasFetchedRequestToJoinGuilds),
        b = (0, f.Z)(),
        S = (0, o.Z)(_),
        N = l.useMemo(() => {
            let e = (0, p.qQ)({
                folderId: h.S.PENDING_JOIN_REQUESTS_FOLDER,
                folderName: v.intl.string(v.t['scsU+v']),
                expanded: n,
                guildIds: []
            });
            for (let t of b) e.children.push((0, p.Mg)(t, e.id));
            return e;
        }, [b, n]);
    l.useEffect(() => {
        n && !Z && s.Z.fetchRequestToJoinGuilds();
    }, [n, Z]);
    let E = null != _ && b.includes(_);
    return (l.useEffect(() => {
        !n && E && S !== _ && I(!0);
    }, [n, E, S, _]),
    0 === b.length)
        ? null
        : (0, i.jsx)(x, {
              onActivate: t,
              children: (0, i.jsx)(m.Z, {
                  folderNode: N,
                  expanded: n,
                  useCircleMask: !n && !E,
                  selected: E,
                  draggable: !1,
                  sorting: !1,
                  onExpandCollapse: () => {
                      I(!n), c.ZP.clearCoachmark();
                  },
                  folderIconContent: (0, i.jsx)(a.HourglassIcon, {
                      size: 'custom',
                      color: 'currentColor',
                      width: 24,
                      height: 24,
                      className: C.pendingIcon
                  }),
                  renderChildNode: function (e) {
                      return e.type !== p.eD.GUILD ? null : (0, i.jsx)(g.Z, { guildNode: e }, e.id);
                  }
              })
          });
}
