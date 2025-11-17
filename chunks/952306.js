n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(723359),
    o = n(231338);
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
function l(e) {
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
let c = {
    openNewUserAgeGateModal: (e) => {
        (0, i.ZDy)(
            async () => {
                let { default: e } = await n.e("76323").then(n.bind(n, 298237));
                return (t) => (0, r.jsx)(e, l({}, t));
            },
            {
                modalKey: a.$$,
                onCloseRequest: o.dG,
                onCloseCallback: e,
            },
        );
    },
    openClaimAccountModal: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
        (0, i.ZDy)(
            async () => {
                let { default: t } = await n.e("60827").then(n.bind(n, 324239));
                return (n) => (0, r.jsx)(t, l({ claimRequired: e }, n));
            },
            {
                onCloseRequest: e ? o.dG : null,
                onCloseCallback: t,
            },
        );
    },
};
