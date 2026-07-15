let i;
d.d(t, { a: () => G, i: () => p, n: () => h, o: () => u, r: () => o });
var e = d(871178),
    c = class {
        constructor(l, t, d) {
            (this._loader = l), (this._options = t), (this._timer = d), (this._loaded = !1), (this._attempt = 0);
        }
        get() {
            return this._cachedValue;
        }
        load() {
            return this._loaded
                ? Promise.resolve(this._cachedValue)
                : (this._inFlight || (this._inFlight = this.startLoad()), this._inFlight);
        }
        reset() {
            (this._cachedValue = void 0), (this._loaded = !1), (this._inFlight = void 0), this._attempt++;
        }
        startLoad() {
            let l,
                t,
                d = ++this._attempt,
                { timeoutMs: i } = this._options;
            try {
                l = this._loader();
            } catch (t) {
                l = Promise.reject(t);
            }
            let e = l.then(
                (l) => (d === this._attempt && ((this._cachedValue = l), (this._loaded = !0)), l),
                (l) => {
                    d === this._attempt && (this.warnFailure(l), (this._inFlight = void 0));
                },
            );
            return void 0 === i
                ? e
                : Promise.race([
                      e,
                      new Promise((l) => {
                          t = this._timer.setTimeout(() => {
                              d === this._attempt && (this.warnTimeout(i), (this._inFlight = void 0), this._attempt++),
                                  l(void 0);
                          }, i);
                      }),
                  ]).finally(() => {
                      void 0 !== t && this._timer.clearTimeout(t);
                  });
        }
        warnFailure(l) {
            let { label: t, moduleName: d } = this._options;
            console.warn(`[${t}] Failed to load ${d}; ${this.fallback()}`, l);
        }
        warnTimeout(l) {
            let { label: t, moduleName: d } = this._options;
            console.warn(`[${t}] ${d} failed to load within ${l / 1e3}s; ${this.fallback()}`);
        }
        fallback() {
            return this._options.disabledMessage ?? "module will be unavailable.";
        }
    },
    a = class l {
        constructor(l) {
            this._timer = l ?? e.t.getInstance();
        }
        static getInstance() {
            return (this._instance ??= new l());
        }
        static resetInstance() {
            this._instance = void 0;
        }
        create(l, t) {
            return new c(l, t, this._timer);
        }
    };
let s = {
        label: "TRI",
        moduleName: "@incodetech/tri-sdk",
        timeoutMs: 1e4,
        disabledMessage: "TRI will be disabled for this session.",
    },
    n = () => d.e("74058").then(d.bind(d, 857489));
var Z = class l {
    constructor() {
        (this._isStarted = !1), (this._lazySdk = a.getInstance().create(n, s));
    }
    static getInstance() {
        return (this._instance ??= new l());
    }
    static resetInstance() {
        this._instance = void 0;
    }
    get isStarted() {
        return this._isStarted;
    }
    async createSession(l, t) {
        let d = await this._lazySdk.load();
        return d
            ? d.createSession(l, t)
            : {
                  token: null,
                  expiresAt: null,
                  tokenType: null,
                  eventsCollectionEnabled: !1,
                  error: { status: 0, message: "TRI SDK failed to load" },
              };
    }
    async setup(l) {
        try {
            let t = await this._lazySdk.load();
            if (!t) return "init-failed";
            let d = await t.default.setup(l);
            return "started" === d && (this._isStarted = !0), d;
        } catch {
            return "init-failed";
        }
    }
    async start() {
        let l = await (this._getSdk()?.start() ?? Promise.resolve("init-failed"));
        return (this._isStarted = "started" === l), l;
    }
    async stop() {
        let l = await (this._getSdk()?.stop() ?? Promise.resolve("init-failed"));
        return (this._isStarted = !1), l;
    }
    async reset() {
        let l = await (this._getSdk()?.reset() ?? Promise.resolve("init-failed"));
        return (this._isStarted = !1), l;
    }
    async linkInterview(l) {
        try {
            return (await this._getSdk()?.linkInterview(l)) ?? !1;
        } catch {
            return !1;
        }
    }
    _getSdk() {
        return this._lazySdk.get()?.default ?? null;
    }
};
let b = ["falcon-ingest-k8s.saask8s.incodesmile.com", "falcon-ingest.incodesmile.com"];
function m() {
    return Z.getInstance();
}
function o() {
    return m().isStarted;
}
function u() {
    (i = void 0), Z.resetInstance();
}
async function h(l, t = {}) {
    var d;
    let i = (d = l)
        ? d.token
            ? d.apiURL
                ? d
                : (console.warn("[TRI] Not initialized: apiURL is required."), null)
            : (console.warn("[TRI] Not initialized: token is required."), null)
        : null;
    if (!i) return "init-failed";
    let e = await W(i);
    return o() && t.sessionToken && (await p(t.sessionToken)), e;
}
async function W(l) {
    return (i = l.apiURL), m().setup(l);
}
async function G() {
    return m().reset();
}
async function p(l) {
    return (
        !(
            !l ||
            (function (l) {
                if (!l) return !0;
                let t = l.toLowerCase();
                return b.some((l) => t.includes(l));
            })(i)
        ) && m().linkInterview(l)
    );
}
