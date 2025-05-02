let r, i;
n.r(t),
    n.d(t, {
        AnalyticsActionHandlers: () => b.X,
        Impression: () => y.Impression,
        ImpressionGroups: () => y.A,
        ImpressionNames: () => O.z,
        ImpressionSchema: () => O.ImpressionSchema,
        ImpressionTypes: () => y.n,
        NetworkActionNames: () => O.a,
        StandardAnalyticsLocation: () => y.StandardAnalyticsLocation,
        StandardAnalyticsSchemaNameMap: () => O.StandardAnalyticsSchemaNameMap,
        TypedEventProperties: () => y.TypedEventProperties,
        analyticsTrackingStoreMaker: () => b.l,
        encodeProperties: () => E.Z,
        extendSuperProperties: () => q,
        getCampaignParams: () => x,
        getDevice: () => G,
        getOS: () => U,
        getSuperProperties: () => X,
        getSuperPropertiesBase64: () => J,
        isThrottled: () => z,
        trackMaker: () => Q
    }),
    n(35282),
    n(704826),
    n(413496),
    n(433524),
    n(388685);
var o,
    a = n(348327),
    s = n.n(a),
    l = n(512722),
    c = n.n(l),
    u = n(264344),
    d = n.n(u),
    f = n(772848);
n(804098);
var _ = n(903772),
    p = n(627420),
    h = n(433517),
    m = n(298444),
    g = n(979675),
    E = n(947486),
    b = n(699407),
    y = n(20281),
    O = n(525769);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = 'deviceProperties',
    N = 'referralProperties',
    C = (0, f.Z)(),
    R = {},
    P = {},
    w = window.DiscordNative;
