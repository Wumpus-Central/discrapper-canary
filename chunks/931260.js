n.d(t, {
    A: () => v,
}),
    n(896048);
var r = n(562465),
    i = n(439372),
    a = n(924985),
    s = n(734057),
    o = n(927813),
    l = n(652215);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e, t) {
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

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {},
    _ = 0,
    h = 15 * o.A.Millis.SECOND;

function m() {
    p = u({}, a.A.getCollapsedCategories());
}

function g() {
    __OVERLAY__ || (clearTimeout(_), (_ = setTimeout(() => b({}), h)));
}
async function E(e, t) {
    null == e || e === l.ME
        ? await r.Bo.patch({
              url: l.Rsh.USER_GUILD_SETTINGS(l.ME),
              body: t,
              rejectWithError: !1,
          })
        : await b(
              null != t
                  ? {
                        [null != e ? e : l.ME]: t,
                    }
                  : {},
          );
}
async function b(e) {
    clearTimeout(_);
    let t = 0 !== Object.keys(e).length,
        n = a.A.getCollapsedCategories(),
        i = y();
    for (let r in i) {
        let i = s.A.getChannel(r);
        null != i &&
            null != i.guild_id &&
            (i.guild_id in e || (e[i.guild_id] = {}),
            null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}),
            (e[i.guild_id].channel_overrides[i.id] = f(u({}, e[i.guild_id].channel_overrides[i.id]), {
                collapsed: i.id in n,
            })),
            (t = !0));
    }
    return t
        ? ((p = u({}, n)),
          delete e[l.YYv],
          (
              await r.Bo.patch({
                  url: l.Rsh.USER_GUILD_SETTINGS_BULK,
                  body: {
                      guilds: e,
                  },
                  rejectWithError: !1,
              })
          ).body)
        : [];
}

function y() {
    let e = {},
        t = a.A.getCollapsedCategories();
    for (let n in t) t[n] !== p[n] && (e[n] = !0);
    for (let n in p) t[n] !== p[n] && (e[n] = !0);
    return e;
}

function O() {
    p = u({}, a.A.getCollapsedCategories());
}
class A extends i.A {
    constructor(...e) {
        super(...e),
            c(this, "actions", {
                CATEGORY_COLLAPSE: g,
                CATEGORY_EXPAND: g,
                CATEGORY_COLLAPSE_ALL: g,
                CATEGORY_EXPAND_ALL: g,
                POST_CONNECTION_OPEN: m,
                USER_GUILD_SETTINGS_FULL_UPDATE: O,
            }),
            c(this, "saveUserGuildSettings", E),
            c(this, "saveUserGuildSettingsBulk", b);
    }
}
let v = new A();
