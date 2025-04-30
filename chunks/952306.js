n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(723359),
    l = n(231338);
function a(e) {
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
}
let o = {
    openNewUserAgeGateModal: (e) => {
        (0, r.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('4181'), n.e('1337'), n.e('7729')]).then(n.bind(n, 298237));
                return (t) => (0, i.jsx)(e, a({}, t));
            },
            {
                modalKey: s.$$,
                onCloseRequest: l.dG,
                onCloseCallback: e
            }
        );
    },
    openClaimAccountModal: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
        (0, r.ZDy)(
            async () => {
                let { default: t } = await n.e('60827').then(n.bind(n, 324239));
                return (n) => (0, i.jsx)(t, a({ claimRequired: e }, n));
            },
            {
                onCloseRequest: e ? l.dG : null,
                onCloseCallback: t
            }
        );
    }
};
