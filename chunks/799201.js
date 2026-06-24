let r, n;
i.d(t, { n: () => s, r: () => o, t: () => l });
var o = class {
    getScreenDimensions() {
        return "u" < typeof screen ? { width: 0, height: 0 } : { width: screen.width, height: screen.height };
    }
    generateCanvasFingerprint() {
        try {
            if ("u" < typeof document) return "";
            let e = document.createElement("canvas"),
                t = e.getContext("2d");
            if (!t) return "";
            return (
                (t.textBaseline = "top"),
                (t.font = "14px Arial"),
                t.fillText("fingerprint", 2, 2),
                e.toDataURL().slice(-50)
            );
        } catch {
            return "";
        }
    }
    getWebGLRenderer() {
        try {
            if ("u" < typeof document) return "";
            let e = document.createElement("canvas"),
                t = e.getContext("webgl") || e.getContext("experimental-webgl");
            if (!t) return "";
            let i = t.getExtension("WEBGL_debug_renderer_info");
            if (!i) return "";
            return t.getParameter(i.UNMASKED_RENDERER_WEBGL) || "";
        } catch {
            return "";
        }
    }
    getWindowProperty(e) {
        if ("u" > typeof window) return window[e];
    }
    getNavigatorProperty(e) {
        if ("u" > typeof navigator) return navigator[e];
    }
    getNavigatorPrefixes() {
        if ("u" < typeof navigator) return { webkit: !1, moz: !1, o: !1, ms: !1 };
        let e = navigator;
        return {
            webkit: void 0 !== e.webkitGetUserMedia,
            moz: void 0 !== e.mozGetUserMedia,
            o: void 0 !== e.oGetUserMedia,
            ms: void 0 !== e.msGetUserMedia,
        };
    }
    async fetchJson(e, t = 3e3) {
        try {
            if ("u" < typeof fetch) return null;
            let i = new AbortController(),
                r = setTimeout(() => i.abort(), t),
                n = await fetch(e, { signal: i.signal });
            return clearTimeout(r), await n.json();
        } catch {
            return null;
        }
    }
    async enumerateVideoDeviceLabels() {
        try {
            if ("u" < typeof navigator || !navigator.mediaDevices?.enumerateDevices) return [];
            return (await navigator.mediaDevices.enumerateDevices())
                .filter((e) => "videoinput" === e.kind)
                .map((e) => e.label);
        } catch {
            return [];
        }
    }
    getTimestamp() {
        return Date.now();
    }
};
function s() {
    (r = void 0), (n = void 0);
}
async function a() {
    if ("u" < typeof fetch) return "";
    let e = 0,
        t = new AbortController();
    if (AbortSignal.timeout) {
        let e = AbortSignal.timeout(3e3);
        return (await (await fetch("https://api.ipify.org?format=json", { signal: e })).json()).ip;
    }
    let i = new Promise((i, r) => {
            e = setTimeout(() => {
                t.abort(), r(Error("Request timeout"));
            }, 3e3);
        }),
        r = fetch("https://api.ipify.org?format=json", { signal: t.signal })
            .then((e) => e.json())
            .then((e) => e.ip),
        n = await Promise.race([r, i]);
    return clearTimeout(e), n;
}
var l = class {
    async getIp() {
        return void 0 !== r
            ? r
            : n ||
                  (n = (async () => {
                      try {
                          let e = await a();
                          return (r = e), e;
                      } catch {
                          return (r = ""), "";
                      } finally {
                          n = void 0;
                      }
                  })());
    }
};
