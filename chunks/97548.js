n.d(t, {
    A: () => I,
}),
    n(896048),
    n(638769);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(684013),
    s = n(964486),
    c = n(313961),
    u = n(652896),
    d = n(87001),
    p = n(616356),
    h = n(961350),
    f = n(734057),
    m = n(555528),
    g = n(309010),
    y = n(41984),
    A = n(412477),
    O = n(75280),
    E = n(433560),
    v = n(324093),
    b = n(897720),
    S = n(392164),
    x = n(985018),
    j = n(780682);

function I(e) {
    var t, n, I, N;
    let w,
        T,
        C,
        {
            id: _,
            widget: P,
            size: D,
            locked: R,
            padding: L,
            borderWidth: k,
            opacity: M,
            horizontal: V,
            pinned: U,
            anchorTop: z,
            anchorLeft: G,
            showEmpty: H = !0,
        } = e,
        Y = V ? b.IV.HORIZONTAL : b.IV.VERTICAL,
        F = Y === b.IV.VERTICAL,
        K = (0, l.bG)([m.A], () => {
            var e;
            let t = m.A.getWidget(_);
            return !!(0, b.dO)(t) && !R && (null == (e = t.meta.showAllStreams) || e);
        }, [_, R]),
        Z = (0, l.bG)([g.A], () => g.A.getVoiceChannelId()),
        W = (0, l.bG)([f.A], () => f.A.getChannel(Z)),
        B = (0, l.bG)([h.default], () => h.default.getId()),
        {
            streamParticipants: X,
            activeStreams: Q,
            participantsVersion: J,
        } = ((I = (z && F) || (G && V)),
        (N = (!z && F) || (!G && V)),
        (w = (0, l.yK)([p.A], () => (null == Z ? [] : p.A.getAllActiveStreamsForChannel(Z)))),
        (T = r.useMemo(() => new Set(w.map((e) => (0, u._z)(e))), [w])),
        (C = (0, l.bG)([c.A], () => (null == Z ? -1 : c.A.getParticipantsVersion(Z)))),
        {
            streamParticipants: (0, l.yK)([c.A, p.A], () => {
                if (null == Z) return [];

                function e(e) {
                    return T.has((0, u._z)(e.stream));
                }
                let t = c.A.getStreamParticipants(Z).filter((t) => {
                    if (t.user.id === B) return !1;
                    let n = p.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && E.O.has(n.state)) && (!!K || e(t));
                });
                return (
                    t.sort((t, n) => {
                        if (I) {
                            if (e(t) && !e(n)) return -1;
                            if (!e(t) && e(n)) return 1;
                        } else if (N) {
                            if (e(t) && !e(n)) return 1;
                            if (!e(t) && e(n)) return -1;
                        }
                        return t.user.username.localeCompare(n.user.username);
                    }),
                    t
                );
            }, [Z, T, B, K, I, N]),
            activeStreams: T,
            participantsVersion: C,
        }),
        q = X.length,
        $ = (0, l.bG)([d.A], () => d.A.getWindowState(S.f), []),
        {
            tileWidth: ee,
            tileHeight: et,
            widgetWidth: en,
            widgetHeight: ei,
            containerRef: er,
            containerMinMaxSizes: el,
        } = (0, v.K2)({
            tileCount: q,
            padding: L,
            borderWidth: k,
            isVertical: F,
            widgetSize: D,
        }),
        ea = {
            id: _,
            widget: P,
            layout: Y,
            participants: X.length,
            padding: L,
            borderWidth: k,
            widgetMinMaxSizes: el,
            containerSize: {
                width: en,
                height: ei,
            },
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (t = null == $ ? void 0 : $.height) ? t : ei,
                right: null != (n = null == $ ? void 0 : $.width) ? n : en,
            },
            locked: R,
        };
    (0, v.k1)({
        id: _,
        streamParticipants: X,
        layout: Y,
        widgetLayoutSpecs: ea,
    });
    let eo = null == W || (0 === Q.size && R) || (0 === q && !R);
    return (r.useEffect(() => {
        o.A.setGpuBoostRequested(y.y7.OVERLAY_VIDEO_STREAM_RENDERING, !eo);
    }, [eo]),
    (0, s.Ay)(() => () => {
        o.A.setGpuBoostRequested(y.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (eo || !U) && R)
        ? null
        : eo && !R
          ? H
              ? R
                  ? null
                  : (0, i.jsx)(A.g, {
                        emptyText: x.intl.string(x.t["T6+rXy"]),
                        icon: a.Fzq,
                        absolute: !0,
                    })
              : null
          : (0, i.jsx)("div", {
                className: j.u,
                style: {
                    opacity: M,
                },
                ref: er,
                children: (0, i.jsx)(O.A, {
                    widgetId: _,
                    tileWidth: ee,
                    tileHeight: et,
                    locked: R,
                    layout: Y,
                    activeStreams: Q,
                    streamParticipants: X,
                    participantsVersion: J,
                    pinned: U,
                    padding: L,
                }),
            });
}
