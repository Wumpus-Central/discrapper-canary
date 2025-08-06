n.d(t, {
    Je: () => _,
    gs: () => g,
    mh: () => p,
    p9: () => m,
    uV: () => h
});
var r = n(544891),
    i = n(881052),
    o = n(73346),
    a = n(981631);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            }));
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) ((n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) ((n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let _ = async (e, t, n) => {
        var { priceTier: o, imageName: s, createNewRole: c, unlinkRole: f } = n,
            _ = d(n, ['priceTier', 'imageName', 'createNewRole', 'unlinkRole']);
        try {
            return (
                await r.tn.patch({
                    url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    body: u(l({}, _), {
                        image_name: s,
                        price_tier: o,
                        create_new_role: c,
                        unlink_role: f
                    }),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    p = async (e, t) => {
        try {
            await r.tn.del({
                url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                rejectWithError: !1
            });
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    h = async (e) => {
        try {
            return (
                await (0, o.Kb)({
                    url: a.ANM.GUILD_PRODUCT_LISTINGS(e),
                    rejectWithError: !1
                })
            ).body.listings;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    m = async (e, t) => {
        try {
            return (
                await (0, o.Kb)({
                    url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    g = async (e) => {
        let { guildId: t, productId: n, attachmentId: o } = e;
        try {
            return (
                await r.tn.post({
                    url: a.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, o),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    };
