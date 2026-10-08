(t.d(r, { ZK: () => h, pF: () => m, wu: () => d }), t(323874), t(14289), t(35956), t(321073));
var n = t(582128);
if (588245 != t.j) var o = t(462180);
var l = t(882035),
    a = t(121894),
    i = t(506774),
    f = t(376357),
    u = t(87558);
let s = "__DEBUG_PROFILE_EFFECTS_STORE",
    c = { profileEffects: i.w.get(s) ?? {} },
    p = (e) => {
        try {
            i.w.set(s, e.profileEffects);
        } catch (e) {
            (console.error(e),
                (0, f.P0)(
                    (0, f.ox)(
                        "This file is too large to save into localstorage. You will be able to view but not persist these changes.",
                        f.Ck.FAILURE,
                    ),
                ));
        }
    },
    d = (0, l.h)((e) => ({
        ...c,
        upsertProfileEffect: (r) =>
            (0, a.r)(() => {
                e((e) => {
                    let t = { ...e };
                    return ((t.profileEffects[r.skuId] = r), p(t), t);
                });
            }),
        deleteProfileEffect: (r) =>
            (0, a.r)(() => {
                e((e) => {
                    let t = { ...e };
                    return (delete t.profileEffects[r], p(t), t);
                });
            }),
        clearAll: () =>
            (0, a.r)(() => {
                e(() => (i.w.remove(s), { profileEffects: {} }));
            }),
    }));
function m() {
    return d((e) => {
        let { profileEffects: r } = e;
        return Object.values(r);
    }, o.x);
}
let h = (e) => {
    let r = d((r) => (null != e ? r.profileEffects[e] : null)),
        t = n.useRef([]);
    return (
        n.useEffect(
            () => () => {
                (t.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (t.current = []));
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
                            let r = (0, u.fB)(e);
                            return (t.current.push(r), r);
                        })(r.base64),
                    });
            }
            return { ...r, stillFrames: n };
        }, [r])
    );
};
