n.d(t, { MO: () => c }), n(321073), n(667532);
var r = n(64700),
    i = n(512750),
    l = n(311907),
    s = n(645619),
    a = n(568065);
let o = { guildTagsBadgePacks: [i.tv, i.OJ, i.Ht, i.jF] },
    d = Object.entries(o).reduce((e, t) => {
        let [n, r] = t;
        for (let t of r) e[t] = n;
        return e;
    }, {}),
    u = [a.o9.LEVEL, a.o9.PERK];
function c(e, t) {
    let n = (0, l.bG)([s.A], () => s.A.getStateForGuild(e));
    return r.useMemo(
        () =>
            u.reduce((e, r) => {
                let l = n?.powerupCatalog[r];
                if (null == l) return e;
                let s = (function (e, t, n) {
                    let r = [],
                        l = t.reduce((e, t) => {
                            if (t.type !== a.o9.PERK) return e;
                            let n = d[t.skuId];
                            return null == n || ((e[n] ??= []), e[n].push(t)), e;
                        }, {});
                    for (let e of t) {
                        if (e.type === a.o9.LEVEL) {
                            r.push({ type: "singleLevel", powerup: e });
                            continue;
                        }
                        let t = d[e.skuId];
                        if (null != t) {
                            let e = l[t];
                            if (void 0 !== e) {
                                let n = o[t];
                                e.sort((e, t) => n.indexOf(e.skuId) - n.indexOf(t.skuId)),
                                    r.push({ type: "multiPerk", group: t, powerups: e }),
                                    (l[t] = void 0);
                            }
                            continue;
                        }
                        r.push({ type: "singlePerk", powerup: e, badge: a.ys[e.skuId] });
                    }
                    return (
                        n && e === a.o9.PERK && r.unshift({ type: "gameServer" }),
                        (function (e) {
                            let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === i.SL),
                                n = e.findIndex((e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
                            if (-1 !== t && -1 !== n && n !== t + 1) {
                                let t = [...e],
                                    [r] = t.splice(n, 1),
                                    l = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === i.SL);
                                return t.splice(l + 1, 0, r), t;
                            }
                            return e;
                        })(r)
                    );
                })(r, l, t);
                return e.push({ type: r, listings: s }), e;
            }, []),
        [n?.powerupCatalog, t],
    );
}
