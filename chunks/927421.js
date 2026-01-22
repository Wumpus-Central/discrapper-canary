n.d(t, { A: () => v }), n(896048), n(638769), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(110259),
    a = n(311907),
    s = n(793574),
    o = n(688810),
    c = n(139286),
    u = n(594061),
    d = n(383501),
    f = n(661191),
    p = n(796774),
    b = n(209932),
    g = n(536432),
    m = n(933204),
    h = n(805143),
    A = n(375366),
    y = n(69217),
    _ = n(980504),
    E = n(342129);
function v(e) {
    let {
            guildId: t,
            channel: n,
            width: v,
            height: O,
            keepOpen: x,
            interactive: S = !0,
            analyticsSource: N,
            onClose: C,
        } = e,
        j = (function (e) {
            let [t, n] = (0, a.yK)([b.A], () => [b.A.getSounds(), b.A.getFavorites()]);
            return r.useMemo(() => {
                let l = [],
                    r = [...e, _.mV],
                    i = (e, r) => {
                        var i, a;
                        for (let s of null !=
                        (i =
                            null == (a = t.get(e)) ? void 0 : a.sort((e, t) => f.default.compare(e.soundId, t.soundId)))
                            ? i
                            : []) {
                            let e = n.has(s.soundId);
                            ((e && r) || (!e && !r)) && s.available && l.push(s);
                        }
                    };
                return r.forEach((e) => i(e, !0)), r.forEach((e) => i(e, !1)), l;
            }, [t, n, e]);
        })((0, h.Y)(n, !0)),
        T = (0, m.T)(),
        I = r.useRef(null),
        [w, R] = r.useState(void 0),
        P = (0, a.bG)([d.A], () => d.A.getMediaSessionId()),
        { analyticsLocations: D } = (0, o.Ay)(s.A.SOUNDBOARD_WHEEL),
        k = r.useCallback(
            (e) => {
                (0, g.Ak)(e, n.id, D), C();
            },
            [D, n.id, C],
        );
    r.useEffect(() => {
        p.E7(), u.bW.loadIfNecessary();
    }, []),
        r.useEffect(() => {
            0 === j.length && 0 === T.length && C();
        }, [j.length, T, C]),
        r.useEffect(
            () => () => {
                let e = I.current;
                x || null == e || k(e);
            },
            [x, k],
        ),
        (0, c.A)(
            {
                type: i.ImpressionTypes.POPOUT,
                name: i.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: N,
                    guild_id: t,
                    media_session_id: P,
                },
            },
            { disableTrack: !S },
        );
    let L = r.useCallback((e) => {
            (I.current = e), R(null == e ? void 0 : e.soundId);
        }, []),
        M = r.useCallback(
            (e) => {
                if (null == e) return void L(null);
                let t = j[e];
                null != t && L(t);
            },
            [L, j],
        ),
        U = r.useCallback(
            (e) => {
                if (null == e) return;
                let t = j[e];
                null != t && k(t);
            },
            [j, k],
        ),
        V = r.useMemo(
            () =>
                j.map((e) =>
                    (0, l.jsx)(
                        y.Ay,
                        {
                            interactive: S,
                            className: E.a,
                            sound: e,
                            focused: w === e.soundId,
                            channel: n,
                        },
                        e.soundId,
                    ),
                ),
            [w, n, S, j],
        );
    return 0 === j.length
        ? null
        : (0, l.jsx)(o.f5, {
              value: D,
              children: (0, l.jsx)(A.A, {
                  wheelWidth: v,
                  wheelHeight: O,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !x,
                  activeItem: w,
                  onItemSelect: M,
                  onItemAction: U,
                  onClose: C,
                  interactive: S,
                  children: V,
              }),
          });
}
