a.d(t, { ZK: () => _, pF: () => b, wu: () => f }), a(323874), a(14289), a(35956), a(321073);
var r = a(64700),
    n = a(942381),
    l = a(265690),
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
    f = (0, l.h)((e) => ({
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
    b = () =>
        f((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, n.x),
    _ = (e) => {
        let t = f((t) => (null != e ? t.profileEffects[e] : null)),
            a = r.useRef([]);
        return (
            r.useEffect(
                () => () => {
                    a.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (a.current = []);
                },
                [],
            ),
            r.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, u.fB)(e);
                        return a.current.push(t), t;
                    },
                    r = t.stillFrames,
                    n = null != r ? { ...r } : {};
                for (let t in n) {
                    let a = n[t];
                    null != a && (n[t] = { ...a, src: e(a.base64) });
                }
                return { ...t, stillFrames: n };
            }, [t])
        );
    };
