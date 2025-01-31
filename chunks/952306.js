n.d(t, { Z: () => a });
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(723359),
    l = n(231338);
let a = {
    openNewUserAgeGateModal: (e) => {
        (0, s.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('63288'), n.e('1337'), n.e('51127')]).then(n.bind(n, 298237));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            {
                modalKey: r.$$,
                onCloseRequest: l.dG,
                onCloseCallback: e
            }
        );
    },
    openClaimAccountModal: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
        (0, s.ZDy)(
            async () => {
                let { default: t } = await n.e('60827').then(n.bind(n, 324239));
                return (n) =>
                    (0, i.jsx)(t, {
                        claimRequired: e,
                        ...n
                    });
            },
            {
                onCloseRequest: e ? l.dG : null,
                onCloseCallback: t
            }
        );
    }
};
