n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(952265),
    s = n(481060),
    o = n(493773),
    c = n(378298),
    d = n(444957),
    u = n(276618),
    p = n(367408),
    h = n(473092),
    f = n(819640),
    g = n(665149),
    m = n(134612),
    b = n(388032),
    y = n(554828);
let _ = i.memo(function (e) {
    let { channel: t } = e,
        _ = (0, d.h)(t.id),
        j = (0, u.o)(t.id),
        O = (0, p.M)(t.id),
        x = (0, a.f9)(),
        v = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        C = i.useCallback(
            () => (j ? b.intl.string(b.t["16QyDg"]) : null != O ? b.intl.string(b.t.kCN9i4) : null),
            [j, O],
        ),
        I = i.useMemo(() => (j || null != O) && !x && !v, [j, O, x, v]),
        [E, S] = i.useState(C());
    i.useEffect(() => {
        null != O &&
            null != _ &&
            (s.uvj.announce(b.intl.string(b.t.acsXuL)),
            setTimeout(() => {
                (0, c.T)(t.id, [O.id]);
            }, 5000),
            (0, h.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: O.id,
                warningType: O.type,
                isNudgeWarning: null != O,
                viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            j &&
                (s.uvj.announce(b.intl.string(b.t["1dxCqK"])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000));
    }, [t, O, _, j]),
        (0, o.ZP)(() => {
            null != _ &&
                (0, h.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: _.id,
                    warningType: _.type,
                    isNudgeWarning: null != O,
                    viewName: h.pb.SAFETY_TOOLS_BUTTON,
                });
        }),
        i.useEffect(() => {
            let e = C();
            null != e && S(e);
        }, [j, O, C]);
    let Z = i.useCallback(() => {
        null != O && (0, c.T)(t.id, [O.id]),
            null != _ &&
                ((0, s.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("37031"), n.e("89650"), n.e("2742")]).then(
                            n.bind(n, 611446),
                        );
                        return (n) => {
                            let { onClose: i, transitionState: l } = n;
                            return (0, r.jsx)(e, {
                                otherUserId: t.getRecipientId(),
                                channelId: t.id,
                                warningId: _.id,
                                warningType: _.type,
                                onClose: i,
                                transitionState: l,
                            });
                        };
                    },
                    { modalKey: m.X_ },
                ),
                (0, h.qc)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: _.id,
                    warningType: _.type,
                    cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != O,
                }));
    }, [O, _, t]);
    return null == _
        ? null
        : (0, r.jsx)(s.ua7, {
              forceOpen: I,
              text: E,
              color: s.FGA.BRAND,
              position: "bottom",
              tooltipClassName: y.tooltip,
              tooltipContentClassName: y.tooltipContent,
              children: () =>
                  (0, r.jsx)(g.ZP.Icon, {
                      icon: s.b7C,
                      onClick: Z,
                      tooltip: b.intl.string(b.t.rpc2qq),
                      tooltipDisabled: null != O,
                  }),
          });
});
