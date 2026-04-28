a.d(t, { ZK: () => b, pF: () => _, wu: () => f }), a(323874), a(14289), a(35956), a(321073);
var n = a(64700),
    l = a(942381),
    r = a(265690),
    i = a(121894),
    s = a(506774),
    o = a(691540),
    c = a(857250),
    d = a(97483),
    u = a(87558);
let h = "__DEBUG_PROFILE_EFFECTS_STORE",
    p = { profileEffects: s.w.get(h) ?? {} },
    m = (e) => {
        try {
            s.w.set(h, e.profileEffects);
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
    f = (0, r.h)((e) => ({
        ...p,
        upsertProfileEffect: (t) =>
            (0, i.r)(() => {
                e((e) => {
                    let a = { ...e };
                    return (a.profileEffects[t.skuId] = t), m(a), a;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, i.r)(() => {
                e((e) => {
                    let a = { ...e };
                    return delete a.profileEffects[t], m(a), a;
                });
            }),
        clearAll: () =>
            (0, i.r)(() => {
                e(() => (s.w.remove(h), { profileEffects: {} }));
            }),
    })),
    _ = () =>
        f((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, l.x),
    b = (e) => {
        let t = f((t) => (null != e ? t.profileEffects[e] : null)),
            a = n.useRef([]);
        return (
            n.useEffect(
                () => () => {
                    a.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (a.current = []);
                },
                [],
            ),
            n.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, u.fB)(e);
                        return a.current.push(t), t;
                    },
                    n = t.stillFrames,
                    l = null != n ? { ...n } : {};
                for (let t in l) {
                    let a = l[t];
                    null != a && (l[t] = { ...a, src: e(a.base64) });
                }
                return { ...t, stillFrames: l };
            }, [t])
        );
    };
