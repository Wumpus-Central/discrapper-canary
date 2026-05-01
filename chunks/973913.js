n.d(t, { p: () => c });
var r = n(35086),
    i = n(688331),
    o = n(272469),
    a = n(871186),
    s = n(607423),
    l = n(804524);
let c = (0, i._C)(() => ({
    name: "BrowserSession",
    setupOnce() {
        if (void 0 === l.jf.document) {
            s.T && o.vF.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
            return;
        }
        (0, a.J0)({ ignoreDuration: !0 }),
            (0, a.J5)(),
            (0, r._)(({ from: e, to: t }) => {
                void 0 !== e && e !== t && ((0, a.J0)({ ignoreDuration: !0 }), (0, a.J5)());
            });
    },
}));
