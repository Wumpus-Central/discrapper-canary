n.d(t, { ZK: () => g, pF: () => m, wu: () => h }), n(323874), n(14289), n(35956), n(321073);
var a = n(64700),
    i = n(942381),
    l = n(265690),
    r = n(121894),
    o = n(506774),
    s = n(691540),
    c = n(857250),
    d = n(97483),
    u = n(87558);
let _ = "__DEBUG_PROFILE_EFFECTS_STORE",
    p = { profileEffects: o.w.get(_) ?? {} },
    f = (e) => {
        try {
            o.w.set(_, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, s.P0)(
                    (0, c.o)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        d.Ck.FAILURE,
                    ),
                );
        }
    },
    h = (0, l.h)((e) => ({
        ...p,
        upsertProfileEffect: (t) =>
            (0, r.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return (n.profileEffects[t.skuId] = t), f(n), n;
                });
            }),
        deleteProfileEffect: (t) =>
            (0, r.r)(() => {
                e((e) => {
                    let n = { ...e };
                    return delete n.profileEffects[t], f(n), n;
                });
            }),
        clearAll: () =>
            (0, r.r)(() => {
                e(() => (o.w.remove(_), { profileEffects: {} }));
            }),
    })),
    m = () =>
        h((e) => {
            let { profileEffects: t } = e;
            return Object.values(t);
        }, i.x),
    g = (e) => {
        let t = h((t) => (null != e ? t.profileEffects[e] : null)),
            n = a.useRef([]);
        return (
            a.useEffect(
                () => () => {
                    n.current.forEach((e) => {
                        URL.revokeObjectURL(e);
                    }),
                        (n.current = []);
                },
                [],
            ),
            a.useMemo(() => {
                if (null == t) return null;
                let e = (e) => {
                        let t = (0, u.fB)(e);
                        return n.current.push(t), t;
                    },
                    a = t.stillFrames,
                    i = null != a ? { ...a } : {};
                for (let t in i) {
                    let n = i[t];
                    null != n && (i[t] = { ...n, src: e(n.base64) });
                }
                return { ...t, stillFrames: i };
            }, [t])
        );
    };
