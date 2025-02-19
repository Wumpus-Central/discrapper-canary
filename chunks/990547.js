let r, i;
n.r(t),
    n.d(t, {
        AnalyticsActionHandlers: () => E.X,
        Impression: () => v.Impression,
        ImpressionGroups: () => v.A,
        ImpressionNames: () => b.z,
        ImpressionSchema: () => b.ImpressionSchema,
        ImpressionTypes: () => v.n,
        NetworkActionNames: () => b.a,
        StandardAnalyticsLocation: () => v.StandardAnalyticsLocation,
        StandardAnalyticsSchemaNameMap: () => b.StandardAnalyticsSchemaNameMap,
        TypedEventProperties: () => v.TypedEventProperties,
        analyticsTrackingStoreMaker: () => E.l,
        encodeProperties: () => g.Z,
        extendSuperProperties: () => K,
        getCampaignParams: () => D,
        getDevice: () => j,
        getOS: () => k,
        getSuperProperties: () => q,
        getSuperPropertiesBase64: () => Q,
        isThrottled: () => Y,
        trackMaker: () => z
    }),
    n(301563),
    n(757143),
    n(474991),
    n(398202),
    n(47120);
var o,
    a = n(348327),
    s = n.n(a),
    l = n(512722),
    c = n.n(l),
    u = n(264344),
    d = n.n(u);
