let i, e, c;
d.d(t, { a: () => F, c: () => r, d: () => o, i: () => g, n: () => U, o: () => S, r: () => j, s: () => R, t: () => D });
var a = d(768672),
    s = d(368499),
    n = d(288052),
    Z = d(599078),
    b = d(28134),
    m = d(806374),
    o = class {
        getScreenDimensions() {
            return "u" < typeof screen ? { width: 0, height: 0 } : { width: screen.width, height: screen.height };
        }
        generateCanvasFingerprint() {
            try {
                if ("u" < typeof document) return "";
                let l = document.createElement("canvas"),
                    t = l.getContext("2d");
                if (!t) return "";
                return (
                    (t.textBaseline = "top"),
                    (t.font = "14px Arial"),
                    t.fillText("fingerprint", 2, 2),
                    l.toDataURL().slice(-50)
                );
            } catch {
                return "";
            }
        }
        getWebGLRenderer() {
            try {
                if ("u" < typeof document) return "";
                let l = document.createElement("canvas"),
                    t = l.getContext("webgl") || l.getContext("experimental-webgl");
                if (!t) return "";
                let d = t.getExtension("WEBGL_debug_renderer_info");
                if (!d) return "";
                return t.getParameter(d.UNMASKED_RENDERER_WEBGL) || "";
            } catch {
                return "";
            }
        }
        getWindowProperty(l) {
            if ("u" > typeof window) return window[l];
        }
        getNavigatorProperty(l) {
            if ("u" > typeof navigator) return navigator[l];
        }
        getNavigatorPrefixes() {
            if ("u" < typeof navigator) return { webkit: !1, moz: !1, o: !1, ms: !1 };
            let l = navigator;
            return {
                webkit: void 0 !== l.webkitGetUserMedia,
                moz: void 0 !== l.mozGetUserMedia,
                o: void 0 !== l.oGetUserMedia,
                ms: void 0 !== l.msGetUserMedia,
            };
        }
        getMaxTouchPoints() {
            return "u" < typeof navigator ? 0 : navigator.maxTouchPoints;
        }
        hasOnTouchStart() {
            return (
                !!("u" > typeof window && "ontouchstart" in window) ||
                ("u" > typeof document && "ontouchstart" in document.documentElement)
            );
        }
        getNavigatorProductSub() {
            if ("u" > typeof navigator) return navigator.productSub;
        }
        getEvalToStringLength() {
            return eval.toString().length;
        }
        tryFirefoxToSource() {
            try {
                throw "a";
            } catch (l) {
                try {
                    return l.toSource(), !0;
                } catch {
                    return !1;
                }
            }
        }
        async fetchJson(l, t = 3e3) {
            try {
                if ("u" < typeof fetch) return null;
                let d = new AbortController(),
                    i = setTimeout(() => d.abort(), t),
                    e = await fetch(l, { signal: d.signal });
                return clearTimeout(i), await e.json();
            } catch {
                return null;
            }
        }
        async enumerateVideoDeviceLabels() {
            try {
                if ("u" < typeof navigator || !navigator.mediaDevices?.enumerateDevices) return [];
                return (await navigator.mediaDevices.enumerateDevices())
                    .filter((l) => "videoinput" === l.kind)
                    .map((l) => l.label);
            } catch {
                return [];
            }
        }
        getTimestamp() {
            return Date.now();
        }
    },
    u = class {
        checkWebRtcSupport() {
            if ("u" < typeof window) return !1;
            let l =
                    "RTCPeerConnection" in window ||
                    "webkitRTCPeerConnection" in window ||
                    "mozRTCPeerConnection" in window,
                t = "u" > typeof navigator && navigator.mediaDevices?.getUserMedia !== void 0;
            return l && t;
        }
        getBrowserInfo() {
            let l = "u" > typeof navigator ? navigator.userAgent : "",
                t = new b.i(l).getResult();
            return {
                userAgent: l,
                isWebRtcSupported: this.checkWebRtcSupport(),
                browser: { name: t.browser.name, version: t.browser.version },
                os: { name: t.os.name, version: t.os.version },
                device: { model: t.device.model, type: t.device.type, vendor: t.device.vendor },
                engine: { name: t.engine.name, version: t.engine.version },
                cpu: { architecture: t.cpu.architecture },
            };
        }
    };
