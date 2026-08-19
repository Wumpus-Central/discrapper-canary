i.d(t, { A: () => s, G: () => d });
var n,
    s = (((n = {}).WithinAppContent = "within-app-content"), (n.AboveAppContent = "above-app-content"), n);
let a = { "within-app-content": 1, "above-app-content": 1002 };
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
        (e.style.position = "fixed"),
            (e.style.top = "0"),
            (e.style.left = "0"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            this.pool.appendChild(e);
    }
    place(e, t, i) {
        this.placed.set(e, { target: t, level: i }), this.position(e, t, i), this.ensureTicking();
    }
    unplace(e) {
        this.placed.delete(e), (e.style.display = "none");
    }
    ensureTicking() {
        null == this.rafHandle && (this.rafHandle = requestAnimationFrame(this.tick));
    }
    position(e, t, i) {
        let n = t.getBoundingClientRect();
        (e.style.display = "block"),
            (e.style.zIndex = String(a[i])),
            (e.style.transform = `translate(${n.left}px, ${n.top}px)`),
            (e.style.width = `${n.width}px`),
            (e.style.height = `${n.height}px`);
    }
    tick = () => {
        for (let [e, { target: t, level: i }] of this.placed) this.position(e, t, i);
        this.rafHandle = this.placed.size > 0 ? requestAnimationFrame(this.tick) : null;
    };
}
class o extends l {
    initialize(e) {
        (e.style.width = "100%"),
            (e.style.height = "100%"),
            (e.style.pointerEvents = "none"),
            (e.style.display = "none"),
            this.pool.appendChild(e);
    }
    place(e, t, i) {
        e.parentElement !== t && t.moveBefore(e, null), (e.style.display = "block");
    }
    unplace(e) {
        e.parentElement !== this.pool && this.pool.moveBefore(e, null), (e.style.display = "none");
    }
}
function d() {
    return "function" == typeof Element.prototype.moveBefore ? new o() : new r();
}
