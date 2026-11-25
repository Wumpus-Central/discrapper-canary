(n.d(t, { Ay: () => W, zN: () => M, Ww: () => U, U: () => P }), n(321073));
var i,
    r = n(73153),
    a = n(439372),
    s = n(730602),
    l = n(964167),
    o = n(41234),
    d = n(587895),
    c = n(982844),
    u = n(976860),
    _ = n(91242),
    E = n(218583);
n(747653);
var A = n(115560),
    f = n(744230),
    h = n(113267),
    I = n(182025);
function p(e) {
    try {
        let t = new URL(e, location.href);
        return t.origin + t.pathname;
    } catch {
        return null;
    }
}
function m(e, t) {
    return e <= 0 || t < e ? 0 : g(t - e);
}
function g(e) {
    return Math.round(10 * e) / 10;
}
(n(323874), n(14289), n(35956));
var T = n(700224);
let S = new Set([I.xo.CACHED, I.xo.SKIPPED, I.xo.PREFETCHED, I.xo.IN_FLIGHT]),
    N = {
        [I.Vj.SETTLED]: I.nW.READY,
        [I.Vj.CAPPED]: I.nW.READY,
        [I.Vj.FAILED]: I.nW.FAILED,
        [I.Vj.TIMEOUT]: I.nW.TIMEOUT,
        [I.Vj.SUPERSEDED]: I.nW.SUPERSEDED,
        [I.Vj.STOPPED]: I.nW.STOPPED,
        [I.Vj.REUSED]: I.nW.REUSED,
        [I.Vj.ABANDONED]: I.nW.ABANDONED,
    };
