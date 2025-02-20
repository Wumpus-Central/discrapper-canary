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
    _ = n(622353);
let C = i.memo(function (e) {
    let { channel: t } = e,
        C = (0, u.h)(t.id),
        v = (0, d.o)(t.id),
        y = (0, p.M)(t.id),
        x = (0, o.f9)(),
        j = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        O = i.useCallback(() => (v ? b.NW.string(b.t['16QyDg']) : null != y ? b.NW.string(b.t.kCN9i4) : null), [v, y]),
        N = i.useMemo(() => (v || null != y) && !x && !j, [v, y, x, j]),
        [E, P] = i.useState(O());
    i.useEffect(() => {
        null != y &&
            null != C &&
            (a.uvj.announce(b.NW.string(b.t.acsXuL)),
            setTimeout(() => {
                (0, c.T)(t.id, [y.id]);
            }, 5000),
            (0, h.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: y.id,
                warningType: y.type,
                isNudgeWarning: null != y,
                viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
            })),
            v &&
                (a.uvj.announce(b.NW.string(b.t['1dxCqK'])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000));
    }, [t, y, C, v]),
        (0, s.ZP)(() => {
            null != C &&
                (0, h.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: C.id,
                    warningType: C.type,
                    isNudgeWarning: null != y,
                    viewName: h.pb.SAFETY_TOOLS_BUTTON
                });
        }),
        i.useEffect(() => {
            let e = O();
            null != e && P(e);
        }, [v, y, O]);
    let I = i.useCallback(() => {
        null != y && (0, c.T)(t.id, [y.id]),
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
                    isNudgeWarning: null != y
                }));
    }, [y, C, t]);
    return null == C
        ? null
        : (0, r.jsx)(a.ua7, {
              forceOpen: N,
              text: E,
              color: a.FGA.BRAND,
              position: 'bottom',
              tooltipClassName: _.tooltip,
              tooltipContentClassName: _.tooltipContent,
              children: () =>
                  (0, r.jsx)(m.ZP.Icon, {
                      icon: a.b7C,
                      onClick: I,
                      tooltip: b.NW.string(b.t.rpc2qq),
                      tooltipDisabled: null != y
                  })
          });
});