if (null != w) {
    let e,
        t = w.remoteApp.getVersion(),
        n = w.process.platform,
        i = w.os.release,
        a = w.os.arch,
        s = w.os.appArch,
        l = w.remoteApp.getReleaseChannel(),
        c = (0, p.qf)();
    switch (n) {
        case 'win32':
            e = 'Windows';
            break;
        case 'darwin':
            e = 'Mac OS X';
            break;
        case 'linux':
            e = 'Linux';
            break;
        default:
            e = n;
    }
    if (
        ((r = {
            os: e,
            browser: 'Discord Client',
            release_channel: l || 'unknown',
            client_version: t,
            os_version: i,
            os_arch: a,
            app_arch: s,
            system_locale: c,
            has_client_mods: (0, _.e)(),
            client_launch_id: C
        }),
        (null == (o = d().name) ? void 0 : o.toLocaleLowerCase()) === 'electron' && ((r.browser_user_agent = d().ua || ''), (r.browser_version = d().version || '')),
        'linux' === n)
    ) {
        let e = w.crashReporter.getMetadata();
        (r.window_manager = e.wm), (r.distro = e.distro);
    } else 'darwin' === n ? (r.os_sdk_version = null == i ? void 0 : i.split('.')[0]) : 'win32' === n && (r.os_sdk_version = null == i ? void 0 : i.split('.')[2]);
}
let D = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ');
function L(e, t) {
    if (null == e) return '';
    t = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    let n = new RegExp('[\\?&]'.concat(t, '=([^&#]*)')).exec(e);
    return null === n || ('string' != typeof n[1] && n[1].length) ? '' : decodeURIComponent(n[1]).replace(/\+/g, ' ');
}
function x(e) {
    let t = {};
    return (
        D.forEach((n) => {
            let r = L(e, n);
            r.length > 0 && (t[n] = r);
        }),
        t
    );
}
function M() {
    let e = document.referrer;
    return 0 === e.search('https?://(.*)google.([^/?]*)') ? 'google' : 0 === e.search('https?://(.*)bing.com') ? 'bing' : 0 === e.search('https?://(.*)yahoo.com') ? 'yahoo' : 0 === e.search('https?://(.*)duckduckgo.com') ? 'duckduckgo' : null;
}
function k() {
    let e = {},
        t = document.referrer,
        n = M(),
        r = 'yahoo' !== n ? 'q' : 'p';
    if (null != n) {
        e.search_engine = n;
        let i = L(t, r);
        i.length > 0 && (e.mp_keyword = i);
    }
    return e;
}
function j() {
    let { userAgent: e, vendor: t = '' } = window.navigator,
        { opera: n } = window;
    if (n) return /Mini/.test(e) ? 'Opera Mini' : 'Opera';
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/FBIOS/.test(e)) return 'Facebook Mobile';
    if (/CriOS/.test(e)) return 'Chrome iOS';
    if (/Apple/.test(t)) return /Mobile/.test(e) || (null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2) ? 'Mobile Safari' : 'Safari';
    else if (/Android/.test(e)) return /Chrome/.test(e) ? 'Android Chrome' : 'Android Mobile';
    else if (/Edge/.test(e)) return 'Edge';
    else if (/Chrome/.test(e)) return 'Chrome';
    else if (/Konqueror/.test(e)) return 'Konqueror';
    else if (/Firefox/.test(e)) return 'Firefox';
    else if (/MSIE|Trident\//.test(e)) return 'Internet Explorer';
    else if (/Gecko/.test(e)) return 'Mozilla';
    else return '';
}
function U() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? 'Windows Mobile' : 'Windows';
    if (/(iPhone|iPad|iPod)/.test(e)) return 'iOS';
    if (/Android/.test(e)) return 'Android';
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'iOS' : 'Mac OS X';
    else if (/Linux/i.test(e)) return 'Linux';
    else return '';
}
function G() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/Windows Phone/i.test(e)) return 'Windows Phone';
    if (/Android/.test(e)) return 'Android';
    if (/iPhone/.test(e)) return 'iPhone';
    if (/iPad/.test(e)) return 'iPad';
    else return '';
}
function B() {
    let e = document.referrer.split('/');
    return e.length >= 3 ? e[2] : '';
}
function V() {
    let e = {};
    return (e.os = U()), (e.browser = j()), (e.device = G()), (e.system_locale = (0, p.qf)()), (e.has_client_mods = (0, _.e)()), e;
}
function F() {
    var e, t;
    return T(
        I(
            {},
            {
                browser_user_agent: window.navigator.userAgent || '',
                browser_version: d().version || ''
            }
        ),
        { os_version: null != (t = null === d() || void 0 === d() || null == (e = d().os) ? void 0 : e.version) ? t : '' }
    );
}
function Z() {
    let e = {};
    return (e.referrer = document.referrer), (e.referring_domain = B()), (e = I({}, e, x(window.location.href), k()));
}
function H(e, t) {
    let n = {};
    return Object.keys(e).map((r) => (n[''.concat(r).concat(t)] = e[r])), n;
}
function Y() {
    let e = h.K.get(A);
    null == e && ((e = V()), h.K.set(A, e));
    let t = h.K.get(N);
    null == t && ((t = Z()), h.K.set(N, t));
    let n = m.x.get(N);
    return null == n && ((n = H(Z(), '_current')), m.x.set(N, n)), I({}, e, F(), t, n);
}
function W() {
    try {
        if (__OVERLAY__) return 'OVERLAY';
    } catch (e) {}
    return null;
}
function K() {
    var e, t;
    let n = {},
        r = window.GLOBAL_ENV.RELEASE_CHANNEL;
    r && (null == n.release_channel || '' === n.release_channel) && (n.release_channel = r.split('-')[0]);
    let i = parseInt('396307', 10);
    isNaN(i) || (n.client_build_number = i);
    let o = null == w || null == (e = (t = w.remoteApp).getBuildNumber) ? void 0 : e.call(t);
    return isNaN(o) || (n.native_build_number = o), (n.client_event_source = W()), (n.has_client_mods = (0, _.e)()), (n.client_launch_id = C), n;
}
function z(e) {
    return null != R[e] && R[e] > Date.now();
}
if (null == r)
    try {
        r = Y();
    } catch (e) {
        r = {};
    }
function q(e) {
    (r = I({}, r, e)), (i = (0, E.Z)(r));
}
q(K());
let Q = (e) => {
    let { analyticEventConfigs: t, dispatcher: r, TRACK_ACTION_NAME: i } = e,
        o = (0, g.$)(r, i);
    return function (e, r) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let a = null != r ? r : {},
            l = t[e];
        if ('function' == typeof l) {
            var u;
            l = null != (u = l(a)) ? u : null;
        }
        if (null != l)
            if ('throttlePeriod' in l) {
                let t = [e, ...l.throttleKeys(a)].join('_');
                if (z(t) || ('number' == typeof l.throttlePercent && Math.random() > l.throttlePercent)) return Promise.resolve();
                if (l.deduplicate) {
                    let e = P[t];
                    if (s()(e, a)) return Promise.resolve();
                    P[t] = a;
                }
                R[t] = Date.now() + l.throttlePeriod;
            } else if ('throttlePercent' in l) {
                if (Math.random() > l.throttlePercent) return Promise.resolve();
            } else c()(!1, 'Unsupported analytics event config: '.concat(l));
        return o(e, r, i);
    };
};
function X() {
    return r;
}
function J() {
    return i;
}
