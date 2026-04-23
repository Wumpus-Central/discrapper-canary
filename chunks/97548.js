n.d(t, { A: () => T });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    s = n(183623),
    l = n(684013),
    o = n(964486),
    d = n(313961),
    c = n(652896),
    u = n(87001),
    h = n(616356),
    m = n(961350),
    p = n(734057),
    g = n(555528),
    f = n(309010),
    _ = n(41984),
    x = n(412477),
    A = n(75280),
    E = n(433560),
    S = n(324093),
    I = n(897720),
    v = n(392164),
    b = n(985018),
    C = n(674243);
function T(e) {
    var t, n;
    let T,
        j,
        y,
        {
            id: w,
            widget: N,
            size: R,
            locked: M,
            padding: O,
            borderWidth: k,
            opacity: D,
            horizontal: z,
            pinned: P,
            anchorTop: L,
            anchorLeft: V,
            showEmpty: G = !0,
        } = e,
        U = z ? I.IV.HORIZONTAL : I.IV.VERTICAL,
        H = U === I.IV.VERTICAL,
        F = (0, a.bG)([g.A], () => {
            let e = g.A.getWidget(w);
            return !!(0, I.dO)(e) && !M && (e.meta.showAllStreams ?? !0);
        }, [w, M]),
        W = (0, a.bG)([f.A], () => f.A.getVoiceChannelId()),
        Z = (0, a.bG)([p.A], () => p.A.getChannel(W)),
        Y = (0, a.bG)([m.default], () => m.default.getId()),
        {
            streamParticipants: X,
            activeStreams: B,
            participantsVersion: K,
        } = ((t = (L && H) || (V && z)),
        (n = (!L && H) || (!V && z)),
        (T = (0, a.yK)([h.A], () => (null == W ? [] : h.A.getAllActiveStreamsForChannel(W)))),
        (j = r.useMemo(() => new Set(T.map((e) => (0, c._z)(e))), [T])),
        (y = (0, a.bG)([d.A], () => (null == W ? -1 : d.A.getParticipantsVersion(W)))),
        {
            streamParticipants: (0, a.yK)([d.A, h.A], () => {
                if (null == W) return [];
                function e(e) {
                    return j.has((0, c._z)(e.stream));
                }
                let i = d.A.getStreamParticipants(W).filter((t) => {
                    if (t.user.id === Y) return !1;
                    let n = h.A.getActiveStreamForUser(t.user.id, t.stream.guildId);
                    return !(null != n && E.O.has(n.state)) && (!!F || e(t));
                });
                return (
                    i.sort((i, r) => {
                        if (t) {
                            if (e(i) && !e(r)) return -1;
                            if (!e(i) && e(r)) return 1;
                        } else if (n) {
                            if (e(i) && !e(r)) return 1;
                            if (!e(i) && e(r)) return -1;
                        }
                        return i.user.username.localeCompare(r.user.username);
                    }),
                    i
                );
            }, [W, j, Y, F, t, n]),
            activeStreams: j,
            participantsVersion: y,
        }),
        q = X.length,
        Q = (0, a.bG)([u.A], () => u.A.getWindowState(v.f), []),
        {
            tileWidth: $,
            tileHeight: J,
            widgetWidth: ee,
            widgetHeight: et,
            containerRef: en,
            containerMinMaxSizes: ei,
        } = (0, S.K2)({ tileCount: q, padding: O, borderWidth: k, isVertical: H, widgetSize: R }),
        er = {
            id: w,
            widget: N,
            layout: U,
            participants: X.length,
            padding: O,
            borderWidth: k,
            widgetMinMaxSizes: ei,
            containerSize: { width: ee, height: et },
            orientedPosition: { top: 0, left: 0, bottom: Q?.height ?? et, right: Q?.width ?? ee },
            locked: M,
        };
    (0, S.k1)({ id: w, streamParticipants: X, layout: U, widgetLayoutSpecs: er });
    let ea = null == Z || (0 === B.size && M) || (0 === q && !M);
    return (r.useEffect(() => {
        l.A.setGpuBoostRequested(_.y7.OVERLAY_VIDEO_STREAM_RENDERING, !ea);
    }, [ea]),
    (0, o.Ay)(() => () => {
        l.A.setGpuBoostRequested(_.y7.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (ea || !P) && M)
        ? null
        : ea && !M
          ? G
              ? M
                  ? null
                  : (0, i.jsx)(x.g, { emptyText: b.intl.string(b.t["T6+rXy"]), icon: s.F, absolute: !0 })
              : null
          : (0, i.jsx)("div", {
                className: C.u,
                style: { opacity: D },
                ref: en,
                children: (0, i.jsx)(A.A, {
                    widgetId: w,
                    tileWidth: $,
                    tileHeight: J,
                    locked: M,
                    layout: U,
                    activeStreams: B,
                    streamParticipants: X,
                    participantsVersion: K,
                    pinned: P,
                    padding: O,
                }),
            });
}
