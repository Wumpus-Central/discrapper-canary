i.d(t, { n: () => p, t: () => f });
var r = i(389777),
    n = i(351618),
    o = i(958027);
let a = [
    "rear",
    "back",
    "r\xfcck",
    "arri\xe8re",
    "trasera",
    "tr\xe1s",
    "traseira",
    "posteriore",
    "\u540E\u9762",
    "\u5F8C\u9762",
    "\u80CC\u9762",
    "\u540E\u7F6E",
    "\u5F8C\u7F6E",
    "\u80CC\u7F6E",
    "\u0437\u0430\u0434\u043D\u0435\u0439",
    "\u0627\u0644\u062E\u0644\u0641\u064A\u0629",
    "\uD6C4",
    "arka",
    "achterzijde",
    "\u0E2B\u0E25\u0E31\u0E07",
    "baksidan",
    "bagside",
    "sau",
    "bak",
    "tylny",
    "takakamera",
    "belakang",
    "\u05D0\u05D7\u05D5\u05E8\u05D9\u05EA",
    "\u03C0\u03AF\u03C3\u03C9",
    "spate",
    "h\xe1ts\xf3",
    "zadn\xed",
    "darrere",
    "zadn\xe1",
    "\u0437\u0430\u0434\u043D\u044F",
    "stra\u017Enja",
    "\u092C\u0948\u0915",
];
function s(e) {
    let t = e.toLowerCase();
    return a.some((e) => t.includes(e));
}
async function l() {
    let e = await (0, n.n)(),
        t = e.map((t, i) => {
            var r;
            let n;
            return (
                (r = e.length),
                (n = "" === t.label ? (1 === r || i + 1 <= r / 2 ? "front" : "back") : s(t.label) ? "back" : "front"),
                { deviceId: t.deviceId, label: t.label, cameraType: n }
            );
        });
    if (t.length > 1 && !t.some((e) => "back" === e.cameraType)) {
        let e = t.map((e) => {
                let t = e.label.match(/\b([0-9]+)MP?\b/i);
                return t ? parseInt(t[1], 10) : NaN;
            }),
            i = t.length - 1;
        e.some(isNaN) || (i = e.lastIndexOf(Math.max(...e))), (t[i].cameraType = "back");
    }
    return t;
}
function c(e) {
    let t = { resizeMode: "none", facingMode: "environment" };
    switch (e) {
        case 0:
            return { ...t, height: { ideal: 720 } };
        case 1:
            return {
                ...t,
                width: { min: 3200, ideal: 3840, max: 4096 },
                height: { min: 1800, ideal: 2160, max: 2400 },
            };
        case 2:
            return { ...t, width: { min: 1400, ideal: 1920, max: 2160 }, height: { min: 900, ideal: 1080, max: 1440 } };
        case 3:
            return { ...t, width: { min: 800, ideal: 1400, max: 1920 }, height: { min: 600, ideal: 900, max: 1080 } };
        case 4:
            return { ...t, width: { min: 640, ideal: 800, max: 1400 }, height: { min: 480, ideal: 480, max: 900 } };
        case 5:
            return { ...t, width: { min: 640, ideal: 640, max: 800 }, height: { min: 480, ideal: 480, max: 600 } };
        default:
            return {};
    }
}
async function d(e = 0) {
    if (e > 5) throw Error("Failed to get camera after all fallback attempts");
    try {
        let t = await (0, n.r)({ video: c(e) }),
            i = t.getVideoTracks()[0],
            r = (function (e, t) {
                let i = e.getSettings(),
                    r = t.find((t) => t.deviceId === i.deviceId || ("" !== t.label && t.label === e.label));
                if (r) {
                    if (("environment" === i.facingMode || s(e.label)) && t.length > 1)
                        return (
                            t.forEach((e) => {
                                e.deviceId === r.deviceId
                                    ? (e.cameraType = "back")
                                    : s(e.label) || (e.cameraType = "front");
                            }),
                            (function (e, t) {
                                if (0 === t.length) return;
                                if (1 === t.length) return t[0];
                                let i = t.map((e) => {
                                        let t = e.label.match(/\b([0-9]+)\s*MP?\b/i);
                                        return { camera: e, mp: t ? parseInt(t[1], 10) : 0 };
                                    }),
                                    r = Math.max(...i.map((e) => e.mp));
                                if (r > 0) {
                                    let e = i.find((e) => e.mp === r);
                                    if (e) return e.camera;
                                }
                                let n = e.getSettings(),
                                    o = t.find((t) => t.deviceId === n.deviceId || t.label === e.label);
                                return o || t[0];
                            })(
                                e,
                                t.filter((e) => "back" === e.cameraType),
                            )
                        );
                    if (1 === t.length) return r;
                }
            })(i, await l());
        if (((0, n.i)(t), !r)) throw Error("Could not identify main camera");
        let o = await (0, n.r)({
            video: (function (e, t) {
                let i = { deviceId: { exact: e.deviceId }, resizeMode: "none" };
                if (t <= 1) return { ...i, width: { ideal: 1920 }, height: { ideal: 1080 } };
                let r = c(t);
                return { ...i, width: r.width, height: r.height };
            })(r, e),
        });
        return await u(o), { stream: o, fallbackLevel: e };
    } catch (n) {
        let t = n instanceof Error ? n.name : "UnknownError",
            i = Math.min(e + 1, 5);
        if ("NotReadableError" === t) return await (0, r.t)(300), d(i);
        if ("AbortError" === t) return await (0, r.t)(300), d(e);
        return d(i);
    }
}
async function u(e) {
    let t = e.getVideoTracks()[0];
    try {
        await (0, n.t)(t, { advanced: [{ focusDistance: 1 }] });
    } catch {}
}
async function h() {
    let e = await (0, n.r)({
        audio: !1,
        video: { resizeMode: "none", facingMode: "environment", height: { ideal: (0, o.a)() ? 1080 : 720 } },
    });
    return await u(e), e;
}
async function p(e, t = 0) {
    if (t > 5) throw Error("Failed to get desktop camera after all fallback attempts");
    let i = (function (e, t = 0) {
        let { deviceId: i } = e,
            r = (function (e) {
                switch (e) {
                    case 0:
                        return {
                            width: { min: 3200, ideal: 3840, max: 4096 },
                            height: { min: 1800, ideal: 2160, max: 2400 },
                        };
                    case 1:
                        return {
                            width: { min: 1400, ideal: 1920, max: 2160 },
                            height: { min: 900, ideal: 1080, max: 1440 },
                        };
                    case 2:
                        return {
                            width: { min: 800, ideal: 1400, max: 1920 },
                            height: { min: 600, ideal: 900, max: 1080 },
                        };
                    case 3:
                        return {
                            width: { min: 640, ideal: 800, max: 1400 },
                            height: { min: 480, ideal: 480, max: 900 },
                        };
                    case 4:
                        return {
                            width: { min: 640, ideal: 640, max: 800 },
                            height: { min: 480, ideal: 480, max: 600 },
                        };
                    default:
                        return {};
                }
            })(t);
        return { audio: (0, o.o)(), video: { facingMode: "user", deviceId: i ? { exact: i } : void 0, ...r } };
    })(e, t);
    try {
        return await (0, n.r)(i);
    } catch (r) {
        let i = t + 1;
        if (i > 5) throw r;
        return p(e, i);
    }
}
async function f(e) {
    return (0, o.r)() ? { stream: await h() } : (0, o.t)() ? d(0) : { stream: await p({ deviceId: e }) };
}
