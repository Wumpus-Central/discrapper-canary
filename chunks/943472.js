n.r(t), n.d(t, { default: () => f });
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(367513),
    a = n(401843),
    o = n(512513),
    u = n(386467),
    d = n(923917),
    c = n(574172),
    h = n(981355),
    A = n(175203),
    I = n(461782),
    p = n(616356),
    w = n(734057),
    T = n(309010),
    C = n(313961),
    L = n(164617),
    m = n(567987),
    E = n(806931),
    _ = n(652215),
    U = n(985018),
    M = n(732154);
let P = [o.z];
function f(e) {
    let { windowKey: t, channelId: n, participantId: o } = e,
        f = (0, l.bG)([w.A], () => w.A.getChannel(n)),
        g = (0, l.bG)([C.A], () => C.A.getParticipant(n, o), [n, o]),
        y = null != f && null != g,
        b = (0, l.bG)([T.A], () => T.A.getVoiceChannelId() === n);
    i.useEffect(() => {
        (y && b) || c.close(t);
    }, [y, b, t]);
    let v = i.useCallback(
            (e) => {
                let { unmountWindow: t } = e;
                s.A.returnParticipant(n, o), t();
            },
            [n, o],
        ),
        x = (0, m.E)({ channel: f }),
        O = (0, l.bG)([p.A], () => !!(0, E.Ay)(g) && null == p.A.getActiveStreamForApplicationStream(g.stream)),
        R = i.useCallback(() => {
            (0, E.Ay)(g) && (0, a.A9)(g.stream, { forceMultiple: !0 });
        }, [g]),
        S = i.useMemo(
            () =>
                null == g
                    ? U.intl.string(U.t.lfzt24)
                    : g.type === E.lp.USER
                      ? g.user.username
                      : g.type === E.lp.STREAM
                        ? U.intl.formatToPlainString(U.t["/DC1y9"], { username: g.user.username })
                        : U.intl.string(U.t["8vlBo7"]),
            [g],
        ),
        D = (0, h.A)();
    return (0, r.jsx)(d.A, {
        withTitleBar: !0,
        keybinds: P,
        windowKey: t,
        title: S,
        channelId: n,
        onBeforeUnload: v,
        appContext: _.BRT.CALL_TILE_POPOUT,
        hideModals: !0,
        children: y
            ? (0, r.jsx)(u.A.Provider, {
                  value: f.guild_id,
                  children: (0, r.jsx)(I.Ay, {
                      timeout: 2e3,
                      children: (e) =>
                          (0, r.jsx)("div", {
                              className: M.V,
                              onMouseMove: e.onActive,
                              onMouseDown: e.onActive,
                              onMouseLeave: e.onForceIdle,
                              children: (0, r.jsx)(A.Ay, {
                                  className: M.V,
                                  participant: g,
                                  channel: f,
                                  width: D.width,
                                  inCall: !0,
                                  popoutType: L.N.CALL_TILE,
                                  focused: !0,
                                  noBorder: !0,
                                  onContextMenu: x,
                                  onClick: O ? R : void 0,
                              }),
                          }),
                  }),
              })
            : null,
    });
}
