n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(952265),
    a = n(481060),
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
    y = n(426195);
let _ = i.memo(function (e) {
    let { channel: t } = e,
        _ = (0, u.h)(t.id),
        C = (0, d.o)(t.id),
        x = (0, p.M)(t.id),
        v = (0, o.f9)(),
        j = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        O = i.useCallback(() => (C ? b.NW.string(b.t['16QyDg']) : null != x ? b.NW.string(b.t.kCN9i4) : null), [C, x]),
        E = i.useMemo(() => (C || null != x) && !v && !j, [C, x, v, j]),
        [N, I] = i.useState(O());
    i.useEffect(() => {
        null != x &&
            null != _ &&
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
            C &&
                (a.uvj.announce(b.NW.string(b.t['1dxCqK'])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000));
    }, [t, x, _, C]),
        (0, s.ZP)(() => {
            null != _ &&
                (0, h.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: _.id,
                    warningType: _.type,
                    isNudgeWarning: null != x,
                    viewName: h.pb.SAFETY_TOOLS_BUTTON
                });
        }),
        i.useEffect(() => {
            let e = O();
            null != e && I(e);
        }, [C, x, O]);
    let P = i.useCallback(() => {
        null != x && (0, c.T)(t.id, [x.id]),
            null != _ &&
                ((0, a.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('49508'), n.e('89650')]).then(n.bind(n, 611446));
                        return (n) => {
                            let { onClose: i, transitionState: l } = n;
                            return (0, r.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: _.id,
                                warningType: _.type,
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
                    warningId: _.id,
                    warningType: _.type,
                    cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != x
                }));
    }, [x, _, t]);
    return null == _
        ? null
        : (0, r.jsx)(a.ua7, {
              forceOpen: E,
              text: N,
              color: a.FGA.BRAND,
              position: 'bottom',
              tooltipClassName: y.tooltip,
              tooltipContentClassName: y.tooltipContent,
              children: () =>
                  (0, r.jsx)(m.ZP.Icon, {
                      icon: a.b7C,
                      onClick: P,
                      tooltip: b.NW.string(b.t.rpc2qq),
                      tooltipDisabled: null != x
                  })
          });
});
