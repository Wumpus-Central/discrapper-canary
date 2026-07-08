i.d(t, { CrossDocumentDataMatch: () => r });
var n = i(248702),
    a = i(899656),
    c = i(458741),
    e = i(443781),
    h = i(868282),
    o = i(189036),
    d = ({ onFinish: s }) => {
        let [t, i] = (0, a.o)(() => (0, o.w)());
        return (
            (0, n._)(() => {
                i.load();
            }, [i]),
            (0, n._)(() => {
                "finished" === t.status && s?.();
            }, [t.status, s]),
            (0, n.v)(e.t, { fullScreen: !0 })
        );
    },
    r = ({ onFinish: s }) => (0, n.v)(c.t, { children: (0, n.v)(d, { onFinish: s }) });
(0, h.t)(r, "incode-cross-document-data-match");
