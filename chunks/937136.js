n.d(t, { p: () => l });
class l {
    pending = new Set();
    fetching = new Set();
    empty() {
        return 0 === this.pending.size && 0 === this.fetching.size;
    }
    status(e) {
        return this.pending.has(e) ? 0 : this.fetching.has(e) ? 1 : null;
    }
    addWant(e) {
        this.fetching.has(e) || this.pending.add(e);
    }
    removeWant(e) {
        this.pending.delete(e), this.fetching.delete(e);
    }
    nextWants(e) {
        let t = [...this.pending];
        return (t.length = Math.min(e, t.length)), t;
    }
    markFetching(e) {
        for (let t of e) this.pending.delete(t), this.fetching.add(t);
    }
    markCompleted(e) {
        for (let t of e) this.pending.delete(t), this.fetching.delete(t);
    }
    markFailed(e) {
        for (let t of e) this.pending.add(t), this.fetching.delete(t);
    }
    async try(e, t) {
        try {
            this.markFetching(e);
            let n = await t();
            return this.markCompleted(e), n;
        } catch (t) {
            throw (this.markFailed(e), t);
        }
    }
}
