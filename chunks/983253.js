let i = new (class {
        session = 0;
        commit = 0;
        gate = 0;
        gateEnabled = null;
        observeGate(e) {
            let t = !0 === this.gateEnabled && !e;
            return ((this.gateEnabled = e), t && this.gate++, t);
        }
        resetSession() {
            (this.session++, this.commit++);
        }
        commitPicker() {
            this.commit++;
        }
        capture() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            return { userId: e, authSessionIdHash: t, session: this.session, commit: this.commit, gate: this.gate };
        }
        matches(e) {
            return e.session === this.session && e.commit === this.commit && e.gate === this.gate;
        }
        canRun(e, t) {
            return (this.observeGate(t), t && e.session === this.session && e.gate === this.gate);
        }
        canApply(e, t) {
            return this.canRun(e, t) && this.matches(e);
        }
    })(),
    r = { status: "idle", items: [], hasSnapshot: !1, loadId: null };
n.d(
    t,
    {},
    {
        C2: i,
        Sw: function (e, t) {
            switch (t.type) {
                case "reset":
                    return r;
                case "commit":
                    return t.enabled ? { ...e, status: "loading" } : r;
                case "start":
                    return { ...e, status: "loading" };
                case "success":
                    return {
                        status: "success",
                        items: t.items,
                        hasSnapshot: !0,
                        loadId: "none" === t.loadId && 0 === t.items.length ? null : t.loadId,
                    };
                case "error":
                    return { ...e, status: "error", retryAfterAt: t.retryAfterAt ?? null };
            }
        },
        lo: r,
    },
);
