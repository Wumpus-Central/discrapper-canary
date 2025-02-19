n.d(t, {
    Je: () => s,
    gs: () => c,
    mh: () => a,
    p9: () => d,
    uV: () => u
});
var i = n(544891),
    r = n(881052),
    l = n(73346),
    o = n(981631);
let s = async (e, t, n) => {
        var l,
            s,
            { priceTier: a, imageName: u, createNewRole: d, unlinkRole: c } = n,
            h = (function (e, t) {
                if (null == e) return {};
                var n,
                    i,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            i,
                            r = {},
                            l = Object.keys(e);
                        for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(n, ['priceTier', 'imageName', 'createNewRole', 'unlinkRole']);
        try {
            return (
                await i.tn.patch({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    body:
                        ((l = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, h)),
                        (s = {
                            image_name: u,
                            price_tier: a,
                            create_new_role: d,
                            unlink_role: c
                        }),
                        (s = null != s ? s : {}),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        l),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    a = async (e, t) => {
        try {
            await i.tn.del({
                url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                rejectWithError: !1
            });
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    u = async (e) => {
        try {
            return (
                await (0, l.Kb)({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e),
                    rejectWithError: !1
                })
            ).body.listings;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    d = async (e, t) => {
        try {
            return (
                await (0, l.Kb)({
                    url: o.ANM.GUILD_PRODUCT_LISTINGS(e, t),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    },
    c = async (e) => {
        let { guildId: t, productId: n, attachmentId: l } = e;
        try {
            return (
                await i.tn.post({
                    url: o.ANM.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(t, n, l),
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new r.Hx(e);
        }
    };
