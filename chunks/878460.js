n.d(t, {
    A: () => h,
});
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let l = {},
    c = null;

function u(e) {
    let { settings: t } = e;
    (l = t.categories), (c = t.initialized);
}

function d(e) {
    let { settings: t } = e;
    l = t.categories;
}

function f(e) {
    let { updates: t } = e;
    l = o({}, l, t);
}

function p() {
    (l = {}), (c = null);
}
class _ extends (r = i.Ay.Store) {
    getEmailSettings() {
        return {
            categories: l,
            initialized: c,
        };
    }
}
s(_, "displayName", "EmailSettingsStore");
let h = new _(a.h, {
    CONNECTION_OPEN: p,
    LOGOUT: p,
    EMAIL_SETTINGS_FETCH_SUCCESS: u,
    EMAIL_SETTINGS_UPDATE_SUCCESS: d,
    EMAIL_SETTINGS_UPDATE: f,
});
