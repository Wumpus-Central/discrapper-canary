n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(952265),
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
    _ = n(388032),
    C = n(629435);
let x = l.memo(function (e) {
    let { channel: t } = e,
        x = (0, d.h)(t.id),
        v = (0, u.o)(t.id),
        E = (0, h.M)(t.id),
        I = (0, r.f9)(),
        b = (0, a.e7)([m.Z], () => m.Z.hasLayers()),
        Z = l.useCallback(() => (v ? _.intl.string(_.t['16QyDg']) : null != E ? _.intl.string(_.t.kCN9i4) : null), [v, E]),
        N = l.useMemo(() => (v || null != E) && !I && !b, [v, E, I, b]),
        [T, S] = l.useState(Z());
    l.useEffect(() => {
        null != E &&
            null != x &&
            (s.uvj.announce(_.intl.string(_.t.acsXuL)),
            setTimeout(() => {
                (0, c.T)(t.id, [E.id]);
            }, 5000),
            (0, p.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: E.id,
                warningType: E.type,
                isNudgeWarning: null != E,
                viewName: p.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
            })),
            v &&
                (s.uvj.announce(_.intl.string(_.t['1dxCqK'])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000));
    }, [t, E, x, v]),
        (0, o.Z)(() => {
            null != x &&
                (0, p.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    isNudgeWarning: null != E,
                    viewName: p.pb.SAFETY_TOOLS_BUTTON
                });
        }),
        l.useEffect(() => {
            let e = Z();
            null != e && S(e);
        }, [v, E, Z]);
    let j = l.useCallback(() => {
        null != E && (0, c.T)(t.id, [E.id]),
            null != x &&
                ((0, s.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('49508'), n.e('89650')]).then(n.bind(n, 611446));
                        return (n) => {
                            let { onClose: l, transitionState: a } = n;
                            return (0, i.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: x.id,
                                warningType: x.type,
                                onClose: l,
                                transitionState: a
                            });
                        };
                    },
                    { modalKey: g.X_ }
                ),
                (0, p.qc)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    cta: p.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != E
                }));
    }, [E, x, t]);
    return null == x
        ? null
        : (0, i.jsx)(s.ua7, {
              forceOpen: N,
              text: T,
              color: s.FGA.BRAND,
              position: 'bottom',
              tooltipClassName: C.tooltip,
              tooltipContentClassName: C.tooltipContent,
              children: () =>
                  (0, i.jsx)(f.ZP.Icon, {
                      icon: s.b7C,
                      onClick: j,
                      tooltip: _.intl.string(_.t.rpc2qq),
                      tooltipDisabled: null != E
                  })
          });
});
