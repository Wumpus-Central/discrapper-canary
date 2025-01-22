n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(952265),
    s = n(481060),
    o = n(493773),
    c = n(378298),
    d = n(444957),
    u = n(276618),
    h = n(367408),
    p = n(473092),
    m = n(819640),
    f = n(665149),
    g = n(134612),
    C = n(388032),
    x = n(629435);
t.Z = l.memo(function (e) {
    let { channel: t } = e,
        v = (0, d.h)(t.id),
        _ = (0, u.o)(t.id),
        I = (0, h.M)(t.id),
        E = (0, a.f9)(),
        b = (0, r.e7)([m.Z], () => m.Z.hasLayers()),
        Z = l.useCallback(() => (_ ? C.intl.string(C.t['16QyDg']) : null != I ? C.intl.string(C.t.kCN9i4) : null), [_, I]),
        N = l.useMemo(() => (_ || null != I) && !E && !b, [_, I, E, b]),
        [S, T] = l.useState(Z());
    l.useEffect(() => {
        null != I &&
            null != v &&
            (s.AccessibilityAnnouncer.announce(C.intl.string(C.t.acsXuL)),
            setTimeout(() => {
                (0, c.T)(t.id, [I.id]);
            }, 5000),
            (0, p.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: I.id,
                warningType: I.type,
                isNudgeWarning: null != I,
                viewName: p.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
            })),
            _ &&
                (s.AccessibilityAnnouncer.announce(C.intl.string(C.t['1dxCqK'])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000));
    }, [t, I, v, _]),
        (0, o.Z)(() => {
            null != v &&
                (0, p.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: v.id,
                    warningType: v.type,
                    isNudgeWarning: null != I,
                    viewName: p.pb.SAFETY_TOOLS_BUTTON
                });
        }),
        l.useEffect(() => {
            let e = Z();
            null != e && T(e);
        }, [_, I, Z]);
    let j = l.useCallback(() => {
        if ((null != I && (0, c.T)(t.id, [I.id]), null != v))
            (0, s.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('37229'), n.e('89650')]).then(n.bind(n, 611446));
                    return (n) => {
                        let { onClose: l, transitionState: r } = n;
                        return (0, i.jsx)(e, {
                            otherUserId: t.getRecipientId(),
                            channelId: t.id,
                            warningId: v.id,
                            warningType: v.type,
                            onClose: l,
                            transitionState: r
                        });
                    };
                },
                { modalKey: g.X_ }
            ),
                (0, p.qc)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: v.id,
                    warningType: v.type,
                    cta: p.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != I
                });
    }, [I, v, t]);
    return null == v
        ? null
        : (0, i.jsx)(s.Tooltip, {
              forceOpen: N,
              text: S,
              color: s.TooltipColors.BRAND,
              position: 'bottom',
              tooltipClassName: x.tooltip,
              tooltipContentClassName: x.tooltipContent,
              children: () =>
                  (0, i.jsx)(f.ZP.Icon, {
                      icon: s.ShieldIcon,
                      onClick: j,
                      tooltip: C.intl.string(C.t.rpc2qq),
                      tooltipDisabled: null != I
                  })
          });
});
