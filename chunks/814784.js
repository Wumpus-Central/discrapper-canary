s.r(a);
var c = s(768611),
    e = s(200503),
    r = s(628926),
    d = s(538553),
    n = s(918676),
    i = s(136966),
    u = ({ onFinish: t }) => {
        let [a, s] = (0, e.u)(() => (0, i.createCrossDocumentDataMatchManager)());
        return (
            (0, c._)(() => {
                s.load();
            }, [s]),
            (0, e.c)({ status: "finished" === a.status ? "finished" : "loading", onFinish: t }),
            (0, c.v)(d.t, { fullScreen: !0 })
        );
    },
    h = ({ onFinish: t }) => (0, c.v)(r.t, { children: (0, c.v)(u, { onFinish: t }) });
((0, n.t)(h, "incode-cross-document-data-match"), s.d(a, {}, { CrossDocumentDataMatch: h }));
