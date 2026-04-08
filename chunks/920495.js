"use strict";
n.d(t, { E: () => p });
var r = n(735438),
    i = n.n(r),
    s = n(562465),
    a = n(451988),
    o = n(73153),
    l = n(311043),
    u = n(652215);
let c = 20;
async function d(e) {
    try {
        let t = (
            await s.Bo.get({
                url: u.Rsh.GAMES,
                query: { game_ids: e, with_supplemental_data: !0 },
                rejectWithError: !0,
            })
        ).body;
        o.h.dispatch({ type: "GAME_FETCH_SUCCESS", gameIds: e, games: t });
    } catch {
        o.h.dispatch({ type: "GAME_FETCH_FAILURE", gameIds: e });
    }
}
class _ {
    _promises = new Set();
    _pending = new Set();
    _flushHandler = new a.J_(32, () => this._flush());
    request(e) {
        for (let t of e) l.A.hasNoData(t) || this._pending.add(t);
        return new Promise((e) => {
            this._promises.add({ resolve: e }), this._flushHandler.delay(!1);
        });
    }
    async _flush() {
        let e = [...this._pending];
        this._pending.clear();
        let t = [...this._promises];
        this._promises.clear(),
            0 === e.length ||
                (o.h.dispatch({ type: "GAME_FETCH", gameIds: e }), await Promise.all(i().chunk(e, c).map(d))),
            this.resolvePromises(t);
    }
    resolvePromises(e) {
        e.forEach((e) => e.resolve());
    }
}
let f = new _();
async function p(e) {
    0 !== e.length && (await f.request(e));
}
