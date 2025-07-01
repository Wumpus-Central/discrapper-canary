n.d(t, {
    Je: () => o,
    gs: () => d,
    mh: () => s,
    p9: () => u,
    uV: () => c
});
var r = n(544891),
    i = n(881052),
    l = n(73346),
    a = n(981631);
let o = async (e, t, n) => {
        var l,
            o,
            { priceTier: s, imageName: c, createNewRole: u, unlinkRole: d } = n,
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
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(n, ['priceTier', 'imageName', 'createNewRole', 'unlinkRole']);
        try {
            return (
                await r.tn.patch({
                    url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    body:
                        ((l = (function (e) {
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
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({}, p)),
                        (o = {
                            image_name: c,
                            price_tier: s,
                            create_new_role: u,
                            unlink_role: d
                        }),
                        (o = null != o ? o : {}),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(o)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                              }),
                        l),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    s = async (e, t) => {
        try {
            await r.tn.del({
                url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                rejectWithError: !1
            });
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    c = async (e) => {
        try {
            return (
                await (0, l.Kb)({
                    url: a.ANM.GUILD_PRODUCT_LISTINGS(e),
                    rejectWithError: !1
                })
            ).body.listings;
        } catch (e) {
            throw new i.Hx(e);
        }
    },
    u = async (e, t) => {
        try {
            return (
                await (0, l.Kb)({
                    url: a.ANM.GUILD_PRODUCT_LISTINGS(e, t),
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
                    url: a.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, l),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new i.Hx(e);
        }
    };
