n.d(t, { A: () => y });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(397927),
    r = n(684013),
    o = n(964486),
    d = n(313961),
    u = n(652896),
    c = n(87001),
    h = n(616356),
    A = n(961350),
    m = n(734057),
    g = n(555528),
    p = n(309010),
    f = n(41984),
    _ = n(412477),
    E = n(75280),
    x = n(433560),
    S = n(324093),
    I = n(897720),
    T = n(392164),
    C = n(985018),
    v = n(780682);
function y(e) {
    var t, n;
    let y,
        N,
        O,
        {
            id: b,
            widget: j,
            size: w,
            locked: L,
            padding: R,
            borderWidth: D,
            opacity: M,
            horizontal: k,
            pinned: z,
            anchorTop: V,
            anchorLeft: U,
            showEmpty: P = !0,
        } = e,
        G = k ? I.IV.HORIZONTAL : I.IV.VERTICAL,
        H = G === I.IV.VERTICAL,
        Y = (0, a.bG)([g.A], () => {
            let e = g.A.getWidget(b);
            return !!(0, I.dO)(e) && !L && (e.meta.showAllStreams ?? !0);
        }, [b, L]),
        F = (0, a.bG)([p.A], () => p.A.getVoiceChannelId()),
        W = (0, a.bG)([m.A], () => m.A.getChannel(F)),
        K = (0, a.bG)([A.default], () => A.default.getId()),
        {
            streamParticipants: Z,
            activeStreams: B,
            participantsVersion: X,
        } = ((t = (V && H) || (U && k)),
        (n = (!V && H) || (!U && k)),
        (y = (0, a.yK)([h.A], () => (null == F ? [] : h.A.getAllActiveStreamsForChannel(F)))),
        (N = l.useMemo(() => new Set(y.map((e) => (0, u._z)(e))), [y])),
        (O = (0, a.bG)([d.A], () => (null == F ? -1 : d.A.getParticipantsVersion(F)))),
        {
            streamParticipants: (0, a.yK)([d.A, h.A], () => {
                if (null == F) return [];
                function e(e) {
                    return N.has((0, u._z)(e.stream));
                }
                let i = d.A.getStreamParticipants(F).filter((t) => {
                    if (t.user.id === K) return !1;
                    let n = h.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && x.O.has(n.state)) && (!!Y || e(t));
                });
                return (
                    i.sort((i, l) => {
                        if (t) {
                            if (e(i) && !e(l)) return -1;
                            if (!e(i) && e(l)) return 1;
                        } else if (n) {
                            if (e(i) && !e(l)) return 1;
                            if (!e(i) && e(l)) return -1;
                        }
                        return i.user.username.localeCompare(l.user.username);
                    }),
                    i
                );
            }, [F, N, K, Y, t, n]),
            activeStreams: N,
            participantsVersion: O,
        }),
        J = Z.length,
        Q = (0, a.bG)([c.A], () => c.A.getWindowState(T.f), []),
        {
            tileWidth: q,
            tileHeight: $,
            widgetWidth: ee,
            widgetHeight: et,
            containerRef: en,
            containerMinMaxSizes: ei,
        } = (0, S.K2)({ tileCount: J, padding: R, borderWidth: D, isVertical: H, widgetSize: w }),
        el = {
            id: b,
            widget: j,
            layout: G,
            participants: Z.length,
            padding: R,
            borderWidth: D,
            widgetMinMaxSizes: ei,
            containerSize: { width: ee, height: et },
            orientedPosition: { top: 0, left: 0, bottom: Q?.height ?? et, right: Q?.width ?? ee },
            locked: L,
        };
    (0, S.k1)({ id: b, streamParticipants: Z, layout: G, widgetLayoutSpecs: el });
    let ea = null == W || (0 === B.size && L) || (0 === J && !L);
    return (l.useEffect(() => {
        r.A.setGpuBoostRequested(f.y7.OVERLAY_VIDEO_STREAM_RENDERING, !ea);
    }, [ea]),
    (0, o.Ay)(() => () => {
        r.A.setGpuBoostRequested(f.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (ea || !z) && L)
        ? null
        : ea && !L
          ? P
              ? L
                  ? null
                  : (0, i.jsx)(_.g, { emptyText: C.intl.string(C.t["T6+rXy"]), icon: s.Fzq, absolute: !0 })
              : null
          : (0, i.jsx)("div", {
                className: v.u,
                style: { opacity: M },
                ref: en,
                children: (0, i.jsx)(E.A, {
                    widgetId: b,
                    tileWidth: q,
                    tileHeight: $,
                    locked: L,
                    layout: G,
                    activeStreams: B,
                    streamParticipants: Z,
                    participantsVersion: X,
                    pinned: z,
                    padding: R,
                }),
            });
}