n(804098);
var f = n(903772),
    p = n(627420),
    _ = n(433517),
    h = n(298444),
    m = n(979675),
    g = n(947486),
    E = n(699407),
    v = n(20281),
    b = n(525769);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
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
function I(e, t) {
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
let T = 'deviceProperties',
    N = 'referralProperties',
    A = {},
    C = {},
    R = window.DiscordNative;
if (null != R) {
    let e;
    let t = R.remoteApp.getVersion(),
        n = R.process.platform,
        i = R.os.release,
        a = R.os.arch,
        s = R.os.appArch,
        l = R.remoteApp.getReleaseChannel(),
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
            has_client_mods: (0, f.e)()
        }),
        (null === (o = d().name) || void 0 === o ? void 0 : o.toLocaleLowerCase()) === 'electron' && ((r.browser_user_agent = d().ua || ''), (r.browser_version = d().version || '')),
        'linux' === n)
    ) {
        let e = R.crashReporter.getMetadata();
        (r.window_manager = e.wm), (r.distro = e.distro);
    } else 'darwin' === n ? (r.os_sdk_version = null == i ? void 0 : i.split('.')[0]) : 'win32' === n && (r.os_sdk_version = null == i ? void 0 : i.split('.')[2]);
}
let P = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ');
function w(e, t) {
    if (null == e) return '';
    t = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    let n = new RegExp('[\\?&]'.concat(t, '=([^&#]*)')).exec(e);
    return null === n || ('string' != typeof n[1] && n[1].length) ? '' : decodeURIComponent(n[1]).replace(/\+/g, ' ');
}
function D(e) {
    let t = {};
    return (
        P.forEach((n) => {
            let r = w(e, n);
            r.length > 0 && (t[n] = r);
        }),
        t
    );
}
function x() {
    let e = document.referrer;
    return 0 === e.search('https?://(.*)google.([^/?]*)') ? 'google' : 0 === e.search('https?://(.*)bing.com') ? 'bing' : 0 === e.search('https?://(.*)yahoo.com') ? 'yahoo' : 0 === e.search('https?://(.*)duckduckgo.com') ? 'duckduckgo' : null;
}
function L() {
    let e = {},
        t = document.referrer,
        n = x(),
        r = 'yahoo' !== n ? 'q' : 'p';
    if (null != n) {
        e.search_engine = n;
        let i = w(t, r);
        i.length > 0 && (e.mp_keyword = i);
    }
    return e;
}
function M() {
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
function k() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? 'Windows Mobile' : 'Windows';
    if (/(iPhone|iPad|iPod)/.test(e)) return 'iOS';
    if (/Android/.test(e)) return 'Android';
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'iOS' : 'Mac OS X';
    else if (/Linux/i.test(e)) return 'Linux';
    else return '';
}
function j() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/Windows Phone/i.test(e)) return 'Windows Phone';
    if (/Android/.test(e)) return 'Android';
    if (/iPhone/.test(e)) return 'iPhone';
    if (/iPad/.test(e)) return 'iPad';
    else return '';
}
function U() {
    let e = document.referrer.split('/');
    return e.length >= 3 ? e[2] : '';
}
function G() {
    let e = {},
        t = k();
    return (e.os = t), (e.browser = M()), (e.device = j()), (e.system_locale = (0, p.qf)()), (e.has_client_mods = (0, f.e)()), e;
}
function B() {
    var e, t;
    return I(
        O(
            {},
            {
                browser_user_agent: window.navigator.userAgent || '',
                browser_version: d().version || ''
            }
        ),
        { os_version: null !== (t = null === d() || void 0 === d() ? void 0 : null === (e = d().os) || void 0 === e ? void 0 : e.version) && void 0 !== t ? t : '' }
    );
}
function Z() {
    let e = {};
    return (e.referrer = document.referrer), (e.referring_domain = U()), (e = O({}, e, D(window.location.href), L()));
}
function F(e, t) {
    let n = {};
    return Object.keys(e).map((r) => (n[''.concat(r).concat(t)] = e[r])), n;
}
function V() {
    let e = _.K.get(T);
    null == e && ((e = G()), _.K.set(T, e));
    let t = _.K.get(N);
    null == t && ((t = Z()), _.K.set(N, t));
    let n = h.x.get(N);
    return null == n && ((n = F(Z(), '_current')), h.x.set(N, n)), O({}, e, B(), t, n);
}
function H() {
    try {
        if (__OVERLAY__) return 'OVERLAY';
    } catch (e) {}
    return null;
}
function W() {
    var e, t, n;
    let r = {},
        i = window.GLOBAL_ENV.RELEASE_CHANNEL;
    i && (null == r.release_channel || '' === r.release_channel) && (r.release_channel = i.split('-')[0]);
    let o = parseInt(((n = '369630'), '369630'), 10);
    isNaN(o) || (r.client_build_number = o);
    let a = null == R ? void 0 : null === (e = (t = R.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t);
    return isNaN(a) || (r.native_build_number = a), (r.client_event_source = H()), (r.has_client_mods = (0, f.e)()), r;
}
function Y(e) {
    return null != A[e] && A[e] > Date.now();
}
if (null == r)
    try {
        r = V();
    } catch (e) {
        r = {};
    }
function K(e) {
    (r = O({}, r, e)), (i = (0, g.Z)(r));
}
K(W());
let z = (e) => {
    let { analyticEventConfigs: t, dispatcher: r, TRACK_ACTION_NAME: i } = e,
        o = (0, m.$)(r, i);
    return function (e, r) {
        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let a = null != r ? r : {},
            l = t[e];
        if ('function' == typeof l) {
            var u;
            l = null !== (u = l(a)) && void 0 !== u ? u : null;
        }
        if (null != l) {
            if ('throttlePeriod' in l) {
                let t = [e, ...l.throttleKeys(a)].join('_');
                if (Y(t) || ('number' == typeof l.throttlePercent && Math.random() > l.throttlePercent)) return Promise.resolve();
                if (l.deduplicate) {
                    let e = C[t];
                    if (s()(e, a)) return Promise.resolve();
                    C[t] = a;
                }
                A[t] = Date.now() + l.throttlePeriod;
            } else if ('throttlePercent' in l) {
                if (Math.random() > l.throttlePercent) return Promise.resolve();
            } else c()(!1, 'Unsupported analytics event config: '.concat(l));
        }
        return o(e, r, i);
    };
};
function q() {
    return r;
}
function Q() {
    return i;
}
