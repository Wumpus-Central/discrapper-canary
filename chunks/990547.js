let i, a;
r.r(n),
    r.d(n, {
        AnalyticsActionHandlers: function () {
            return T.X;
        },
        Impression: function () {
            return b.Impression;
        },
        ImpressionGroups: function () {
            return b.A;
        },
        ImpressionNames: function () {
            return y.z;
        },
        ImpressionSchema: function () {
            return y.ImpressionSchema;
        },
        ImpressionTypes: function () {
            return b.n;
        },
        NetworkActionNames: function () {
            return y.a;
        },
        StandardAnalyticsLocation: function () {
            return b.StandardAnalyticsLocation;
        },
        StandardAnalyticsSchemaNameMap: function () {
            return y.StandardAnalyticsSchemaNameMap;
        },
        TypedEventProperties: function () {
            return b.TypedEventProperties;
        },
        analyticsTrackingStoreMaker: function () {
            return T.l;
        },
        encodeProperties: function () {
            return I.Z;
        },
        extendSuperProperties: function () {
            return W;
        },
        getCampaignParams: function () {
            return L;
        },
        getDevice: function () {
            return k;
        },
        getOS: function () {
            return M;
        },
        getSuperProperties: function () {
            return z;
        },
        getSuperPropertiesBase64: function () {
            return q;
        },
        isThrottled: function () {
            return Y;
        },
        trackMaker: function () {
            return K;
        }
    });
var s,
    o = r(757143);
var l = r(47120);
var u = r(348327),
    c = r.n(u),
    d = r(512722),
    f = r.n(d),
    _ = r(264344),
    h = r.n(_);
r(804098);
var p = r(903772),
    m = r(627420),
    g = r(433517),
    E = r(298444),
    v = r(979675),
    I = r(947486),
    T = r(699407),
    b = r(20281),
    y = r(525769);
let S = 'deviceProperties',
    A = 'referralProperties',
    N = {},
    C = {},
    R = window.DiscordNative;
