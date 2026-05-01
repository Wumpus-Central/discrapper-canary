i.d(t, { ZK: () => A, pF: () => f, wu: () => x }), i(323874), i(14289), i(35956), i(321073);
var s = i(64700),
    l = i(942381),
    a = i(265690),
    n = i(121894),
    r = i(506774),
    c = i(691540),
    o = i(857250),
    d = i(97483),
    u = i(87558);
let m = "__DEBUG_PROFILE_EFFECTS_STORE",
    T = { profileEffects: r.w.get(m) ?? {} },
    g = (e) => {
        try {
            r.w.set(m, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, c.P0)(
                    (0, o.o)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        d.Ck.FAILURE,
                    ),
                );
        }
    },
    x = (0, a.h)((e) => ({
        ...T,
        upsertProfileEffect: (t) =>
            (0, n.r)(() => {
                e((e) => {
                    let i = { ...e };
                    return (i.profileEffects[t.skuId] = t), g(i), i;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, n.r)(() => {
                e((e) => {
                    let i = { ...e };
                    return delete i.profileEffects[t], g(i), i;
                });
            }),
        clearAll: () =>
            (0, n.r)(() => {
                e(() => (r.w.remove(m), { profileEffects: {} }));
            }),
    })),
    f = () =>
        x((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, l.x),
    A = (e) => {
        let t = x((t) => (null != e ? t.profileEffects[e] : null)),
            i = s.useRef([]);
        return (
            s.useEffect(
                () => () => {
                    i.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (i.current = []);
                },
                [],
            ),
            s.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, u.fB)(e);
                        return i.current.push(t), t;
                    },
                    s = t.stillFrames,
                    l = null != s ? { ...s } : {};
                for (let t in l) {
                    let i = l[t];
                    null != i && (l[t] = { ...i, src: e(i.base64) });
                }
                return { ...t, stillFrames: l };
            }, [t])
        );
    };
