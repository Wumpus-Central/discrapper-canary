(n.d(t, { Z: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(952265),
    s = n(481060),
    o = n(493773),
    c = n(378298),
    d = n(513646),
    u = n(276618),
    h = n(367408),
    p = n(473092),
    f = n(819640),
    g = n(665149),
    m = n(134612),
    b = n(388032),
    _ = n(426195);
let y = i.memo(function (e) {
    let { channel: t } = e,
        y = (0, d.h)(t.id),
        j = (0, u.o)(t.id),
        O = (0, h.M)(t.id),
        x = (0, a.f9)(),
        v = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        C = i.useCallback(() => (j ? b.intl.string(b.t['16QyDg']) : null != O ? b.intl.string(b.t.kCN9i4) : null), [j, O]),
        E = i.useMemo(() => (j || null != O) && !x && !v, [j, O, x, v]),
        [Z, I] = i.useState(C());
    (i.useEffect(() => {
        (null != O &&
            null != y &&
            (s.uvj.announce(b.intl.string(b.t.acsXuL)),
            setTimeout(() => {
                (0, c.T)(t.id, [O.id]);
            }, 5000),
            (0, p.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: O.id,
                warningType: O.type,
                isNudgeWarning: null != O,
                viewName: p.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
            })),
            j &&
                (s.uvj.announce(b.intl.string(b.t['1dxCqK'])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000)));
    }, [t, O, y, j]),
        (0, o.ZP)(() => {
            null != y &&
                (0, p.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: y.id,
                    warningType: y.type,
                    isNudgeWarning: null != O,
                    viewName: p.pb.SAFETY_TOOLS_BUTTON
                });
        }),
        i.useEffect(() => {
            let e = C();
            null != e && I(e);
        }, [j, O, C]));
    let S = i.useCallback(() => {
        (null != O && (0, c.T)(t.id, [O.id]),
            null != y &&
                ((0, s.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('49508'), n.e('9738'), n.e('71745')]).then(n.bind(n, 611446));
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
                    { modalKey: m.X_ }
                ),
                (0, p.qc)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: y.id,
                    warningType: y.type,
                    cta: p.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != O
                })));
    }, [O, y, t]);
    return null == y
        ? null
        : (0, r.jsx)(s.ua7, {
              forceOpen: E,
              text: Z,
              color: s.FGA.BRAND,
              position: 'bottom',
              tooltipClassName: _.tooltip,
              tooltipContentClassName: _.tooltipContent,
              children: () =>
                  (0, r.jsx)(g.ZP.Icon, {
                      icon: s.b7C,
                      onClick: S,
                      tooltip: b.intl.string(b.t.rpc2qq),
                      tooltipDisabled: null != O
                  })
          });
});