let h = new Set(["model", "platformVersion", "fullVersionList", "brands", "platform"]);
function W() {
    let l = (0, b.r)();
    return {
        device: { model: l.device.model },
        os: { name: l.os.name, version: l.os.version },
        browser: { name: l.browser.name, version: l.browser.version },
    };
}
function G(l) {
    return l?.trim() || void 0;
}
async function p(l) {
    var t, d;
    let i,
        e = await l.getHighEntropyValues(Array.from(h)),
        { name: c, version: a } =
            ((t = e.fullVersionList),
            (d = l.brands),
            (i = t?.[0] || d?.[0]),
            { name: G(i?.brand), version: G(i?.version) });
    return {
        device: { model: G(e.model) },
        os: { name: G(e.platform), version: G(e.platformVersion) },
        browser: { name: c, version: a },
    };
}
async function N() {
    var l;
    if ("u" < typeof navigator) return { device: {}, os: {}, browser: {} };
    let t = navigator,
        d = W();
    if (!t.userAgentData?.getHighEntropyValues || "function" != typeof t.userAgentData.getHighEntropyValues) return d;
    try {
        return (
            (l = await p(t.userAgentData)),
            {
                device: { model: l.device?.model || d.device.model },
                os: { name: l.os?.name || d.os.name, version: l.os?.version || d.os.version },
                browser: ((l) => {
                    let t = "u" > typeof navigator ? navigator.userAgent : "",
                        d = W();
                    if (!t) return l;
                    try {
                        return { ...l, name: d.browser.name, version: d.browser.version };
                    } catch {
                        return { ...l, name: "Unknown", version: "Unknown" };
                    }
                })({ name: l.browser?.name || d.browser.name, version: l.browser?.version || d.browser.version }),
            }
        );
    } catch {
        return d;
    }
}
var M = class {
    constructor(l) {
        this.ipLookup = l;
    }
    async getFingerprint(l = !1) {
        let t = await (0, b.n)(),
            [d, i] = await Promise.all([N(), l ? Promise.resolve("") : this.ipLookup.getIp()]);
        return { visitorId: t, ip: i, deviceInfo: d };
    }
};
async function X() {
    if ("u" < typeof fetch) return "";
    let l = 0,
        t = new AbortController();
    if (AbortSignal.timeout) {
        let l = AbortSignal.timeout(3e3);
        return (await (await fetch("https://api.ipify.org?format=json", { signal: l })).json()).ip;
    }
    let d = new Promise((d, i) => {
            l = setTimeout(() => {
                t.abort(), i(Error("Request timeout"));
            }, 3e3);
        }),
        i = fetch("https://api.ipify.org?format=json", { signal: t.signal })
            .then((l) => l.json())
            .then((l) => l.ip),
        e = await Promise.race([i, d]);
    return clearTimeout(l), e;
}
var r = class {
    async getIp() {
        return void 0 !== i
            ? i
            : e ||
                  (e = (async () => {
                      try {
                          let l = await X();
                          return (i = l), l;
                      } catch {
                          return (i = ""), "";
                      } finally {
                          e = void 0;
                      }
                  })());
    }
};
let y = null;
async function Y(l) {
    if (y) return y;
    let t = await a.t.get(n.t.featureConfig, { signal: l });
    if (!t.ok) throw Error(`Failed to fetch feature config: ${t.status} ${t.statusText}`);
    return (y = t.data);
}
async function T(l = {}, t) {
    var d, i;
    let { disableIpify: e = !1, hostingApp: c, signal: s } = l,
        Z = await t.fingerprintProvider.getFingerprint(e),
        m = (0, b.t)(t.browserEnv),
        o = {
            hash: Z.visitorId || "",
            ip: Z.ip || "",
            deviceType: "WEBAPP",
            data: JSON.stringify(Z),
            osVersion: ((d = Z.deviceInfo.os), `${d.name || "Unknown"} ${d.version || ""}`.trim()),
            deviceModel: Z.deviceInfo.device.model || "",
            browser: (i = Z.deviceInfo.browser).name && i.version ? `${i.name} ${i.version}` : "Unknown",
            hasLiedBrowser: m,
            sdkVersion: "2.1.0",
            hostingApp: c ?? "Web SDK",
        },
        u = await a.t.post(n.t.deviceFingerprint, o, { signal: s });
    if (!u.ok) throw Error(`Failed to submit fingerprint: ${u.status} ${u.statusText}`);
    return u.data;
}
let V = !1,
    L = null,
    I = !1,
    z = !0,
    w = !0;
function R(l) {
    z = l;
}
function S(l) {
    w = l;
}
let C = !1,
    x = null;
async function g(l = {}) {
    let { token: t, hostingApp: d, signal: i } = l;
    return (void 0 !== t && t !== (0, a.r)() && ((0, a.s)(t), F(), (0, m.r)() && (await (0, m.i)(t))), V && L)
        ? { features: L, disableIpify: I, fingerprintSuccess: C, fingerprintResult: c }
        : x ||
              (x = (async () => {
                  var l, t;
                  let e,
                      a,
                      n = !1;
                  try {
                      (l = (e = await Y(i)).features),
                          (n = l?.find((l) => "DISABLE_IPIFY" === l.feature)?.enabled ?? !1);
                  } catch {
                      e = { sessionIdentifier: "" };
                  }
                  let b = ((t = n), !z || t),
                      m = !1;
                  if (w)
                      try {
                          let l = new M(new r()),
                              t = new o();
                          (a = await T(
                              { disableIpify: b, hostingApp: d, signal: i },
                              { fingerprintProvider: l, browserEnv: t },
                          )),
                              (m = !0),
                              (0, Z.n)();
                      } catch (l) {
                          console.warn("Failed to submit device fingerprint:", l);
                      }
                  else (0, Z.n)();
                  try {
                      let l = new u().getBrowserInfo();
                      (0, s.g)({
                          code: "browser",
                          payload: {
                              userAgent: l.userAgent,
                              isWebRtcSupported: l.isWebRtcSupported,
                              browser: l.browser,
                              os: l.os,
                              device: l.device,
                              engine: l.engine,
                              cpu: l.cpu,
                          },
                      });
                  } catch (l) {
                      console.warn("Failed to send browser info event:", l);
                  }
                  return (
                      (V = !0),
                      (L = e),
                      (I = b),
                      (C = m),
                      (c = a),
                      { features: e, disableIpify: b, fingerprintSuccess: m, fingerprintResult: a }
                  );
              })().finally(() => {
                  (x = null), (0, s._)()?.start();
              }));
}
function D() {
    return !z || I;
}
function j() {
    return c;
}
function U() {
    return w;
}
function F() {
    (V = !1),
        (L = null),
        (I = !1),
        (C = !1),
        (c = void 0),
        (x = null),
        (y = null),
        (i = void 0),
        (e = void 0),
        (0, Z.r)();
}
