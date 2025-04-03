n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(952265),
    a = n(481060),
    s = n(493773),
    c = n(378298),
    u = n(444957),
    d = n(276618),
    p = n(367408),
    h = n(473092),
    f = n(819640),
    m = n(665149),
    g = n(134612),
    b = n(388032),
    _ = n(426195);
let C = i.memo(function (e) {
    let { channel: t } = e,
        C = (0, u.h)(t.id),
        y = (0, d.o)(t.id),
        x = (0, p.M)(t.id),
        v = (0, o.f9)(),
        j = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        O = i.useCallback(() => (y ? b.NW.string(b.t['16QyDg']) : null != x ? b.NW.string(b.t.kCN9i4) : null), [y, x]),
        E = i.useMemo(() => (y || null != x) && !v && !j, [y, x, v, j]),
        [N, I] = i.useState(O());
    i.useEffect(() => {
        null != x &&
            null != C &&
            (a.uvj.announce(b.NW.string(b.t.acsXuL)),
            setTimeout(() => {
                (0, c.T)(t.id, [x.id]);
            }, 5000),
            (0, h.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: x.id,
                warningType: x.type,
                isNudgeWarning: null != x,
                viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
            })),
            y &&
                (a.uvj.announce(b.NW.string(b.t['1dxCqK'])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000));
    }, [t, x, C, y]),
        (0, s.ZP)(() => {
            null != C &&
                (0, h.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: C.id,
                    warningType: C.type,
                    isNudgeWarning: null != x,
                    viewName: h.pb.SAFETY_TOOLS_BUTTON
                });
        }),
        i.useEffect(() => {
            let e = O();
            null != e && I(e);
        }, [y, x, O]);
    let P = i.useCallback(() => {
        null != x && (0, c.T)(t.id, [x.id]),
            null != C &&
                ((0, a.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('49508'), n.e('89650')]).then(n.bind(n, 611446));
                        return (n) => {
                            let { onClose: i, transitionState: l } = n;
                            return (0, r.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: C.id,
                                warningType: C.type,
                                onClose: i,
                                transitionState: l
                            });
                        };
                    },
                    { modalKey: g.X_ }
                ),
                (0, h.qc)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: C.id,
                    warningType: C.type,
                    cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != x
                }));
    }, [x, C, t]);
    return null == C
        ? null
        : (0, r.jsx)(a.ua7, {
              forceOpen: E,
              text: N,
              color: a.FGA.BRAND,
              position: 'bottom',
              tooltipClassName: _.tooltip,
              tooltipContentClassName: _.tooltipContent,
              children: () =>
                  (0, r.jsx)(m.ZP.Icon, {
                      icon: a.b7C,
                      onClick: P,
                      tooltip: b.NW.string(b.t.rpc2qq),
                      tooltipDisabled: null != x
                  })
          });
});
