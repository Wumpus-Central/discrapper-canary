n.d(t, { A: () => C }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(110259),
    a = n(311907),
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
var x = n(653906);
function C(e) {
    let {
            guildId: t,
            channel: n,
            width: C,
            height: S,
            keepOpen: I,
            interactive: T = !0,
            analyticsSource: v,
            onClose: N,
        } = e,
        y = (function (e) {
            let [t, n] = (0, a.yK)([A.A], () => [A.A.getSounds(), A.A.getFavorites()]);
            return l.useMemo(() => {
                let i = [],
                    l = [...e, "0"],
                    s = (e, l) => {
                        for (let s of t.get(e)?.sort((e, t) => h.default.compare(e.soundId, t.soundId)) ?? []) {
                            let e = n.has(s.soundId);
                            ((e && l) || (!e && !l)) && s.available && i.push(s);
                        }
                    };
                return l.forEach((e) => s(e, !0)), l.forEach((e) => s(e, !1)), i;
            }, [t, n, e]);
        })((0, f.Y)(n, !0)),
        b = (0, g.T)(),
        j = l.useRef(null),
        [R, M] = l.useState(void 0),
        D = (0, a.bG)([u.A], () => u.A.getMediaSessionId()),
        { analyticsLocations: O } = (0, o.Ay)(r.A.SOUNDBOARD_WHEEL),
        L = l.useCallback(
            (e) => {
                (0, p.Ak)(e, n.id, O), N();
            },
            [O, n.id, N],
        );
    l.useEffect(() => {
        m.E7(), d.bW.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === y.length && 0 === b.length && N();
        }, [y.length, b, N]),
        l.useEffect(
            () => () => {
                let e = j.current;
                I || null == e || L(e);
            },
            [I, L],
        ),
        (0, c.A)(
            {
                type: s.ImpressionTypes.POPOUT,
                name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: { source: v, guild_id: t, media_session_id: D },
            },
            { disableTrack: !T },
        );
    let P = l.useCallback((e) => {
            (j.current = e), M(e?.soundId);
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
                        { interactive: T, className: x.a, sound: e, focused: R === e.soundId, channel: n },
                        e.soundId,
                    ),
                ),
            [R, n, T, y],
        );
    return 0 === y.length
        ? null
        : (0, i.jsx)(o.f5, {
              value: O,
              children: (0, i.jsx)(_.A, {
                  wheelWidth: C,
                  wheelHeight: S,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !I,
                  activeItem: R,
                  onItemSelect: w,
                  onItemAction: k,
                  onClose: N,
                  interactive: T,
                  children: U,
              }),
          });
}
