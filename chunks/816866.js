n.d(t, { ZK: () => p, pF: () => x, wu: () => f }), n(323874), n(14289), n(35956), n(321073);
var i = n(64700),
    l = n(942381),
    s = n(265690),
    r = n(121894),
    a = n(506774),
    o = n(691540),
    c = n(857250),
    d = n(97483),
    u = n(87558);
let m = "__DEBUG_PROFILE_EFFECTS_STORE",
    h = { profileEffects: a.w.get(m) ?? {} },
    g = (e) => {
        try {
            a.w.set(m, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, o.P0)(
                    (0, c.o)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        d.Ck.FAILURE,
                    ),
                );
        }
    },
    f = (0, s.h)((e) => ({
        ...h,
        upsertProfileEffect: (t) =>
            (0, r.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return (n.profileEffects[t.skuId] = t), g(n), n;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, r.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return delete n.profileEffects[t], g(n), n;
                });
            }),
        clearAll: () =>
            (0, r.r)(() => {
                e(() => (a.w.remove(m), { profileEffects: {} }));
            }),
    })),
    x = () =>
        f((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, l.x),
    p = (e) => {
        let t = f((t) => (null != e ? t.profileEffects[e] : null)),
            n = i.useRef([]);
        return (
            i.useEffect(
                () => () => {
                    n.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (n.current = []);
                },
                [],
            ),
            i.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, u.fB)(e);
                        return n.current.push(t), t;
                    },
                    i = t.stillFrames,
                    l = null != i ? { ...i } : {};
                for (let t in l) {
                    let n = l[t];
                    null != n && (l[t] = { ...n, src: e(n.base64) });
                }
                return { ...t, stillFrames: l };
            }, [t])
        );
    };
