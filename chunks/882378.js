n.d(t, { Z: () => y }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(952265),
    s = n(481060),
    o = n(493773),
    c = n(378298),
    d = n(513646),
    u = n(276618),
    p = n(367408),
    h = n(473092),
    f = n(819640),
    g = n(665149),
    m = n(134612),
    b = n(388032),
    _ = n(554828);
let y = i.memo(function (e) {
    let { channel: t } = e,
        y = (0, d.h)(t.id),
        O = (0, u.o)(t.id),
        j = (0, p.M)(t.id),
        x = (0, a.f9)(),
        v = (0, l.e7)([f.Z], () => f.Z.hasLayers()),
        C = i.useCallback(
            () => (O ? b.intl.string(b.t["16QyDv"]) : null != j ? b.intl.string(b.t.kCN9i0) : null),
            [O, j],
        ),
        I = i.useMemo(() => (O || null != j) && !x && !v, [O, j, x, v]),
        [S, E] = i.useState(C());
    i.useEffect(() => {
        null != j &&
            null != y &&
            (s.uvj.announce(b.intl.string(b.t.acsXuG)),
            setTimeout(() => {
                (0, c.T)(t.id, [j.id]);
            }, 5000),
            (0, h.KQ)({
                channelId: t.id,
                senderId: t.getRecipientId(),
                warningId: j.id,
                warningType: j.type,
                isNudgeWarning: null != j,
                viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP,
            })),
            O &&
                (s.uvj.announce(b.intl.string(b.t["1dxCqG"])),
                setTimeout(() => {
                    (0, c.Ot)(t.id);
                }, 5000));
    }, [t, j, y, O]),
        (0, o.ZP)(() => {
            null != y &&
                (0, h.KQ)({
                    channelId: t.id,
                    senderId: t.getRecipientId(),
                    warningId: y.id,
                    warningType: y.type,
                    isNudgeWarning: null != j,
                    viewName: h.pb.SAFETY_TOOLS_BUTTON,
                });
        }),
        i.useEffect(() => {
            let e = C();
            null != e && E(e);
        }, [O, j, C]);
    let Z = i.useCallback(() => {
        null != j && (0, c.T)(t.id, [j.id]),
            null != y &&
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
                                warningId: y.id,
                                warningType: y.type,
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
                    warningId: y.id,
                    warningType: y.type,
                    cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
                    isNudgeWarning: null != j,
                }));
    }, [j, y, t]);
    return null == y
        ? null
        : (0, r.jsx)(s.aML, {
              "data-migration-pending": !0,
              forceOpen: I,
              text: S,
              color: s.r6K.BRAND,
              position: "bottom",
              tooltipClassName: _.tooltip,
              tooltipContentClassName: _.tooltipContent,
              children: () =>
                  (0, r.jsx)(g.ZP.Icon, {
                      icon: s.b7C,
                      onClick: Z,
                      tooltip: b.intl.string(b.t.rpc2qv),
                      tooltipDisabled: null != j,
                  }),
          });
});
