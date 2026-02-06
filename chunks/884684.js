n.d(t, { MO: () => d }), n(321073), n(667532);
var r = n(64700),
    l = n(512750),
    i = n(311907),
    s = n(645619),
    o = n(568065);
let a = Object.entries({ guildTagsBadgePacks: [l.OJ, l.jF, l.Ht, l.tv] }).reduce((e, t) => {
        let [n, r] = t;
        for (let t of r) e[t] = n;
        return e;
    }, {}),
    u = [o.o9.LEVEL, o.o9.PERK];
function d(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getStateForGuild(e));
    return r.useMemo(
        () =>
            u.reduce((e, r) => {
                let i = n?.powerupCatalog[r];
                if (null == i) return e;
                let s = (function (e, t, n) {
                    let r = [],
                        i = t.reduce((e, t) => {
                            if (t.type !== o.o9.PERK) return e;
                            let n = a[t.skuId];
                            return null == n || ((e[n] ??= []), e[n].push(t)), e;
                        }, {});
                    for (let e of t) {
                        if (e.type === o.o9.LEVEL) {
                            r.push({ type: "singleLevel", powerup: e });
                            continue;
                        }
                        let t = a[e.skuId];
                        if (null != t) {
                            let e = i[t];
                            void 0 !== e && (r.push({ type: "multiPerk", group: t, powerups: e }), (i[t] = void 0));
                            continue;
                        }
                        r.push({ type: "singlePerk", powerup: e });
                    }
                    return (
                        n && e === o.o9.PERK && r.unshift({ type: "gameServer" }),
                        (function (e) {
                            let t = e.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === l.SL),
                                n = e.findIndex((e) => "multiPerk" === e.type && "guildTagsBadgePacks" === e.group);
                            if (-1 !== t && -1 !== n && n !== t + 1) {
                                let t = [...e],
                                    [r] = t.splice(n, 1),
                                    i = t.findIndex((e) => "singlePerk" === e.type && e.powerup.skuId === l.SL);
                                return t.splice(i + 1, 0, r), t;
                            }
                            return e;
                        })(r)
                    );
                })(r, i, t);
                return e.push({ type: r, listings: s }), e;
            }, []),
        [n?.powerupCatalog, t],
    );
}
