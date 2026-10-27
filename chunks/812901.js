n.d(t, { G: () => c, f: () => o });
var i = n(343030);
let s = {
    [i.A.Backstage]: 0,
    [i.A.WithinAppContent]: 1,
    [i.A.WithinCallContent]: 3,
    [i.A.AboveAppContent]: 1002,
    [i.A.WithinModal]: 1003,
};
class l {
    _pool = null;
    setPool(e) {
        this._pool = e;
    }
    get pool() {
        if (null == this._pool) throw Error("FramePlacementStrategy: pool accessed before setPool");
        return this._pool;
    }
}
class r extends l {
    placed = new Map();
    rafHandle = null;
    initialize(e) {
        ((e.style.position = "fixed"),
            (e.style.top = "0"),
            (e.style.left = "0"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            this.pool.appendChild(e));
    }
    place(e, t, n) {
        (this.placed.set(e, { target: t, level: n }), this.position(e, t, n), this.ensureTicking());
    }
    unplace(e) {
        (this.placed.delete(e), (e.style.display = "none"));
    }
    ensureTicking() {
        null == this.rafHandle && (this.rafHandle = requestAnimationFrame(this.tick));
    }
    position(e, t, n) {
        let i = t.getBoundingClientRect(),
            l = t.offsetWidth > 0 ? i.width / t.offsetWidth : 1,
            r = Math.abs(l - 1) > 0.01;
        ((e.style.display = "block"),
            (e.style.zIndex = String(s[n])),
            (e.style.transformOrigin = "0 0"),
            (e.style.transform = `translate(${i.left}px, ${i.top}px)${r ? ` scale(${l})` : ""}`),
            (e.style.width = `${r ? t.offsetWidth : i.width}px`),
            (e.style.height = `${r ? t.offsetHeight : i.height}px`));
    }
    tick = () => {
        for (let [e, { target: t, level: n }] of this.placed) this.position(e, t, n);
        this.rafHandle = this.placed.size > 0 ? requestAnimationFrame(this.tick) : null;
    };
}
class a extends l {
    initialize(e) {
        ((e.style.width = "100%"),
            (e.style.height = "100%"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            this.pool.appendChild(e));
    }
    place(e, t, n) {
        (e.parentElement !== t && t.moveBefore(e, null), (e.style.display = "block"));
    }
    unplace(e) {
        (e.parentElement !== this.pool && this.pool.moveBefore(e, null), (e.style.display = "none"));
    }
}
function o() {
    return "function" == typeof Element.prototype.moveBefore;
}
function c() {
    return o() ? new a() : new r();
}
