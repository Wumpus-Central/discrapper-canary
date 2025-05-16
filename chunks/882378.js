n.d(t, { Z: () => C }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(952265),
    o = n(481060),
    s = n(493773),
    c = n(378298),
    u = n(513646),
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
        x = (0, d.o)(t.id),
        y = (0, p.M)(t.id),
        v = (0, a.f9)(),
        j = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        O = i.useCallback(() => (x ? b.intl.string(b.t['16QyDg']) : null != y ? b.intl.string(b.t.kCN9i4) : null), [x, y]),
        E = i.useMemo(() => (x || null != y) && !v && !j, [x, y, v, j]),
        [I, P] = i.useState(O());
    i.useEffect(() => {
        null != y &&
            null != C &&
            (o.uvj.announce(b.intl.string(b.t.acsXuL)),
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
            x &&
                (o.uvj.announce(b.intl.string(b.t['1dxCqK'])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000));
    }, [t, y, C, x]),
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
        }, [x, y, O]);
    let S = i.useCallback(() => {
        null != y && (0, c.T)(t.id, [y.id]),
            null != C &&
                ((0, o.ZDy)(
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
        : (0, r.jsx)(o.ua7, {
              forceOpen: E,
              text: I,
              color: o.FGA.BRAND,
              position: 'bottom',
              tooltipClassName: _.tooltip,
              tooltipContentClassName: _.tooltipContent,
              children: () =>
                  (0, r.jsx)(m.ZP.Icon, {
                      icon: o.b7C,
                      onClick: S,
                      tooltip: b.intl.string(b.t.rpc2qq),
                      tooltipDisabled: null != y
                  })
          });
});
