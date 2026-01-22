l.d(t, { MO: () => d }), l(896048), l(321073), l(667532);
var r = l(64700),
    n = l(512750),
    i = l(311907),
    s = l(645619),
    o = l(568065);
let a = Object.entries({
        guildTagsBadgePacks: [n.OJ, n.jF],
    }).reduce((e, t) => {
        let [l, r] = t;
        for (let t of r) e[t] = l;
        return e;
    }, {}),
    u = [o.o9.LEVEL, o.o9.PERK];
function d(e, t) {
    let l = (0, i.bG)([s.A], () => s.A.getStateForGuild(e));
    return r.useMemo(
        () =>
            u.reduce((e, r) => {
                let i = null == l ? void 0 : l.powerupCatalog[r];
                if (null == i) return e;
                let s = (function (e, t, l) {
                    let r = [],
                        i = t.reduce((e, t) => {
                            if (t.type !== o.o9.PERK) return e;
                            let l = a[t.skuId];
                            return null == l || (null != e[l] || (e[l] = []), e[l].push(t)), e;
                        }, {});
                    for (let e of t) {
                        if (e.type === o.o9.LEVEL) {
                            r.push({
                                type: "singleLevel",
                                powerup: e,
                            });
                            continue;
                        }
                        let t = a[e.skuId];
                        if (null != t) {
                            let e = i[t];
                            void 0 !== e &&
                                (r.push({
                                    type: "multiPerk",
                                    group: t,
                                    powerups: e,
                                }),
                                (i[t] = void 0));
                            continue;
                        }
                        r.push({
                            type: "singlePerk",
                            powerup: e,
                        });
                    }
                    return (
                        l && e === o.o9.PERK && r.unshift({ type: "gameServer" }),
                        (function (e) {
                            let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === n.SL),
                                l = e.findIndex((e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
                            if (-1 !== t && -1 !== l && l !== t + 1) {
                                let t = [...e],
                                    [r] = t.splice(l, 1),
                                    i = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === n.SL);
                                return t.splice(i + 1, 0, r), t;
                            }
                            return e;
                        })(r)
                    );
                })(r, i, t);
                return (
                    e.push({
                        type: r,
                        listings: s,
                    }),
                    e
                );
            }, []),
        [null == l ? void 0 : l.powerupCatalog, t],
    );
}
