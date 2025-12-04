n.d(t, { Z: () => l });
var r = n(54381),
    i = n(84615),
    a = n(626135),
    o = n(765457),
    s = n(981631);
function l(e) {
    a.default.track(s.rMx.CHECKPOINT_STARTED, { source: e }),
        (0, i.q4)(
            (e) => {
                let { closeLayer: t } = e;
                return (0, r.jsx)(o.Z, { onClose: t });
            },
            {
                disableAnimation: !0,
                showAppUnderLayer: !0,
            },
        );
}
