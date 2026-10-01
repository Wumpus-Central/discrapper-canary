n.d(t, { Ig: () => d, Un: () => l, r: () => a });
var i,
    r = n(760751),
    a =
        (((i = {})[(i.UNRESOLVED = 0)] = "UNRESOLVED"),
        (i[(i.MATCHES_DETECTED = 1)] = "MATCHES_DETECTED"),
        (i[(i.DIFFERS = 2)] = "DIFFERS"),
        i);
let s = { type: 0 };
function l(e) {
    let { processGame: t } = e;
    return null == t ? e : { ...e, id: t.id, name: t.name, processGame: void 0 };
}
function o(e) {
    return null == e || 0 === e.type ? void 0 : e.game.id;
}
class d {
    resolutionsByPid = new Map();
    canonicalGameIdByPid = {};
    setCanonicalGameIds(e) {
        this.canonicalGameIdByPid = e;
    }
    resolve(e) {
        let t = new Map(),
            n = e.map((e) => {
                var n, i;
                let a,
                    o = l(e),
                    d =
                        ((n = this.canonicalGameIdByPid[e.pid]),
                        null == (a = r.A.getDetectableGame(n))
                            ? s
                            : a.id === (o.id ?? r.A.findGame(o)?.id)
                              ? { type: 1, game: a }
                              : { type: 2, game: a }),
                    c = this.resolutionsByPid.get(e.pid);
                return (
                    0 !== d.type ? t.set(e.pid, d) : null != c && t.set(e.pid, c),
                    (i = t.get(e.pid)),
                    i?.type !== 2
                        ? o
                        : null != e.processGame && e.id === i.game.id && e.name === i.game.name
                          ? e
                          : { ...o, id: i.game.id, name: i.game.name, processGame: { id: o.id, name: o.name } }
                );
            }),
            i = n.some((t, n) => t !== e[n]),
            a =
                t.size !== this.resolutionsByPid.size ||
                [...t].some((e) => {
                    let [t, n] = e,
                        i = this.resolutionsByPid.get(t);
                    return i?.type !== n.type || o(i) !== o(n);
                });
        return ((this.resolutionsByPid = t), { games: i ? n : e, changed: i || a });
    }
    getResolution(e) {
        return this.resolutionsByPid.get(e) ?? s;
    }
}
