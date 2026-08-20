t.d(r, { ZK: () => g, pF: () => v, wu: () => d }), t(323874), t(14289), t(35956), t(321073);
var n = t(582128);
if (588245 != t.j) var a = t(462180);
var l = t(882035),
    i = t(121894),
    o = t(506774),
    s = t(691540),
    u = t(857250),
    c = t(97483),
    p = t(87558);
let f = "__DEBUG_PROFILE_EFFECTS_STORE",
    m = { profileEffects: o.w.get(f) ?? {} },
    _ = (e) => {
        try {
            o.w.set(f, e.profileEffects);
        } catch (e) {
            console.error(e),
                (0, s.P0)(
                    (0, u.o)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        c.Ck.FAILURE,
                    ),
                );
        }
    },
    d = (0, l.h)((e) => ({
        ...m,
        upsertProfileEffect: (r) =>
            (0, i.r)(() => {
                e((e) => {
                    let t = { ...e };
                    return (t.profileEffects[r.skuId] = r), _(t), t;
                });
            }),
        deleteProfileEffect: (r) =>
            (0, i.r)(() => {
                e((e) => {
                    let t = { ...e };
                    return delete t.profileEffects[r], _(t), t;
                });
            }),
        clearAll: () =>
            (0, i.r)(() => {
                e(() => (o.w.remove(f), { profileEffects: {} }));
            }),
    }));
function v() {
    return d((e) => {
        let { profileEffects: r } = e;
        return Object.values(r);
    }, a.x);
}
let g = (e) => {
    let r = d((r) => (null != e ? r.profileEffects[e] : null)),
        t = n.useRef([]);
    return (
        n.useEffect(
            () => () => {
                t.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (t.current = []);
            },
            [],
        ),
        n.useMemo(() => {
            if (null == r) return null;
            let e = r.stillFrames,
                n = null != e ? { ...e } : {};
            for (let e in n) {
                let r = n[e];
                null != r &&
                    (n[e] = {
                        ...r,
                        src: (function (e) {
                            let r = (0, p.fB)(e);
                            return t.current.push(r), r;
                        })(r.base64),
                    });
            }
            return { ...r, stillFrames: n };
        }, [r])
    );
};