var C = (((i = {}).STARTED = "started"), (i.LAUNCHED = "launched"), (i.CLOSED = "closed"), i);
class O {
    launchId = (0, A.A)();
    frameId;
    startTime = performance.now();
    startedAt = Date.now();
    options;
    steps = [];
    iframeIds = [];
    launchRequestId = null;
    launchStartedAt = null;
    readyAt = null;
    loadAt = null;
    sdkVersion = null;
    timer;
    currentPhase = "started";
    constructor(e) {
        ((this.options = e),
            (this.frameId = e.frameId),
            (this.timer = setTimeout(() => this.finish({ type: I.Vj.ABANDONED }), 6e4)));
    }
    get phase() {
        return this.currentPhase;
    }
    get trigger() {
        return this.options.trigger;
    }
    isLaunch(e) {
        return null != e && e === this.launchRequestId;
    }
    hasStep(e) {
        return this.steps.some((t) => t.step === e);
    }
    span(e, t) {
        if ("closed" === this.currentPhase) return t(T.U);
        let n = this.startSpan(e);
        return this.runSpan(n, t);
    }
    event(e) {
        if ("closed" !== this.currentPhase)
            switch (e.step) {
                case I.aY.IFRAME_CREATED:
                    this.recordIframeCreated(e.iframeId, e.url);
                    return;
                case I.aY.IFRAME_LOAD:
                    this.recordIframeLoad();
                    return;
                case I.aY.HANDSHAKE:
                    this.recordHandshake(e.sdkVersion);
                    return;
                case I.aY.READY:
                    this.recordReady();
                    return;
            }
    }
    markLaunchStarted(e) {
        if ("started" !== this.currentPhase) return;
        ((this.currentPhase = "launched"), (this.launchRequestId = e ?? null));
        let t = this.addStep(I.aY.LAUNCH_STARTED, I.xo.OK);
        ((this.launchStartedAt = t.start), this.setTimer(3e4, I.Vj.TIMEOUT));
    }
    markDispatched() {
        "closed" !== this.currentPhase && this.addStep(I.aY.DISPATCHED, I.xo.OK);
    }
    finish(e) {
        if ("closed" === this.currentPhase || (e.type === I.Vj.REUSED && "launched" === this.currentPhase)) return;
        ((this.currentPhase = "closed"), clearTimeout(this.timer));
        let t = performance.now();
        this.options.resourceMatcher.flush();
        let n = this.buildRecord(e, t);
        (this.options.onClose(this, n), this.releaseClaims());
    }
    drop() {
        "closed" !== this.currentPhase &&
            ((this.currentPhase = "closed"), clearTimeout(this.timer), this.releaseClaims());
    }
    startSpan(e) {
        let t = this.addStep(e, null);
        for (let { kind: n, key: i } of this.options.resources[e] ?? []) this.claim(t, n, i);
        return t;
    }
    async runSpan(e, t) {
        let n;
        try {
            n = await t({
                setStatus: (t) => {
                    e.status = t;
                },
            });
        } catch (t) {
            throw (this.endStep(e, I.xo.FAILED), t);
        }
        return (this.endStep(e, I.xo.OK), n);
    }
    recordIframeCreated(e, t) {
        this.iframeIds.push(e);
        let n = this.addStep(I.aY.IFRAME_CREATED, I.xo.OK),
            i = (function (e) {
                try {
                    return new URL(e, location.href).href;
                } catch {
                    return null;
                }
            })(t);
        null != i && this.claim(n, I.tP.IFRAME, i, this.startTime);
    }
    recordIframeLoad() {
        if (null != this.loadAt) return;
        let e = this.addStep(I.aY.IFRAME_LOAD, I.xo.OK);
        ((this.loadAt = e.start), null != this.readyAt && this.finish({ type: I.Vj.SETTLED }));
    }
    recordHandshake(e) {
        this.hasStep(I.aY.HANDSHAKE) || ((this.sdkVersion = e), this.addStep(I.aY.HANDSHAKE, I.xo.OK));
    }
    recordReady() {
        if (null != this.readyAt) return;
        let e = this.addStep(I.aY.READY, I.xo.OK);
        ((this.readyAt = e.start),
            null != this.loadAt ? this.finish({ type: I.Vj.SETTLED }) : this.setTimer(3e4, I.Vj.CAPPED));
    }
    releaseClaims() {
        for (let e of this.steps) this.releaseStepClaims(e);
    }
    releaseStepClaims(e) {
        for (let t of e.claims) this.options.resourceMatcher.removeClaim(t);
        e.claims = [];
    }
    buildRecord(e, t) {
        let n,
            { applicationId: i, surface: r, trigger: a, detailCollected: s } = this.options;
        n = null != this.readyAt ? I.nW.READY : N[e.type];
        let l = null;
        e.type === I.Vj.FAILED &&
            (l = (function (e) {
                let t;
                if (e instanceof f.A) {
                    let n = f.A.Reasons[e.reason] ?? e.reason;
                    t = `EmbeddedActivityClientError: ${n}`;
                } else if (e instanceof h.A) {
                    let n = h.A.ReasonCodes[e.reason] ?? e.reason;
                    t = `InteractionCallbackError: ${n}`;
                } else
                    e instanceof Error
                        ? (t = `${e.name}: ${e.message}`)
                        : "object" == typeof e && null != e && "status" in e
                          ? ((t = `HTTP ${String(e.status)}`),
                            "code" in e && null != e.code && (t += ` code ${String(e.code)}`))
                          : (t = "unknown error");
                return t.slice(0, 200);
            })(e.error));
        let o = null;
        return (
            null != this.loadAt && (o = I.d1.HOST),
            {
                launchId: this.launchId,
                frameId: this.frameId,
                applicationId: i,
                surface: r.type,
                trigger: a,
                startedAt: this.startedAt,
                launchStartedMs: this.relative(this.launchStartedAt),
                readyMs: this.relative(this.readyAt),
                totalMs: this.relative(t),
                pageLoadMs: this.relative(this.loadAt),
                pageLoadSource: o,
                outcome: n,
                closedBy: e.type,
                error: l,
                sdkVersion: this.sdkVersion,
                detailCollected: s,
                steps: this.steps.map((e) => this.buildStepRecord(e)),
                iframeIds: this.iframeIds,
            }
        );
    }
    buildStepRecord(e) {
        let t = null;
        null != e.end && (t = R(e.end - e.start));
        let n = [];
        for (let { kind: t, entry: i } of e.claims)
            null != i &&
                n.push(
                    (function (e, t, n) {
                        let i = (t.serverTiming ?? []).map((e) => {
                            let { name: t, duration: n, description: i } = e;
                            return { name: t, duration: n, description: i };
                        });
                        return {
                            kind: e,
                            path: (function (e) {
                                try {
                                    return new URL(e, location.href).pathname;
                                } catch {
                                    return "";
                                }
                            })(t.name),
                            startMs: g(t.startTime - n),
                            durationMs: g(t.duration),
                            phases: {
                                dns: m(t.domainLookupStart, t.domainLookupEnd),
                                connect: m(t.connectStart, t.connectEnd),
                                tls: m(t.secureConnectionStart, t.connectEnd),
                                request: m(t.requestStart, t.responseStart),
                                ttfb: m(t.startTime, t.responseStart),
                                download: m(t.responseStart, t.responseEnd),
                            },
                            transferSize: t.transferSize,
                            protocol: t.nextHopProtocol,
                            serverTiming: i,
                        };
                    })(t, i, this.startTime),
                );
        return {
            step: e.step,
            status: e.status ?? I.xo.PENDING,
            startMs: this.relative(e.start),
            durationMs: t,
            resources: n,
        };
    }
    addStep(e, t) {
        let n = { step: e, status: t, start: performance.now(), end: null, claims: [] };
        return (this.steps.push(n), n);
    }
    endStep(e, t) {
        "closed" !== this.currentPhase &&
            ((e.end = performance.now()), (e.status ??= t), S.has(e.status) && this.releaseStepClaims(e));
    }
    claim(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.start,
            r = { kind: t, key: n, startTime: i, entry: null };
        (e.claims.push(r), this.options.resourceMatcher.addClaim(r));
    }
    setTimer(e, t) {
        (clearTimeout(this.timer), (this.timer = setTimeout(() => this.finish({ type: t }), e)));
    }
    relative(e) {
        return null == e ? null : R(e - this.startTime);
    }
}
function R(e) {
    return Math.round(10 * e) / 10;
}
var L = n(400421);
let y = [],
    D = new Map(),
    b = new (class {
        claimsByKey = new Map();
        observer = null;
        addClaim(e) {
            let t = this.claimsByKey.get(e.key);
            (null == t && ((t = new Set()), this.claimsByKey.set(e.key, t)), t.add(e), this.connect());
        }
        removeClaim(e) {
            let t = this.claimsByKey.get(e.key);
            null != t &&
                (t.delete(e),
                0 === t.size && this.claimsByKey.delete(e.key),
                0 === this.claimsByKey.size && this.disconnect());
        }
        flush() {
            if (null != this.observer)
                try {
                    this.matchEntries(this.observer.takeRecords());
                } catch {}
        }
        connect() {
            if (null == this.observer && "u" > typeof PerformanceObserver)
                try {
                    let e = new PerformanceObserver((e) => {
                        try {
                            this.matchEntries(e.getEntries());
                        } catch {}
                    });
                    (e.observe({ type: "resource" }), (this.observer = e));
                } catch {}
        }
        disconnect() {
            (this.observer?.disconnect(), (this.observer = null));
        }
        matchEntries(e) {
            for (let t of e) {
                let e;
                e =
                    "iframe" === t.initiatorType
                        ? t.name
                        : (function (e) {
                              let t = e.search(/[?#]/);
                              return -1 === t ? e : e.slice(0, t);
                          })(t.name);
                let n = this.claimsByKey.get(e);
                null != n &&
                    (function (e, t) {
                        let n = null;
                        for (let i of e) {
                            let e = null == i.entry,
                                r = i.startTime <= t.startTime,
                                a = null != n ? n.startTime : -1;
                            e && r && i.startTime >= a && (n = i);
                        }
                        null != n && (n.entry = t);
                    })(n, t);
            }
        }
    })(),
    v = new Set([I.cu.SIDEBAR_MOUSEDOWN, I.cu.NAVIGATION]);
function P(e, t, n, i) {
    let r = D.get(t);
    switch (r?.phase) {
        case void 0:
        case C.CLOSED:
            break;
        case C.STARTED:
            return r;
        case C.LAUNCHED:
            r.finish({ type: I.Vj.SUPERSEDED });
    }
    let a = new O({
        frameId: t,
        applicationId: n,
        surface: i,
        trigger: e,
        detailCollected: (0, L.K4)(),
        resources: (function (e) {
            let t = [],
                n = p((0, s.SR)(e));
            null != n && t.push({ kind: I.tP.PROXY_TICKET, key: n });
            let i = (0, s.ah)(e);
            if (null != i) {
                let e = p(i);
                null != e && t.push({ kind: I.tP.PREWARM, key: e });
            }
            let r = [],
                a = (0, c.pl)(e);
            if (null != a) {
                let e = p(a);
                null != e && r.push({ kind: I.tP.CSP, key: e });
            }
            return { [I.aY.PROXY_TICKET]: t, [I.aY.CSP]: r };
        })(n),
        resourceMatcher: b,
        onClose: w,
    });
    return (D.set(t, a), a);
}
function M(e) {
    return D.get(e) ?? null;
}
function U(e) {
    let t = _.A.getFrameByIframeId(e);
    return null == t ? null : M(t.id);
}
function w(e, t) {
    (D.get(e.frameId) === e && D.delete(e.frameId),
        r.h.dispatch({ type: "FRAME_LAUNCH_TIMING_CLOSED", record: t }),
        t.detailCollected &&
            (function (e, t) {
                let n = `frame-launch:${e.launchId}`,
                    i = { measures: [n], marks: [] };
                try {
                    for (let r of (performance.measure(n, { start: t, duration: e.totalMs, detail: e }), e.steps)) {
                        let e = `${n}:${r.step}`,
                            a = t + r.startMs;
                        null != r.durationMs
                            ? (performance.measure(e, { start: a, duration: r.durationMs }), i.measures.push(e))
                            : (performance.mark(e, { startTime: a }), i.marks.push(e));
                    }
                } catch {}
                for (y.push(i); y.length > 20;) {
                    let e = y.shift();
                    for (let t of e.measures) performance.clearMeasures(t);
                    for (let t of e.marks) performance.clearMarks(t);
                }
            })(t, e.startTime));
}
function G(e, t) {
    let n = D.get(e);
    return null != n && n.isLaunch(t) ? n : null;
}
function x(e) {
    let { frameId: t, applicationId: n, launchRequestId: i } = e,
        r = D.get(t);
    null == r ||
        r.phase !== C.STARTED ||
        (r.markLaunchStarted(i),
        r.hasStep(I.aY.APPLICATION) ||
            r.span(I.aY.APPLICATION, (e) => {
                var t, i;
                return d.A.isHydrated(n)
                    ? (e.setStatus(I.xo.CACHED), Promise.resolve())
                    : ((t = r),
                      (i = n),
                      new Promise((e) => {
                          d.A.addConditionalChangeListener(
                              () => t.phase !== C.CLOSED && (!d.A.isHydrated(i) || (e(), !1)),
                              !1,
                          );
                      }));
            }));
}
function k(e) {
    let { frameId: t, launchRequestId: n } = e;
    G(t, n)?.markDispatched();
}
function F(e) {
    let { frameId: t, launchRequestId: n, error: i } = e;
    G(t, n)?.finish({ type: I.Vj.FAILED, error: i });
}
function B(e) {
    let { frameId: t } = e;
    D.get(t)?.finish({ type: I.Vj.STOPPED });
}
function V() {
    for (let e of D.values()) e.drop();
    D.clear();
}
function H(e) {
    let { channelId: t } = e,
        n = null;
    for (let e of (null != t && (n = (0, E.A)(t)), [...D.values()])) {
        let t = null != n && e.frameId === n.frameId,
            i = e.phase === C.STARTED;
        !t && i && v.has(e.trigger) && e.finish({ type: I.Vj.ABANDONED });
    }
    if (null == n || null != _.A.getFrame(n.frameId)) return;
    let i = (0, u.JK)().location.state;
    if ((0, l.rm)() || i?.appChannelClosed === !0 || (0, o.z)(n.frameId)) return;
    let { frameId: r, applicationId: a, surface: s } = n;
    P(I.cu.NAVIGATION, r, a, s);
}
class j extends a.A {
    actions = {
        FRAME_LAUNCH_START: x,
        FRAME_LAUNCH: k,
        FRAME_LAUNCH_FAIL: F,
        FRAME_STOP: B,
        LOGOUT: V,
        CHANNEL_SELECT: H,
    };
}
let W = new j();
