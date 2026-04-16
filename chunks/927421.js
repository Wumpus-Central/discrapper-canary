l.d(t, { A: () => I }), l(321073);
var n = l(627968),
    r = l(64700),
    a = l(110259),
    s = l(311907),
    i = l(793574),
    u = l(688810),
    c = l(139286),
    o = l(594061),
    d = l(383501),
    h = l(661191),
    x = l(796774),
    f = l(209932),
    y = l(536432),
    p = l(933204),
    g = l(805143),
    A = l(375366),
    m = l(69217);
l(980504);
var _ = l(1986);
function I(e) {
    let {
            guildId: t,
            channel: l,
            width: I,
            height: v,
            keepOpen: E,
            interactive: M = !0,
            analyticsSource: C,
            onClose: w,
        } = e,
        D = (function (e) {
            let [t, l] = (0, s.yK)([f.A], () => [f.A.getSounds(), f.A.getFavorites()]);
            return r.useMemo(() => {
                let n = [],
                    r = [...e, "0"],
                    a = (e, r) => {
                        for (let a of t.get(e)?.sort((e, t) => h.default.compare(e.soundId, t.soundId)) ?? []) {
                            let e = l.has(a.soundId);
                            ((e && r) || (!e && !r)) && a.available && n.push(a);
                        }
                    };
                return r.forEach((e) => a(e, !0)), r.forEach((e) => a(e, !1)), n;
            }, [t, l, e]);
        })((0, g.Y)(l, !0)),
        N = (0, p.T)(),
        O = r.useRef(null),
        [T, b] = r.useState(void 0),
        j = (0, s.bG)([d.A], () => d.A.getMediaSessionId()),
        { analyticsLocations: S } = (0, u.Ay)(i.A.SOUNDBOARD_WHEEL),
        k = r.useCallback(
            (e) => {
                (0, y.Ak)(e, l.id, S), w();
            },
            [S, l.id, w],
        );
    r.useEffect(() => {
        x.E7(), o.bW.loadIfNecessary();
    }, []),
        r.useEffect(() => {
            0 === D.length && 0 === N.length && w();
        }, [D.length, N, w]),
        r.useEffect(
            () => () => {
                let e = O.current;
                E || null == e || k(e);
            },
            [E, k],
        ),
        (0, c.A)(
            {
                type: a.ImpressionTypes.POPOUT,
                name: a.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: { source: C, guild_id: t, media_session_id: j },
            },
            { disableTrack: !M },
        );
    let R = r.useCallback((e) => {
            (O.current = e), b(e?.soundId);
        }, []),
        L = r.useCallback(
            (e) => {
                if (null == e) return void R(null);
                let t = D[e];
                null != t && R(t);
            },
            [R, D],
        ),
        U = r.useCallback(
            (e) => {
                if (null == e) return;
                let t = D[e];
                null != t && k(t);
            },
            [D, k],
        ),
        P = r.useMemo(
            () =>
                D.map((e) =>
                    (0, n.jsx)(
                        m.Ay,
                        { interactive: M, className: _.a, sound: e, focused: T === e.soundId, channel: l },
                        e.soundId,
                    ),
                ),
            [T, l, M, D],
        );
    return 0 === D.length
        ? null
        : (0, n.jsx)(u.f5, {
              value: S,
              children: (0, n.jsx)(A.A, {
                  wheelWidth: I,
                  wheelHeight: v,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !E,
                  activeItem: T,
                  onItemSelect: L,
                  onItemAction: U,
                  onClose: w,
                  interactive: M,
                  children: P,
              }),
          });
}
