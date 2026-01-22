n.d(t, {
    default: () => d,
});
var r = n(627968);
n(64700);
var o = n(31717),
    l = n(203982),
    i = n(453771),
    c = n(518960),
    a = n(87719),
    u = n(244975),
    s = n(788868),
    p = n(652215),
    f = n(985018),
    b = n(736975);

function d(e) {
    let { channel: t, onClose: n, content: d } = e,
        y = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++)
                    (r = n[o]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    (r = n[o]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["channel", "onClose", "content"]);

    function g() {
        n(), (0, a.Z)();
    }
    return (0, r.jsx)(
        u.A,
        (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                artURL: b.A,
                type: s.e.MESSAGE_LENGTH_UPSELL,
                title: f.intl.string(f.t.TZT3sJ),
                body: f.intl.format(f.t.QhcEAL, {
                    maxLength: p.uvi,
                    onLearnMore: g,
                }),
                context: f.intl.formatToPlainString(f.t.Fc1uVe, {
                    maxLength: p.uvi,
                }),
                glowUp: f.intl.format(f.t.Mi8kt1, {
                    onLearnMore: g,
                }),
                analyticsSource: {
                    page:
                        (null == t ? void 0 : t.getGuildId()) != null
                            ? p.liQ.GUILD_CHANNEL
                            : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate())
                              ? p.liQ.DM_CHANNEL
                              : null,
                },
                analyticsLocation: {
                    section: p.JJy.MESSAGE_LENGTH_UPSELL_MODAL,
                    object: p.ZSU.BUTTON_CTA,
                },
                onClose: n,
                secondaryCTA: f.intl.string(f.t.Fnsb1t),
                onSecondaryClick: function () {
                    n();
                    let e = new Blob([d], {
                        type: "text/plain",
                    });
                    (0, c.R)([(0, i.VE)(e, "message.txt", "text/plain")], t, o.C.ChannelMessage, {
                        requireConfirm: !0,
                    }),
                        l._.dispatchToLastSubscribed(p.jej.CLEAR_TEXT);
                },
            },
            y,
        ),
    );
}
