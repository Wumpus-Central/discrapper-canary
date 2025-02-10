let i, r;
n.r(t),
    n.d(t, {
        AnalyticsActionHandlers: () => E.X,
        Impression: () => v.Impression,
        ImpressionGroups: () => v.A,
        ImpressionNames: () => y.z,
        ImpressionSchema: () => y.ImpressionSchema,
        ImpressionTypes: () => v.n,
        NetworkActionNames: () => y.a,
        StandardAnalyticsLocation: () => v.StandardAnalyticsLocation,
        StandardAnalyticsSchemaNameMap: () => y.StandardAnalyticsSchemaNameMap,
        TypedEventProperties: () => v.TypedEventProperties,
        analyticsTrackingStoreMaker: () => E.l,
        encodeProperties: () => g.Z,
        extendSuperProperties: () => j,
        getCampaignParams: () => R,
        getDevice: () => P,
        getOS: () => x,
        getSuperProperties: () => Y,
        getSuperPropertiesBase64: () => W,
        isThrottled: () => V,
        trackMaker: () => H
    }),
    n(757143),
    n(47120);
var a,
    s = n(348327),
    o = n.n(s),
    l = n(512722),
    u = n.n(l),
    c = n(264344),
    d = n.n(c);
n(804098);
var f = n(903772),
    _ = n(627420),
    p = n(433517),
    h = n(298444),
    m = n(979675),
    g = n(947486),
    E = n(699407),
    v = n(20281),
    y = n(525769);
let I = 'deviceProperties',
    T = 'referralProperties',
    b = {},
    S = {},
    A = window.DiscordNative;
