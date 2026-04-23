n.r(t), n.d(t, { default: () => g });
var r = n(627968),
    i = n(64700),
    l = n(417597),
    a = n(367513),
    s = n(401843),
    o = n(512513),
    u = n(386467),
    d = n(923917),
    c = n(574172),
    A = n(981355),
    h = n(175203),
    I = n(461782),
    w = n(616356),
    C = n(734057),
    p = n(309010),
    L = n(313961),
    T = n(164617),
    m = n(567987),
    E = n(806931),
    U = n(652215),
    _ = n(985018),
    f = n(38577);
let P = [o.z];
function g(e) {
    let { windowKey: t, channelId: n, participantId: o } = e,
        g = (0, l.bG)([C.A], () => C.A.getChannel(n)),
        M = (0, l.bG)([L.A], () => L.A.getParticipant(n, o), [n, o]),
        y = null != g && null != M,
        x = (0, l.bG)([p.A], () => p.A.getVoiceChannelId() === n);
    i.useEffect(() => {
        (y && x) || c.close(t);
    }, [y, x, t]);
    let b = i.useCallback(
            (e) => {
                let { unmountWindow: t } = e;
                a.A.returnParticipant(n, o), t();
            },
            [n, o],
        ),
        v = (0, m.E)({ channel: g }),
        O = (0, l.bG)([w.A], () => !!(0, E.Ay)(M) && null == w.A.getActiveStreamForApplicationStream(M.stream)),
        R = i.useCallback(() => {
            (0, E.Ay)(M) && (0, s.A9)(M.stream, { forceMultiple: !0 });
        }, [M]),
        S = i.useMemo(
            () =>
                null == M
                    ? _.intl.string(_.t.lfzt24)
                    : M.type === E.lp.USER
                      ? M.user.username
                      : M.type === E.lp.STREAM
                        ? _.intl.formatToPlainString(_.t["/DC1y9"], { username: M.user.username })
                        : _.intl.string(_.t["8vlBo7"]),
            [M],
        ),
        D = (0, A.A)();
    return (0, r.jsx)(d.A, {
        withTitleBar: !0,
        keybinds: P,
        windowKey: t,
        title: S,
        channelId: n,
        onBeforeUnload: b,
        appContext: U.BRT.CALL_TILE_POPOUT,
        hideModals: !0,
        children: y
            ? (0, r.jsx)(u.A.Provider, {
                  value: g.guild_id,
                  children: (0, r.jsx)(I.Ay, {
                      timeout: 2e3,
                      children: (e) =>
                          (0, r.jsx)("div", {
                              className: f.V,
                              onMouseMove: e.onActive,
                              onMouseDown: e.onActive,
                              onMouseLeave: e.onForceIdle,
                              children: (0, r.jsx)(h.Ay, {
                                  className: f.V,
                                  participant: M,
                                  channel: g,
                                  width: D.width,
                                  inCall: !0,
                                  popoutType: T.N.CALL_TILE,
                                  focused: !0,
                                  noBorder: !0,
                                  onContextMenu: v,
                                  onClick: O ? R : void 0,
                              }),
                          }),
                  }),
              })
            : null,
    });
}
