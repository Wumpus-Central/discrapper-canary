n.d(t, { ZK: () => m, pF: () => E, wu: () => h }), n(323874), n(14289), n(35956), n(321073);
var r = n(64700),
    a = n(942381),
    i = n(265690),
    o = n(121894),
    l = n(506774),
    s = n(691540),
    d = n(857250),
    u = n(97483),
    c = n(87558);
let _ = "__DEBUG_PROFILE_EFFECTS_STORE",
    p = { profileEffects: l.w.get(_) ?? {} },
    C = (e) => {
        try {
            l.w.set(_, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, s.P0)(
                    (0, d.o)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        u.Ck.FAILURE,
                    ),
                );
        }
    },
    h = (0, i.h)((e) => ({
        ...p,
        upsertProfileEffect: (t) =>
            (0, o.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return (n.profileEffects[t.skuId] = t), C(n), n;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, o.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return delete n.profileEffects[t], C(n), n;
                });
            }),
        clearAll: () =>
            (0, o.r)(() => {
                e(() => (l.w.remove(_), { profileEffects: {} }));
            }),
    })),
    E = () =>
        h((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, a.x),
    m = (e) => {
        let t = h((t) => (null != e ? t.profileEffects[e] : null)),
            n = r.useRef([]);
        return (
            r.useEffect(
                () => () => {
                    n.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (n.current = []);
                },
                [],
            ),
            r.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, c.fB)(e);
                        return n.current.push(t), t;
                    },
                    r = t.stillFrames,
                    a = null != r ? { ...r } : {};
                for (let t in a) {
                    let n = a[t];
                    null != n && (a[t] = { ...n, src: e(n.base64) });
                }
                return { ...t, stillFrames: a };
            }, [t])
        );
    };