if (null != R) {
    let e;
    let n = R.remoteApp.getVersion(),
        r = R.process.platform,
        a = R.os.release,
        o = R.os.arch,
        l = R.os.appArch,
        u = R.remoteApp.getReleaseChannel(),
        c = (0, m.qf)();
    switch (r) {
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
            e = r;
    }
    if (
        ((i = {
            os: e,
            browser: 'Discord Client',
            release_channel: u || 'unknown',
            client_version: n,
            os_version: a,
            os_arch: o,
            app_arch: l,
            system_locale: c,
            has_client_mods: (0, p.e)()
        }),
        (null === (s = h().name) || void 0 === s ? void 0 : s.toLocaleLowerCase()) === 'electron' && ((i.browser_user_agent = h().ua || ''), (i.browser_version = h().version || '')),
        'linux' === r)
    ) {
        let e = R.crashReporter.getMetadata();
        (i.window_manager = e.wm), (i.distro = e.distro);
    } else 'darwin' === r ? (i.os_sdk_version = null == a ? void 0 : a.split('.')[0]) : 'win32' === r && (i.os_sdk_version = null == a ? void 0 : a.split('.')[2]);
}
let O = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' ');
function D(e, n) {
    if (null == e) return '';
    n = n.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    let r = new RegExp('[\\?&]'.concat(n, '=([^&#]*)')).exec(e);
    return null === r || ('string' != typeof r[1] && r[1].length) ? '' : decodeURIComponent(r[1]).replace(/\+/g, ' ');
}
function L(e) {
    let n = {};
    return (
        O.forEach((r) => {
            let i = D(e, r);
            i.length > 0 && (n[r] = i);
        }),
        n
    );
}
function x() {
    let e = document.referrer;
    if (0 === e.search('https?://(.*)google.([^/?]*)')) return 'google';
    if (0 === e.search('https?://(.*)bing.com')) return 'bing';
    if (0 === e.search('https?://(.*)yahoo.com')) return 'yahoo';
    else if (0 === e.search('https?://(.*)duckduckgo.com')) return 'duckduckgo';
    else return null;
}
function w() {
    let e = {},
        n = document.referrer,
        r = x(),
        i = 'yahoo' !== r ? 'q' : 'p';
    if (null != r) {
        e.search_engine = r;
        let a = D(n, i);
        a.length > 0 && (e.mp_keyword = a);
    }
    return e;
}
function P() {
    let { userAgent: e, vendor: n = '' } = window.navigator,
        { opera: r } = window;
    if (r) return /Mini/.test(e) ? 'Opera Mini' : 'Opera';
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/FBIOS/.test(e)) return 'Facebook Mobile';
    else if (/CriOS/.test(e)) return 'Chrome iOS';
    else if (/Apple/.test(n)) return /Mobile/.test(e) || (null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2) ? 'Mobile Safari' : 'Safari';
    else if (/Android/.test(e)) return /Chrome/.test(e) ? 'Android Chrome' : 'Android Mobile';
    else if (/Edge/.test(e)) return 'Edge';
    else if (/Chrome/.test(e)) return 'Chrome';
    else if (/Konqueror/.test(e)) return 'Konqueror';
    else if (/Firefox/.test(e)) return 'Firefox';
    else if (/MSIE|Trident\//.test(e)) return 'Internet Explorer';
    else if (/Gecko/.test(e)) return 'Mozilla';
    else return '';
}
function M() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? 'Windows Mobile' : 'Windows';
    if (/(iPhone|iPad|iPod)/.test(e)) return 'iOS';
    if (/Android/.test(e)) return 'Android';
    else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? 'iOS' : 'Mac OS X';
    else if (/Linux/i.test(e)) return 'Linux';
    else return '';
}
function k() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return 'BlackBerry';
    if (/Windows Phone/i.test(e)) return 'Windows Phone';
    if (/Android/.test(e)) return 'Android';
    else if (/iPhone/.test(e)) return 'iPhone';
    else if (/iPad/.test(e)) return 'iPad';
    else return '';
}
function U() {
    let e = document.referrer.split('/');
    return e.length >= 3 ? e[2] : '';
}
function B() {
    let e = {},
        n = M();
    return (e.os = n), (e.browser = P()), (e.device = k()), (e.system_locale = (0, m.qf)()), (e.has_client_mods = (0, p.e)()), e;
}
function G() {
    var e, n;
    let r = {
        browser_user_agent: window.navigator.userAgent || '',
        browser_version: h().version || ''
    };
    return {
        ...r,
        os_version: null !== (n = null === h() || void 0 === h() ? void 0 : null === (e = h().os) || void 0 === e ? void 0 : e.version) && void 0 !== n ? n : ''
    };
}
function Z() {
    let e = {};
    return (
        (e.referrer = document.referrer),
        (e.referring_domain = U()),
        (e = {
            ...e,
            ...L(window.location.href),
            ...w()
        })
    );
}
function F(e, n) {
    let r = {};
    return Object.keys(e).map((i) => (r[''.concat(i).concat(n)] = e[i])), r;
}
function V() {
    let e = g.K.get(S);
    null == e && ((e = B()), g.K.set(S, e));
    let n = g.K.get(A);
    null == n && ((n = Z()), g.K.set(A, n));
    let r = E.x.get(A);
    return (
        null == r && ((r = F(Z(), '_current')), E.x.set(A, r)),
        {
            ...e,
            ...G(),
            ...n,
            ...r
        }
    );
}
function j() {
    try {
        if (__OVERLAY__) return 'OVERLAY';
    } catch (e) {}
    return null;
}
function H() {
    var e, n, r;
    let i = {},
        a = window.GLOBAL_ENV.RELEASE_CHANNEL;
    a && (i.release_channel = a.split('-')[0]);
    let s = parseInt(((r = '356686'), '356686'), 10);
    !isNaN(s) && (i.client_build_number = s);
    let o = null == R ? void 0 : null === (e = (n = R.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(n);
    return !isNaN(o) && (i.native_build_number = o), (i.client_event_source = j()), (i.has_client_mods = (0, p.e)()), i;
}
function Y(e) {
    return null != N[e] && N[e] > Date.now();
}
if (null == i)
    try {
        i = V();
    } catch (e) {
        i = {};
    }
function W(e) {
    (i = {
        ...i,
        ...e
    }),
        (a = (0, I.Z)(i));
}
W(H());
let K = (e) => {
    let { analyticEventConfigs: n, dispatcher: i, TRACK_ACTION_NAME: a } = e,
        s = (0, v.$)(i, a);
    return function e(e, i) {
        let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null != r.g.isServerRendering && !0 === r.g.isServerRendering) return Promise.resolve();
        let o = null != i ? i : {},
            l = n[e];
        if ('function' == typeof l) {
            var u;
            l = null !== (u = l(o)) && void 0 !== u ? u : null;
        }
        if (null != l) {
            if ('throttlePeriod' in l) {
                let n = [e, ...l.throttleKeys(o)].join('_');
                if (Y(n)) return Promise.resolve();
                if ('number' == typeof l.throttlePercent && Math.random() > l.throttlePercent) return Promise.resolve();
                if (l.deduplicate) {
                    let e = C[n];
                    if (c()(e, o)) return Promise.resolve();
                    C[n] = o;
                }
                N[n] = Date.now() + l.throttlePeriod;
            } else if ('throttlePercent' in l) {
                if (Math.random() > l.throttlePercent) return Promise.resolve();
            } else f()(!1, 'Unsupported analytics event config: '.concat(l));
        }
        return s(e, i, a);
    };
};
function z() {
    return i;
}
function q() {
    return a;
}
