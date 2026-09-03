r.d(t, { L: () => n });
class n extends Set {
    constructor(e, t, r) {
        super(e),
            e instanceof n
                ? ((this.anchorKey = t ?? e.anchorKey), (this.currentKey = r ?? e.currentKey))
                : ((this.anchorKey = t ?? null), (this.currentKey = r ?? null));
    }
}
