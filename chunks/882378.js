(n.d(t, { Z: () => y }), n(388685));
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
let y = i.memo(function (e) {
    let { channel: t } = e,
        y = (0, u.h)(t.id),
        C = (0, d.o)(t.id),
        x = (0, p.M)(t.id),
        v = (0, a.f9)(),
        j = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        O = i.useCallback(() => (C ? b.intl.string(b.t['16QyDg']) : null != x ? b.intl.string(b.t.kCN9i4) : null), [C, x]),
        E = i.useMemo(() => (C || null != x) && !v && !j, [C, x, v, j]),
        [S, P] = i.useState(O());
    (i.useEffect(() => {
        (null != x &&
            null != y &&
            (o.uvj.announce(b.intl.string(b.t.acsXuL)),
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
                (o.uvj.announce(b.intl.string(b.t['1dxCqK'])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000)));
    }, [t, x, y, C]),
        (0, s.ZP)(() => {
            null != y &&
                (0, h.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: y.id,
                    warningType: y.type,
                    isNudgeWarning: null != x,
                    viewName: h.pb.SAFETY_TOOLS_BUTTON
                });
        }),
        i.useEffect(() => {
            let e = O();
            null != e && P(e);
        }, [C, x, O]));
    let I = i.useCallback(() => {
        (null != x && (0, c.T)(t.id, [x.id]),
            null != y &&
                ((0, o.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('49508'), n.e('89650')]).then(n.bind(n, 611446));
                        return (n) => {
                            let { onClose: i, transitionState: l } = n;
                            return (0, r.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: y.id,
                                warningType: y.type,
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
                    warningId: y.id,
                    warningType: y.type,
                    cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != x
                })));
    }, [x, y, t]);
    return null == y
        ? null
        : (0, r.jsx)(o.ua7, {
              forceOpen: E,
              text: S,
              color: o.FGA.BRAND,
              position: 'bottom',
              tooltipClassName: _.tooltip,
              tooltipContentClassName: _.tooltipContent,
              children: () =>
                  (0, r.jsx)(m.ZP.Icon, {
                      icon: o.b7C,
                      onClick: I,
                      tooltip: b.intl.string(b.t.rpc2qq),
                      tooltipDisabled: null != x
                  })
          });
});
