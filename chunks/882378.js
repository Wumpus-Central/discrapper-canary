n.d(t, { Z: () => x }), n(388685);
var r = n(255367),
    i = n(73800),
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
    _ = n(426195);
let x = i.memo(function (e) {
    let { channel: t } = e,
        x = (0, u.h)(t.id),
        y = (0, d.o)(t.id),
        C = (0, p.M)(t.id),
        v = (0, o.f9)(),
        j = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        O = i.useCallback(() => (y ? b.intl.string(b.t['16QyDg']) : null != C ? b.intl.string(b.t.kCN9i4) : null), [y, C]),
        E = i.useMemo(() => (y || null != C) && !v && !j, [y, C, v, j]),
        [I, S] = i.useState(O());
    i.useEffect(() => {
        null != C &&
            null != x &&
            (a.uvj.announce(b.intl.string(b.t.acsXuL)),
            setTimeout(() => {
                (0, c.T)(t.id, [C.id]);
            }, 5000),
            (0, h.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: C.id,
                warningType: C.type,
                isNudgeWarning: null != C,
                viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
            })),
            y &&
                (a.uvj.announce(b.intl.string(b.t['1dxCqK'])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000));
    }, [t, C, x, y]),
        (0, s.ZP)(() => {
            null != x &&
                (0, h.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: x.id,
                    warningType: x.type,
                    isNudgeWarning: null != C,
                    viewName: h.pb.SAFETY_TOOLS_BUTTON
                });
        }),
        i.useEffect(() => {
            let e = O();
            null != e && S(e);
        }, [y, C, O]);
    let P = i.useCallback(() => {
        null != C && (0, c.T)(t.id, [C.id]),
            null != x &&
                ((0, a.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('49508'), n.e('89650')]).then(n.bind(n, 611446));
                        return (n) => {
                            let { onClose: i, transitionState: l } = n;
                            return (0, r.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: x.id,
                                warningType: x.type,
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
                    warningId: x.id,
                    warningType: x.type,
                    cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != C
                }));
    }, [C, x, t]);
    return null == x
        ? null
        : (0, r.jsx)(a.ua7, {
              forceOpen: E,
              text: I,
              color: a.FGA.BRAND,
              position: 'bottom',
              tooltipClassName: _.tooltip,
              tooltipContentClassName: _.tooltipContent,
              children: () =>
                  (0, r.jsx)(m.ZP.Icon, {
                      icon: a.b7C,
                      onClick: P,
                      tooltip: b.intl.string(b.t.rpc2qq),
                      tooltipDisabled: null != C
                  })
          });
});
