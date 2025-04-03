n.d(t, { Z: () => o });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(723359),
    a = n(231338);
function l(e) {
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
}
let o = {
    openNewUserAgeGateModal: (e) => {
        (0, i.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('63288'), n.e('1337'), n.e('7729')]).then(n.bind(n, 298237));
                return (t) => (0, r.jsx)(e, l({}, t));
            },
            {
                modalKey: s.$$,
                onCloseRequest: a.dG,
                onCloseCallback: e
            }
        );
    },
    openClaimAccountModal: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
        (0, i.ZDy)(
            async () => {
                let { default: t } = await n.e('60827').then(n.bind(n, 324239));
                return (n) => (0, r.jsx)(t, l({ claimRequired: e }, n));
            },
            {
                onCloseRequest: e ? a.dG : null,
                onCloseCallback: t
            }
        );
    }
};
