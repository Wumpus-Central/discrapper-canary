n.d(t, { A: () => x }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(110259),
    s = n(311907),
    r = n(793574),
    o = n(688810),
    c = n(139286),
    d = n(594061),
    u = n(383501),
    h = n(661191),
    m = n(796774),
    A = n(209932),
    p = n(536432),
    g = n(933204),
    f = n(805143),
    _ = n(375366),
    E = n(69217);
n(980504);
var C = n(342129);
function x(e) {
    let {
            guildId: t,
            channel: n,
            width: x,
            height: S,
            keepOpen: T,
            interactive: I = !0,
            analyticsSource: N,
            onClose: v,
        } = e,
        y = (function (e) {
            let [t, n] = (0, s.yK)([A.A], () => [A.A.getSounds(), A.A.getFavorites()]);
            return l.useMemo(() => {
                let i = [],
                    l = [...e, "0"],
                    a = (e, l) => {
                        for (let a of t.get(e)?.sort((e, t) => h.default.compare(e.soundId, t.soundId)) ?? []) {
                            let e = n.has(a.soundId);
                            ((e && l) || (!e && !l)) && a.available && i.push(a);
                        }
                    };
                return l.forEach((e) => a(e, !0)), l.forEach((e) => a(e, !1)), i;
            }, [t, n, e]);
        })((0, f.Y)(n, !0)),
        b = (0, g.T)(),
        R = l.useRef(null),
        [j, M] = l.useState(void 0),
        D = (0, s.bG)([u.A], () => u.A.getMediaSessionId()),
        { analyticsLocations: O } = (0, o.Ay)(r.A.SOUNDBOARD_WHEEL),
        L = l.useCallback(
            (e) => {
                (0, p.Ak)(e, n.id, O), v();
            },
            [O, n.id, v],
        );
    l.useEffect(() => {
        m.E7(), d.bW.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === y.length && 0 === b.length && v();
        }, [y.length, b, v]),
        l.useEffect(
            () => () => {
                let e = R.current;
                T || null == e || L(e);
            },
            [T, L],
        ),
        (0, c.A)(
            {
                type: a.ImpressionTypes.POPOUT,
                name: a.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: { source: N, guild_id: t, media_session_id: D },
            },
            { disableTrack: !I },
        );
    let P = l.useCallback((e) => {
            (R.current = e), M(e?.soundId);
        }, []),
        w = l.useCallback(
            (e) => {
                if (null == e) return void P(null);
                let t = y[e];
                null != t && P(t);
            },
            [P, y],
        ),
        k = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = y[e];
                null != t && L(t);
            },
            [y, L],
        ),
        U = l.useMemo(
            () =>
                y.map((e) =>
                    (0, i.jsx)(
                        E.Ay,
                        { interactive: I, className: C.a, sound: e, focused: j === e.soundId, channel: n },
                        e.soundId,
                    ),
                ),
            [j, n, I, y],
        );
    return 0 === y.length
        ? null
        : (0, i.jsx)(o.f5, {
              value: O,
              children: (0, i.jsx)(_.A, {
                  wheelWidth: x,
                  wheelHeight: S,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !T,
                  activeItem: j,
                  onItemSelect: w,
                  onItemAction: k,
                  onClose: v,
                  interactive: I,
                  children: U,
              }),
          });
}
