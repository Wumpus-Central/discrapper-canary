n.d(t, {
    Je: () => a,
    gs: () => d,
    mh: () => u,
    p9: () => c,
    uV: () => s
});
var r = n(544891),
    i = n(881052),
    l = n(73346),
    o = n(981631);
let a = async (e, t, n) => {
        var l,
            a,
            { priceTier: u, imageName: s, createNewRole: c, unlinkRole: d } = n,
            p = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(n, ['priceTier', 'imageName', 'createNewRole', 'unlinkRole']);
        try {
            return (
                await r.tn.patch({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    body:
                        ((l = (function (e) {
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
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, p)),
                        (a = {
                            image_name: s,
                            price_tier: u,
                            create_new_role: c,
                            unlink_role: d
                        }),
                        (a = null != a ? a : {}),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(a)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                              }),
                        l),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    u = async (e, t) => {
        try {
            await r.tn.del({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                rejectWithError: !1
            });
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    s = async (e) => {
        try {
            return (
                await (0, l.Kb)({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e),
                    rejectWithError: !1
                })
            ).body.listings;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    c = async (e, t) => {
        try {
            return (
                await (0, l.Kb)({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    d = async (e) => {
        let { guildId: t, productId: n, attachmentId: l } = e;
        try {
            return (
                await r.tn.post({
                    url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, l),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    };