if (null != A) {
    let e;
    let t = A.remoteApp.getVersion(),
        n = A.process.platform,
        r = A.os.release,
        s = A.os.arch,
        o = A.os.appArch,
        l = A.remoteApp.getReleaseChannel(),
        u = (0, _.qf)();
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
        ((i = {
            os: e,
            browser: 'Discord Client',
            release_channel: l || 'unknown',
            client_version: t,
            os_version: r,
            os_arch: s,
            app_arch: o,
            system_locale: u,
            has_client_mods: (0, f.e)()
        }),
        (null === (a = d().name) || void 0 === a ? void 0 : a.toLocaleLowerCase()) === 'electron' && ((i.browser_user_agent = d().ua || ''), (i.browser_version = d().version || '')),
        'linux' === n)
    ) {
        let e = A.crashReporter.getMetadata();
        (i.window_manager = e.wm), (i.distro = e.distro);
    } else 'darwin' === n ? (i.os_sdk_version = null == r ? void 0 : r.split('.')[0]) : 'win32' === n && (i.os_sdk_version = null == r ? void 0 : r.split('.')[2]);
}
let N = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ');
function C(e, t) {
    if (null == e) return '';
    t = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    let n = new RegExp('[\\?&]'.concat(t, '=([^&#]*)')).exec(e);
    return null === n || ('string' != typeof n[1] && n[1].length) ? '' : decodeURIComponent(n[1]).replace(/\+/g, ' ');
}
function R(e) {
    let t = {};
    return (
        N.forEach((n) => {
            let i = C(e, n);
            i.length > 0 && (t[n] = i);
        }),
        t
    );
}
function O() {
    let e = document.referrer;
    return 0 === e.search('https?://(.*)google.([^/?]*)') ? 'google' : 0 === e.search('https?://(.*)bing.com') ? 'bing' : 0 === e.search('https?://(.*)yahoo.com') ? 'yahoo' : 0 === e.search('https?://(.*)duckduckgo.com') ? 'duckduckgo' : null;
}
function D() {
    let e = {},
        t = document.referrer,
        n = O(),
        i = 'yahoo' !== n ? 'q' : 'p';
    if (null != n) {
        e.search_engine = n;
        let r = C(t, i);
        r.length > 0 && (e.mp_keyword = r);
    }
    return e;
}
function L() {
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
function x() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? 'Windows Mobile' : 'Windows';
    if (/(iPhone|iPad|iPod)/.test(e)) return 'iOS';
    if (/Android/.test(e)) return 'Android';
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'iOS' : 'Mac OS X';
    else if (/Linux/i.test(e)) return 'Linux';
    else return '';
}
function P() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/Windows Phone/i.test(e)) return 'Windows Phone';
    if (/Android/.test(e)) return 'Android';
    if (/iPhone/.test(e)) return 'iPhone';
    if (/iPad/.test(e)) return 'iPad';
    else return '';
}
function w() {
    let e = document.referrer.split('/');
    return e.length >= 3 ? e[2] : '';
}
function M() {
    let e = {},
        t = x();
    return (e.os = t), (e.browser = L()), (e.device = P()), (e.system_locale = (0, _.qf)()), (e.has_client_mods = (0, f.e)()), e;
}
function k() {
    var e, t;
    return {
        browser_user_agent: window.navigator.userAgent || '',
        browser_version: d().version || '',
        os_version: null !== (t = null === d() || void 0 === d() ? void 0 : null === (e = d().os) || void 0 === e ? void 0 : e.version) && void 0 !== t ? t : ''
    };
}
function U() {
    let e = {};
    return (
        (e.referrer = document.referrer),
        (e.referring_domain = w()),
        (e = {
            ...e,
            ...R(window.location.href),
            ...D()
        })
    );
}
function G(e, t) {
    let n = {};
    return Object.keys(e).map((i) => (n[''.concat(i).concat(t)] = e[i])), n;
}
function B() {
    let e = p.K.get(I);
    null == e && ((e = M()), p.K.set(I, e));
    let t = p.K.get(T);
    null == t && ((t = U()), p.K.set(T, t));
    let n = h.x.get(T);
    return (
        null == n && ((n = G(U(), '_current')), h.x.set(T, n)),
        {
            ...e,
            ...k(),
            ...t,
            ...n
        }
    );
}
function Z() {
    try {
        if (__OVERLAY__) return 'OVERLAY';
    } catch (e) {}
    return null;
}
function F() {
    var e, t, n;
    let i = {},
        r = window.GLOBAL_ENV.RELEASE_CHANNEL;
    r && (null == i.release_channel || '' === i.release_channel) && (i.release_channel = r.split('-')[0]);
    let a = parseInt(((n = '367095'), '367095'), 10);
    isNaN(a) || (i.client_build_number = a);
    let s = null == A ? void 0 : null === (e = (t = A.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t);
    return isNaN(s) || (i.native_build_number = s), (i.client_event_source = Z()), (i.has_client_mods = (0, f.e)()), i;
}
function V(e) {
    return null != b[e] && b[e] > Date.now();
}
if (null == i)
    try {
        i = B();
    } catch (e) {
        i = {};
    }
function j(e) {
    (i = {
        ...i,
        ...e
    }),
        (r = (0, g.Z)(i));
}
j(F());
let H = (e) => {
    let { analyticEventConfigs: t, dispatcher: i, TRACK_ACTION_NAME: r } = e,
        a = (0, m.$)(i, r);
    return function (e, i) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
        let s = null != i ? i : {},
            l = t[e];
        if ('function' == typeof l) {
            var c;
            l = null !== (c = l(s)) && void 0 !== c ? c : null;
        }
        if (null != l) {
            if ('throttlePeriod' in l) {
                let t = [e, ...l.throttleKeys(s)].join('_');
                if (V(t) || ('number' == typeof l.throttlePercent && Math.random() > l.throttlePercent)) return Promise.resolve();
                if (l.deduplicate) {
                    let e = S[t];
                    if (o()(e, s)) return Promise.resolve();
                    S[t] = s;
                }
                b[t] = Date.now() + l.throttlePeriod;
            } else if ('throttlePercent' in l) {
                if (Math.random() > l.throttlePercent) return Promise.resolve();
            } else u()(!1, 'Unsupported analytics event config: '.concat(l));
        }
        return a(e, i, r);
    };
};
function Y() {
    return i;
}
function W() {
    return r;
}
