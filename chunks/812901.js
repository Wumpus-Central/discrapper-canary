l.d(t, { A: () => a, G: () => c });
var n,
    a = (((n = {}).WithinAppContent = "within-app-content"), (n.AboveAppContent = "above-app-content"), n);
let i = { "within-app-content": 1, "above-app-content": 1002 };
class s {
    _pool = null;
    setPool(e) {
        this._pool = e;
    }
    get pool() {
        if (null == this._pool) throw Error("FramePlacementStrategy: pool accessed before setPool");
        return this._pool;
    }
}
class r extends s {
    placed = new Map();
    rafHandle = null;
    initialize(e) {
        (e.style.position = "fixed"),
            (e.style.top = "0"),
            (e.style.left = "0"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            this.pool.appendChild(e);
    }
    place(e, t, l) {
        this.placed.set(e, { target: t, level: l }), this.position(e, t, l), this.ensureTicking();
    }
    unplace(e) {
        this.placed.delete(e), (e.style.display = "none");
    }
    ensureTicking() {
        null == this.rafHandle && (this.rafHandle = requestAnimationFrame(this.tick));
    }
    position(e, t, l) {
        let n = t.getBoundingClientRect();
        (e.style.display = "block"),
            (e.style.zIndex = String(i[l])),
            (e.style.transform = `translate(${n.left}px, ${n.top}px)`),
            (e.style.width = `${n.width}px`),
            (e.style.height = `${n.height}px`);
    }
    tick = () => {
        for (let [e, { target: t, level: l }] of this.placed) this.position(e, t, l);
        this.rafHandle = this.placed.size > 0 ? requestAnimationFrame(this.tick) : null;
    };
}
class o extends s {
    initialize(e) {
        (e.style.width = "100%"),
            (e.style.height = "100%"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            this.pool.appendChild(e);
    }
    place(e, t, l) {
        e.parentElement !== t && t.moveBefore(e, null), (e.style.display = "block");
    }
    unplace(e) {
        e.parentElement !== this.pool && this.pool.moveBefore(e, null), (e.style.display = "none");
    }
}
function c() {
    return "function" == typeof Element.prototype.moveBefore ? new o() : new r();
}
