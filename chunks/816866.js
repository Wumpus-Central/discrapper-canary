l.d(t, { ZK: () => g, pF: () => h, wu: () => _ }), l(323874), l(14289), l(35956), l(321073);
var r = l(64700),
    a = l(942381),
    s = l(265690),
    n = l(121894),
    i = l(506774),
    c = l(691540),
    o = l(857250),
    u = l(97483),
    d = l(87558);
let m = "__DEBUG_PROFILE_EFFECTS_STORE",
    A = { profileEffects: i.w.get(m) ?? {} },
    p = (e) => {
        try {
            i.w.set(m, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, c.P0)(
                    (0, o.o)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        u.Ck.FAILURE,
                    ),
                );
        }
    },
    _ = (0, s.h)((e) => ({
        ...A,
        upsertProfileEffect: (t) =>
            (0, n.r)(() => {
                e((e) => {
                    let l = { ...e };
                    return (l.profileEffects[t.skuId] = t), p(l), l;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, n.r)(() => {
                e((e) => {
                    let l = { ...e };
                    return delete l.profileEffects[t], p(l), l;
                });
            }),
        clearAll: () =>
            (0, n.r)(() => {
                e(() => (i.w.remove(m), { profileEffects: {} }));
            }),
    })),
    h = () =>
        _((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, a.x),
    g = (e) => {
        let t = _((t) => (null != e ? t.profileEffects[e] : null)),
            l = r.useRef([]);
        return (
            r.useEffect(
                () => () => {
                    l.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (l.current = []);
                },
                [],
            ),
            r.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, d.fB)(e);
                        return l.current.push(t), t;
                    },
                    r = t.stillFrames,
                    a = null != r ? { ...r } : {};
                for (let t in a) {
                    let l = a[t];
                    null != l && (a[t] = { ...l, src: e(l.base64) });
                }
                return { ...t, stillFrames: a };
            }, [t])
        );
    };
